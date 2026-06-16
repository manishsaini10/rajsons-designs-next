import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export const dynamic = "force-static";

const baseUrl = process.env.SITE_URL || `https://www.${siteConfig.name.toLowerCase()}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "", lastmod: "2026-06-16", priority: 1.0 },
    { url: "about-us.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "services.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "contact-us.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "web-design-services-2.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "ecommerce-solutions.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "affordable-static-websites.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "web-hosting-services.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "seo-services.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "web-design-packages.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "our-portfolio.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "request-quote.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "packages-details.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "website-designing-in-jagadhri.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "dynamic-websites.html", lastmod: "2026-06-16", priority: 0.7 },
    { url: "blog.html", lastmod: "2026-06-16", priority: 0.5 },
    { url: "360-virtual-tour.html", lastmod: "2026-06-16", priority: 0.6 },
    { url: "erp-software-solutions.html", lastmod: "2026-06-16", priority: 0.9 },
    { url: "hotel-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "restaurant-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "school-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "garment-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "pharmacy-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "hospital-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "jewellery-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "textile-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "construction-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "travel-agency-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "vehicle-rental-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "printing-press-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "coaching-institute-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "diagnostic-lab-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "clinic-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "laundry-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "timber-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "garment-store-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
    { url: "legal-firm-erp-software.html", lastmod: "2026-06-16", priority: 0.8 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/${page.url}`,
    lastModified: page.lastmod,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
