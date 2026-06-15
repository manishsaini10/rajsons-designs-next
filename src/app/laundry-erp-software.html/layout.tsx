import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry ERP Software",
  description: "Laundry ERP software by RajSons Designs. Garment tagging, per-piece billing, pickup & delivery tracking, order history for laundry & dry cleaning.",
  keywords: ["laundry ERP software", "laundry management system", "dry cleaning software", "garment tracking software", "laundry billing software"],
  openGraph: { title: "Laundry ERP Software – RajSons Designs", description: "Complete laundry ERP with garment tagging, per-piece billing, pickup & delivery tracking." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/laundry-erp-software.html" },
  twitter: { title: "Laundry ERP Software – RajSons Designs", description: "Complete laundry ERP with garment tracking & per-piece billing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }