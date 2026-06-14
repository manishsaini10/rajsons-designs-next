"use client";

import { blogPosts } from "@/lib/site-data";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";
import { Calendar, FolderOpen, ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">What do YOU call your blog?</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">What do YOU call your blog?</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#f7941e]/20"
                  id={post.slug}
                >
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><FolderOpen size={12} /> {post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#f7941e] transition-colors">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f7941e] transition-all duration-300 hover:gap-3"
                  >
                    Read more <ArrowRight size={14} />
                  </a>
                </motion.article>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">About This Sidebar</h3>
                <p className="text-sm text-gray-600">To edit this sidebar, go to admin backend&rsquo;s Appearance -&gt; Widgets and place widgets into the BlogSidebar Widget Area</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Client Testimonials</h3>
                <p className="text-sm text-gray-600 italic">&ldquo;We are very pleased with your attractive website development services and fast process&rdquo;</p>
                <p className="mt-2 text-sm font-semibold text-[#f7941e]">- Lafaa Holiday</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Our Packages</h3>
                <ul className="space-y-2 text-sm">
                  {["Affordable Static Websites", "Web Design Services", "eCommerce Solutions", "Web Hosting Services", "SEO Services"].map((s) => (
                    <li key={s}>
                      <a href={`/${s.toLowerCase().replace(/\s+/g, "-")}.html`} className="text-[#f7941e] hover:underline">{s}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
