"use client";

import { motion } from "framer-motion";
import { requestQuoteContent } from "@/lib/site-data";
import Sidebar from "@/components/Sidebar";
import { Send, FileText } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

export default function QuotePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const fields = ["name", "email", "company", "address", "mobile", "website", "requirements"];
    const values: Record<string, string> = {};
    fields.forEach(f => { values[f] = (data.get(f) as string) || ""; });
    window.location.href = `mailto:info@rajsonsdesigns.com?subject=Quote Request from ${values.name}&body=${fields.map(f => `${f}: ${values[f]}`).join("%0A")}`;
  };

  const inputClass = "mt-1 block w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm transition-all duration-300 focus:border-[#f7941e] focus:outline-none focus:ring-2 focus:ring-[#f7941e]/20 focus:bg-white hover:border-gray-300";

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Request Quote</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">Request Quote</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <motion.p variants={fadeUp} custom={0} className="text-lg text-gray-700 leading-relaxed">{requestQuoteContent.intro}</motion.p>
                <motion.p variants={fadeUp} custom={1} className="mt-3 text-base text-gray-600">{requestQuoteContent.detail}</motion.p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-5 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q_name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input id="q_name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="q_email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input id="q_email" name="email" type="email" required className={inputClass} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="q_company" className="block text-sm font-medium text-gray-700">Company:</label>
                    <input id="q_company" name="company" type="text" className={inputClass} placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="q_address" className="block text-sm font-medium text-gray-700">Address:</label>
                    <input id="q_address" name="address" type="text" className={inputClass} placeholder="Your address" />
                  </div>
                  <div>
                    <label htmlFor="q_mobile" className="block text-sm font-medium text-gray-700">Mobile No.:</label>
                    <input id="q_mobile" name="mobile" type="tel" className={inputClass} placeholder="+91-XXXXXXXXXX" />
                  </div>
                  <div>
                    <label htmlFor="q_website" className="block text-sm font-medium text-gray-700">Existing Website:</label>
                    <input id="q_website" name="website" type="url" className={inputClass} placeholder="https://" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Attach Specifications:</label>
                  <div className="mt-1 flex items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 p-4">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <input type="file" className="text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-[#1e3a5f] file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-[#2a4a70] transition-all" />
                  </div>
                  <p className="mt-1.5 text-xs text-gray-400">Acceptable: doc, docx, xls, xlsx, pdf, txt, jpg, png (max 10mb)</p>
                </div>

                <div>
                  <label htmlFor="q_requirements" className="block text-sm font-medium text-gray-700">Briefly state requirements:</label>
                  <textarea id="q_requirements" name="requirements" rows={5} className={`${inputClass} resize-none`} placeholder="Describe your project..." />
                </div>

                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-gray-700">Verification:</label>
                  <span className="rounded-xl bg-gray-100 px-4 py-3 text-sm font-mono font-bold select-none border border-gray-200">5 + 3 =</span>
                  <input type="text" required className="block w-24 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-2 focus:ring-[#f7941e]/20" />
                </div>

                <button type="submit" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-3.5 font-bold text-white shadow-lg shadow-[#f7941e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Send size={16} />
                  Send Quote Request
                </button>
              </motion.form>
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

