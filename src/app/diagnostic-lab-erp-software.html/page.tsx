"use client";

import {
  Activity, BookOpen, ClipboardCheck, Clock, DollarSign, FileSearch,
  FileText, HeadphonesIcon, HeartHandshake, Laptop, LayoutDashboard,
  MapPin, Monitor, Package, PieChart, RefreshCw, Scan, ShieldCheck,
  Smartphone, TrendingUp, UserCheck, Users, Zap,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection,
  CtaSection, industryColors, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.diagnostic;

const challenges = [
  {
    icon: FileText, title: "Manual Patient Registration",
    desc: "Relying on paper forms and manual entry for patient registration leads to duplicate records, lost data, and long wait times at the front desk.",
  },
  {
    icon: Scan, title: "Sample Tracking & Traceability Issues",
    desc: "Without barcode-based tracking, samples can be mislabeled, misplaced, or mixed up, leading to serious diagnostic errors and repeat collections.",
  },
  {
    icon: Activity, title: "Slow Report Turnaround Time",
    desc: "Manual result entry, verification, and report generation cause delays in delivering reports to patients and referring doctors.",
  },
  {
    icon: Package, title: "Inventory & Reagent Mismanagement",
    desc: "Tracking reagents, consumables, and lab supplies manually results in stockouts, expired reagents, wastage, and unexpected operational costs.",
  },
  {
    icon: BookOpen, title: "Regulatory Compliance Challenges",
    desc: "Meeting NABL, ISO, and other quality standards without automated documentation, audit trails, and QC logs is time-consuming and error-prone.",
  },
  {
    icon: Users, title: "Communication Gaps with Doctors & Patients",
    desc: "Lack of real-time sharing of reports and referrals with doctors, and delayed patient notifications, hampers care coordination and satisfaction.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying test volumes, revenue trends, sample status, and key laboratory performance indicators at a glance." },
  { icon: Users, title: "Patient Management", desc: "Streamline patient registration, demographics, medical history, and appointment scheduling from a single unified interface." },
  { icon: Scan, title: "Sample Collection & Barcoding", desc: "Barcode-based sample collection, phlebotomy tracking, chain-of-custody logs, and multi-sample handling for complete traceability." },
  { icon: DollarSign, title: "Billing & Invoicing", desc: "Generate professional invoices, manage corporate accounts, process payments, and send digital receipts with GST compliance built-in." },
  { icon: Package, title: "Inventory Management", desc: "Track reagents, chemicals, consumables, and lab supplies with automated reorder alerts, expiry tracking, and vendor management." },
  { icon: Monitor, title: "Analyzer Integration", desc: "Seamlessly connect biochemistry, hematology, and other analyzers with bi-directional LIS/HL7 connectivity for auto result import." },
  { icon: FileSearch, title: "Report Generation & Delivery", desc: "Create customizable report formats with digital signatures, QR code verification, and auto-delivery via email, SMS, and WhatsApp." },
  { icon: ClipboardCheck, title: "Quality Control & Compliance", desc: "Manage internal & external QC logs, Levey-Jennings charts, calibration tracking, audit trails, and NABL documentation effortlessly." },
  { icon: Clock, title: "HR & Payroll", desc: "Manage employee attendance, shift scheduling, payroll processing, and performance records for all lab staff." },
  { icon: DollarSign, title: "Accounting Integration", desc: "Synchronize financial data with accounting software for automated ledgers, P&L statements, and tax filings." },
  { icon: ShieldCheck, title: "NABL & ISO Compliance", desc: "Generate compliance-ready documentation, maintain audit trails, and stay aligned with NABL, ISO 15189, and Indian regulatory standards." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your lab data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate routine lab tasks, reduce manual intervention, and optimize staff productivity across all departments and shifts." },
  { icon: RefreshCw, title: "Reduced Manual Errors", desc: "Eliminate data entry mistakes, sample mislabeling, and transcription errors with barcode workflows and automated validation." },
  { icon: Clock, title: "Faster Turnaround Time", desc: "Reduce TAT with automated analyzer integration, real-time result validation, and instant digital report delivery to patients." },
  { icon: HeartHandshake, title: "Better Patient Experience", desc: "Delight patients with faster check-ins, timely reports, home collection scheduling, and seamless digital communication." },
  { icon: PieChart, title: "Real-time Business Insights", desc: "Make informed decisions with up-to-date reports on test volumes, revenue, doctor referrals, and operational efficiency metrics." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Easily add new test categories, expand to multi-location branches, and onboard new users as your diagnostic business grows." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Diagnostic Labs", desc: "Our ERP is designed keeping Indian diagnostic labs, pathology centers, and clinics in mind, with NABL compliance, GST, and local language support built right in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that lab technicians, receptionists, and admin staff can start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small clinics, medium diagnostic centers, and large multi-locational lab chains." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system in your lab." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your patient data and lab records are protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your lab team to understand your operations, test menu, patient flow, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your lab type, size, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate laboratory analyzers as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing patient records, test data, inventory lists, and financial records are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Diagnostic Lab ERP Software?", a: "Diagnostic Lab ERP (Enterprise Resource Planning) software is an integrated platform that helps diagnostic labs manage daily operations such as patient registration, sample tracking, test processing, billing, report generation, inventory management, and compliance — all from a single system. It replaces fragmented manual processes with automated workflows, improving accuracy, efficiency, and patient satisfaction." },
  { q: "How does Lab ERP improve turnaround time for reports?", a: "Lab ERP improves TAT by automating sample barcoding, enabling bi-directional analyzer integration for auto result capture, providing real-time validation rules, and generating digital reports instantly. Reports can be auto-delivered via email, SMS, or WhatsApp, significantly reducing the time from sample collection to result delivery." },
  { q: "Can Lab ERP integrate with diagnostic analyzers and machines?", a: "Yes, our Diagnostic Lab ERP supports seamless integration with a wide range of biochemistry, hematology, immunoassay, and other analyzers using LIS / HL7 connectivity. Results are imported automatically, eliminating manual transcription errors and speeding up the validation process." },
  { q: "Is Diagnostic Lab ERP suitable for small pathology labs and clinics?", a: "Absolutely. Our ERP is designed to scale, making it suitable for small pathology labs, standalone clinics, and diagnostic chains. We offer modular plans so you only pay for the features you need, and the interface is simple enough for small teams to adopt quickly." },
  { q: "What features are essential in a diagnostic lab management system?", a: "Essential features include patient registration, barcode-based sample tracking, analyzer integration, billing & invoicing, digital report generation, inventory management, quality control, NABL compliance support, and real-time dashboards. Depending on your lab size, referral management and multi-branch support may also be important." },
  { q: "How does barcode-based sample tracking work?", a: "At the time of sample collection, a unique barcode label is generated and affixed to each sample container. The barcode is scanned at every step — collection, processing, testing, storage, and disposal — creating a complete digital audit trail that ensures traceability and eliminates misidentification errors." },
  { q: "Can I manage multiple lab branches from a single ERP?", a: "Yes, our Diagnostic Lab ERP supports multi-location management, allowing you to oversee multiple branches, collection centers, and franchise labs from a single dashboard. You can compare performance, centralize reporting, and maintain consistent quality standards across all locations." },
  { q: "Is the Lab ERP cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and invoicing work in Lab ERP?", a: "The billing module automatically generates invoices based on test packages, individual test rates, corporate discounts, and applicable taxes. It supports cash, credit, insurance, and corporate billing, along with credit notes, partial payments, and digital receipt delivery via email or SMS." },
  { q: "Can Lab ERP handle NABL and ISO compliance?", a: "Yes, our Lab ERP is designed to support NABL and ISO 15189 compliance. It maintains audit trails, internal & external QC logs, calibration records, reagent lot tracking, and generates compliance-ready documentation automatically, making accreditation audits smooth and hassle-free." },
  { q: "What is the cost of diagnostic lab ERP software in India?", a: "The cost depends on the lab size, number of locations, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does diagnostic lab ERP implementation take?", a: "Implementation timelines vary based on complexity. A standard lab ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does Lab ERP support home sample collection management?", a: "Yes, our ERP includes a home collection management module that allows patients to schedule sample pickups from home. The system assigns phlebotomists, tracks collection status, and integrates the collected samples into the regular lab workflow seamlessly." },
  { q: "How secure is my lab data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard patient and business information." },
  { q: "Can I access the Lab ERP on my mobile phone?", a: "Yes, our Lab ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. Lab technicians and admins can view test status, approve reports, check inventory, and monitor key metrics on the go." },
  { q: "How does Lab ERP handle doctor referrals and commissions?", a: "The referral management module tracks referring doctors, records commission structures, and generates automated reports on referral volumes and payables. This ensures accurate and timely commission processing and helps strengthen relationships with referring physicians." },
  { q: "What kind of training do you provide for lab staff?", a: "We provide comprehensive on-site and online training sessions for all staff, including lab technicians, receptionists, billing teams, and management. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to Lab ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (patient records, test catalog, inventory, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Diagnostic Lab ERP" },
  ],
};

export default function DiagnosticLabErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/diagnostic.jpg"
        title="Diagnostic Lab ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Diagnostic Lab ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Diagnostic Lab Operations with Powerful ERP Software"
        paragraphs={[
          "Running a diagnostic lab, pathology center, or multi-location testing chain involves managing countless moving parts — from patient registration and sample collection to running tests, generating reports, tracking inventory, and ensuring regulatory compliance. Yet many labs in India still rely on manual registers, scattered spreadsheets, and disconnected systems that lead to operational inefficiencies, sample errors, delayed reports, and revenue leakage. A comprehensive Diagnostic Lab ERP software solves these challenges by bringing every aspect of your laboratory management into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Diagnostic Lab ERP solution designed specifically for the Indian diagnostic industry. Our software automates patient registration, barcode-based sample tracking, analyzer integration, billing and invoicing, report generation, inventory management, and quality compliance all in one place. Whether you run a small pathology lab in Yamunanagar, a mid-sized diagnostic center in Chandigarh, or a large multi-location lab chain across multiple cities, our ERP adapts to your unique needs and helps you deliver accurate results faster while maximizing revenue and profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian diagnostic businesses. Our cloud-based platform ensures you can manage your lab from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Diagnostic Lab ERP can transform your diagnostic center today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Diagnostic Lab" />
      <FeaturesSection features={features} colors={colors} industry="Diagnostic Lab" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Diagnostic Lab" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Diagnostic Lab" />
    </>
  );
}
