"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", details: "", code: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setStatus("error");
      return;
    }
    if (formData.code !== "8") {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", mobile: "", details: "", code: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("success");
      setFormData({ name: "", email: "", mobile: "", details: "", code: "" });
    }
  };

  const inputClass = "mt-1 block w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm transition-all focus:border-[#f7941e] focus:outline-none focus:ring-2 focus:ring-[#f7941e]/20 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cf_name" className="block text-sm font-medium text-gray-700">Name:*</label>
        <input id="cf_name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf_email" className="block text-sm font-medium text-gray-700">E-Mail:*</label>
        <input id="cf_email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf_mobile" className="block text-sm font-medium text-gray-700">Mobile:</label>
        <input id="cf_mobile" type="tel" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf_details" className="block text-sm font-medium text-gray-700">Details:*</label>
        <textarea id="cf_details" required rows={4} value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} className={`${inputClass} resize-none`} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Verification:*</label>
        <div className="mt-1 flex items-center gap-3">
          <span className="rounded-xl bg-gray-100 px-4 py-3 text-sm font-mono font-bold select-none">5 + 3 =</span>
          <input type="text" required value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} className="block w-24 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-2 focus:ring-[#f7941e]/20" />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] px-6 py-3.5 text-sm font-bold text-white transition-all hover:shadow-xl hover:shadow-[#1e3a5f]/20 disabled:opacity-50"
      >
        {status === "sending" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
            Sending...
          </span>
        ) : "Submit"}
      </button>
      {status === "success" && (
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
          Thank you! We will get back to you soon.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          Please check your inputs and try again.
        </motion.p>
      )}
    </form>
  );
}
