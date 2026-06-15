"use client";

import {
  BookOpen, FileText, ScrollText, Package, BarChart3, Users,
  LayoutDashboard, Route, Compass, CreditCard, Map, Clock,
  DollarSign, ShieldCheck, Smartphone, Zap, RefreshCw,
  HeartHandshake, PieChart, TrendingUp,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection,
  CtaSection, industryColors, defaultWhyRajsons, defaultProcessSteps,
} from "@/components/erp-common";

const colors = industryColors.travel;

const challenges = [
  {
    icon: BookOpen, title: "Manual Booking & Itinerary Management",
    desc: "Relying on scattered spreadsheets, phone calls, and email chains for reservations leads to double bookings, missed confirmations, and client dissatisfaction.",
  },
  {
    icon: FileText, title: "Complex Tour Package Pricing",
    desc: "Calculating package costs with multiple components — flights, hotels, transfers, activities — is tedious and error-prone without automated pricing engines.",
  },
  {
    icon: ScrollText, title: "Vendor & Supplier Coordination Issues",
    desc: "Without a centralized system, managing rate contracts, availability, and communication with airlines, hotels, and transport providers becomes chaotic.",
  },
  {
    icon: Package, title: "Payment Tracking & Reconciliation",
    desc: "Tracking partial payments, refunds, forex conversions, and multi-channel payments across dozens of clients leads to accounting discrepancies and cash flow gaps.",
  },
  {
    icon: BarChart3, title: "Lack of Real-time Business Insights",
    desc: "Without live dashboards, agency owners cannot monitor booking trends, profit margins, staff performance, or vendor costs at a single glance.",
  },
  {
    icon: Users, title: "Fragmented Customer Communication",
    desc: "Customer histories, preferences, and follow-ups are scattered across emails and messages, making personalized service and upselling nearly impossible.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying bookings, revenue, profit margins, cancellation trends, and key performance indicators at a glance." },
  { icon: Route, title: "Booking & Reservation Management", desc: "Centrally manage flight bookings, hotel reservations, tour packages, transfers, and activities from a single unified interface with instant confirmation." },
  { icon: Compass, title: "Tour Package Builder", desc: "Create dynamic tour packages with customizable components — flights, hotels, meals, transfers, guides — and generate instant pricing with profit margin visibility." },
  { icon: CreditCard, title: "Billing & Invoicing", desc: "Generate professional GST-compliant invoices, manage partial payments, process refunds, handle multi-currency billing, and send digital receipts automatically." },
  { icon: ScrollText, title: "Itinerary Management", desc: "Generate professional day-wise itineraries with activity details, timings, contact numbers, hotel info, and travel tips — shareable as PDF or email." },
  { icon: Package, title: "Vendor & Supplier Management", desc: "Maintain a centralized database of airlines, hotels, transport providers, guides, and tour operators with rate contracts, availability, and performance tracking." },
  { icon: Users, title: "Customer Relationship Management", desc: "Maintain detailed client profiles, travel history, preferences, family details, anniversary reminders, and loyalty programs for personalized service." },
  { icon: Map, title: "Lead & Marketing Management", desc: "Capture leads from website, social media, and referrals; automate follow-ups, send promotional campaigns, and track conversion rates effortlessly." },
  { icon: Clock, title: "HR & Commission Management", desc: "Manage employee attendance, shift scheduling, performance records, and automated commission calculations for travel consultants and sales staff." },
  { icon: DollarSign, title: "Accounting & Tax Compliance", desc: "Synchronize financial data for automated ledgers, P&L statements, GST returns, TDS filing, and input tax credit management with popular accounting software." },
  { icon: ShieldCheck, title: "Multi-currency & Forex Support", desc: "Handle international bookings with multi-currency pricing, real-time forex conversion, and integrated payment gateway supporting global transactions." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your travel data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate routine tasks, streamline booking workflows, and optimize staff productivity across your entire travel agency." },
  { icon: RefreshCw, title: "Reduced Manual Errors", desc: "Eliminate data entry mistakes with automated pricing, validation checks, and real-time synchronization across all booking channels." },
  { icon: Clock, title: "Faster Booking & Confirmation", desc: "Reduce client wait times with instant package quotes, real-time availability checks, and automated confirmation emails within minutes." },
  { icon: HeartHandshake, title: "Enhanced Customer Experience", desc: "Delight travelers with personalized recommendations, timely updates, seamless communication, and a memorable end-to-end service journey." },
  { icon: PieChart, title: "Real-time Revenue & Profit Reports", desc: "Make informed business decisions with up-to-date reports on bookings, commissions, profit margins, vendor costs, and cash flow trends." },
  { icon: TrendingUp, title: "Scalable Business Growth", desc: "Easily add new branches, expand to new destinations, onboard more staff, and scale your travel business without switching systems." },
];

const faqData = [
  { q: "What is Travel Agency ERP Software?", a: "Travel Agency ERP (Enterprise Resource Planning) software is an integrated platform that helps travel agencies manage daily operations such as bookings, tour package creation, invoicing, vendor management, customer relationships, HR, accounting, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency and client satisfaction." },
  { q: "How does Travel Agency ERP improve customer experience?", a: "Travel ERP improves customer experience by enabling faster booking confirmations, maintaining traveler preferences for personalized recommendations, managing itinerary details efficiently, and sending automated updates and follow-ups. Staff can access client history instantly, allowing them to anticipate needs and deliver a memorable travel experience." },
  { q: "Can Travel ERP integrate with online booking platforms?", a: "Yes, our Travel Agency ERP integrates seamlessly with popular online booking platforms, GDS systems, airline APIs, hotel aggregators, and third-party travel portals. Inventory, pricing, and reservations sync automatically across all channels in real time, preventing overbooking and ensuring accurate availability." },
  { q: "Is Travel ERP suitable for small travel agencies?", a: "Absolutely. Our Travel ERP is designed to scale, making it suitable for small home-based travel agencies, boutique tour operators, and DMCs as much as for large travel enterprises and franchise chains. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in a travel agency management system?", a: "Essential features include booking & reservation management, tour package builder, billing & invoicing, itinerary management, vendor & supplier management, customer relationship management, dashboard analytics, and GST compliance. Depending on your business model, multi-currency support and commission management modules may also be important." },
  { q: "How does Tour Package management work in ERP?", a: "The tour package builder allows you to create customizable packages by combining flights, hotels, transfers, meals, activities, and guides. The system automatically calculates costs, applies markups, shows profit margins, and generates professional quotes and itineraries that can be shared with clients instantly." },
  { q: "Can I manage multiple travel agency branches from one ERP?", a: "Yes, our Travel ERP supports multi-branch management, allowing you to oversee multiple locations, franchise offices, or destination offices from a single dashboard. You can compare performance across branches, centralize reporting, and maintain consistent service standards chain-wide." },
  { q: "Is Travel Agency ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and invoicing work in Travel ERP?", a: "The billing module automatically generates invoices based on package components, add-ons, and applicable taxes. It supports partial payments, installment plans, refunds, credit notes, multi-currency billing, and digital receipt delivery via email or SMS with GST compliance built-in." },
  { q: "Can Travel ERP handle GST compliance?", a: "Yes, our Travel ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN/SAC codes, tracks input tax credit, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated automatically with any tax regulation changes." },
  { q: "What is the cost of Travel Agency ERP software in India?", a: "The cost of Travel Agency ERP depends on the agency size, number of users, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does Travel ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard Travel ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does Travel ERP include multi-currency support?", a: "Yes, our Travel ERP includes full multi-currency support for international bookings. You can create packages in multiple currencies, apply real-time forex conversion rates, generate invoices in the client's preferred currency, and reconcile payments across different currencies seamlessly." },
  { q: "How secure is my travel agency data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access Travel ERP on my mobile phone?", a: "Yes, our Travel ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. You can check booking status, approve quotes, manage itineraries, and monitor reports on the go from anywhere in the world." },
  { q: "How does Travel ERP help with revenue management?", a: "The ERP provides real-time dashboards and analytics that track booking volumes, profit margins per package, vendor costs, commission earnings, and sales trends. These insights help you adjust pricing strategies, identify top-performing destinations, and maximize profitability across your travel business." },
  { q: "What kind of training do you provide for travel agency staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including travel consultants, operations teams, and management. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to Travel ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (client records, bookings, vendor contracts, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Travel Agency ERP" },
  ],
};

