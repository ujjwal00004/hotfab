import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryClient from './GalleryClient';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { webPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { services } from '@/data/services';

const DESCRIPTION =
  'Browse the HotFab Welding project gallery: custom railings, driveway gates, fences, staircases, window well grates, storm shields, and on-site welding jobs across Warren, Michigan and Metro Detroit.';
const GALLERY_IMAGE = 'https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279/wrought-iron-staircase-warren-mi.jpg';

export const metadata: Metadata = buildMetadata({
  title: 'Gallery — Custom Metalwork & Welding Projects Warren, MI',
  description: DESCRIPTION,
  path: '/gallery',
  ogTitle: 'Project Gallery | HotFab Welding Warren, MI',
  ogDescription: 'See our custom metalwork: railings, gates, staircases, sculptures and more. Warren, Michigan welding and fabrication.',
  image: GALLERY_IMAGE,
  imageAlt: 'Wrought iron staircase railing by HotFab Welding Warren MI',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: '/gallery', name: 'HotFab Welding project gallery', description: DESCRIPTION, type: 'CollectionPage', image: GALLERY_IMAGE })} />
      <div style={{ background: '#0D0D0D' }}>
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }]} />
      </div>
      <GalleryClient />
      {/* Server-rendered links from the gallery to the matching service pages */}
      <section style={{ background: '#1A1A1A', padding: '0 48px 80px' }} aria-labelledby="gallery-services">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 id="gallery-services" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, letterSpacing: 1, color: '#F5F3EF', margin: '0 0 14px' }}>Want something like this built?</h2>
          <ul className="hf-areas">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.serviceName}</Link></li>
            ))}
            <li><Link href="/contact">Request a free quote</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
