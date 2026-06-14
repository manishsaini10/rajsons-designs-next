import type { Metadata } from "next";
import { jagadhriContent, blogPosts } from "@/lib/site-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Designing in Jagadhri",
  description: "Rajsons Designs is a website designing company in Jagadhri. We offer affordable website design and development services by professional web designers in Jagadhri.",
  keywords: ["website designing in jagadhri", "web design jagadhri", "website development jagadhri", "web designers jagadhri"],
};

export default function JagadhriPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a70] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Website Designing in Jagadhri</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="text-[#f7941e] hover:underline">Home</Link> &rarr; Website Designing in Jagadhri
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-gray-700">{jagadhriContent.intro}</p>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Search</h3>
              <div className="flex">
                <input type="text" placeholder="Search for..." className="flex-1 rounded-l border border-gray-300 px-3 py-2 text-sm focus:border-[#f7941e] focus:outline-none" />
                <button className="rounded-r bg-[#f7941e] px-4 py-2 text-sm text-white">Search</button>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Recent Posts</h3>
              <ul className="space-y-2 text-sm">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog.html#${post.slug}`} className="text-[#f7941e] hover:underline">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Archives</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#f7941e]">May 2013</a></li>
                <li><a href="#" className="hover:text-[#f7941e]">April 2013</a></li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Categories</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#f7941e]">Recent Projects</a></li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1e3a5f] border-b border-[#f7941e] pb-2">Meta</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#f7941e]">Log in</a></li>
                <li><a href="https://www.rajsonsdesigns.com/?feed=rss" className="hover:text-[#f7941e]">Entries feed</a></li>
                <li><a href="#" className="hover:text-[#f7941e]">Comments feed</a></li>
                <li><a href="https://wordpress.org" className="hover:text-[#f7941e]">WordPress.org</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
