import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600&display=swap');

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
      `}</style>

      <div className="hf-footer">
        <div className="hf-footer-watermark">HOTFAB</div>

        <div className="hf-footer-body">
          {/* Brand */}
          <div>
            <a href="/" className="hf-footer-logo">
              <div className="hf-footer-logomark" />
              <span className="hf-footer-logotype">Hot<span>Fab</span></span>
            </a>
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
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/blogs', 'Blog'], ['/faq', 'FAQ'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="hf-footer-col-title">Services</div>
            <ul className="hf-footer-links">
              {['Custom Fabrication', 'Mobile Welding', 'Structural Steel', 'Railings & Gates', 'Emergency Repairs'].map((s) => (
                <li key={s}><Link href="/services">{s}</Link></li>
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
              <a href="mailto:hotfabah@gmail.com" className="hf-contact-email">hotfabah@gmail.com</a>
            </div>

            <div className="hf-contact-block">
              <div className="hf-contact-label">Location</div>
              <p className="hf-contact-location">Warren, Michigan<br />Metro Detroit Area</p>
            </div>

            <a href="/contact" className="hf-footer-cta">Request a Free Quote →</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hf-footer-bottom">
          <p className="hf-footer-copy">
            © {year} <span>HotFab Welding</span> · All Rights Reserved · Family Owned & Operated in Michigan
          </p>
          <ul className="hf-footer-bottom-links">
            <li><a href="/contact">Contact</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}