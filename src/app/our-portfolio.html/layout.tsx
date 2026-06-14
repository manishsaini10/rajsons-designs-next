import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View the portfolio of RajSonsDesigns. See our web design and development projects showcasing our expertise in creating stunning websites.",
  keywords: ["portfolio", "web design portfolio", "website development portfolio", "rajsonsdesigns portfolio", "web design projects"],
  openGraph: { title: "Portfolio", description: "View the portfolio of RajSonsDesigns web design and development projects." },
  twitter: { title: "Portfolio", description: "View the portfolio of RajSonsDesigns web design and development projects." },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
