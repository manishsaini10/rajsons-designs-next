import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinic ERP Software",
  description: "Clinic ERP software by RajSons Designs. Token queue, digital prescriptions, OPD billing, patient history & WhatsApp reports for doctors.",
  keywords: ["clinic ERP software", "doctor clinic software", "OPD management software", "clinic billing software", "digital prescription software"],
  openGraph: { title: "Clinic ERP Software – RajSons Designs", description: "Complete clinic ERP with token queue, digital prescriptions, OPD billing & patient history management." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/clinic-erp-software.html" },
  twitter: { title: "Clinic ERP Software – RajSons Designs", description: "Complete clinic ERP with token queue, digital prescriptions & OPD billing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }