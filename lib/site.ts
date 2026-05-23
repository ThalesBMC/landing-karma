export const siteConfig = {
  name: "Kalma",
  tagline: "Panic & anxiety relief in your pocket",
  title:
    "Kalma — Panic Attack & Anxiety Relief App | Guided Breathing & Grounding",
  description:
    "Kalma is a panic attack app for iOS with one-tap Panic Shield, offline grounding, box & 4-7-8 breathing, and anxiety journaling. Join the waitlist — launching Q1 2026.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalma.cc",
  author: "Kalma Team",
  twitterHandle: "@kalmaapp",
  keywords: [
    "panic attack app",
    "anxiety relief app",
    "breathing app for anxiety",
    "grounding app for anxiety",
    "panic relief app",
    "anxiety journal app",
    "box breathing app",
    "mental health app",
    "grounding techniques",
    "mood journal anxiety",
  ],
} as const;

export function absoluteUrl(path: string) {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
