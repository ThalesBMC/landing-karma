import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";

type BlogCardProps = {
  post: BlogPost;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-kalma-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kalma-action/30 hover:shadow-lg">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read article: ${post.title}`}
        className="absolute inset-0 z-10 rounded-2xl"
      />

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-kalma-soft px-3 py-1 text-xs font-semibold text-kalma-action">
          {post.tags[0]}
        </span>
        <span className="text-xs text-kalma-muted">{post.readingTime}</span>
      </div>

      <h3 className="font-display mt-4 text-xl font-bold leading-snug text-kalma-deep transition-colors group-hover:text-kalma-action">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-kalma-muted">
        {post.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-kalma-border/60 pt-4">
        <time dateTime={post.date} className="text-xs text-kalma-muted">
          {formatDate(post.date)}
        </time>
        <span
          aria-hidden
          className="text-sm font-semibold text-kalma-action transition-transform group-hover:translate-x-0.5"
        >
          Read article →
        </span>
      </div>
    </article>
  );
}
