"use client";

import { useState } from "react";
import { Shirt, Droplets, Clock, Truck, Package, Users, ShieldCheck,
  Smartphone, ClipboardCheck, BarChart3, Settings, DollarSign, Tags,
  MapPin, HeadphonesIcon, Zap, RefreshCw, CheckCircle,
} from "lucide-react";
import { ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection, industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp } from "@/components/erp-common";

const colors = industryColors.laundry;

const challenges = [
  {
    icon: Shirt, title: "Manual Order Tracking",
    desc: "Relying on paper registers and phone calls to track customer orders leads to lost garments, misplaced items, and frequent customer complaints.",
  },
  {
    icon: Droplets, title: "Chemical & Stain Management Issues",
    desc: "Without a centralized system, tracking chemical usage, stain treatment protocols, and fabric-specific care instructions becomes inconsistent and error-prone.",
  },
  {
    icon: Clock, title: "Turnaround Time Delays",
    desc: "Inefficient scheduling and lack of real-time production tracking often result in missed deadlines, delayed deliveries, and dissatisfied customers.",
  },
  {
    icon: Truck, title: "Logistics & Delivery Coordination",
    desc: "Managing pickup and delivery routes manually causes scheduling conflicts, fuel wastage, and poor coordination between drivers and the production team.",
  },
  {
    icon: Package, title: "Inventory Mismanagement",
    desc: "Tracking linen, cleaning chemicals, packaging materials, and supplies manually results in over-ordering, stockouts, and unnecessary operational costs.",
  },
  {
    icon: Users, title: "Communication Gaps Between Departments",
    desc: "Counter staff, production workers, drivers, and management often operate in silos, leading to miscommunication, delayed service, and order errors.",
  },
];

