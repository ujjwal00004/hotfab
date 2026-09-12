import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FaqClient from './FaqClient';
import { faqSchema, webPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { faqs } from '@/data/faqs';
import { services } from '@/data/services';

const DESCRIPTION =
  'Common questions about HotFab Welding services in Warren, MI. Learn about custom fabrication, mobile welding, materials, pricing, service areas, and project timelines.';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ — Welding & Metal Fabrication Questions Answered',
  description: DESCRIPTION,
  path: '/faq',
  ogTitle: 'Welding FAQ | HotFab Welding Warren, MI',
  ogDescription: 'Answers to common questions about welding, metal fabrication, railings, gates, and on-site welding in Warren, Michigan.',
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[webPageSchema({ path: '/faq', name: 'HotFab Welding FAQ', description: DESCRIPTION }), faqSchema(faqs)]} />
      <div style={{ background: '#0D0D0D' }}>
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      </div>
      <FaqClient faqs={faqs} />
      {/* Crawlable links from the FAQ to the pages that answer each topic in depth */}
      <section style={{ background: '#0D0D0D', padding: '0 48px 100px' }} aria-labelledby="faq-more">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 id="faq-more" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, letterSpacing: 1, color: '#F5F3EF', margin: '0 0 14px' }}>Detailed guides by service</h2>
          <ul className="hf-areas">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.serviceName}</Link></li>
            ))}
            <li><Link href="/welding">Service areas</Link></li>
            <li><Link href="/blogs">Welding blog</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
