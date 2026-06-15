import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School ERP Software",
  description:
    "School ERP software by RajSons Designs in Yamunanagar. Student management, attendance, fee collection, timetable & report card system for schools and educational institutes.",
  keywords: [
    "school ERP software",
    "school management system",
    "student management software",
    "attendance management system",
    "fee management software",
    "school software in Yamunanagar",
  ],
  openGraph: {
    title: "School ERP Software – RajSons Designs",
    description:
      "Complete school ERP with student management, attendance tracking, fee collection, timetable & exam management system.",
  },
  alternates: {
    canonical: "https://www.rajsonsdesigns.com/school-erp-software.html",
  },
  twitter: {
    title: "School ERP Software – RajSons Designs",
    description:
      "Complete school ERP with student management, attendance tracking, fee collection, timetable & exam management system.",
  },
};

export default function SchoolErpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
