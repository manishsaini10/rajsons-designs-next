import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital ERP Software",
  description: "Hospital ERP software by RajSons Designs. OPD registration, IPD admission, bed management, lab orders, diet & billing for healthcare facilities.",
  keywords: ["hospital ERP software", "hospital management system", "healthcare ERP", "OPD management software", "IPD billing software"],
  openGraph: { title: "Hospital ERP Software – RajSons Designs", description: "Complete hospital ERP with OPD, IPD, bed management, lab integration & GST billing for hospitals & clinics." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/hospital-erp-software.html" },
  twitter: { title: "Hospital ERP Software – RajSons Designs", description: "Complete hospital ERP with OPD, IPD, bed management & billing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }