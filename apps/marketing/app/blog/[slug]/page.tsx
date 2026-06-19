import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPost } from "@/components/blog-post";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { getPost, posts } from "@/lib/blog";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: "Blog | GHOSTATLAS IP"
    };
  }

  return {
    title: `${post.title} | GHOSTATLAS IP Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | GHOSTATLAS IP Blog`,
      description: post.excerpt,
      images: ["https://ghostatlas.com/og/blog-post.png"]
    }
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main className="border-b border-border bg-bg-primary">
        <BlogPost post={post} />
      </main>
      <Footer />
    </div>
  );
}
