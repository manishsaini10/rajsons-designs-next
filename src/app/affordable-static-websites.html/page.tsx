import type { Metadata } from "next";
import Link from "next/link";
import { staticWebsiteContent, staticWebsitePlans } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Affordable Static Websites",
  description: "RajSonsDesigns.com a web design company, offering affordable web design services, we believe in giving the best quality at reasonable prices.",
  keywords: ["affordable static websites", "cheap website design", "static website packages", "budget website design", "affordable web design india"],
};

export default function StaticWebsitesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Affordable Static Websites</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Affordable Static Websites
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">{staticWebsiteContent.intro}</p>
            {staticWebsiteContent.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-gray-700">{p}</p>
            ))}

            <PricingTable plans={staticWebsitePlans} note={staticWebsiteContent.note} />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
