import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about RajSonsDesigns - a leading website designing and development company in Yamunanagar. We offer web design, SEO, eCommerce, and digital marketing services.",
  keywords: ["about rajsonsdesigns", "website design company yamunanagar", "web development company yamunanagar", "digital marketing company yamunanagar"],
  openGraph: { title: "About Us", description: "Learn about RajSonsDesigns - a leading website designing and development company in Yamunanagar." },
  twitter: { title: "About Us", description: "Learn about RajSonsDesigns - a leading website designing and development company in Yamunanagar." },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
