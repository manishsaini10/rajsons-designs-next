"use client";

import Link from "next/link";
import { requestQuoteContent } from "@/lib/site-data";
import Sidebar from "@/components/Sidebar";

export default function QuotePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const address = data.get("address") as string;
    const mobile = data.get("mobile") as string;
    const website = data.get("website") as string;
    const requirements = data.get("requirements") as string;
    window.location.href = `mailto:info@rajsonsdesigns.com?subject=Quote Request from ${name}&body=Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0AAddress: ${address}%0AMobile: ${mobile}%0AExisting Website: ${website}%0ARequirements: ${requirements}`;
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Request Quote</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Request Quote
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-gray-700">{requestQuoteContent.intro}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{requestQuoteContent.detail}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="q_name" className="block text-sm font-medium text-gray-700">Name:</label>
                  <input id="q_name" name="name" type="text" required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
                </div>
                <div>
                  <label htmlFor="q_email" className="block text-sm font-medium text-gray-700">Email:</label>
                  <input id="q_email" name="email" type="email" required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
                </div>
                <div>
                  <label htmlFor="q_company" className="block text-sm font-medium text-gray-700">Company:</label>
                  <input id="q_company" name="company" type="text" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
                </div>
                <div>
                  <label htmlFor="q_address" className="block text-sm font-medium text-gray-700">Address:</label>
                  <input id="q_address" name="address" type="text" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
                </div>
                <div>
                  <label htmlFor="q_mobile" className="block text-sm font-medium text-gray-700">Mobile No.:</label>
                  <input id="q_mobile" name="mobile" type="tel" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
                </div>
                <div>
                  <label htmlFor="q_website" className="block text-sm font-medium text-gray-700">Existing Website:</label>
                  <input id="q_website" name="website" type="url" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Attach Specifications:</label>
                <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-[#1e3a5f] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#2a4a70]" />
                <p className="mt-1 text-xs text-gray-400">Acceptable file types: doc,docx,xls,xlsx,pdf,txt,jpg,png. Maximum file size: 10mb.</p>
              </div>
              <div>
                <label htmlFor="q_requirements" className="block text-sm font-medium text-gray-700">Please briefly state requirements:</label>
                <textarea id="q_requirements" name="requirements" rows={5} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Enter the code:</label>
                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded bg-gray-100 px-4 py-2 text-sm font-mono select-none">5 + 3 =</span>
                  <input type="text" required className="block w-24 rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none focus:ring-1 focus:ring-[#f7941e]" />
                </div>
              </div>
              <button type="submit" className="rounded-lg bg-[#f7941e] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#e5840e] shadow-md">
                Send Quote Request
              </button>
            </form>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
