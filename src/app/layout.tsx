import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteSuffix = "Website Design in Yamunanagar | Digital Marketing Company in Yamunanagar/Jagadhri | website development company in yamunanagar | Website Designing company in Yamunanagar";

export const metadata: Metadata = {
  title: {
    default: "Website Designing and Development in Yamunanagar Haryana.",
    template: `%s – ${siteSuffix}`,
  },
  description: "A website designing company in Yamunanagar. We offer affordable website development and outsourcing services by professional web designers with a 100% money-back guarantee.",
  keywords: ["best website designing company in yamunanagar", "web development company yamunanagar", "web designers yamunanagar", "website design company yamunanagar", "website designers", "website development company in yamunanagar", "website designing", "it companies in yamunanagar", "website developer near me", "ecommerce website solution in yamunanagar", "dynamic website design in yamunanagar", "static website design", "social media marketing companies"],
  metadataBase: new URL("https://www.rajsonsdesigns.com"),
  robots: { index: false, follow: false },
  openGraph: {
    title: "Website Designing and Development in Yamunanagar Haryana.",
    description: "A website designing company in Yamunanagar. We offer affordable website development and outsourcing services by professional web designers with a 100% money-back guarantee.",
    url: "https://www.rajsonsdesigns.com",
    siteName: siteSuffix,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing and Development in Yamunanagar Haryana.",
    description: "A website designing company in Yamunanagar. We offer affordable website development and outsourcing services by professional web designers with a 100% money-back guarantee.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google" content="nositelinkssearchbox" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-85010264-1" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-85010264-1", {"anonymize_ip":true,"link_attribution":true});`
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "RajSonsDesigns.com",
            url: "https://www.rajsonsdesigns.com",
            logo: "https://www.rajsonsdesigns.com/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8813951000",
              contactType: "sales",
              areaServed: "IN",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "2nd Floor, UCO Bank Building, Near Pyaara Chowk",
              addressLocality: "Yamunanagar",
              addressRegion: "Haryana",
              postalCode: "135001",
              addressCountry: "IN",
            },
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "RajSonsDesigns.com",
            image: "https://www.rajsonsdesigns.com/images/logo.png",
            telephone: "+91-8813951000",
            email: "info@rajsonsdesigns.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2nd Floor, UCO Bank Building, Near Pyaara Chowk",
              addressLocality: "Yamunanagar",
              addressRegion: "Haryana",
              postalCode: "135001",
              addressCountry: "IN",
            },
            url: "https://www.rajsonsdesigns.com",
            priceRange: "₹₹",
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajsonsdesigns.com" },
            ],
          })
        }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-white focus:p-2 focus:text-black focus:rounded">
          Skip to main content
        </a>
        <a href="/contact-us.html" className="feedback-btn">Feedback</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
