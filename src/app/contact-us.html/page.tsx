"use client";

import Link from "next/link";
import { contactInfo } from "@/lib/site-data";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Contact Us
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-[#1e3a5f]">Contact Us 24/7</h2>

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#f7941e]" />
                <div>
                  <h3 className="font-semibold text-[#1e3a5f]">Address:</h3>
                  <p className="text-sm text-gray-600">{contactInfo.address}<br />{contactInfo.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#f7941e]" />
                <div>
                  <h3 className="font-semibold text-[#1e3a5f]">Contact No.:</h3>
                  <p className="text-sm text-gray-600">{contactInfo.phones[0]}, {contactInfo.phones[1]}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#f7941e]" />
                <div>
                  <h3 className="font-semibold text-[#1e3a5f]">Email:</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-[#f7941e] hover:underline">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <Globe className="mt-1 h-5 w-5 shrink-0 text-[#f7941e]" />
                <div>
                  <h3 className="font-semibold text-[#1e3a5f]">Website:</h3>
                  <a href={contactInfo.website} className="text-sm text-[#f7941e] hover:underline">{contactInfo.website}</a>
                </div>
              </div>
            </div>

            <h3 className="mb-4 text-lg font-bold text-[#1e3a5f]">Please use the form below to send us an email:</h3>
            <ContactForm />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const comment = data.get("comment") as string;
    if (!name || name.length < 2 || !email || !comment) {
      alert("Please fill all required fields.");
      return;
    }
    window.location.href = `mailto:info@rajsonsdesigns.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AComment: ${comment}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name (required, at least 2 characters)</label>
        <input id="name" name="name" type="text" required minLength={2} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail (required)</label>
        <input id="email" name="email" type="email" required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (optional)</label>
        <div className="flex gap-2">
          <input id="phone" name="phone" type="tel" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
          <input type="text" placeholder="ext." className="mt-1 block w-20 rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Your comment (required)</label>
        <textarea id="comment" name="comment" required rows={5} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
      </div>
      <button type="submit" className="rounded-lg bg-[#f7941e] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#e5840e] shadow-md">
        Submit
      </button>
    </form>
  );
}
