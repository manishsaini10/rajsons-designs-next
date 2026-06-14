import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services",
  description: "Professional SEO services by RajSonsDesigns in Yamunanagar. Improve your website ranking with our expert search engine optimization strategies.",
  keywords: ["seo services", "search engine optimization", "seo company yamunanagar", "seo services yamunanagar", "website ranking"],
  openGraph: { title: "SEO Services", description: "Professional SEO services by RajSonsDesigns in Yamunanagar." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/seo-services.html" },
  twitter: { title: "SEO Services", description: "Professional SEO services by RajSonsDesigns in Yamunanagar." },
};

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
