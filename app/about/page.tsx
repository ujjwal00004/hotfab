import Link from 'next/link';

export default function AboutPage() {
  const capabilities = [
    'MIG Welding',
    'TIG Welding',
    'Stick Welding',
    'Structural Steel',
    'Stainless Steel',
    'Aluminum Welding',
    'Custom Fabrication',
    'On-Site Mobile Welding',
  ];

  const values = [
    {
      num: '01',
      title: 'Craftsmanship',
      desc: 'We take pride in every detail. Clean, strong, and beautiful welds that last for decades — built right the first time.',
    },
    {
      num: '02',
      title: 'Reliability',
      desc: 'On-time delivery and honest communication. You can count on us to show up, do the work, and get it done right.',
    },
    {
      num: '03',
      title: 'Customer Focus',
      desc: 'We listen first. Then we deliver practical, cost-effective solutions that exceed expectations on every job.',
    },
  ];

  const timeline = [
    { year: '1999', event: 'HotFab Welding founded in Warren, Michigan by a family with a trade and a mission.' },
    { year: '2005', event: 'Expanded into commercial & industrial fabrication, serving Metro Detroit businesses.' },
    { year: '2012', event: 'Launched full mobile welding unit — bringing the shop directly to client sites.' },
    { year: '2024', event: '25+ years, 2,000+ projects, and still family-owned. Still building things that last.' },
  ];

  return (
    <>
      <style>{`
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
        }

        .ab-wrap {
          font-family: 'Barlow', sans-serif;
          background: var(--iron);
          color: var(--white);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .ab-hero {
          position: relative;
          min-height: 70vh;
          display: flex; align-items: flex-end;
          overflow: hidden;
          padding: 0 48px 80px;
        }
        .ab-hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80');
          background-size: cover; background-position: center 30%;
          filter: brightness(0.18) saturate(0.5);
        }
        .ab-hero-tint {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.2) 60%, transparent 100%);
        }
        .ab-hero-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge), transparent);
        }
        .ab-hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .ab-hero-inner {
          position: relative; z-index: 1;
          max-width: 1100px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 40px;
        }
        .ab-hero-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .ab-hero-tag::before { content: ''; width: 32px; height: 1px; background: var(--forge); display: block; }
        .ab-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 10vw, 128px);
          line-height: 0.9; letter-spacing: 0.01em;
          color: var(--white);
        }
        .ab-hero-title em { color: var(--forge); font-style: normal; display: block; }
        .ab-hero-sub {
          font-size: 17px; font-weight: 300; color: var(--ash);
          line-height: 1.8; margin-top: 28px; max-width: 520px;
        }
        .ab-hero-badge {
          flex-shrink: 0; text-align: center;
          width: 130px; height: 130px;
          border: 1px solid rgba(200,65,10,0.4);
          background: rgba(200,65,10,0.08);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 4px;
        }
        .ab-hero-badge-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px; line-height: 1; color: var(--white);
        }
        .ab-hero-badge-num span { color: var(--forge); }
        .ab-hero-badge-label {
          font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--smoke); text-align: center; line-height: 1.4;
        }

        /* ── STORY ── */
        .ab-story {
          background: var(--iron); padding: 120px 48px;
          position: relative;
        }
        .ab-story-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start;
        }
        .ab-section-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 20px; display: block;
        }
        .ab-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 5.5vw, 72px); line-height: 1;
          color: var(--white); margin-bottom: 36px;
        }
        .ab-story-text {
          font-size: 15px; line-height: 1.9; color: var(--ash);
          font-weight: 300;
        }
        .ab-story-text p + p { margin-top: 20px; }
        .ab-story-text strong { color: var(--white); font-weight: 500; }

        /* Stats panel */
        .ab-story-panel {
          border: 1px solid var(--slag);
          background: var(--steel);
          position: relative;
        }
        .ab-story-panel::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: var(--forge);
        }
        .ab-panel-top {
          padding: 44px 44px 36px;
          border-bottom: 1px solid var(--slag);
        }
        .ab-panel-label {
          font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--smoke); margin-bottom: 12px;
        }
        .ab-panel-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px; line-height: 1.1; color: var(--white);
        }
        .ab-panel-headline span { color: var(--forge); }
        .ab-stats-row {
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--slag);
        }
        .ab-stat {
          padding: 36px 44px;
          border-right: 1px solid var(--slag);
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px; line-height: 1; color: var(--white); margin-bottom: 6px;
        }
        .ab-stat-num span { color: var(--forge); }
        .ab-stat-label {
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--smoke);
        }
        .ab-panel-cta {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 44px;
          border-top: 1px solid var(--slag);
          font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--ash); text-decoration: none;
          transition: color 0.2s;
        }
        .ab-panel-cta:hover { color: var(--forge); }

        /* ── TIMELINE ── */
        .ab-timeline {
          background: var(--steel); padding: 100px 48px;
          position: relative;
        }
        .ab-timeline::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--slag), transparent);
        }
        .ab-timeline-inner { max-width: 1100px; margin: 0 auto; }
        .ab-timeline-header { margin-bottom: 72px; }
        .ab-tl-track {
          position: relative;
          padding-left: 2px;
        }
        .ab-tl-track::before {
          content: '';
          position: absolute; top: 0; bottom: 0; left: 0; width: 1px;
          background: linear-gradient(to bottom, var(--forge), var(--slag));
        }
        .ab-tl-item {
          display: grid; grid-template-columns: 100px 1fr;
          gap: 40px; padding: 40px 0 40px 48px;
          border-bottom: 1px solid var(--slag);
          position: relative;
        }
        .ab-tl-item:last-child { border-bottom: none; }
        .ab-tl-item::before {
          content: '';
          position: absolute; left: -5px; top: 50%; transform: translateY(-50%);
          width: 10px; height: 10px;
          background: var(--forge); border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(200,65,10,0.2);
        }
        .ab-tl-year {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px; color: var(--forge); line-height: 1; padding-top: 2px;
        }
        .ab-tl-event {
          font-size: 16px; line-height: 1.7; color: var(--ash);
          font-weight: 300; padding-top: 4px;
        }

        /* ── VALUES ── */
        .ab-values {
          background: var(--iron); padding: 100px 48px;
        }
        .ab-values-inner { max-width: 1100px; margin: 0 auto; }
        .ab-values-header {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: end; margin-bottom: 72px;
        }
        .ab-values-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; background: var(--slag);
        }
        .ab-value-card {
          background: var(--steel); padding: 52px 40px;
          position: relative; overflow: hidden;
          transition: background 0.3s;
        }
        .ab-value-card:hover { background: #1f1f1f; }
        .ab-value-card::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--forge); transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ab-value-card:hover::after { transform: scaleX(1); }
        .ab-value-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 72px; line-height: 1;
          color: var(--slag); margin-bottom: 28px;
          transition: color 0.3s;
        }
        .ab-value-card:hover .ab-value-num { color: rgba(200,65,10,0.25); }
        .ab-value-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px; letter-spacing: 1px;
          color: var(--white); margin-bottom: 16px;
        }
        .ab-value-desc {
          font-size: 14px; line-height: 1.8; color: var(--smoke); font-weight: 300;
        }

        /* ── CAPABILITIES ── */
        .ab-caps {
          background: var(--steel); padding: 100px 48px;
          position: relative; overflow: hidden;
        }
        .ab-caps::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--slag), transparent);
        }
        .ab-caps-watermark {
          position: absolute; bottom: -40px; right: -20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 240px; line-height: 1; color: rgba(255,255,255,0.015);
          pointer-events: none; user-select: none; white-space: nowrap;
        }
        .ab-caps-inner { max-width: 1100px; margin: 0 auto; }
        .ab-caps-header {
          display: grid; grid-template-columns: 1fr auto; align-items: end; margin-bottom: 64px;
        }
        .ab-caps-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 2px; background: var(--slag);
        }
        .ab-cap-item {
          background: var(--steel); padding: 32px 28px;
          position: relative; cursor: default;
          transition: background 0.25s;
        }
        .ab-cap-item:hover { background: #202020; }
        .ab-cap-item::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
          background: var(--forge); transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.35s ease;
        }
        .ab-cap-item:hover::before { transform: scaleY(1); }
        .ab-cap-dash {
          font-size: 10px; color: var(--forge); letter-spacing: 2px; margin-bottom: 10px;
        }
        .ab-cap-name {
          font-size: 15px; font-weight: 500; color: var(--ash);
          transition: color 0.25s;
        }
        .ab-cap-item:hover .ab-cap-name { color: var(--white); }

        /* ── CTA ── */
        .ab-cta {
          background: var(--iron); padding: 140px 48px;
          position: relative; overflow: hidden;
        }
        .ab-cta-line {
          position: absolute; top: 50%; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent 0%, var(--forge) 30%, var(--forge) 70%, transparent 100%);
          transform: translateY(-50%);
        }
        .ab-cta-inner {
          max-width: 860px; margin: 0 auto;
          background: var(--steel); border: 1px solid var(--slag);
          padding: 80px; text-align: center;
          position: relative; z-index: 1;
        }
        .ab-cta-inner::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 80px; height: 3px; background: var(--forge);
        }
        .ab-cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 84px); line-height: 0.95;
          color: var(--white); margin-bottom: 24px;
        }
        .ab-cta-title span { color: var(--forge); }
        .ab-cta-sub {
          font-size: 17px; color: var(--smoke); line-height: 1.8;
          font-weight: 300; margin-bottom: 52px;
        }
        .ab-cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .ab-btn-primary {
          background: var(--forge); color: var(--white);
          padding: 18px 48px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--forge);
          transition: all 0.2s;
        }
        .ab-btn-primary:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .ab-btn-ghost {
          background: transparent; color: var(--white);
          padding: 18px 48px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--slag);
          transition: all 0.2s;
        }
        .ab-btn-ghost:hover { border-color: var(--white); }
        .ab-cta-phone {
          margin-top: 40px; display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px; letter-spacing: 2px;
          color: var(--white); text-decoration: none; transition: color 0.2s;
        }
        .ab-cta-phone:hover { color: var(--forge); }
        .ab-cta-note {
          font-size: 11px; color: var(--smoke); letter-spacing: 2px;
          text-transform: uppercase; margin-top: 8px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ab-hero { padding: 0 24px 60px; min-height: 80vh; }
          .ab-hero-inner { grid-template-columns: 1fr; }
          .ab-hero-badge { display: none; }
          .ab-story { padding: 80px 24px; }
          .ab-story-inner { grid-template-columns: 1fr; gap: 52px; }
          .ab-timeline { padding: 80px 24px; }
          .ab-values { padding: 80px 24px; }
          .ab-values-header { grid-template-columns: 1fr; gap: 16px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-caps { padding: 80px 24px; }
          .ab-caps-header { grid-template-columns: 1fr; }
          .ab-caps-grid { grid-template-columns: 1fr 1fr; }
          .ab-cta { padding: 80px 24px; }
          .ab-cta-inner { padding: 52px 28px; }
        }
        @media (max-width: 540px) {
          .ab-caps-grid { grid-template-columns: 1fr; }
          .ab-tl-item { grid-template-columns: 72px 1fr; gap: 20px; padding-left: 32px; }
        }
      `}</style>

      <div className="ab-wrap">

        {/* ── HERO ── */}
        <section className="ab-hero">
          <div className="ab-hero-bg" />
          <div className="ab-hero-tint" />
          <div className="ab-hero-top-line" />
          <div className="ab-hero-grain" />
          <div className="ab-hero-inner">
            <div>
              <div className="ab-hero-tag">Family Owned · Warren, MI · Est. 1999</div>
              <h1 className="ab-hero-title">
                About
                <em>HotFab</em>
              </h1>
              <p className="ab-hero-sub">
                We didn't build a business — we built a reputation. Over 25 years of honest work, skilled hands, and metalwork Michigan trusts.
              </p>
            </div>
            <div className="ab-hero-badge">
              <div className="ab-hero-badge-num">25<span>+</span></div>
              <div className="ab-hero-badge-label">Years of<br />Excellence</div>
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="ab-story">
          <div className="ab-story-inner">
            <div>
              <span className="ab-section-tag">Our Story</span>
              <h2 className="ab-section-title">Built on<br />Honest Work</h2>
              <div className="ab-story-text">
                <p>
                  HotFab Welding was founded with a simple mission: to deliver <strong>high-quality welding and custom metal fabrication</strong> with honesty, precision, and outstanding customer service.
                </p>
                <p>
                  What started as a small family operation has grown into a <strong>trusted name across Michigan</strong>. For more than 25 years, we have proudly served residential, commercial, and industrial clients throughout the Metro Detroit area and beyond.
                </p>
                <p>
                  As a family-owned business, we treat every project like it's our own. Whether it's a small repair or a large-scale custom fabrication job, you can expect the <strong>same level of care and attention to detail</strong> — every single time.
                </p>
              </div>
            </div>

            <div className="ab-story-panel">
              <div className="ab-panel-top">
                <div className="ab-panel-label">Who We Are</div>
                <div className="ab-panel-headline">
                  Family Owned<br />&amp; <span>Operated</span>
                </div>
              </div>
              <div className="ab-stats-row">
                <div className="ab-stat">
                  <div className="ab-stat-num">25<span>+</span></div>
                  <div className="ab-stat-label">Years Experience</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">2K<span>+</span></div>
                  <div className="ab-stat-label">Projects Done</div>
                </div>
              </div>
              <div className="ab-stats-row" style={{borderTop:'1px solid var(--slag)'}}>
                <div className="ab-stat">
                  <div className="ab-stat-num">3</div>
                  <div className="ab-stat-label">Metal Types</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">5<span>★</span></div>
                  <div className="ab-stat-label">Google Rating</div>
                </div>
              </div>
              <Link href="/contact" className="ab-panel-cta">
                Get a Free Quote <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="ab-timeline">
          <div className="ab-timeline-inner">
            <div className="ab-timeline-header">
              <span className="ab-section-tag">Our History</span>
              <h2 className="ab-section-title">25 Years<br />In the Making</h2>
            </div>
            <div className="ab-tl-track">
              {timeline.map((item, i) => (
                <div key={i} className="ab-tl-item">
                  <div className="ab-tl-year">{item.year}</div>
                  <p className="ab-tl-event">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="ab-values">
          <div className="ab-values-inner">
            <div className="ab-values-header">
              <div>
                <span className="ab-section-tag">What Sets Us Apart</span>
                <h2 className="ab-section-title">Our Core<br />Values</h2>
              </div>
              <p style={{fontSize:'15px', color:'var(--smoke)', lineHeight:'1.8', fontWeight:300, maxWidth:'340px'}}>
                These aren't slogans. They're the principles that guide every weld, every client call, and every project we take on.
              </p>
            </div>
            <div className="ab-values-grid">
              {values.map((v, i) => (
                <div key={i} className="ab-value-card">
                  <div className="ab-value-num">{v.num}</div>
                  <div className="ab-value-title">{v.title}</div>
                  <p className="ab-value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section className="ab-caps">
          <div className="ab-caps-watermark">FORGE</div>
          <div className="ab-caps-inner">
            <div className="ab-caps-header">
              <div>
                <span className="ab-section-tag">Our Expertise</span>
                <h2 className="ab-section-title">Capabilities</h2>
              </div>
            </div>
            <div className="ab-caps-grid">
              {capabilities.map((cap, i) => (
                <div key={i} className="ab-cap-item">
                  <div className="ab-cap-dash">—</div>
                  <div className="ab-cap-name">{cap}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ab-cta">
          <div className="ab-cta-line" />
          <div className="ab-cta-inner">
            <h2 className="ab-cta-title">
              Let's Build<br />Something <span>Strong</span>
            </h2>
            <p className="ab-cta-sub">
              Whether you need a simple repair or a complex custom metal project — our experienced team is ready to help.
            </p>
            <div className="ab-cta-actions">
              <a href="tel:2482599956" className="ab-btn-primary">☎ Call Us Now</a>
              <Link href="/contact" className="ab-btn-ghost">Get In Touch →</Link>
            </div>
            <a href="tel:2482599956" className="ab-cta-phone">(248) 259-9956</a>
            <p className="ab-cta-note">Available Mon–Sat · Free Estimates · No Obligation</p>
          </div>
        </section>

      </div>
    </>
  );
}