"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Check, HelpCircle, MapPin, Laptop, UserCheck, DollarSign, HeadphonesIcon, ShieldCheck, Zap, RefreshCw, Clock, HeartHandshake, PieChart, TrendingUp } from "lucide-react";

export const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

export const fadeIn = { hidden: { opacity: 0, scale: 0.9 }, visible: (i: number = 0) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.5 } }) };

export interface IndustryColors {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
  accent: string;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
}

export const industryColors: Record<string, IndustryColors> = {
  pharmacy:  { primary: "#0D9488", secondary: "#14B8A6", light: "#CCFBF1", dark: "#042F2E", accent: "#2DD4BF", gradient: "from-teal-600 to-emerald-700", gradientFrom: "#0D9488", gradientTo: "#047857" },
  hospital:  { primary: "#0284C7", secondary: "#38BDF8", light: "#E0F2FE", dark: "#0C4A6E", accent: "#7DD3FC", gradient: "from-sky-600 to-blue-700", gradientFrom: "#0284C7", gradientTo: "#1D4ED8" },
  jewellery: { primary: "#D97706", secondary: "#F59E0B", light: "#FEF3C7", dark: "#78350F", accent: "#FBBF24", gradient: "from-amber-600 to-yellow-700", gradientFrom: "#D97706", gradientTo: "#B45309" },
  textile:   { primary: "#7C3AED", secondary: "#A78BFA", light: "#EDE9FE", dark: "#3B0764", accent: "#C4B5FD", gradient: "from-violet-600 to-purple-700", gradientFrom: "#7C3AED", gradientTo: "#6D28D9" },
  construction: { primary: "#EA580C", secondary: "#F97316", light: "#FFF7ED", dark: "#431407", accent: "#FB923C", gradient: "from-orange-600 to-amber-700", gradientFrom: "#EA580C", gradientTo: "#B45309" },
  travel:    { primary: "#0891B2", secondary: "#22D3EE", light: "#CFFAFE", dark: "#164E63", accent: "#67E8F9", gradient: "from-cyan-600 to-teal-700", gradientFrom: "#0891B2", gradientTo: "#0F766E" },
  vehicle:   { primary: "#DC2626", secondary: "#EF4444", light: "#FEE2E2", dark: "#7F1D1D", accent: "#F87171", gradient: "from-red-600 to-rose-700", gradientFrom: "#DC2626", gradientTo: "#BE123C" },
  printing:  { primary: "#0891B2", secondary: "#06B6D4", light: "#CFFAFE", dark: "#164E63", accent: "#22D3EE", gradient: "from-cyan-600 to-sky-700", gradientFrom: "#0891B2", gradientTo: "#0369A1" },
  coaching:  { primary: "#EA580C", secondary: "#F97316", light: "#FFF7ED", dark: "#431407", accent: "#FDBA74", gradient: "from-orange-500 to-red-600", gradientFrom: "#EA580C", gradientTo: "#DC2626" },
  diagnostic:{ primary: "#7C3AED", secondary: "#8B5CF6", light: "#F5F3FF", dark: "#3B0764", accent: "#A78BFA", gradient: "from-purple-600 to-violet-700", gradientFrom: "#7C3AED", gradientTo: "#6D28D9" },
  clinic:    { primary: "#059669", secondary: "#34D399", light: "#D1FAE5", dark: "#064E3B", accent: "#6EE7B7", gradient: "from-emerald-600 to-green-700", gradientFrom: "#059669", gradientTo: "#047857" },
  laundry:   { primary: "#6366F1", secondary: "#818CF8", light: "#E0E7FF", dark: "#312E81", accent: "#A5B4FC", gradient: "from-indigo-600 to-blue-700", gradientFrom: "#6366F1", gradientTo: "#1D4ED8" },
  timber:    { primary: "#8B5CF6", secondary: "#A78BFA", light: "#F5F3FF", dark: "#4C1D95", accent: "#C4B5FD", gradient: "from-violet-600 to-indigo-700", gradientFrom: "#7C3AED", gradientTo: "#4338CA" },
  "garment-store": { primary: "#EC4899", secondary: "#F472B6", light: "#FCE7F3", dark: "#831843", accent: "#F9A8D4", gradient: "from-pink-600 to-rose-700", gradientFrom: "#EC4899", gradientTo: "#BE123C" },
  legal:     { primary: "#1D4ED8", secondary: "#3B82F6", light: "#DBEAFE", dark: "#1E3A5F", accent: "#60A5FA", gradient: "from-blue-700 to-indigo-800", gradientFrom: "#1D4ED8", gradientTo: "#3730A3" },
  hotel:     { primary: "#D97706", secondary: "#F59E0B", light: "#FEF3C7", dark: "#451A03", accent: "#FCD34D", gradient: "from-amber-600 to-orange-700", gradientFrom: "#D97706", gradientTo: "#C2410C" },
  restaurant:{ primary: "#DC2626", secondary: "#F97316", light: "#FFF7ED", dark: "#7F1D1D", accent: "#FDBA74", gradient: "from-red-600 to-orange-700", gradientFrom: "#DC2626", gradientTo: "#C2410C" },
  school:    { primary: "#0284C7", secondary: "#0EA5E9", light: "#E0F2FE", dark: "#0C4A6E", accent: "#38BDF8", gradient: "from-sky-600 to-blue-700", gradientFrom: "#0284C7", gradientTo: "#1D4ED8" },
  "garment-mfg": { primary: "#7C3AED", secondary: "#A78BFA", light: "#EDE9FE", dark: "#3B0764", accent: "#C4B5FD", gradient: "from-violet-600 to-purple-700", gradientFrom: "#7C3AED", gradientTo: "#6D28D9" },
};

