import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garment ERP Software",
  description:
    "Garment ERP software by RajSons Designs in Yamunanagar. Production planning, inventory tracking, order management & supply chain system for apparel and textile businesses.",
  keywords: [
    "garment ERP software",
    "apparel ERP solution",
    "textile management software",
    "garment manufacturing ERP",
    "fashion industry ERP",
    "garment software in Yamunanagar",
  ],
  openGraph: {
    title: "Garment ERP Software – RajSons Designs",
    description:
      "Complete garment ERP with production planning, fabric inventory, order tracking, cutting & stitching management for apparel industry.",
  },
  alternates: {
    canonical: "https://www.rajsonsdesigns.com/garment-erp-software.html",
  },
  twitter: {
    title: "Garment ERP Software – RajSons Designs",
    description:
      "Complete garment ERP with production planning, fabric inventory, order tracking, cutting & stitching management.",
  },
};

export default function GarmentErpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
