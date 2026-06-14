import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Hosting Services",
  description: "Reliable web hosting services by RajSonsDesigns. Affordable hosting plans with excellent uptime and support for your website in Yamunanagar.",
  keywords: ["web hosting services", "website hosting", "domain registration", "hosting plans", "web hosting yamunanagar"],
  openGraph: { title: "Web Hosting Services", description: "Reliable web hosting services by RajSonsDesigns in Yamunanagar." },
  twitter: { title: "Web Hosting Services", description: "Reliable web hosting services by RajSonsDesigns in Yamunanagar." },
};

export default function WebHostingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
