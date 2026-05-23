import { defaultBlogAuthor, type BlogAuthor, type BlogPost } from "./types";

const postImages: Record<string, NonNullable<BlogPost["image"]>> = {
  "what-to-do-during-a-panic-attack": {
    src: "/assets/kalma-mascot.svg",
    alt: "Kalma app illustration for panic attack grounding and breathing support",
    caption: "Having a clear plan on your phone helps when anxiety makes decisions hard.",
  },
  "box-breathing-vs-4-7-8-for-anxiety": {
    src: "/assets/kalma-mascot-alt.svg",
    alt: "Visual guide comparing box breathing and 4-7-8 breathing for anxiety relief",
    caption: "Different breathing patterns suit different moments — panic at work vs. bedtime.",
  },
  "how-to-track-anxiety-triggers": {
    src: "/assets/kalma-mascot.svg",
    alt: "Mood and anxiety trigger tracking concept for mental health journaling",
    caption: "Short, consistent logs beat perfect long entries.",
  },
  "why-panic-attacks-feel-dangerous": {
    src: "/assets/kalma-mascot-alt.svg",
    alt: "Diagram concept: panic attack symptoms vs actual medical danger",
    caption: "Understanding the biology of panic reduces the fear-of-fear cycle.",
  },
  "anxiety-at-night-wind-down-routine": {
    src: "/assets/kalma-mascot.svg",
    alt: "Evening wind-down routine for night anxiety and better sleep",
    caption: "A repeatable bedtime ritual signals safety to your nervous system.",
  },
  "evidence-based-mental-health-apps": {
    src: "/assets/kalma-mascot-alt.svg",
    alt: "Evidence-based mental health app features: breathing, journaling, and lessons",
    caption: "Look for apps backed by clinical research, not just marketing claims.",
  },
};

export function enrichPost(
  post: Omit<BlogPost, "author" | "image"> & {
    author?: BlogAuthor;
    image?: BlogPost["image"];
  },
): BlogPost {
  return {
    ...post,
    author: post.author ?? defaultBlogAuthor,
    image: post.image ?? postImages[post.slug],
  };
}
