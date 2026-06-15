import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timber ERP Software",
  description: "Timber ERP software by RajSons Designs. CFT/RFT billing, lot management, party ledger, inventory tracking & delivery challans for timber yards.",
  keywords: ["timber ERP software", "wood management software", "timber yard software", "sawmill software", "CFT billing software"],
  openGraph: { title: "Timber ERP Software – RajSons Designs", description: "Complete timber ERP with CFT billing, lot management, party ledger & inventory tracking for wood traders." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/timber-erp-software.html" },
  twitter: { title: "Timber ERP Software – RajSons Designs", description: "Complete timber ERP with CFT billing, lot management & party ledger." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }