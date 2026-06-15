"use client";

import { ScrollText, Package, CreditCard, Users, AlertCircle, ChefHat, BarChart3, Layers, ShoppingBag, Settings, BookOpen, Percent, RefreshCw, Star, Phone, Zap, DollarSign, HeartHandshake, TrendingUp } from "lucide-react";
import { ErpHero, DescriptionSection, ChallengesSection, FeaturesSection, BenefitsSection, WhyRajsonsSection, ProcessSection, FaqSection, CtaSection, industryColors, defaultWhyRajsons, defaultProcessSteps, fadeUp } from "@/components/erp-common";

const colors = industryColors.restaurant;

const challenges = [
  { icon: ScrollText, title: "Manual Order Taking", desc: "Errors from handwritten orders lead to wrong dishes and unhappy customers." },
  { icon: Package, title: "Inventory Waste", desc: "Poor stock tracking causes over-ordering, spoilage, and lost revenue." },
  { icon: CreditCard, title: "Billing Errors", desc: "Mistakes in manual billing result in revenue leakage and customer disputes." },
  { icon: Users, title: "Staff Scheduling Issues", desc: "Inefficient shift management leads to understaffing or excess payroll costs." },
  { icon: AlertCircle, title: "Lack of Customer Insights", desc: "No data on preferences, visit patterns, or feedback to improve service." },
  { icon: ChefHat, title: "Kitchen Communication Gaps", desc: "Delayed order relay between waitstaff and kitchen slows service." },
];

const features = [
  { icon: BarChart3, title: "Dashboard & Analytics", desc: "Real-time sales, expense, and performance dashboards for informed decisions." },
  { icon: CreditCard, title: "POS Billing System", desc: "Fast, error-free billing with support for multiple payment modes and split bills." },
  { icon: Layers, title: "Table Management", desc: "Visual table layout with status tracking for reservations, occupied, and available tables." },
  { icon: ChefHat, title: "Kitchen Display System", desc: "Orders appear instantly on kitchen screens, reducing wait times and miscommunication." },
  { icon: ShoppingBag, title: "Online Order Integration", desc: "Seamlessly accept orders from Zomato, Swiggy, and your own website." },
  { icon: Package, title: "Inventory Management", desc: "Track raw material stock, set reorder levels, and reduce wastage." },
  { icon: ScrollText, title: "Purchase Management", desc: "Manage vendor orders, purchase invoices, and stock receipts digitally." },
  { icon: Users, title: "Customer Management", desc: "Maintain customer profiles, order history, and preferences for personalised service." },
  { icon: Settings, title: "Employee Management", desc: "Track staff attendance, schedules, roles, and performance metrics." },
  { icon: BookOpen, title: "Accounting Integration", desc: "Sync with accounting software for automated P&L, GST, and tax reports." },
  { icon: Percent, title: "GST Compliance", desc: "Auto-calculated GST on bills with proper HSN codes and tax invoice formats." },
  { icon: RefreshCw, title: "Mobile Access", desc: "Monitor sales, approvals, and reports on the go with mobile-friendly access." },
];

const benefits = [
  { icon: Zap, title: "Faster Order Processing", desc: "Reduce wait times and serve more customers." },
  { icon: RefreshCw, title: "Reduced Food Waste", desc: "Optimise inventory with real-time stock tracking." },
  { icon: DollarSign, title: "Accurate Billing", desc: "Eliminate human errors and revenue leakage." },
  { icon: HeartHandshake, title: "Better Customer Service", desc: "Personalised experience with order history." },
  { icon: TrendingUp, title: "Real-time Sales Reports", desc: "Track performance from anywhere." },
  { icon: Layers, title: "Scalable Operations", desc: "Manage single outlet or multi-branch easily." },
];

const whyRajsons = [
  { icon: Star, title: "Customized for Indian Restaurants", desc: "Built for Indian dining formats — fine dining, QSR, cafes, dhabas, and cloud kitchens." },
  { icon: Users, title: "User-friendly Interface", desc: "Intuitive design that staff can learn quickly with minimal training." },
  { icon: CreditCard, title: "Affordable Pricing", desc: "Cost-effective plans designed for small and medium restaurant businesses." },
  { icon: Phone, title: "Dedicated Support", desc: "Phone, chat, and remote support from our team based in Yamunanagar." },
  { icon: Settings, title: "Secure Cloud Platform", desc: "Data encrypted and backed up on secure cloud servers with 99.9% uptime." },
  { icon: RefreshCw, title: "Easy Integration with Existing Systems", desc: "API-based integration with existing accounting, delivery, and payment platforms." },
];

const processSteps = [
  { step: "01", title: "Analysis", desc: "Understand your restaurant type, menu complexity, seating capacity, and current workflow." },
  { step: "02", title: "Consultation", desc: "Discuss feature requirements — POS, KDS, online ordering, inventory, and reporting needs." },
  { step: "03", title: "Planning", desc: "Design a custom ERP roadmap with module priorities and integration timelines." },
  { step: "04", title: "Development", desc: "Configure the ERP with your menu, pricing, tax rates, staff roles, and layouts." },
  { step: "05", title: "Testing", desc: "Rigorous QA with real order scenarios, billing trials, and inventory checks." },
  { step: "06", title: "Migration", desc: "Safely transfer customer data, menu master, vendor lists, and past records." },
  { step: "07", title: "Deployment", desc: "Go-live with on-site setup, POS terminal configuration, and KDS installation." },
  { step: "08", title: "Support", desc: "Ongoing maintenance, updates, and 24/7 technical assistance." },
];

