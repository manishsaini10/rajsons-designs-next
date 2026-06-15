"use client";

import {
  BarChart3, Cloud, CreditCard, Factory, Layers, Package, Phone, Ruler, Scissors,
  ScrollText, Search, Settings, ShieldCheck, Shirt, TrendingUp, Truck, Users,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection,
  WhyRajsonsSection, ProcessSection, FaqSection, CtaSection, industryColors,
  defaultWhyRajsons, defaultProcessSteps, fadeUp,
} from "@/components/erp-common";

const colors = industryColors["garment-mfg"];

const challenges = [
  { icon: ScrollText, title: "Manual Production Tracking", desc: "Relying on paper-based records and spreadsheets leads to errors, delays, and lack of visibility across the production floor." },
  { icon: Ruler, title: "Fabric Inventory Issues", desc: "Poor tracking of fabric rolls, colors, and grades causes wastage, stockouts, and unnecessary reordering of raw materials." },
  { icon: Package, title: "Order Management Chaos", desc: "Managing multiple orders with different specifications, deadlines, and priorities becomes overwhelming without a centralized system." },
  { icon: ShieldCheck, title: "Quality Control Problems", desc: "Inconsistent quality checks and lack of traceability result in defective products, customer returns, and reputational damage." },
  { icon: Truck, title: "Supply Chain Gaps", desc: "Coordination with suppliers, subcontractors, and logistics partners suffers without real-time data sharing and automated workflows." },
  { icon: BarChart3, title: "Lack of Real-time Data", desc: "Without instant access to production metrics, inventory levels, and sales figures, decision-making is slow and often inaccurate." },
];

const features = [
  { icon: BarChart3, title: "Dashboard & Analytics", desc: "A centralized dashboard with real-time KPIs, production reports, sales trends, and financial summaries for complete business visibility." },
  { icon: Package, title: "Order Management", desc: "Track customer orders from inquiry to delivery. Manage order specifications, timelines, pricing, and dispatch scheduling in one place." },
  { icon: Ruler, title: "Fabric Inventory Management", desc: "Comprehensive tracking of fabric rolls by type, color, grade, and supplier. Get low-stock alerts and automatic reorder suggestions." },
  { icon: Factory, title: "Production Planning", desc: "Plan and schedule production runs across cutting, stitching, finishing, and packing stages. Allocate resources and track progress in real time." },
  { icon: Scissors, title: "Cutting & Stitching Management", desc: "Module dedicated to cutting floor and stitching line operations. Track job cards, labor allocation, and output quality per batch." },
  { icon: ShieldCheck, title: "Quality Control", desc: "Define quality checkpoints across the production line. Record inspection results, flag defects, and generate quality reports for continuous improvement." },
  { icon: Truck, title: "Purchase Management", desc: "Manage purchase orders for fabric, thread, trims, and accessories. Track supplier performance, pricing, and delivery timelines." },
  { icon: TrendingUp, title: "Sales Management", desc: "Handle sales inquiries, quotations, invoices, and payment follow-ups. Integrate with order management for seamless order-to-cash flow." },
  { icon: Users, title: "Employee Management", desc: "Maintain staff records, attendance, work assignments, and payroll data. Track productivity and labor costs per production order." },
  { icon: CreditCard, title: "Accounting Integration", desc: "Seamless integration with accounting modules for expense tracking, profit calculation, bank reconciliation, and financial reporting." },
  { icon: ScrollText, title: "GST Compliance", desc: "Auto-generate GST-compliant invoices, e-way bills, and returns. Stay compliant with Indian tax regulations effortlessly." },
  { icon: Cloud, title: "Cloud Backup & Mobile Access", desc: "Secure cloud storage with automated backups. Access your ERP data anytime, anywhere from mobile devices and tablets." },
];

const benefits = [
  { icon: TrendingUp, title: "Increased Production Efficiency", desc: "Streamlined workflows and automated task allocation across cutting, stitching, and finishing units." },
  { icon: Package, title: "Reduced Fabric Waste", desc: "Real-time inventory tracking, accurate demand forecasting, and intelligent material planning." },
  { icon: Truck, title: "Better Order Tracking", desc: "From inquiry to dispatch with complete visibility into order status, production stage, and delivery timeline." },
  { icon: ShieldCheck, title: "Improved Quality Control", desc: "Defined inspection checkpoints, defect recording, and traceability across every production batch." },
  { icon: BarChart3, title: "Real-time Reports & Analytics", desc: "Production output, inventory levels, sales performance, and financial health for informed decisions." },
  { icon: Factory, title: "Scalable Manufacturing Operations", desc: "Grow with your business. Add new production lines, units, or product categories without disruption." },
];

