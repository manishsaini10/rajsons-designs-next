"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { mainNavigation, siteConfig } from "@/lib/site-data";

const socialIcons: Record<string, string> = {
  facebook: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  youtube: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/rajsonsdesigns", icon: "facebook" },
    { name: "Twitter", url: "https://twitter.com/rajsonsdesigns", icon: "twitter" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rajsonsdesigns", icon: "linkedin" },
    { name: "YouTube", url: "https://www.youtube.com/@rajsonsdesigns", icon: "youtube" },
    { name: "Instagram", url: "https://www.instagram.com/rajsonsdesigns/", icon: "instagram" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-4">
            <a href="/web-design-packages.html" className="text-xs text-white/80 hover:text-[#f7941e] transition-colors font-semibold animate-pulse">
              Web Designing Packages
            </a>
            <span className="text-white/20">|</span>
            <a href="/web-design-services-2.html" className="text-xs text-white/80 hover:text-[#f7941e] transition-colors font-semibold animate-pulse">
              No. 1 Website Designing Company in Yamunanagar
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-white/80">
              <Phone size={12} className="text-[#f7941e]" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-[#f7941e] transition-colors">{siteConfig.phone}</a>
            </span>
            <a
              href="/request-quote.html"
              className="rounded bg-[#f7941e] px-3 py-1 text-xs font-bold text-white transition-all hover:bg-[#e5840e]"
            >
              Request a Quote
            </a>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#f7941e] transition-colors"
                  aria-label={s.name}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                    <path d={socialIcons[s.icon]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <Link href="/" className="flex items-center gap-3 group" title="RajSons Designs">
            <img src="/images/logo.png" alt="RajSonsDesigns.com Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#1e3a5f] leading-tight">RajSonsDesigns.com</p>
              <p className="text-[10px] text-gray-500 tracking-wider uppercase">Web Development Company</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" role="navigation" aria-label="Main navigation">
            {mainNavigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all ${
                      isActive(item.href)
                        ? "bg-[#1e3a5f] text-white shadow-md"
                        : "text-gray-700 hover:bg-[#f7941e]/10 hover:text-[#f7941e]"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === item.label}
                  >
                    {item.label} <ChevronDown size={13} className={`transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`} />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full min-w-[220px] rounded-lg border border-gray-100 bg-white py-1.5 shadow-xl shadow-black/5 mt-0.5"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-all hover:bg-gradient-to-r hover:from-[#f7941e]/10 hover:to-transparent ${
                              isActive(child.href) ? "text-[#f7941e] font-semibold" : "text-gray-700 hover:text-[#f7941e]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-[#1e3a5f] text-white shadow-md"
                      : "text-gray-700 hover:bg-[#f7941e]/10 hover:text-[#f7941e]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <button
            className="relative z-50 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} className="text-[#1e3a5f]" /> : <Menu size={24} className="text-[#1e3a5f]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-6 pb-6 pt-3">
              <div className="mb-3 border-b border-gray-100 pb-3">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm font-semibold text-[#1e3a5f]">
                  <Phone size={14} className="text-[#f7941e]" />
                  {siteConfig.phone}
                </a>
              </div>
              {mainNavigation.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-2.5 text-sm font-medium ${
                        isActive(item.href) ? "bg-[#1e3a5f] text-white" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#f7941e]/30 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-lg px-4 py-2 text-sm ${
                            isActive(child.href) ? "text-[#f7941e] font-medium" : "text-gray-600 hover:text-[#f7941e]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium ${
                      isActive(item.href) ? "bg-[#1e3a5f] text-white" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <a
                  href="/request-quote.html"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-lg bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-4 py-3 text-center text-sm font-bold text-white shadow-md"
                >
                  Request a Quote
                </a>
                <div className="mt-3 flex justify-center gap-3">
                  {socialLinks.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f7941e]" aria-label={s.name}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d={socialIcons[s.icon]} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
