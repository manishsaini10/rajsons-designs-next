import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy ERP Software",
  description: "Pharmacy ERP software by RajSons Designs. Manage drug inventory, batch tracking, expiry alerts, GST billing & schedule drug compliance for medical stores.",
  keywords: ["pharmacy ERP software", "medical store software", "pharmacy management system", "drug inventory software", "pharmacy billing software"],
  openGraph: { title: "Pharmacy ERP Software – RajSons Designs", description: "Complete pharmacy ERP with drug inventory, batch expiry tracking, GST billing & schedule drug compliance." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/pharmacy-erp-software.html" },
  twitter: { title: "Pharmacy ERP Software – RajSons Designs", description: "Complete pharmacy ERP with drug inventory, batch expiry tracking & GST billing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }