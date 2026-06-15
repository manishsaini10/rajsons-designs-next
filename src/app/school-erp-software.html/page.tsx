"use client";

import {
  GraduationCap, BookOpen, Users, CalendarCheck, CreditCard,
  ScrollText, BarChart3, Timer, Check, Bus, Library, MessageSquare,
  ShieldCheck, Monitor, UserCheck, RefreshCw,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection,
  CtaSection, industryColors,
} from "@/components/erp-common";

const colors = industryColors.school;

const challenges = [
  { icon: ScrollText, title: "Manual Attendance Records", desc: "Traditional attendance methods are time-consuming, error-prone, and difficult to track across large student populations." },
  { icon: CreditCard, title: "Fee Collection Hassles", desc: "Managing fee payments, receipts, and pending dues manually creates administrative bottlenecks and financial discrepancies." },
  { icon: Users, title: "Student Data Management", desc: "Maintaining and updating student records, admissions, and academic histories across multiple classes becomes chaotic without a centralized system." },
  { icon: MessageSquare, title: "Parent-Teacher Communication", desc: "Lack of a structured communication channel leads to information gaps between parents and teachers regarding student progress." },
  { icon: BookOpen, title: "Exam Management", desc: "Planning exams, scheduling, generating hall tickets, and publishing results manually is labor-intensive and prone to delays." },
  { icon: BarChart3, title: "Report Card Generation", desc: "Creating comprehensive report cards with grades, remarks, and analytics for every student consumes valuable staff hours." },
];

const features = [
  { icon: BarChart3, title: "Dashboard & Analytics", desc: "Real-time school-wide dashboard with key metrics on attendance, fees, exams, and student performance for quick decision-making." },
  { icon: UserCheck, title: "Student Admission Management", desc: "End-to-end admission workflow from enquiry and registration to document verification and fee submission." },
  { icon: CalendarCheck, title: "Attendance Management", desc: "Automated attendance tracking with biometric integration, daily reports, and instant parent notifications." },
  { icon: CreditCard, title: "Fee Management", desc: "Online fee collection, installment plans, automated receipts, due date reminders, and detailed financial reports." },
  { icon: Timer, title: "Timetable Management", desc: "Create and manage class timetables, teacher schedules, and room allocations with conflict detection." },
  { icon: BookOpen, title: "Exam & Grade Management", desc: "Exam planning, grade entry, mark sheets, rank generation, and result publication with comprehensive analytics." },
  { icon: ScrollText, title: "Homework Assignment", desc: "Teachers can post homework and assignments online; students and parents can track submissions and due dates." },
  { icon: MessageSquare, title: "Communication Portal", desc: "Built-in messaging system for notices, circulars, announcements, and direct parent-teacher communication." },
  { icon: Library, title: "Library Management", desc: "Manage book inventory, issue and return tracking, overdue alerts, and student library cards digitally." },
  { icon: Bus, title: "Transport Management", desc: "Track school buses, manage routes, student boarding points, and send real-time transport alerts to parents." },
  { icon: Users, title: "HR & Payroll", desc: "Staff management, attendance, leave tracking, salary processing, and payroll for all teaching and non-teaching staff." },
  { icon: Monitor, title: "Mobile App Access", desc: "Dedicated mobile app for parents and teachers to access attendance, marks, fee details, and notices on the go." },
];

const benefits = [
  { icon: Check, title: "Time Savings", desc: "Time Savings – Automate repetitive tasks like attendance, fee tracking, and report generation, freeing staff for more important work." },
  { icon: Check, title: "Accurate Records", desc: "Accurate Records – Eliminate manual errors with a centralized digital database that maintains error-free student and financial records." },
  { icon: Check, title: "Better Communication", desc: "Better Communication – Bridge the gap between parents and teachers with instant notifications, messaging, and real-time progress updates." },
  { icon: Check, title: "Data Security", desc: "Data Security – Protect sensitive student and staff data with role-based access, encrypted storage, and secure cloud backups." },
  { icon: Check, title: "Cost Efficiency", desc: "Cost Efficiency – Reduce administrative overhead, paper usage, and manual labor costs with an all-in-one digital platform." },
  { icon: Check, title: "Improved Academic Performance", desc: "Improved Academic Performance – Track student progress with detailed analytics, identify learning gaps, and take corrective actions early." },
];

