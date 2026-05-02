import { MetadataRoute } from 'next';
import blogs from '@/data/blogs.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hotfabwelding.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${baseUrl}/about`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${baseUrl}/blogs`,           lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
  ];

  // Auto-generated from blogs.json — just add a post to the JSON and it appears here automatically
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}