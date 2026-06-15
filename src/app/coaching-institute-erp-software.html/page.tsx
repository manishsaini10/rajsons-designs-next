"use client";

import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection,
  BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection,
  industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp,
} from "@/components/erp-common";
import {
  GraduationCap, BookOpen, Users, BarChart3, Award, Target,
  ClipboardCheck, PenTool, CalendarDays, Bell, TrendingUp, Globe,
  Monitor, FileSpreadsheet, MessageSquare, CheckCircle, ArrowRight,
  Phone, HelpCircle, LayoutDashboard, Zap, RefreshCw, Clock,
  HeartHandshake, PieChart, MapPin, Laptop, UserCheck, DollarSign,
  HeadphonesIcon, ShieldCheck,
} from "lucide-react";

const colors = industryColors.coaching;

const challenges = [
  {
    icon: BookOpen, title: "Manual Admission & Enrollment",
    desc: "Handling student registrations, form submissions, and batch allocations manually leads to data entry errors, lost records, and delayed enrollment confirmations.",
  },
  {
    icon: FileSpreadsheet, title: "Disconnected Fee Tracking",
    desc: "Tracking fee collections, pending dues, and installment schedules across multiple students using spreadsheets results in missed payments and financial leakage.",
  },
  {
    icon: Users, title: "Batch & Schedule Conflicts",
    desc: "Without a centralized system, managing multiple batches, teacher assignments, and time slots becomes chaotic, causing overlaps and scheduling confusion.",
  },
  {
    icon: ClipboardCheck, title: "Inefficient Attendance Management",
    desc: "Taking manual attendance on paper registers is time-consuming, prone to errors, and offers no real-time visibility for parents or management.",
  },
  {
    icon: PenTool, title: "Fragmented Test & Result Management",
    desc: "Conducting tests, evaluating answer sheets, and sharing results manually creates delays in feedback and makes performance tracking cumbersome.",
  },
  {
    icon: MessageSquare, title: "Poor Parent-Teacher Communication",
    desc: "Lack of a unified communication channel results in missed updates about fee reminders, attendance, test results, and important announcements to parents.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Comprehensive real-time dashboard displaying student enrollments, fee collections, batch performance, and key institute metrics at a glance." },
  { icon: GraduationCap, title: "Student Admission Management", desc: "Streamline the entire admission process from inquiry to enrollment with digital forms, document uploads, and automated confirmation workflows." },
  { icon: Users, title: "Batch & Timetable Management", desc: "Create and manage batches, assign teachers, set time slots, and avoid scheduling conflicts with an intuitive drag-and-drop interface." },
  { icon: CalendarDays, title: "Attendance Tracking", desc: "Mark student attendance digitally via mobile or desktop, with real-time sync and automatic SMS/WhatsApp alerts to parents." },
  { icon: ClipboardCheck, title: "Test & Exam Management", desc: "Create online tests, upload question banks, auto-evaluate objective exams, and publish results instantly with detailed performance analytics." },
  { icon: FileSpreadsheet, title: "Fee Management & Invoicing", desc: "Generate GST-compliant invoices, collect fees online via Razorpay/Paytm, manage installments, and track outstanding dues automatically." },
  { icon: PenTool, title: "Student Performance Reports", desc: "Track individual and batch-wise performance with detailed mark sheets, progress graphs, subject-wise analysis, and comparative reports." },
  { icon: BookOpen, title: "Course & Curriculum Planning", desc: "Define courses, subjects, syllabus timelines, and study materials with structured curriculum planning for systematic academic delivery." },
  { icon: Bell, title: "Parent Communication Portal", desc: "Send automated fee reminders, attendance alerts, test results, and institute announcements via WhatsApp, SMS, and email from a single platform." },
  { icon: Award, title: "HR & Staff Management", desc: "Manage teacher profiles, attendance, leave requests, payroll, and performance reviews for all teaching and non-teaching staff." },
  { icon: TrendingUp, title: "Multi-Branch Management", desc: "Oversee multiple coaching centers from a single login with branch-wise data isolation and consolidated super-admin reporting." },
  { icon: Globe, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Reduced Administrative Workload", desc: "Automate admission, fee tracking, attendance, and reporting to free up staff time for more productive teaching and student-focused activities." },
  { icon: RefreshCw, title: "Improved Fee Collection", desc: "Eliminate payment delays with automated invoicing, online payment gateways, and instant reminders that ensure timely fee collection." },
  { icon: Clock, title: "Faster Decision Making", desc: "Access real-time reports on enrollment trends, revenue, attendance, and student performance to make informed decisions quickly." },
  { icon: HeartHandshake, title: "Enhanced Parent Satisfaction", desc: "Keep parents informed with real-time updates on attendance, fees, test results, and institute announcements through automated communication." },
  { icon: PieChart, title: "Better Student Performance Tracking", desc: "Monitor individual and batch-level progress with detailed analytics, helping identify weak areas and improve academic outcomes." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Easily add new branches, courses, batches, and users as your coaching institute expands without switching systems or reconfiguring workflows." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Coaching Institutes", desc: "Our ERP is designed keeping Indian coaching centers, tuition classes, and academies in mind, with GST compliance, local payment gateways, and Hindi/English language support." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small, medium, and large coaching institutes across India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your institute data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your coaching institute operations, pain points, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your institute type, size, courses, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate third-party tools as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing student records, fee data, attendance logs, and academic history are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Coaching Institute ERP Software?", a: "Coaching Institute ERP (Enterprise Resource Planning) software is an integrated platform that helps coaching centers manage daily operations such as student admissions, batch scheduling, fee collection, attendance tracking, test management, and parent communication from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency and student satisfaction." },
  { q: "How does Coaching ERP improve parent communication?", a: "Coaching ERP improves parent communication by enabling automated updates on attendance, fee reminders, test results, and institute announcements via WhatsApp, SMS, and email. Parents get real-time notifications, reducing the need for manual calls and ensuring they are always informed about their child's progress and institute activities." },
  { q: "Can Coaching ERP handle multiple branches?", a: "Yes, our Coaching Institute ERP supports multi-branch management, allowing you to oversee multiple centers from a single dashboard. Each branch maintains its own isolated data while the super-admin gets consolidated reports on enrollments, revenue, attendance, and performance across all locations." },
  { q: "Is Coaching ERP suitable for small tuition centers?", a: "Absolutely. Our Coaching ERP is designed to scale, making it suitable for small tuition centers, hobby classes, and single-location coaching institutes as much as for large multi-branch training academies. We offer modular plans so you only pay for the features you need." },
  { q: "What features are important in a coaching management system?", a: "Essential features include student admission management, batch & timetable scheduling, attendance tracking, fee management with GST invoicing, online payment integration, test & exam management, performance reports, parent communication portal, and HR & staff management. Mobile accessibility and cloud backup are also important." },
  { q: "How does attendance tracking work in Coaching ERP?", a: "The attendance module allows teachers to mark student attendance via mobile app, tablet, or desktop dashboard. Attendance can be recorded session-wise or batch-wise with real-time sync. Automated alerts are sent to parents if a student is absent, and detailed attendance reports are available for management review." },
  { q: "Can I manage online tests and exams through the ERP?", a: "Yes, our Coaching ERP includes a comprehensive test management module. You can create online tests with objective and subjective questions, auto-evaluate multiple-choice answers, upload answer keys, publish results instantly, and generate detailed performance analytics for individual students and entire batches." },
  { q: "Is Coaching ERP software cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does fee management and invoicing work?", a: "The fee management module allows you to define flexible fee plans (lump sum, installments, course-based), generate GST-compliant invoices, collect payments online via Razorpay/Paytm, send automated reminders for pending dues, and track outstanding amounts. Receipts can be printed, downloaded, or shared digitally." },
  { q: "Can Coaching ERP handle GST compliance?", a: "Yes, our Coaching ERP is fully GST-compliant for the Indian market. It generates GST invoices with proper HSN codes, tracks input tax credit, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated automatically with any tax regulation changes." },
  { q: "What is the cost of coaching institute ERP software in India?", a: "The cost of coaching institute ERP software depends on the institute size, number of students, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does coaching ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard coaching ERP implementation typically takes 3 to 6 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does the ERP include student performance tracking?", a: "Yes, our Coaching ERP includes detailed student performance tracking with subject-wise mark sheets, progress graphs, comparative batch analysis, and trend reports. Teachers can track individual student progress over time, identify weak areas, and share performance reports with parents digitally." },
  { q: "How secure is my institute data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access Coaching ERP on my mobile phone?", a: "Yes, our Coaching ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. Both teachers and administrators can mark attendance, view reports, approve fee receipts, and manage operations on the go." },
  { q: "How does the ERP help with student retention?", a: "The ERP helps with student retention by enabling proactive communication with parents, tracking student performance trends to identify at-risk students early, sending automated fee reminders, and providing a seamless experience that reflects professionalism and builds trust with parents." },
  { q: "What kind of training do you provide for institute staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including administrators, teachers, and account teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to coaching ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (student records, fee history, attendance logs, academic records), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Coaching Institute ERP" },
  ],
};

export default function CoachingInstituteErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/coaching.jpg"
        title="Coaching Institute ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Coaching Institute ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Coaching Institute Operations with Powerful ERP Software"
        paragraphs={[
          "Running a coaching institute, tuition center, or training academy involves far more than just teaching. From managing student admissions and batch scheduling to tracking attendance, collecting fees, conducting tests, and communicating with parents — every operation must run smoothly to deliver a quality educational experience. Yet many institutes in India still rely on paper registers, scattered spreadsheets, and WhatsApp groups that lead to operational inefficiencies, communication gaps, and revenue leakage. A comprehensive Coaching Institute ERP software solves these challenges by bringing every aspect of your institute management into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Coaching Institute ERP solution designed specifically for the Indian education market. Our software automates student admissions, batch and timetable management, attendance tracking, fee collection with GST invoicing, online test management, performance reporting, and parent communication — all in one place. Whether you run a small tuition center in Yamunanagar, a mid-sized coaching institute in Chandigarh, or a large multi-branch academy across multiple cities, our ERP adapts to your unique needs and helps you deliver quality education while maximizing operational efficiency and revenue.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian coaching businesses. Our cloud-based platform ensures you can manage your institute from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Coaching Institute ERP can transform your educational business today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Coaching Institute" />
      <FeaturesSection features={features} colors={colors} industry="Coaching Institute" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Coaching Institute" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Coaching Institute" />
    </>
  );
}
