"use client";

import { Shirt, ShoppingBag, Tag, Users, Package, BarChart3, ShieldCheck,
  Smartphone, DollarSign, ClipboardCheck, Settings, MapPin, RefreshCw,
  Zap, HeadphonesIcon, CheckCircle, TrendingUp, Scissors,
} from "lucide-react";
import { ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection, industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp } from "@/components/erp-common";

const colors = industryColors["garment-store"];

const challenges = [
  {
    icon: Shirt, title: "Variant & SKU Management Chaos",
    desc: "Managing hundreds of products across multiple sizes, colors, and styles manually leads to stock mismatches, lost sales, and overselling of popular variants.",
  },
  {
    icon: ShoppingBag, title: "Slow Billing & Checkout Delays",
    desc: "Without an integrated POS, cashiers struggle with slow billing, manual calculations, and long queues during peak shopping hours, hurting customer experience.",
  },
  {
    icon: Tag, title: "Pricing & Discount Inconsistencies",
    desc: "Applying seasonal discounts, clearance sales, and multi-tier pricing across variants becomes error-prone and hard to track without automated discount rules.",
  },
  {
    icon: Package, title: "Inventory Mismanagement",
    desc: "Tracking stock across multiple product variants, sizes, and colors manually results in overstocking, dead inventory, frequent stockouts, and lost revenue.",
  },
  {
    icon: BarChart3, title: "Lack of Real-time Sales Insights",
    desc: "Without live dashboards, store owners cannot monitor daily sales, best-selling products, slow-moving inventory, or staff performance at a glance.",
  },
  {
    icon: Users, title: "Customer Retention Challenges",
    desc: "Without a CRM, stores miss opportunities to track purchase history, preferences, and loyalty, making it difficult to engage customers and drive repeat business.",
  },
];

const features = [
  { icon: Scissors, title: "Alteration & Tailoring Tracking", desc: "Manage alteration requests, assign to tailors, track completion status, and link alteration charges directly to customer bills from a single dashboard." },
  { icon: Shirt, title: "Product & Variant Management", desc: "Create products with size, color, and style variants. Auto-generate SKUs, barcodes, and manage independent pricing and stock levels for every variant." },
  { icon: ClipboardCheck, title: "Purchase Order Management", desc: "Create purchase orders for new stock, track order status, manage supplier accounts, and receive goods with automated stock updates and GRN generation." },
  { icon: ShoppingBag, title: "Retail POS Billing", desc: "Fast, intuitive POS interface with barcode scanning, variant selection, mixed payment modes, invoice generation, and instant receipt printing or digital delivery." },
  { icon: Tag, title: "Pricing & Discount Engine", desc: "Set multi-tier pricing (retail, wholesale, VIP), create time-bound promotions, BOGO offers, clearance markdown rules, and loyalty point redemption schemes." },
  { icon: Package, title: "Inventory Management", desc: "Real-time stock tracking across categories, sizes, colors, and multiple store locations with low-stock alerts, stock transfer, and automated reorder suggestions." },
  { icon: Settings, title: "Store Configuration", desc: "Configure tax rates, payment methods, printer settings, barcode formats, user permissions, and store profiles to align the system with your business rules." },
  { icon: DollarSign, title: "Accounting & GST Compliance", desc: "Generate GST-compliant invoices, track expenses, manage ledgers, reconcile payments, and file returns with built-in accounting integration and tax reports." },
  { icon: Users, title: "Customer Relationship Management", desc: "Build detailed customer profiles, track purchase history and preferences, manage loyalty programs, send personalized offers, and run WhatsApp and SMS campaigns." },
  { icon: ShieldCheck, title: "Data Security & Cloud Backup", desc: "Enterprise-grade encryption, role-based access control, and automated cloud backups ensure your store data is always safe, secure, and instantly recoverable." },
  { icon: Smartphone, title: "Mobile & Multi-Device Access", desc: "Access the ERP from any smartphone, tablet, or laptop. View real-time sales, approve purchases, and manage your store remotely with full mobile responsiveness." },
  { icon: BarChart3, title: "Dashboard & Real-time Analytics", desc: "Comprehensive dashboard showing daily sales, top products, variant-wise sell-through, profit margins, staff performance, and inventory turnover at a glance." },
];

const benefits = [
  { icon: Zap, title: "Increased Operational Efficiency", desc: "Automate routine tasks like billing, stock updates, and purchase orders, freeing your staff to focus on serving customers and growing sales." },
  { icon: RefreshCw, title: "Reduced Manual Errors", desc: "Eliminate data entry mistakes with barcode scanning, automated calculations, and real-time validation across all store operations." },
  { icon: TrendingUp, title: "Maximized Sales & Revenue", desc: "Identify best-selling variants, optimize pricing with data-driven insights, and run targeted promotions to boost average order value and repeat purchases." },
  { icon: CheckCircle, title: "Improved Customer Experience", desc: "Faster checkout, accurate billing, loyalty rewards, and personalized service create a shopping experience that keeps customers coming back." },
  { icon: ShieldCheck, title: "Enhanced Data Accuracy", desc: "Real-time synchronization across billing, inventory, and accounting ensures every transaction is recorded accurately and instantly reflected across the system." },
  { icon: DollarSign, title: "Cost Savings & Waste Reduction", desc: "Reduce dead stock, optimize reorder quantities, minimize manual labor overhead, and avoid revenue loss from stockouts with intelligent inventory planning." },
];