export default function TravelAgencyErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ErpHero title="Travel Agency ERP Software" image="/images/erp/travel.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "ERP Solutions", href: "/erp-software-solutions.html" }, { label: "Travel Agency ERP" }]}
        stats={[{ value: "15+", label: "Years Experience" }, { value: "500+", label: "Happy Clients" }, { value: "99.9%", label: "Uptime" }, { value: "24/7", label: "Support" }]}
        colors={colors} />
      <DescriptionSection title="Streamline Your Travel Agency Operations with Powerful ERP Software" colors={colors} paragraphs={[
        "Managing a travel agency involves coordinating tour packages, flight and hotel bookings, customer advances, supplier payments, and agent commissions across multiple channels. Without a centralized system, tracking bookings, managing cancellations, and calculating agent payouts becomes chaotic.",
        "RajSons Designs offers a powerful Travel Agency ERP solution designed specifically for the Indian travel industry. Our software automates tour package management, booking tracking, advance management, supplier cost tracking, agent commission calculation, and GST billing. Whether you run a small travel agency or a large tour operator, our ERP adapts to your needs.",
        "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian travel businesses.",
      ]} />
      <ChallengesSection challenges={challenges} colors={colors} industry="Travel Agency" />
      <FeaturesSection features={features} colors={colors} industry="Travel Agency" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Travel Agency" />
      <WhyRajsonsSection items={defaultWhyRajsons} colors={colors} />
      <ProcessSection steps={defaultProcessSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Travel Agency" />
    </>
  );
}
