import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog/types";
import type { FaqItem } from "@/lib/faq";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const defaultOgImage = {
  url: "/og/default.png",
  width: 1200,
  height: 630,
  alt: siteConfig.title,
} as const;

function buildVerification(): Metadata["verification"] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const other: Record<string, string> = {};
  if (google) other.google = google;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  if (bing) other["msvalidate.01"] = bing;
  return Object.keys(other).length > 0 ? { other } : undefined;
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: "%s | Kalma",
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: "/",
      types: {
        "application/rss+xml": absoluteUrl("/feed.xml"),
      },
    },
    robots: { index: true, follow: true },
    verification: buildVerification(),
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon",
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      type: "website",
      url: "/",
      siteName: siteConfig.name,
      locale: "en_US",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [defaultOgImage.url],
    },
  };
}

export function buildArticleMetadata(post: BlogPost): Metadata {
  const title = post.title;
  const url = `/blog/${post.slug}`;

  return {
    title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: [siteConfig.author],
      tags: post.tags,
      siteName: siteConfig.name,
      images: [{ ...defaultOgImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description: post.description,
      images: [defaultOgImage.url],
    },
  };
}

export function buildBlogIndexMetadata(): Metadata {
  const title = "Blog | Anxiety & Panic Relief Tips";
  const description =
    "Evidence-based articles on panic attacks, breathing exercises, anxiety triggers, and mental wellness from the Kalma team.";

  return {
    title,
    description,
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: "/blog",
      siteName: siteConfig.name,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: absoluteUrl("/assets/KalmaLogo.png"),
    foundingDate: "2025",
    areaServed: "Worldwide",
    knowsAbout: [
      "panic attacks",
      "anxiety disorders",
      "breathing exercises",
      "grounding techniques",
      "mental health",
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function buildSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS",
    url: siteConfig.url,
    description: siteConfig.description,
    featureList: [
      "Panic Shield — one-tap offline grounding",
      "Guided breathing — box, 4-7-8, resonant",
      "Mood journal and anxiety trigger tracking",
      "Science-backed micro-lessons",
      "Works offline during panic attacks",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      description: "Join the waitlist — launching Q1 2026 on the App Store",
    },
  };
}

export function buildFaqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBlogPostingJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/KalmaLogo.png"),
      },
    },
    image: absoluteUrl(defaultOgImage.url),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.tags.join(", "),
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildItemListJsonLd(
  items: { name: string; url: string; description?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
      description: item.description,
    })),
  };
}

export function buildWebPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildRssFeed(posts: BlogPost[]): string {
  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${absoluteUrl(`/blog/${post.slug}`)}</link>
      <guid isPermaLink="true">${absoluteUrl(`/blog/${post.slug}`)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kalma Blog — Anxiety &amp; Panic Relief</title>
    <link>${siteConfig.url}/blog</link>
    <description>Evidence-based articles on panic attacks, breathing exercises, and anxiety relief from Kalma.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}
