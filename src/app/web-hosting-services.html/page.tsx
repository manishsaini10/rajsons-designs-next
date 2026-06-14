"use client";

import { motion } from "framer-motion";
import { hostingContent, hostingPlans, hostingCredentials } from "@/lib/site-data";
import PricingTable from "@/components/PricingTable";
import Sidebar from "@/components/Sidebar";
import { Server, Shield, HeadphonesIcon, Lock, Activity, Monitor } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

const credIcons = [Server, Activity, HeadphonesIcon, Lock, Shield, Monitor];

export default function HostingPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Web Hosting Services</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">Web Hosting</span>
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
                {hostingContent.intro}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <PricingTable plans={hostingPlans} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-[#1e3a5f] mt-12 mb-8"
              >
                Why Choose Our Hosting?
              </motion.h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {hostingCredentials.map((cred, i) => {
                  const Icon = credIcons[i] || Shield;
                  return (
                    <motion.div
                      key={cred.title}
                      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f7941e]/20"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7941e] to-[#e5840e] shadow-lg transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1e3a5f] mb-2">{cred.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{cred.description}</p>
                    </motion.div>
                  );
                })}
              </div>
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
