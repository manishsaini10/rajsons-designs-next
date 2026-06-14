"use client";

import { motion } from "framer-motion";
import { webDesignServicesContent, webDesignServicePlans } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";
import { Sparkles } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

export default function WebDesignServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/images/services.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Web Design Services</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">Web Design Services</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <motion.p variants={fadeUp} custom={0} className="text-lg leading-relaxed text-gray-700 font-medium">{webDesignServicesContent.intro}</motion.p>
                {webDesignServicesContent.paragraphs.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} custom={i + 1} className="mt-5 text-base leading-relaxed text-gray-600">{p}</motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <PricingTable plans={webDesignServicePlans} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="mt-8 rounded-2xl bg-gradient-to-br from-[#f7941e]/5 via-white to-[#1e3a5f]/5 p-8 border border-[#f7941e]/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7941e] to-[#e5840e] shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">{webDesignServicesContent.outsourcing}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{webDesignServicesContent.outsourcingText}</p>
                  </div>
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

