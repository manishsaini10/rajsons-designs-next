"use client";

import { ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection, industryColors, fadeUp } from "@/components/erp-common";
import {
  Stethoscope, Heart, Clock, CalendarCheck, FileText,
  UserCheck, Pill, Smartphone, ShieldCheck, DollarSign,
  Activity, MessageSquare, Monitor, CheckCircle,
  TrendingUp, HeadphonesIcon, Users, Zap,
} from "lucide-react";

const colors = industryColors.clinic;

const challenges = [
  {
    icon: FileText, title: "Manual Patient Records",
    desc: "Relying on paper files and scattered spreadsheets for patient histories leads to misplaced records, duplicate entries, and inefficient retrieval during consultations.",
  },
  {
    icon: Clock, title: "Long Patient Wait Times",
    desc: "Without an automated queue system, clinics struggle with overcrowded waiting rooms, frustrated patients, and inefficient consultation scheduling throughout the day.",
  },
  {
    icon: DollarSign, title: "Billing & Payment Delays",
    desc: "Manual billing processes are slow, error-prone, and make it difficult to track payments, insurance claims, and outstanding dues across multiple patients and departments.",
  },
  {
    icon: Pill, title: "Pharmacy & Inventory Mismanagement",
    desc: "Tracking medicine stocks, expiry dates, and medical supplies manually results in stockouts, wastage, and delayed prescriptions for patients who need urgent medication.",
  },
  {
    icon: Activity, title: "Lack of Clinical Analytics",
    desc: "Without real-time dashboards, clinic owners cannot monitor patient flow, revenue trends, doctor performance, or treatment success rates at a glance.",
  },
  {
    icon: Users, title: "Communication Gaps Between Staff",
    desc: "Doctors, receptionists, lab technicians, and pharmacists often operate in silos, leading to miscommunication, delayed lab reports, and poor patient coordination.",
  },
];

