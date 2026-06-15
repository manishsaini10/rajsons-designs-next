"use client";

import {
  FileText, CreditCard, Pill, ScrollText, Clock, BarChart3,
  LayoutDashboard, Heart, CalendarCheck, Stethoscope, Activity, Package, Smartphone,
  Zap, RefreshCw, HeartHandshake, PieChart, ShieldCheck, TrendingUp,
  MapPin, Laptop, UserCheck, DollarSign, HeadphonesIcon,
} from "lucide-react";
import {
  DescriptionSection, ErpHero, ChallengesSection, FeaturesSection, BenefitsSection, WhyRajsonsSection,
  ProcessSection, FaqSection, CtaSection, industryColors, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.hospital;

const challenges = [
  {
    icon: FileText, title: "Fragmented Patient Data",
    desc: "Patient records scattered across separate systems for billing, pharmacy, lab, and OPD lead to duplicate data entry, errors, and delayed clinical decisions.",
  },
  {
    icon: CreditCard, title: "Manual Billing & Revenue Leakage",
    desc: "Handling charge slips from multiple departments at discharge causes missed charges, incorrect billing, and significant revenue leakage that is hard to quantify.",
  },
  {
    icon: Pill, title: "Pharmacy & Inventory Mismanagement",
    desc: "Tracking medicines, surgical supplies, and consumables manually leads to expired stock, stockouts of critical drugs, and uncontrolled procurement costs.",
  },
  {
    icon: ScrollText, title: "Compliance & Accreditation Pressure",
    desc: "Preparing for NABH, NABL, or other accreditation audits without automated documentation is time-consuming and stressful, often taking months of manual effort.",
  },
  {
    icon: Clock, title: "Staff Scheduling & Workflow Gaps",
    desc: "Without a centralized system, coordinating doctors, nurses, lab technicians, and support staff across shifts becomes inefficient, affecting patient care delivery.",
  },
  {
    icon: BarChart3, title: "Lack of Real-time Operational Visibility",
    desc: "Hospital owners and administrators cannot monitor bed occupancy, OPD footfall, revenue trends, or department performance in real time without integrated dashboards.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying OPD/IPD occupancy, revenue trends, department-wise performance, and key clinical KPIs at a glance." },
  { icon: Heart, title: "Patient Registration & Management", desc: "Streamline patient registration, OPD and IPD admission, bed allocation, discharge summaries, and follow-up scheduling from a single interface." },
  { icon: CalendarCheck, title: "Appointment Scheduling", desc: "Integrated appointment system allowing patients to book online, auto-assign time slots, send reminders, and reduce wait times with optimized doctor schedules." },
  { icon: CreditCard, title: "Billing & Insurance Claims", desc: "Generate accurate bills, manage TPA/insurance claims, process cashless approvals, handle co-payments, and send digital receipts with GST compliance." },
  { icon: Pill, title: "Pharmacy Management", desc: "Track medicine stock, manage purchase orders, set reorder levels, handle batch-wise expiry tracking, and integrate with billing for seamless charge capture." },
  { icon: Stethoscope, title: "Laboratory & Diagnostics", desc: "Connect lab orders, sample tracking, test results, and diagnostic reports directly to patient records with automated report delivery via SMS or patient portal." },
  { icon: FileText, title: "Electronic Health Records", desc: "Maintain comprehensive digital patient histories including diagnosis, prescriptions, lab reports, imaging, and treatment plans accessible anytime by authorized staff." },
  { icon: Activity, title: "Operation Theatre Management", desc: "Schedule surgeries, manage OT availability, track instrument sterilization, assign surgical teams, and maintain pre- and post-operative records." },
  { icon: Clock, title: "HR & Payroll", desc: "Manage staff attendance, doctor/nurse shift scheduling, leave tracking, payroll processing, and credential compliance for all healthcare personnel." },
  { icon: Package, title: "Inventory & Supply Chain", desc: "Track medical consumables, surgical instruments, linen, and general supplies with automated reorder alerts, vendor management, and consumption analytics." },
  { icon: ShieldCheck, title: "NABH & Regulatory Compliance", desc: "Generate NABH-mandated documentation across clinical protocols, infection control, patient safety, and quality improvement with automated audit trails." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your hospital data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate routine administrative tasks, reduce manual data entry, and optimize staff productivity across all hospital departments." },
  { icon: RefreshCw, title: "Reduced Revenue Leakage", desc: "Eliminate missed charges and billing errors with automated charge capture from pharmacy, lab, OT, and room services." },
  { icon: HeartHandshake, title: "Better Patient Experience", desc: "Reduce waiting times, provide accurate bills, maintain complete medical histories, and offer faster discharge processes for improved patient satisfaction." },
  { icon: PieChart, title: "Real-time Financial Reports", desc: "Make informed decisions with up-to-date reports on OPD/IPD revenue, insurance collections, department profitability, and expense tracking." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Stay compliant with NABH, NABL, and Indian healthcare regulations through automated documentation, audit trails, and standardized clinical protocols." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Easily add new departments, expand bed capacity, onboard additional doctors, and manage multi-specialty or multi-location hospitals without switching systems." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Healthcare Industry", desc: "Our ERP is designed keeping Indian hospitals, nursing homes, clinics, and diagnostic centers in mind, with local compliance, currency, and language support built right in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical healthcare staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large healthcare organizations in India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system across your hospital." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your hospital data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your clinical and administrative teams to understand your hospital operations, pain points, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your hospital type, bed capacity, specialty areas, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your hospital ERP project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure clinical workflows, and integrate with existing systems as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and clinical accuracy before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing patient records, billing data, pharmacy inventory, and financial records are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your doctors, nurses, and administrative staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Hospital ERP Software?", a: "Hospital ERP (Enterprise Resource Planning) software is an integrated platform that helps healthcare organizations manage patient registration, billing, pharmacy, laboratory, electronic health records, HR, inventory, accounting, and compliance reporting from a single system. It replaces fragmented manual processes with automated workflows, improving operational efficiency and patient care quality." },
  { q: "How does Hospital ERP improve patient care?", a: "Hospital ERP improves patient care by providing instant access to complete medical histories, reducing waiting times through efficient appointment scheduling, enabling faster billing and discharge processes, and ensuring accurate medication management. Staff can access patient data anytime, allowing them to make informed clinical decisions and deliver personalized care." },
  { q: "Can Hospital ERP integrate with existing clinical systems?", a: "Yes, our Hospital ERP software is designed to integrate seamlessly with existing systems such as laboratory information systems (LIS), radiology/PACS, electronic medical records (EMR), and third-party pharmacy software. Data flows automatically between systems, eliminating silos and ensuring a unified patient view." },
  { q: "Is Hospital ERP suitable for small clinics and nursing homes?", a: "Absolutely. Our Hospital ERP is designed to scale, making it suitable for small clinics, nursing homes, single-specialty centers, and diagnostic labs as much as for large multi-specialty hospitals and healthcare chains. We offer modular plans so you only pay for the features you need." },
  { q: "What features are essential in a hospital management system?", a: "Essential features include patient registration and management, appointment scheduling, billing and insurance claims, pharmacy management, laboratory integration, electronic health records, operation theatre management, HR and payroll, inventory control, and NABH compliance reporting." },
  { q: "How does pharmacy management work in Hospital ERP?", a: "The pharmacy module tracks medicine stock levels, manages purchase orders, handles batch-wise expiry tracking, sets automated reorder alerts, and integrates with patient billing so all medication charges are captured automatically at the point of dispensing." },
  { q: "Can I manage multiple hospital branches from one ERP?", a: "Yes, our Hospital ERP supports multi-facility management, allowing you to oversee multiple branches, specialty centers, or franchise locations from a single dashboard. You can compare performance across facilities, centralize reporting, and maintain consistent clinical standards chain-wide." },
  { q: "Is Hospital ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and insurance claims processing work?", a: "The billing module automatically generates invoices based on consultation fees, procedures, pharmacy charges, lab tests, room rent, and applicable taxes. It supports TPA/insurance claim submission, cashless approval tracking, co-payment handling, and digital receipt delivery via email or SMS." },
  { q: "Can Hospital ERP handle NABH compliance?", a: "Yes, our Hospital ERP is designed to support NABH accreditation requirements. It generates structured documentation across all NABH chapters including clinical protocols, infection control, patient rights, medication management, and quality improvement with automated audit trails." },
  { q: "What is the cost of hospital ERP software in India?", a: "The cost of hospital ERP software depends on the facility size, bed capacity, number of departments, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does hospital ERP implementation take?", a: "Implementation timelines vary based on complexity and scope. A standard hospital ERP implementation typically takes 6 to 12 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does hospital ERP include laboratory management?", a: "Yes, our Hospital ERP includes a laboratory management module that handles test order entry, sample tracking, result recording, automated report generation, and direct integration with patient records. Reports can be delivered via SMS, email, or patient portal." },
  { q: "How secure is my hospital data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard patient information." },
  { q: "Can I access hospital ERP on my mobile phone?", a: "Yes, our Hospital ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. We also offer a dedicated mobile interface for key tasks like viewing patient records, checking bed availability, approving lab results, and monitoring reports on the go." },
  { q: "How does hospital ERP help with revenue management?", a: "The ERP provides real-time dashboards and analytics that track OPD and IPD revenue, insurance collections, department-wise profitability, billing trends, and expense patterns. These insights help you identify revenue leakage, optimize pricing, and maximize financial performance." },
  { q: "What kind of training do you provide for hospital staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including doctors, nurses, lab technicians, pharmacists, billing staff, and management. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to hospital ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (patient records, billing history, pharmacy inventory, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Hospital ERP" },
  ],
};

export default function HospitalErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        title="Hospital ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Hospital ERP" },
        ]}
        image="/images/erp/hospital.jpg"
        colors={colors}
        stats={[
          { value: "15+", label: "Years Experience" },
          { value: "500+", label: "Happy Clients" },
          { value: "99.9%", label: "Uptime" },
          { value: "24/7", label: "Support" },
        ]}
      />

      <DescriptionSection title="Streamline Your Healthcare Operations with Powerful ERP Software" colors={colors} paragraphs={[
  "Running a hospital or healthcare facility involves coordinating countless moving parts—from patient registration and OPD consultations to IPD admissions, bed management, lab orders, pharmacy dispensing, and billing. Yet many healthcare facilities in India still rely on fragmented systems, manual registers, and paper-based records that lead to inefficiencies, delayed care, and revenue leakage.",
  "RajSons Designs offers a powerful, feature-rich Hospital ERP solution designed specifically for the Indian healthcare industry. Our software automates patient registration, appointment scheduling, IPD management, bed allocation, lab integration, pharmacy management, billing, and compliance reporting all in one place. Whether you run a multi-specialty hospital in Chandigarh, a nursing home in Yamunanagar, or a chain of clinics across Haryana, our ERP adapts to your unique needs and helps you deliver better patient care while maximizing operational efficiency.",
  "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian healthcare businesses. Our cloud-based platform ensures you can manage your facility from anywhere, while dedicated training and support ensure a smooth transition to automated excellence.",
]} />

      <ChallengesSection challenges={challenges} colors={colors} industry="Healthcare" />
      <FeaturesSection features={features} colors={colors} industry="Hospital" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Hospital" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Hospital" />
    </>
  );
}
