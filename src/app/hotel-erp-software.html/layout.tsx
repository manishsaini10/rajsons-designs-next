import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel ERP Software",
  description:
    "Hotel ERP software by RajSons Designs in Yamunanagar. Property management, booking system, billing & housekeeping automation for hotels, resorts & hospitality businesses.",
  keywords: [
    "hotel ERP software",
    "hotel management software",
    "property management system",
    "hotel booking management software",
    "hospitality ERP solution",
    "hotel software in Yamunanagar",
  ],
  openGraph: {
    title: "Hotel ERP Software – RajSons Designs",
    description:
      "Complete hotel ERP software with PMS, booking engine, billing, inventory & housekeeping management for hospitality businesses.",
  },
  alternates: {
    canonical: "https://www.rajsonsdesigns.com/hotel-erp-software.html",
  },
  twitter: {
    title: "Hotel ERP Software – RajSons Designs",
    description:
      "Complete hotel ERP software with PMS, booking engine, billing, inventory & housekeeping management.",
  },
};

export default function HotelErpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