const faqData = [
  { q: "What is Restaurant ERP Software?", a: "Restaurant ERP software is an integrated platform that manages daily restaurant operations including POS billing, kitchen order display, inventory tracking, employee scheduling, customer management, and financial reporting — all from a single dashboard." },
  { q: "How does Restaurant ERP improve operations?", a: "It automates order flow from table to kitchen, reduces billing errors, tracks inventory in real time, and provides insights into sales trends — helping you make faster, data-driven decisions." },
  { q: "Can Restaurant ERP handle multiple branches?", a: "Yes, our ERP supports multi-branch management with centralised reporting. You can monitor sales, inventory, and staff across all outlets from one dashboard." },
  { q: "Does restaurant ERP include POS billing?", a: "Absolutely. Our POS module supports dine-in, takeaway, and online orders with tax calculation, split bills, discounts, and multiple payment methods." },
  { q: "How does Kitchen Display System work?", a: "When a waiter places an order, it appears instantly on a kitchen screen with table number, dish name, modifiers, and preparation notes — eliminating paper chits." },
  { q: "Can I integrate online food delivery platforms?", a: "Yes, we integrate with Zomato, Swiggy, and other platforms so that online orders sync directly into your POS and KDS systems." },
  { q: "Is restaurant ERP suitable for small cafes?", a: "Yes, we offer lightweight configurations for small cafes with basic POS, inventory, and reporting — you only pay for what you need." },
  { q: "How does inventory management work in restaurant ERP?", a: "Track raw material stock, set reorder levels, receive low-stock alerts, and generate purchase orders automatically based on usage patterns." },
  { q: "Can I track employee performance with ERP?", a: "Yes, the employee module logs attendance, shift hours, order fulfilment rates, and sales per staff member for performance evaluation." },
  { q: "What is the cost of restaurant ERP in India?", a: "Our pricing starts from affordable monthly plans tailored to the size of your restaurant. Contact us for a custom quote based on your requirements." },
  { q: "How long does implementation take?", a: "A standard setup takes 5–10 business days depending on menu complexity, number of branches, and custom integrations required." },
  { q: "Does restaurant ERP support GST billing?", a: "Yes, our system auto-calculates CGST, SGST, and IGST with proper HSN codes and generates GST-compliant invoices." },
  { q: "Can I access restaurant ERP from mobile?", a: "Yes, the ERP is mobile-responsive and can be accessed from smartphones and tablets for real-time monitoring on the go." },
  { q: "How secure is my restaurant data?", a: "Your data is stored on secure cloud servers with AES-256 encryption, regular backups, and role-based access controls." },
  { q: "Does restaurant ERP include customer management?", a: "Yes, you can maintain customer profiles, order history, preferences, and contact details to offer personalised service and loyalty rewards." },
  { q: "What reports can I generate from restaurant ERP?", a: "Generate sales summaries, item-wise popularity, inventory usage, profit & loss statements, staff performance, and GST reports." },
  { q: "Do you provide staff training?", a: "Yes, we provide comprehensive training sessions for your team along with user manuals and video tutorials for ongoing reference." },
  { q: "How do I migrate from manual billing to ERP?", a: "We handle the entire migration process — data entry, menu setup, staff onboarding, and parallel run support to ensure a smooth transition." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajsonsdesigns.com/" },
    { "@type": "ListItem", position: 2, name: "ERP Software Solutions", item: "https://www.rajsonsdesigns.com/erp-software-solutions.html" },
    { "@type": "ListItem", position: 3, name: "Restaurant ERP Software" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function RestaurantErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ErpHero
        image="/images/erp/restaurant.jpg"
        title="Restaurant ERP Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ERP Solutions", href: "/erp-software-solutions.html" },
          { label: "Restaurant ERP" },
        ]}
        colors={colors}
      />

      <DescriptionSection
        title="Streamline Your Restaurant Operations with Powerful ERP Software"
        paragraphs={[
          "Running a restaurant comes with constant pressure — long queues, order confusion, inventory waste, and rising customer expectations. A single slip can cost you a customer, a dish, or your evening's revenue. Restaurant ERP software puts every piece of your operation under one roof: from order taking and kitchen display to billing, inventory, and staff management.",
          "At RajSons Designs, we deliver a restaurant ERP built for the Indian food industry. Whether you run a fine-dining restaurant, a quick-service chain, a café, or a cloud kitchen, our software automates your workflow, reduces manual errors, and gives you real-time control over every aspect of your business. No more paper chits, missed orders, or stock surprises.",
          "From the moment a customer walks in to the final bill settlement, every step is tracked and optimised. Waitstaff send orders directly to the kitchen display, inventory updates automatically with each sale, and management gets a live dashboard of revenue, expenses, and trends. It's restaurant management, simplified.",
        ]}
        colors={colors}
      />

      <ChallengesSection challenges={challenges} colors={colors} industry="Restaurant" />
      <FeaturesSection features={features} colors={colors} industry="Restaurant" />
      <BenefitsSection benefits={benefits} colors={colors} industry="Restaurant" />
      <WhyRajsonsSection items={whyRajsons} colors={colors} />
      <ProcessSection steps={processSteps} colors={colors} />
      <FaqSection faqData={faqData} colors={colors} />
      <CtaSection colors={colors} industry="Restaurant" />
    </>
  );
}