const whyRajsons = [
  { icon: GraduationCap, title: "Customized for Indian Schools", desc: "Our ERP is designed keeping Indian education board requirements, fee structures, and academic calendars in mind." },
  { icon: Monitor, title: "Easy-to-use Interface", desc: "Intuitive and clean interface that requires minimal training. Teachers and staff can start using it from day one." },
  { icon: CreditCard, title: "Affordable Pricing", desc: "Cost-effective ERP solutions designed for schools of all sizes — from small institutions to large multi-branch campuses." },
  { icon: Users, title: "Training for Staff", desc: "We provide comprehensive training sessions for teachers and administrative staff to ensure smooth adoption." },
  { icon: ShieldCheck, title: "Secure Cloud-based System", desc: "Your data is hosted on secure cloud servers with regular backups and high-level encryption protocols." },
  { icon: RefreshCw, title: "Dedicated Support", desc: "Our support team is available to assist with any issues, updates, or customization requests round the clock." },
];

const steps = [
  { step: "01", title: "Analysis", desc: "We analyze your school's current processes, pain points, and requirements through detailed discussions." },
  { step: "02", title: "Consultation", desc: "Our experts suggest the best ERP configuration and modules tailored to your institution's needs." },
  { step: "03", title: "Planning", desc: "We create a detailed implementation roadmap with timelines, milestones, and resource allocation." },
  { step: "04", title: "Development", desc: "Our developers customize the ERP modules, configure settings, and integrate with existing systems." },
  { step: "05", title: "Testing", desc: "Rigorous quality assurance testing ensures the system is bug-free, secure, and performance-optimized." },
  { step: "06", title: "Migration", desc: "We securely migrate your existing student and administrative data to the new ERP platform." },
  { step: "07", title: "Deployment", desc: "The ERP system goes live with supervised rollout, staff training, and real-time monitoring." },
  { step: "08", title: "Support", desc: "Ongoing technical support, regular updates, and system maintenance to keep everything running smoothly." },
];

