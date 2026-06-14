import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Static Websites",
  description: "Get affordable static websites for your business in Yamunanagar. RajSonsDesigns offers cost-effective static web design solutions with professional quality.",
  keywords: ["affordable static websites", "static website design", "cheap website design", "static web development", "budget website yamunanagar"],
  openGraph: { title: "Affordable Static Websites", description: "Get affordable static websites from RajSonsDesigns in Yamunanagar." },
  twitter: { title: "Affordable Static Websites", description: "Get affordable static websites from RajSonsDesigns in Yamunanagar." },
};

export default function AffordableStaticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
