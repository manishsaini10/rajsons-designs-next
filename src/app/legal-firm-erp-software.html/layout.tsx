import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Firm ERP Software",
  description: "Legal firm ERP software by RajSons Designs. Case management, hearing calendar, document vault, matter-based billing & client management for law firms.",
  keywords: ["legal firm ERP software", "law firm management software", "case management software", "legal practice software", "advocate billing software"],
  openGraph: { title: "Legal Firm ERP Software – RajSons Designs", description: "Complete legal firm ERP with case management, hearing calendar, document vault & matter-based billing." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/legal-firm-erp-software.html" },
  twitter: { title: "Legal Firm ERP Software – RajSons Designs", description: "Complete legal firm ERP with case management, hearing calendar & billing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }