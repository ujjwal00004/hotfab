'use client';

import { useState } from 'react';
import Link from 'next/link';

const IMG = 'https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279';
const VID_THUMB = 'https://res.cloudinary.com/dty0qurl9/video/upload/so_0,w_600,h_400,c_fill,f_jpg';
const VID_EMBED = 'https://player.cloudinary.com/embed/?cloud_name=dty0qurl9&public_id=';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  embedUrl?: string;
  alt: string;
  label: string;
  title: string;
};

const media: MediaItem[] = [
  // ── VIDEOS FIRST ──
  {
    type: 'video',
    src: `${VID_THUMB}/welder-fabricating-steel-railing-warren-mi.jpg`,
    embedUrl: `${VID_EMBED}welder-fabricating-steel-railing-warren-mi`,
    alt: 'Video of a welder fabricating a custom steel railing at Hot Fab Welding in Warren, MI',
    label: 'Steel Railing Fabrication',
    title: 'Welder Fabricating Custom Steel Railing — Warren, MI',
  },
  {
    type: 'video',
    src: `${VID_THUMB}/custom-metal-sculpture-warren-mi.jpg`,
    embedUrl: `${VID_EMBED}custom-metal-sculpture-warren-mi`,
    alt: 'Video of a custom metal sculpture being welded and fabricated by Hot Fab Welding in Warren, MI',
    label: 'Custom Metal Sculpture',
    title: 'Custom Metal Sculpture Fabrication — Hot Fab Welding Warren, MI',
  },

  // ── IMAGES ──
  {
    type: 'image',
    src: `${IMG}/artistic-metal-installation-michigan.jpg`,
    alt: 'Artistic metal installation designed and fabricated by Hot Fab Welding in Michigan',
    label: 'Artistic Metal Installation',
    title: 'Artistic Metal Installation — Hot Fab Welding Michigan',
  },
  {
    type: 'image',
    src: `${IMG}/wrought-iron-staircase-warren-mi.jpg`,
    alt: 'Wrought iron staircase railing custom fabricated and installed in Warren, MI',
    label: 'Wrought Iron Staircase',
    title: 'Wrought Iron Staircase Railing — Warren, MI',
  },
  {
    type: 'image',
    src: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
    alt: 'Custom residential steel balcony railing installed by Hot Fab Welding in Michigan',
    label: 'Residential Balcony Railing',
    title: 'Residential Steel Balcony Railing — Michigan',
  },
  {
    type: 'image',
    src: `${IMG}/ornamental-balcony-railing-michigan.jpg`,
    alt: 'Ornamental steel balcony railing custom fabricated and installed in Michigan',
    label: 'Ornamental Balcony Railing',
    title: 'Ornamental Balcony Railing — Hot Fab Welding Michigan',
  },
  {
    type: 'image',
    src: `${IMG}/modern-glass-steel-handrail-warren-mi.jpg`,
    alt: 'Modern glass and steel handrail custom built by Hot Fab Welding in Warren, MI',
    label: 'Glass & Steel Handrail',
    title: 'Modern Glass Steel Handrail — Warren, MI',
  },
  {
    type: 'image',
    src: `${IMG}/interior-steel-railing-metro-detroit.jpg`,
    alt: 'Interior steel staircase railing fabricated and installed in Metro Detroit by Hot Fab Welding',
    label: 'Interior Steel Railing',
    title: 'Interior Steel Staircase Railing — Metro Detroit',
  },
  {
    type: 'image',
    src: `${IMG}/exterior-stair-railing-fabrication-warren.jpg`,
    alt: 'Exterior stair railing fabrication and installation by Hot Fab Welding in Warren, MI',
    label: 'Exterior Stair Railing',
    title: 'Exterior Stair Railing Fabrication — Warren, MI',
  },
  {
    type: 'image',
    src: `${IMG}/exterior-stair-railing-custom-steel-warren.jpg`,
    alt: 'Custom exterior steel stair railing designed and installed in Warren, MI',
    label: 'Custom Exterior Stair Railing',
    title: 'Custom Exterior Steel Stair Railing — Warren, MI',
  },
  {
    type: 'image',
    src: `${IMG}/exterior-handrail-custom-steel-warren-mi.jpg`,
    alt: 'Custom steel exterior handrail fabricated by Hot Fab Welding in Warren, MI',
    label: 'Exterior Steel Handrail',
    title: 'Custom Exterior Steel Handrail — Warren, MI',
  },
  {
    type: 'image',
    src: `${IMG}/black-powder-coat-staircase-railing-michigan.jpg`,
    alt: 'Black powder coated staircase railing fabricated and installed in Michigan by Hot Fab Welding',
    label: 'Black Powder Coat Staircase',
    title: 'Black Powder Coat Staircase Railing — Michigan',
  },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + media.length) % media.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % media.length : null));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setLightbox(null);
  };

  const current = lightbox !== null ? media[lightbox] : null;

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

        .gl-wrap { font-family: 'Barlow', sans-serif; background: var(--iron); color: var(--white); min-height: 100vh; }

        .gl-hero { position: relative; padding: 160px 48px 96px; overflow: hidden; }
        .gl-hero-line { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(to right, transparent, var(--forge), transparent); }
        .gl-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px); background-size: 72px 72px; pointer-events: none; }
        .gl-hero-glow { position: absolute; bottom: -80px; left: 50%; transform: translateX(-50%); width: 700px; height: 320px; background: radial-gradient(ellipse, rgba(200,65,10,0.1) 0%, transparent 70%); pointer-events: none; }
        .gl-hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 48px; }
        .gl-hero-tag { font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--forge); margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
        .gl-hero-tag::before { content: ''; width: 32px; height: 1px; background: var(--forge); display: block; }
        .gl-hero-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(64px, 10vw, 120px); line-height: 0.9; color: var(--white); }
        .gl-hero-title em { color: var(--forge); font-style: normal; }
        .gl-hero-sub { font-size: 17px; font-weight: 300; color: var(--ash); line-height: 1.8; margin-top: 28px; max-width: 500px; }
        .gl-hero-badge { flex-shrink: 0; border: 1px solid var(--slag); background: var(--steel); padding: 28px 36px; text-align: center; }
        .gl-hero-badge-num { font-family: 'Bebas Neue', sans-serif; font-size: 56px; line-height: 1; color: var(--white); }
        .gl-hero-badge-num span { color: var(--forge); }
        .gl-hero-badge-label { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--smoke); margin-top: 6px; }

        .gl-section { padding: 0 48px 120px; }
        .gl-inner { max-width: 1100px; margin: 0 auto; }
        .gl-grid-label { font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--forge); margin-bottom: 40px; display: flex; align-items: center; gap: 12px; }
        .gl-grid-label::after { content: ''; flex: 1; height: 1px; background: var(--slag); }

        .gl-masonry { columns: 3; column-gap: 3px; }

        .gl-item { break-inside: avoid; margin-bottom: 3px; position: relative; overflow: hidden; cursor: pointer; display: block; background: var(--steel); }
        .gl-item::before { content: ''; position: absolute; top: 0; left: 0; bottom: 0; width: 2px; background: var(--forge); z-index: 3; transform: scaleY(0); transform-origin: bottom; transition: transform 0.4s ease; }
        .gl-item:hover::before { transform: scaleY(1); }
        .gl-item img { width: 100%; display: block; filter: brightness(1) saturate(1); transition: filter 0.5s ease, transform 0.6s ease; }
        .gl-item:hover img { filter: brightness(1.05) saturate(1.05); transform: scale(1.04); }

        .gl-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 55%); opacity: 0; transition: opacity 0.4s ease; z-index: 2; display: flex; align-items: flex-end; padding: 20px; }
        .gl-item:hover .gl-item-overlay { opacity: 1; }
        .gl-item-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: var(--white); display: flex; align-items: center; gap: 8px; }
        .gl-item-label::before { content: ''; width: 16px; height: 1px; background: var(--forge); display: block; }

        .gl-play-badge { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 56px; height: 56px; border-radius: 50%; background: rgba(200,65,10,0.92); display: flex; align-items: center; justify-content: center; z-index: 4; pointer-events: none; transition: background 0.2s, transform 0.2s; }
        .gl-play-badge svg { width: 22px; height: 22px; fill: white; margin-left: 4px; }
        .gl-item:hover .gl-play-badge { background: var(--forge-light); transform: translate(-50%, -50%) scale(1.12); }

        .gl-video-tag { position: absolute; top: 12px; left: 12px; z-index: 4; background: rgba(200,65,10,0.9); font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: white; padding: 4px 10px; }

        .gl-item-expand { position: absolute; top: 16px; right: 16px; z-index: 3; width: 32px; height: 32px; border: 1px solid rgba(200,65,10,0.6); background: rgba(13,13,13,0.7); display: flex; align-items: center; justify-content: center; font-size: 13px; color: var(--forge); opacity: 0; transform: scale(0.8); transition: opacity 0.3s, transform 0.3s; }
        .gl-item:hover .gl-item-expand { opacity: 1; transform: scale(1); }

        .gl-lightbox { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.97); display: flex; align-items: center; justify-content: center; outline: none; }
        .gl-lb-close { position: absolute; top: 28px; right: 32px; background: none; border: 1px solid var(--slag); color: var(--ash); width: 44px; height: 44px; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; z-index: 10; }
        .gl-lb-close:hover { border-color: var(--forge); color: var(--forge); }
        .gl-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: 1px solid var(--slag); color: var(--ash); width: 52px; height: 52px; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; z-index: 10; }
        .gl-lb-nav:hover { border-color: var(--forge); color: var(--forge); background: rgba(200,65,10,0.08); }
        .gl-lb-prev { left: 32px; }
        .gl-lb-next { right: 32px; }

        .gl-lb-img-wrap { max-width: 85vw; max-height: 82vh; position: relative; }
        .gl-lb-img-wrap img { max-width: 85vw; max-height: 82vh; object-fit: contain; display: block; }

        .gl-lb-video-wrap { width: 80vw; max-width: 960px; position: relative; }
        .gl-lb-video-wrap iframe { width: 100%; aspect-ratio: 16/9; border: none; display: block; }

        .gl-lb-top-line { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--forge); }
        .gl-lb-meta { position: absolute; bottom: -44px; left: 0; right: 0; display: flex; align-items: center; justify-content: space-between; }
        .gl-lb-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: var(--forge); display: flex; align-items: center; gap: 10px; }
        .gl-lb-label::before { content: ''; width: 20px; height: 1px; background: var(--forge); display: block; }
        .gl-lb-counter { font-family: 'Bebas Neue', sans-serif; font-size: 20px; color: var(--smoke); letter-spacing: 2px; }
        .gl-lb-counter span { color: var(--white); }

        .gl-cta { background: var(--steel); padding: 80px 48px; border-top: 1px solid var(--slag); position: relative; }
        .gl-cta::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(to right, transparent, var(--forge) 40%, var(--forge) 60%, transparent); }
        .gl-cta-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .gl-cta-title { font-family: 'Bebas Neue', sans-serif; font-size: 52px; line-height: 1; color: var(--white); }
        .gl-cta-title span { color: var(--forge); }
        .gl-cta-sub { font-size: 14px; color: var(--smoke); font-weight: 300; margin-top: 6px; }
        .gl-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .gl-btn-primary { background: var(--forge); color: var(--white); padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border: 2px solid var(--forge); transition: all 0.2s; white-space: nowrap; }
        .gl-btn-primary:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .gl-btn-ghost { background: transparent; color: var(--white); padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border: 2px solid var(--slag); transition: all 0.2s; white-space: nowrap; }
        .gl-btn-ghost:hover { border-color: var(--white); }

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
          .gl-lb-video-wrap { width: 92vw; }
        }
        @media (max-width: 480px) { .gl-masonry { columns: 1; } }
      `}</style>

      <div className="gl-wrap">

        <section className="gl-hero">
          <div className="gl-hero-line" />
          <div className="gl-hero-grid" />
          <div className="gl-hero-glow" />
          <div className="gl-hero-inner">
            <div>
              <div className="gl-hero-tag">Real Work. Real Welds.</div>
              <h1 className="gl-hero-title">Our <em>Work</em></h1>
              <p className="gl-hero-sub">
                Videos and photos of real projects — custom railings, balconies, staircases, and precision metalwork delivered across Warren, MI and Metro Detroit.
              </p>
            </div>
            <div className="gl-hero-badge">
              <div className="gl-hero-badge-num">{media.length}<span>+</span></div>
              <div className="gl-hero-badge-label">Projects<br />Shown</div>
            </div>
          </div>
        </section>

        <section className="gl-section">
          <div className="gl-inner">
            <div className="gl-grid-label">Project Gallery — Warren, MI & Metro Detroit</div>
            <div className="gl-masonry">
              {media.map((item, i) => (
                <div
                  key={i}
                  className="gl-item"
                  onClick={() => setLightbox(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.type === 'video' ? 'video' : 'photo'}: ${item.label}`}
                  title={item.title}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" width={600} height={400} />
                  {item.type === 'video' && (
                    <>
                      <div className="gl-video-tag">Video</div>
                      <div className="gl-play-badge">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </>
                  )}
                  <div className="gl-item-overlay">
                    <span className="gl-item-label">{item.label}</span>
                  </div>
                  {item.type === 'image' && <div className="gl-item-expand">⤢</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {lightbox !== null && current && (
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

            {current.type === 'video' ? (
              <div className="gl-lb-video-wrap">
                <div className="gl-lb-top-line" />
                <iframe
                  src={`${current.embedUrl}&autoplay=true`}
                  title={current.title}
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
                <div className="gl-lb-meta">
                  <span className="gl-lb-label">{current.label}</span>
                  <span className="gl-lb-counter"><span>{lightbox + 1}</span> / {media.length}</span>
                </div>
              </div>
            ) : (
              <div className="gl-lb-img-wrap">
                <div className="gl-lb-top-line" />
                <img src={current.src} alt={current.alt} />
                <div className="gl-lb-meta">
                  <span className="gl-lb-label">{current.label}</span>
                  <span className="gl-lb-counter"><span>{lightbox + 1}</span> / {media.length}</span>
                </div>
              </div>
            )}
          </div>
        )}

        <section className="gl-cta">
          <div className="gl-cta-inner">
            <div>
              <div className="gl-cta-title">Like What<br />You <span>See?</span></div>
              <p className="gl-cta-sub">Let's build something for you — free estimates, no obligation. Serving Warren, MI & all of Metro Detroit.</p>
            </div>
            <div className="gl-cta-actions">
              <a href="tel:2482599956" className="gl-btn-primary">☎ Call (248) 259-9956</a>
              <Link href="/contact" className="gl-btn-ghost">Get a Free Quote →</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}