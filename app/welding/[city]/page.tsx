import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationPage from '@/components/LocationPage';
import { locations, getLocation } from '@/data/locations';

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: loc.title,
    description: loc.metaDescription,
    alternates: { canonical: `https://www.hotfabwelding.com/welding/${loc.slug}` },
    openGraph: {
      title: loc.ogTitle,
      description: loc.ogDescription,
      url: `https://www.hotfabwelding.com/welding/${loc.slug}`,
      images: [{ url: loc.image, width: 1200, height: 630, alt: `HotFab Welding serving ${loc.city}, MI` }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();
  return <LocationPage location={loc} />;
}