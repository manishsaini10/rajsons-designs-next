import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact RajSonsDesigns for web design, development, SEO, and digital marketing services in Yamunanagar. Call +91-8813951000 or email info@rajsonsdesigns.com.",
  keywords: ["contact rajsonsdesigns", "web design company yamunanagar contact", "website development company yamunanagar phone", "digital marketing company jagadhri"],
  openGraph: { title: "Contact Us", description: "Get in touch with RajSonsDesigns for web design and development services." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/contact-us.html" },
  twitter: { title: "Contact Us", description: "Get in touch with RajSonsDesigns for web design and development services." },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
