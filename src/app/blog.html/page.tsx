import type { Metadata } from "next";
import { blogPosts } from "@/lib/site-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What do YOU call your blog?",
  description: "RajSons Designs blog - Latest updates, projects and news from our web development company.",
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">What do YOU call your blog?</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; What do YOU call your blog?
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm" id={post.slug}>
                <h2 className="text-xl font-bold text-[#1e3a5f]">
                  <a href="#" className="hover:text-[#f7941e] transition-colors">{post.title}</a>
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  On {post.date} &nbsp; / &nbsp; {post.category}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <a href="#" className="mt-2 inline-block text-sm font-semibold text-[#f7941e] hover:underline">Read more &rarr;</a>
              </article>
            ))}
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">About This Sidebar</h3>
              <p className="text-sm text-gray-600">To edit this sidebar, go to admin backend&rsquo;s Appearance -&gt; Widgets and place widgets into the BlogSidebar Widget Area</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Client Testimonials</h3>
              <p className="text-sm text-gray-600 italic">&ldquo;We are very pleased with your attractive website development services and fast process&rdquo;</p>
              <p className="mt-2 text-sm font-semibold text-[#f7941e]">- Lafaa Holiday</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Our Packages</h3>
              <ul className="space-y-2 text-sm">
                {["Affordable Static Websites", "Web Design Services", "eCommerce Solutions", "Web Hosting Services", "SEO Services"].map((s) => (
                  <li key={s}>
                    <Link href={`/${s.toLowerCase().replace(/\s+/g, "-")}.html`} className="text-[#f7941e] hover:underline">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
