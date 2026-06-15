import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant ERP Software",
  description:
    "Restaurant ERP software by RajSons Designs in Yamunanagar. POS billing, inventory management, table booking & kitchen display system for restaurants and food businesses.",
  keywords: [
    "restaurant ERP software",
    "restaurant management system",
    "POS software for restaurants",
    "restaurant inventory management software",
    "food business ERP",
    "restaurant software in Yamunanagar",
  ],
  openGraph: {
    title: "Restaurant ERP Software – RajSons Designs",
    description:
      "Complete restaurant ERP with POS billing, inventory tracking, table management & KDS for restaurants, cafes & food chains.",
  },
  alternates: {
    canonical: "https://www.rajsonsdesigns.com/restaurant-erp-software.html",
  },
  twitter: {
    title: "Restaurant ERP Software – RajSons Designs",
    description:
      "Complete restaurant ERP with POS billing, inventory tracking, table management & KDS.",
  },
};

export default function RestaurantErpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
