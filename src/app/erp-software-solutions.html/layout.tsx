import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Software Solutions",
  description:
    "RajSons Designs offers ERP software solutions in Yamunanagar, Haryana, Punjab, Himachal, UP, Uttarakhand & Rajasthan. Get hotel, restaurant, school & garment ERP systems.",
  keywords: [
    "ERP software solutions",
    "ERP software in Yamunanagar",
    "ERP development company",
    "hotel ERP software",
    "restaurant ERP software",
    "school ERP software",
    "garment ERP software",
    "business management software",
  ],
  openGraph: {
    title: "ERP Software Solutions – RajSons Designs",
    description:
      "Comprehensive ERP software solutions for hotels, restaurants, schools & garment industries. Custom ERP development with modern technology.",
  },
  alternates: {
    canonical: "https://www.rajsonsdesigns.com/erp-software-solutions.html",
  },
  twitter: {
    title: "ERP Software Solutions – RajSons Designs",
    description:
      "Comprehensive ERP software solutions for hotels, restaurants, schools & garment industries.",
  },
};

export default function ErpHubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
