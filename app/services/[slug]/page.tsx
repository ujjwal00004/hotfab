import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { services, getService } from '@/data/services';
import { buildMetadata } from '@/lib/seo';

// Prerender every service page at build time (SSG).
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Service Not Found', robots: { index: false, follow: true } };
  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    ogTitle: service.ogTitle,
    ogDescription: service.ogDescription,
    image: service.image,
    imageAlt: `${service.serviceName} by HotFab Welding in Warren, MI`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