export function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0); const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true });
  useEffect(() => { if (!inView) return; let startTime: number; const animate = (ts: number) => { if (!startTime) startTime = ts; const progress = Math.min((ts - startTime) / duration, 1); setCount(Math.floor(progress * end)); if (progress < 1) requestAnimationFrame(animate); }; requestAnimationFrame(animate); }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export function ErpHero({
  title, breadcrumb, image, colors, stats,
}: {
  title: string; breadcrumb: { label: string; href?: string }[]; image: string; colors: IndustryColors;
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          priority 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f36]/95 via-[#0f1f36]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f36]/60 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full opacity-10"
            style={{ background: colors.primary, width: 60 + i * 40, height: 60 + i * 40, left: `${10 + i * 15}%`, top: `${20 + i * 12}%` }}
            animate={{ y: [0, -30, 0], x: [0, i % 2 === 0 ? 15 : -15, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
        <motion.div initial="hidden" animate="visible">
          <motion.p variants={fadeUp} custom={0} className="mb-2 text-sm text-gray-400">
            {breadcrumb.map((b, i) => (
              <span key={i}>{i > 0 && <span className="mx-2 text-gray-600">/</span>}
                {b.href ? <a href={b.href} className="text-[#f7941e] hover:text-[#e5840e] transition-colors">{b.label}</a>
                : <span className="text-gray-300">{b.label}</span>}
              </span>
            ))}
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {title.split(" ").map((w, i, a) =>
              i === a.length - 1 ? <span key={i} style={{ color: colors.primary }} className="inline-block">{w}</span>
              : <span key={i}>{w} </span>
            )}
          </motion.h1>
          <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-wrap gap-4">
            <Link href="/request-quote.html" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, boxShadow: `0 8px 32px ${colors.primary}33` }}>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Request Demo <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/contact-us.html" className="group inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderColor: `${colors.primary}66` }}>
              <Phone size={16} /> Contact Us
            </Link>
          </motion.div>
        </motion.div>
        {stats && (
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="backdrop-blur-sm rounded-2xl border border-white/10 p-5 text-center" style={{ background: `${colors.dark}40` }}>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>{s.value}</div>
                <div className="mt-1 text-xs text-gray-400 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function DescriptionSection({ title, paragraphs, colors }: { title: string; paragraphs: string[]; colors: IndustryColors }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ background: `radial-gradient(circle at 30% 50%, ${colors.primary}, transparent 60%)` }} />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold text-center" style={{ color: colors.dark }}>{title}</motion.h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
          {paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} custom={i + 1} className={`text-base leading-relaxed ${i === 0 ? "mt-8 text-lg font-medium" : "mt-5"} text-gray-700`}>{p}</motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ChallengesSection({ challenges, colors, industry }: { challenges: { icon: any; title: string; desc: string }[]; colors: IndustryColors; industry: string }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(circle at 30% 50%, ${colors.primary}, transparent 60%)` }} />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4" style={{ background: `${colors.light}`, color: colors.primary }}>Pain Points</span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold" style={{ color: colors.dark }}>Challenges Faced by the {industry} Industry</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-4 max-w-3xl mx-auto text-base text-gray-600">Without a robust ERP system, these operational hurdles can hamper growth and efficiency.</motion.p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeIn} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ borderColor: `${colors.primary}20`, background: `linear-gradient(135deg, white, ${colors.light}60)` }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${colors.primary}08, transparent)` }} />
                <div className="relative z-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold transition-colors" style={{ color: colors.dark }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection({ features, colors, industry }: { features: { icon: any; title: string; desc: string }[]; colors: IndustryColors; industry: string }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `${colors.light}40` }} />
      <div className="absolute inset-0 opacity-[0.02]" style={{ background: `radial-gradient(circle at 70% 30%, ${colors.secondary}, transparent 50%)` }} />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4" style={{ background: colors.light, color: colors.primary }}>Features</span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold" style={{ color: colors.dark }}>Key Features of Our {industry} ERP Software</motion.h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeIn} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ borderColor: `${colors.primary}15`, background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-base font-bold transition-colors group-hover:text-[#f7941e]" style={{ color: colors.dark }}>{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection({ benefits, colors, industry }: { benefits: { icon: any; title: string; desc: string }[]; colors: IndustryColors; industry: string }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ background: `radial-gradient(circle at 50% 50%, ${colors.primary}, transparent 60%)` }} />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4" style={{ background: colors.light, color: colors.primary }}>Benefits</span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold" style={{ color: colors.dark }}>Benefits of ERP for Your {industry} Business</motion.h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="group flex items-start gap-5 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: `${colors.primary}15`, background: "white" }}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${colors.light}` }}>
                  <Icon className="h-7 w-7 transition-colors" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold" style={{ color: colors.dark }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyRajsonsSection({ items, colors }: { items: { icon: any; title: string; desc: string }[]; colors: IndustryColors }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors.dark}, #0f1f36)` }} />
      <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.04]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full" style={{ background: colors.primary, width: 100 + i * 80, height: 100 + i * 80, left: `${5 + i * 25}%`, top: `${10 + i * 20}%`, opacity: 0.03 }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }} transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4" style={{ background: `${colors.primary}30`, color: colors.primary }}>Why RajSons</span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold text-white">Why Choose RajSons Designs?</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-4 max-w-3xl mx-auto text-base text-gray-300">A trusted technology partner based in Yamunanagar, Haryana, delivering ERP solutions that truly work.</motion.p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="group rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${colors.primary}30`, background: `${colors.primary}08` }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${colors.primary}25` }}>
                  <Icon className="h-6 w-6 transition-colors" style={{ color: colors.primary }} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ steps, colors }: { steps: { step: string; title: string; desc: string }[]; colors: IndustryColors }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ background: `radial-gradient(circle at 30% 70%, ${colors.primary}, transparent 50%)` }} />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4" style={{ background: colors.light, color: colors.primary }}>Process</span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold" style={{ color: colors.dark }}>Our ERP Implementation Process</motion.h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
        </motion.div>
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-8 top-12 bottom-12 w-px hidden lg:block" style={{ background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary}, transparent)` }} />
          {steps.map((step, i) => (
            <motion.div key={step.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="group relative rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: `${colors.primary}15` }}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                {step.step}
              </div>
              <h3 className="mb-2 text-lg font-bold" style={{ color: colors.dark }}>{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqData, colors }: { faqData: { q: string; a: string }[]; colors: IndustryColors }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `${colors.light}40` }} />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4" style={{ background: colors.light, color: colors.primary }}>FAQ</span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold" style={{ color: colors.dark }}>Frequently Asked Questions</motion.h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-3xl space-y-3">
          {faqData.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <motion.div key={i} variants={fadeUp} custom={i} className="rounded-2xl border shadow-sm transition-all hover:shadow-md" style={{ borderColor: `${colors.primary}15`, background: "white" }}>
                <button onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-bold transition-colors hover:text-[#f7941e]" style={{ color: colors.dark }}>
                  <span>{faq.q}</span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white text-sm font-bold transition-all" style={{ background: isOpen ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` : `${colors.primary}15`, color: isOpen ? "white" : colors.primary }}>
                    {isOpen ? "−" : "+"}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function CtaSection({ colors, industry }: { colors: IndustryColors; industry: string }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors.dark}, #0f1f36)` }} />
      <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.05]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full" style={{ background: colors.primary, width: 50 + i * 60, height: 50 + i * 60, right: `${10 + i * 20}%`, bottom: `${10 + i * 15}%`, opacity: 0.05 }}
            animate={{ y: [0, -20, 0], rotate: [0, 30, 0] }} transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your {industry} Operations?</h2>
          <p className="mt-4 text-base text-gray-300 max-w-2xl mx-auto">Get in touch for a free demo and consultation. Let us help streamline your business with the right ERP solution.</p>
          <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/request-quote.html" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, boxShadow: `0 8px 32px ${colors.primary}33` }}>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Request Free Demo <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/contact-us.html" className="group inline-flex items-center gap-2 rounded-xl border px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: `${colors.primary}66`, background: `${colors.primary}15` }}>
              <Phone size={16} /> Talk to Our Team
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const defaultWhyRajsons = [
  { icon: MapPin, title: "Customized for Indian Businesses", desc: "Our ERP is designed keeping Indian businesses in mind, with local compliance, currency, and language support built right in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large businesses in India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your business data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

export const defaultProcessSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your operations, pain points, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your business type, size, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate third-party tools as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing business data is securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic reviews." },
];
