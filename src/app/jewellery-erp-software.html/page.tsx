"use client";

import { motion } from "framer-motion";
import {
  Gem, Diamond, Weight, Scale, ShoppingBag, Medal,
  Sparkles, Crown, Calculator, Receipt, Tag, Store,
  Users, Settings, BarChart3, ShieldCheck, HeadphonesIcon, Cloud,
  Package, Timer, TrendingUp, Check, ArrowRight, BookOpen, Wallet,
  Home, MapPin, Phone, RefreshCw, Menu, LayoutDashboard, FileText, ScrollText,
  Smartphone, DollarSign, UserCheck, Zap, Clock, HeartHandshake,
  PieChart, Laptop, Search, HelpCircle, Gift, Eye, Award,
} from "lucide-react";
import {
  ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection,
  WhyRajsonsSection, ProcessSection, FaqSection, CtaSection,
  industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp,
} from "@/components/erp-common";

const colors = industryColors.jewellery;

const challenges = [
  {
    icon: Gem, title: "Complex Inventory of Diverse Products",
    desc: "Managing thousands of jewellery items with varying gold purity, diamond quality, stone types, and designs manually leads to stock discrepancies, misplacements, and lost sales opportunities.",
  },
  {
    icon: FileText, title: "Manual Billing & Invoicing",
    desc: "Handwritten bills for gold, silver, and diamond jewellery are slow, error-prone, and difficult to audit, especially with weight-based pricing, making charges, and tax calculations.",
  },
  {
    icon: ScrollText, title: "Gold Rate & Price Fluctuations",
    desc: "Without real-time gold rate integration, shops struggle to update prices instantly, leading to inconsistent pricing across bills and potential profit erosion during market volatility.",
  },
  {
    icon: Package, title: "Karigar Job Work Tracking Issues",
    desc: "Coordinating with multiple karigars (artisans) for jewellery making, repair, and polishing without a digital system results in missed deadlines, lost items, and payment disputes.",
  },
  {
    icon: BarChart3, title: "Lack of Real-time Business Reports",
    desc: "Without live dashboards, jewellery shop owners cannot monitor daily sales, gold stock levels, karigar productivity, or profit margins at a glance.",
  },
  {
    icon: Users, title: "Inefficient Customer Relationship Management",
    desc: "Maintaining customer purchase history, anniversary reminders, and loyalty programs manually is cumbersome and leads to missed opportunities for repeat business and referrals.",
  },
];

