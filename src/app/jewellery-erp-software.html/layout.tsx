import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewellery ERP Software",
  description: "Jewellery ERP software by RajSons Designs. Weight-based billing, HUID hallmarking, karigar job work, gold inventory & GST for jewellery shops.",
  keywords: ["jewellery ERP software", "jewellery shop management", "gold billing software", "jewellery inventory software", "karigar job work software"],
  openGraph: { title: "Jewellery ERP Software – RajSons Designs", description: "Complete jewellery ERP with weight-based billing, HUID tracking, karigar management & gold inventory." },
  alternates: { canonical: "https://www.rajsonsdesigns.com/jewellery-erp-software.html" },
  twitter: { title: "Jewellery ERP Software – RajSons Designs", description: "Complete jewellery ERP with weight-based billing, HUID tracking & karigar management." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }