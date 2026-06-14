import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages",
  description: "Explore RajSonsDesigns' affordable web design and development packages. Choose the perfect plan for your business website needs in Yamunanagar.",
  keywords: ["web design packages", "website packages", "web development pricing", "affordable web packages", "website design cost"],
  openGraph: { title: "Packages", description: "Explore affordable web design and development packages from RajSonsDesigns." },
  twitter: { title: "Packages", description: "Explore affordable web design and development packages from RajSonsDesigns." },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
