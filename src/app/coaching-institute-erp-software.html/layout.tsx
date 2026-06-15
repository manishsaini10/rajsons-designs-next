import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching Institute ERP Software",
  description: "Coaching institute ERP software by RajSons Designs. Batch management, fee collection, test results, attendance & parent communication.",
  keywords: ["coaching institute ERP software", "coaching management software", "tuition centre software", "batch management software", "student fee software"],
  openGraph: { title: "Coaching Institute ERP Software – RajSons Designs", description: "Complete coaching institute ERP with batch management, fee tracking, test results & attendance." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/coaching-institute-erp-software.html" },
  twitter: { title: "Coaching Institute ERP Software – RajSons Designs", description: "Complete coaching institute ERP with batch management & fee tracking." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }