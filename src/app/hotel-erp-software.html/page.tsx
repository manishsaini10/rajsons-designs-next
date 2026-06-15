"use client";

import { BookOpen, FileText, ScrollText, Package, BarChart3, Users,
  LayoutDashboard, BedDouble, CalendarCheck, CreditCard, Coffee,
  Smartphone, Clock, DollarSign, ShieldCheck, Zap, RefreshCw,
  HeartHandshake, PieChart, TrendingUp, MapPin, Laptop, UserCheck,
  HeadphonesIcon } from "lucide-react";
import { ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection, industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp } from "@/components/erp-common";

const colors = industryColors.hotel;

const challenges = [
  {
    icon: BookOpen, title: "Manual Booking Management",
    desc: "Relying on phone calls, registers, and manual ledgers for reservations leads to double bookings, lost records, and guest dissatisfaction.",
  },
  {
    icon: FileText, title: "Paper-based Billing",
    desc: "Handwritten invoices and manual billing processes are slow, error-prone, and difficult to track, especially during peak check-out hours.",
  },
  {
    icon: ScrollText, title: "Housekeeping Coordination Issues",
    desc: "Without a centralized system, housekeeping staff struggle to receive real-time room status updates, causing delays in room readiness.",
  },
  {
    icon: Package, title: "Inventory Mismanagement",
    desc: "Tracking linen, toiletries, mini-bar stock, and other supplies manually results in over-ordering, stockouts, and unnecessary operational costs.",
  },
  {
    icon: BarChart3, title: "Lack of Real-time Reporting",
    desc: "Without live dashboards, hotel owners cannot monitor occupancy rates, revenue trends, or staff performance at a glance.",
  },
  {
    icon: Users, title: "Communication Gaps Between Departments",
    desc: "Front desk, housekeeping, maintenance, and management often operate in silos, leading to miscommunication and delayed service delivery.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying occupancy, revenue, booking trends, and key performance indicators at a glance." },
  { icon: BedDouble, title: "Front Desk Management", desc: "Streamline check-in, check-out, room assignments, guest profiles, and reservation modifications from a single unified interface." },
  { icon: CalendarCheck, title: "Online Booking Engine", desc: "Integrated booking engine that syncs with your website and OTAs, allowing guests to reserve rooms directly with instant confirmation." },
  { icon: CreditCard, title: "Billing & Invoicing", desc: "Generate professional invoices, manage folios, split bills, process payments, and send digital receipts with GST compliance built-in." },
  { icon: ScrollText, title: "Housekeeping Management", desc: "Assign cleaning tasks, track room status in real time, manage lost & found, and schedule deep cleaning through automated workflows." },
  { icon: Package, title: "Inventory Management", desc: "Track stock levels for F&B, toiletries, linens, and other supplies with automated reorder alerts and vendor management." },
  { icon: Coffee, title: "Restaurant POS Integration", desc: "Seamlessly connect your in-house restaurant, bar, and room service orders to guest folios for consolidated billing." },
  { icon: Users, title: "Customer Relationship Management", desc: "Maintain detailed guest profiles, track preferences, manage loyalty programs, and send personalized offers and follow-up emails." },
  { icon: Clock, title: "HR & Payroll", desc: "Manage employee attendance, shift scheduling, payroll processing, and performance records for all hotel staff." },
  { icon: DollarSign, title: "Accounting Integration", desc: "Synchronize financial data with popular accounting software for automated ledgers, P&L statements, and tax filings." },
  { icon: ShieldCheck, title: "GST Compliance", desc: "Generate GST-compliant invoices, file returns, manage input tax credit, and stay compliant with Indian tax regulations effortlessly." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate routine tasks, reduce manual intervention, and optimize staff productivity across all departments." },
  { icon: RefreshCw, title: "Reduced Manual Errors", desc: "Eliminate data entry mistakes with automated workflows and real-time validation checks throughout the system." },
  { icon: Clock, title: "Faster Check-in/Check-out", desc: "Reduce guest waiting times with instant reservation lookups, pre-arrival registration, and express checkout options." },
  { icon: HeartHandshake, title: "Better Guest Experience", desc: "Delight guests with personalized service, faster responses, and a seamless stay experience from booking to departure." },
  { icon: PieChart, title: "Real-time Revenue Reports", desc: "Make informed business decisions with up-to-date reports on occupancy, ADR, RevPAR, and other key hospitality metrics." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Easily add properties, expand room inventory, and onboard new users as your hospitality business grows without switching systems." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Hospitality Industry", desc: "Our ERP is designed keeping Indian hotels, resorts, and guesthouses in mind, with local compliance, currency, and language support built right in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large hospitality businesses in India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your hotel data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your hotel operations, pain points, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your property type, size, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate third-party tools as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing guest records, booking data, inventory lists, and financial records are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Hotel ERP Software?", a: "Hotel ERP (Enterprise Resource Planning) software is an integrated platform that helps hoteliers manage daily operations such as reservations, check-ins, billing, housekeeping, inventory, HR, accounting, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency and guest satisfaction." },
  { q: "How does Hotel ERP improve guest experience?", a: "Hotel ERP improves guest experience by enabling faster check-in and check-out, maintaining guest preferences for personalized service, managing room service requests efficiently, and sending automated confirmations and follow-ups. Staff can access guest history instantly, allowing them to anticipate needs and deliver a memorable stay." },
  { q: "Can Hotel ERP integrate with online booking platforms?", a: "Yes, our Hotel ERP software integrates seamlessly with popular online travel agencies (OTAs) such as Booking.com, Expedia, Goibibo, and MakeMyTrip, as well as your own website booking engine. Room availability, rates, and reservations sync automatically across all channels in real time, preventing overbooking." },
  { q: "Is Hotel ERP suitable for small hotels and inns?", a: "Absolutely. Our Hotel ERP is designed to scale, making it suitable for small hotels, budget inns, bed & breakfasts, and guesthouses as much as for large resorts and hotel chains. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in a hotel management system?", a: "Essential features include front desk management, online booking engine, billing & invoicing, housekeeping management, inventory control, dashboard analytics, guest relationship management, and GST compliance. Depending on your property type, restaurant POS and HR modules may also be important." },
  { q: "How does Housekeeping management work in ERP?", a: "The housekeeping module allows managers to assign cleaning tasks, track room status in real time (clean, dirty, inspected, out of service), schedule deep cleaning rotations, manage lost & found items, and monitor staff productivity through a centralized dashboard synced with the front desk." },
  { q: "Can I manage multiple hotel branches from one ERP?", a: "Yes, our Hotel ERP supports multi-property management, allowing you to oversee multiple branches, resorts, or franchise locations from a single dashboard. You can compare performance across properties, centralize reporting, and maintain consistent standards chain-wide." },
  { q: "Is Hotel ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and invoicing work in hotel ERP?", a: "The billing module automatically generates invoices based on room rates, duration of stay, additional services (mini-bar, laundry, F&B), and applicable taxes. It supports folio management, bill splitting, partial payments, credit notes, and digital receipt delivery via email or SMS." },
  { q: "Can Hotel ERP handle GST compliance?", a: "Yes, our Hotel ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN codes, tracks input tax credit, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated automatically with any tax regulation changes." },
  { q: "What is the cost of hotel ERP software in India?", a: "The cost of hotel ERP software depends on the property size, number of rooms, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does hotel ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard hotel ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does hotel ERP include restaurant POS integration?", a: "Yes, our Hotel ERP includes a restaurant POS integration module that connects your in-house restaurant, bar, coffee shop, and room service operations directly to guest folios. Orders placed at the restaurant are automatically added to the guest's bill, simplifying checkout and reducing errors." },
  { q: "How secure is my hotel data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access hotel ERP on my mobile phone?", a: "Yes, our Hotel ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. We also offer a dedicated mobile app for key tasks like checking room status, viewing bookings, approving invoices, and monitoring reports on the go." },
  { q: "How does hotel ERP help with revenue management?", a: "The ERP provides real-time dashboards and analytics that track occupancy rates, average daily rate (ADR), revenue per available room (RevPAR), and booking trends. These insights help you adjust pricing strategies, identify peak seasons, and maximize revenue across your property." },
  { q: "What kind of training do you provide for hotel staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including front desk, housekeeping, billing, and management teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to hotel ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (guest records, bookings, inventory, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Hotel ERP" },
  ],
};

export default function HotelErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/hotel.jpg"
        title="Hotel ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Hotel ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Hotel Operations with Powerful ERP Software"
        paragraphs={[
          "Running a hotel, resort, or hospitality business comes with countless moving parts. From managing room reservations and guest check-ins to coordinating housekeeping, handling billing, and tracking inventory, every department must work in perfect sync to deliver a seamless guest experience. Yet many hotels in India still rely on manual registers, scattered spreadsheets, and disconnected systems that lead to operational inefficiencies, delayed service, and revenue loss. A comprehensive Hotel ERP software solves these challenges by bringing every aspect of your property management into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Hotel ERP solution designed specifically for the Indian hospitality industry. Our software automates front desk operations, online bookings, billing and invoicing, housekeeping workflows, inventory management, and guest relationship management all in one place. Whether you run a small guesthouse in Yamunanagar, a mid-sized hotel in Chandigarh, or a large resort chain across multiple locations, our ERP adapts to your unique needs and helps you deliver exceptional service while maximizing revenue and profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian businesses. Our cloud-based platform ensures you can manage your property from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Hotel ERP can transform your hospitality business today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Hotel" />
      <FeaturesSection features={features} colors={colors} industry="Hotel" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Hotel" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Hotel" />
    </>
  );
}
