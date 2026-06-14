import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Websites",
  description: "Professional dynamic website development by RajSonsDesigns. Get feature-rich, database-driven websites with CMS integration for your business in Yamunanagar.",
  keywords: ["dynamic websites", "dynamic website development", "database driven website", "cms website", "dynamic web design", "php website development"],
  openGraph: { title: "Dynamic Websites", description: "Professional dynamic website development by RajSonsDesigns in Yamunanagar." },
  twitter: { title: "Dynamic Websites", description: "Professional dynamic website development by RajSonsDesigns in Yamunanagar." },
};

export default function DynamicWebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
