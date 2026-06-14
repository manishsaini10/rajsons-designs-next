"use client";

import { motion } from "framer-motion";
import { servicesContent } from "@/lib/site-data";
import { Code2, ShoppingCart, Layout, Globe } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

const platformIcons: Record<string, any> = {
  "Open cart": ShoppingCart,
  "Magento": Globe,
  "Joomla": Layout,
  "WordPress": Code2,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full border border-[#f7941e]/10 animate-pulse" style={{ animationDuration: '10s' }} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Services</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">Services</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <motion.p variants={fadeUp} custom={0} className="text-lg leading-relaxed text-gray-700 font-medium">{servicesContent.intro}</motion.p>
                {servicesContent.paragraphs.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} custom={i + 1} className="mt-5 text-base leading-relaxed text-gray-600">{p}</motion.p>
                ))}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 text-2xl font-bold text-[#1e3a5f] mb-8"
              >
                Open Source Customization Platforms
              </motion.h2>

              <div className="grid gap-6 md:grid-cols-2">
                {servicesContent.platforms.map((platform, i) => {
                  const Icon = platformIcons[platform.name] || Code2;
                  return (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f7941e]/20"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-[#f7941e] group-hover:to-[#e5840e]">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 transition-colors duration-300 group-hover:text-[#f7941e]">{platform.heading}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{platform.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <Sidebar />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