const features = [
  { icon: Smartphone, title: "Order Management & Mobile App", desc: "Accept orders via website, mobile app, phone, or walk-in. Track order status, assign job numbers, and send automated SMS updates to customers." },
  { icon: Shirt, title: "Garment & Item Tracking", desc: "Tag each garment with unique barcodes or RFID tags. Track items from check-in to cleaning, folding, packaging, and delivery with complete visibility." },
  { icon: ClipboardCheck, title: "Pickup & Delivery Management", desc: "Schedule pickups, assign drivers, optimize routes, and provide real-time tracking to customers for both pickup and delivery requests." },
  { icon: Truck, title: "Route & Logistics Optimization", desc: "Plan efficient delivery routes, manage vehicle schedules, track fuel consumption, and reduce operational costs with intelligent logistics planning." },
  { icon: Package, title: "Inventory & Supplies Management", desc: "Track stock levels for chemicals, packaging materials, linen, and uniforms with automated reorder alerts and vendor management." },
  { icon: BarChart3, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying order volume, revenue trends, staff productivity, and key performance indicators at a glance." },
  { icon: Users, title: "Customer Relationship Management", desc: "Maintain detailed customer profiles, track order history, manage loyalty programs, and send personalized offers and follow-up communications." },
  { icon: Settings, title: "Production & Workflow Automation", desc: "Automate washing, drying, folding, and packaging workflows. Set machine parameters, track cycle times, and optimize production schedules." },
  { icon: DollarSign, title: "Billing & Invoicing", desc: "Generate professional invoices, manage bulk billing, process payments, and send digital receipts with GST compliance built-in." },
  { icon: ShieldCheck, title: "Quality Control & Inspection", desc: "Implement checkpoints at each production stage, log inspection results, flag defects, and ensure consistent quality before dispatch." },
  { icon: Clock, title: "Scheduling & Shift Management", desc: "Manage employee shifts, track attendance, assign tasks based on order load, and monitor staff performance through automated workflows." },
  { icon: Tags, title: "Pricing & Rate Management", desc: "Configure flexible pricing tiers for different garment types, bulk orders, subscription plans, and seasonal promotions with ease." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate routine tasks, reduce manual intervention, and optimize staff productivity across your entire laundry operations." },
  { icon: RefreshCw, title: "Reduced Manual Errors", desc: "Eliminate data entry mistakes with barcode scanning, automated workflows, and real-time validation checks throughout the system." },
  { icon: Clock, title: "Faster Turnaround Time", desc: "Reduce order processing time with streamlined workflows, automated scheduling, and real-time production tracking from check-in to delivery." },
  { icon: ShieldCheck, title: "Consistent Quality & Compliance", desc: "Maintain uniform quality standards with stage-wise inspections, automated process controls, and detailed quality logs for every order." },
  { icon: BarChart3, title: "Real-time Business Insights", desc: "Make informed business decisions with up-to-date reports on orders, revenue, staff performance, and customer trends." },
  { icon: CheckCircle, title: "Scalable Growth for Your Business", desc: "Easily add branches, expand capacity, onboard new customers, and scale operations without switching systems or disrupting workflows." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Laundry Industry", desc: "Our ERP is designed keeping Indian laundries, dry cleaners, and linen rental businesses in mind, with local compliance, currency, and language support built right in." },
  { icon: Smartphone, title: "Modern Web & Mobile Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and offers a dedicated mobile app for staff and customers." },
  { icon: Users, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large laundry businesses across India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your business data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your laundry operations, pain points, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your business type, size, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate third-party tools as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing customer records, order data, inventory lists, and financial records are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Laundry ERP Software?", a: "Laundry ERP (Enterprise Resource Planning) software is an integrated platform that helps laundry businesses manage daily operations such as order booking, garment tracking, production scheduling, billing, inventory management, logistics, HR, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency and customer satisfaction." },
  { q: "How does Laundry ERP improve operational efficiency?", a: "Laundry ERP improves operational efficiency by automating order intake, barcode-based garment tracking, production scheduling, route planning for pickups and deliveries, and real-time performance monitoring. Staff can access order history and customer preferences instantly, allowing them to process orders faster and reduce turnaround times significantly." },
  { q: "Can Laundry ERP integrate with my website for online orders?", a: "Yes, our Laundry ERP software integrates seamlessly with your website and mobile app, allowing customers to place orders online, schedule pickups, track their order status in real time, and make payments digitally. All orders sync automatically with the backend system without any manual entry." },
  { q: "Is Laundry ERP suitable for small laundry businesses?", a: "Absolutely. Our Laundry ERP is designed to scale, making it suitable for small neighborhood laundries, dry cleaning shops, and boutique laundry services as much as for large commercial laundry plants and linen rental companies. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in a laundry management system?", a: "Essential features include order management, garment tracking via barcode or RFID, pickup and delivery management, production workflow automation, billing and invoicing, inventory control, dashboard analytics, customer management, and GST compliance. For larger operations, route optimization and multi-branch management modules are also important." },
  { q: "How does garment tracking work in laundry ERP?", a: "Each garment is tagged with a unique barcode or RFID label at check-in. The system tracks every stage cleaning, drying, ironing, folding, packaging, and dispatch through barcode scans. This provides complete visibility into each order's location and status, eliminating lost items and ensuring timely delivery." },
  { q: "Can I manage multiple laundry branches from one ERP?", a: "Yes, our Laundry ERP supports multi-branch management, allowing you to oversee multiple locations from a single dashboard. You can compare performance across branches, centralize reporting, transfer inventory between locations, and maintain consistent service standards chain-wide." },
  { q: "Is Laundry ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and invoicing work in laundry ERP?", a: "The billing module automatically generates invoices based on garment types, service selected (wash, dry clean, iron, fold), quantity, and applicable taxes. It supports bulk billing for corporate clients, subscription billing for regular customers, partial payments, credit notes, and digital receipt delivery via email or SMS." },
  { q: "Can Laundry ERP handle GST compliance?", a: "Yes, our Laundry ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN codes, tracks input tax credit on chemicals and supplies, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated automatically with any tax regulation changes." },
  { q: "What is the cost of laundry ERP software in India?", a: "The cost of laundry ERP software depends on the business size, number of branches, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does laundry ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard laundry ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does laundry ERP include route planning for pickup/delivery?", a: "Yes, our Laundry ERP includes a logistics module with route planning and optimization features. You can assign drivers, plan the most efficient pickup and delivery routes, track vehicles in real time, and provide customers with estimated arrival windows and live tracking updates." },
  { q: "How secure is my customer data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business and customer information." },
  { q: "Can I access laundry ERP on my mobile phone?", a: "Yes, our Laundry ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. We also offer dedicated mobile apps for staff to manage orders, scan barcodes, track production, and process deliveries on the go, as well as a customer app for order placement and tracking." },
  { q: "How does laundry ERP help with production management?", a: "The production module allows you to automate washing and drying cycles, set machine parameters, track cycle times, assign tasks to staff based on workload, and monitor production progress in real time. This helps optimize machine utilization, reduce energy costs, and ensure consistent quality across all orders." },
  { q: "What kind of training do you provide for laundry staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including counter staff, production workers, drivers, and management teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to laundry ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (customer records, order history, inventory, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Laundry ERP" },
  ],
};

export default function LaundryErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/laundry.jpg"
        title="Laundry ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Laundry ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Laundry & Dry Cleaning Operations with Powerful ERP Software"
        paragraphs={[
          "Running a laundry, dry cleaning, or linen rental business comes with countless moving parts. From managing customer orders and tracking thousands of garments to coordinating pickups and deliveries, handling production workflows, and maintaining inventory of chemicals and supplies, every step must be executed flawlessly to ensure customer satisfaction. Yet many laundry businesses in India still rely on manual registers, paper tags, and disconnected systems that lead to lost garments, delayed deliveries, and operational chaos. A comprehensive Laundry ERP software solves these challenges by bringing every aspect of your business into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Laundry ERP solution designed specifically for the Indian laundry industry. Our software automates order booking, barcode-based garment tracking, production scheduling, pickup and delivery logistics, billing and invoicing, inventory management, and customer relationship management all in one place. Whether you run a small dry cleaning shop in Yamunanagar, a medium-scale laundry plant in Chandigarh, or a large linen rental service across multiple cities, our ERP adapts to your unique needs and helps you deliver consistent quality while maximizing profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian businesses. Our cloud-based platform ensures you can manage your laundry operations from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Laundry ERP can transform your business today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Laundry" />
      <FeaturesSection features={features} colors={colors} industry="Laundry" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Laundry" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Laundry" />
    </>
  );
}
