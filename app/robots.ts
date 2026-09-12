import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// Everything public is crawlable. Only Next.js internals and the (non-existent
// today, but conventional) /api path is excluded. CSS, JS and
// images are intentionally NOT blocked — Google needs them to render pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
