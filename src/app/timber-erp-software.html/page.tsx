"use client";

import {
  Trees, Ruler, Weight, Truck, Package, BarChart3, ShieldCheck,
  Smartphone, DollarSign, ClipboardCheck, Settings, MapPin, Users,
  RefreshCw, Zap, HeadphonesIcon, CheckCircle, TrendingUp,
  Clock, PieChart, HeartHandshake, Laptop, UserCheck,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection,
  CtaSection, industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.timber;

const challenges = [
  {
    icon: Trees, title: "Log Inventory Tracking",
    desc: "Manual tracking of logs by species, grade, and dimension leads to inventory discrepancies, misplacement of valuable timber stock, and delayed production cycles.",
  },
  {
    icon: Ruler, title: "Inefficient Cutting & Yield Loss",
    desc: "Without optimized cutting patterns and dimension planning, sawmills face excessive wood wastage, reducing overall yield and significantly impacting profitability.",
  },
  {
    icon: Weight, title: "Inaccurate Volume & Weight Measurement",
    desc: "Relying on manual calculations for cubic meters, board feet, and weight causes billing errors, inventory inaccuracies, and disputes with buyers and suppliers.",
  },
  {
    icon: Truck, title: "Logistics & Dispatch Bottlenecks",
    desc: "Poor load planning, lack of vehicle tracking, and manual dispatch processes lead to delayed deliveries, higher transportation costs, and unhappy customers.",
  },
  {
    icon: Package, title: "Stockyard & Warehouse Mismanagement",
    desc: "Disorganized stockyards with no systematic rack or pile management result in timber degradation, moisture damage, and time wasted searching for specific stock.",
  },
  {
    icon: BarChart3, title: "No Real-time Production Visibility",
    desc: "Without live dashboards and analytics, mill owners cannot monitor production efficiency, machine downtime, or utilization rates across the sawmill.",
  },
];

const features = [
  { icon: ShieldCheck, title: "Certification & Compliance", desc: "Maintain FSC, PEFC, and chain-of-custody certifications effortlessly with automated tracking, complete audit trails, and one-click compliance reporting." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your timber production data is always safe and recoverable." },
  { icon: DollarSign, title: "Billing & Invoicing", desc: "Generate professional invoices with automatic volume and weight calculations, GST compliance, e-way bill generation, and digital payment integration." },
  { icon: ClipboardCheck, title: "Quality Control & Grading", desc: "Record grade, moisture content, treatment status, and defect details for each batch using barcode and RFID scanning for complete traceability." },
  { icon: Settings, title: "Production Planning & Scheduling", desc: "Plan sawing schedules, drying kiln operations, treatment cycles, and planing lines with automated resource allocation and capacity management." },
  { icon: MapPin, title: "Logistics & Dispatch Management", desc: "Optimize truck loads, plan delivery routes, track vehicle movements in real time, and manage e-way bills for seamless timber transportation." },
  { icon: Users, title: "Customer & Supplier Management", desc: "Maintain detailed profiles, track order history, manage rate contracts, and automate communication with timber buyers, suppliers, and transporters." },
  { icon: RefreshCw, title: "Inventory Management", desc: "Track timber inventory by species, grade, dimensions, and storage location with real-time stock visibility across yards, kilns, and warehouses." },
  { icon: Zap, title: "Cutting Optimization Engine", desc: "Maximize log yield with intelligent cutting pattern optimization, reducing waste and increasing profitability per cubic meter of timber processed." },
  { icon: HeadphonesIcon, title: "Dedicated Customer Support", desc: "Our support team provides prompt assistance, training, and troubleshooting to ensure your timber ERP operations run smoothly at all times." },
  { icon: CheckCircle, title: "Order Management", desc: "Process orders using timber-specific parameters, manage partial shipments, generate delivery challans, and track fulfillment status in real time." },
  { icon: TrendingUp, title: "Business Intelligence & Analytics", desc: "Real-time dashboards tracking production efficiency, inventory aging, profitability by product and species, machine performance, and executive KPIs." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate manual processes across log yard, sawmill, drying, treatment, and dispatch to maximize throughput and reduce operational bottlenecks." },
  { icon: RefreshCw, title: "Reduced Material Waste", desc: "Optimize cutting patterns and track waste at every production stage to minimize wood wastage and improve overall material yield significantly." },
  { icon: Clock, title: "Faster Order Fulfillment", desc: "Streamline order processing from quotation to dispatch, reducing lead times and ensuring timely delivery to your customers every time." },
  { icon: HeartHandshake, title: "Better Customer Relationships", desc: "Build trust with transparent order tracking, accurate invoicing, and consistent product quality that keeps timber buyers coming back." },
  { icon: PieChart, title: "Real-time Production Reports", desc: "Access up-to-date reports on yield percentages, machine efficiency, inventory turnover, and profitability for informed business decisions." },
  { icon: TrendingUp, title: "Scalable Business Growth", desc: "Easily add new processing lines, expand yard capacity, and onboard users as your timber business grows without changing your ERP system." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Timber Industry", desc: "Our ERP is designed specifically for Indian sawmills, plywood units, and timber merchants with local compliance, units, and business practices built right in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical mill staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large timber processing businesses in India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the timber ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your timber production data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your timber operations, production workflows, and specific business requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your mill type, production capacity, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your timber ERP project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows for sawing, drying, and treatment, and integrate necessary third-party tools." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment in your mill environment." },
  { step: "06", title: "Data Migration", desc: "Your existing inventory records, customer data, supplier lists, and financial records are securely migrated to the new timber ERP system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference and smooth operations." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews for your timber business." },
];

const faqData = [
  { q: "What is Timber ERP Software?", a: "Timber ERP (Enterprise Resource Planning) software is an integrated platform designed specifically for sawmills, plywood units, and timber processing businesses. It helps manage log procurement, inventory tracking by species and grade, production planning, cutting optimization, drying and treatment workflows, billing, logistics, and financial reporting from a single system, replacing fragmented manual processes with automated efficiency." },
  { q: "How does Timber ERP improve sawmill operations?", a: "Timber ERP improves sawmill operations by automating log yard management, optimizing cutting patterns for maximum yield, providing real-time production dashboards, streamlining dispatch and logistics, and ensuring accurate billing. Staff can access inventory levels, machine performance, and order status instantly, allowing managers to make data-driven decisions that reduce waste and increase profitability." },
  { q: "Can Timber ERP track inventory by species and grade?", a: "Yes, our Timber ERP offers multi-dimensional inventory tracking by species, grade, dimensions, moisture content, and treatment status. The system supports automatic volume calculations in cubic meters, board feet, and linear feet, and provides real-time visibility across log yards, drying kilns, processing areas, and finished goods warehouses." },
  { q: "Is Timber ERP suitable for small sawmills?", a: "Absolutely. Our Timber ERP is designed to scale, making it suitable for small sawmills, plywood workshops, and timber merchants as much as for large integrated processing facilities. We offer modular plans so you only pay for the features you need, with affordable pricing tailored for Indian businesses." },
  { q: "What features are important in a timber management system?", a: "Essential features include log inventory management, cutting optimization, production planning, quality control with grading, billing and invoicing with GST compliance, e-way bill generation, logistics management, customer and supplier management, business intelligence dashboards, and certification compliance tracking for FSC and PEFC standards." },
  { q: "How does cutting optimization work in Timber ERP?", a: "Our cutting optimization engine analyzes log dimensions, grade, and market demand to recommend the most profitable cutting patterns. It minimizes waste, maximizes yield, and considers primary and secondary products including woodchips and sawdust. The system continuously learns from post-production data to refine future cutting recommendations." },
  { q: "Can I manage multiple yards or mills from one ERP?", a: "Yes, our Timber ERP supports multi-site management, allowing you to oversee multiple yards, sawmills, processing units, and warehouses from a single dashboard. You can transfer inventory between locations, compare performance across sites, centralize reporting, and maintain consistent quality standards across your entire operation." },
  { q: "Is Timber ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements and infrastructure." },
  { q: "How does billing work for timber products in ERP?", a: "The billing module automatically generates invoices based on timber volume (cubic meters), weight, or piece count as per your pricing structure. It supports grade-based pricing, contract rate application, GST calculation with HSN codes, e-way bill generation, and digital receipt delivery via email or SMS to buyers." },
  { q: "Can Timber ERP handle GST and e-way bill compliance?", a: "Yes, our Timber ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN codes for timber products, tracks input tax credit, supports e-invoicing, generates GSTR-1 and GSTR-3B returns, and integrates with the e-way bill portal for seamless inter-state timber transport compliance." },
  { q: "What is the cost of Timber ERP software in India?", a: "The cost of Timber ERP software depends on the size of your operation, number of processing lines, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote based on your requirements." },
  { q: "How long does Timber ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard Timber ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting the project." },
  { q: "Does Timber ERP support FSC and PEFC certification?", a: "Yes, our Timber ERP has built-in support for FSC, PEFC, and chain-of-custody certification management. It automates documentation, maintains complete audit trails, tracks certified material through every production stage, and generates one-click compliance reports for certification audits." },
  { q: "How secure is my timber production data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access Timber ERP on my mobile phone?", a: "Yes, our Timber ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. You can check inventory levels, approve dispatch orders, view production reports, and monitor yard operations on the go, giving you complete control of your timber business from anywhere." },
  { q: "How does Timber ERP help with logistics and dispatch?", a: "The logistics module enables load optimization based on weight and volume, route planning with GPS tracking, vehicle assignment, e-way bill generation, and real-time shipment tracking. It also manages delivery challans, proof of delivery, and freight cost calculation for complete logistics visibility." },
  { q: "What kind of training do you provide for mill staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including yard supervisors, machine operators, billing staff, and management teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to Timber ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (inventory records, supplier lists, customer data, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live with your timber operations." },
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
    { "@type": "ListItem", position: 3, name: "Timber ERP" },
  ],
};

export default function TimberErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ErpHero
        image="/images/erp/timber.jpg"
        title="Timber ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Timber ERP" },
        ]}
        colors={colors}
      />
      <DescriptionSection
        title="Streamline Your Timber & Sawmill Operations with Powerful ERP Software"
        paragraphs={[
          "Running a sawmill, plywood unit, or timber trading business involves managing complex operations across multiple stages. From log procurement and yard inventory to cutting, drying, treatment, grading, and dispatch, every step must be coordinated precisely to maximize yield, minimize waste, and deliver quality products on time. Yet many timber businesses in India still rely on manual registers, scattered spreadsheets, and disconnected systems that lead to inventory discrepancies, production inefficiencies, and revenue loss. A comprehensive Timber ERP software solves these challenges by bringing every aspect of your timber operations into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Timber ERP solution designed specifically for the Indian timber and wood processing industry. Our software automates log yard management, production planning, cutting optimization, quality control, inventory tracking, billing, logistics, and financial reporting all in one place. Whether you run a small sawmill in Yamunanagar, a medium-sized plywood factory in Haryana, or a large timber processing facility across multiple states, our ERP adapts to your unique needs and helps you maximize profitability while maintaining the highest quality standards.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian timber businesses. Our cloud-based platform ensures you can manage your mill operations from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Timber ERP can transform your wood processing business today.",
        ]}
        colors={colors}
      />
      <ChallengesSection challenges={challenges} colors={colors} industry="Timber" />
      <FeaturesSection features={features} colors={colors} industry="Timber" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Timber" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Timber" />
    </>
  );
}
