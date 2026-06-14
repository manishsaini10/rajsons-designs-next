import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore RajSonsDesigns' complete range of web services: website design, development, SEO, eCommerce solutions, web hosting, and digital marketing in Yamunanagar.",
  keywords: ["web design services", "web development services", "seo services", "ecommerce solutions", "digital marketing services", "web hosting"],
  openGraph: { title: "Services", description: "Explore RajSonsDesigns' complete range of web services in Yamunanagar." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/services.html" },
  twitter: { title: "Services", description: "Explore RajSonsDesigns' complete range of web services in Yamunanagar." },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
