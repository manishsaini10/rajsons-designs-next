import type { Metadata } from "next";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "RajSons Designs portfolio - We are currently updating our website. The client portfolio will be available soon.",
  keywords: ["web design portfolio", "website development portfolio", "rajsons designs portfolio"],
};

export default function PortfolioPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Portfolio</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Portfolio
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex min-h-[200px] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
              <p className="text-center text-lg text-gray-500">We are currently updating our website. The client portfolio will be available soon.</p>
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
