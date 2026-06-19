import Link from "next/link";

import type { BlogPost as BlogPostType } from "@/lib/blog";

type BlogPostProps = {
  post: BlogPostType;
};

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-20">
      <Link href="/blog" className="font-mono text-sm text-accent hover:text-accent/80">
        Blog
      </Link>
      <h1 className="mt-5 text-4xl font-semibold leading-tight text-text-primary md:text-6xl">{post.title}</h1>
      <div className="mt-6 flex flex-wrap gap-3 text-sm text-text-muted">
        <span>{post.date}</span>
        <span>/</span>
        <span>{post.readTime}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-10 space-y-6 text-lg leading-8 text-text-secondary">
        {post.content.split("\n").filter(Boolean).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
