import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');

        :root {
          --forge: #C8410A;
          --forge-light: #E85D1A;
          --iron: #0D0D0D;
          --steel: #1A1A1A;
          --slag: #2C2C2C;
          --smoke: #6B6B6B;
          --ash: #B0B0B0;
          --white: #F5F3EF;
          --cream: #EDE9E1;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Barlow', sans-serif;
          background: var(--iron);
          color: var(--white);
          overflow-x: hidden;
        }

        .display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 48px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.85), transparent);
          backdrop-filter: blur(0px);
        }
        .nav-logo { font-family: 'Bebas Neue', sans-serif; font-size: 28px; letter-spacing: 3px; color: var(--white); text-decoration: none; }
        .nav-logo span { color: var(--forge); }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a { color: var(--ash); font-size: 13px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--white); }
        .nav-cta {
          background: var(--forge); color: var(--white); padding: 10px 24px;
          font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: var(--forge-light); }

        /* ── HERO ── */
        .hero {
          position: relative; min-height: 100vh;
          display: grid; place-items: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5eb5e6c8?w=1800&q=80');
          background-size: cover; background-position: center;
          filter: brightness(0.22) saturate(0.6);
        }
        .hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; opacity: 0.5;
        }
        .hero-glow {
          position: absolute; bottom: -100px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(200,65,10,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content { position: relative; z-index: 2; text-align: center; padding: 0 24px; max-width: 1100px; }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 32px;
        }
        .hero-eyebrow::before, .hero-eyebrow::after {
          content: ''; display: block; width: 40px; height: 1px; background: var(--forge);
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 11vw, 148px);
          line-height: 0.92;
          letter-spacing: 0.01em;
          color: var(--white);
          margin-bottom: 32px;
        }
        .hero-title .accent { color: var(--forge); }

        .hero-sub {
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 300;
          color: var(--ash);
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 52px;
        }

        .hero-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .btn-primary {
          background: var(--forge); color: var(--white);
          padding: 18px 44px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--forge);
          transition: all 0.2s; display: inline-block;
        }
        .btn-primary:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .btn-ghost {
          background: transparent; color: var(--white);
          padding: 18px 44px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid rgba(255,255,255,0.3);
          transition: all 0.2s; display: inline-block;
        }
        .btn-ghost:hover { border-color: var(--white); background: rgba(255,255,255,0.05); }

        .hero-scroll {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--smoke);
          animation: bounceY 2s ease-in-out infinite;
        }
        .scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, var(--forge), transparent);
        }
        @keyframes bounceY { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }

        /* ── TRUST STRIP ── */
        .trust-strip {
          background: var(--forge);
          padding: 0;
          overflow: hidden;
        }
        .trust-ticker {
          display: flex; align-items: center;
          animation: ticker 20s linear infinite;
          white-space: nowrap;
        }
        .trust-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 18px 48px;
          font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          border-right: 1px solid rgba(255,255,255,0.2);
        }
        .trust-dot { width: 5px; height: 5px; background: rgba(255,255,255,0.5); border-radius: 50%; }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        /* ── STATS ── */
        .stats-section {
          background: var(--iron);
          padding: 100px 48px;
          position: relative;
        }
        .stats-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge), transparent);
        }
        .stats-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 0;
        }
        .stat-item {
          padding: 40px 48px;
          border-right: 1px solid var(--slag);
          text-align: center;
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 72px; line-height: 1;
          color: var(--white);
          margin-bottom: 8px;
        }
        .stat-num span { color: var(--forge); }
        .stat-label {
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--smoke);
        }

        /* ── SERVICES ── */
        .services-section {
          background: var(--steel);
          padding: 120px 48px;
        }
        .section-header { max-width: 1100px; margin: 0 auto 80px; }
        .section-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 20px; display: block;
        }
        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 6vw, 80px);
          line-height: 1;
          color: var(--white);
          max-width: 700px;
        }
        .section-title .line { display: block; }

        .services-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--slag);
        }
        .service-card {
          background: var(--steel);
          padding: 52px 40px;
          position: relative; overflow: hidden;
          transition: background 0.3s;
          text-decoration: none; display: block;
        }
        .service-card:hover { background: #202020; }
        .service-card::before {
          content: '';
          position: absolute; top: 0; left: 0; width: 3px; height: 0;
          background: var(--forge); transition: height 0.4s ease;
        }
        .service-card:hover::before { height: 100%; }

        .service-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px; line-height: 1;
          color: var(--slag); margin-bottom: 32px;
          transition: color 0.3s;
        }
        .service-card:hover .service-num { color: rgba(200,65,10,0.3); }

        .service-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 30px; letter-spacing: 1px;
          color: var(--white); margin-bottom: 16px;
        }
        .service-desc {
          font-size: 15px; line-height: 1.7;
          color: var(--smoke); font-weight: 300;
          margin-bottom: 32px;
        }
        .service-link {
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--forge); display: flex; align-items: center; gap: 8px;
        }
        .service-arrow { transition: transform 0.3s; }
        .service-card:hover .service-arrow { transform: translateX(6px); }

        /* ── WHY US ── */
        .why-section {
          background: var(--iron); padding: 120px 48px;
          position: relative; overflow: hidden;
        }
        .why-bg-text {
          position: absolute; top: 50%; left: -20px; transform: translateY(-50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 300px; line-height: 1;
          color: rgba(255,255,255,0.018);
          pointer-events: none; white-space: nowrap;
          user-select: none;
        }
        .why-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center;
        }
        .why-image-wrap {
          position: relative;
        }
        .why-image-frame {
          position: relative;
          border: 1px solid var(--slag);
        }
        .why-image-frame::before {
          content: '';
          position: absolute; top: -16px; left: -16px; right: 16px; bottom: 16px;
          border: 1px solid var(--forge); z-index: 0;
        }
        .why-image-frame img {
          position: relative; z-index: 1;
          width: 100%; display: block;
          filter: brightness(0.85) saturate(0.7);
        }
        .why-badge {
          position: absolute; bottom: -24px; right: -24px;
          width: 120px; height: 120px;
          background: var(--forge);
          border-radius: 50%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 2;
        }
        .why-badge-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px; line-height: 1; color: var(--white);
        }
        .why-badge-text {
          font-size: 9px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
          color: rgba(255,255,255,0.8); text-align: center; line-height: 1.3;
        }

        .why-list { list-style: none; margin-top: 48px; }
        .why-item {
          display: flex; gap: 24px; padding: 28px 0;
          border-bottom: 1px solid var(--slag);
        }
        .why-item:first-child { border-top: 1px solid var(--slag); }
        .why-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          border: 1px solid var(--forge);
          display: flex; align-items: center; justify-content: center;
          color: var(--forge); font-size: 18px;
        }
        .why-item-title {
          font-weight: 600; font-size: 17px; color: var(--white); margin-bottom: 6px;
        }
        .why-item-desc { font-size: 14px; color: var(--smoke); line-height: 1.6; font-weight: 300; }

        /* ── SOCIAL PROOF ── */
        .proof-section {
          background: var(--steel); padding: 120px 48px;
          position: relative;
        }
        .proof-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--slag), transparent);
        }
        .proof-inner { max-width: 1100px; margin: 0 auto; }
        .proof-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 64px; }
        .proof-stars {
          display: flex; gap: 4px; margin-bottom: 12px;
        }
        .star { color: var(--forge); font-size: 18px; }

        .reviews-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
          background: var(--slag);
        }
        .review-card {
          background: var(--steel); padding: 40px 36px;
        }
        .review-stars { display: flex; gap: 3px; margin-bottom: 20px; }
        .review-text {
          font-size: 15px; line-height: 1.8; color: var(--ash);
          font-weight: 300; margin-bottom: 28px; font-style: italic;
        }
        .review-author { font-size: 13px; font-weight: 600; color: var(--white); letter-spacing: 0.5px; }
        .review-role { font-size: 12px; color: var(--smoke); margin-top: 2px; }

        /* ── CTA ── */
        .cta-section {
          background: var(--iron);
          padding: 140px 48px;
          position: relative; overflow: hidden;
        }
        .cta-bg-line {
          position: absolute; top: 50%; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent 0%, var(--forge) 30%, var(--forge) 70%, transparent 100%);
          transform: translateY(-50%);
        }
        .cta-inner {
          max-width: 900px; margin: 0 auto;
          background: var(--steel);
          border: 1px solid var(--slag);
          padding: 80px;
          text-align: center;
          position: relative; z-index: 1;
        }
        .cta-inner::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 80px; height: 3px; background: var(--forge);
        }
        .cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 80px); line-height: 1;
          color: var(--white); margin-bottom: 24px;
        }
        .cta-sub {
          font-size: 17px; color: var(--smoke); font-weight: 300;
          line-height: 1.7; margin-bottom: 52px;
        }
        .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .btn-forge {
          background: var(--forge); color: var(--white);
          padding: 20px 52px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--forge);
          transition: all 0.2s; display: inline-flex; align-items: center; gap: 10px;
        }
        .btn-forge:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .btn-outline {
          background: transparent; color: var(--white);
          padding: 20px 52px; font-size: 13px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--slag);
          transition: all 0.2s; display: inline-flex; align-items: center; gap: 10px;
        }
        .btn-outline:hover { border-color: var(--white); }

        .cta-phone {
          margin-top: 40px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 42px; letter-spacing: 2px;
          color: var(--white);
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        .cta-phone:hover { color: var(--forge); }
        .cta-phone-label {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--smoke); margin-top: 4px; display: block;
        }

        /* ── FOOTER ── */
        .footer {
          background: #080808; padding: 60px 48px;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;
          border-top: 1px solid var(--slag);
        }
        .footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 3px; color: var(--ash); }
        .footer-logo span { color: var(--forge); }
        .footer-copy { font-size: 12px; color: var(--smoke); letter-spacing: 1px; }
        .footer-links { display: flex; gap: 28px; }
        .footer-links a { font-size: 12px; color: var(--smoke); text-decoration: none; letter-spacing: 1px; transition: color 0.2s; }
        .footer-links a:hover { color: var(--ash); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .stat-item:nth-child(2) { border-right: none; }
          .services-grid { grid-template-columns: 1fr; }
          .why-inner { grid-template-columns: 1fr; gap: 60px; }
          .reviews-grid { grid-template-columns: 1fr; }
          .cta-inner { padding: 52px 32px; }
          .proof-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .footer { flex-direction: column; text-align: center; padding: 48px 24px; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
          .services-section, .why-section, .proof-section, .stats-section, .cta-section { padding-left: 24px; padding-right: 24px; }
        }
      `}</style>

      {/* NAV */}
      {/* <nav className="nav">
        <a href="/" className="nav-logo">Hot<span>Fab</span></a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="tel:2482599956" className="nav-cta">Call Now</a>
      </nav> */}

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="hero-eyebrow">Warren, Michigan · Est. 1999</div>

          <h1 className="hero-title">
            Forged in<br/>
            <span className="accent">Steel.</span><br/>
            Built to Last.
          </h1>

          <p className="hero-sub">
            Michigan's trusted family welders — delivering precision fabrication,
            custom metalwork, and on-site repairs for over 25 years.
          </p>

          <div className="hero-actions">
            <a href="/services" className="btn-primary">Explore Services</a>
            <a href="tel:2482599956" className="btn-ghost">Call (248) 259-9956</a>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* TRUST TICKER */}
      <div className="trust-strip">
        <div className="trust-ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{display:'flex'}}>
              {['25+ Years Experience','Mobile On-Site Service','Steel · Stainless · Aluminum','Licensed & Insured','Free Project Quotes','Warren, Michigan','Residential & Commercial','Emergency Repairs'].map((item, j) => (
                <span key={j} className="trust-item">
                  <span className="trust-dot" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-num">25<span>+</span></div>
            <div className="stat-label">Years in Business</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2K<span>+</span></div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3</div>
            <div className="stat-label">Metal Specialties</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5<span>★</span></div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">
            <span className="line">Precision Metal</span>
            <span className="line">Work You Can</span>
            <span className="line" style={{color:'var(--forge)'}}>Depend On</span>
          </h2>
        </div>

        <div className="services-grid">
          <a href="/services" className="service-card">
            <div className="service-num">01</div>
            <div className="service-name">Custom Fabrication</div>
            <p className="service-desc">
              Railings, gates, fences, grates, structural steel, and decorative metalwork designed and built to your exact spec.
            </p>
            <div className="service-link">Learn More <span className="service-arrow">→</span></div>
          </a>

          <a href="/services" className="service-card">
            <div className="service-num">02</div>
            <div className="service-name">Specialty Solutions</div>
            <p className="service-desc">
              Storm shields, security panels, prototypes, and artistic metal installations built for unique challenges.
            </p>
            <div className="service-link">Learn More <span className="service-arrow">→</span></div>
          </a>

          <a href="/services" className="service-card">
            <div className="service-num">03</div>
            <div className="service-name">Mobile On-Site Welding</div>
            <p className="service-desc">
              We bring the shop to you. Full mobile welding team for repairs and installations at your location across Michigan.
            </p>
            <div className="service-link">Learn More <span className="service-arrow">→</span></div>
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section">
        <div className="why-bg-text">HOTFAB</div>
        <div className="why-inner">
          <div className="why-image-wrap">
            <div className="why-image-frame">
              <img
                src="https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279/exterior-stair-railing-fabrication-warren.jpg"
                alt="HotFab Welding professional welder fabricating custom metalwork in Warren, Michigan"
              />
            </div>
            <div className="why-badge">
              <div className="why-badge-num">25</div>
              <div className="why-badge-text">Years<br/>Trusted</div>
            </div>
          </div>

          <div>
            <span className="section-tag">Why Choose Us</span>
            <h2 style={{fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(44px,5vw,68px)', lineHeight:1, color:'var(--white)', marginBottom:'16px', marginTop:'12px'}}>
              Michigan's Most<br/>
              <span style={{color:'var(--forge)'}}>Trusted Welders</span>
            </h2>
            <p style={{fontSize:'15px', color:'var(--smoke)', lineHeight:'1.8', fontWeight:300, marginBottom:'8px'}}>
              Family-owned since 1999, we've built our reputation one weld at a time — with quality, reliability, and personal service on every job.
            </p>

            <ul className="why-list">
              <li className="why-item">
                <div className="why-icon">👨‍👩‍👧‍👦</div>
                <div>
                  <div className="why-item-title">Family Owned & Operated</div>
                  <div className="why-item-desc">Over 25 years of dedicated service with personal attention on every single project, big or small.</div>
                </div>
              </li>
              <li className="why-item">
                <div className="why-icon">🔨</div>
                <div>
                  <div className="why-item-title">Certified Welding Expertise</div>
                  <div className="why-item-desc">Skilled in steel, stainless steel, and aluminum — with the precision and experience your project deserves.</div>
                </div>
              </li>
              <li className="why-item">
                <div className="why-icon">🚀</div>
                <div>
                  <div className="why-item-title">Fast Turnaround, Zero Compromise</div>
                  <div className="why-item-desc">From emergency repairs to large custom fabrications — delivered on time and built to last.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="proof-section">
        <div className="proof-inner">
          <div className="proof-header">
            <div>
              <span className="section-tag">Client Reviews</span>
              <h2 style={{fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(44px,5vw,68px)', lineHeight:1, color:'var(--white)', marginTop:'8px'}}>
                What Our Clients Say
              </h2>
            </div>
            <div style={{textAlign:'right'}}>
              <div className="proof-stars">
                {[...Array(5)].map((_,i) => <span key={i} className="star">★</span>)}
              </div>
              <div style={{fontSize:'13px', color:'var(--smoke)', letterSpacing:'1px'}}>5.0 · Google Reviews</div>
            </div>
          </div>

          <div className="reviews-grid">
            {[
              { text: "HotFab installed custom railings on our commercial property and the quality is outstanding. They showed up on time, communicated throughout, and the finished product is flawless. Highly recommend.", author: "David R.", role: "Commercial Property Owner" },
              { text: "Called them for an emergency repair on a Saturday morning. They had a crew out within hours. Fast, professional, and the weld is solid. This is the only welding company I'll ever call.", author: "Maria S.", role: "Homeowner, Sterling Heights" },
              { text: "We've used HotFab for three industrial projects now. Their precision on structural steel is second to none. Family-run but operates with the professionalism of a much larger outfit.", author: "Tom K.", role: "Plant Manager" },
            ].map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {[...Array(5)].map((_,j) => <span key={j} style={{color:'var(--forge)', fontSize:'14px'}}>★</span>)}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">{r.author}</div>
                <div className="review-role">{r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg-line" />
        <div className="cta-inner">
          <h2 className="cta-title">Ready to Build<br/>Something Great?</h2>
          <p className="cta-sub">
            Get a free, no-obligation quote for your welding or metal fabrication project.
            Residential, commercial, and industrial clients welcome.
          </p>
          <div className="cta-actions">
            <a href="tel:2482599956" className="btn-forge">☎ Call Us Now</a>
            <a href="/contact" className="btn-outline">Request a Quote →</a>
          </div>
          <a href="tel:2482599956" className="cta-phone">(248) 259-9956</a>
          <span className="cta-phone-label">Available Mon–Sat · Free Estimates</span>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="footer">
        <div className="footer-logo">Hot<span>Fab</span> Welding</div>
        <div className="footer-copy">© 2024 HotFab Welding · Warren, Michigan · All Rights Reserved</div>
        <div className="footer-links">
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="tel:2482599956">(248) 259-9956</a>
        </div>
      </footer> */}
    </>
  );
}