import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { services, getService } from '@/data/services';

// This is the piece your route was missing. It hands Next.js every service
// slug at build time, so each page is prerendered as static HTML (SSG) —
// exactly like /welding/[city] — instead of rendered dynamically per request.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `https://www.hotfabwelding.com/services/${service.slug}` },
    openGraph: {
      title: service.ogTitle,
      description: service.ogDescription,
      url: `https://www.hotfabwelding.com/services/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.serviceName }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}