import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";
import { getRelatedPosts } from "@/lib/blog/posts";
import { BlogContent } from "./BlogContent";
import { BlogCard } from "./BlogCard";
import { Reveal } from "../motion/Reveal";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

type ArticleLayoutProps = {
  post: BlogPost;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ArticleLayout({ post }: ArticleLayoutProps) {
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-kalma-border/70 bg-white">
        <div className="pointer-events-none absolute inset-0 mesh-aurora opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-white/80 to-white" />

        <div className="relative mx-auto max-w-3xl px-6 pb-14 pt-10 md:pb-16 md:pt-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-kalma-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-kalma-action">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-kalma-border">
                /
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-kalma-action">
                  Blog
                </Link>
              </li>
              <li aria-hidden className="text-kalma-border">
                /
              </li>
              <li className="line-clamp-1 font-medium text-kalma-deep/70">
                {post.title}
              </li>
            </ol>
          </nav>

          <Reveal>
            <header className="mt-8 md:mt-10">
              <div className="flex flex-wrap items-center gap-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-kalma-action shadow-sm ring-1 ring-kalma-border/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-sm text-kalma-muted">{post.readingTime}</span>
              </div>

              <h1 className="text-display mt-6 text-balance text-4xl font-bold leading-[1.08] text-kalma-deep sm:text-[2.75rem] md:text-5xl">
                {post.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-kalma-muted">
                {post.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-kalma-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-kalma-soft text-xs font-bold text-kalma-action">
                    K
                  </span>
                  <span>
                    By <span className="font-medium text-kalma-deep">Kalma Team</span>
                  </span>
                </span>
                <span aria-hidden className="hidden text-kalma-border sm:inline">
                  ·
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </header>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-10 md:pt-12">
        <Reveal delay={0.05}>
          <BlogContent content={post.content} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-kalma-border pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-kalma-action transition-colors hover:text-kalma-deep"
            >
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 4 6 8l4 4" />
              </svg>
              Back to blog
            </Link>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-kalma-surface px-3 py-1 text-xs font-medium text-kalma-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-kalma-border pt-12">
            <h2 className="font-display text-2xl font-bold text-kalma-deep">
              Related articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-16">
          <div className="rounded-2xl border border-kalma-border bg-kalma-surface p-8 text-center md:p-10">
            <h2 className="font-display text-2xl font-bold text-kalma-deep">
              Ready for calmer moments?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-kalma-muted">
              Kalma brings panic support, guided breathing, and mood tracking
              to your pocket. No login required when you need help most.
            </p>
            <WaitlistTrigger size="md" className="mt-6">
              Join the waitlist
            </WaitlistTrigger>
          </div>
        </section>
      </div>
    </article>
  );
}
