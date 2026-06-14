import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "eCommerce Solutions" },
  description: "Shopping Cart Development - RajSonsDesigns as an eCommerce website development company helps improve online sales performance with affordable shopping cart solutions.",
  keywords: ["ecommerce solutions", "shopping cart development", "ecommerce website development", "online store design", "ecommerce yamunanagar"],
  openGraph: { title: "eCommerce Solutions", description: "Shopping Cart Development by RajSonsDesigns - affordable eCommerce solutions." },
  twitter: { title: "eCommerce Solutions", description: "Shopping Cart Development by RajSonsDesigns - affordable eCommerce solutions." },
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
