import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Quote",
  description: "Request a free quote from RajSonsDesigns for web design, development, SEO, or digital marketing services. Get affordable pricing for your business website.",
  keywords: ["request quote", "free web design quote", "website development quote", "web design pricing", "get website quote"],
  openGraph: { title: "Request Quote", description: "Request a free quote from RajSonsDesigns for web services." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/request-quote.html" },
  twitter: { title: "Request Quote", description: "Request a free quote from RajSonsDesigns for web services." },
};

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
