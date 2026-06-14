import type { Metadata } from "next";
import Link from "next/link";
import { dynamicWebsitePlans, ecommercePlans } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Packages Details",
  description: "Our web design packages are cost effective and suits all types of business needs. All packages include award-winning content management system (CMS).",
  keywords: ["packages details", "web design packages", "dynamic web design packages", "ecommerce development"],
};

export default function PackagesDetailsPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Packages Details</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Packages Details
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">Our web design packages are cost effective and suits all types of business needs. All packages include award-winning content management system (CMS), to enable you with the facilities of edit and delete the pages from the browser you used and from the based control panel for the comfort of your home. Below, we proudly present some of our website design packages developed for you:</p>

            <h2 className="mt-8 text-xl font-bold text-[#1e3a5f]">DYNAMIC WEB DESIGN PACKAGES</h2>
            <PricingTable plans={dynamicWebsitePlans} />

            <h2 className="mt-8 text-xl font-bold text-[#1e3a5f]">ECOMMERCE WEBSITE DEVELOPMENT</h2>
            <PricingTable plans={ecommercePlans} />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
