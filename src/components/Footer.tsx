import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

const footerColumns = [
  {
    heading: "Important Links",
    links: [
      ["Website Designing Yamunanagar", "/web-design-services-2.html"],
      ["Website Development Yamunanagar", "/dynamic-websites.html"],
      ["eCommerce Development", "/ecommerce-solutions.html"],
      ["SEO Services", "/seo-services.html"],
      ["Web Hosting Services", "/web-hosting-services.html"],
      ["Static Websites", "/affordable-static-websites.html"],
    ],
  },
  {
    heading: "Web Services",
    links: [
      ["Web Design Packages", "/web-design-packages.html"],
      ["Dynamic Website Design", "/dynamic-websites.html"],
      ["CMS Development", "/dynamic-websites.html"],
      ["Website Portfolio", "/our-portfolio.html"],
      ["Website Blog", "/blog.html"],
      ["Request a Quote", "/request-quote.html"],
    ],
  },
  {
    heading: "Resources",
    links: [
      ["About Us", "/about-us.html"],
      ["Our Portfolio", "/our-portfolio.html"],
      ["Web Designing in Jagadhri", "/website-designing-in-jagadhri.html"],
      ["Contact Us", "/contact-us.html"],
      ["Sitemap", "/sitemap.xml"],
    ],
  },
  {
    heading: "Technologies",
    links: [],
    techs: ["Linux", "MySQL", ".Net", "Joomla", "WordPress", "PHP", "Magento", "OpenCart", "HTML5", "CSS3"],
  },
  {
    heading: "Get in Touch",
    links: [],
    contact: true,
  },
];

const socialIcons: Record<string, string> = {
  facebook: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  twitter: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  youtube: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
};

export default function Footer() {
  const socials = [
    { name: "Facebook", url: "https://www.facebook.com/rajsonsdesigns", icon: "facebook" },
    { name: "Twitter", url: "https://twitter.com/rajsonsdesigns", icon: "twitter" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rajsonsdesigns", icon: "linkedin" },
    { name: "YouTube", url: "https://www.youtube.com/@rajsonsdesigns", icon: "youtube" },
    { name: "Instagram", url: "https://www.instagram.com/rajsonsdesigns/", icon: "instagram" },
  ];

  return (
    <footer className="relative bg-[#0f1f36] overflow-hidden">
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-[#f7941e]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#f7941e]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white border-b border-[#f7941e]/30 pb-2">{col.heading}</h3>

              {col.links && col.links.length > 0 && (
                <ul className="space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-gray-400 hover:text-[#f7941e] transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {col.techs && (
                <div className="flex flex-wrap gap-2">
                  {col.techs.map((tech) => (
                    <span key={tech} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400 border border-white/5 hover:border-[#f7941e]/30 hover:text-[#f7941e] transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {col.contact && (
                <address className="space-y-3 text-sm not-italic text-gray-400">
                  <p className="flex items-start gap-2.5">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#f7941e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {siteConfig.address}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 shrink-0 text-[#f7941e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-[#f7941e] transition-colors">{siteConfig.phone}</a>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 shrink-0 text-[#f7941e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-[#f7941e] transition-colors">{siteConfig.email}</a>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 shrink-0 text-[#f7941e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.rajsonsdesigns.com" className="hover:text-[#f7941e] transition-colors">www.rajsonsdesigns.com</a>
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    {socials.map((s) => {
                      const brandFill: Record<string, string> = {
                        facebook: "#1877F2",
                        twitter: "#000000",
                        linkedin: "#0A66C2",
                        youtube: "#FF0000",
                        instagram: "#E4405F",
                      };
                      return (
                        <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="group flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all hover:bg-[#f7941e] hover:scale-110" aria-label={s.name}>
                          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-colors group-hover:fill-white" style={{ fill: brandFill[s.icon] || "#1e3a5f" }}><path d={socialIcons[s.icon]} /></svg>
                        </a>
                      );
                    })}
                  </div>
                </address>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#0a1525]">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved. <a href="https://www.rajsonsdesigns.com" className="hover:text-[#f7941e] transition-colors">www.rajsonsdesigns.com</a></p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
              <Link href="/" className="hover:text-[#f7941e] transition-colors">Home</Link>
              <span className="text-white/10">|</span>
              <Link href="/about-us.html" className="hover:text-[#f7941e] transition-colors">About Us</Link>
              <span className="text-white/10">|</span>
              <Link href="/services.html" className="hover:text-[#f7941e] transition-colors">Services</Link>
              <span className="text-white/10">|</span>
              <Link href="/contact-us.html" className="hover:text-[#f7941e] transition-colors">Contact Us</Link>
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] text-gray-600">Website Designing Company Yamunanagar | Web Development Company Yamunanagar | SEO Services Yamunanagar | eCommerce Development Yamunanagar</p>
        </div>
      </div>
    </footer>
  );
}
