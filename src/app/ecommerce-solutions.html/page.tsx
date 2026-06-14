import type { Metadata } from "next";
import Link from "next/link";
import { ecommerceContent, ecommercePlans, ecommerceCommonFeatures } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "eCommerce Solutions",
  description: "RajSons Designs as an eCommerce website development company helps your business to transfer your online visitors to your customers.",
  keywords: ["ecommerce solutions", "shopping cart development", "ecommerce website design", "online store development", "ecommerce company india"],
};

export default function EcommercePage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">eCommerce Solutions</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; eCommerce Solutions
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-[#1e3a5f]">Shopping Cart Development</h2>
            <p className="text-base leading-relaxed text-gray-700">{ecommerceContent.intro}</p>

            <ul className="mt-4 space-y-2">
              {ecommerceContent.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 text-[#f7941e]">&#10003;</span>
                  {b}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-[#1e3a5f]">eCommerce Website Design Plans</h3>
            <PricingTable plans={ecommercePlans} note={ecommerceContent.note} />

            <h3 className="mt-8 text-xl font-bold text-[#1e3a5f]">eCommerce Website Design Common Features</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {ecommerceCommonFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 shrink-0 text-[#f7941e]">&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