const whyRajsons = [
  { icon: Shirt, title: "Industry-Specific Solution", desc: "Built exclusively for garment and apparel manufacturers. Our ERP understands your workflow — from fabric procurement to finished dispatch." },
  { icon: Settings, title: "Easy-to-use Interface", desc: "Designed for factory-floor teams. Simple, intuitive interface that requires minimal training. Your staff can start using it from day one." },
  { icon: CreditCard, title: "Affordable for Indian Manufacturers", desc: "Cost-effective pricing designed for small and medium garment businesses. Flexible payment options with fast return on investment." },
  { icon: Users, title: "Training & Support", desc: "Comprehensive on-site and remote training for your team. Dedicated support team available via phone, email, and remote assistance." },
  { icon: ShieldCheck, title: "Secure Cloud Platform", desc: "Enterprise-grade security with data encryption, role-based access, automated backups, and 99.9% uptime guarantee." },
  { icon: Layers, title: "Customizable Modules", desc: "Every feature can be tailored to your unique processes. Add or remove modules as your business evolves without any technical hassle." },
];

const implementationSteps = [
  { icon: Search, title: "Analysis", desc: "We analyze your current production workflow, identify pain points, and document requirements for a tailored ERP solution." },
  { icon: Users, title: "Consultation", desc: "Our ERP experts discuss module selection, customization needs, and integration requirements with your team." },
  { icon: ScrollText, title: "Planning", desc: "A detailed implementation roadmap is created with timelines, milestones, resource allocation, and risk mitigation strategies." },
  { icon: Settings, title: "Development", desc: "We configure and customize the ERP modules to match your garment manufacturing processes and business rules." },
  { icon: ShieldCheck, title: "Testing", desc: "Rigorous testing of all modules including production planning, inventory, order management, and quality control workflows." },
  { icon: Truck, title: "Migration", desc: "Secure migration of your existing data — customer records, inventory, orders, and financial history — into the new ERP system." },
  { icon: Factory, title: "Deployment", desc: "Go-live deployment with supervised rollout across your production units, warehouse, and management offices." },
  { icon: Phone, title: "Support", desc: "Ongoing technical support, staff training, system monitoring, and periodic updates to keep your ERP running smoothly." },
];

const processSteps = [
  { step: "01", title: "Analysis", desc: "We analyze your current production workflow, identify pain points, and document requirements for a tailored ERP solution." },
  { step: "02", title: "Consultation", desc: "Our ERP experts discuss module selection, customization needs, and integration requirements with your team." },
  { step: "03", title: "Planning", desc: "A detailed implementation roadmap is created with timelines, milestones, resource allocation, and risk mitigation strategies." },
  { step: "04", title: "Development", desc: "We configure and customize the ERP modules to match your garment manufacturing processes and business rules." },
  { step: "05", title: "Testing", desc: "Rigorous testing of all modules including production planning, inventory, order management, and quality control workflows." },
  { step: "06", title: "Migration", desc: "Secure migration of your existing data — customer records, inventory, orders, and financial history — into the new ERP system." },
  { step: "07", title: "Deployment", desc: "Go-live deployment with supervised rollout across your production units, warehouse, and management offices." },
  { step: "08", title: "Support", desc: "Ongoing technical support, staff training, system monitoring, and periodic updates to keep your ERP running smoothly." },
];

