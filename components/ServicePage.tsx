import Image from 'next/image';
import Link from 'next/link';
import FaqSchema from '@/components/FaqSchema';
import { Service, getService } from '@/data/services';

const SITE = 'https://www.hotfabwelding.com';

export default function ServicePage({ service }: { service: Service }) {
  // Service schema — tells Google and AI engines exactly what this page offers
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.serviceName,
    'serviceType': service.serviceType,
    'description': service.schemaDescription,
    'url': `${SITE}/services/${service.slug}`,
    'provider': { '@id': `${SITE}/#business` },
    'areaServed': [
      { '@type': 'City', 'name': 'Warren' },
      { '@type': 'City', 'name': 'Sterling Heights' },
      { '@type': 'City', 'name': 'Detroit' },
      { '@type': 'City', 'name': 'Troy' },
      { '@type': 'City', 'name': 'Dearborn' },
      { '@type': 'State', 'name': 'Michigan' },
    ],
  };

  // Breadcrumb schema — Home > Services > This Service
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
      { '@type': 'ListItem', position: 3, name: service.serviceName, item: `${SITE}/services/${service.slug}` },
    ],
  };

  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FaqSchema faqs={service.faqs} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        :root {
          --forge:#C8410A; --forge-light:#E85D1A; --iron:#0D0D0D; --steel:#1A1A1A;
          --slag:#2C2C2C; --smoke:#6B6B6B; --ash:#A0A0A0; --white:#F5F3EF; --cream:#EDE9E1;
        }
        .svc-wrap { font-family:'Barlow',sans-serif; background:var(--iron); color:var(--white); }

        /* Breadcrumb */
        .svc-crumbs { max-width:1100px; margin:0 auto; padding:120px 48px 0; font-size:12px;
          letter-spacing:1px; text-transform:uppercase; color:var(--smoke); }
        .svc-crumbs a { color:var(--ash); text-decoration:none; }
        .svc-crumbs a:hover { color:var(--forge); }

        /* Hero */
        .svc-hero { position:relative; padding:40px 48px 70px; max-width:1100px; margin:0 auto; }
        .svc-tag { font-size:12px; letter-spacing:3px; text-transform:uppercase; color:var(--forge);
          font-weight:600; margin-bottom:18px; }
        .svc-h1 { font-family:'Bebas Neue',sans-serif; font-size:clamp(42px,6vw,82px); line-height:0.98;
          color:var(--white); margin:0 0 24px; max-width:14ch; }
        .svc-sub { font-size:18px; line-height:1.75; color:var(--ash); font-weight:300; max-width:60ch; }
        .svc-hero-cta { margin-top:34px; display:flex; gap:16px; flex-wrap:wrap; }
        .svc-btn { padding:16px 40px; font-size:12px; font-weight:600; letter-spacing:2px;
          text-transform:uppercase; text-decoration:none; transition:all .2s; display:inline-block; }
        .svc-btn-primary { background:var(--forge); color:var(--white); border:2px solid var(--forge); }
        .svc-btn-primary:hover { background:var(--forge-light); border-color:var(--forge-light); }
        .svc-btn-ghost { background:transparent; color:var(--white); border:2px solid var(--slag); }
        .svc-btn-ghost:hover { border-color:var(--white); }

        /* Image band */
        .svc-imgband { position:relative; height:clamp(240px,38vw,460px); overflow:hidden; }
        .svc-imgband img { object-fit:cover; }
        .svc-imgband::after { content:''; position:absolute; inset:0;
          background:linear-gradient(to bottom, rgba(13,13,13,.35), rgba(13,13,13,.9)); }

        /* Body */
        .svc-body { max-width:1100px; margin:0 auto; padding:80px 48px;
          display:grid; grid-template-columns:1.6fr 1fr; gap:64px; }
        .svc-intro p { font-size:18px; line-height:1.85; color:var(--cream); font-weight:300; margin:0 0 22px; }
        .svc-section { margin-top:40px; }
        .svc-section h2 { font-family:'Bebas Neue',sans-serif; font-size:30px; letter-spacing:1px;
          color:var(--white); margin:0 0 14px; }
        .svc-section h2::before { content:''; display:inline-block; width:28px; height:3px;
          background:var(--forge); vertical-align:middle; margin-right:12px; }
        .svc-section p { font-size:16px; line-height:1.8; color:var(--ash); font-weight:300; margin:0 0 16px; }

        /* Feature sidebar */
        .svc-side { align-self:start; position:sticky; top:24px; }
        .svc-side-card { background:var(--steel); border:1px solid var(--slag); padding:32px 28px; }
        .svc-side-title { font-family:'Bebas Neue',sans-serif; font-size:24px; letter-spacing:1px;
          color:var(--white); margin:0 0 20px; }
        .svc-feat { padding:14px 0; border-bottom:1px solid var(--slag); }
        .svc-feat:last-child { border-bottom:none; }
        .svc-feat-name { font-size:15px; font-weight:600; color:var(--white); margin:0 0 4px; }
        .svc-feat-desc { font-size:13px; line-height:1.55; color:var(--smoke); font-weight:300; margin:0; }
        .svc-side-cta { margin-top:24px; }

        /* FAQ */
        .svc-faq { background:var(--steel); padding:90px 48px; }
        .svc-faq-inner { max-width:900px; margin:0 auto; }
        .svc-faq-eyebrow { font-size:12px; letter-spacing:3px; text-transform:uppercase;
          color:var(--forge); font-weight:600; margin-bottom:10px; }
        .svc-faq-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(36px,5vw,58px);
          color:var(--white); margin:0 0 40px; }
        .svc-faq-item { border-top:1px solid var(--slag); padding:26px 0; }
        .svc-faq-q { font-size:18px; font-weight:600; color:var(--white); margin:0 0 10px; }
        .svc-faq-a { font-size:15px; line-height:1.75; color:var(--ash); font-weight:300; margin:0; }

        /* Related */
        .svc-related { max-width:1100px; margin:0 auto; padding:80px 48px; }
        .svc-related-title { font-family:'Bebas Neue',sans-serif; font-size:32px; color:var(--white);
          margin:0 0 28px; }
        .svc-related-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--slag); }
        .svc-related-card { background:var(--steel); padding:28px 24px; text-decoration:none;
          transition:background .25s; display:block; }
        .svc-related-card:hover { background:#202020; }
        .svc-related-name { font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:.5px;
          color:var(--white); margin:0 0 8px; }
        .svc-related-link { font-size:12px; letter-spacing:2px; text-transform:uppercase; color:var(--forge); }

        /* CTA */
        .svc-cta { background:var(--iron); padding:110px 48px; text-align:center; border-top:1px solid var(--slag); }
        .svc-cta-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(44px,6vw,78px);
          line-height:.98; color:var(--white); margin:0 0 18px; }
        .svc-cta-title span { color:var(--forge); }
        .svc-cta-sub { font-size:17px; color:var(--smoke); font-weight:300; margin:0 0 38px; }
        .svc-cta-phone { display:block; margin-top:30px; font-family:'Bebas Neue',sans-serif;
          font-size:42px; letter-spacing:2px; color:var(--white); text-decoration:none; }
        .svc-cta-phone:hover { color:var(--forge); }

        @media (max-width:900px) {
          .svc-crumbs, .svc-hero, .svc-body, .svc-related { padding-left:24px; padding-right:24px; }
          .svc-body { grid-template-columns:1fr; gap:40px; }
          .svc-side { position:static; }
          .svc-faq, .svc-cta { padding-left:24px; padding-right:24px; }
          .svc-related-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="svc-wrap">
        {/* Breadcrumb */}
        <nav className="svc-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/services">Services</Link> &nbsp;/&nbsp;{' '}
          <span style={{ color: 'var(--forge)' }}>{service.serviceName}</span>
        </nav>

        {/* Hero */}
        <header className="svc-hero">
          <div className="svc-tag">{service.heroTag}</div>
          <h1 className="svc-h1">{service.h1}</h1>
          <p className="svc-sub">{service.heroSub}</p>
          <div className="svc-hero-cta">
            <Link href="/contact" className="svc-btn svc-btn-primary">Request a Free Quote</Link>
            <a href="tel:2482599956" className="svc-btn svc-btn-ghost">Call (248) 259-9956</a>
          </div>
        </header>

        {/* Image */}
        <div className="svc-imgband">
          <Image src={service.image} alt={`${service.serviceName} by HotFab Welding in Warren, MI`} fill sizes="100vw" />
        </div>

        {/* Body + feature sidebar */}
        <div className="svc-body">
          <div>
            <div className="svc-intro">
              {service.intro.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            {service.sections.map((sec, i) => (
              <section className="svc-section" key={i}>
                <h2>{sec.heading}</h2>
                {sec.body.map((p, j) => (<p key={j}>{p}</p>))}
              </section>
            ))}
          </div>

          <aside className="svc-side">
            <div className="svc-side-card">
              <h2 className="svc-side-title">What We Build</h2>
              {service.features.map((f, i) => (
                <div className="svc-feat" key={i}>
                  <p className="svc-feat-name">{f.title}</p>
                  <p className="svc-feat-desc">{f.desc}</p>
                </div>
              ))}
              <Link href="/contact" className="svc-btn svc-btn-primary svc-side-cta">Get a Free Quote</Link>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="svc-faq">
          <div className="svc-faq-inner">
            <div className="svc-faq-eyebrow">FAQ</div>
            <h2 className="svc-faq-title">Common Questions</h2>
            {service.faqs.map((f, i) => (
              <div className="svc-faq-item" key={i}>
                <p className="svc-faq-q">{f.question}</p>
                <p className="svc-faq-a">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related services (internal linking) */}
        {related.length > 0 && (
          <section className="svc-related">
            <h2 className="svc-related-title">Related Services</h2>
            <div className="svc-related-grid">
              {related.map((r) => (
                <Link href={`/services/${r.slug}`} className="svc-related-card" key={r.slug}>
                  <p className="svc-related-name">{r.serviceName}</p>
                  <span className="svc-related-link">View Service →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="svc-cta">
          <h2 className="svc-cta-title">Ready to <span>Start Your Project?</span></h2>
          <p className="svc-cta-sub">Free, no-obligation quotes for residential, commercial, and industrial clients across Metro Detroit.</p>
          <Link href="/contact" className="svc-btn svc-btn-primary">Request a Quote →</Link>
          <a href="tel:2482599956" className="svc-cta-phone">(248) 259-9956</a>
        </section>
      </div>
    </>
  );
}