const whyRajsons = [
  { icon: MapPin, title: "Customized for Indian Garment Retailers", desc: "Our ERP is designed specifically for Indian clothing stores, boutiques, and fashion outlets with local tax compliance, currency support, and regional language options built in." },
  { icon: Smartphone, title: "Modern Web-based Technology", desc: "Built with cutting-edge web technologies, our ERP runs in any browser with zero installation and works seamlessly across desktops, tablets, and smartphones." },
  { icon: Users, title: "Easy-to-use Interface", desc: "Intuitive dashboards and simple navigation ensure that even non-technical store staff can learn and start using the system effectively within hours." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "We offer transparent, budget-friendly pricing plans tailored for small boutiques, multi-brand outlets, and large garment store chains across India." },
  { icon: HeadphonesIcon, title: "Training & Support", desc: "We provide comprehensive staff training, video tutorials, and dedicated support to ensure smooth adoption and ongoing success with the ERP system." },
  { icon: ShieldCheck, title: "Secure Data Management", desc: "Your store data is protected with enterprise-grade encryption, role-based access control, and automated cloud backups for complete peace of mind." },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "We sit down with your team to understand your store operations, product catalog size, pain points, and specific business requirements in detail." },
  { step: "02", title: "Business Consultation", desc: "Our ERP consultants recommend the best modules and configurations based on your store type, number of variants, outlets, and budget." },
  { step: "03", title: "Solution Planning", desc: "We create a detailed implementation roadmap with milestones, timelines, and resource allocation tailored to your garment retail business." },
  { step: "04", title: "ERP Development", desc: "Our developers customize the ERP modules, configure variant matrices, set up pricing rules, and integrate billing and inventory workflows." },
  { step: "05", title: "Testing", desc: "We rigorously test every module for functionality, performance, security, and user experience before deployment." },
  { step: "06", title: "Data Migration", desc: "Your existing product catalog, customer records, inventory data, and financial history are securely migrated to the new ERP system." },
  { step: "07", title: "Deployment & Training", desc: "We deploy the ERP on your infrastructure, train your staff hands-on, and provide documentation for ongoing reference." },
  { step: "08", title: "Ongoing Support", desc: "Our team remains available for technical support, system updates, feature enhancements, and periodic performance reviews." },
];

