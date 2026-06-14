"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, ArrowRight, Sparkles, Users } from "lucide-react";
import { homeSliderSlides, homepageIntro, homepageServices, whyChooseUs, testimonial } from "@/lib/site-data";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ContactForm from "@/components/ContactForm";

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % homeSliderSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + homeSliderSlides.length) % homeSliderSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = homeSliderSlides[current];

  return (
    <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#1a3355] to-[#162945] md:h-[560px]" role="region" aria-label="Hero Slider" aria-roledescription="carousel">
      <div className="absolute inset-0 bg-[url('/images/slide-rev-bg1.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-transparent" />

      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#f7941e]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#f7941e]/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${current + 1} of ${homeSliderSlides.length}`}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block rounded-full bg-[#f7941e]/20 backdrop-blur-sm px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#f7941e] mb-4"
            >
              {slide.title}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-3 text-3xl font-bold text-white md:text-5xl"
            >
              {slide.subtitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-base leading-relaxed text-gray-300 md:text-lg"
            >
              {slide.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {slide.cta1 && (
                <Link href={slide.cta1.href} className="group inline-flex items-center gap-2 rounded-xl bg-[#f7941e] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#e5840e] shadow-lg shadow-[#f7941e]/25 hover:shadow-xl hover:shadow-[#f7941e]/30">
                  {slide.cta1.label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {slide.cta2 && (
                <Link href={slide.cta2.href} className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10 backdrop-blur-sm">
                  {slide.cta2.label}
                </Link>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-110" aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-110" aria-label="Next slide">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {homeSliderSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${i === current ? "w-10 bg-[#f7941e]" : "w-2.5 bg-white/40 hover:bg-white/60"}`}
            style={{ height: "10px" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <AnimatedSection>
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-[#f7941e]/5 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedSection delay={0.1} direction="none">
                <span className="inline-block rounded-full bg-[#1e3a5f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1e3a5f] mb-4">Welcome</span>
                <h2 className="mb-6 text-3xl font-bold text-[#1e3a5f] md:text-4xl">{homepageIntro.heading}</h2>
                <div className="section-divider mb-6" />
              </AnimatedSection>
              {homepageIntro.paragraphs.map((p, i) => (
                <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                  <p className="text-base leading-relaxed text-gray-600 md:text-lg">{p}</p>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={0.5}>
                <Link href="/request-quote.html" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-3.5 font-bold text-white transition-all hover:shadow-xl hover:shadow-[#f7941e]/30">
                  Get a free quote!
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <span className="inline-block rounded-full bg-[#1e3a5f]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1e3a5f] mb-4">What We Offer</span>
              <h2 className="text-3xl font-bold text-[#1e3a5f] md:text-4xl">Our Services</h2>
              <div className="section-divider mt-4" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {homepageServices.map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f7941e]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] text-white text-sm font-bold shadow-lg">
                        {s.title[0]}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-[#1e3a5f]">{s.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-gray-600">{s.description}</p>
                      <Link href={s.link} className="group/link inline-flex items-center gap-1 text-sm font-semibold text-[#f7941e] transition-colors hover:text-[#e5840e]">
                        Read more
                        <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="mb-8 text-xl text-gray-700 md:text-2xl font-light">We create a unique looking website with the fresh and interactive design that brings business to you.</p>
              <Link href="/services.html" className="group inline-flex items-center gap-2 rounded-xl bg-[#1e3a5f] px-8 py-3.5 font-bold text-white transition-all hover:bg-[#2a4a70] hover:shadow-xl">
                Learn more
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#1a3355] to-[#162945] py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#f7941e]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#f7941e]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#f7941e] mb-4">Why Trust Us</span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Why choose us?</h2>
              <div className="section-divider mt-4" />
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-[#f7941e]/30">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7941e] to-[#e5840e] shadow-lg">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-white/90">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <AnimatedCounter end={200} suffix="+" label="Projects Delivered" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <AnimatedCounter end={50} suffix="+" label="Happy Clients" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <AnimatedCounter end={15} suffix="+" label="Years Experience" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <AnimatedCounter end={99} suffix="%" label="Client Satisfaction" />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center">
              <p className="mb-6 text-xl font-semibold text-white">Explore the endless possibilities</p>
              <Link href="/contact-us.html" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-3.5 font-bold text-white transition-all hover:shadow-xl hover:shadow-[#f7941e]/25">
                Get In Touch
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7941e] to-[#e5840e] shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#1e3a5f]">Client Testimonials</h3>
                <div className="relative">
                  <svg className="absolute -top-4 -left-2 h-8 w-8 text-[#f7941e]/20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <p className="relative z-10 pl-4 text-lg leading-relaxed text-gray-600 italic">{testimonial.text}</p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] text-white text-sm font-bold">
                    LH
                  </div>
                  <div>
                    <p className="font-semibold text-[#f7941e]">- {testimonial.author}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#1e3a5f]">Get In Touch</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
