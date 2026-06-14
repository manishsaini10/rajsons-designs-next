import type { Metadata } from "next";
import Link from "next/link";
import { aboutContent } from "@/lib/site-data";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "About Us",
  description: "RajSonsDesigns.com is a website development company based in Yamunanagar, Haryana, India that provides complete web designing and development under one roof, since our beginning back in 2009.",
  keywords: ["about rajsons designs", "web development company yamunanagar", "web design company india", "website development haryana"],
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">About Us</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; About Us
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-base leading-relaxed text-gray-700">{aboutContent.intro}</p>
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-gray-700">{p}</p>
              ))}

              <h2 className="mt-8 text-2xl font-bold text-[#1e3a5f]">{aboutContent.teamHeading}</h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">{aboutContent.teamText}</p>

              <h2 className="mt-8 text-2xl font-bold text-[#1e3a5f]">{aboutContent.whyUsHeading}</h2>
              {aboutContent.whyUsParagraphs.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-gray-700">{p}</p>
              ))}

              <h2 className="mt-8 text-2xl font-bold text-[#1e3a5f]">{aboutContent.differentHeading}</h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">{aboutContent.differentText}</p>

              <h2 className="mt-8 text-2xl font-bold text-[#1e3a5f]">{aboutContent.offerHeading}</h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">{aboutContent.offerText}</p>

              <h2 className="mt-8 text-2xl font-bold text-[#1e3a5f]">{aboutContent.commitmentHeading}</h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">{aboutContent.commitmentText}</p>

              <h2 className="mt-8 text-2xl font-bold text-[#1e3a5f]">{aboutContent.qualityHeading}</h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700">{aboutContent.qualityText}</p>

              <p className="mt-6 text-base font-semibold text-[#1e3a5f]">Thank you,</p>
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
