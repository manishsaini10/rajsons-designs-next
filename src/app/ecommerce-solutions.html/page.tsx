"use client";

import { motion } from "framer-motion";
import { ecommerceContent, ecommercePlans, ecommerceCommonFeatures } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";
import { ShoppingCart, Check } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

export default function EcommercePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/images/slide-rev-bg1.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold text-white md:text-5xl lg:text-6xl">eCommerce Solutions</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">eCommerce Solutions</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7941e] to-[#e5840e] shadow-lg">
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f]">Shopping Cart Development</h2>
                </motion.div>
                <motion.p variants={fadeUp} custom={1} className="text-lg text-gray-700 leading-relaxed">{ecommerceContent.intro}</motion.p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mt-6 grid gap-3 sm:grid-cols-2 mb-10"
              >
                {ecommerceContent.bullets.map((b, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i} className="flex items-start gap-3 rounded-xl bg-gradient-to-r from-[#f7941e]/5 to-transparent p-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f7941e]/10">
                      <Check className="h-3.5 w-3.5 text-[#f7941e]" />
                    </div>
                    <p className="text-sm text-gray-600">{b}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">eCommerce Website Design Plans</h3>
                <PricingTable plans={ecommercePlans} note={ecommerceContent.note} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Common Features</h3>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-100">
                  {ecommerceCommonFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 group hover:text-[#f7941e] transition-colors">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f]/10 group-hover:bg-[#f7941e]/20 transition-colors">
                        <Check className="h-3 w-3 text-[#1e3a5f] group-hover:text-[#f7941e]" />
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
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

