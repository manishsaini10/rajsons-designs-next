import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing Press ERP Software",
  description: "Printing press ERP software by RajSons Designs. Job order management, paper inventory, job costing, delivery challan & client billing.",
  keywords: ["printing press ERP software", "printing management software", "job order software", "printing job costing", "printing press billing"],
  openGraph: { title: "Printing Press ERP Software – RajSons Designs", description: "Complete printing press ERP with job order tracking, paper inventory, per-job costing & client billing." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/printing-press-erp-software.html" },
  twitter: { title: "Printing Press ERP Software – RajSons Designs", description: "Complete printing press ERP with job order tracking & costing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }