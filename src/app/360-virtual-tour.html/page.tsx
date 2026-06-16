"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Camera, Globe, Smartphone, Check, ArrowRight, Eye, MapPin } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import VirtualTourHero from "@/components/VirtualTourHero";

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#f7941e] origin-left z-[60]"
        style={{ scaleX }}
      />

      <VirtualTourHero />

      <section className="py-20 md:py-32 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                  Turn Your Business Into a <span className="text-[#f7941e]">Virtual Experience</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Professional 360° Virtual Tours published directly to your Google Business Profile to increase trust, walk-ins & sales.
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>In today's digital world, customers want to explore your space before they visit. A 360° virtual tour gives them that ability — letting them walk through your business from anywhere, at any time.</p>
                  <p>RajSons Designs, a leading website designing and development company in Yamunanagar, brings you immersive virtual experiences that transform how customers see your business across India.</p>
                </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-[#f7941e]/20 to-[#1e3a5f]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                 <img 
                   src="https://images.unsplash.com/photo-1613442334138-b457f03695c4?auto=format&fit=crop&w=800&q=80" 
                   alt="Virtual Tour Experience" 
                   className="relative rounded-2xl shadow-2xl border border-white/50"
                 />
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} className="h-full">
                <div className="group h-full rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md p-8 text-center shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#f7941e]/10 transition-all duration-500 hover:-translate-y-2 border-transparent hover:border-[#f7941e]/30">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#f7941e] group-hover:to-[#e5840e]">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-24">
            <h3 className="text-3xl font-bold text-[#1e3a5f] mb-12 text-center">How It Works</h3>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { step: "01", title: "Photography", desc: "Our team captures your space with professional 360° photography equipment, ensuring every angle is covered with stunning clarity." },
                { step: "02", title: "Integration", desc: "Your virtual tour is seamlessly connected to your Google Business Profile, optimized for both mobile and desktop viewing." },
                { step: "03", title: "Go Live", desc: "Your immersive 360° tour goes live on Google, allowing customers to explore your business before they even visit." },
              ].map((item, i) => (
                <div key={item.step} className="group relative rounded-3xl border border-white/50 bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <span className="text-8xl font-black text-[#f7941e]/5 absolute -top-4 -right-4 group-hover:scale-110 transition-transform duration-500">{item.step}</span>
                  <div className="h-1 w-12 bg-[#f7941e] mb-6 rounded-full group-hover:w-20 transition-all duration-500" />
                  <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="demo" className="mt-24 scroll-mt-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Live Demo – 360° Virtual Tour</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Explore an interactive 360° virtual tour. Drag to look around, click to navigate between scenes.</p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-black p-1 backdrop-blur-sm border border-white/40" style={{ minHeight: "400px" }}>
              <iframe
                src="https://app.cloudpano.com/tours/t1LtFvj5DK"
                className="h-full w-full border-0"
                style={{ minHeight: "400px" }}
                allowFullScreen
                allow="fullscreen; gyroscope; accelerometer; magnetometer; xr-spatial-tracking"
                title="360° Virtual Tour Demo"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-24 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] p-8 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f7941e]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Why Your Business Needs a 360° Virtual Tour</h3>
                <div className="grid gap-4">
                  {benefits.map((b, i) => (
                    <motion.div 
                      key={b} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 text-white/90 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f7941e] text-white">
                        <Check size={14} />
                      </div>
                      <span className="text-sm font-medium">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                 <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f36] via-transparent to-transparent z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" 
                      className="rounded-2xl shadow-2xl opacity-60" 
                      alt="Interior"
                    />
                 </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-24">
            <div className="rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-md p-8 md:p-16 shadow-xl">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">360 Virtual Tour Services Across India</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-4xl">
                We provide professional 360 degree virtual tour services across all districts of Haryana and Punjab, plus major cities in Himachal Pradesh, Uttar Pradesh, Uttarakhand, and Rajasthan.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-sm font-black text-[#f7941e] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <MapPin size={18} /> Haryana Districts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {haryanaDistricts.map((d) => (
                      <span key={d} className="rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-[#1e3a5f] shadow-sm border border-gray-100 hover:bg-[#f7941e] hover:text-white transition-all cursor-default">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-sm font-black text-[#f7941e] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <MapPin size={18} /> Punjab Districts
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {punjabDistricts.map((d) => (
                        <span key={d} className="rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-[#1e3a5f] shadow-sm border border-gray-100 hover:bg-[#f7941e] hover:text-white transition-all cursor-default">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#f7941e] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <MapPin size={18} /> Other States
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {stateLocations.map((loc) => (
                        <div key={loc.name} className="rounded-xl bg-[#1e3a5f] p-4 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform text-center">
                          {loc.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-24">
            <h3 className="text-3xl font-bold text-[#1e3a5f] mb-12 text-center">Our Gallery – Immersive Previews</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((img, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[2rem] shadow-lg aspect-[4/3]"
                >
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-[#1e3a5f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                     <p className="text-white font-bold text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f1f36]" />
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.1]" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-10" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-[#f7941e] text-white shadow-2xl shadow-[#f7941e]/40 mb-8 animate-bounce">
              <Eye size={40} />
            </div>
            <h2 className="mb-6 text-4xl font-black text-white md:text-6xl leading-tight">Ready to Give Your Customers a <span className="text-[#f7941e]">Virtual Experience?</span></h2>
            <p className="mb-10 text-xl text-gray-300">Let your customers explore your space from anywhere — and watch your walk-ins grow.</p>
            
            <Link
              href="/contact-us.html"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-[#f7941e] px-12 py-6 font-black text-white shadow-2xl shadow-[#f7941e]/30 transition-all duration-300 hover:shadow-[#f7941e]/50 hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Start Your Virtual Tour
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
