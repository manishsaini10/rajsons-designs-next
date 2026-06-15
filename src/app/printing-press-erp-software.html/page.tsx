"use client";

import {
  Printer, ScrollText, FileText, Layers, Package, Users, Settings, BarChart3,
  ShieldCheck, HeadphonesIcon, Cog, Cloud, Timer, TrendingUp, Check, ArrowRight,
  BookOpen, Home, MapPin, Phone, RefreshCw, Menu, LayoutDashboard,
  Smartphone, DollarSign, UserCheck, Zap, Clock, HeartHandshake,
  PieChart, Laptop, Search, HelpCircle, ClipboardList, Calculator, Receipt, Truck,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection,
  CtaSection, industryColors, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.printing;

const challenges = [
  {
    icon: ClipboardList, title: "Manual Job Order Management",
    desc: "Relying on paper-based job slips and registers for work orders leads to miscommunication, lost instructions, and delays in production scheduling.",
  },
  {
    icon: Package, title: "Paper & Material Waste",
    desc: "Without accurate tracking, printing presses face excessive paper waste, ink overuse, and raw material shortages that eat into profit margins.",
  },
  {
    icon: Calculator, title: "Inaccurate Job Costing",
    desc: "Calculating per-job costs manually — paper, ink, plates, labor, and machine time — is error-prone and makes it difficult to price jobs profitably.",
  },
  {
    icon: BarChart3, title: "Production Tracking Issues",
    desc: "Lack of real-time visibility into job status across prepress, printing, and finishing stages causes bottlenecks, missed deadlines, and unhappy clients.",
  },
  {
    icon: Truck, title: "Delivery & Deadline Management",
    desc: "Coordinating delivery schedules, dispatch challans, and client confirmations manually results in missed deadlines and damaged customer relationships.",
  },
  {
    icon: Users, title: "Communication Gaps Between Departments",
    desc: "Sales, production, finishing, and dispatch teams often work in silos, leading to misaligned priorities, rework, and delayed client deliveries.",
  },
];

const features = [
  { icon: FileText, title: "Job Order Management", desc: "Create, track, and manage printing job orders from enquiry to delivery with complete digital traceability and status updates." },
  { icon: Calculator, title: "Estimating & Quoting", desc: "Generate accurate cost estimates considering paper, ink, plates, making-ready, machine time, and finishing to deliver competitive quotes instantly." },
  { icon: LayoutDashboard, title: "Production Planning & Scheduling", desc: "Plan production across prepress, printing, and finishing with visual scheduling, machine load balancing, and real-time bottleneck detection." },
  { icon: Package, title: "Paper & Inventory Management", desc: "Track paper stock by GSM, size, brand, and grade. Manage inks, plates, chemicals, and consumables with automated reorder alerts." },
  { icon: DollarSign, title: "Job Costing & Profit Analysis", desc: "Capture every cost — material, labour, machine time, and overhead — per job with real-time profitability tracking and variance reports." },
  { icon: Receipt, title: "Billing & Invoicing", desc: "Generate professional invoices, delivery challans, credit notes, and payment receipts with GST compliance and auto-calculation of taxes." },
  { icon: Layers, title: "Prepress Workflow", desc: "Streamline file approvals, imposition, plate making, and proofing with digital job tickets and seamless integration with prepress systems." },
  { icon: Printer, title: "Shop Floor Management", desc: "Monitor press-wise production, operator performance, downtime, and output quality through digital dashboards connected to the shop floor." },
  { icon: Truck, title: "Delivery Challan & Logistics", desc: "Manage dispatch schedules, delivery challans, vehicle tracking, and client acknowledgements with automated SMS and email notifications." },
  { icon: Smartphone, title: "Client Portal & Communication", desc: "Provide clients with a self-service portal to place orders, check job status, view proofs, download invoices, and track deliveries." },
  { icon: ShieldCheck, title: "GST Compliance", desc: "Generate GST-compliant invoices with HSN codes, manage input tax credit, file GSTR returns, and stay compliant with Indian tax regulations." },
  { icon: BarChart3, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying production metrics, revenue trends, job profitability, machine utilization, and sales performance." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate job order processing, production scheduling, and dispatch workflows to reduce turnaround times and boost throughput." },
  { icon: RefreshCw, title: "Reduced Material Waste", desc: "Eliminate paper, ink, and consumable waste with precise job costing, inventory tracking, and wastage analysis reports." },
  { icon: PieChart, title: "Accurate Job Costing", desc: "Know exactly what each job costs with granular tracking of materials, labour, machine time, and overheads for profitable pricing decisions." },
  { icon: Clock, title: "On-time Delivery", desc: "Meet client deadlines consistently with real-time production tracking, bottleneck alerts, and automated dispatch scheduling." },
  { icon: HeartHandshake, title: "Better Client Relationships", desc: "Delight clients with transparent job tracking, timely updates, digital proofs, and professional billing that builds trust and repeat business." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Easily add new printing machines, expand to new locations, and increase production capacity without changing your ERP system." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Printing Industry", desc: "Our ERP is purpose-built for Indian printing presses, with local compliance, GST support, HSN codes, and workflows tailored for the Indian market." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that shop floor staff, managers, and owners can start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large printing businesses across India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your printing business data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We visit your printing press to understand your workflows, machines, job types, and operational pain points in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your press size, product range, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate third-party tools as per your printing needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing job records, customer data, inventory lists, and financial records are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Printing Press ERP Software?", a: "Printing Press ERP (Enterprise Resource Planning) software is an integrated platform that helps printing businesses manage job orders, production planning, paper inventory, job costing, billing, dispatch, and accounting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency, reducing waste, and boosting profitability." },
  { q: "How does Printing Press ERP improve production efficiency?", a: "Printing Press ERP improves production efficiency by automating job order processing, providing real-time production tracking across prepress, printing, and finishing stages, optimizing machine scheduling to reduce idle time, and alerting managers to bottlenecks before they cause delays. Digital job tickets eliminate miscommunication and ensure every department has the information they need to execute jobs accurately." },
  { q: "Can Printing Press ERP integrate with existing printing machines?", a: "Yes, our ERP can integrate with modern digital presses, offset machines, and finishing equipment through standard data interfaces. Production data such as machine running time, job counts, and operator activity can be captured automatically, providing real-time visibility into shop floor performance without manual data entry." },
  { q: "Is Printing Press ERP suitable for small printing presses?", a: "Absolutely. Our Printing Press ERP is designed to scale, making it suitable for small job printers, offset presses, digital print shops, and large commercial printing facilities alike. We offer modular plans so you only pay for the features you need, and the system grows with your business." },
  { q: "What features are important in a printing management system?", a: "Essential features include job order management, estimating & quoting, paper inventory management, job costing, production scheduling, billing & invoicing, delivery challan tracking, and dashboard analytics. Depending on your press type, prepress workflow, client portal, and HR modules may also be important for your business." },
  { q: "How does job costing work in printing press ERP?", a: "The job costing module automatically captures all direct costs — paper consumption, ink usage, plate costs, machine time, labour hours, and finishing expenses — and allocates them to individual jobs. Overheads are apportioned based on predefined rules. This gives you precise per-job profitability, helps identify cost overruns, and enables data-driven pricing decisions." },
  { q: "Can I manage multiple printing units from one ERP?", a: "Yes, our Printing Press ERP supports multi-unit management, allowing you to oversee multiple presses, finishing units, or branch locations from a single dashboard. You can compare performance across units, centralize purchasing, and maintain consistent job costing and pricing standards across your entire operation." },
  { q: "Is Printing Press ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over your data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and invoicing work in printing press ERP?", a: "The billing module automatically generates invoices based on job costs, agreed pricing, additional charges (lamination, binding, delivery), and applicable taxes. It supports delivery challan-linked invoicing, partial billing for long-running jobs, credit notes, and digital invoice delivery via email or SMS to clients." },
  { q: "Can Printing Press ERP handle GST compliance?", a: "Yes, our Printing Press ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN codes for printing services and paper products, tracks input tax credit on raw materials, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated automatically with any tax regulation changes." },
  { q: "What is the cost of printing press ERP software in India?", a: "The cost of printing press ERP software depends on the press size, number of machines, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does printing press ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard printing press ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does printing press ERP include paper inventory management?", a: "Yes, our ERP includes a comprehensive paper inventory module that tracks stock by GSM, size, brand, grade, and colour. It supports multiple godowns, automated reorder points, supplier management, and consumption tracking per job. Real-time stock visibility ensures you never run out of critical materials or over-order expensive paper grades." },
  { q: "How secure is my printing business data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access printing press ERP on my mobile phone?", a: "Yes, our Printing Press ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. Managers can approve job quotes, check production status, view inventory levels, and review financial reports on the go, giving them complete control over operations from anywhere." },
  { q: "How does printing press ERP help with delivery deadlines?", a: "The ERP provides real-time production tracking with automated alerts for approaching deadlines. Production managers can see which jobs are on track, which are at risk, and reallocate machine time or manpower to prioritize urgent orders. Dispatch scheduling integration ensures finished goods are delivered on time with proper documentation." },
  { q: "What kind of training do you provide for printing staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including production managers, machine operators, billing staff, and management teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to printing press ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (job records, customer details, inventory, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live, and our support team is there every step of the way." },
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
    { "@type": "ListItem", position: 3, name: "Printing Press ERP" },
  ],
};

export default function PrintingPressErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/printing.jpg"
        title="Printing Press ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Printing Press ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Printing Press Operations with Powerful ERP Software"
        paragraphs={[
          "Running a printing press, offset unit, or digital print shop involves coordinating many moving parts — from receiving job orders and estimating costs to procuring paper, scheduling production across multiple machines, managing finishing workflows, and dispatching finished goods on time. Yet many printing businesses in India still rely on manual job slips, scattered Excel sheets, and disconnected systems that lead to production delays, material wastage, pricing errors, and missed deadlines. A comprehensive Printing Press ERP software brings every aspect of your printing operations into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Printing Press ERP solution designed specifically for the Indian printing industry. Our software automates job order management, estimating and quoting, paper inventory tracking, production planning, job costing, billing and invoicing, delivery challan management, and client communication all in one place. Whether you run a small job press in Yamunanagar, a mid-size offset unit in Delhi, or a large commercial printing facility with multiple locations, our ERP adapts to your unique needs and helps you deliver quality output on time while maximizing profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian businesses. Our cloud-based platform ensures you can manage your printing press from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Printing Press ERP can transform your printing business today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Printing Press" />

      <FeaturesSection features={features} colors={colors} industry="Printing Press" />

      <BenefitsSection benefits={benefits} colors={colors} industry="Printing Press" />

      <WhyRajsonsSection items={whyRajsons} colors={colors} />

      <ProcessSection steps={processSteps} colors={colors} />

      <FaqSection faqData={faqData} colors={colors} />

      <CtaSection colors={colors} industry="Printing Press" />
    </>
  );
}
