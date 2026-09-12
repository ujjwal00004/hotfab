import type { Metadata } from 'next';
import Link from 'next/link';
import ContactClient from './ContactClient';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { webPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { services } from '@/data/services';

const DESCRIPTION =
  'Contact HotFab Welding for a free project quote. Call (248) 259-9956 or send a message. Located at 13118 E 9 Mile Rd, Warren, Michigan. Serving Metro Detroit.';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us — Free Quote for Welding in Warren, MI',
  description: DESCRIPTION,
  path: '/contact',
  ogTitle: 'Contact HotFab Welding | Free Quote Warren, MI',
  ogDescription: 'Get a free quote for custom metal fabrication or on-site welding. Call (248) 259-9956. Warren, Michigan.',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: '/contact', name: 'Contact HotFab Welding', description: DESCRIPTION, type: 'ContactPage' })} />
      <div style={{ background: '#0D0D0D' }}>
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      </div>
      <ContactClient />
      {/* Plain-HTML NAP block (server-rendered) so the address, phone, email and hours are extractable without JavaScript */}
      <section style={{ background: '#0D0D0D', padding: '0 48px 100px' }} aria-labelledby="contact-nap">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 id="contact-nap" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, letterSpacing: 1, color: '#F5F3EF', margin: '0 0 16px' }}>Visit or call the shop</h2>
          <address style={{ fontStyle: 'normal', color: '#A0A0A0', fontSize: 15, lineHeight: 1.9, fontWeight: 300 }}>
            <strong style={{ color: '#F5F3EF' }}>{SITE.name}</strong><br />
            {SITE.address.street}<br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}<br />
            Phone: <a href={SITE.phone.href} style={{ color: '#C8410A', textDecoration: 'none' }}>{SITE.phone.display}</a><br />
            Email: <a href={`mailto:${SITE.email}`} style={{ color: '#C8410A', textDecoration: 'none' }}>{SITE.email}</a><br />
            Hours: {SITE.hours.map((h) => h.label).join(' · ')}<br />
            <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#C8410A', textDecoration: 'none' }}>Get directions to the shop →</a>
          </address>
          <p style={{ color: '#A0A0A0', fontSize: 15, lineHeight: 1.8, fontWeight: 300, maxWidth: '62ch' }}>
            Photos and rough dimensions help us quote faster. For a repair, a picture of the broken part and a note on the metal (steel, stainless, aluminum) is usually enough for a phone estimate.
          </p>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 1, color: '#F5F3EF', margin: '28px 0 12px' }}>What can we quote for you?</h3>
          <ul className="hf-areas">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.serviceName}</Link></li>
            ))}
            <li><Link href="/welding">Check your service area</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
