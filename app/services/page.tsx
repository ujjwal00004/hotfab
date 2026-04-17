import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      num: '01',
      title: 'Custom Metal Fabrication',
      tagline: 'Built to your exact specifications in Warren, MI',
      description: 'We specialize in high-quality custom metal fabrication for architectural and structural elements. From concept to installation, our experienced team delivers precision work for residential, commercial, and industrial projects across Michigan.',
      features: [
        'Interior & Exterior Railings',
        'Fences, Gates & Entry Systems',
        'Balconies & Spiral Staircases',
        'Standard Staircases',
        'Decorative Grates & Metal Screens',
        'Custom Metal Furniture & Sculptures',
        'Ornamental & Structural Steel Components',
      ],
      icon: '⚙️',
    },
    {
      num: '02',
      title: 'Specialty Metal Solutions',
      tagline: 'Creative & engineered solutions',
      description: 'From protective storm shields to unique artistic installations, we handle complex and custom projects that require creativity, precision engineering, and expert welding.',
      features: [
        'Storm Shields & Flood Protection',
        'Security Panels & Barriers',
        'Custom Prototypes & One-Off Designs',
        'Artistic Metal Sculptures & Installations',
        'CAD Design Collaboration',
      ],
      icon: '🛡️',
    },
    {
      num: '03',
      title: 'Mobile On-Site Welding & Repairs',
      tagline: 'We come to your location',
      description: 'Our fully equipped mobile welding team provides portable welding and on-site repairs throughout Metro Detroit and Michigan. Ideal for trucks, trailers, heavy equipment, structural reinforcement, and emergency fixes.',
      features: [
        'On-Site Welding (Steel, Stainless Steel, Aluminum)',
        'Truck & Trailer Repairs',
        'Equipment & Structural Reinforcement',
        'Field Fabrication & Installation',
        'Emergency & Same-Day Service',
      ],
      icon: '🚚',
    },
  ];

  const materials = [
    { name: 'Carbon Steel', desc: 'Strong, versatile, and cost-effective for structural work' },
    { name: 'Stainless Steel', desc: 'Corrosion-resistant with clean, modern finish' },
    { name: 'Aluminum', desc: 'Lightweight, durable, and excellent for outdoor applications' },
    { name: 'Mild Steel', desc: 'Easy to fabricate, perfect for ornamental and decorative pieces' },
  ];

  const process = [
    { step: '01', title: 'Consultation', desc: 'We visit your site or discuss your project needs in detail.' },
    { step: '02', title: 'Design & Quote', desc: 'Free detailed quote with drawings and material recommendations.' },
    { step: '03', title: 'Fabrication', desc: 'Precision fabrication at our shop located at 13118 E 9 Mile Rd, Warren, MI.' },
    { step: '04', title: 'Delivery & Installation', desc: 'On-site delivery, professional installation, and final inspection.' },
  ];

  return (
    <>
      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        :root {
          --forge: #C8410A;
          --forge-light: #E85D1A;
          --iron: #0D0D0D;
          --steel: #1A1A1A;
          --slag: #2C2C2C;
          --smoke: #6B6B6B;
          --ash: #A0A0A0;
          --white: #F5F3EF;
          --cream: #EDE9E1;
        }

        .sp-wrap {
          font-family: 'Barlow', sans-serif;
          background: var(--iron);
          color: var(--white);
        }

        /* HERO */
        .sp-hero {
          position: relative;
          padding: 160px 48px 100px;
          overflow: hidden;
        }
        .sp-hero::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse 600px 400px at 80% 50%, rgba(200,65,10,0.08) 0%, transparent 70%),
                      linear-gradient(180deg, rgba(200,65,10,0.04) 0%, transparent 100%);
        }
        .sp-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .sp-hero-line {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge), transparent);
        }
        .sp-hero-inner {
          max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 60px;
        }
        .sp-hero-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 24px; display: flex; align-items: center; gap: 12px;
        }
        .sp-hero-tag::before {
          content: ''; display: block; width: 32px; height: 1px; background: var(--forge);
        }
        .sp-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 9vw, 120px);
          line-height: 0.92; letter-spacing: 0.01em;
          color: var(--white);
        }
        .sp-hero-title em { color: var(--forge); font-style: normal; }
        .sp-hero-sub {
          font-size: 17px; font-weight: 300; color: var(--ash);
          line-height: 1.8; max-width: 560px; margin-top: 28px;
        }
        .sp-hero-stat {
          text-align: right; flex-shrink: 0;
        }
        .sp-hero-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 80px; line-height: 1; color: var(--white);
        }
        .sp-hero-stat-num span { color: var(--forge); }
        .sp-hero-stat-label {
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--smoke); margin-top: 4px;
        }

        /* SERVICES */
        .sp-services {
          background: var(--iron); 
          padding: 0 48px 120px;
        }
        .sp-services-inner { max-width: 1100px; margin: 0 auto; }

        .sp-service-block {
          display: grid; grid-template-columns: 1fr 1fr;
          border: 1px solid var(--slag);
          margin-bottom: 2px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s;
        }
        .sp-service-block:hover { border-color: rgba(200,65,10,0.4); }
        .sp-service-block:nth-child(even) { direction: rtl; }
        .sp-service-block:nth-child(even) > * { direction: ltr; }

        .sp-svc-image {
          position: relative; min-height: 420px;
          background: var(--steel); overflow: hidden;
        }
        .sp-svc-image-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          filter: brightness(0.3) saturate(0.5);
          transition: filter 0.5s ease;
        }
        .sp-service-block:hover .sp-svc-image-bg { filter: brightness(0.4) saturate(0.6); }
        .sp-svc-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(200,65,10,0.15) 0%, transparent 60%);
        }
        .sp-svc-num {
          position: absolute; bottom: 24px; left: 28px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 96px; line-height: 1;
          color: rgba(255,255,255,0.06); pointer-events: none;
        }
        .sp-svc-icon-wrap {
          position: absolute; top: 36px; left: 36px;
          width: 56px; height: 56px;
          border: 1px solid rgba(200,65,10,0.5);
          background: rgba(200,65,10,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
        }

        .sp-svc-content {
          padding: 56px 60px;
          background: var(--steel);
          display: flex; flex-direction: column; justify-content: center;
        }
        .sp-svc-index {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 8px;
        }
        .sp-svc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px; line-height: 1; letter-spacing: 1px;
          color: var(--white); margin-bottom: 8px;
        }
        .sp-svc-tagline {
          font-size: 14px; font-style: italic; color: var(--smoke);
          font-weight: 300; margin-bottom: 24px;
        }
        .sp-svc-desc {
          font-size: 15px; line-height: 1.8; color: var(--ash);
          font-weight: 300; margin-bottom: 36px;
        }
        .sp-svc-features { list-style: none; }
        .sp-svc-feat {
          display: flex; align-items: center; gap: 14px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(44,44,44,0.8);
          font-size: 14px; color: var(--ash); font-weight: 400;
        }
        .sp-svc-feat:last-child { border-bottom: none; }
        .sp-svc-feat-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--forge); flex-shrink: 0;
        }

        /* MATERIALS */
        .sp-materials {
          background: var(--steel); 
          padding: 100px 48px;
        }
        .sp-materials-inner { max-width: 1100px; margin: 0 auto; }
        .sp-mat-header {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          margin-bottom: 64px;
        }
        .sp-section-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 16px; display: block;
        }
        .sp-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(44px, 5vw, 68px); line-height: 1;
          color: var(--white);
        }
        .sp-mat-desc {
          font-size: 15px; color: var(--smoke); line-height: 1.8; font-weight: 300;
        }
        .sp-mat-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
          background: var(--slag);
        }
        .sp-mat-card {
          background: var(--steel); padding: 40px 32px;
          transition: background 0.3s;
        }
        .sp-mat-card:hover { background: #202020; }
        .sp-mat-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px; letter-spacing: 1px; color: var(--white);
          margin-bottom: 8px;
        }
        .sp-mat-desc-text { font-size: 13px; color: var(--smoke); line-height: 1.6; font-weight: 300; }

        /* PROCESS */
        .sp-process {
          background: var(--iron); 
          padding: 100px 48px;
        }
        .sp-process-inner { max-width: 1100px; margin: 0 auto; }
        .sp-process-steps {
          display: grid; grid-template-columns: repeat(4, 1fr);
          position: relative;
        }
        .sp-process-steps::before {
          content: '';
          position: absolute; top: 28px; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(to right, var(--slag), var(--forge), var(--slag));
        }
        .sp-process-step {
          padding: 0 24px; text-align: center; position: relative;
        }
        .sp-process-circle {
          width: 56px; height: 56px;
          border: 1px solid var(--forge);
          background: var(--iron);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 28px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px; color: var(--forge);
        }

        /* CTA */
        .sp-cta {
          background: var(--steel); 
          padding: 120px 48px;
        }
        .sp-cta-inner {
          max-width: 800px; margin: 0 auto; text-align: center;
        }
        .sp-cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px); line-height: 0.95;
          color: var(--white); margin-bottom: 24px;
        }
        .sp-cta-title span { color: var(--forge); }
        .sp-cta-sub {
          font-size: 17px; color: var(--smoke); line-height: 1.8;
          font-weight: 300; margin-bottom: 52px;
        }
        .sp-btn-primary {
          background: var(--forge); color: var(--white);
          padding: 18px 48px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; border: 2px solid var(--forge);
          transition: all 0.2s;
        }
        .sp-btn-primary:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .sp-btn-ghost {
          background: transparent; color: var(--white);
          padding: 18px 48px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; border: 2px solid var(--slag);
          transition: all 0.2s;
        }
        .sp-btn-ghost:hover { border-color: var(--white); }
        .sp-cta-phone {
          margin-top: 40px; display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px; letter-spacing: 2px; color: var(--white);
          text-decoration: none;
        }
        .sp-cta-phone:hover { color: var(--forge); }

        /* Responsive */
        @media (max-width: 900px) {
          .sp-hero { padding: 140px 24px 80px; }
          .sp-hero-inner { grid-template-columns: 1fr; }
          .sp-hero-stat { text-align: left; }
          .sp-services { padding: 0 24px 80px; }
          .sp-service-block { grid-template-columns: 1fr; }
          .sp-svc-image { min-height: 260px; }
          .sp-svc-content { padding: 40px 28px; }
          .sp-materials { padding: 80px 24px; }
          .sp-mat-header { grid-template-columns: 1fr; }
          .sp-mat-grid { grid-template-columns: 1fr 1fr; }
          .sp-process { padding: 80px 24px; }
          .sp-process-steps { grid-template-columns: 1fr 1fr; }
          .sp-cta { padding: 80px 24px; }
        }
        @media (max-width: 540px) {
          .sp-mat-grid { grid-template-columns: 1fr; }
          .sp-process-steps { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sp-wrap">

        {/* HERO */}
        <section className="sp-hero">
          <div className="sp-hero-grid" />
          <div className="sp-hero-line" />
          <div className="sp-hero-inner">
            <div>
              <div className="sp-hero-tag">WELDING SERVICES IN WARREN, MI</div>
              <h1 className="sp-hero-title">
                Our<br /><em>Services</em>
              </h1>
              <p className="sp-hero-sub">
                25+ years of expert welding and custom metal fabrication. 
                Serving Metro Detroit from our shop at 13118 E 9 Mile Rd, Warren, MI 48017.
              </p>
            </div>
            <div className="sp-hero-stat">
              <div className="sp-hero-stat-num">25<span>+</span></div>
              <div className="sp-hero-stat-label">YEARS EXPERIENCE</div>
            </div>
          </div>
        </section>

        {/* SERVICES BLOCKS */}
        <section className="sp-services">
          <div className="sp-services-inner">
            {services.map((svc, i) => {
              const images = [
                'https://images.unsplash.com/photo-1504917595217-d4dc5eb5e6c8?w=900&q=80',
                'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900&q=80',
                'https://images.unsplash.com/photo-1581092160607-ee22731c9c39?w=900&q=80',
              ];
              return (
                <div key={i} className="sp-service-block">
                  <div className="sp-svc-image">
                    <div className="sp-svc-image-bg" style={{ backgroundImage: `url('${images[i]}')` }} />
                    <div className="sp-svc-image-overlay" />
                    <div className="sp-svc-num">{svc.num}</div>
                    <div className="sp-svc-icon-wrap">{svc.icon}</div>
                  </div>

                  <div className="sp-svc-content">
                    <div className="sp-svc-index">SERVICE {svc.num}</div>
                    <h2 className="sp-svc-title">{svc.title}</h2>
                    <p className="sp-svc-tagline">{svc.tagline}</p>
                    <p className="sp-svc-desc">{svc.description}</p>
                    <ul className="sp-svc-features">
                      {svc.features.map((f, j) => (
                        <li key={j} className="sp-svc-feat">
                          <span className="sp-svc-feat-dot" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* MATERIALS */}
        <section className="sp-materials">
          <div className="sp-materials-inner">
            <div className="sp-mat-header">
              <div>
                <span className="sp-section-tag">MATERIALS WE MASTER</span>
                <h2 className="sp-section-title">Metals We Work With</h2>
              </div>
              <p className="sp-mat-desc">
                We fabricate using the right metal for every project — ensuring strength, durability, and the perfect finish.
              </p>
            </div>

            <div className="sp-mat-grid">
              {materials.map((m, i) => (
                <div key={i} className="sp-mat-card">
                  <div className="sp-mat-name">{m.name}</div>
                  <p className="sp-mat-desc-text">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="sp-process">
          <div className="sp-process-inner">
            <div className="sp-process-header">
              <span className="sp-section-tag">OUR PROCESS</span>
              <h2 className="sp-section-title">From Quote to Completion</h2>
            </div>

            <div className="sp-process-steps">
              {process.map((p, i) => (
                <div key={i} className="sp-process-step">
                  <div className="sp-process-circle">{p.step}</div>
                  <div className="sp-process-title">{p.title}</div>
                  <p className="sp-process-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="sp-cta">
          <div className="sp-cta-inner">
            <h2 className="sp-cta-title">
              Ready to Start Your<br /><span>Project?</span>
            </h2>
            <p className="sp-cta-sub">
              Located at 13118 E 9 Mile Rd, Warren, MI 48017.<br />
              Free estimates • Emergency service available • Serving all of Metro Detroit
            </p>
            <div className="sp-cta-actions" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:2482599956" className="sp-btn-primary">CALL (248) 259-9956</a>
              <Link href="/contact" className="sp-btn-ghost">REQUEST FREE QUOTE →</Link>
            </div>
            <a href="tel:2482599956" className="sp-cta-phone">(248) 259-9956</a>
            <p className="sp-cta-phone-note">13118 E 9 Mile Rd, Warren, MI 48017</p>
          </div>
        </section>

      </div>
    </>
  );
}