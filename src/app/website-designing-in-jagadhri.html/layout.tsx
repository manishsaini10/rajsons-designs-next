import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Designing in Jagadhri",
  description: "Professional website designing company in Jagadhri. RajSonsDesigns offers affordable web design, development, and digital marketing services in Jagadhri, Yamunanagar.",
  keywords: ["website designing in jagadhri", "web design company jagadhri", "website development jagadhri", "web designers in jagadhri", "digital marketing jagadhri"],
  openGraph: { title: "Website Designing in Jagadhri", description: "Professional website designing company in Jagadhri by RajSonsDesigns." },
  twitter: { title: "Website Designing in Jagadhri", description: "Professional website designing company in Jagadhri by RajSonsDesigns." },
};

export default function JagadhriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
