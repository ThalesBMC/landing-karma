import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { Reveal } from "@/components/motion/Reveal";
import { getAllPosts } from "@/lib/blog/posts";
import { buildBlogIndexMetadata, buildItemListJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = buildBlogIndexMetadata();

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={buildItemListJsonLd(
          posts.map((post) => ({
            name: post.title,
            url: `/blog/${post.slug}`,
            description: post.description,
          })),
        )}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 mesh-aurora opacity-50" />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-kalma-action">
                  Kalma Blog
                </p>
                <h1 className="text-display mt-4 text-balance text-4xl font-bold text-kalma-deep sm:text-5xl">
                  Anxiety &amp; panic relief{" "}
                  <span className="gradient-text">guides</span>
                </h1>
                <p className="mt-4 text-lg text-kalma-muted">
                  Evidence-based articles on panic attacks, breathing
                  techniques, and building a calmer daily life.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-kalma-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.06} className="relative">
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