const features = [
  { icon: LayoutDashboard, title: "Dashboard & Analytics", desc: "Real-time dashboard displaying daily sales, gold inventory, karigar performance, billing trends, and key business metrics at a glance." },
  { icon: Gem, title: "Product & Inventory Management", desc: "Manage jewellery items by category, purity (22K, 18K, 24K), weight, stone type, and design code with barcode support for accurate stock tracking." },
  { icon: Diamond, title: "Diamond & Stone Tracking", desc: "Track diamond carat, clarity, color, cut, and other stone inventory separately. Assign stones to specific jewellery items with full traceability." },
  { icon: ShoppingBag, title: "Sales & POS Management", desc: "Streamline walk-in and counter sales with a fast POS interface that supports weight-based pricing, making charges, GST calculation, and digital receipts." },
  { icon: Weight, title: "Weight-based Billing", desc: "Automatically calculate gold/silver item prices based on net weight, current gold rate, making charges, and wastage percentage with precision." },
  { icon: Scale, title: "Billing & GST Invoicing", desc: "Generate GST-compliant digital invoices with HSN codes, weight breakup, making charges, TCS, and e-invoicing support for all jewellery transactions." },
  { icon: Calculator, title: "Accounting & Financial Management", desc: "Integrated accounting module for ledgers, P&L, balance sheets, party accounts, and tax management with seamless bank reconciliation." },
  { icon: Users, title: "Customer Relationship Management", desc: "Store customer purchase history, birthday/anniversary dates, preferences, and send automated reminders for offers, exchange schemes, and new arrivals." },
  { icon: Clock, title: "Karigar Job Work Management", desc: "Assign jewellery making, repair, and polishing work to karigars with digital tracking of timelines, material issued, weight received, and wage calculation." },
  { icon: DollarSign, title: "Financial Reporting & Profit Analysis", desc: "Get detailed reports on gold loan interest, daily collection, gross profit, category-wise margins, and karigar costs for informed business decisions." },
  { icon: ShieldCheck, title: "GST & Tax Compliance", desc: "Generate GST invoices, e-invoices, file GSTR-1/GSTR-3B returns, manage input tax credit, and stay compliant with HUID hallmarking regulations." },
  { icon: Smartphone, title: "Mobile Access & Cloud Backup", desc: "Access the ERP from any device with cloud-based technology. Automatic backups ensure your data is always safe and recoverable." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate routine tasks, reduce manual intervention, and optimize staff productivity across your jewellery shop operations." },
  { icon: RefreshCw, title: "Reduced Manual Errors", desc: "Eliminate data entry mistakes with automated weight calculations, GST computations, and real-time validation checks throughout the system." },
  { icon: Clock, title: "Faster Billing & Checkout", desc: "Reduce customer waiting times with instant price lookup, barcode scanning, weight-based calculations, and express digital invoicing." },
  { icon: Crown, title: "Better Customer Experience", desc: "Delight customers with personalized service, timely anniversary reminders, exchange offers, and a seamless shopping experience from selection to billing." },
  { icon: PieChart, title: "Real-time Business Reports", desc: "Make informed business decisions with up-to-date reports on sales, inventory, karigar performance, profit margins, and daily collections." },
  { icon: TrendingUp, title: "Scalable Business Growth", desc: "Easily add new branches, onboard karigars, expand product categories, and manage multi-city operations without changing your ERP system." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Jewellery Business", desc: "Our ERP is designed keeping Indian jewellery shops, showrooms, and manufacturers in mind, with HUID hallmarking, GST, and local gold rate integration built in." },
  { icon: Laptop, title: "Modern Web-based Technology", desc: "Built with the latest web technologies, our ERP runs in any browser with no installation required and works seamlessly across all devices." },
  { icon: UserCheck, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical staff can learn and start using the system within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small jewellery shops, mid-sized showrooms, and large jewellery chains in India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption of the ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your jewellery business data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We meet with your team to understand your jewellery shop operations, pain points, and specific requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your shop size, product range, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation for your project." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure workflows, and integrate third-party tools as per your needs." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing jewellery inventory, customer records, supplier data, and financial records are securely migrated to the new system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Jewellery ERP Software?", a: "Jewellery ERP (Enterprise Resource Planning) software is an integrated platform that helps jewellery businesses manage day-to-day operations such as inventory tracking, weight-based billing, karigar job work, customer management, accounting, GST compliance, and reporting from a single system. It replaces fragmented manual processes with automated workflows, improving efficiency, accuracy, and profitability for jewellery shops, showrooms, and manufacturers." },
  { q: "How does Jewellery ERP help with inventory management?", a: "Jewellery ERP provides a centralized inventory system where you can track each item by category (rings, necklaces, earrings, bracelets), gold purity (22K, 18K, 24K), weight, diamond/stone details, design code, and supplier. Barcode scanning enables fast check-in/check-out, while real-time stock updates prevent over-selling and help identify slow-moving items for promotional strategies." },
  { q: "Can Jewellery ERP handle weight-based billing and pricing?", a: "Yes, our Jewellery ERP has a dedicated weight-based billing module that automatically calculates the final price based on net weight, current gold rate (live or manual), making charges per gram, wastage percentage, and applicable taxes. This eliminates manual calculation errors and ensures consistent pricing across all transactions." },
  { q: "Is the ERP suitable for small jewellery shops?", a: "Absolutely. Our Jewellery ERP is designed to scale, making it suitable for small independent jewellery shops, mid-sized showrooms, and large jewellery chains. We offer modular plans so you only pay for the features you need, and the interface is simple enough for small teams to adopt quickly." },
  { q: "How does karigar job work tracking work in the ERP?", a: "The karigar module allows you to issue raw gold, diamonds, and stones to artisans digitally, track work-in-progress, set completion deadlines, receive finished items with weight verification, and calculate wages automatically. This ensures full accountability and eliminates disputes with karigars." },
  { q: "Does the ERP support HUID hallmarking compliance?", a: "Yes, our Jewellery ERP is designed to support HUID (Hallmark Unique Identification) compliance as mandated by the Bureau of Indian Standards. You can record HUID codes for each jewellery item, generate hallmark-compliant invoices, and maintain a digital trail for regulatory audits." },
  { q: "Can I manage multiple jewellery branches from one ERP?", a: "Yes, our Jewellery ERP supports multi-branch management, allowing you to oversee multiple showrooms or franchise locations from a single dashboard. You can compare performance across branches, centralize inventory, and maintain consistent pricing and billing standards chain-wide." },
  { q: "How does Jewellery ERP handle GST compliance?", a: "The ERP is fully GST-compliant for the Indian jewellery sector. It generates GST invoices with proper HSN codes for gold, silver, and diamond items, tracks input tax credit, supports e-invoicing, and generates GSTR-1 and GSTR-3B returns. The system is updated automatically with any tax regulation changes." },
  { q: "Can I integrate live gold rates into the billing system?", a: "Yes, our Jewellery ERP can integrate with live gold rate APIs to automatically update gold/silver prices in real time. You can also set manual rates if needed. The system uses the configured rate for all weight-based calculations, ensuring consistent and accurate pricing across your showroom." },
  { q: "What is the cost of Jewellery ERP software in India?", a: "The cost of Jewellery ERP depends on the shop size, number of users, required modules, deployment type (cloud vs on-premise), and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote." },
  { q: "How long does Jewellery ERP implementation take?", a: "Implementation timelines vary based on the complexity and scope of the project. A standard Jewellery ERP implementation typically takes 4 to 8 weeks, including requirement analysis, customization, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "Does the ERP help with exchange and buyback transactions?", a: "Yes, our ERP has a dedicated exchange and buyback module that handles old gold exchange, trade-in valuation, weight deduction, making charge adjustment, and tax calculation on exchange transactions seamlessly within the billing workflow." },
  { q: "How secure is my jewellery business data in the ERP?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access Jewellery ERP on my mobile phone?", a: "Yes, our Jewellery ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. You can check inventory, view sales reports, approve bills, and monitor karigar work on the go." },
  { q: "How does Jewellery ERP help with customer loyalty programs?", a: "The CRM module tracks customer purchase history, preferences, birthday and anniversary dates, and loyalty points. You can set up automated SMS/email campaigns for festive offers, exchange schemes, and new collection launches to drive repeat business." },
  { q: "Can I manage supplier and vendor accounts in the ERP?", a: "Yes, the ERP includes a complete supplier management module where you can track raw gold purchases, diamond and stone procurement, vendor payments, outstanding balances, and purchase return histories. This helps maintain healthy supplier relationships." },
  { q: "What kind of training do you provide for jewellery shop staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including counter sales, inventory, accounting, and management teams. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual processes to Jewellery ERP?", a: "Our team handles the complete migration process, starting with auditing your existing data (gold inventory, customer records, supplier accounts, financials), cleaning and formatting it, then securely transferring it to the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Jewellery ERP" },
  ],
};

export default function JewelleryErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/jewellery.jpg"
        title="Jewellery ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Jewellery ERP" },
        ]}
        colors={colors}
        stats={[
          { value: "15+", label: "Years Experience" },
          { value: "500+", label: "Happy Clients" },
          { value: "50+", label: "Cities Covered" },
          { value: "99.9%", label: "Uptime" },
        ]}
      />

      <DescriptionSection title="Streamline Your Jewellery Shop Operations with Powerful ERP Software" colors={colors} paragraphs={[
  "Running a jewellery business involves unique challenges—from managing gold and diamond inventory by weight, purity, and making charges to tracking karigar job work, scheme billing, and hallmarking compliance. Yet many jewellery shops in India still rely on traditional account books, manual calculations, and disconnected systems that lead to inaccuracies, stock mismanagement, and lost sales opportunities.",
  "RajSons Designs offers a powerful, feature-rich Jewellery ERP solution designed specifically for the Indian jewellery industry. Our software automates weight-based billing, HUID hallmarking tracking, karigar job work management, scheme management, customer relationships, and GST compliance all in one place. Whether you run a small jewellery showroom in Yamunanagar or a large chain across Haryana, our ERP adapts to your unique needs.",
  "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian jewellery businesses.",
]} />

      <ChallengesSection challenges={challenges} colors={colors} industry="Jewellery" />
      <FeaturesSection features={features} colors={colors} industry="Jewellery" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Jewellery" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Jewellery" />
    </>
  );
}
