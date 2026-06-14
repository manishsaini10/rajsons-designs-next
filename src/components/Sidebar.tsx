import Link from "next/link";
import { sidebarLinks, footerServices } from "@/lib/site-data";

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#1e3a5f]">Our Services</h3>
        <ul className="space-y-1">
          {sidebarLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-all hover:bg-gradient-to-r hover:from-[#f7941e]/10 hover:to-transparent hover:text-[#f7941e]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-all group-hover:bg-[#f7941e] group-hover:w-3" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#1e3a5f]">Client Testimonials</h3>
        <div className="relative">
          <svg className="absolute -top-2 -left-2 h-6 w-6 text-[#f7941e]/20" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
          </svg>
          <p className="relative text-sm text-gray-600 italic leading-relaxed">&ldquo;We are very pleased with your attractive website development services and fast process&rdquo;</p>
        </div>
        <p className="mt-3 text-sm font-semibold text-[#f7941e]">- Lafaa Holiday</p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#1e3a5f]">Our Packages</h3>
        <ul className="space-y-1">
          {footerServices.map((s) => (
            <li key={s.name}>
              <Link href={s.href} className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-all hover:bg-gradient-to-r hover:from-[#f7941e]/10 hover:to-transparent hover:text-[#f7941e]">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-all group-hover:bg-[#f7941e] group-hover:w-3" />
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