const features = [
  { icon: Stethoscope, title: "Patient Management", desc: "Maintain comprehensive digital patient profiles with medical history, prescriptions, lab reports, visit logs, and treatment plans accessible at the click of a button." },
  { icon: CalendarCheck, title: "Appointment Scheduling", desc: "Online and in-clinic booking system with doctor calendar sync, automated reminders via SMS and WhatsApp, and waitlist management to reduce no-shows." },
  { icon: FileText, title: "Electronic Medical Records (EMR)", desc: "Secure digital storage of patient records, diagnosis notes, prescription templates, and e-signatures for paperless clinic operations." },
  { icon: DollarSign, title: "Billing & Insurance Management", desc: "Generate OPD/IPD bills, manage insurance claims, process multiple payment modes, handle discounts, refunds, and send digital receipts effortlessly." },
  { icon: Pill, title: "Pharmacy & Inventory Management", desc: "Track medicine stock, manage batch and expiry dates, automate reorder alerts, handle vendor purchases, and enable barcode-based billing." },
  { icon: Users, title: "Doctor & Staff Management", desc: "Manage doctor schedules, staff attendance, shift rotations, leave tracking, payroll processing, and role-based access controls from one dashboard." },
  { icon: Heart, title: "OPD & IPD Management", desc: "Seamlessly manage outpatient and inpatient departments with ward allocation, bed tracking, discharge summaries, and treatment progress monitoring." },
  { icon: MessageSquare, title: "Patient Communication", desc: "Integrated communication tools for appointment reminders, follow-up messages, lab report notifications, and health tips via SMS, email, and WhatsApp." },
  { icon: ShieldCheck, title: "Data Security & Compliance", desc: "Enterprise-grade encryption, role-based access, audit trails, and automatic cloud backups ensure patient data privacy and regulatory compliance." },
  { icon: TrendingUp, title: "Reports & Analytics", desc: "Real-time dashboards for revenue trends, patient demographics, doctor performance, treatment outcomes, and customizable exportable reports." },
  { icon: Monitor, title: "Lab & Diagnostic Integration", desc: "Connect lab equipment and diagnostic systems for automatic test result uploads, status tracking, and seamless integration with patient records." },
  { icon: Smartphone, title: "Mobile Access & Cloud Technology", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your clinic data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Improved Patient Experience", desc: "Reduce wait times, offer online booking, send automated reminders, and provide personalized care with instant access to complete patient history." },
  { icon: CheckCircle, title: "Reduced Administrative Errors", desc: "Eliminate manual data entry mistakes with automated workflows, digital prescriptions, and real-time validation across all clinic operations." },
  { icon: Clock, title: "Faster Consultations", desc: "Streamline patient check-in, reduce paperwork, and give doctors instant access to medical records so they can focus on diagnosis and treatment." },
  { icon: DollarSign, title: "Better Financial Control", desc: "Track revenue, manage expenses, process insurance claims accurately, and get real-time financial reports to make informed business decisions." },
  { icon: ShieldCheck, title: "Enhanced Data Security", desc: "Protect sensitive patient information with encrypted storage, role-based access, and automated backups that meet healthcare compliance standards." },
  { icon: TrendingUp, title: "Scalable Practice Growth", desc: "Easily add new doctors, expand to multiple branches, onboard more patients, and introduce new services without changing your system." },
];

const whyRajsons = [
  { icon: Stethoscope, title: "Built for Indian Clinics & Hospitals", desc: "Our ERP is designed specifically for Indian healthcare providers with local compliance, multi-language support, and workflows that match your practice." },
  { icon: Monitor, title: "Modern Cloud-based Platform", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that doctors, receptionists, and even non-technical staff can start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small clinics, multi-specialty hospitals, and large healthcare chains in India." },
  { icon: HeadphonesIcon, title: "Training & Dedicated Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption and ongoing success with the ERP system." },
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "Your clinic data is protected with enterprise-grade encryption, role-based access control, and automated backups with full compliance to Indian healthcare regulations." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your clinic operations, patient flow, specialties, and specific pain points in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your clinic type, size, patient volume, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation tailored for your healthcare practice." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure clinical workflows, and integrate lab systems and third-party tools as needed." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing patient records, medical histories, billing data, and pharmacy inventory are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your doctors and staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Clinic ERP Software?", a: "Clinic ERP (Enterprise Resource Planning) software is an integrated platform that helps healthcare providers manage daily operations such as patient registration, appointment scheduling, billing, pharmacy management, lab reports, HR, accounting, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency and patient care." },
  { q: "How does Clinic ERP improve patient care?", a: "Clinic ERP improves patient care by providing doctors instant access to complete patient medical history, reducing wait times through efficient scheduling, sending automated appointment reminders, maintaining digital prescriptions, and enabling seamless communication between departments. Staff can access patient data instantly, allowing them to deliver personalized and timely care." },
  { q: "Can Clinic ERP integrate with diagnostic labs?", a: "Yes, our Clinic ERP software integrates seamlessly with diagnostic labs and equipment. Lab test orders placed by doctors are automatically sent to the lab, results are uploaded directly to patient records, and both doctors and patients receive notifications when reports are ready, eliminating paperwork and delays." },
  { q: "Is Clinic ERP suitable for small clinics?", a: "Absolutely. Our Clinic ERP is designed to scale, making it suitable for small clinics and single-doctor practices as much as for multi-specialty hospitals and large healthcare chains. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in a clinic management system?", a: "Essential features include patient management, appointment scheduling, electronic medical records (EMR), billing and insurance management, pharmacy and inventory control, lab integration, doctor and staff management, and real-time analytics dashboards." },
  { q: "How does appointment scheduling work in clinic ERP?", a: "The appointment module allows patients to book online or through the reception desk. Doctors' calendars are synced in real time, automated reminders are sent via SMS/WhatsApp, and the system manages waitlists and rescheduling efficiently to minimize no-shows." },
  { q: "Can I manage multiple clinic branches from one ERP?", a: "Yes, our Clinic ERP supports multi-branch management, allowing you to oversee multiple clinics, specialties, or hospital locations from a single dashboard. You can compare performance across branches, centralize reporting, and maintain consistent standards across your practice." },
  { q: "Is Clinic ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does billing and insurance processing work in clinic ERP?", a: "The billing module automatically generates invoices based on consultation fees, diagnostic tests, procedures, medicines, and applicable taxes. It supports insurance claim processing, multiple payment modes, partial payments, credit notes, and digital receipt delivery via email or SMS." },
  { q: "Can Clinic ERP handle pharmacy management?", a: "Yes, our Clinic ERP includes a comprehensive pharmacy module that tracks medicine stock, manages batch numbers and expiry dates, generates automated reorder alerts, handles vendor purchases, and supports barcode-based billing for quick and accurate sales." },
  { q: "What is the cost of clinic ERP software in India?", a: "The cost of clinic ERP software depends on the practice size, number of doctors, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does clinic ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard clinic ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does clinic ERP include patient portal and communication?", a: "Yes, our Clinic ERP includes a patient portal and integrated communication module that sends appointment reminders, follow-up messages, lab report notifications, and health tips via SMS, email, and WhatsApp, keeping patients engaged and informed." },
  { q: "How secure is my patient data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We comply with Indian data protection guidelines to safeguard your patient information." },
  { q: "Can I access clinic ERP on my mobile phone?", a: "Yes, our Clinic ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. Key tasks like viewing appointments, checking patient records, approving invoices, and monitoring reports can be done on the go." },
  { q: "How does clinic ERP help with revenue management?", a: "The ERP provides real-time dashboards and analytics that track consultation revenue, diagnostic income, pharmacy sales, insurance claims, and patient visit trends. These insights help you identify growth opportunities, optimize pricing, and maximize practice profitability." },
  { q: "What kind of training do you provide for clinic staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including doctors, receptionists, lab technicians, pharmacists, and management teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to clinic ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (patient records, medical histories, billing, pharmacy inventory, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Clinic ERP" },
  ],
};

export default function ClinicErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/clinic.jpg"
        title="Clinic ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Clinic ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Clinic Operations with Powerful ERP Software"
        paragraphs={[
          "Running a clinic, hospital, or healthcare practice involves managing countless moving parts every day. From patient registration and appointment scheduling to medical records, billing, pharmacy inventory, and lab coordination, every department must work in perfect sync to deliver quality patient care. Yet many healthcare providers in India still rely on paper files, disconnected spreadsheets, and manual processes that lead to operational inefficiencies, long wait times, and revenue leakage. A comprehensive Clinic ERP software solves these challenges by bringing every aspect of your healthcare practice into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Clinic ERP solution designed specifically for the Indian healthcare industry. Our software automates patient management, appointment scheduling, electronic medical records, billing and insurance processing, pharmacy and inventory control, lab integration, and staff management all in one place. Whether you run a small clinic in Yamunanagar, a multi-specialty hospital in Chandigarh, or a healthcare chain across multiple locations, our ERP adapts to your unique needs and helps you deliver exceptional patient care while maximizing operational efficiency and profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian healthcare businesses. Our cloud-based platform ensures you can manage your practice from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Clinic ERP can transform your healthcare practice today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Clinic" />
      <FeaturesSection features={features} colors={colors} industry="Clinic" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Clinic" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Clinic" />
    </>
  );
}
