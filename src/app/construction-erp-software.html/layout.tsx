import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction ERP Software",
  description: "Construction ERP software by RajSons Designs. Project management, material tracking, labour attendance, milestone billing & cost reports for contractors.",
  keywords: ["construction ERP software", "construction management software", "contractor ERP", "project management software", "material tracking software"],
  openGraph: { title: "Construction ERP Software – RajSons Designs", description: "Complete construction ERP with project management, material tracking, labour wages & milestone billing." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/construction-erp-software.html" },
  twitter: { title: "Construction ERP Software – RajSons Designs", description: "Complete construction ERP with project management, material tracking & billing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }