import Link from 'next/link';
import { SITE } from '@/lib/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <style>{`

        .hf-footer {
          font-family: 'Barlow', sans-serif;
          background: #080808;
          position: relative;
          overflow: hidden;
        }

        /* Top accent line */
        .hf-footer::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent 0%, #C8410A 20%, #C8410A 80%, transparent 100%);
        }

        /* Background watermark */
        .hf-footer-watermark {
          position: absolute; bottom: -20px; right: -20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 220px; line-height: 1;
          color: rgba(255,255,255,0.018);
          pointer-events: none; user-select: none;
          white-space: nowrap;
        }

        .hf-footer-body {
          max-width: 1200px; margin: 0 auto;
          padding: 80px 48px 0;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 60px;
          position: relative; z-index: 1;
        }

        /* Brand col */
        .hf-footer-logo {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; margin-bottom: 24px;
        }
        .hf-footer-logomark {
          width: 38px; height: 38px;
          border: 1.5px solid #C8410A;
          position: relative; flex-shrink: 0;
        }
        .hf-footer-logomark::before {
          content: '';
          position: absolute; inset: 4px;
          background: #C8410A;
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }
        .hf-footer-logotype {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px; letter-spacing: 3px;
          color: #F5F3EF; line-height: 1;
        }
        .hf-footer-logotype span { color: #C8410A; }

        .hf-footer-tagline {
          font-size: 14px; line-height: 1.8; color: #555;
          font-weight: 300; margin-bottom: 32px;
          max-width: 280px;
        }

        /* Social icons row */
        .hf-footer-social {
          display: flex; gap: 10px;
        }
        .hf-social-btn {
          width: 36px; height: 36px;
          border: 1px solid #2a2a2a;
          display: flex; align-items: center; justify-content: center;
          color: #555; font-size: 14px; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .hf-social-btn:hover { border-color: #C8410A; color: #C8410A; }

        /* Columns */
        .hf-footer-col-title {
          font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: #C8410A; margin-bottom: 28px;
          display: flex; align-items: center; gap: 10px;
        }
        .hf-footer-col-title::after {
          content: ''; flex: 1; height: 1px; background: #1e1e1e;
        }

        .hf-footer-links {
          list-style: none; display: flex; flex-direction: column; gap: 0;
        }
        .hf-footer-links li a {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 0;
          font-size: 13px; color: #555; text-decoration: none;
          border-bottom: 1px solid #141414;
          transition: color 0.2s, padding-left 0.2s;
          font-weight: 400;
        }
        .hf-footer-links li:last-child a { border-bottom: none; }
        .hf-footer-links li a:hover { color: #F5F3EF; padding-left: 6px; }
        .hf-footer-links li a::before {
          content: '—'; color: #2a2a2a; font-size: 10px; flex-shrink: 0;
          transition: color 0.2s;
        }
        .hf-footer-links li a:hover::before { color: #C8410A; }

        /* Contact col */
        .hf-contact-block { margin-bottom: 24px; }
        .hf-contact-label {
          font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: #3a3a3a; margin-bottom: 6px;
        }
        .hf-contact-phone {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px; letter-spacing: 2px;
          color: #F5F3EF; text-decoration: none; display: block;
          transition: color 0.2s; line-height: 1;
        }
        .hf-contact-phone:hover { color: #C8410A; }
        .hf-contact-email {
          font-size: 13px; color: #555; text-decoration: none;
          transition: color 0.2s;
        }
        .hf-contact-email:hover { color: #F5F3EF; }
        .hf-contact-location {
          font-size: 13px; color: #555; line-height: 1.7;
        }

        /* CTA button in footer */
        .hf-footer-cta {
          display: block; text-align: center;
          background: transparent; color: #F5F3EF;
          padding: 14px; margin-top: 28px;
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          text-decoration: none; border: 1px solid #2a2a2a;
          transition: all 0.2s;
        }
        .hf-footer-cta:hover { background: #C8410A; border-color: #C8410A; }

        /* Bottom bar */
        .hf-footer-bottom {
          max-width: 1200px; margin: 0 auto;
          padding: 28px 48px;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
          border-top: 1px solid #141414;
          position: relative; z-index: 1;
          margin-top: 64px;
        }
        .hf-footer-copy {
          font-size: 11px; color: #3a3a3a; letter-spacing: 1px;
        }
        .hf-footer-copy span { color: #C8410A; }
        .hf-footer-bottom-links {
          display: flex; gap: 24px; list-style: none;
        }
        .hf-footer-bottom-links a {
          font-size: 11px; color: #3a3a3a; text-decoration: none; letter-spacing: 1px;
          transition: color 0.2s;
        }
        .hf-footer-bottom-links a:hover { color: #888; }

        /* Cert badges */
        .hf-footer-badges {
          display: flex; gap: 12px; margin-top: 28px;
        }
        .hf-badge {
          padding: 7px 12px;
          border: 1px solid #2a2a2a;
          font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
          color: #3a3a3a;
        }

        @media (max-width: 900px) {
          .hf-footer-body {
            grid-template-columns: 1fr 1fr;
            padding: 60px 24px 0; gap: 40px;
          }
          .hf-footer-bottom { padding: 24px; flex-direction: column; align-items: center; text-align: center; }
          .hf-footer-watermark { font-size: 120px; }
        }
        @media (max-width: 540px) {
          .hf-footer-body { grid-template-columns: 1fr; }
        }
        .hf-footer-social.hf-footer-social { list-style:none; margin:16px 0 0; padding:0; display:flex; flex-wrap:wrap; gap:8px 16px; }
        .hf-footer-social a { font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#6B6B6B; text-decoration:none; }
        .hf-footer-social a:hover { color:#C8410A; }
        .hf-footer-areas { position:relative; z-index:1; max-width:1200px; margin:0 auto; padding:0 48px 40px; }
        .hf-footer-areas-list { list-style:none; margin:14px 0 0; padding:0; display:flex; flex-wrap:wrap; gap:8px 22px; }
        .hf-footer-areas-list a { font-size:13px; color:#6B6B6B; text-decoration:none; transition:color .2s; }
        .hf-footer-areas-list a:hover { color:#C8410A; }
        @media (max-width:900px) { .hf-footer-areas { padding:0 24px 32px; } }
      `}</style>

      <div className="hf-footer">
        <div className="hf-footer-watermark">HOTFAB</div>

        <div className="hf-footer-body">
          {/* Brand */}
          <div>
            <Link href="/" className="hf-footer-logo">
              <div className="hf-footer-logomark" />
              <span className="hf-footer-logotype">Hot<span>Fab</span></span>
            </Link>
            <p className="hf-footer-tagline">
              Family-owned welding and custom metal fabrication. Serving Michigan with precision and pride since 1999.
            </p>
            <div className="hf-footer-badges">
              <span className="hf-badge">Licensed</span>
              <span className="hf-badge">Insured</span>
              <span className="hf-badge">25+ Yrs</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="hf-footer-col-title">Navigate</div>
            <ul className="hf-footer-links">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/welding', 'Service Areas'], ['/gallery', 'Gallery'], ['/blogs', 'Blog'], ['/faq', 'FAQ'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="hf-footer-col-title">Services</div>
            <ul className="hf-footer-links">
              {services.map((svc) => (
                <li key={svc.slug}><Link href={`/services/${svc.slug}`}>{svc.serviceName}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="hf-footer-col-title">Get In Touch</div>

            <div className="hf-contact-block">
              <div className="hf-contact-label">Phone</div>
              <a href="tel:2482599956" className="hf-contact-phone">(248) 259-9956</a>
            </div>

            <div className="hf-contact-block">
              <div className="hf-contact-label">Email</div>
              <a href="mailto:hotfabwelding@gmail.com" className="hf-contact-email">hotfabwelding@gmail.com</a>
            </div>

            <div className="hf-contact-block">
              <div className="hf-contact-label">Location</div>
              <address className="hf-contact-location" style={{ fontStyle: 'normal' }}>
                {SITE.address.street}<br />{SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}<br />
                <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="hf-contact-email">Get directions →</a>
              </address>
            </div>

            <div className="hf-contact-block">
              <div className="hf-contact-label">Hours</div>
              <p className="hf-contact-location">{SITE.hours.map((h) => h.label).join(' · ')}</p>
            </div>

            <Link href="/contact" className="hf-footer-cta">Request a Free Quote →</Link>
            {SITE.reviewUrl && (
              <a href={SITE.reviewUrl} target="_blank" rel="noopener noreferrer" className="hf-footer-cta" style={{ marginTop: 12 }}>Leave us a Google review →</a>
            )}
            {SITE.sameAs.length > 0 && (
              <ul className="hf-footer-social">
                {SITE.sameAs.map((u) => (
                  <li key={u}><a href={u} target="_blank" rel="noopener noreferrer">{new URL(u).hostname.replace(/^www\./, '')}</a></li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hf-footer-areas">
          <span className="hf-footer-col-title">Serving Metro Detroit</span>
          <ul className="hf-footer-areas-list">
            {locations.map((l) => (
              <li key={l.slug}><Link href={`/welding/${l.slug}`}>Welding in {l.city}, MI</Link></li>
            ))}
          </ul>
        </div>
        <div className="hf-footer-bottom">
          <p className="hf-footer-copy">
            © {year} <span>HotFab Welding</span> · All Rights Reserved · Family Owned & Operated in Michigan
          </p>
          <ul className="hf-footer-bottom-links">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}