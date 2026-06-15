import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Agency ERP Software",
  description: "Travel agency ERP software by RajSons Designs. Tour packages, bookings, advance tracking, supplier costs & agent commission management.",
  keywords: ["travel agency ERP software", "tour management software", "travel booking software", "travel agent commission software", "tour package software"],
  openGraph: { title: "Travel Agency ERP Software – RajSons Designs", description: "Complete travel agency ERP with tour package booking, advance tracking, supplier costs & agent commissions." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/travel-agency-erp-software.html" },
  twitter: { title: "Travel Agency ERP Software – RajSons Designs", description: "Complete travel agency ERP with bookings, advance tracking & commissions." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }