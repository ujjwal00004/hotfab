import type { Metadata } from 'next';
import { SITE, absoluteUrl } from '@/lib/site';

export type PageSeo = {
  /** Page title. The root layout template appends " | HotFab Welding — Warren, MI". */
  title: string;
  /** Unique meta description, ideally 120–160 characters. */
  description: string;
  /** Site-relative path used for the canonical URL, e.g. '/services/custom-railings'. */
  path: string;
  /** Optional dedicated Open Graph title/description (defaults to title/description). */
  ogTitle?: string;
  ogDescription?: string;
  /** Absolute image URL. Defaults to the site OG image. */
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: 'website' | 'article';
  /** Article-only fields. */
  publishedTime?: string;
  modifiedTime?: string;
  /** Only pass keywords when they genuinely describe the page. */
  keywords?: string[];
  /** Set false for pages that must not be indexed (e.g. 404, thank-you). */
  index?: boolean;
  /** Use the literal title without the layout template (homepage only). */
  absoluteTitle?: boolean;
};

/**
 * Build a complete, consistent Next.js Metadata object for a page.
 * Guarantees: unique title + description, self-referencing canonical,
 * Open Graph + Twitter cards, and explicit robots directives.
 */
export function buildMetadata(seo: PageSeo): Metadata {
  const url = absoluteUrl(seo.path);
  const image = seo.image ?? SITE.ogImage.url;
  const imageAlt = seo.imageAlt ?? SITE.ogImage.alt;
  const ogTitle = seo.ogTitle ?? seo.title;
  const ogDescription = seo.ogDescription ?? seo.description;
  const index = seo.index ?? true;
  // Data files sometimes end titles with "| HotFab Welding"; the layout template
  // already appends the brand, so strip it to avoid "HotFab Welding | HotFab Welding".
  const title = seo.absoluteTitle ? seo.title : seo.title.replace(/\s*[|\u2014-]\s*HotFab( Welding)?\s*$/i, '').trim();

  const metadata: Metadata = {
    title: seo.absoluteTitle ? { absolute: seo.title } : title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      type: seo.type ?? 'website',
      url,
      siteName: SITE.name,
      locale: 'en_US',
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: image,
          width: seo.imageWidth ?? (seo.image ? undefined : SITE.ogImage.width),
          height: seo.imageHeight ?? (seo.image ? undefined : SITE.ogImage.height),
          alt: imageAlt,
        },
      ],
      ...(seo.type === 'article'
        ? { publishedTime: seo.publishedTime, modifiedTime: seo.modifiedTime ?? seo.publishedTime, authors: [SITE.url] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [image],
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
        }
      : { index: false, follow: true },
  };

  if (seo.keywords?.length) metadata.keywords = seo.keywords;
  return metadata;
}
