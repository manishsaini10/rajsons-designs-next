"use client";

import { motion } from "framer-motion";
import {
  Layers, Scissors, Palette, BarChart3, Factory,
  LayoutDashboard, Ruler, Package, Shirt, Gauge,
  Smartphone, Calculator, DollarSign, ShieldCheck, Clock,
  Zap, RefreshCw, PieChart, HeartHandshake, TrendingUp,
  MapPin, Laptop, UserCheck, HeadphonesIcon,
} from "lucide-react";
import {
  industryColors, fadeUp,
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection,
  WhyRajsonsSection, ProcessSection, FaqSection, CtaSection,
} from "@/components/erp-common";

const colors = industryColors.textile;

const challenges = [
  {
    icon: Layers, title: "Fragmented Production Tracking",
    desc: "Managing multi-stage processes like spinning, weaving, dyeing, and finishing with manual records leads to data silos, production delays, and quality inconsistencies.",
  },
  {
    icon: Calculator, title: "Inaccurate Costing & Pricing",
    desc: "Excel-based costing fails to capture real-time material, labor, and overhead costs, resulting in inaccurate pricing and eroded profit margins on every order.",
  },
  {
    icon: Scissors, title: "High Material Wastage",
    desc: "Without precise tracking of fiber, yarn, and fabric consumption across production stages, mills suffer from excessive waste, shrinkage, and rework expenses.",
  },
  {
    icon: Palette, title: "Inconsistent Quality & Shade Matching",
    desc: "Lab data disconnected from production leads to shade variation, color mismatch, and quality rejections that damage buyer relationships and increase returns.",
  },
  {
    icon: BarChart3, title: "Limited Real-time Visibility",
    desc: "Without live dashboards, textile business owners cannot monitor machine efficiency, order status, inventory levels, or profitability at a glance.",
  },
  {
    icon: Factory, title: "Complex Compliance & Documentation",
    desc: "Export documentation, certificate of origin, testing reports, and buyer compliance forms are tedious to prepare manually and prone to costly errors.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying production metrics, machine efficiency, order status, inventory levels, and financial KPIs at a glance." },
  { icon: Layers, title: "Fiber-to-Fabric Tracking", desc: "End-to-end traceability from raw fiber and yarn bales through spinning, weaving, knitting, dyeing, and finishing to finished fabric rolls." },
  { icon: Palette, title: "Color & Shade Management", desc: "Advanced recipe management with lab dip tracking, spectrophotometer integration, shade matching, and shade grouping for consistent color output." },
  { icon: Calculator, title: "Costing & Profitability Analysis", desc: "Process-wise costing with variance analysis, style-wise cost sheets, SAM-based labor costing, and real-time profitability tracking for every order." },
  { icon: Ruler, title: "Quality Control & Inspection", desc: "4-point and 10-point fabric inspection systems with defect classification, penalty point calculation, and automatic accept/reject decisions by buyer criteria." },
  { icon: Package, title: "Inventory & Bale Management", desc: "Barcode-based bale tracking with micronaire, strength, and trash content recording. Automated mixing suggestions for optimal yarn quality at lowest cost." },
  { icon: Factory, title: "Production Planning & Scheduling", desc: "Dynamic machine load scheduling, count change optimization, batch sequencing, and capacity planning across spinning, weaving, knitting, and processing units." },
  { icon: Shirt, title: "Garment Production Management", desc: "Style-based planning with size-color matrix, marker planning, cutting optimization, sewing line balancing, and order-to-shipment tracking for apparel." },
  { icon: Gauge, title: "Machine Monitoring & Efficiency", desc: "Real-time machine efficiency tracking, downtime analysis, RPM monitoring, and OEE calculations integrated with shopfloor terminals and sensors." },
  { icon: DollarSign, title: "Export Documentation & Compliance", desc: "Generate packing lists, certificates of origin, inspection reports, and shipping documents with buyer-specific formats and compliance requirements built in." },
  { icon: ShieldCheck, title: "GST & Tax Compliance", desc: "Generate GST-compliant invoices with proper HSN codes, manage input tax credit on raw materials, and file accurate returns for the textile industry." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Monitor production, approve orders, and view reports on the go with automatic data backups." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate manual workflows across spinning, weaving, dyeing, and finishing to reduce lead times and maximize throughput across all production stages." },
  { icon: RefreshCw, title: "Reduced Wastage & Rework", desc: "Real-time process-wise wastage tracking and quality alerts help identify issues early, minimizing material waste, rework, and rejection rates." },
  { icon: TrendingUp, title: "Improved Profit Margins", desc: "Accurate process-wise costing, variance analysis, and profitability insights enable better pricing decisions and cost control across the value chain." },
  { icon: HeartHandshake, title: "Consistent Product Quality", desc: "Integrated lab data, shade matching, and in-process quality checks ensure every lot meets buyer specifications and maintains brand consistency." },
  { icon: PieChart, title: "Real-time Business Insights", desc: "Live dashboards for production, inventory, sales, and financials empower decision-makers with actionable data anytime, anywhere." },
  { icon: Clock, title: "Faster Order Fulfillment", desc: "Streamlined production planning, material requirement planning, and dynamic scheduling help you meet tight delivery deadlines and improve customer satisfaction." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Textile Industry", desc: "Our ERP is designed for Indian textile mills, garment manufacturers, and processing units with local compliance, currency, and language support built right in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even shopfloor workers and non-technical staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large textile businesses in India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system across your mill." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your textile business data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your textile operations, production workflows, pain points, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your mill type, product range, and business goals." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your textile ERP project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure production workflows, and integrate lab equipment as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing inventory records, order data, BOMs, costing sheets, and financial records are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Textile ERP Software?", a: "Textile ERP (Enterprise Resource Planning) software is an integrated platform that helps textile manufacturers manage end-to-end operations including procurement, production planning, inventory management, quality control, costing, and compliance from a single system. It replaces fragmented manual processes with automated workflows tailored for spinning, weaving, knitting, dyeing, finishing, and garment manufacturing." },
  { q: "How does Textile ERP improve production efficiency?", a: "Textile ERP improves production efficiency by providing real-time visibility across all production stages, automating machine scheduling, optimizing batch sequencing, and enabling dynamic routing based on order priority. It eliminates data silos between departments and ensures smooth material flow from fiber to finished product." },
  { q: "Can Textile ERP handle multi-stage manufacturing processes?", a: "Yes, our Textile ERP is built specifically for multi-stage textile manufacturing. It manages process-wise tracking across spinning, weaving, knitting, dyeing, finishing, and garment production with full traceability, quality control, and costing at every stage." },
  { q: "Is Textile ERP suitable for small textile businesses?", a: "Absolutely. Our Textile ERP is designed to scale, making it suitable for small spinning mills, weaving units, dyeing houses, and garment workshops as much as for large integrated textile groups. We offer modular plans so you only pay for the features you need." },
  { q: "What features are essential in a textile management system?", a: "Essential features include bale and yarn inventory management, production planning and scheduling, quality control with lab integration, shade matching and recipe management, process-wise costing, machine efficiency monitoring, GST compliance, and export documentation." },
  { q: "How does shade matching and color management work in textile ERP?", a: "The system integrates with spectrophotometers for digital color matching, maintains shade cards with lab dip tracking, groups production lots by shade for consistency, and provides recipe management with version control to ensure color accuracy across batches." },
  { q: "Can I manage multiple production units from one ERP?", a: "Yes, our Textile ERP supports multi-unit management, allowing you to oversee spinning units, weaving plants, processing houses, and garment factories from a single dashboard with consolidated reporting and cross-unit material transfers." },
  { q: "Is Textile ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data on your own servers." },
  { q: "How does billing and invoicing work in textile ERP?", a: "The billing module generates professional invoices based on order specifications, delivery quantities, applicable taxes, and trade discounts. It supports job work billing, export invoices with LC terms, GST-compliant e-invoicing, and digital payment reconciliation." },
  { q: "Can Textile ERP handle GST and export compliance?", a: "Yes, our Textile ERP is fully GST-compliant with proper HSN code mapping, input tax credit tracking, and GSTR return generation. For exports, it supports duty drawback, advance authorization, EPCG scheme tracking, and country-specific documentation." },
  { q: "What is the cost of textile ERP software in India?", a: "The cost depends on the mill size, number of production stages, required modules, deployment type, and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does textile ERP implementation take?", a: "Implementation timelines vary based on complexity. A standard textile ERP implementation typically takes 6 to 12 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Can textile ERP integrate with lab testing equipment?", a: "Yes, our Textile ERP integrates with common textile lab equipment such as Uster UT5/HVI, spectrophotometers, tensile testers, and color matching cabinets. Test results are automatically linked to production lots for in-process quality control." },
  { q: "How secure is my textile business data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems." },
  { q: "Can I access textile ERP on my mobile phone?", a: "Yes, our Textile ERP is fully responsive and accessible from any smartphone, tablet, or laptop. You can monitor production, check inventory, approve orders, and view reports on the go from anywhere." },
  { q: "How does textile ERP help with waste reduction?", a: "The ERP tracks process-wise waste at every stage from blowroom to finished fabric. Automatic alerts are triggered when wastage exceeds configured thresholds, enabling immediate corrective action to minimize material losses." },
  { q: "What kind of training do you provide for textile staff?", a: "We provide comprehensive on-site and online training for all team members including production supervisors, quality inspectors, storekeepers, and management. Training includes hands-on system walkthroughs, video tutorials, and user manuals." },
  { q: "How do I migrate from manual processes to textile ERP?", a: "Our team handles the complete migration process — auditing existing data (inventory, orders, BOMs, costing records), cleaning and formatting it, then securely transferring to the new system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Textile ERP" },
  ],
};

export default function TextileErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        title="Textile ERP Software"
        image="/images/erp/textile.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Textile ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection title="Streamline Your Textile Manufacturing Operations with Powerful ERP Software" colors={colors} paragraphs={[
  "The textile industry involves complex workflows—from yarn procurement and fabric weaving to dyeing, finishing, and dispatch. Managing loom tracking, fabric roll inventory, yarn consumption, piece-rate payroll, and order tracking across multiple production stages is a significant challenge without a robust digital system.",
  "RajSons Designs offers a powerful Textile ERP solution designed for the Indian textile industry. Our software automates loom tracking, fabric inventory, yarn management, job work management, order tracking, and GST billing. Whether you run a power loom unit, a processing house, or a textile trading business, our ERP adapts to your needs.",
  "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian textile businesses.",
]} />

      <ChallengesSection challenges={challenges} colors={colors} industry="Textile" />
      <FeaturesSection features={features} colors={colors} industry="Textile" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Textile" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Textile" />
    </>
  );
}
