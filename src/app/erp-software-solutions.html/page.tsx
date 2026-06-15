"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, UtensilsCrossed, GraduationCap, Shirt, Pill, Heart, Gem, Layers, HardHat, Compass, Car, Printer, BookOpen, Microscope, Stethoscope, Droplets, Trees, ShoppingBag, Scale, Settings, BarChart3, ShieldCheck, HeadphonesIcon, Cog, Cloud, Users, PackageOpen, Timer, TrendingUp, Check, ArrowRight, Database, CreditCard, ScrollText, Briefcase, Monitor, Truck, RefreshCw } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }) };

const industryCards = [
  {
    icon: Building2,
    title: "Hotel ERP Software",
    desc: "Complete property management system for hotels, resorts, and hospitality businesses. Streamline bookings, housekeeping, billing, and guest management with one integrated platform.",
    benefits: ["Property Management System", "Online Booking Engine", "Housekeeping Automation", "Billing & POS Integration"],
    href: "/hotel-erp-software.html",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant ERP Software",
    desc: "End-to-end restaurant management solution covering order taking, kitchen display, inventory tracking, billing, and customer relationship management.",
    benefits: ["Table & Order Management", "Kitchen Display System", "Inventory & Supplier Tracking", "Billing & Payment Integration"],
    href: "/restaurant-erp-software.html",
  },
  {
    icon: GraduationCap,
    title: "School ERP Software",
    desc: "Comprehensive school management system for admissions, attendance, exams, fees, timetables, and parent-teacher communication. Simplify administration at every level.",
    benefits: ["Student Information System", "Attendance & Exam Management", "Fee Collection & Accounting", "Parent & Teacher Portal"],
    href: "/school-erp-software.html",
  },
  {
    icon: Shirt,
    title: "Garment ERP Software",
    desc: "Specialized ERP for garment and textile businesses. Manage production planning, fabric inventory, order tracking, cutting, stitching, and finished goods with ease.",
    benefits: ["Production Planning", "Fabric & Raw Material Tracking", "Order & Dispatch Management", "Cutting & Stitching Module"],
    href: "/garment-erp-software.html",
  },
];

const otherIndustries = [
  { icon: Pill, name: "Pharmacy ERP", href: "/pharmacy-erp-software.html" },
  { icon: Heart, name: "Hospital ERP", href: "/hospital-erp-software.html" },
  { icon: Gem, name: "Jewellery ERP", href: "/jewellery-erp-software.html" },
  { icon: Layers, name: "Textile ERP", href: "/textile-erp-software.html" },
  { icon: HardHat, name: "Construction ERP", href: "/construction-erp-software.html" },
  { icon: Compass, name: "Travel Agency ERP", href: "/travel-agency-erp-software.html" },
  { icon: Car, name: "Vehicle Rental ERP", href: "/vehicle-rental-erp-software.html" },
  { icon: Printer, name: "Printing Press ERP", href: "/printing-press-erp-software.html" },
  { icon: BookOpen, name: "Coaching Institute ERP", href: "/coaching-institute-erp-software.html" },
  { icon: Microscope, name: "Diagnostic Lab ERP", href: "/diagnostic-lab-erp-software.html" },
  { icon: Stethoscope, name: "Clinic ERP", href: "/clinic-erp-software.html" },
  { icon: Droplets, name: "Laundry ERP", href: "/laundry-erp-software.html" },
  { icon: Trees, name: "Timber ERP", href: "/timber-erp-software.html" },
  { icon: ShoppingBag, name: "Garment Store ERP", href: "/garment-store-erp-software.html" },
  { icon: Scale, name: "Legal Firm ERP", href: "/legal-firm-erp-software.html" },
];

const whyChooseUs = [
  { icon: Cog, title: "Customized Development", desc: "Every ERP is built from the ground up to match your specific business processes and workflows." },
  { icon: Briefcase, title: "Industry-Specific Solutions", desc: "Deep domain expertise across hospitality, education, apparel, manufacturing, retail, and more." },
  { icon: Cloud, title: "Modern Technology Stack", desc: "Built with cutting-edge web and mobile technologies for scalability, speed, and reliability." },
  { icon: ShieldCheck, title: "Secure Architecture", desc: "Enterprise-grade security with role-based access, data encryption, and regular backups." },
  { icon: Monitor, title: "Easy User Experience", desc: "Intuitive interface designed for your team — minimal training required, maximum productivity gained." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "Comprehensive staff training and ongoing technical support to ensure smooth day-to-day operations." },
  { icon: CreditCard, title: "Affordable Implementation", desc: "Cost-effective ERP solutions with flexible payment options and fast ROI for businesses of all sizes." },
];

