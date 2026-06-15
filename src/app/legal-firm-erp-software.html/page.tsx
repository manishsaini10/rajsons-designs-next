"use client";

import {
  Scale, FileText, BookOpen, Users, CalendarDays, ShieldCheck,
  Smartphone, DollarSign, Clock, ClipboardCheck, Settings, MapPin,
  RefreshCw, Zap, HeadphonesIcon, CheckCircle, TrendingUp, Gavel,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection,
  industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.legal;

const challenges = [
  {
    icon: Scale, title: "Disconnected Case Management",
    desc: "Law firms often rely on physical case files and scattered digital notes, making it difficult to track case progress, deadlines, and document versions across multiple matters.",
  },
  {
    icon: FileText, title: "Manual Billing & Invoicing",
    desc: "Tracking billable hours, generating invoices, and managing client retainers through spreadsheets leads to billing errors, delayed payments, and lost revenue for legal practitioners.",
  },
  {
    icon: BookOpen, title: "Document Chaos",
    desc: "Managing legal documents — petitions, affidavits, contracts, and evidence — without a centralized vault results in misplaced files, version confusion, and security risks.",
  },
  {
    icon: Users, title: "Client Communication Silos",
    desc: "Without a unified platform, attorneys struggle to share case updates with clients, coordinate with colleagues, and maintain a clear audit trail of all communications.",
  },
  {
    icon: CalendarDays, title: "Missed Hearing Dates",
    desc: "Tracking court appearances, filing deadlines, and client meetings across multiple calendars leads to missed dates, penalties, and damaged professional reputation.",
  },
  {
    icon: ShieldCheck, title: "Compliance & Data Security",
    desc: "Legal firms handle sensitive client data that must comply with data protection laws. Manual processes increase the risk of data breaches and non-compliance penalties.",
  },
];

const features = [
  { icon: Smartphone, title: "Mobile Access", desc: "Access case files, court dates, client details, and billing from any smartphone or tablet, ensuring you stay productive even when you are away from the office." },
  { icon: DollarSign, title: "Matter-based Billing", desc: "Track billable hours, expenses, and disbursements per case. Generate professional invoices with trust accounting, retainer management, and payment tracking built in." },
  { icon: Clock, title: "Hearing Calendar & Deadlines", desc: "Maintain a centralized calendar of court hearings, filing deadlines, client meetings, and limitation periods with automated reminders and conflict checks." },
  { icon: ClipboardCheck, title: "Task & Workflow Automation", desc: "Assign tasks, set deadlines, and automate routine workflows such as document approvals, intake processes, and follow-up reminders for your legal team." },
  { icon: Settings, title: "Practice Area Customization", desc: "Configure the ERP to match your practice areas — criminal, civil, corporate, family, or tax law — with customizable matter types, forms, and reporting templates." },
  { icon: MapPin, title: "Multi-branch Management", desc: "Manage multiple branch offices across cities from a single dashboard with centralized client data, case records, and firm-wide performance reports." },
  { icon: RefreshCw, title: "Document Management & Version Control", desc: "Store, organize, and share legal documents in a secure digital vault with version history, access permissions, and full-text search across all case files." },
  { icon: Zap, title: "Automated Reminders & Alerts", desc: "Receive instant alerts for upcoming hearings, filing deadlines, client follow-ups, and pending tasks via email, SMS, and in-app notifications." },
  { icon: HeadphonesIcon, title: "Client Portal", desc: "Provide clients with a secure portal to view case progress, download documents, communicate with their attorney, and access billing statements anytime." },
  { icon: CheckCircle, title: "Compliance & Audit Trail", desc: "Maintain a complete audit trail of all case activities, document access, and financial transactions to ensure compliance with Bar Council and data protection regulations." },
  { icon: TrendingUp, title: "Analytics & Reporting", desc: "Generate real-time reports on case status, revenue by practice area, attorney performance, billable utilization, and firm-wide financial health at a glance." },
  { icon: Gavel, title: "Litigation Case Management", desc: "Manage the entire litigation lifecycle from case intake and investigation through discovery, trial preparation, and post-judgment with structured workflows." },
];

const benefits = [
  { icon: RefreshCw, title: "Streamlined Case Workflows", desc: "Automate case intake, document routing, and approval processes so your team spends less time on admin and more time practicing law." },
  { icon: Clock, title: "Faster Client Service", desc: "Respond to client queries instantly with all case information at your fingertips, reducing response times from hours to minutes." },
  { icon: ShieldCheck, title: "Enhanced Data Security", desc: "Protect sensitive client information with role-based access, encryption, and secure cloud storage that meets legal industry compliance standards." },
  { icon: TrendingUp, title: "Increased Billable Hours", desc: "Track every billable minute accurately with integrated timers and activity logs, ensuring no billable work slips through the cracks." },
  { icon: CheckCircle, title: "Reduced Administrative Overhead", desc: "Eliminate manual data entry, paper file management, and redundant follow-ups with automated workflows that reduce operational costs." },
  { icon: Smartphone, title: "Anytime, Anywhere Access", desc: "Cloud-based ERP lets attorneys, paralegals, and staff access the system from court, client meetings, or home on any device with an internet connection." },
];

const whyRajsons = [
  { icon: MapPin, title: "Built for Indian Law Firms", desc: "Our ERP is designed specifically for Indian legal practices with support for local court structures, Bar Council compliance, and Indian currency & taxation." },
  { icon: ShieldCheck, title: "Secure & Compliant Platform", desc: "Enterprise-grade security with encrypted data storage, role-based access controls, and audit logging to meet Indian legal data protection requirements." },
  { icon: Settings, title: "Fully Customizable Modules", desc: "Tailor every module — case types, document templates, billing rates, and reporting formats — to match your firm's unique practice areas and workflows." },
  { icon: DollarSign, title: "Affordable & Transparent Pricing", desc: "We offer budget-friendly pricing plans designed for solo practitioners, small law firms, and large legal partnerships with no hidden costs." },
  { icon: HeadphonesIcon, title: "Training & Dedicated Support", desc: "Receive comprehensive staff training, video walkthroughs, and ongoing technical support from our team to ensure smooth adoption of the ERP system." },
  { icon: TrendingUp, title: "Proven Track Record", desc: "With 15+ years of experience delivering digital solutions, RajSons Designs is a trusted technology partner for businesses across India." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your legal team to understand your practice areas, caseload volume, pain points, and specific operational requirements in detail." },
  { step: "02", title: "Legal Process Mapping", desc: "Our consultants map your existing case workflows, billing cycles, document flows, and reporting needs to design the optimal ERP configuration." },
  { step: "03", title: "Solution Architecture", desc: "We create a detailed implementation blueprint with module selections, customization scope, integration points, and a clear project timeline." },
  { step: "04", title: "ERP Development & Customization", desc: "Our developers configure case management modules, billing rules, document templates, and user permissions tailored to your firm." },
  { step: "05", title: "Data Migration", desc: "Your existing case files, client records, document archives, and financial data are securely migrated, cleaned, and organized in the new system." },
  { step: "06", title: "Testing & Quality Assurance", desc: "We rigorously test every module for functionality, performance, data accuracy, and security before moving to deployment." },
  { step: "07", title: "Deployment & Staff Training", desc: "We deploy the ERP, train your attorneys, paralegals, and support staff hands-on, and provide user manuals and video tutorials for ongoing reference." },
  { step: "08", title: "Ongoing Support & Updates", desc: "Our team provides continuous technical support, feature enhancements, compliance updates, and periodic performance reviews to keep your ERP optimized." },
];

const faqData = [
  { q: "What is Legal Firm ERP Software?", a: "Legal Firm ERP (Enterprise Resource Planning) software is an integrated platform that helps law firms manage case management, client relationships, billing, document storage, hearing calendars, HR, accounting, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency, accuracy, and client service for legal practices of all sizes." },
  { q: "How does Legal ERP improve case management?", a: "Legal ERP improves case management by centralizing all case-related information including pleadings, evidence, correspondence, court orders, and task assignments in one digital workspace. Attorneys can track case progress, set milestones, assign tasks to team members, and access complete case histories instantly, ensuring nothing falls through the cracks." },
  { q: "Can Legal ERP handle billing and trust accounting?", a: "Yes, our Legal ERP includes comprehensive billing and trust accounting modules. It tracks billable hours, fixed fees, contingency arrangements, and disbursements per matter. Trust accounting features manage client retainers, advance deposits, and comply with Bar Council trust accounting rules with full audit trails." },
  { q: "Is Legal ERP suitable for solo practitioners and small firms?", a: "Absolutely. Our Legal ERP is designed to scale, making it suitable for solo practitioners, boutique law firms, and small legal partnerships as much as for large multi-partner firms. We offer modular plans so you only pay for the features you need." },
  { q: "What key features should a law firm management system have?", a: "Essential features include case management, hearing calendar with deadline tracking, document management with version control, matter-based billing and invoicing, client portal, task management, conflict checking, time tracking, reporting and analytics, and compliance management. Our ERP includes all these and more." },
  { q: "How does the hearing calendar and deadline tracking work?", a: "The hearing calendar module automatically syncs court dates, filing deadlines, limitation periods, and client meetings into a centralized calendar. It sends automated reminders via email and SMS, performs conflict checks to prevent double-booking, and allows attorneys to view schedules by matter, attorney, or court." },
  { q: "Can I manage multiple practice areas within the same ERP?", a: "Yes, our Legal Firm ERP supports multiple practice areas such as criminal law, civil litigation, corporate law, family law, tax law, and property law. You can configure custom matter types, document templates, billing rates, and workflows for each practice area within a single system." },
  { q: "Is the ERP cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure Indian data centers with automatic updates, backups, and 24/7 access from any device. On-premise deployment gives you full control over your data and is hosted on your own servers within your office." },
  { q: "How does document management work for legal firms?", a: "The document management module provides a secure digital vault where you can store, organize, and share petitions, affidavits, contracts, evidence, and correspondence. It supports version control, full-text search, role-based access permissions, and integration with case files so documents are always linked to the right matter." },
  { q: "Can Legal ERP integrate with court systems and e-filing?", a: "Yes, our ERP supports integration with court portals and e-filing platforms where available. You can generate court-formatted documents, track filing status, and maintain a digital record of all court submissions directly from the system." },
  { q: "How does the client portal benefit my law firm?", a: "The client portal allows clients to securely log in and view case progress, download documents, review billing statements, communicate with their attorney, and make payments online. This reduces administrative calls, improves transparency, and enhances client satisfaction." },
  { q: "What is the cost of legal firm ERP software in India?", a: "The cost depends on the number of users, practice areas, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your firm's budget. Contact us for a customized quote." },
  { q: "How long does legal ERP implementation take?", a: "Implementation timelines vary based on firm size and complexity. A standard implementation typically takes 4 to 10 weeks, including requirement analysis, customization, data migration, testing, staff training, and go-live support. We provide a clear timeline before starting." },
  { q: "Does the ERP support multi-branch law firm management?", a: "Yes, our ERP supports multi-branch management, allowing you to oversee multiple offices across different cities from a single dashboard. You can centralize client data, share case records across branches, and generate firm-wide performance reports." },
  { q: "How secure is client data in the ERP system?", a: "Security is paramount. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure Indian servers with firewalls and intrusion detection. We comply with Indian data protection laws to safeguard your confidential client information." },
  { q: "Can I access the legal ERP on mobile devices?", a: "Yes, our Legal Firm ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. You can check case statuses, view hearing schedules, approve invoices, and communicate with clients on the go." },
  { q: "What kind of training do you provide for legal staff?", a: "We provide comprehensive on-site and online training for attorneys, paralegals, and administrative staff. Training includes hands-on system walkthroughs, practice area-specific tutorials, video guides, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual case files to the ERP system?", a: "Our team handles the complete migration process — starting with auditing your existing case files, client records, documents, and financial data, then cleaning and digitizing them, and securely transferring everything to the new ERP system. We run parallel trials to ensure data accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Legal Firm ERP" },
  ],
};

export default function LegalFirmErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/legal.jpg"
        title="Legal Firm ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Legal Firm ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Law Firm Operations with Powerful ERP Software"
        paragraphs={[
          "Running a legal practice comes with tremendous responsibility and complexity. From managing diverse case files across multiple practice areas and tracking court hearing dates to handling matter-based billing, client communications, and document discovery — every aspect demands precision, organization, and efficiency. Yet many law firms in India still manage their operations through physical case files, scattered spreadsheets, and disjointed software tools that lead to missed deadlines, billing errors, and compromised client service. A comprehensive Legal Firm ERP software solves these challenges by unifying every facet of your practice into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Legal Firm ERP solution designed specifically for Indian law firms, advocates, and legal departments. Our software automates case management, hearing calendars, document management, matter-based billing, client relationship management, and compliance tracking all in one place. Whether you are a solo practitioner in Yamunanagar, a mid-sized firm in Chandigarh, or a multi-branch legal partnership with offices across India, our ERP adapts to your practice areas and helps you deliver better outcomes for your clients while maximizing firm profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep legal industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian legal practices. Our cloud-based platform ensures you and your team can access case information from court, client meetings, or home, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Legal Firm ERP can transform your legal practice today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Legal Firm" />
      <FeaturesSection features={features} colors={colors} industry="Legal Firm" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Legal Firm" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Legal Firm" />
    </>
  );
}