const faqs = [
  { q: "What is Garment ERP Software?", a: "Garment ERP Software is an integrated management platform designed specifically for garment and apparel manufacturers. It covers the entire production lifecycle including fabric procurement, inventory management, production planning, cutting and stitching operations, quality control, order tracking, and financial accounting in one unified system." },
  { q: "How does garment ERP improve manufacturing efficiency?", a: "Garment ERP automates manual processes, provides real-time production tracking, optimizes resource allocation, and reduces bottlenecks in cutting, stitching, and finishing operations. It eliminates data silos between departments, enabling faster decision-making and seamless workflow from order to dispatch." },
  { q: "Can garment ERP handle fabric inventory management?", a: "Yes, the fabric inventory module tracks fabric rolls by type, color, grade, supplier, and location. It provides stock alerts, consumption tracking, reorder suggestions, and wastage reports to help you optimize fabric usage and reduce costs." },
  { q: "Is garment ERP suitable for small tailoring businesses?", a: "Absolutely. Our garment ERP is scalable and affordable, making it suitable for small tailoring units, boutique manufacturers, and medium-sized apparel factories. You can start with essential modules and add more features as your business grows." },
  { q: "How does production planning work in garment ERP?", a: "Production planning in garment ERP allows you to create production orders, assign tasks to cutting and stitching teams, schedule machine utilization, track real-time progress, and manage work-in-progress inventory across multiple production stages." },
  { q: "Can I track orders from cutting to dispatch?", a: "Yes, the order management module provides end-to-end visibility. You can track each order's status across cutting, stitching, finishing, quality check, packing, and dispatch stages with detailed timestamps and accountability." },
  { q: "How does quality control work in ERP?", a: "You can define quality checkpoints at every production stage — fabric inspection, cutting accuracy, stitching quality, finishing standards, and final packing. Inspectors record results directly in the system, and defect reports are generated automatically for analysis." },
  { q: "What is the cost of garment ERP in India?", a: "The cost depends on the number of modules, users, and customization level. We offer affordable packages starting from basic plans for small manufacturers to comprehensive solutions for large factories. Contact us for a free consultation and customized quote." },
  { q: "How long does implementation take?", a: "Typical implementation takes 4 to 8 weeks depending on business complexity, number of modules, and data migration requirements. Our structured process ensures minimal disruption to your daily operations." },
  { q: "Can garment ERP handle multiple production units?", a: "Yes, our ERP supports multi-unit and multi-location operations. You can manage all production units from a centralized dashboard while allowing unit-level control over local operations and data." },
  { q: "Does garment ERP support GST compliance?", a: "Yes, the system automatically generates GST-compliant invoices, e-way bills, and purchase registers. It tracks input and output tax credits and generates GSTR-1, GSTR-3B returns to simplify tax filing." },
  { q: "Can I access garment ERP on mobile?", a: "Yes, our garment ERP comes with a mobile-friendly interface and dedicated mobile app. Managers and supervisors can view production status, approve requests, check inventory, and access reports from smartphones anytime." },
  { q: "How secure is my production data?", a: "Your data is protected with enterprise-grade security including 256-bit encryption, role-based access control, multi-factor authentication, automated daily backups, and secure cloud hosting with 99.9% uptime." },
  { q: "What reports can I generate from garment ERP?", a: "You can generate reports on production output, fabric consumption, order status, quality defects, employee productivity, inventory levels, sales performance, profit margins, and financial summaries — all with customizable date ranges." },
  { q: "Does garment ERP include employee management?", a: "Yes, the employee management module handles staff records, attendance, work assignments, production targets, performance tracking, and payroll integration to help you manage your workforce effectively." },
  { q: "Can I integrate with existing accounting software?", a: "Yes, our garment ERP integrates seamlessly with accounting software like Tally, QuickBooks, and Zoho Books. We also provide custom API integration with your existing business tools." },
  { q: "Do you provide training for my staff?", a: "Yes, we provide comprehensive training programs including on-site sessions, remote training, user manuals, and video tutorials. Our team ensures your staff is confident and productive with the new system." },
  { q: "How do I migrate from manual processes to ERP?", a: "We follow a structured migration process: first we document your current workflows, then configure the ERP to match them, migrate your existing data securely, run parallel operations for verification, and finally transition fully with our team's hand-holding support." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajsonsdesigns.com" },
    { "@type": "ListItem", position: 2, name: "ERP Software Solutions", item: "https://www.rajsonsdesigns.com/erp-software-solutions.html" },
    { "@type": "ListItem", position: 3, name: "Garment ERP Software", item: "https://www.rajsonsdesigns.com/garment-erp-software.html" },
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

const descriptionParagraphs = [
  "Garment ERP software is a comprehensive management solution designed specifically for the apparel and textile industry. It brings together production planning, fabric inventory management, order tracking, cutting and stitching operations, quality control, and financial accounting into one unified platform. Instead of juggling multiple spreadsheets, paper job cards, and disconnected systems, your entire team works on a single integrated system with real-time data visibility.",
  "For garment manufacturers in India, managing the entire production lifecycle — from fabric procurement to finished product dispatch — presents unique challenges. Different fabric types, multiple order specifications, tight deadlines, and quality standards demand precise coordination across departments. Our garment ERP automates these workflows, reduces manual errors, and gives you complete control over every aspect of your manufacturing operations.",
  "At RajSons Designs, we understand the garment industry inside out. Our ERP is built with inputs from experienced manufacturers and tailored to the Indian market. Whether you run a small tailoring unit or a large apparel factory with multiple production lines, our garment ERP scales to meet your needs and helps you deliver quality products on time, every time.",
];

export default function GarmentErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/garment-mfg.jpg"
        title="Garment ERP Software"
        breadcrumb={[
          { label: "Home", href: "https://www.rajsonsdesigns.com" },
          { label: "ERP Software Solutions", href: "https://www.rajsonsdesigns.com/erp-software-solutions.html" },
          { label: "Garment ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Garment Manufacturing Operations with Powerful ERP Software"
        paragraphs={descriptionParagraphs}
        colors={colors}
      />

      <ChallengesSection
        challenges={challenges}
        colors={colors}
        industry="Garment Manufacturing"
      />

      <FeaturesSection
        features={features}
        colors={colors}
        industry="Garment Manufacturing"
      />

      <BenefitsSection
        benefits={benefits}
        colors={colors}
        industry="Garment Manufacturing"
      />

      <WhyRajsonsSection
        items={whyRajsons}
        colors={colors}
      />

      <ProcessSection
        steps={processSteps}
        colors={colors}
      />

      <FaqSection
        faqData={faqs}
        colors={colors}
      />

      <CtaSection
        colors={colors}
        industry="Garment Manufacturing"
      />
    </>
  );
}
