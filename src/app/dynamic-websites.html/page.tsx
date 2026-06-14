import type { Metadata } from "next";
import Link from "next/link";
import { dynamicWebsiteContent, dynamicWebsitePlans } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dynamic Websites",
  description: "All packages include award-winning content management system (CMS). Contact RajSonsDesigns.com an affordable web design company for affordable custom web design packages.",
  keywords: ["dynamic websites", "cms websites", "dynamic web design", "content management system", "affordable web design"],
};

export default function DynamicWebsitesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Dynamic Websites</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Dynamic Websites
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">{dynamicWebsiteContent.intro}</p>

            <PricingTable plans={dynamicWebsitePlans} />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
