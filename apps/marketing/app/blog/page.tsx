import type { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { SectionHeader } from "@/components/ui";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | GHOSTATLAS IP",
  description: "Guides and notes on proxy infrastructure, automation, and global routing.",
  openGraph: {
    title: "Blog | GHOSTATLAS IP",
    description: "Proxy infrastructure guides from GHOSTATLAS IP.",
    images: ["https://ghostatlas.com/og/blog.png"]
  }
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>
        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="BLOG"
              title="Notes on proxy infrastructure"
              subtitle="Practical guides for developers building global routing, QA, and automation workflows."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
