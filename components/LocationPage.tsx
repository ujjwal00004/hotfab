import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { faqSchema, webPageSchema, BUSINESS_ID } from '@/lib/schema';
import { SITE, absoluteUrl } from '@/lib/site';
import { Location } from '@/data/locations';
import { services } from '@/data/services';

export default function LocationPage({ location }: { location: Location }) {
  const path = `/welding/${location.slug}`;

  // Service scoped to this city — "HotFab Welding serves <city>", provided by the business entity.
  const cityServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name: `Welding & Metal Fabrication in ${location.city}, MI`,
    serviceType: 'Welding and Metal Fabrication',
    description: location.metaDescription,
    url: absoluteUrl(path),
    image: location.image,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: location.city, containedInPlace: { '@type': 'AdministrativeArea', name: location.county } },
  };

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path, name: location.title, description: location.metaDescription, image: location.image }),
          cityServiceSchema,
          faqSchema(location.faqs),
        ]}
      />

      <style>{`
        :root {
          --forge:#C8410A; --forge-light:#E85D1A; --iron:#0D0D0D; --steel:#1A1A1A;
          --slag:#2C2C2C; --smoke:#6B6B6B; --ash:#A0A0A0; --white:#F5F3EF; --cream:#EDE9E1;
        }
        .loc-wrap { font-family:'Barlow',sans-serif; background:var(--iron); color:var(--white); }

        .loc-hero { max-width:1100px; margin:0 auto; padding:40px 48px 60px; }
        .loc-tag { font-size:12px; letter-spacing:3px; text-transform:uppercase; color:var(--forge);
          font-weight:600; margin-bottom:18px; }
        .loc-h1 { font-family:'Bebas Neue',sans-serif; font-size:clamp(40px,5.5vw,76px); line-height:1;
          color:var(--white); margin:0 0 22px; max-width:16ch; }
        .loc-sub { font-size:18px; line-height:1.75; color:var(--ash); font-weight:300; max-width:62ch; }
        .loc-hero-cta { margin-top:32px; display:flex; gap:14px; flex-wrap:wrap; }
        .loc-btn { padding:16px 38px; font-size:12px; font-weight:600; letter-spacing:2px;
          text-transform:uppercase; text-decoration:none; transition:all .2s; display:inline-block; }
        .loc-btn-primary { background:var(--forge); color:var(--white); border:2px solid var(--forge); }
        .loc-btn-primary:hover { background:var(--forge-light); border-color:var(--forge-light); }
        .loc-btn-ghost { background:transparent; color:var(--white); border:2px solid var(--slag); }
        .loc-btn-ghost:hover { border-color:var(--white); }

        .loc-imgband { position:relative; height:clamp(220px,34vw,420px); overflow:hidden; }
        .loc-imgband img { object-fit:cover; }
        .loc-imgband::after { content:''; position:absolute; inset:0;
          background:linear-gradient(to bottom, rgba(13,13,13,.35), rgba(13,13,13,.9)); }

        .loc-body { max-width:900px; margin:0 auto; padding:74px 48px 40px; }
        .loc-body p { font-size:18px; line-height:1.85; color:var(--cream); font-weight:300; margin:0 0 22px; }
        .loc-section-h { font-family:'Bebas Neue',sans-serif; font-size:30px; letter-spacing:1px;
          color:var(--white); margin:44px 0 14px; }
        .loc-section-h::before { content:''; display:inline-block; width:28px; height:3px;
          background:var(--forge); vertical-align:middle; margin-right:12px; }
        .loc-body .loc-section-p { font-size:16px; line-height:1.8; color:var(--ash); }

        /* Services-in-city grid */
        .loc-services { background:var(--steel); padding:70px 48px; }
        .loc-services-inner { max-width:1100px; margin:0 auto; }
        .loc-services-eyebrow { font-size:12px; letter-spacing:3px; text-transform:uppercase;
          color:var(--forge); font-weight:600; margin-bottom:10px; }
        .loc-services-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(30px,4vw,48px);
          color:var(--white); margin:0 0 28px; }
        .loc-services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--slag); }
        .loc-service-card { background:var(--iron); padding:24px 22px; text-decoration:none;
          display:flex; flex-direction:column; gap:6px; transition:background .25s; }
        .loc-service-card:hover { background:#161616; }
        .loc-service-name { font-family:'Bebas Neue',sans-serif; font-size:21px; letter-spacing:.5px;
          color:var(--white); line-height:1.05; }
        .loc-service-link { margin-top:6px; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--forge); }

        .loc-faq { max-width:900px; margin:0 auto; padding:70px 48px; }
        .loc-faq-eyebrow { font-size:12px; letter-spacing:3px; text-transform:uppercase; color:var(--forge); font-weight:600; margin-bottom:10px; }
        .loc-faq-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(34px,5vw,54px); color:var(--white); margin:0 0 34px; }
        .loc-faq-item { border-top:1px solid var(--slag); padding:24px 0; }
        .loc-faq-q { font-family:'Barlow',sans-serif; font-size:18px; font-weight:600; color:var(--white); margin:0 0 10px; }
        .loc-faq-a { font-size:15px; line-height:1.75; color:var(--ash); font-weight:300; margin:0; }

        .loc-cta { background:var(--iron); padding:100px 48px; text-align:center; border-top:1px solid var(--slag); }
        .loc-cta-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(40px,6vw,72px); line-height:1;
          color:var(--white); margin:0 0 16px; }
        .loc-cta-title span { color:var(--forge); }
        .loc-cta-sub { font-size:17px; color:var(--smoke); font-weight:300; margin:0 0 34px; }
        .loc-cta-phone { display:block; margin-top:28px; font-family:'Bebas Neue',sans-serif;
          font-size:42px; letter-spacing:2px; color:var(--white); text-decoration:none; }
        .loc-cta-phone:hover { color:var(--forge); }

        .loc-nearby { max-width:1100px; margin:0 auto; padding:0 48px 70px; }
        .loc-nearby .loc-section-h { margin-top:0; }
        @media (max-width:900px) {
          .loc-nearby { padding-left:24px; padding-right:24px; }
          .loc-hero, .loc-body, .loc-services, .loc-faq, .loc-cta { padding-left:24px; padding-right:24px; }
          .loc-services-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="loc-wrap">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Service Areas', path: '/welding' }, { name: `${location.city}, MI`, path }]} />

        <header className="loc-hero">
          <div className="loc-tag">{location.city}, MI · {location.county}</div>
          <h1 className="loc-h1">{location.h1}</h1>
          <p className="loc-sub">{location.heroSub}</p>
          <div className="loc-hero-cta">
            <Link href="/contact" className="loc-btn loc-btn-primary">Request a Free Quote</Link>
            <a href="tel:2482599956" className="loc-btn loc-btn-ghost">Call (248) 259-9956</a>
          </div>
        </header>

        <div className="loc-imgband">
          <Image src={location.image} alt={`Custom metalwork by HotFab Welding serving ${location.city}, MI`} fill sizes="100vw" priority />
        </div>

        <div className="loc-body">
          {location.intro.map((p, i) => (<p key={i}>{p}</p>))}
          <h2 className="loc-section-h">{location.localHeading}</h2>
          {location.localBody.map((p, i) => (<p className="loc-section-p" key={i}>{p}</p>))}
        </div>

        {/* Services available in this city — links to service pages */}
        <section className="loc-services">
          <div className="loc-services-inner">
            <div className="loc-services-eyebrow">Services in {location.city}</div>
            <h2 className="loc-services-title">What We Build for {location.city}</h2>
            <div className="loc-services-grid">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="loc-service-card">
                  <span className="loc-service-name">{s.serviceName}</span>
                  <span className="loc-service-link">{s.serviceName} in {location.city} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="loc-faq">
          <div className="loc-faq-eyebrow">FAQ</div>
          <h2 className="loc-faq-title">{location.city} Welding Questions</h2>
          {location.faqs.map((f, i) => (
            <div className="loc-faq-item" key={i}>
              <h3 className="loc-faq-q">{f.question}</h3>
              <p className="loc-faq-a">{f.answer}</p>
            </div>
          ))}
        </section>

        <section className="loc-nearby">
          <h2 className="loc-section-h">Other Metro Detroit areas we serve</h2>
          <p className="loc-section-p">
            All work is fabricated at our shop at {SITE.address.full} and installed on-site. Nearby cities with their own pages:
          </p>
          <ServiceAreaLinks current={location.slug} />
        </section>

        <section className="loc-cta">
          <h2 className="loc-cta-title">Serving <span>{location.city}</span> & All of Metro Detroit</h2>
          <p className="loc-cta-sub">Free, no-obligation quotes for residential, commercial, and industrial projects.</p>
          <Link href="/contact" className="loc-btn loc-btn-primary">Request a Quote →</Link>
          <a href="tel:2482599956" className="loc-cta-phone">(248) 259-9956</a>
        </section>
      </div>
    </>
  );
}