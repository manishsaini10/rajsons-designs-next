import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Lab ERP Software",
  description: "Diagnostic lab ERP software by RajSons Designs. Test booking, sample tracking, result entry, WhatsApp report delivery & referring doctor management.",
  keywords: ["diagnostic lab ERP software", "pathology lab software", "lab management system", "test report software", "LIS software"],
  openGraph: { title: "Diagnostic Lab ERP Software – RajSons Designs", description: "Complete diagnostic lab ERP with test booking, sample tracking, result entry & WhatsApp report delivery." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/diagnostic-lab-erp-software.html" },
  twitter: { title: "Diagnostic Lab ERP Software – RajSons Designs", description: "Complete diagnostic lab ERP with test booking & WhatsApp report delivery." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }