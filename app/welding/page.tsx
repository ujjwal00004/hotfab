import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { webPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { SITE, absoluteUrl } from '@/lib/site';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

const DESCRIPTION =
  'HotFab Welding serves Warren and Metro Detroit — Sterling Heights, Troy, Detroit, Dearborn, Clinton Township, Roseville and more. Custom fabrication and mobile on-site welding. (248) 259-9956.';

export const metadata: Metadata = buildMetadata({
  title: 'Service Areas | Welding & Metal Fabrication Across Metro Detroit',
  description: DESCRIPTION,
  path: '/welding',
  ogTitle: 'Service Areas | HotFab Welding — Metro Detroit',
  ogDescription: 'Custom welding and metal fabrication across Warren and Metro Detroit. Family-owned, 25+ years.',
});

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: '/welding', name: 'HotFab Welding service areas', description: DESCRIPTION, type: 'CollectionPage' }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Cities served by HotFab Welding',
            itemListElement: locations.map((l, i) => ({ '@type': 'ListItem', position: i + 1, name: `${l.city}, MI`, url: absoluteUrl(`/welding/${l.slug}`) })),
          },
        ]}
      />
      <style>{`
        :root { --forge:#C8410A; --forge-light:#E85D1A; --iron:#0D0D0D; --steel:#1A1A1A; --slag:#2C2C2C; --smoke:#6B6B6B; --ash:#A0A0A0; --white:#F5F3EF; }
        .sa-wrap { font-family:'Barlow',sans-serif; background:var(--iron); color:var(--white); min-height:60vh; }
        .sa-hero { max-width:1100px; margin:0 auto; padding:36px 48px 50px; }
        .sa-tag { font-size:12px; letter-spacing:3px; text-transform:uppercase; color:var(--forge); font-weight:600; margin-bottom:18px; }
        .sa-h1 { font-family:'Bebas Neue',sans-serif; font-size:clamp(44px,6vw,84px); line-height:1; margin:0 0 22px; }
        .sa-sub { font-size:18px; line-height:1.75; color:var(--ash); font-weight:300; max-width:62ch; }
        .sa-grid { max-width:1100px; margin:0 auto; padding:20px 48px 90px; display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--slag); }
        .sa-card { background:var(--steel); padding:30px 26px; text-decoration:none; display:flex; flex-direction:column; gap:6px; transition:background .25s; }
        .sa-card:hover { background:#202020; }
        .sa-city { font-family:'Bebas Neue',sans-serif; font-size:26px; letter-spacing:.5px; color:var(--white); }
        .sa-county { font-size:12px; letter-spacing:1px; text-transform:uppercase; color:var(--smoke); }
        .sa-desc { font-size:13px; line-height:1.6; color:var(--smoke); font-weight:300; margin-top:6px; }
        .sa-link { margin-top:10px; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--forge); }
        .sa-note { max-width:1100px; margin:0 auto; padding:0 48px 90px; color:var(--ash); font-weight:300; font-size:16px; line-height:1.8; }
        .sa-note a { color:var(--forge); text-decoration:none; }
        .sa-h2 { font-family:'Bebas Neue',sans-serif; font-size:30px; letter-spacing:1px; color:var(--white); margin:0 0 12px; }
        .sa-note p { margin:0 0 34px; }
        @media (max-width:900px) { .sa-hero,.sa-grid,.sa-note { padding-left:24px; padding-right:24px; } .sa-grid { grid-template-columns:1fr; } }
      `}</style>
      <div className="sa-wrap">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Service Areas', path: '/welding' }]} />
        <header className="sa-hero">
          <div className="sa-tag">Service Areas · Metro Detroit</div>
          <h1 className="sa-h1">Where We Work</h1>
          <p className="sa-sub">
            Based in Warren, HotFab Welding serves homes and businesses across Metro Detroit with
            custom metal fabrication and fully mobile on-site welding. Choose your city below, or
            call <a href="tel:2482599956" style={{ color: 'var(--forge)', textDecoration: 'none' }}>(248) 259-9956</a> for a free quote.
          </p>
        </header>
        <div className="sa-grid">
          {locations.map((l) => (
            <Link key={l.slug} href={`/welding/${l.slug}`} className="sa-card">
              <span className="sa-city">{l.city}, MI</span>
              <span className="sa-county">{l.county}</span>
              <span className="sa-desc">{l.heroSub}</span>
              <span className="sa-link">Welding in {l.city} →</span>
            </Link>
          ))}
        </div>
        <section className="sa-note">
          <h2 className="sa-h2">How our service area works</h2>
          <p>
            Every project is fabricated at our shop at {SITE.address.full} and delivered and installed at your property.
            Our mobile welding unit handles on-site repairs anywhere in {SITE.serviceArea.counties.join(', ')}.
            Don&apos;t see your city? We serve the wider Metro Detroit area — <Link href="/contact">contact us</Link> to confirm coverage.
          </p>
          <h2 className="sa-h2">Services available in every area</h2>
          <ul className="hf-areas">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.serviceName}</Link></li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}