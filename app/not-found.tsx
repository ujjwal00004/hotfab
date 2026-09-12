import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you requested does not exist. Browse HotFab Welding services, service areas, or contact us for a free quote.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div style={{ background: '#0D0D0D', color: '#F5F3EF', fontFamily: "'Barlow', sans-serif", minHeight: '70vh', padding: '160px 24px 100px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#C8410A', fontWeight: 600, marginBottom: 16 }}>Error 404</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px,8vw,110px)', lineHeight: 0.95, margin: '0 0 24px' }}>Page Not Found</h1>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: '#A0A0A0', fontWeight: 300, maxWidth: '55ch', marginBottom: 36 }}>
          That link is broken or the page has moved. Here are the pages people usually need:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'grid', gap: 10 }}>
          <li><Link href="/" style={{ color: '#F5F3EF' }}>Home</Link></li>
          <li><Link href="/services" style={{ color: '#F5F3EF' }}>All welding &amp; fabrication services</Link></li>
          {services.map((s) => (
            <li key={s.slug}><Link href={`/services/${s.slug}`} style={{ color: '#A0A0A0' }}>{s.serviceName}</Link></li>
          ))}
          <li><Link href="/welding" style={{ color: '#F5F3EF' }}>Service areas across Metro Detroit</Link></li>
          <li><Link href="/contact" style={{ color: '#F5F3EF' }}>Contact us for a free quote</Link></li>
        </ul>
        <a href="tel:2482599956" style={{ background: '#C8410A', color: '#F5F3EF', padding: '16px 36px', fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
          Call (248) 259-9956
        </a>
      </div>
    </div>
  );
}
