import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow AI crawlers to access llms.txt
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.hotfabwelding.com/sitemap.xml',
    // LLM crawlers also check this file for llms.txt discovery
    // See: https://www.hotfabwelding.com/llms.txt
    // See: https://www.hotfabwelding.com/llms-full.txt
  };
}