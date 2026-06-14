import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services",
  description: "Professional web design services by RajSonsDesigns in Yamunanagar. Creative, responsive, and affordable website design solutions for your business.",
  keywords: ["web design services", "website design company", "responsive web design", "affordable web design", "web designers yamunanagar"],
  openGraph: { title: "Web Design Services", description: "Professional web design services by RajSonsDesigns in Yamunanagar." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/web-design-services-2.html" },
  twitter: { title: "Web Design Services", description: "Professional web design services by RajSonsDesigns in Yamunanagar." },
};

export default function WebDesignServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
