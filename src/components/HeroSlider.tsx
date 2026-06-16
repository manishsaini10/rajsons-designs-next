"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Professional Web Design & Development",
    subtitle: "We create stunning, responsive websites that drive business growth",
    cta: { label: "Get a Quote", href: "/request-quote" },
    cta2: { label: "View Portfolio", href: "/our-portfolio" },
  },
  {
    title: "eCommerce Solutions That Sell",
    subtitle: "Powerful online stores with seamless payment integration",
    cta: { label: "Explore eCommerce", href: "/ecommerce-solutions" },
    cta2: { label: "Contact Us", href: "/contact-us" },
  },
  {
    title: "SEO & Digital Marketing",
    subtitle: "Boost your online visibility and reach more customers",
    cta: { label: "SEO Services", href: "/seo-services" },
    cta2: { label: "Learn More", href: "/services" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-[450px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#0a1525]">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-[url('/images/slide-rev-bg1.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent" />

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center text-white">
            <h1 className="mb-4 text-2xl font-extrabold leading-tight sm:text-4xl md:text-6xl lg:text-7xl break-words">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {slide.title}
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base font-medium text-blue-100/90 sm:text-lg md:text-xl lg:text-2xl break-words">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-0">
              <Link
                href={slide.cta.href}
                className="group relative overflow-hidden rounded-full bg-[#f7941e] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#e5840e] hover:shadow-[#f7941e]/40 sm:text-base md:px-10"
              >
                <span className="relative z-10">{slide.cta.label}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
              <Link
                href={slide.cta2.href}
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#1e3a5f] sm:text-base md:px-10"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/20 p-2.5 text-white backdrop-blur-md transition-all hover:bg-[#f7941e] hover:border-[#f7941e] hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/20 p-2.5 text-white backdrop-blur-md transition-all hover:bg-[#f7941e] hover:border-[#f7941e] hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? "bg-[#f7941e]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