const faqData = [
  { q: "What is Garment Store ERP Software?", a: "Garment Store ERP (Enterprise Resource Planning) software is an integrated platform designed specifically for clothing retailers to manage inventory across sizes and colors, process sales with a POS system, handle billing and GST compliance, track customer relationships, and generate real-time business reports from a single unified system." },
  { q: "How does Garment ERP help manage inventory across sizes and colors?", a: "The ERP uses a variant matrix system where each product can have multiple size and color combinations, each with its own SKU, barcode, stock level, and pricing. You can track stock in real time across all variants, set low-stock alerts, transfer stock between stores, and generate reorder suggestions based on sales velocity." },
  { q: "Can Garment ERP handle size and color variants?", a: "Yes, our Garment Store ERP is built with a powerful variant management engine. You can define custom attributes like size (S, M, L, XL, XXL), color (with hex codes for visual display), fabric type, and fit. The system auto-generates SKUs for every combination and tracks inventory, pricing, and sales independently for each variant." },
  { q: "Is Garment ERP suitable for small retail stores and boutiques?", a: "Absolutely. Our Garment Store ERP is designed to scale with your business. Whether you run a single boutique, a multi-brand outlet, or a chain of stores across cities, our modular plans let you start with the features you need and add more as your business grows." },
  { q: "What features are important in a garment store management system?", a: "Essential features include variant management (size/color), POS billing with barcode scanning, inventory tracking, pricing and discount management, purchase order management, customer CRM, GST-compliant invoicing, sales analytics, and multi-store support. Alteration tracking and loyalty programs are valuable additions for clothing stores." },
  { q: "How does billing and invoicing work in Garment ERP?", a: "The POS billing module lets cashiers scan barcodes, select variants, apply discounts, and generate invoices in seconds. It supports mixed payment modes (cash, card, UPI, credit), automatic tax calculation, GST invoice generation with HSN codes, and digital receipt delivery via SMS or email." },
  { q: "Can I manage multiple store branches from one ERP?", a: "Yes, our Garment Store ERP supports multi-outlet management. You can oversee all stores from a single dashboard, compare performance across branches, transfer inventory between locations, centralize customer data, and maintain consistent pricing and promotions chain-wide." },
  { q: "Is Garment ERP cloud-based or on-premise?", a: "We offer both cloud-based and on-premise deployment options. Cloud-based ERP is hosted on secure servers with automatic updates and backups, accessible from anywhere. On-premise deployment gives you full control over data and is hosted on your own servers. We help you choose the best option based on your requirements." },
  { q: "How does the POS system work with variant products?", a: "When a product is scanned or selected at the POS, the system displays all available size and color variants with real-time stock status. The cashier simply selects the desired variant, and the system applies the correct pricing, adds it to the cart, and updates inventory instantly upon sale completion." },
  { q: "Can Garment ERP integrate with accounting software?", a: "Yes, our Garment Store ERP integrates seamlessly with popular accounting platforms for automated ledger management, P&L statements, balance sheets, and tax filing. Sales, expenses, and purchase data sync automatically, eliminating duplicate data entry and reconciliation efforts." },
  { q: "How does Garment ERP help with customer loyalty programs?", a: "The built-in CRM module lets you create points-based or tier-based loyalty programs, track customer purchase history, send personalized offers via WhatsApp and SMS, manage gift cards and store credit, and analyze repeat purchase patterns to improve customer retention." },
  { q: "What is the cost of garment ERP software in India?", a: "The cost depends on the number of stores, product catalog size, required modules, deployment type, and customization needs. RajSons Designs offers affordable and transparent pricing tailored to your budget. Contact us for a customized quote based on your specific requirements." },
  { q: "How long does garment ERP implementation take?", a: "Implementation typically takes 4 to 8 weeks depending on project complexity, catalog size, number of stores, and customization requirements. This includes requirement analysis, system configuration, data migration, testing, and staff training. We provide a clear timeline before starting." },
  { q: "How secure is my store data in the ERP system?", a: "Security is a top priority. Our ERP uses SSL encryption, role-based access controls, two-factor authentication, and automated daily backups. Data is stored on secure servers with firewalls and intrusion detection systems. We also comply with Indian data protection guidelines to safeguard your business information." },
  { q: "Can I access Garment ERP on my mobile phone?", a: "Yes, our Garment Store ERP is fully responsive and accessible from any smartphone, tablet, or laptop with an internet connection. You can check real-time sales, approve purchase orders, view stock levels, and monitor store performance on the go." },
  { q: "How does Garment ERP help with sales reporting and analytics?", a: "The system provides real-time dashboards showing daily sales, top-selling variants, category-wise performance, profit margins, inventory turnover, staff productivity, and sales trends over time. These insights help you make data-driven decisions about pricing, purchasing, and promotions." },
  { q: "What kind of training do you provide for store staff?", a: "We provide comprehensive on-site and online training sessions for all staff members, including billing counter staff, inventory managers, and store owners. Training includes hands-on system walkthroughs, video tutorials, user manuals, and a dedicated support helpline for the first 30 days post-deployment." },
  { q: "How do I migrate from manual billing and Excel tracking to ERP?", a: "Our team handles the complete migration process — auditing your existing product catalog, customer data, and inventory records, cleaning and formatting the data, then securely importing it into the new ERP system. We run parallel trials to ensure accuracy before going fully live." },
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
    { "@type": "ListItem", position: 3, name: "Garment Store ERP" },
  ],
};

export default function GarmentStoreErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/garment-store.jpg"
        title="Garment Store ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Garment Store ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Garment Retail Store Operations with Powerful ERP Software"
        paragraphs={[
          "Running a garment store, boutique, or clothing retail chain comes with unique operational complexities. From managing hundreds of products across multiple sizes, colors, and styles to handling daily billing, inventory replenishment, seasonal pricing changes, and customer relationships — every aspect demands precision and speed. Yet many clothing retailers in India still rely on manual registers, spreadsheets, and basic billing software that cannot handle variant-level inventory, leading to stock mismatches, lost sales, and frustrated customers. A comprehensive Garment Store ERP software solves these challenges by bringing every facet of your retail operations into a single, integrated digital platform.",
          "RajSons Designs offers a powerful, feature-rich Garment Store ERP solution designed specifically for the Indian apparel retail industry. Our software automates product and variant management, POS billing, inventory tracking, purchase orders, pricing and promotions, customer relationship management, and GST-compliant accounting all in one place. Whether you run a small boutique in Yamunanagar, a multi-brand outlet in Delhi, or a chain of stores across Haryana and Punjab, our ERP adapts to your unique needs and helps you streamline operations, reduce costs, and maximize profitability.",
          "With 15+ years of experience in digital solutions, RajSons Designs combines deep industry knowledge with modern technology to deliver an ERP that is easy to use, affordable, and built for Indian businesses. Our cloud-based platform ensures you can manage your store from anywhere, while dedicated training and support ensure a smooth transition from manual processes to automated excellence. Discover how our Garment Store ERP can transform your retail business today.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Garment Store" />
      <FeaturesSection features={features} colors={colors} industry="Garment Store" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Garment Store" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Garment Store" />
    </>
  );
}
