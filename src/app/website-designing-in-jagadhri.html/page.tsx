"use client";

import { jagadhriContent, blogPosts, sidebarLinks } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Search, Calendar, FolderOpen, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

function SidebarWidget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <h3 className="mb-4 text-base font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">{title}</h3>
      {children}
    </div>
  );
}

export default function JagadhriPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/images/services.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Website Designing in Jagadhri</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">Website Designing in Jagadhri</span>
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
                className="text-lg text-gray-700 leading-relaxed"
              >
                {jagadhriContent.intro}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Our Web Design Services in Jagadhri</h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  {["Custom Website Design", "E-commerce Solutions", "CMS Development", "SEO Services", "Website Maintenance", "Responsive Web Design"].map((service, i) => (
                    <li key={service} className="flex items-start gap-3">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#f7941e]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              <SidebarWidget title="Search">
                <div className="flex">
                  <input type="text" placeholder="Search for..." className="flex-1 rounded-l-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm transition-all focus:border-[#f7941e] focus:outline-none focus:ring-2 focus:ring-[#f7941e]/20 focus:bg-white" />
                  <button className="rounded-r-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-5 py-2.5 text-sm text-white transition-all hover:shadow-lg">
                    <Search size={16} />
                  </button>
                </div>
              </SidebarWidget>

              <SidebarWidget title="Recent Posts">
                <ul className="space-y-3 text-sm">
                  {blogPosts.map((post) => (
                    <li key={post.slug} className="flex items-start gap-2">
                      <FolderOpen size={14} className="mt-0.5 shrink-0 text-[#f7941e]" />
                      <Link href={`/blog.html#${post.slug}`} className="text-[#f7941e] hover:underline leading-tight">{post.title}</Link>
                    </li>
                  ))}
                </ul>
              </SidebarWidget>

              <SidebarWidget title="Archives">
                <ul className="space-y-2 text-sm text-gray-600">
                  {["May 2013", "April 2013"].map((m) => (
                    <li key={m}><a href="#" className="flex items-center gap-2 hover:text-[#f7941e] transition-colors"><Calendar size={14} /> {m}</a></li>
                  ))}
                </ul>
              </SidebarWidget>

              <SidebarWidget title="Categories">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="flex items-center gap-2 hover:text-[#f7941e] transition-colors"><FolderOpen size={14} /> Recent Projects</a></li>
                </ul>
              </SidebarWidget>

              <SidebarWidget title="Get in Touch">
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="shrink-0 text-[#f7941e]" />
                    <a href="tel:+91-8813951000" className="hover:text-[#f7941e] transition-colors">+91-8813951000</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="shrink-0 text-[#f7941e]" />
                    <a href="mailto:info@rajsonsdesigns.com" className="hover:text-[#f7941e] transition-colors">info@rajsonsdesigns.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-[#f7941e]" />
                    <span>Yamunanagar, Haryana, India</span>
                  </p>
                </div>
              </SidebarWidget>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

