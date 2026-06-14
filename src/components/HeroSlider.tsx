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
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-r from-primary to-blue-900">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{slide.title}</h1>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">{slide.subtitle}</p>
            <div className="flex justify-center gap-4">
              <Link
                href={slide.cta.href}
                className="rounded bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {slide.cta.label}
              </Link>
              <Link
                href={slide.cta2.href}
                className="rounded border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
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
              i === current ? "bg-accent" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
