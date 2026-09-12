// Typed accessors for data/blogs.json. Import from here instead of the JSON
// directly so every consumer shares one Blog type (no `any`).
import blogsJson from '@/data/blogs.json';

export type Blog = {
  id: number;
  slug: string;
  title: string;
  date: string; // ISO date (YYYY-MM-DD)
  excerpt: string;
  content: string; // HTML string
  image: string;
};

export const blogs: Blog[] = (blogsJson as Blog[])
  .slice()
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getBlog = (slug: string): Blog | undefined =>
  blogs.find((b) => b.slug.toLowerCase() === slug.toLowerCase());

export const blogSlugs = blogs.map((b) => b.slug);

/** Most recent blog date — used as the sitemap lastModified for /blogs. */
export const latestBlogDate = blogs[0]?.date ?? '2026-01-01';

/** Plain-text version of a post body (for llms-full.txt and word counts). */
export const blogPlainText = (b: Blog) => b.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
