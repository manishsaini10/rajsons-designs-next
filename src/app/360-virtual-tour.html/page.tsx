"use client";

import { motion } from "framer-motion";
import { Camera, Globe, Smartphone, Check, ArrowRight, Eye, MapPin } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

const stateLocations = [
  { name: "Himachal Pradesh" },
  { name: "Uttar Pradesh" },
  { name: "Uttarakhand" },
  { name: "Rajasthan" },
];

const haryanaDistricts = [
  "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad",
  "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal",
  "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula",
  "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar",
];

const punjabDistricts = [
  "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib",
  "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar",
  "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Mohali",
  "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Sangrur",
  "Shaheed Bhagat Singh Nagar", "Tarn Taran",
];

const features = [
  {
    icon: Camera,
    title: "Professional 360° Photography",
    desc: "Capture every angle of your space with high-resolution 360° panoramic photography. Our professional equipment ensures stunning clarity and detail.",
  },
  {
    icon: Globe,
    title: "Google Business Profile Integration",
    desc: "Seamlessly publish your virtual tour directly to your Google Business Profile. Enable the 'See Inside' feature that helps customers explore your space before visiting.",
  },
  {
    icon: Smartphone,
    title: "Works on All Devices",
    desc: "Optimized for mobile, tablet, and desktop. Your virtual tour works smoothly across every platform with no app downloads required.",
  },
];

const benefits = [
  "Increase customer trust with transparent visual access to your space",
  "Boost walk-ins and bookings by letting customers experience your space remotely",
  "Stand out from competitors with an immersive Google Business Profile",
  "Reduce unnecessary inquiries by giving customers a realistic preview",
  "Enhance your online presence with interactive 360° content",
  "Drive more engagement and time spent on your business listing",
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1692525084492-1b66e54a65f3?auto=format&fit=crop&w=600&h=400", alt: "Hotel lobby with modern interior" },
  { src: "https://images.unsplash.com/photo-1613442334138-b457f03695c4?auto=format&fit=crop&w=600&h=400", alt: "Digital devices showing virtual tour" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&h=400", alt: "Modern living room interior" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&h=400", alt: "Elegant bedroom design" },
  { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&h=400", alt: "Modern office space" },
];

export default function VirtualTourPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold text-white md:text-5xl lg:text-6xl">360° Virtual Tour Services in Yamunanagar, Haryana</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">360° Virtual Tour</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-[#1e3a5f] mb-6">
              Turn Your Business Into a Virtual Experience
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-gray-700 leading-relaxed font-medium">
              Professional 360° Virtual Tours published directly to your Google Business Profile to increase trust, walk-ins &amp; sales.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="mt-5 text-base leading-relaxed text-gray-600">
              In today&apos;s digital world, customers want to explore your space before they visit. A 360° virtual tour gives them that ability — letting them walk through your business from anywhere, at any time. RajSons Designs, a leading website designing and development company in Yamunanagar, in partnership with leading 360° tour professionals, brings you immersive virtual experiences that transform how customers see your business across India.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="mt-5 text-base leading-relaxed text-gray-600">
              Whether you run a hotel, restaurant, salon, retail store, school, or clinic — a 360° virtual tour on your Google Business Profile helps you stand out, build trust, and drive more foot traffic. Customers can &ldquo;step inside&rdquo; before ever walking through your door. We provide 360 virtual tour services in Yamunanagar, Haryana, Punjab, Himachal, Uttar Pradesh, Uttarakhand, and Rajasthan.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} custom={i}
                className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f7941e]/20"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-[#f7941e] group-hover:to-[#e5840e]">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12"
          >
            <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-bold text-[#1e3a5f] mb-6">
              How It Works
            </motion.h3>
            <motion.div variants={fadeUp} custom={1} className="grid gap-6 sm:grid-cols-3">
              {[
                { step: "01", title: "Photography", desc: "Our team captures your space with professional 360° photography equipment, ensuring every angle is covered with stunning clarity." },
                { step: "02", title: "Integration", desc: "Your virtual tour is seamlessly connected to your Google Business Profile, optimized for both mobile and desktop viewing." },
                { step: "03", title: "Go Live", desc: "Your immersive 360° tour goes live on Google, allowing customers to explore your business before they even visit." },
              ].map((item) => (
                <div key={item.step} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                  <span className="text-5xl font-extrabold text-[#f7941e]/10 absolute top-3 right-4">{item.step}</span>
                  <h4 className="text-lg font-bold text-[#1e3a5f] mb-2 relative">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed relative">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-bold text-[#1e3a5f] mb-2">
              Live Demo – 360° Virtual Tour
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-gray-600 mb-6">
              Explore an interactive 360° virtual tour. Drag to look around, click to navigate between scenes.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://app.cloudpano.com/tours/t1LtFvj5DK"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                allow="gyroscope; accelerometer; xr-spatial-tracking"
                title="360° Virtual Tour Demo"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12 rounded-2xl bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] p-8 md:p-12"
          >
            <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-bold text-white mb-6">
              Why Your Business Needs a 360° Virtual Tour
            </motion.h3>
            <motion.ul variants={fadeUp} custom={1} className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#f7941e]" />
                  {b}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-bold text-[#1e3a5f] mb-4">
              360 Virtual Tour Services Across India
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-gray-600 mb-6">
              We provide professional 360 degree virtual tour services across all districts of Haryana and Punjab, plus major cities in Himachal Pradesh, Uttar Pradesh, Uttarakhand, and Rajasthan. Our expert team captures stunning panoramic views for hotels, schools, restaurants, retail stores, clinics, gyms, and more — helping your business appear on Google Street View and Google Business Profile.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mb-6">
              <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin size={14} className="text-[#f7941e]" /> Haryana — All Districts
              </h4>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {haryanaDistricts.map((d) => (
                  <div key={d} className="rounded-lg bg-gray-50 p-2.5 text-sm font-medium text-[#1e3a5f]">
                    {d}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="mb-6">
              <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin size={14} className="text-[#f7941e]" /> Punjab — All Districts
              </h4>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {punjabDistricts.map((d) => (
                  <div key={d} className="rounded-lg bg-gray-50 p-2.5 text-sm font-medium text-[#1e3a5f]">
                    {d}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={4}>
              <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin size={14} className="text-[#f7941e]" /> Other States
              </h4>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {stateLocations.map((loc) => (
                  <div key={loc.name} className="rounded-lg bg-gray-50 p-2.5 text-sm font-medium text-[#1e3a5f]">
                    {loc.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12"
          >
            <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-bold text-[#1e3a5f] mb-6">
              Our Gallery – 360° Virtual Tour Samples
            </motion.h3>
            <motion.div variants={fadeUp} custom={1} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                  <img src={img.src} alt={img.alt} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Eye size={48} className="mx-auto mb-4 text-[#f7941e]" />
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Ready to Give Your Customers a Virtual Experience?</h2>
            <p className="mb-6 text-base text-gray-300">Let your customers explore your space from anywhere — and watch your walk-ins grow.</p>
            <Link
              href="/contact-us.html"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-4 font-bold text-white shadow-lg shadow-[#f7941e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Get Started Today
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
