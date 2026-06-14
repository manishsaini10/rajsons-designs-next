import Link from "next/link";
import { siteConfig, footerServices, socialLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="relative bg-[#1e3a5f] overflow-hidden">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#f7941e]/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/logo.png" alt="RajSonsDesigns.com" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              RajSonsDesigns.com is a website development company based in Yamunanagar, Haryana, India providing complete web designing and development under one roof.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.name === "Email" ? undefined : "_blank"}
                  rel={s.name === "Email" ? undefined : "noopener noreferrer"}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-all hover:bg-[#f7941e] hover:text-white hover:scale-110"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Our Packages</h3>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="group flex items-center gap-2 text-sm text-gray-400 transition-all hover:text-[#f7941e]">
                    <span className="h-px w-4 bg-gray-600 transition-all group-hover:w-6 group-hover:bg-[#f7941e]" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Linux", "MySQL", ".Net", "Joomla", "WordPress", "PHP", "Magento", "OpenCart", "VirtueMart"].map((tech) => (
                <span key={tech} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-gray-400 border border-white/5 hover:border-[#f7941e]/30 hover:text-[#f7941e] transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <address className="space-y-3 text-sm not-italic text-gray-400">
              <p className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#f7941e] shrink-0" />
                {siteConfig.address}
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f7941e] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#f7941e] transition-colors">{siteConfig.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f7941e] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#f7941e] transition-colors">{siteConfig.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f7941e] shrink-0" />
                <a href="https://www.rajsonsdesigns.com" className="hover:text-[#f7941e] transition-colors">www.rajsonsdesigns.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#f7941e] transition-colors">Home</Link>
            <Link href="/about-us.html" className="hover:text-[#f7941e] transition-colors">About</Link>
            <Link href="/contact-us.html" className="hover:text-[#f7941e] transition-colors">Contact</Link>
            <a href="#" className="hover:text-[#f7941e] transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
