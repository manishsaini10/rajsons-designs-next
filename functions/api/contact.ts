// Cloudflare Pages Function for contact form
// Deploy this file alongside the static export

interface ContactBody {
  name: string;
  email: string;
  mobile?: string;
  details: string;
  code?: string;
}

export async function onRequest(context: { request: Request; env: Record<string, string> }) {
  const { request } = context;

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body: ContactBody = await request.json();

    if (!body.name || !body.email || !body.details) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Spam check - simple math captcha
    if (body.code && body.code !== "8") {
      return new Response(JSON.stringify({ error: "Invalid verification code" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Send email via your preferred service (SendGrid, Mailgun, etc.)
    // For production, integrate with an email API
    console.log("Contact form submission:", body);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
