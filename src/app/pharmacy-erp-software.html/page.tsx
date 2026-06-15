"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText, AlertTriangle, ScrollText, Package, BarChart3, Users,
  LayoutDashboard, ShoppingCart, Database, CalendarClock, Truck,
  CreditCard, HeartHandshake, RotateCcw, DollarSign, Smartphone,
  Zap, RefreshCw, Clock, PieChart, TrendingUp,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection,
  WhyRajsonsSection, ProcessSection, FaqSection, CtaSection,
  industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.pharmacy;

const challenges = [
  {
    icon: FileText, title: "Manual Prescription & Billing",
    desc: "Relying on handwritten prescriptions and manual billing processes leads to errors, slow checkouts, and difficulties in maintaining accurate sales records.",
  },
  {
    icon: AlertTriangle, title: "Expiry Date Management",
    desc: "Without automated tracking, expired medicines can remain on shelves, leading to financial losses and potential health risks for customers.",
  },
  {
    icon: ScrollText, title: "Drug Schedule Compliance",
    desc: "Managing Schedule H, H1, G, and other regulated drugs requires meticulous record-keeping that manual systems cannot reliably provide.",
  },
  {
    icon: Package, title: "Inventory Mismanagement",
    desc: "Tracking stock levels across thousands of SKUs, including different pack sizes and batch numbers, is nearly impossible with spreadsheets and manual counts.",
  },
  {
    icon: BarChart3, title: "Limited Business Insights",
    desc: "Without real-time dashboards, pharmacy owners cannot monitor sales trends, fast-moving medicines, or slow-moving stock that ties up capital.",
  },
  {
    icon: Users, title: "Customer Retention Challenges",
    desc: "Independent pharmacies struggle to compete with chains without loyalty programs, customer credit tracking, and personalized service capabilities.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying sales, stock status, expiry alerts, profit margins, and key performance indicators at a glance." },
  { icon: ShoppingCart, title: "Pharmacy POS & Billing", desc: "Fast, intuitive billing interface with barcode scanning, batch number selection, and instant GST invoice generation for walk-in customers." },
  { icon: Database, title: "Drug Master Management", desc: "Maintain a comprehensive drug database with composition, manufacturer, pack size, pricing, HSN codes, and applicable drug schedule information." },
  { icon: CalendarClock, title: "Batch & Expiry Tracking", desc: "Track every incoming batch with manufacturing and expiry dates. Get automated alerts for expiring stock to minimize write-offs." },
  { icon: Truck, title: "Purchase Order Management", desc: "Create purchase orders, record goods receipt, track pending orders, and manage supplier accounts with credit limit monitoring." },
  { icon: Package, title: "Inventory Control", desc: "Real-time stock tracking with low-stock alerts, stock transfer between warehouses, and physical stock adjustment with audit trails." },
  { icon: CreditCard, title: "GST Billing & Compliance", desc: "Generate GST-compliant invoices with proper HSN codes, manage e-invoicing, track input tax credit, and file GSTR returns effortlessly." },
  { icon: HeartHandshake, title: "Customer Management", desc: "Maintain customer profiles with purchase history, credit tracking, loyalty points, birthday reminders, and targeted promotional messaging." },
  { icon: RotateCcw, title: "Returns Management", desc: "Handle sales returns and purchase returns with proper documentation, batch tracking, and real-time stock adjustment in inventory." },
  { icon: DollarSign, title: "Accounts Management", desc: "Track supplier payments, customer collections, expenses, and bank transactions with integrated ledger management and aging reports." },
  { icon: FileText, title: "Comprehensive Reports", desc: "Access sales reports, purchase reports, stock valuation, expiry reports, GST summary, and profit & loss statements with custom date filters." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic daily backups ensure your pharmacy data is always safe." },
];

const benefits = [
  { icon: Zap, title: "Enhanced Operational Efficiency", desc: "Automate billing, inventory tracking, and purchase management to reduce manual effort and accelerate daily pharmacy operations." },
  { icon: RefreshCw, title: "Reduced Stock Wastage", desc: "Real-time batch and expiry tracking with advance alerts minimizes expired medicine losses and ensures only fresh stock reaches customers." },
  { icon: Clock, title: "Faster Customer Service", desc: "Reduce checkout time with barcode scanning, quick medicine search, and instant invoice generation, especially during rush hours." },
  { icon: HeartHandshake, title: "Improved Customer Loyalty", desc: "Build lasting relationships with loyalty programs, credit facility management, purchase history insights, and personalized health reminders." },
  { icon: PieChart, title: "Data-driven Business Decisions", desc: "Make informed purchasing and pricing decisions with reports on top-selling medicines, profit margins, seasonal trends, and supplier performance." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Easily add more branches, expand product lines, and onboard new staff as your pharmacy business grows without changing your ERP system." },
];

const faqData = [
  { q: "What is Pharmacy ERP Software?", a: "Pharmacy ERP (Enterprise Resource Planning) software is an integrated platform that helps pharmacists manage daily operations such as billing, inventory tracking, purchase management, customer relationships, expiry date monitoring, and accounting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency, compliance, and profitability." },
  { q: "How does Pharmacy ERP help with expiry date management?", a: "Pharmacy ERP tracks batch-wise manufacturing and expiry dates for every medicine received. The system sends automated alerts (30/60/90 days in advance) for stock approaching expiry, blocks billing of expired medicines, and generates expiry reports to help you take timely action through returns, discounts, or disposal." },
  { q: "Can Pharmacy ERP handle Schedule H, H1, and other drug regulations?", a: "Yes, our Pharmacy ERP supports drug schedule classification including Schedule H, H1, G, X, and narcotic drug tracking. The system maintains mandatory registers, restricts unauthorized access to controlled substances, and generates reports compliant with PCI and state drug control requirements." },
  { q: "Is Pharmacy ERP suitable for small medical stores?", a: "Absolutely. Our Pharmacy ERP is designed to scale, making it suitable for small standalone medical stores, retail pharmacy chains, and wholesale distributors alike. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in pharmacy management software?", a: "Essential features include counter billing with barcode support, drug master management, batch & expiry tracking, inventory control, purchase order management, GST-compliant invoicing, customer management with loyalty, and comprehensive sales/purchase reports." },
  { q: "How does billing and invoicing work in pharmacy ERP?", a: "The billing module allows you to add medicines by barcode, product name, or batch number. It auto-calculates GST (CGST/SGST/IGST), applies applicable discounts, generates digital invoices, and sends them via WhatsApp or email. It supports credit sales, multiple payment modes, and bill printing." },
  { q: "Can I manage multiple pharmacy branches from one ERP?", a: "Yes, our Pharmacy ERP supports multi-branch management, allowing you to oversee stock levels, sales, purchases, and staff across all locations from a single dashboard. Inter-branch stock transfers and centralized reporting are built-in features." },
  { q: "Is the Pharmacy ERP cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data on your own servers." },
  { q: "How does inventory management work for medicines?", a: "Inventory management in pharmacy ERP includes batch-wise stock tracking, low-stock and out-of-stock alerts, real-time stock valuation, stock transfer between locations, physical stock adjustment with audit trail, and reorder level settings for automatic purchase suggestions." },
  { q: "Does the pharmacy ERP support GST compliance?", a: "Yes, our Pharmacy ERP is fully GST-compliant for the Indian market. It generates GST invoices with correct HSN codes, tracks input tax credit on purchases, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns with auto-populated data." },
  { q: "What is the cost of pharmacy ERP software in India?", a: "The cost depends on the number of branches, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your pharmacy business. Contact us for a customized quote." },
  { q: "How long does pharmacy ERP implementation take?", a: "Implementation timelines vary based on project complexity. A standard pharmacy ERP implementation typically takes 3 to 6 weeks, including requirement analysis, drug master setup, customization, data migration, testing, and staff training." },
  { q: "Does the ERP support customer credit and loyalty programs?", a: "Yes, our Pharmacy ERP includes a complete customer management module. You can offer credit facility with limit setting and due date tracking, manage loyalty points, send promotional SMS/WhatsApp messages, track purchase history, and set automated reminders for refills or health checkups." },
  { q: "How secure is my pharmacy data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems, in compliance with Indian data protection guidelines." },
  { q: "Can I access pharmacy ERP on my mobile phone?", a: "Yes, our Pharmacy ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. You can check stock, view sales reports, approve purchase orders, and monitor expiry alerts on the go." },
  { q: "How does the ERP help with purchase and supplier management?", a: "The purchase module helps you create purchase orders based on reorder levels, record goods receipt with batch and expiry details, manage supplier accounts with credit limits, track pending orders, and generate purchase return documents when needed." },
  { q: "What kind of training do you provide for pharmacy staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including billing counter staff, inventory managers, and pharmacy owners. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline post-deployment." },
  { q: "How do I migrate from manual processes to pharmacy ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (drug master, stock, customer records, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajsonsdesigns.com/" },
    { "@type": "ListItem", position: 2, name: "ERP Solutions", item: "https://www.rajsonsdesigns.com/erp-software-solutions.html" },
    { "@type": "ListItem", position: 3, name: "Pharmacy ERP" },
  ],
};

export default function PharmacyErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ErpHero title="Pharmacy ERP Software" image="/images/erp/pharmacy.jpg" breadcrumb={[{ label: "Home", href: "/" }, { label: "ERP Solutions", href: "/erp-software-solutions.html" }, { label: "Pharmacy ERP" }]} stats={[{ value: "15+", label: "Years Experience" }, { value: "500+", label: "Happy Clients" }, { value: "99.9%", label: "Uptime" }, { value: "24/7", label: "Support" }]} colors={colors} />
      <DescriptionSection title="Streamline Your Pharmacy Operations with Powerful ERP Software" colors={colors} paragraphs={[
        "Running a pharmacy involves far more than dispensing medicines. From managing thousands of drug SKUs with different batch numbers, expiry dates, and schedules to ensuring GST-compliant billing and regulatory compliance—every aspect demands precision. Yet many pharmacies in India still rely on manual registers, paper prescriptions, and disconnected systems that lead to billing errors, stock mismanagement, and compliance risks.",
        "RajSons Designs offers a powerful, feature-rich Pharmacy ERP solution designed specifically for the Indian pharmaceutical industry. Our software automates billing, inventory tracking, purchase management, expiry monitoring, customer relationships, and regulatory compliance all in one place. Whether you run a small medical store in Yamunanagar, a chain of pharmacies in Chandigarh, or a wholesale distribution business across Haryana, our ERP adapts to your unique needs and helps you deliver better service while maximizing profitability.",
        "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian businesses. Our cloud-based platform ensures you can manage your pharmacy from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Pharmacy ERP can transform your pharmaceutical business today.",
      ]} />
      <ChallengesSection challenges={challenges} colors={colors} industry="Pharmacy" />
      <FeaturesSection features={features} colors={colors} industry="Pharmacy" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Pharmacy" />
      <WhyRajsonsSection items={defaultWhyRajsons} colors={colors} />
      <ProcessSection steps={defaultProcessSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Pharmacy" />
    </>
  );
}
