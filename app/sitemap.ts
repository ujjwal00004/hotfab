import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { blogs, latestBlogDate } from '@/data/blogs';
import { serviceSlugs } from '@/data/services';
import { locations } from '@/data/locations';

// Static content changes only when the site is redeployed, so the build time is
// an honest lastModified for those URLs. Blog posts use their real publish date.
const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`,  lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/welding`,   lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gallery`,   lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,       lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,     lastModified: BUILD_DATE, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/contact`,   lastModified: BUILD_DATE, changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${base}/blogs`,     lastModified: new Date(latestBlogDate), changeFrequency: 'weekly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/welding/${l.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${base}/blogs/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
