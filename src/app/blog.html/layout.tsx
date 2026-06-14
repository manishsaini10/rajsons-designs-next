import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What do YOU call your blog?",
  description: "Read the latest blog posts from RajSonsDesigns about web design, development, SEO, digital marketing trends, and tips for your online business.",
  keywords: ["blog", "web design blog", "web development blog", "seo tips", "digital marketing blog", "website tips"],
  openGraph: { title: "What do YOU call your blog?", description: "Read the latest blog posts from RajSonsDesigns about web design and digital marketing." },
  twitter: { title: "What do YOU call your blog?", description: "Read the latest blog posts from RajSonsDesigns about web design and digital marketing." },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
