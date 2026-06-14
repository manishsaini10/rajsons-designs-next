import type { Metadata } from "next";
import Link from "next/link";
import { seoContent } from "@/lib/site-data";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "SEO Services",
  description: "RajSonsDesigns.com offers quality Search Engine Optimization / SEO Services and Internet Marketing Solutions. Guaranteed Top 10 search engine ranking on Google, Yahoo and MSN.",
  keywords: ["seo services", "search engine optimization", "internet marketing", "guaranteed seo", "seo company india", "white hat seo"],
};

export default function SEOPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">SEO Services</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; SEO Services
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">{seoContent.intro}</p>
            {seoContent.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-gray-700">{p}</p>
            ))}
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