const faqs = [
  { q: "What is School ERP Software?", a: "School ERP (Enterprise Resource Planning) software is a comprehensive digital platform designed to manage and automate day-to-day academic and administrative operations of educational institutions. It integrates functions like student admissions, attendance tracking, fee management, exam scheduling, report card generation, library management, transport tracking, and parent-teacher communication into a single centralized system." },
  { q: "How does school ERP help teachers and administrators?", a: "School ERP automates repetitive tasks such as taking attendance, preparing report cards, and managing fee records. Teachers can focus more on teaching while administrators get real-time dashboards for data-driven decision-making. The software reduces paperwork, minimizes errors, and improves overall operational efficiency for both teachers and administrative staff." },
  { q: "Can parents access the school ERP system?", a: "Yes, most school ERP systems provide a dedicated parent portal or mobile app where parents can view their child's attendance records, exam results, fee payment history, homework assignments, and receive important school announcements and circulars in real time." },
  { q: "Is school ERP suitable for small schools?", a: "Absolutely. School ERP solutions are scalable and can be tailored to fit the needs and budget of small schools as well as large institutions. RajSons Designs offers affordable ERP packages for small and medium-sized schools with essential modules to get started." },
  { q: "How does attendance management work?", a: "Teachers can mark student attendance through a web interface or mobile app. The system supports multiple methods including manual entry, bulk upload, and biometric integration. Attendance data is stored centrally, and automatic notifications are sent to parents when a student is marked absent." },
  { q: "Can I manage fees and payments through ERP?", a: "Yes, the fee management module allows schools to configure fee structures, generate invoices, collect payments online via multiple payment gateways, send automatic reminders for pending dues, and generate detailed fee collection reports." },
  { q: "How does exam management work in school ERP?", a: "The exam management module allows schools to plan exam schedules, create seating arrangements, generate hall tickets, record marks and grades, calculate rankings, and publish results online. It supports multiple grading systems and exam types including periodic tests, term exams, and final exams." },
  { q: "Can school ERP generate report cards automatically?", a: "Yes, the system automatically generates comprehensive report cards based on the marks and grades entered by teachers. Report cards can include subject-wise marks, grades, percentage, class rank, teacher remarks, and attendance summary. They can be printed or shared digitally with parents." },
  { q: "How secure is student data in the ERP system?", a: "Student data is stored on secure cloud servers with industry-standard encryption protocols. Role-based access control ensures that only authorized personnel can view or modify sensitive information. Regular backups and disaster recovery mechanisms are in place to prevent data loss." },
  { q: "What is the cost of school ERP in India?", a: "The cost of school ERP software in India varies based on the number of modules, students, branches, and customization required. RajSons Designs offers affordable and transparent pricing. Contact us for a customized quote tailored to your school's specific requirements." },
  { q: "How long does implementation take?", a: "Implementation time depends on the size of the school and the number of modules being deployed. Typically, a standard school ERP implementation takes 2–4 weeks, including system setup, data migration, staff training, and testing." },
  { q: "Can school ERP handle multiple branches?", a: "Yes, our school ERP is designed to support multi-branch institutions. Administrators can manage multiple campuses from a single dashboard, while each branch can have its own configuration for classes, timetables, fees, and staff." },
  { q: "Does school ERP include library management?", a: "Yes, the library management module allows schools to maintain a digital catalog of books, manage issue and return transactions, track overdue items, send reminders, and generate library usage reports for students and staff." },
  { q: "Can I communicate with parents through ERP?", a: "Absolutely. The communication module provides multiple channels including broadcast messages, SMS, email, and in-app notifications for sending circulars, event updates, fee reminders, attendance alerts, and personalized messages to parents." },
  { q: "What reports can be generated from school ERP?", a: "School ERP can generate a wide range of reports including attendance reports, fee collection reports, exam results and rankings, student performance analytics, staff attendance and payroll reports, library usage reports, and custom administrative reports as needed." },
  { q: "Is training provided for school staff?", a: "Yes, RajSons Designs provides complete training for teachers, administrative staff, and management. Our training covers system navigation, data entry, report generation, and best practices to ensure smooth adoption across the institution." },
  { q: "Can school ERP integrate with existing systems?", a: "Our school ERP supports integration with existing systems such as accounting software, biometric devices, SMS gateways, payment gateways, and other third-party applications through well-documented APIs." },
  { q: "How do I get started with school ERP implementation?", a: "Getting started is simple. Contact RajSons Designs for a free consultation. We will understand your requirements, suggest the right modules, provide a customized quote, and guide you through the entire implementation process step by step." },
];

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajsonsdesigns.com" },
    { "@type": "ListItem", position: 2, name: "ERP Solutions", item: "https://www.rajsonsdesigns.com/erp-software-solutions.html" },
    { "@type": "ListItem", position: 3, name: "School ERP Software", item: "https://www.rajsonsdesigns.com/school-erp-software.html" },
  ],
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function SchoolErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      <ErpHero
        image="/images/erp/school.jpg"
        title="School ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "School ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your School Operations with Powerful ERP Software"
        paragraphs={[
          "Managing the day-to-day operations of a school is a complex task that involves coordinating students, teachers, parents, and administrative staff across multiple departments and functions. From handling admissions and attendance to organizing exams and generating report cards, each process demands precision, time, and effort. RajSons Designs brings you a comprehensive School ERP Software solution designed to simplify every aspect of school management through automation and digital integration.",
          "Our School ERP system is a powerful, cloud-based platform that brings together student data management, attendance tracking, fee collection, timetable planning, exam management, library operations, transport management, and parent-teacher communication under one unified dashboard. With real-time data access and role-based permissions, teachers can focus on educating, administrators can make informed decisions, and parents can stay connected with their child&apos;s academic journey.",
          "Whether you run a small private school or a large multi-branch educational institution, our ERP software is built to scale with your needs. It eliminates paperwork, reduces manual errors, saves valuable time, and enhances transparency across the entire institution. With RajSons Designs as your technology partner, you can transform your school into a digitally empowered, future-ready institution.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="School" />

      <FeaturesSection features={features} colors={colors} industry="School" />

      <BenefitsSection benefits={benefits} colors={colors} industry="School" />

      <WhyRajsonsSection items={whyRajsons} colors={colors} />

      <ProcessSection steps={steps} colors={colors} />

      <FaqSection faqData={faqs} colors={colors} />

      <CtaSection colors={colors} industry="School" />
    </>
  );
}
