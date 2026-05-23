import { getAllPosts } from "@/lib/blog/posts";
import { buildRssFeed } from "@/lib/seo";

export async function GET() {
  const posts = getAllPosts();
  const feed = buildRssFeed(posts);

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
