export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  featured: boolean;
  tags: string[];
  content: string;
  author: BlogAuthor;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

export const defaultBlogAuthor: BlogAuthor = {
  name: "Thales Candido",
  role: "Founder, Kalma",
  bio: "Building Kalma after seeing how hard it is to get instant panic support when Wi‑Fi fails and every other app asks you to log in first.",
};
