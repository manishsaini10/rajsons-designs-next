"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">Thank you! Your quote request has been submitted.</p>
        <p className="mt-2 text-green-600">We will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1 block text-sm font-medium">Your Name *</label>
          <input id="q-name" required className="w-full rounded border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none" />
        </div>
        <div>
          <label htmlFor="q-email" className="mb-1 block text-sm font-medium">Email *</label>
          <input id="q-email" type="email" required className="w-full rounded border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none" />
        </div>
      </div>
      <div>
        <label htmlFor="q-phone" className="mb-1 block text-sm font-medium">Phone *</label>
        <input id="q-phone" type="tel" required className="w-full rounded border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none" />
      </div>
      <div>
        <label htmlFor="q-project" className="mb-1 block text-sm font-medium">Project Type *</label>
        <select id="q-project" required className="w-full rounded border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none">
          <option value="">Select...</option>
          <option value="web-design">Web Design</option>
          <option value="ecommerce">eCommerce</option>
          <option value="seo">SEO</option>
          <option value="hosting">Web Hosting</option>
          <option value="redesign">Website Redesign</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="q-budget" className="mb-1 block text-sm font-medium">Budget Range</label>
        <select id="q-budget" className="w-full rounded border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none">
          <option value="">Select...</option>
          <option value="under-5k">Under ₹5,000</option>
          <option value="5k-15k">₹5,000 - ₹15,000</option>
          <option value="15k-30k">₹15,000 - ₹30,000</option>
          <option value="30k-plus">₹30,000+</option>
        </select>
      </div>
      <div>
        <label htmlFor="q-details" className="mb-1 block text-sm font-medium">Project Details *</label>
        <textarea id="q-details" rows={5} required className="w-full rounded border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none" />
      </div>
      <div>
        <label htmlFor="q-file" className="mb-1 block text-sm font-medium">Attach File (optional)</label>
        <input id="q-file" type="file" className="w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white file:hover:bg-blue-800" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Request Quote"}
      </button>
    </form>
  );
}
