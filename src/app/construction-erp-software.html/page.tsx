"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScrollText, Users, Truck, BarChart3, Timer, FileText,
  LayoutDashboard, CalendarCheck, Package, CreditCard, Clock,
  ShieldCheck, BookOpen, DollarSign, Cog, Smartphone,
  Zap, RefreshCw, HeartHandshake, PieChart, TrendingUp,
  MapPin, Laptop, UserCheck, HeadphonesIcon,
} from "lucide-react";
import {
  industryColors, fadeUp,
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection,
  WhyRajsonsSection, ProcessSection, FaqSection, CtaSection,
} from "@/components/erp-common";

const colors = industryColors.construction;

const challenges = [
  {
    icon: ScrollText, title: "Project Delays & Timeline Mismanagement",
    desc: "Construction projects often face delays due to poor scheduling, lack of task tracking, and inefficient resource allocation, leading to missed deadlines and penalty clauses.",
  },
  {
    icon: Users, title: "Disconnected Communication Between Teams",
    desc: "Site engineers, project managers, contractors, and suppliers often operate in silos, causing miscommunication, rework, and costly delays across the project lifecycle.",
  },
  {
    icon: Truck, title: "Manual Material & Inventory Tracking",
    desc: "Tracking cement, steel, bricks, and other construction materials manually leads to over-ordering, theft, wastage, and frequent stockouts that halt site progress.",
  },
  {
    icon: BarChart3, title: "Cost Overruns & Budget Leakage",
    desc: "Without real-time cost monitoring, construction businesses struggle with budget overruns, unapproved expenses, and difficulty tracking profitability per project.",
  },
  {
    icon: Timer, title: "Lack of Real-time Site Visibility",
    desc: "Owners and stakeholders cannot monitor daily site progress, worker attendance, or equipment utilization without a centralized system providing live updates.",
  },
  {
    icon: FileText, title: "Compliance & Documentation Challenges",
    desc: "Managing safety permits, inspection reports, contracts, and regulatory filings manually creates compliance risks and document chaos during audits.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying project status, budget utilization, resource allocation, and key performance indicators across all construction sites." },
  { icon: CalendarCheck, title: "Project Planning & Scheduling", desc: "Plan and manage project timelines, assign tasks, set milestones, and track progress with automated scheduling tools and Gantt chart views." },
  { icon: Package, title: "Material & Inventory Management", desc: "Track stock levels for cement, steel, sand, bricks, and other materials with automated reorder alerts, supplier management, and site-wise inventory tracking." },
  { icon: Users, title: "Vendor & Subcontractor Management", desc: "Maintain vendor database, manage contracts, track subcontractor performance, process work bills, and automate purchase orders and payments." },
  { icon: Truck, title: "Equipment & Asset Tracking", desc: "Monitor heavy machinery, vehicles, and equipment utilization, schedule maintenance, track fuel consumption, and manage asset lifecycles efficiently." },
  { icon: CreditCard, title: "Billing & Invoicing", desc: "Generate project-wise invoices, manage work contracts, track milestone-based billing, process payments, and send digital receipts with GST compliance." },
  { icon: Clock, title: "HR & Payroll", desc: "Manage worker attendance, site-wise labor deployment, shift scheduling, payroll processing, and compliance with construction labor laws and regulations." },
  { icon: ShieldCheck, title: "Quality Control & Safety", desc: "Track quality inspections, manage safety checklists, record incident reports, and maintain safety compliance documentation for all project sites." },
  { icon: BookOpen, title: "Document Management", desc: "Store and manage all project documents including blueprints, contracts, permits, inspection reports, and change orders in a centralized digital repository." },
  { icon: DollarSign, title: "Accounting Integration", desc: "Synchronize financial data with accounting software for automated ledgers, project-wise P&L statements, cash flow tracking, and tax filings." },
  { icon: Cog, title: "GST Compliance", desc: "Generate GST-compliant invoices for work contracts, manage input tax credit on materials, file returns, and stay compliant with Indian construction tax regulations." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Site supervisors can update progress from the field while automatic backups ensure data safety." },
];

const benefits = [
  { icon: Zap, title: "Faster Project Delivery", desc: "Streamline project scheduling, resource allocation, and task tracking to complete construction projects on time and within budget every time." },
  { icon: RefreshCw, title: "Reduced Material Wastage", desc: "Optimize material procurement and inventory management to minimize wastage, theft, and over-ordering across all construction sites and projects." },
  { icon: Clock, title: "Better Time Management", desc: "Track project milestones, automate task assignments, and monitor progress in real time to eliminate delays and improve on-site productivity." },
  { icon: HeartHandshake, title: "Enhanced Client Trust", desc: "Provide clients with transparent project updates, accurate billing, and professional documentation that builds long-term trust and repeat business." },
  { icon: PieChart, title: "Data-driven Decision Making", desc: "Access real-time reports on project costs, resource utilization, and profitability to make informed business decisions with confidence." },
  { icon: TrendingUp, title: "Scalable Business Growth", desc: "Easily manage multiple projects, expand to new sites, and scale your construction business without changing your ERP system." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Construction Industry", desc: "Our ERP is tailored for Indian construction businesses with local compliance, currency, tax rules, and regional language support built right in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with cutting-edge web technologies, our ERP runs in any browser with zero installation and works seamlessly across all devices on site or in the office." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure even site supervisors and field staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small contractors, mid-sized builders, and large construction companies in India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive on-site and online training, video tutorials, and dedicated support to ensure smooth adoption of the ERP across your teams." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your project data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups for complete peace of mind." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your construction operations, project workflows, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your project types, company size, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your construction ERP project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate third-party tools as per your construction business needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing project records, material inventories, vendor lists, and financial data are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your team hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Construction ERP Software?", a: "Construction ERP (Enterprise Resource Planning) software is an integrated platform that helps construction businesses manage daily operations such as project planning, material procurement, vendor management, billing, HR, accounting, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency and project profitability." },
  { q: "How does Construction ERP improve project management?", a: "Construction ERP improves project management by providing real-time visibility into project timelines, budgets, resource allocation, and task completion. It enables managers to track progress against milestones, identify bottlenecks early, and make data-driven decisions that keep projects on schedule and within budget." },
  { q: "Can Construction ERP handle multiple project sites?", a: "Yes, our Construction ERP software is designed to manage multiple projects and sites simultaneously from a single dashboard. You can monitor progress, costs, material usage, and workforce deployment across all locations in real time, making it ideal for builders and contractors managing several projects at once." },
  { q: "Is Construction ERP suitable for small contractors?", a: "Absolutely. Our Construction ERP is designed to scale, making it suitable for small contractors, individual builders, and mid-sized construction firms as much as for large infrastructure companies. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in a construction management system?", a: "Essential features include project planning & scheduling, material and inventory management, vendor and subcontractor management, billing & invoicing, cost tracking, HR & payroll, quality control, document management, and GST compliance. Equipment tracking and mobile access are also highly valuable for on-site teams." },
  { q: "How does material management work in Construction ERP?", a: "The material management module allows you to track stock levels for cement, steel, sand, bricks, and other materials in real time across different sites. It supports automated reorder alerts, purchase order generation, supplier management, and site-wise consumption tracking to prevent wastage and stockouts." },
  { q: "How does Construction ERP help with cost control?", a: "Construction ERP provides real-time cost tracking against budgets for each project. It captures expenses on materials, labor, equipment, and subcontractors, and generates project-wise P&L statements. This helps you identify cost overflows early, control unapproved spending, and maximize profitability on every project." },
  { q: "Can I manage subcontractors through Construction ERP?", a: "Yes, the vendor and subcontractor management module lets you maintain detailed profiles, track performance, manage contracts and work orders, process bill submissions, and automate payments. You can also compare subcontractor rates and performance across projects." },
  { q: "How does billing and invoicing work for construction projects?", a: "The billing module supports milestone-based invoicing, work contract billing, material supply invoices, and service tax calculations. It automatically generates professional invoices based on project progress and sends digital copies to clients via email or SMS." },
  { q: "Is Construction ERP GST-compliant?", a: "Yes, our Construction ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN codes for materials and SAC codes for services, tracks input tax credit on purchases, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated with any tax regulation changes." },
  { q: "What is the cost of construction ERP software in India?", a: "The cost of construction ERP software depends on the number of projects, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does construction ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard construction ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does Construction ERP support equipment and asset tracking?", a: "Yes, our Construction ERP includes an equipment and asset tracking module that monitors heavy machinery, vehicles, and tools across all project sites. It tracks utilization, schedules maintenance, monitors fuel consumption, and manages asset depreciation and lifecycle." },
  { q: "How secure is my project data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems to safeguard your business information." },
  { q: "Can I access Construction ERP on my mobile phone?", a: "Yes, our Construction ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. Site supervisors can update progress, capture photos, record attendance, and approve requests directly from the field." },
  { q: "How does Construction ERP help with compliance and safety?", a: "The ERP helps maintain safety inspection records, incident reports, toolbox talk logs, and regulatory filings in one centralized repository. Automated reminders for permit renewals and compliance deadlines ensure you never miss critical safety or legal requirements." },
  { q: "What kind of training do you provide for construction teams?", a: "We provide comprehensive on-site and online training sessions for project managers, site engineers, supervisors, and accounting staff. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to Construction ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (project records, material inventories, vendor lists, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Construction ERP" },
  ],
};

export default function ConstructionErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/construction.jpg"
        title="Construction ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Construction ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection title="Streamline Your Construction Business Operations with Powerful ERP Software" colors={colors} paragraphs={[
  "Construction projects involve managing multiple stakeholders, materials, equipment, labour, and financials across various sites. Without a centralized system, tracking project progress, material consumption, labour costs, and milestone billing becomes chaotic, leading to delays, cost overruns, and reduced profitability.",
  "RajSons Designs offers a comprehensive Construction ERP solution designed for the Indian construction industry. Our software automates project management, material tracking, labour attendance, equipment management, milestone billing, and financial reporting. From small contractors to large developers, our ERP scales to your needs.",
  "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian construction businesses.",
]} />

      <ChallengesSection challenges={challenges} colors={colors} industry="Construction" />
      <FeaturesSection features={features} colors={colors} industry="Construction" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Construction" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Construction" />
    </>
  );
}
