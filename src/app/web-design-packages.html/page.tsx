"use client";

import { motion } from "framer-motion";
import { dynamicWebsitePlans, ecommercePlans } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

function PackagesPageContent() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Packages</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">Packages</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 leading-relaxed mb-10"
              >
                Our web design packages are cost effective and suits all types of business needs. All packages include award-winning content management system (CMS), to enable you with the facilities of edit and delete the pages from the browser you used and from the based control panel for the comfort of your home. Below, we proudly present some of our website design packages developed for you:
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-[#1e3a5f] mb-6"
              >
                Dynamic Web Design Packages
              </motion.h2>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <PricingTable plans={dynamicWebsitePlans} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-[#1e3a5f] mt-12 mb-6"
              >
                eCommerce Website Development
              </motion.h2>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <PricingTable plans={ecommercePlans} />
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Sidebar />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PackagesPage() {
  return <PackagesPageContent />;
}
