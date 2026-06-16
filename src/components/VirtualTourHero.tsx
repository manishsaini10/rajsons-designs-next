"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Smartphone, Eye, Share2, Sparkles } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  mobile: string;
  email: string;
  category: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const categories = [
  "Real Estate",
  "Hotel & Resort",
  "School / College",
  "Retail Showroom",
  "Corporate Office",
  "Other",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const features = [
  { icon: Smartphone, text: "Compatible with Mobile & VR Devices" },
  { icon: Eye, text: "High Resolution Interactive Tours" },
  { icon: Share2, text: "Share Anywhere with Easy Access" },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:border-[#f7941e]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#f7941e]/20";

const labelClass = "block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5";

export default function VirtualTourHero() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    mobile: "",
    email: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.company.trim()) errs.company = "Company is required";
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, "")))
      errs.mobile = "Enter a valid 10-digit mobile number";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";
    if (!form.category) errs.category = "Please select a category";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      // EmailJS integration placeholder:
      // const res = await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      //   from_name: form.name,
      //   company: form.company,
      //   mobile: form.mobile,
      //   email: form.email,
      //   category: form.category,
      //   message: form.message,
      // }, "YOUR_PUBLIC_KEY");
      // if (res.status !== 200) throw new Error("Send failed");

      // Simulate API call for static demo
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      setForm({ name: "", company: "", mobile: "", email: "", category: "", message: "" });
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050b14] via-[#0a1628] to-[#0d1f3c]">
      {/* Background Tech Pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7941e]/[0.02] to-transparent" />
      </div>

      {/* Glowing Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[8%] h-[500px] w-[500px] rounded-full bg-[#f7941e]/10 blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[#1e3a5f]/20 blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -right-[5%] h-[300px] w-[300px] rounded-full bg-[#f7941e]/5 blur-[80px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
              x: [Math.random() * 80 - 40, Math.random() * 80 - 40],
              y: [Math.random() * 80 - 40, Math.random() * 80 - 40],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#f7941e]/50"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* Grid Lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(247,148,30,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(247,148,30,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 lg:flex-row lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col justify-center pt-20 lg:w-1/2 lg:pt-0"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7941e]/30 bg-[#f7941e]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f7941e] backdrop-blur-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            Trusted by 500+ Businesses
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Experience Spaces Like Never Before with{" "}
            <span className="bg-gradient-to-r from-[#f7941e] via-[#ffa94d] to-[#f7941e] bg-clip-text text-transparent">
              360° Virtual Tours
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base"
          >
            Transform your properties, hotels, showrooms, educational institutions, and commercial spaces into
            immersive digital experiences with high-quality 360° virtual tours.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => formRef.current?.querySelector<HTMLInputElement>("input")?.focus()}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#f7941e]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Book Free Demo
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="https://app.cloudpano.com/tours/t1LtFvj5DK"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#f7941e]/50 hover:bg-[#f7941e]/10 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Live Demo
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-10 space-y-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f7941e]/15">
                  <Check size={12} className="text-[#f7941e]" />
                </div>
                <f.icon size={14} className="shrink-0 text-[#f7941e]" />
                <span>{f.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="my-12 w-full max-w-lg shrink-0 lg:my-0 lg:w-[440px]"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-b from-[#f7941e]/30 via-white/10 to-[#f7941e]/10 blur-xl" />
            <div className="relative rounded-[22px] border border-white/10 bg-gradient-to-b from-[#0f1f36]/90 via-[#152a47]/80 to-[#0f1f36]/90 p-6 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-8">
              {/* Card Header */}
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Get Your Free Virtual Tour Demo
                </h3>
                <p className="mt-1 text-sm text-gray-400">Our experts will contact you shortly</p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <Check size={32} className="text-green-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You!</h4>
                  <p className="mt-2 text-sm text-gray-400">Our team will contact you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-lg border border-white/10 px-6 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white"
                  >
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={`${inputClass} ${errors.name ? "border-red-400/50" : ""}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Company / Organization *</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className={`${inputClass} ${errors.company ? "border-red-400/50" : ""}`}
                      placeholder="Enter company name"
                    />
                    {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Mobile Number *</label>
                      <input
                        type="tel"
                        value={form.mobile}
                        onChange={(e) => updateField("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
                        className={`${inputClass} ${errors.mobile ? "border-red-400/50" : ""}`}
                        placeholder="9876543210"
                      />
                      {errors.mobile && <p className="mt-1 text-xs text-red-400">{errors.mobile}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={`${inputClass} ${errors.email ? "border-red-400/50" : ""}`}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Business Category *</label>
                    <select
                      value={form.category}
                      onChange={(e) => updateField("category", e.target.value)}
                      className={`${inputClass} ${errors.category ? "border-red-400/50" : ""} ${
                        !form.category ? "text-white/40" : "text-white"
                      }`}
                    >
                      <option value="" disabled className="bg-[#0f1f36] text-white/40">
                        Select your industry
                      </option>
                      {categories.map((c) => (
                        <option key={c} value={c} className="bg-[#0f1f36] text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.category && <p className="mt-1 text-xs text-red-400">{errors.category}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Message / Requirement</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your space..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#f7941e] to-[#e5840e] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#f7941e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#f7941e]/30 hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Request Demo"
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-xs text-red-400">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <p className="text-center text-[11px] text-white/40">
                    🔒 Your information is 100% safe with us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
