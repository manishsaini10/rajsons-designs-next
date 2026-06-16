"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Check, ArrowRight, Star, Quote,
  Monitor, Smartphone, Code, Search, ShoppingCart, Server, Globe,
  Phone, Minus, Plus,
} from "lucide-react";
import { homeSliderSlides, whyChooseUs, siteConfig } from "@/lib/site-data";
import AnimatedCounter from "@/components/AnimatedCounter";

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % homeSliderSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + homeSliderSlides.length) % homeSliderSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = homeSliderSlides[current];

  const bgImages = ["slide-rev-bg1.jpg", "website-design-services-bg.jpg", "website-design-services-bg.jpg", "slide-rev-bg1.jpg"];

  return (
    <section className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] md:min-h-[520px] lg:min-h-[600px]" role="region" aria-label="Hero Slider" aria-roledescription="carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={`/images/${bgImages[current]}`}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f36]/95 via-[#1a3355]/85 to-[#0f1f36]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="flex w-full items-center gap-10"
          >
            <div className="max-w-2xl shrink-0">
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#f7941e]/30 bg-[#f7941e]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#f7941e] backdrop-blur-sm mb-3 sm:px-4 sm:py-1 sm:text-[11px] sm:tracking-[0.15em] sm:mb-4 md:px-5 md:py-1.5 md:text-xs md:tracking-[0.2em] md:mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#f7941e] animate-pulse" />
                {slide.title}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
                className="mb-2 text-lg font-bold leading-tight text-white sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl sm:mb-3 md:mb-4"
              >
                {slide.subtitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
                className="mb-4 max-w-xl text-[11px] leading-relaxed text-gray-300 sm:text-xs md:text-sm lg:text-base sm:mb-6 md:mb-8"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {slide.cta1 && (
                  <Link href={slide.cta1.href} className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-4 py-2 text-[11px] font-bold text-white shadow-lg shadow-[#f7941e]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-xs md:px-8 md:py-3.5 md:text-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    {slide.cta1.label}
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[14px] md:size-4" />
                  </Link>
                )}
                {slide.cta2 && (
                  <Link href={slide.cta2.href} className="group inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-4 py-2 text-[11px] font-bold text-white transition-all duration-300 hover:border-[#f7941e]/50 hover:bg-[#f7941e]/10 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-xs md:px-8 md:py-3.5 md:text-sm">
                    {slide.cta2.label}
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[14px] md:size-4" />
                  </Link>
                )}
              </motion.div>
            </div>
            {slide.image && (
              <motion.div
                initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="hidden lg:flex flex-1 items-center justify-center"
              >
                <Image 
                  src={`/images/${slide.image}`} 
                  alt={slide.title} 
                  width={400} 
                  height={400} 
                  className="h-auto max-h-[400px] w-full max-w-[400px] object-contain drop-shadow-2xl" 
                  priority
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={prev} className="absolute left-1 sm:left-3 md:left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#f7941e] hover:scale-110 sm:p-2 md:p-3" aria-label="Previous slide">
        <ChevronLeft size={12} className="sm:size-4 md:size-5" />
      </button>
      <button onClick={next} className="absolute right-1 sm:right-3 md:right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#f7941e] hover:scale-110 sm:p-2 md:p-3" aria-label="Next slide">
        <ChevronRight size={12} className="sm:size-4 md:size-5" />
      </button>
      <div className="absolute bottom-3 sm:bottom-5 md:bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:gap-2 md:gap-3">
        {homeSliderSlides.map((_, i) => (
          <button
            key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${i === current ? "w-12 bg-[#f7941e] shadow-lg shadow-[#f7941e]/50" : "w-2.5 bg-white/30 hover:bg-white/60"}`}
            style={{ height: "10px" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

const serviceTabs = [
  {
    id: "web-design",
    label: "Website Designing",
    icon: Monitor,
    image: "/images/web-design-services.png",
    content: "We Create Visually compelling and user-friendly website designs that elevate your brand and drive engagement. Our design approach focuses on clarity, usability, and aesthetics, ensuring your audience enjoys a seamless browsing experience on every device.",
    features: ["UI/UX Website Design", "Responsive Layouts", "Corporate & Business Website Design", "E-commerce Store Design", "Landing Page Design", "Website Redesign & Revamp", "Custom Theme Design"],
    extra: "Our creative team makes sure your design is attractive, purposeful, and built to convert.",
  },
  {
    id: "web-dev",
    label: "Website Development",
    icon: Code,
    image: "/images/website-development-company.png",
    content: "RajSons Designs is a well-known Web Development Company, specialized in building modern, secure, and responsive websites tailored to every business needs with perfection. Whether you need a corporate site, eCommerce platform, custom CRM, or a dynamic web application, we craft future-ready, fast, and scalable solutions.",
    features: ["WordPress Development", "Custom PHP Development", "E-commerce Website Development", "ERP & Web Applications", "CMS Development", "Frontend & Backend Solutions", "API Integrations"],
    extra: "With 3500+ successful projects delivered globally, our development team ensures a seamless balance of design and performance.",
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    icon: Smartphone,
    image: "/images/advert.jpg",
    content: "From mobile websites, responsive website design and complex mobile apps, our team can do it all! Over 70% of searches online are done on a mobile device. Mobile applications offer the best way for small business owners to reach customers.",
    features: ["Responsive Mobile Sites", "Android App Development", "iOS App Development", "Cross-Platform Apps", "App UI/UX Design", "App Maintenance"],
    extra: "",
  },
  {
    id: "seo",
    label: "SEO Services",
    icon: Search,
    image: "/images/services.jpg",
    content: "RajSons Designs is recognized as a trusted SEO Company, helping businesses achieve their potential with high search engine rankings, enhancing online visibility, and consistent organic growth.",
    features: ["On-page Optimization", "Off-page SEO & High-authority Link Building", "Technical SEO", "Local SEO", "Content Optimization & Keyword Strategy", "SEO Audits & Monthly Reporting"],
    extra: "Our goal is simple — to bring more customers to your business through powerful and ethical SEO practices.",
  },
];

const serviceCards = [
  {
    icon: Monitor, title: "Website Designing",
    desc: "Offering creative, mobile-friendly, and conversion-focused web designs tailored to your business needs.",
    img: "/images/web-design-services.png",
    searches: [
      ["Web Designing Company Yamunanagar", "/web-design-services-2.html"],
      ["Web Designing Company in Jagadhri", "/website-designing-in-jagadhri.html"],
    ],
    link: "/web-design-services-2.html", color: "from-blue-600 to-blue-700",
  },
  {
    icon: Code, title: "Website Development",
    desc: "Professional Website Development solutions focused on performance, functionality, and a seamless user experience.",
    img: "/images/website-development-company.png",
    searches: [
      ["Web Development Company Yamunanagar", "/dynamic-websites.html"],
      ["Dynamic Website Development", "/dynamic-websites.html"],
    ],
    link: "/dynamic-websites.html", color: "from-orange-500 to-orange-600",
  },
  {
    icon: Search, title: "SEO Services",
    desc: "Professional SEO Services that boost your website's visibility, improve rankings, and drive targeted organic traffic.",
    img: "/images/services.jpg",
    searches: [
      ["SEO Company Yamunanagar", "/seo-services.html"],
      ["SEO Services India", "/seo-services.html"],
    ],
    link: "/seo-services.html", color: "from-red-500 to-red-600",
  },
  {
    icon: ShoppingCart, title: "eCommerce Solutions",
    desc: "Powerful online stores that transform visitors into buyers. Easy to manage, deliver more revenues.",
    img: "/images/advert.jpg",
    searches: [
      ["eCommerce Development Yamunanagar", "/ecommerce-solutions.html"],
      ["Online Store Development", "/ecommerce-solutions.html"],
    ],
    link: "/ecommerce-solutions.html", color: "from-green-600 to-green-700",
  },
  {
    icon: Server, title: "Web Hosting",
    desc: "Fast and secure Web Hosting Services that ensure your website stays online, loads quickly, and performs reliably.",
    img: "",
    searches: [
      ["Web Hosting Yamunanagar", "/web-hosting-services.html"],
      ["Domain Registration", "/web-hosting-services.html"],
    ],
    link: "/web-hosting-services.html", color: "from-purple-600 to-purple-700",
  },
  {
    icon: Globe, title: "Dynamic Websites",
    desc: "Custom dynamic websites with content management systems that allow you to update your content in real-time.",
    img: "",
    searches: [
      ["Dynamic Website Design", "/dynamic-websites.html"],
      ["CMS Development", "/dynamic-websites.html"],
    ],
    link: "/dynamic-websites.html", color: "from-cyan-600 to-cyan-700",
  },
];

const testimonials = [
  { text: "We are very pleased with your attractive website development services and fast process", author: "Lafaa Holiday", role: "Happy Client" },
  { text: "RajSons Designs provided us with an excellent website that perfectly represents our brand. Highly professional team!", author: "Manoj Sharma", role: "Business Owner" },
  { text: "Great web design company. They understood our requirements and delivered beyond expectations.", author: "S. Singh", role: "CEO" },
];

const faqData = [
  { q: "What services does RajSons Designs offer?", a: "We provide complete digital solutions including web design, web development, eCommerce solutions, SEO services, web hosting, and content management systems." },
  { q: "How long does it take to develop a website?", a: "The timeline depends on the type and complexity of the website. A standard business website may take 1-3 weeks, while custom or advanced platforms may take longer. We always share a timeline before starting." },
  { q: "Do you offer custom website development or only templates?", a: "Yes, we specialize in custom development. Every website is designed and built according to your goals, branding, and unique business requirements." },
  { q: "Will my website be mobile friendly?", a: "Absolutely. Every website we develop is fully responsive, meaning it works seamlessly on all devices — mobile, tablet, and desktop." },
  { q: "Do you provide SEO services along with development?", a: "Yes, we provide complete SEO services including on-page, off-page, technical SEO, keyword research, and ongoing optimization." },
  { q: "Do you offer maintenance and support after project completion?", a: "Yes, we provide ongoing support, regular updates, security checks, backups, and maintenance to ensure your website remains secure and high-performing." },
];

const techIcons = ["/images/php.png", "/images/mysql.png", "/images/cpanel.png"];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("web-design");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <HeroSlider />

      {/* Intro Section 1 — Digital 360 Company */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center"
          >
            <h1 className="text-3xl font-bold text-[#1e3a5f] md:text-4xl mb-6">
              Professional Website Designing Company Yamunanagar – One-Stop Digital Solutions
            </h1>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>RajSons Designs</strong> is a leading <strong><a href="/web-design-services-2.html" className="text-[#f7941e] hover:underline">Website Designing Company in Yamunanagar</a></strong> helping new and old businesses while delivering end-to-end digital services that empower brands to grow, perform, and dominate their industries from the top and achieve their maximum capacity. Having over <strong>15+ years of experience</strong>, we offer a complete pack of solutions including <strong><a href="/web-design-services-2.html" className="text-[#f7941e] hover:underline">Website Designing</a></strong>, <a href="/seo-services.html" className="text-[#f7941e] hover:underline"><strong>SEO</strong></a>, <strong><a href="/dynamic-websites.html" className="text-[#f7941e] hover:underline">Web Development</a></strong>, and <strong><a href="/ecommerce-solutions.html" className="text-[#f7941e] hover:underline">eCommerce Solutions</a></strong> all under one roof.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              RajSons Designs is a leading web designing company in Yamunanagar, specializing in custom website design, dynamic web applications, e-commerce solutions, and SEO-friendly digital experiences that help businesses grow online. Our team blends creativity, technology, and strategic planning to deliver websites that not only look impressive but also deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section 2 — Web Development Company */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] md:text-4xl mb-6">
                Website Development Company Yamunanagar
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                <strong>Best Web Development Company in Yamunanagar</strong> — In today&apos;s digital world, having a professional website is essential for every business. A well-designed website not only represents your brand but also helps you connect with potential customers and grow your business online. RajSons Designs offers reliable and innovative web development services tailored to meet the needs of modern businesses.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                RajSons Designs is a trusted web development company providing high-quality website design and development services to businesses of all sizes. With years of experience in the digital industry, we help companies build strong online platforms that enhance their brand image and generate business growth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                <strong>Professional Website Design and Development Services</strong> — At RajSons Designs, we provide a wide range of web development services to help businesses establish a powerful digital presence. Our goal is to create websites that are not only visually appealing but also functional, fast, and secure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image src="/images/website-development-company.png" alt="Website Development Company" width={600} height={400} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/30 to-transparent" />
              </div>
              <div className="mt-4 flex items-center gap-3">
                {techIcons.map((src) => (
                  <Image key={src} src={src} alt="tech" width={60} height={40} className="h-10 w-auto rounded-lg bg-white p-1.5 shadow-sm" />
                ))}
                <span className="text-xs text-gray-500 ml-2">+ More technologies</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Tabs Section */}
      <section className="relative bg-[#f8f9fa] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/line-bg.png')] bg-repeat opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] md:text-4xl">Our Services – Complete Digital Solutions for Your Business</h2>
            <p className="mt-4 max-w-4xl mx-auto text-base text-gray-700">
              Looking for a professional and affordable <strong>website designing company in Yamunanagar</strong>? RajSons Designs is a trusted name for creative, responsive, and result-driven web design services. We help businesses build strong online identities with modern, SEO-friendly websites.
            </p>
            <p className="mt-3 max-w-4xl mx-auto text-base text-gray-700">
              From websites and mobile apps to branding and full-scale digital solutions, we offer everything your business needs under one roof.
            </p>
          </motion.div>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {serviceTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center gap-3 rounded-xl px-5 py-4 text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] text-white shadow-lg shadow-[#1e3a5f]/20 scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#f7941e]/30 hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                    activeTab === tab.id ? "bg-[#f7941e]/20" : "bg-[#1e3a5f]/10"
                  }`}>
                    <Icon size={20} className={activeTab === tab.id ? "text-white" : "text-[#1e3a5f]"} />
                  </div>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {serviceTabs.map((tab) => {
              if (tab.id !== activeTab) return null;
              const Icon = tab.icon;
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="grid gap-10 lg:grid-cols-2 items-center bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                      {tab.id === "web-design" ? "Website Designing – Modern, Engaging & Conversion-Oriented Designs" : ""}
                      {tab.id === "web-dev" ? "Web Development – Powerful Websites Built for Performance" : ""}
                      {tab.id === "mobile" ? "Mobile App Development – 100% Responsive Websites and Apps" : ""}
                      {tab.id === "seo" ? "SEO – Drive Traffic, Rankings & Real Results" : ""}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">{tab.content}</p>
                    <h4 className="font-bold text-[#1e3a5f] mb-3"><span className="text-[#f7941e]">Our {tab.label.toLowerCase()} expertise includes:</span></h4>
                    <ul className="space-y-2 mb-6">
                      {tab.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                          <span className="text-[#f7941e]">&#171;</span> <strong>{f}</strong>
                        </li>
                      ))}
                    </ul>
                    {tab.extra && <p className="text-sm text-gray-700">{tab.extra}</p>}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-[#f7941e]/5 to-[#1e3a5f]/5">
                      <Image 
                        src={tab.image} 
                        alt={tab.label} 
                        width={280} 
                        height={280} 
                        className="h-auto w-full max-w-[280px] object-contain p-4" 
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Looking For A Professional Company — CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover max-lg:bg-scroll bg-fixed bg-center opacity-[0.07]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa]/50 to-white" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] md:text-4xl mb-3">Looking For a Professional Company</h2>
            <h3 className="text-xl text-gray-700 mb-6">We are committed to your success, call us now <a href={`tel:${siteConfig.phone}`} className="text-[#f7941e] font-bold hover:underline">{siteConfig.phone}</a></h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="/request-quote.html" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-4 font-bold text-white shadow-lg shadow-[#f7941e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Image src="/images/get-free-quote.gif" alt="" width={24} height={24} className="h-6 w-6" />
                Request a Quote
              </a>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-3 rounded-xl border-2 border-[#1e3a5f] px-8 py-4 font-bold text-[#1e3a5f] transition-all hover:bg-[#1e3a5f] hover:text-white">
                <Phone size={20} />
                {siteConfig.phone}
              </a>
            </div>
            <p className="mt-8 max-w-4xl mx-auto text-base text-gray-700">
              RajSons Designs always keeps its services up-to-date with the latest trends in the market, providing its customers all over the world with high-end and easily extensible internet, intranet and extranet products. Services we offer range from creating custom website designs to developing business applications of any complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards — 6 Colored Boxes */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className={`group h-full rounded-2xl bg-gradient-to-br ${s.color} p-8 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}>
                    {s.img && (
                      <div className="absolute right-0 top-0 h-32 w-32 translate-x-6 -translate-y-6 opacity-10">
                        <Image src={s.img} alt="" width={128} height={128} className="h-full w-full object-contain" />
                      </div>
                    )}
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <Icon size={30} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{s.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-white/80">{s.desc}</p>
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">People also search for:-</p>
                      <ul className="space-y-1 text-sm">
                        {s.searches.map(([label, href]) => (
                          <li key={label}>
                            <a href={href} className="text-white/90 hover:text-white transition-colors">&laquo; {label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={s.link} className="inline-flex items-center gap-1.5 text-sm font-bold text-white/90 hover:text-white transition-all">
                      <strong>+ Read More</strong>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats + Why Choose Us */}
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide-rev-bg1.jpg')] bg-cover bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(247,148,30,0.03),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">Reasons why we are the right choice for your online success</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14">
            {[
              { end: 1500, suffix: "+", label: "Clients Served" },
              { end: 100, suffix: "%", label: "Satisfaction Guaranteed" },
              { end: 3500, suffix: "+", label: "Completed Projects" },
              { end: 15, suffix: "+", label: "Years of Going" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm text-center transition-all hover:bg-white/[0.08] hover:border-[#f7941e]/30"
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">We Build Amazing Products</h3>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400 mb-6">
              <span>Startups</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f7941e]" />
              <span>High Growth</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f7941e]" />
              <span>Enterprises</span>
            </div>
            <Link href="/our-portfolio.html" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3 text-sm font-bold text-white transition-all hover:border-[#f7941e] hover:bg-[#f7941e]/10">
              See Our Work <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose RajSons Designs</h3>
              <ul className="space-y-3">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#f7941e]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.08]">
              <p className="text-3xl font-bold text-[#f7941e]">15+</p>
              <p className="text-sm text-white/70">Years of Experience in Website Development</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.08]">
              <p className="text-3xl font-bold text-[#f7941e]">3500+</p>
              <p className="text-sm text-white/70">Websites Developed Across Various Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] md:text-4xl">What our Customers are saying</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#f7941e] to-[#e5840e]" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Quote size={24} className="mb-4 text-[#f7941e]/20" />
                <p className="mb-6 text-sm leading-relaxed text-gray-700 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] text-xs font-bold text-white">
                    {t.author.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1e3a5f]">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f9fa] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#f7941e] to-[#e5840e]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-3"
          >
            {faqData.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-bold text-[#1e3a5f] transition-colors hover:text-[#f7941e]"
                  >
                    <span>{faq.q}</span>
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all ${isOpen ? "bg-[#f7941e] text-white" : "bg-[#1e3a5f]/10 text-[#1e3a5f]"}`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                    <p className="px-6 pb-5 text-sm leading-relaxed text-gray-700">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}  
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <Image 
            src="/images/website-design-services-bg.jpg" 
            alt="" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">
              <Image 
                src="/images/contact-us.gif" 
                alt="Contact Us" 
                width={64} 
                height={64} 
                className="h-16 w-16" 
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Become a part of our family</h2>
            <p className="mb-6 text-base text-gray-300">Speak to a Specialist</p>
            <a href={`tel:${siteConfig.phone}`} className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-[#f7941e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5">
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Phone size={20} />
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
