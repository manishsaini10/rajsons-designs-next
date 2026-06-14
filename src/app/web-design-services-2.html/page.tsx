import type { Metadata } from "next";
import Link from "next/link";
import { webDesignServicesContent, webDesignServicePlans } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Web Design Services",
  description: "Are you looking for professional Website Designers & Developers in Yamunanagar? We are here to provide you web design firm services at affordable prices.",
  keywords: ["web design services", "website designers yamunanagar", "affordable web development", "web design firm", "website design packages"],
};

export default function WebDesignServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Web Design Services</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Web Design Services
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">{webDesignServicesContent.intro}</p>
            {webDesignServicesContent.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-gray-700">{p}</p>
            ))}

            <PricingTable plans={webDesignServicePlans} />

            <div className="mt-8 rounded-xl bg-gradient-to-r from-[#f7941e]/10 to-[#1e3a5f]/10 p-6">
              <h2 className="text-xl font-bold text-[#1e3a5f]">{webDesignServicesContent.outsourcing}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{webDesignServicesContent.outsourcingText}</p>
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
