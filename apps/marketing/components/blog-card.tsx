import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui";
import type { BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card className="h-full cursor-pointer p-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mt-5 text-xl font-semibold text-text-primary">{post.title}</h2>
        <p className="mt-3 leading-7 text-text-secondary">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between gap-4 text-sm text-text-muted">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Read post
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Card>
    </Link>
  );
}