const faqs = [
  { q: "What is ERP software and how does it work?", a: "ERP (Enterprise Resource Planning) software is an integrated platform that manages and automates core business processes across departments including finance, inventory, sales, production, HR, and more. It works on a centralized database that all departments access, ensuring data consistency and real-time visibility across the organization." },
  { q: "What are the benefits of ERP for my business?", a: "ERP software offers numerous benefits including streamlined operations, reduced manual work, improved data accuracy, real-time reporting, better inventory management, enhanced customer service, regulatory compliance, cost savings, and data-driven decision-making capabilities that drive business growth." },
  { q: "How long does it take to implement an ERP system?", a: "Implementation timelines vary based on business complexity and modules required. A typical ERP implementation can take 4 to 12 weeks, including requirement analysis, customization, data migration, testing, training, and deployment. We work closely with you to ensure a smooth transition at every stage." },
  { q: "Is ERP software suitable for small businesses?", a: "Yes, ERP software is highly suitable for small businesses. Modern ERP solutions are scalable and affordable, offering features that grow with your business. We provide tailored ERP packages for small and medium enterprises that focus on essential modules without unnecessary complexity." },
  { q: "Can ERP software be customized for my industry?", a: "Absolutely. We specialize in industry-specific ERP solutions. Whether you run a hotel, restaurant, school, garment factory, manufacturing unit, or retail business, our ERP systems are fully customizable to match your unique workflows, reporting needs, and operational requirements." },
  { q: "What is the cost of ERP implementation?", a: "ERP implementation costs depend on factors like modules required, customization level, number of users, and deployment type (cloud vs on-premise). We offer transparent pricing and flexible packages. Contact us for a free consultation and customized quote based on your business needs." },
  { q: "Does ERP software work on mobile devices?", a: "Yes, our ERP solutions come with mobile-friendly interfaces and dedicated mobile apps for key modules. Managers and staff can access real-time data, approve requests, check inventory, view reports, and manage operations from smartphones and tablets anytime, anywhere." },
  { q: "How secure is cloud-based ERP?", a: "Cloud-based ERP from RajSons Designs includes enterprise-grade security with data encryption (both in transit and at rest), regular automated backups, role-based access control, multi-factor authentication, and compliance with industry standards. Your business data remains safe and protected at all times." },
  { q: "Can I integrate ERP with my existing accounting software?", a: "Yes, our ERP systems support integration with popular accounting software like Tally, QuickBooks, and Zoho Books. We also provide custom API integrations to connect with your existing tools for seamless data flow between systems." },
  { q: "What kind of support do you provide after implementation?", a: "We offer comprehensive post-implementation support including staff training, documentation, phone and email support, remote assistance, periodic system updates, and optional on-site visits. Our dedicated support team ensures your ERP runs smoothly throughout its lifecycle." },
  { q: "How does ERP improve decision-making?", a: "ERP provides real-time dashboards, customizable reports, and analytics that give you a complete view of your business performance. With accurate data on sales trends, inventory levels, financial health, and operational efficiency, you can make informed decisions quickly and confidently." },
  { q: "Do I need technical staff to manage ERP?", a: "No, our ERP systems are designed to be user-friendly and require no specialized technical knowledge for daily operations. We provide complete training for your team and handle the technical aspects including server management, updates, and backups as part of our support services." },
  { q: "Can ERP handle multi-branch operations?", a: "Yes, our ERP solutions are built for multi-branch and multi-location businesses. You can manage all branches from a centralized dashboard with real-time data sync, while allowing branch-level control where needed. This makes it ideal for businesses with multiple outlets, factories, or offices." },
  { q: "What is the difference between on-premise and cloud ERP?", a: "On-premise ERP is installed on your own servers and offers full control over data, while cloud ERP is hosted on our secure servers and accessed via the internet. Cloud ERP offers lower upfront costs, automatic updates, remote access, and scalability. On-premise may be preferred for organizations with specific compliance requirements." },
  { q: "How do I get started with ERP implementation?", a: "Getting started is easy. Simply contact us for a free consultation. We will understand your business requirements, demonstrate relevant ERP modules, provide a customized proposal, and guide you through a structured implementation process from data migration to go-live and beyond." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajsonsdesigns.com" },
    { "@type": "ListItem", position: 2, name: "ERP Software Solutions", item: "https://www.rajsonsdesigns.com/erp-software-solutions.html" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const CTAButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-4 font-bold text-white shadow-lg shadow-[#f7941e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    {children}
    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
);

export default function ErpSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,30,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold text-white md:text-5xl lg:text-6xl">ERP Software Solutions</motion.h1>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-sm text-gray-400">
              <a href="/" className="text-[#f7941e] hover:text-[#e5840e] transition-colors">Home</a>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300">ERP Software Solutions</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-[#1e3a5f] mb-6">
              What is ERP Software?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-gray-700 leading-relaxed font-medium">
              Enterprise Resource Planning (ERP) is business management software that integrates and automates core processes across your organization.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="mt-5 text-base leading-relaxed text-gray-600">
              ERP software brings together finance, inventory, sales, production, HR, and customer management into one unified system. Instead of juggling multiple spreadsheets and disconnected applications, your entire team works on a single platform with real-time data. This eliminates data duplication, reduces errors, and gives you a complete, accurate view of your business performance at any given moment.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="mt-5 text-base leading-relaxed text-gray-600">
              At RajSons Designs, we develop customized ERP solutions tailored to your industry. Whether you run a hotel, restaurant, school, garment factory, or a trading business, our ERP systems automate daily operations, streamline workflows, and empower you to make smarter decisions. From inventory tracking and billing to staff management and financial reporting, our ERP solutions transform the way you do business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Our ERP Solutions by Industry
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-gray-600 mb-10 max-w-3xl">
              We offer specialized ERP solutions designed for specific industries. Each solution comes with industry-specific features, workflows, and compliance built right in.
            </motion.p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {industryCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f7941e]/20"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-[#f7941e] group-hover:to-[#e5840e]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 transition-colors duration-300 group-hover:text-[#f7941e]">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {card.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="mt-0.5 shrink-0 text-[#f7941e]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f7941e] hover:text-[#e5840e] transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-[#1e3a5f] mb-4">
              ERP Solutions for More Industries
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-gray-600 mb-10">
              Beyond our featured solutions, we provide ERP systems for a wide range of industries. Each solution is tailored to the specific needs of that sector.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {otherIndustries.map((item, i) => {
              const Icon = item.icon;
              const card = (
                <motion.div
                  key={item.name}
                  variants={fadeUp} custom={i}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f7941e]/20 text-center cursor-pointer"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-[#f7941e] group-hover:to-[#e5840e]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1e3a5f] group-hover:text-[#f7941e] transition-colors">{item.name}</h3>
                </motion.div>
              );
              return item.href ? <Link key={item.name} href={item.href}>{card}</Link> : card;
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-[#1e3a5f] mb-10 text-center">
              Why Choose RajSons Designs for ERP?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp} custom={i}
                  className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f7941e]/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-[#f7941e] group-hover:to-[#e5840e]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#0f1f36] via-[#1a3355] to-[#0f1f36] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/website-design-services-bg.jpg')] bg-cover bg-center opacity-[0.05]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Database size={48} className="mx-auto mb-4 text-[#f7941e]" />
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Ready to Transform Your Business with ERP?</h2>
            <p className="mb-8 text-base text-gray-300 max-w-2xl mx-auto">
              Take the first step toward smarter operations, better data, and faster growth. Get in touch with our ERP experts today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/request-quote.html">Request Demo</CTAButton>
              <CTAButton href="/contact-us.html">Free Consultation</CTAButton>
              <Link
                href="/contact-us.html"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/30 bg-transparent px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Contact Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-[#1e3a5f] mb-10">
              Frequently Asked Questions About ERP
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                variants={fadeUp} custom={i}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md open:border-[#f7941e]/20 open:shadow-lg"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-sm font-semibold text-[#1e3a5f] group-open:text-[#f7941e] transition-colors">{faq.q}</h3>
                  <RefreshCw size={16} className="shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#f7941e]" />
                </summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
