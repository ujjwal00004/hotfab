import type { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Service Areas | Welding & Metal Fabrication Across Metro Detroit',
  description:
    'HotFab Welding serves Warren and Metro Detroit — Sterling Heights, Troy, Detroit, Dearborn, Clinton Township, Roseville and more. Custom fabrication and mobile on-site welding. (248) 259-9956.',
  alternates: { canonical: 'https://www.hotfabwelding.com/welding' },
  openGraph: {
    title: 'Service Areas | HotFab Welding — Metro Detroit',
    description: 'Custom welding and metal fabrication across Warren and Metro Detroit. Family-owned, 25+ years.',
    url: 'https://www.hotfabwelding.com/welding',
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        :root { --forge:#C8410A; --forge-light:#E85D1A; --iron:#0D0D0D; --steel:#1A1A1A; --slag:#2C2C2C; --smoke:#6B6B6B; --ash:#A0A0A0; --white:#F5F3EF; }
        .sa-wrap { font-family:'Barlow',sans-serif; background:var(--iron); color:var(--white); min-height:60vh; }
        .sa-hero { max-width:1100px; margin:0 auto; padding:140px 48px 50px; }
        .sa-tag { font-size:12px; letter-spacing:3px; text-transform:uppercase; color:var(--forge); font-weight:600; margin-bottom:18px; }
        .sa-h1 { font-family:'Bebas Neue',sans-serif; font-size:clamp(44px,6vw,84px); line-height:1; margin:0 0 22px; }
        .sa-sub { font-size:18px; line-height:1.75; color:var(--ash); font-weight:300; max-width:62ch; }
        .sa-grid { max-width:1100px; margin:0 auto; padding:20px 48px 90px; display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--slag); }
        .sa-card { background:var(--steel); padding:30px 26px; text-decoration:none; display:flex; flex-direction:column; gap:6px; transition:background .25s; }
        .sa-card:hover { background:#202020; }
        .sa-city { font-family:'Bebas Neue',sans-serif; font-size:26px; letter-spacing:.5px; color:var(--white); }
        .sa-county { font-size:12px; letter-spacing:1px; text-transform:uppercase; color:var(--smoke); }
        .sa-link { margin-top:10px; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--forge); }
        .sa-note { max-width:1100px; margin:0 auto; padding:0 48px 90px; color:var(--ash); font-weight:300; font-size:16px; line-height:1.8; }
        .sa-note a { color:var(--forge); text-decoration:none; }
        @media (max-width:900px) { .sa-hero,.sa-grid,.sa-note { padding-left:24px; padding-right:24px; } .sa-grid { grid-template-columns:1fr; } }
      `}</style>
      <div className="sa-wrap">
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
              <span className="sa-link">View Area →</span>
            </Link>
          ))}
        </div>
        <p className="sa-note">
          Don&apos;t see your city? We serve the wider Metro Detroit area including Macomb, Wayne, and
          Oakland counties. <Link href="/contact">Contact us</Link> to confirm coverage for your location.
        </p>
      </div>
    </>
  );
}