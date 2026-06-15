import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textile ERP Software",
  description: "Textile ERP software by RajSons Designs. Loom tracking, fabric roll inventory, yarn consumption, piece-rate payroll & GST billing for textile manufacturers.",
  keywords: ["textile ERP software", "textile manufacturing software", "fabric inventory software", "yarn management software", "loom tracking software"],
  openGraph: { title: "Textile ERP Software – RajSons Designs", description: "Complete textile ERP with loom tracking, fabric inventory, yarn consumption & piece-rate payroll." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/textile-erp-software.html" },
  twitter: { title: "Textile ERP Software – RajSons Designs", description: "Complete textile ERP with loom tracking, fabric roll inventory & payroll." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }