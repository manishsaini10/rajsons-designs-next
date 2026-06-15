import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Rental ERP Software",
  description: "Vehicle rental ERP software by RajSons Designs. Booking calendar, vehicle handover, deposit tracking, fleet maintenance & rental billing.",
  keywords: ["vehicle rental ERP software", "car rental software", "fleet management software", "vehicle booking software", "rental billing software"],
  openGraph: { title: "Vehicle Rental ERP Software – RajSons Designs", description: "Complete vehicle rental ERP with booking calendar, handover records, deposit tracking & fleet maintenance." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/vehicle-rental-erp-software.html" },
  twitter: { title: "Vehicle Rental ERP Software – RajSons Designs", description: "Complete vehicle rental ERP with booking calendar & fleet management." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }