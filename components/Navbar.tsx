'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600&display=swap');

        .hf-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s;
          font-family: 'Barlow', sans-serif;
        }
        .hf-nav.top {
          background: linear-gradient(to bottom, rgba(10,10,10,0.92), transparent);
          border-bottom: 1px solid transparent;
        }
        .hf-nav.scrolled {
          background: rgba(10,10,10,0.97);
          border-bottom: 1px solid #2a2a2a;
          backdrop-filter: blur(12px);
        }

        .hf-nav-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 48px;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
        }

        /* Logo */
        .hf-logo {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; flex-shrink: 0;
        }
        .hf-logo-mark {
          width: 36px; height: 36px;
          border: 1.5px solid #C8410A;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          transition: background 0.2s;
        }
        .hf-logo-mark::before {
          content: '';
          position: absolute; inset: 3px;
          background: #C8410A;
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          transition: opacity 0.2s;
        }
        .hf-logo:hover .hf-logo-mark { background: rgba(200,65,10,0.1); }
        .hf-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px; letter-spacing: 3px;
          color: #F5F3EF;
          line-height: 1;
        }
        .hf-logo-text span { color: #C8410A; }

        /* Desktop Links */
        .hf-links {
          display: flex; align-items: center; gap: 40px;
          list-style: none;
        }
        .hf-links a {
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #888; text-decoration: none;
          position: relative; padding-bottom: 3px;
          transition: color 0.2s;
        }
        .hf-links a::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: #C8410A;
          transition: width 0.3s ease;
        }
        .hf-links a:hover { color: #F5F3EF; }
        .hf-links a:hover::after { width: 100%; }

        /* CTA Button */
        .hf-cta {
          display: flex; align-items: center; gap: 8px;
          background: #C8410A; color: #fff;
          padding: 10px 22px;
          font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          text-decoration: none; border: 2px solid #C8410A;
          transition: all 0.2s; white-space: nowrap;
        }
        .hf-cta:hover { background: #E85D1A; border-color: #E85D1A; }
        .hf-cta-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.6);
          animation: pulse 1.8s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }

        /* Hamburger */
        .hf-burger {
          display: none;
          flex-direction: column; gap: 5px;
          cursor: pointer; padding: 6px;
          background: none; border: none;
        }
        .hf-burger span {
          display: block; width: 24px; height: 1.5px;
          background: #F5F3EF;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hf-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hf-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hf-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobile Drawer */
        .hf-drawer {
          display: none;
          position: fixed; top: 72px; left: 0; right: 0;
          background: rgba(10,10,10,0.98);
          border-bottom: 1px solid #2a2a2a;
          backdrop-filter: blur(16px);
          padding: 36px 48px 48px;
          transform: translateY(-8px); opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          z-index: 199;
        }
        .hf-drawer.visible {
          transform: translateY(0); opacity: 1;
        }
        .hf-drawer-links {
          list-style: none;
          display: flex; flex-direction: column; gap: 0;
          margin-bottom: 32px;
        }
        .hf-drawer-links a {
          display: block; padding: 16px 0;
          font-size: 28px;
          font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px;
          color: #888; text-decoration: none;
          border-bottom: 1px solid #1e1e1e;
          transition: color 0.2s, padding-left 0.2s;
        }
        .hf-drawer-links a:hover { color: #F5F3EF; padding-left: 10px; }
        .hf-drawer-cta {
          display: block; text-align: center;
          background: #C8410A; color: #fff;
          padding: 18px; font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          text-decoration: none; transition: background 0.2s;
        }
        .hf-drawer-cta:hover { background: #E85D1A; }

        /* Divider line */
        .hf-nav-divider {
          width: 1px; height: 28px; background: #2a2a2a;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .hf-links, .hf-nav-divider, .hf-cta { display: none !important; }
          .hf-burger { display: flex; }
          .hf-drawer { display: block; }
          .hf-nav-inner { padding: 0 24px; }
        }
      `}</style>

      <nav className={`hf-nav ${scrolled ? 'scrolled' : 'top'}`}>
        <div className="hf-nav-inner">
          {/* Logo */}
          <Link href="/" className="hf-logo">
            <div className="hf-logo-mark" />
            <span className="hf-logo-text">Hot<span>Fab</span></span>
          </Link>

          {/* Desktop Links */}
          <ul className="hf-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blogs">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <div className="hf-nav-divider" />

          {/* Phone CTA */}
          <a href="tel:2482599956" className="hf-cta">
            <span className="hf-cta-dot" />
            (248) 259-9956
          </a>

          {/* Hamburger */}
          <button
            className={`hf-burger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`hf-drawer ${isOpen ? 'visible' : ''}`}>
        <ul className="hf-drawer-links">
          {['/', '/about', '/services', '/blogs', '/faq', '/contact','/gallery'].map((href, i) => {
            const labels = ['Home', 'About', 'Services', 'Blog', 'FAQ', 'Contact','Gallery'];
            return (
              <li key={i}>
                <Link href={href} onClick={() => setIsOpen(false)}>{labels[i]}</Link>
              </li>
            );
          })}
        </ul>
        <a href="tel:2482599956" className="hf-drawer-cta" onClick={() => setIsOpen(false)}>
          Call (248) 259-9956
        </a>
      </div>
    </>
  );
}