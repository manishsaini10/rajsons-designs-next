"use client";

import {
  BookOpen, FileText, Cog, Package, BarChart3, Users, LayoutDashboard,
  CalendarCheck, Key, CreditCard, Timer, Route, Clock, DollarSign,
  ShieldCheck, Smartphone, Zap, RefreshCw, HeartHandshake, PieChart, TrendingUp,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection,
  industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.vehicle;

const challenges = [
  {
    icon: BookOpen, title: "Manual Booking & Reservation Management",
    desc: "Relying on phone calls, paper registers, and scattered spreadsheets for vehicle reservations leads to double bookings, lost records, and frustrated customers.",
  },
  {
    icon: FileText, title: "Disorganized Billing & Invoicing",
    desc: "Handwritten invoices and manual billing processes are slow, error-prone, and difficult to track, especially during peak rental seasons and fleet returns.",
  },
  {
    icon: Cog, title: "Fleet Maintenance Scheduling Issues",
    desc: "Without a centralized system, tracking vehicle maintenance, service history, and repair schedules becomes chaotic, causing unexpected breakdowns and downtime.",
  },
  {
    icon: Package, title: "Inventory & Parts Mismanagement",
    desc: "Managing spare parts, tires, fuel inventory, and vehicle accessories manually results in over-ordering, stockouts, and unnecessary operational costs.",
  },
  {
    icon: BarChart3, title: "Lack of Real-time Fleet Analytics",
    desc: "Without live dashboards, rental owners cannot monitor vehicle utilization, revenue per vehicle, driver performance, or fleet profitability at a glance.",
  },
  {
    icon: Users, title: "Communication Gaps Between Teams",
    desc: "Front desk, fleet maintenance, driver management, and accounts often work in silos, leading to miscommunication, delayed vehicle readiness, and poor customer service.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Fleet Analytics", desc: "Comprehensive real-time dashboard displaying vehicle utilization, revenue per unit, booking trends, and key fleet performance indicators at a glance." },
  { icon: CalendarCheck, title: "Reservation & Booking Engine", desc: "Integrated online booking engine that syncs with your website, allowing customers to reserve cars, bikes, or commercial vehicles with instant confirmation." },
  { icon: Key, title: "Vehicle Tracking & GPS Integration", desc: "Real-time GPS tracking for every vehicle in your fleet with geofencing alerts, trip history, speed monitoring, and location-based reports." },
  { icon: CreditCard, title: "Billing & Invoicing", desc: "Generate professional invoices, manage rental agreements, process security deposits, split bills, and send digital receipts with GST compliance built-in." },
  { icon: Users, title: "Customer & Driver Management", desc: "Maintain detailed customer profiles, driving license records, KYC documents, and driver assignment logs with automated expiry alerts." },
  { icon: Timer, title: "Fleet Maintenance Management", desc: "Schedule routine servicing, track repair history, manage fuel logs, set odometer-based alerts, and monitor vehicle health through automated workflows." },
  { icon: Package, title: "Inventory & Spare Parts Management", desc: "Track stock levels for spare parts, tires, fuel, and vehicle accessories with automated reorder alerts and vendor management." },
  { icon: Route, title: "Trip & Route Management", desc: "Plan and optimize rental trips, track distance traveled, manage multi-day rentals, and calculate fuel costs and toll expenses automatically." },
  { icon: Clock, title: "HR & Employee Management", desc: "Manage driver shifts, attendance tracking, payroll processing, and performance records for all fleet and office staff." },
  { icon: DollarSign, title: "Accounting & Financial Integration", desc: "Synchronize rental revenue, expenses, and financial data with accounting software for automated ledgers, P&L statements, and tax filings." },
  { icon: ShieldCheck, title: "GST Compliance & Tax Management", desc: "Generate GST-compliant invoices, file returns, manage input tax credit, and stay compliant with Indian tax regulations effortlessly." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any smartphone or device with cloud technology. Automatic backups ensure your fleet and customer data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate fleet scheduling, booking workflows, and maintenance planning to reduce manual effort and optimize team productivity across all departments." },
  { icon: RefreshCw, title: "Reduced Manual Errors", desc: "Eliminate data entry mistakes with automated workflows, digital agreements, and real-time validation checks throughout the rental system." },
  { icon: Clock, title: "Faster Check-in & Check-out", desc: "Reduce customer waiting times with instant reservation lookups, pre-verified documents, and express vehicle handover and return processes." },
  { icon: HeartHandshake, title: "Better Customer Experience", desc: "Delight customers with personalized rental options, real-time vehicle availability, faster responses, and a seamless rental experience from booking to return." },
  { icon: PieChart, title: "Real-time Fleet Revenue Reports", desc: "Make informed business decisions with up-to-date reports on fleet utilization, revenue per vehicle, booking trends, and profitability metrics." },
  { icon: TrendingUp, title: "Scalable Fleet Growth", desc: "Easily add new vehicles, expand to new locations, and onboard new users as your rental business grows without switching systems." },
];

const faqData = [
  { q: "What is Vehicle Rental ERP Software?", a: "Vehicle Rental ERP (Enterprise Resource Planning) software is an integrated platform that helps fleet operators manage daily operations such as vehicle reservations, booking management, billing, fleet maintenance, driver management, inventory, HR, accounting, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency and customer satisfaction." },
  { q: "How does Vehicle Rental ERP improve customer experience?", a: "Vehicle Rental ERP improves customer experience by enabling faster booking and vehicle handover, maintaining customer preferences and KYC documents for personalized service, managing rental extensions efficiently, and sending automated confirmations and reminders. Staff can access customer history and vehicle availability instantly, allowing them to deliver a smooth rental experience." },
  { q: "Can Vehicle Rental ERP integrate with online booking platforms?", a: "Yes, our Vehicle Rental ERP software integrates seamlessly with your website booking engine and popular travel platforms. Vehicle availability, rates, and reservations sync automatically across all channels in real time, preventing overbooking and ensuring accurate inventory management." },
  { q: "Is Vehicle Rental ERP suitable for small rental businesses?", a: "Absolutely. Our Vehicle Rental ERP is designed to scale, making it suitable for small car rental agencies, bike rental shops, and independent fleet operators as much as for large multi-location rental companies. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in a vehicle rental management system?", a: "Essential features include reservation and booking management, vehicle tracking and GPS integration, billing and invoicing, fleet maintenance scheduling, driver and customer management, inventory control, dashboard analytics, and GST compliance. Depending on your business model, route planning and HR modules may also be important." },
  { q: "How does fleet maintenance management work in ERP?", a: "The fleet maintenance module allows managers to schedule routine servicing, track repair history, manage fuel logs, set odometer-based alerts for service due dates, monitor vehicle health, and manage spare parts inventory through a centralized dashboard." },
  { q: "Can I manage multiple rental branches from one ERP?", a: "Yes, our Vehicle Rental ERP supports multi-branch management, allowing you to oversee multiple rental locations, fleet yards, or franchise outlets from a single dashboard. You can compare performance across branches, centralize reporting, and maintain consistent standards across your network." },
  { q: "Is Vehicle Rental ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and invoicing work in vehicle rental ERP?", a: "The billing module automatically generates invoices based on rental duration, vehicle type, additional services (GPS, child seat, insurance), extra kilometers, and applicable taxes. It supports security deposit management, bill splitting, partial payments, credit notes, and digital receipt delivery via email or SMS." },
  { q: "Can Vehicle Rental ERP handle GST compliance?", a: "Yes, our Vehicle Rental ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN codes, tracks input tax credit, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated automatically with any tax regulation changes." },
  { q: "What is the cost of vehicle rental ERP software in India?", a: "The cost of vehicle rental ERP software depends on fleet size, number of branches, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does vehicle rental ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard vehicle rental ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does vehicle rental ERP include GPS vehicle tracking?", a: "Yes, our Vehicle Rental ERP includes a comprehensive GPS tracking integration module that provides real-time vehicle location, geofencing alerts, trip history playback, speed monitoring, and distance-based billing. This helps you ensure vehicle safety and accurate billing for extra kilometers." },
  { q: "How secure is my fleet and customer data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access vehicle rental ERP on my mobile phone?", a: "Yes, our Vehicle Rental ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. You can check vehicle availability, view bookings, approve invoices, track fleet status, and monitor reports on the go." },
  { q: "How does vehicle rental ERP help with fleet revenue management?", a: "The ERP provides real-time dashboards and analytics that track fleet utilization rates, revenue per vehicle, booking trends, peak rental periods, and driver performance. These insights help you adjust pricing strategies, optimize fleet allocation, and maximize revenue across your rental business." },
  { q: "What kind of training do you provide for rental staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including booking desk, fleet maintenance, driver management, and accounting teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to vehicle rental ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (customer records, vehicle inventory, bookings, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Vehicle Rental ERP" },
  ],
};

export default function VehicleRentalErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/vehicle.jpg"
        title="Vehicle Rental ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Vehicle Rental ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Vehicle Rental Operations with Powerful ERP Software"
        paragraphs={[
          "Running a vehicle rental business comes with countless moving parts. From managing vehicle reservations and customer bookings to coordinating fleet maintenance, handling driver assignments, and tracking billing, every department must work in perfect sync to deliver a seamless rental experience. Yet many rental operators in India still rely on manual registers, scattered spreadsheets, and disconnected systems that lead to operational inefficiencies, delayed vehicle readiness, and revenue loss. A comprehensive Vehicle Rental ERP software solves these challenges by bringing every aspect of your fleet management into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Vehicle Rental ERP solution designed specifically for the Indian transportation and rental industry. Our software automates reservation management, online bookings, billing and invoicing, fleet maintenance workflows, inventory management, driver allocation, and customer relationship management all in one place. Whether you run a small car rental agency in Yamunanagar, a bike rental service in Chandigarh, or a large commercial fleet operator across multiple cities, our ERP adapts to your unique needs and helps you deliver exceptional service while maximizing revenue and profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian businesses. Our cloud-based platform ensures you can manage your fleet from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Vehicle Rental ERP can transform your fleet operations today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Vehicle Rental" />
      <FeaturesSection features={features} colors={colors} industry="Vehicle Rental" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Vehicle Rental" />
      <WhyRajsonsSection items={defaultWhyRajsons} colors={colors} />
      <ProcessSection steps={defaultProcessSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Vehicle Rental" />
    </>
  );
}
