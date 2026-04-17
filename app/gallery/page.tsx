'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = [
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=193,fit=crop,trim=106.14634146341464;0;380.8780487804878;0/Z8a0FiwOwBsnBFYS/6709774811281166854-YX4jJkNJVDTnoqZK.jpeg',
    label: 'Custom Fabrication',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=204,fit=crop,trim=0;0;468.2926829268293;0/Z8a0FiwOwBsnBFYS/gemini_generated_image_5agh835agh835agh-Bk8oiAmOv3unIlVx.png',
    label: 'Metal Work',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=211,fit=crop/Z8a0FiwOwBsnBFYS/img_2215-A0x1qbR68Wikyv61.jpeg',
    label: 'On-Site Welding',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=226,fit=crop,trim=51.4337899543379;0;51.4337899543379;0/Z8a0FiwOwBsnBFYS/chatgpt-image-oct-16-2025-09_06_26-am-Awv8Kx580vFGLoJB.png',
    label: 'Structural Steel',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=226,fit=crop/Z8a0FiwOwBsnBFYS/5221902149583762384-dJoPaX9a3BI9W4WM.jpeg',
    label: 'Gate & Railing',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=229,fit=crop/Z8a0FiwOwBsnBFYS/3006198996034540253-YrDWXJDg3QCEkD0A.jpeg',
    label: 'Custom Metalwork',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=229,fit=crop/Z8a0FiwOwBsnBFYS/4050524421052571801-Aq2GprRpkvIx4VRJ.jpeg',
    label: 'Fabrication',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=238,fit=crop,trim=0;0;237.26829268292684;0/Z8a0FiwOwBsnBFYS/8397265885899164016-YD0EMNWMqgFPVjWV.jpeg',
    label: 'Industrial Work',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=247,fit=crop/Z8a0FiwOwBsnBFYS/1679635531277922777-Awv4P95bMosNn7KQ.jpeg',
    label: 'Steel Work',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=247,fit=crop/Z8a0FiwOwBsnBFYS/img_2227-YbNqG5EPgzF7PJqE.jpeg',
    label: 'Field Installation',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=257,fit=crop/Z8a0FiwOwBsnBFYS/img_2219-YZ9x5p16vEF2OGgE.jpeg',
    label: 'Mobile Welding',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=258,fit=crop/Z8a0FiwOwBsnBFYS/5987388972269394560-dWxv0OJ2p3irJ1Ro.jpeg',
    label: 'Precision Welding',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=268,fit=crop,trim=0;0;35.1219512195122;0/Z8a0FiwOwBsnBFYS/img_0012-AE0rlBJNMjTrDrLG.JPG',
    label: 'Project Completion',
  },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % images.length : null));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setLightbox(null);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600&display=swap');

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

        .gl-wrap {
          font-family: 'Barlow', sans-serif;
          background: var(--iron);
          color: var(--white);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .gl-hero {
          position: relative;
          padding: 160px 48px 96px;
          overflow: hidden;
        }
        .gl-hero-line {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge), transparent);
        }
        .gl-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px);
          background-size: 72px 72px; pointer-events: none;
        }
        .gl-hero-glow {
          position: absolute; bottom: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 320px;
          background: radial-gradient(ellipse, rgba(200,65,10,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .gl-hero-inner {
          max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 48px;
        }
        .gl-hero-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .gl-hero-tag::before { content: ''; width: 32px; height: 1px; background: var(--forge); display: block; }
        .gl-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 10vw, 120px);
          line-height: 0.9; color: var(--white);
        }
        .gl-hero-title em { color: var(--forge); font-style: normal; }
        .gl-hero-sub {
          font-size: 17px; font-weight: 300; color: var(--ash);
          line-height: 1.8; margin-top: 28px; max-width: 500px;
        }
        .gl-hero-badge {
          flex-shrink: 0; border: 1px solid var(--slag);
          background: var(--steel); padding: 28px 36px; text-align: center;
        }
        .gl-hero-badge-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px; line-height: 1; color: var(--white);
        }
        .gl-hero-badge-num span { color: var(--forge); }
        .gl-hero-badge-label {
          font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--smoke); margin-top: 6px;
        }

        /* ── MASONRY GRID ── */
        .gl-section {
          padding: 0 48px 120px;
        }
        .gl-inner { max-width: 1100px; margin: 0 auto; }

        .gl-grid-label {
          font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 40px;
          display: flex; align-items: center; gap: 12px;
        }
        .gl-grid-label::after { content: ''; flex: 1; height: 1px; background: var(--slag); }

        /* CSS columns masonry */
        .gl-masonry {
          columns: 3;
          column-gap: 3px;
        }

        .gl-item {
          break-inside: avoid;
          margin-bottom: 3px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: block;
          background: var(--steel);
        }

        /* Left-edge reveal on hover */
        .gl-item::before {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0; width: 2px;
          background: var(--forge); z-index: 3;
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.4s ease;
        }
        .gl-item:hover::before { transform: scaleY(1); }

        .gl-item img {
          width: 100%; display: block;
          filter: brightness(0.75) saturate(0.5);
          transition: filter 0.5s ease, transform 0.6s ease;
        }
        .gl-item:hover img {
          filter: brightness(0.95) saturate(0.85);
          transform: scale(1.04);
        }

        /* Hover overlay */
        .gl-item-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.4s ease;
          z-index: 2;
          display: flex; align-items: flex-end; padding: 20px;
        }
        .gl-item:hover .gl-item-overlay { opacity: 1; }
        .gl-item-label {
          font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--white); display: flex; align-items: center; gap: 8px;
        }
        .gl-item-label::before { content: ''; width: 16px; height: 1px; background: var(--forge); display: block; }

        /* Expand icon */
        .gl-item-expand {
          position: absolute; top: 16px; right: 16px; z-index: 3;
          width: 32px; height: 32px; border: 1px solid rgba(200,65,10,0.6);
          background: rgba(13,13,13,0.7);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; color: var(--forge);
          opacity: 0; transform: scale(0.8);
          transition: opacity 0.3s, transform 0.3s;
        }
        .gl-item:hover .gl-item-expand {
          opacity: 1; transform: scale(1);
        }

        /* ── LIGHTBOX ── */
        .gl-lightbox {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.96);
          display: flex; align-items: center; justify-content: center;
          outline: none;
        }
        .gl-lb-close {
          position: absolute; top: 28px; right: 32px;
          background: none; border: 1px solid var(--slag); color: var(--ash);
          width: 44px; height: 44px; font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .gl-lb-close:hover { border-color: var(--forge); color: var(--forge); }

        .gl-lb-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: none; border: 1px solid var(--slag); color: var(--ash);
          width: 52px; height: 52px; font-size: 20px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .gl-lb-nav:hover { border-color: var(--forge); color: var(--forge); background: rgba(200,65,10,0.08); }
        .gl-lb-prev { left: 32px; }
        .gl-lb-next { right: 32px; }

        .gl-lb-img-wrap {
          max-width: 85vw; max-height: 82vh;
          position: relative;
        }
        .gl-lb-img-wrap img {
          max-width: 85vw; max-height: 82vh;
          object-fit: contain; display: block;
        }
        .gl-lb-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--forge);
        }

        .gl-lb-meta {
          position: absolute; bottom: -44px; left: 0; right: 0;
          display: flex; align-items: center; justify-content: space-between;
        }
        .gl-lb-label {
          font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--forge); display: flex; align-items: center; gap: 10px;
        }
        .gl-lb-label::before { content: ''; width: 20px; height: 1px; background: var(--forge); display: block; }
        .gl-lb-counter {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px; color: var(--smoke);
          letter-spacing: 2px;
        }
        .gl-lb-counter span { color: var(--white); }

        /* ── CTA ── */
        .gl-cta {
          background: var(--steel); padding: 80px 48px;
          border-top: 1px solid var(--slag); position: relative;
        }
        .gl-cta::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge) 40%, var(--forge) 60%, transparent);
        }
        .gl-cta-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap;
        }
        .gl-cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px; line-height: 1; color: var(--white);
        }
        .gl-cta-title span { color: var(--forge); }
        .gl-cta-sub { font-size: 14px; color: var(--smoke); font-weight: 300; margin-top: 6px; }
        .gl-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .gl-btn-primary {
          background: var(--forge); color: var(--white);
          padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--forge);
          transition: all 0.2s; white-space: nowrap;
        }
        .gl-btn-primary:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .gl-btn-ghost {
          background: transparent; color: var(--white);
          padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--slag);
          transition: all 0.2s; white-space: nowrap;
        }
        .gl-btn-ghost:hover { border-color: var(--white); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .gl-hero { padding: 140px 24px 72px; }
          .gl-hero-inner { grid-template-columns: 1fr; }
          .gl-hero-badge { display: none; }
          .gl-section { padding: 0 16px 80px; }
          .gl-masonry { columns: 2; }
          .gl-lb-prev { left: 12px; }
          .gl-lb-next { right: 12px; }
          .gl-lb-nav { width: 40px; height: 40px; font-size: 16px; }
          .gl-cta { padding: 60px 24px; }
          .gl-cta-inner { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .gl-masonry { columns: 1; }
        }
      `}</style>

      <div className="gl-wrap">

        {/* ── HERO ── */}
        <section className="gl-hero">
          <div className="gl-hero-line" />
          <div className="gl-hero-grid" />
          <div className="gl-hero-glow" />
          <div className="gl-hero-inner">
            <div>
              <div className="gl-hero-tag">Real Work. Real Welds.</div>
              <h1 className="gl-hero-title">
                Our <em>Work</em>
              </h1>
              <p className="gl-hero-sub">
                Every photo is a project we're proud of — custom fabrication, on-site installs, and precision metalwork delivered across Michigan.
              </p>
            </div>
            <div className="gl-hero-badge">
              <div className="gl-hero-badge-num">{images.length}<span>+</span></div>
              <div className="gl-hero-badge-label">Projects<br />Shown</div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="gl-section">
          <div className="gl-inner">
            <div className="gl-grid-label">Project Gallery</div>
            <div className="gl-masonry">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="gl-item"
                  onClick={() => setLightbox(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.label}`}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
                >
                  <img src={img.src} alt={img.label} loading="lazy" />
                  <div className="gl-item-overlay">
                    <span className="gl-item-label">{img.label}</span>
                  </div>
                  <div className="gl-item-expand">⤢</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        {lightbox !== null && (
          <div
            className="gl-lightbox"
            onKeyDown={handleKey}
            tabIndex={-1}
            onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
            ref={(el) => el?.focus()}
          >
            <button className="gl-lb-close" onClick={() => setLightbox(null)}>✕</button>
            <button className="gl-lb-nav gl-lb-prev" onClick={prev}>←</button>
            <button className="gl-lb-nav gl-lb-next" onClick={next}>→</button>

            <div className="gl-lb-img-wrap">
              <div className="gl-lb-top-line" />
              <img
                src={images[lightbox].src}
                alt={images[lightbox].label}
              />
              <div className="gl-lb-meta">
                <span className="gl-lb-label">{images[lightbox].label}</span>
                <span className="gl-lb-counter">
                  <span>{lightbox + 1}</span> / {images.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <section className="gl-cta">
          <div className="gl-cta-inner">
            <div>
              <div className="gl-cta-title">Like What<br />You <span>See?</span></div>
              <p className="gl-cta-sub">Let's build something for you — free estimates, no obligation.</p>
            </div>
            <div className="gl-cta-actions">
              <a href="tel:2482599956" className="gl-btn-primary">☎ Call Now</a>
              <Link href="/contact" className="gl-btn-ghost">Get a Free Quote →</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}