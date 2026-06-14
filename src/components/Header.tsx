"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { mainNavigation, siteConfig } from "@/lib/site-data";

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

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
    }`}>
      <div className="hidden bg-[#1e3a5f] text-white text-sm md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <span className="text-xs text-gray-300">{siteConfig.address}</span>
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#f7941e] transition-colors">
            <Phone size={12} className="text-[#f7941e]" /> Call Us: {siteConfig.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group" title="Website Design in Yamunanagar">
          <img src="/images/logo.png" alt="RajSonsDesigns.com Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-[#1e3a5f] leading-tight">RajSonsDesigns.com</p>
            <p className="text-[10px] text-gray-500 tracking-wider uppercase">Web Development Company</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Main navigation">
          {mainNavigation.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-[#1e3a5f] text-white shadow-md"
                      : "text-gray-700 hover:bg-[#f7941e]/10 hover:text-[#f7941e]"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === item.label}
                >
                  {item.label} <ChevronDown size={14} className={`transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`} />
                </Link>
                <AnimatePresence>
                  {dropdownOpen === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full min-w-[240px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl shadow-black/5 mt-1"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-2.5 text-sm transition-all hover:bg-gradient-to-r hover:from-[#f7941e]/10 hover:to-transparent ${
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
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
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
              {mainNavigation.map((item) =>
                item.children ? (
                  <div key={item.href}>
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
