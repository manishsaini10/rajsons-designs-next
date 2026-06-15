"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { contactInfo } from "@/lib/site-data";
import Sidebar from "@/components/Sidebar";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const comment = data.get("comment") as string;
    if (!name || name.length < 2 || !email || !comment) { alert("Please fill all required fields."); return; }
    window.location.href = `mailto:info@rajsonsdesigns.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AComment: ${comment}`;
  };

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

  const inputClass = "mt-1 block w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm transition-all duration-300 focus:border-[#f7941e] focus:outline-none focus:ring-2 focus:ring-[#f7941e]/20 focus:bg-white hover:border-gray-300";

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="absolute top-10 right-20 h-64 w-64 rounded-full border border-[#f7941e]/10 animate-pulse" style={{ animationDuration: '10s' }} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <motion.h1 variants={item} className="text-3xl sm:text-4xl font-bold text-white md:text-5xl lg:text-6xl">Contact Us</motion.h1>
            <motion.p variants={item} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">Contact Us</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-[#1e3a5f] md:text-3xl mb-8"
              >
                Contact Us <span className="text-[#f7941e]">24/7</span>
              </motion.h2>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="grid gap-4 sm:grid-cols-2 mb-10">
                {[
                  { icon: MapPin, title: "Address:", text: [contactInfo.address, contactInfo.city] },
                  { icon: Phone, title: "Contact No.:", text: [`${contactInfo.phones[0]}, ${contactInfo.phones[1]}`], href: `tel:${contactInfo.phones[0]}` },
                  { icon: Mail, title: "Email:", text: [contactInfo.email], href: `mailto:${contactInfo.email}` },
                  { icon: Globe, title: "Website:", text: [contactInfo.website], href: contactInfo.website },
                ].map((card, i) => (
                  <motion.div key={card.title} variants={item} className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f7941e]/20">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7941e] to-[#e5840e] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <card.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1e3a5f] mb-1">{card.title}</h3>
                        {card.text.map((t, j) => (
                          <p key={j} className="text-sm text-gray-600">
                            {card.href ? <a href={card.href} className="text-[#f7941e] hover:text-[#e5840e] transition-colors">{t}</a> : t}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-5">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                      <input id="name" name="name" type="text" required minLength={2} className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                      <input id="email" name="email" type="email" required className={inputClass} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone <span className="text-gray-400">(optional)</span></label>
                    <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+91-XXXXXXXXXX" />
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                    <textarea id="comment" name="comment" required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-3.5 font-bold text-white shadow-lg shadow-[#f7941e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </motion.div>
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

