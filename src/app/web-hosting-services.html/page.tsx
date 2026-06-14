import type { Metadata } from "next";
import Link from "next/link";
import { hostingContent, hostingPlans, hostingCredentials } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Web Hosting Services",
  description: "Experience a stable shared hosting environment with RajSons Designs web hosting services India.",
  keywords: ["web hosting services", "linux hosting", "hosting india", "shared hosting", "website hosting"],
};

export default function HostingPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Web Hosting Services</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Web Hosting Services
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">{hostingContent.intro}</p>

            <PricingTable plans={hostingPlans} />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hostingCredentials.map((cred, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <h3 className="mb-2 text-sm font-bold text-[#1e3a5f]">{cred.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-600">{cred.description}</p>
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
