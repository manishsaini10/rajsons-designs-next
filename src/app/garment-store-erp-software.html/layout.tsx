import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garment Store ERP Software",
  description: "Garment store ERP software by RajSons Designs. Size-colour variant inventory, barcode billing, alteration tracking & POS for clothing retailers.",
  keywords: ["garment store ERP software", "clothing store software", "retail ERP software", "barcode billing software", "alteration tracking software"],
  openGraph: { title: "Garment Store ERP Software – RajSons Designs", description: "Complete garment store ERP with variant inventory, barcode POS billing & alteration job management." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/garment-store-erp-software.html" },
  twitter: { title: "Garment Store ERP Software – RajSons Designs", description: "Complete garment store ERP with variant inventory & barcode POS billing." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }