import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export const dynamic = "force-static";

const baseUrl = process.env.SITE_URL || `https://www.${siteConfig.name.toLowerCase()}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "", lastmod: "2025-06-01", priority: 1.0 },
    { url: "about-us.html", lastmod: "2019-07-20", priority: 0.7 },
    { url: "services.html", lastmod: "2013-06-11", priority: 0.7 },
    { url: "contact-us.html", lastmod: "2013-06-11", priority: 0.7 },
    { url: "web-design-services-2.html", lastmod: "2019-08-27", priority: 0.7 },
    { url: "ecommerce-solutions.html", lastmod: "2014-08-13", priority: 0.7 },
    { url: "affordable-static-websites.html", lastmod: "2019-08-27", priority: 0.7 },
    { url: "web-hosting-services.html", lastmod: "2014-08-13", priority: 0.7 },
    { url: "seo-services.html", lastmod: "2013-06-11", priority: 0.7 },
    { url: "web-design-packages.html", lastmod: "2013-06-11", priority: 0.7 },
    { url: "our-portfolio.html", lastmod: "2014-08-09", priority: 0.7 },
    { url: "request-quote.html", lastmod: "2013-06-11", priority: 0.7 },
    { url: "packages-details.html", lastmod: "2013-06-11", priority: 0.7 },
    { url: "website-designing-in-jagadhri.html", lastmod: "2020-03-12", priority: 0.7 },
    { url: "dynamic-websites.html", lastmod: "2019-08-27", priority: 0.7 },
    { url: "blog.html", lastmod: "2011-01-22", priority: 0.5 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/${page.url}`,
    lastModified: page.lastmod,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
