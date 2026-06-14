import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages Details",
  description: "Detailed information about RajSonsDesigns web design and development packages. Compare plans and choose the best option for your business.",
  keywords: ["packages details", "web design packages details", "website plans", "web development packages", "website design packages comparison"],
  openGraph: { title: "Packages Details", description: "Detailed information about RajSonsDesigns web design and development packages." },
  twitter: { title: "Packages Details", description: "Detailed information about RajSonsDesigns web design and development packages." },
};

export default function PackagesDetailsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
