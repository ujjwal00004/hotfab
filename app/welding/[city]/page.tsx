import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationPage from '@/components/LocationPage';
import { locations, getLocation } from '@/data/locations';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return { title: 'Service Area Not Found', robots: { index: false, follow: true } };
  return buildMetadata({
    title: loc.title,
    description: loc.metaDescription,
    path: `/welding/${loc.slug}`,
    ogTitle: loc.ogTitle,
    ogDescription: loc.ogDescription,
    image: loc.image,
    imageAlt: `HotFab Welding serving ${loc.city}, MI`,
  });
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();
  return <LocationPage location={loc} />;
}
