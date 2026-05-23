import Link from "next/link";
import { getFeaturedPosts } from "@/lib/blog/posts";
import { BlogCard } from "./BlogCard";
import { Reveal } from "../motion/Reveal";

export function BlogPreview() {
  const featuredPosts = getFeaturedPosts();

  return (
    <section
      id="blog"
      className="relative scroll-mt-24 overflow-hidden bg-kalma-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-kalma-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-kalma-aurora/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kalma-action">
              From the blog
            </p>
            <h2 className="text-display mt-4 text-balance text-4xl font-bold text-kalma-deep sm:text-5xl">
              Practical tips for{" "}
              <span className="gradient-text">calmer days</span>
            </h2>
            <p className="mt-4 text-lg text-kalma-muted">
              Evidence-based guides on panic attacks, breathing, and anxiety,
              written for real moments, not textbooks.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08} className="relative">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-kalma-border bg-white px-6 py-3 text-sm font-semibold text-kalma-deep transition-all hover:border-kalma-action/40 hover:text-kalma-action"
            >
              View all articles
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
