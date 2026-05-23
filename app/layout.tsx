import {
  JsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  buildRootMetadata,
} from "@/lib/seo";
import { WaitlistHashHandler } from "@/components/WaitlistHashHandler";
import { BreatheIntro } from "@/components/BreatheIntro";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Kalma" />
        <link rel="alternate" type="application/rss+xml" title="Kalma Blog RSS" href="/feed.xml" />
      </head>
      <body className="min-h-screen bg-white font-sans text-kalma-deep">
        <WaitlistHashHandler />
        <JsonLd data={buildOrganizationJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        {children}
        <BreatheIntro />
      </body>
    </html>
  );
}
