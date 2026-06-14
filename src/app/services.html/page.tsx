import type { Metadata } from "next";
import Link from "next/link";
import { servicesContent } from "@/lib/site-data";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Services",
  description: "Hire RajSons Website design company services to get professional web design sites that not just attract the visitors but also match with your brand image and reputation.",
  keywords: ["web design services", "open source customization", "magento development", "wordpress development", "joomla development", "opencart development"],
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Services</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Services
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">{servicesContent.intro}</p>
            {servicesContent.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-gray-700">{p}</p>
            ))}

            <h2 className="mt-8 text-xl font-bold text-[#1e3a5f]">We cover almost all kind of Open Source Customization</h2>

            {servicesContent.platforms.map((platform) => (
              <div key={platform.name} className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#1e3a5f]">{platform.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{platform.description}</p>
              </div>
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
