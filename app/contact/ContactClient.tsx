'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwfTTHCsSS8oTVjYr9LUz0u2NWR0a_nJTy_-cdqMRraioMlfl0IIBHVH98rC1NQGi8x/exec';

    try {
      const res=await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      console.log('Form submission response:', res);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      }, 4000);
    } catch (err) {
      console.log(err)
      alert('Something went wrong. Please call us at (248) 259-9956.');
    }
  };
  const info = [
    { label: 'Location', value: 'Warren, Michigan', sub: 'Metro Detroit Area', href: null },
    { label: 'Phone', value: '(248) 259-9956', sub: 'Calls & texts welcome', href: 'tel:2482599956' },
    { label: 'Email', value: 'hotfabwelding@gmail.com', sub: 'Reply within 1 business day', href: 'mailto:hotfabwelding@gmail.com' },
    { label: 'Hours', value: 'Mon–Fri: 8AM – 5PM', sub: 'Sat: By Appointment', href: null },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        :root { --forge:#C8410A;--forge-light:#E85D1A;--iron:#0D0D0D;--steel:#1A1A1A;--slag:#2C2C2C;--smoke:#6B6B6B;--ash:#A0A0A0;--white:#F5F3EF; }
        .cp-wrap { font-family:'Barlow',sans-serif;background:var(--iron);color:var(--white);min-height:100vh; }
        .cp-hero { position:relative;padding:160px 48px 80px;overflow:hidden; }
        .cp-hero-grid { position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.013) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.013) 1px,transparent 1px);background-size:72px 72px;pointer-events:none; }
        .cp-hero-glow { position:absolute;bottom:-60px;left:30%;width:500px;height:260px;background:radial-gradient(ellipse,rgba(200,65,10,0.1) 0%,transparent 70%);pointer-events:none; }
        .cp-hero-line { position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,transparent,var(--forge),transparent); }
        .cp-hero-inner { max-width:1100px;margin:0 auto;position:relative;z-index:1;display:grid;grid-template-columns:1fr auto;align-items:end;gap:40px; }
        .cp-hero-tag { font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--forge);margin-bottom:24px;display:flex;align-items:center;gap:12px; }
        .cp-hero-tag::before { content:'';width:32px;height:1px;background:var(--forge);display:block; }
        .cp-hero-title { font-family:'Bebas Neue',sans-serif;font-size:clamp(64px,10vw,120px);line-height:0.9;letter-spacing:0.01em;color:var(--white); }
        .cp-hero-title em { color:var(--forge);font-style:normal; }
        .cp-hero-sub { font-size:17px;font-weight:300;color:var(--ash);line-height:1.8;margin-top:28px;max-width:480px; }
        .cp-hero-response { flex-shrink:0;border:1px solid var(--slag);background:var(--steel);padding:28px 36px;text-align:center; }
        .cp-hero-response-num { font-family:'Bebas Neue',sans-serif;font-size:48px;line-height:1;color:var(--forge); }
        .cp-hero-response-label { font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--smoke);margin-top:4px; }
        .cp-body { padding:0 48px 120px; }
        .cp-body-inner { max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.15fr 1fr;gap:2px;background:var(--slag);border:1px solid var(--slag); }
        .cp-form-panel { background:var(--steel);padding:64px 60px;position:relative; }
        .cp-form-panel::before { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--forge); }
        .cp-panel-title { font-family:'Bebas Neue',sans-serif;font-size:42px;letter-spacing:1px;color:var(--white);margin-bottom:8px; }
        .cp-panel-sub { font-size:13px;color:var(--smoke);letter-spacing:1px;margin-bottom:48px;font-weight:300; }
        .cp-field { margin-bottom:28px; }
        .cp-field-row { display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:28px; }
        .cp-label { display:block;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--smoke);margin-bottom:10px;transition:color 0.2s; }
        .cp-label.active { color:var(--forge); }
        .cp-input,.cp-select,.cp-textarea { width:100%;background:var(--iron);border:1px solid var(--slag);border-bottom:1px solid #3a3a3a;color:var(--white);font-family:'Barlow',sans-serif;font-size:15px;font-weight:300;padding:16px 20px;outline:none;appearance:none;transition:border-color 0.25s,background 0.25s; }
        .cp-input::placeholder,.cp-textarea::placeholder { color:#3a3a3a; }
        .cp-input:focus,.cp-select:focus,.cp-textarea:focus { border-color:var(--forge);background:rgba(200,65,10,0.03); }
        .cp-select { cursor:pointer; }
        .cp-select option { background:var(--steel); }
        .cp-textarea { resize:vertical;min-height:140px; }
        .cp-submit { width:100%;background:var(--forge);color:var(--white);border:2px solid var(--forge);padding:20px;font-family:'Barlow',sans-serif;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;cursor:pointer;transition:all 0.2s;margin-top:8px;display:flex;align-items:center;justify-content:center;gap:10px; }
        .cp-submit:hover { background:var(--forge-light);border-color:var(--forge-light); }
        .cp-submit-note { text-align:center;font-size:11px;color:var(--smoke);letter-spacing:1px;margin-top:16px; }
        .cp-success { display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;text-align:center;gap:20px; }
        .cp-success-icon { width:72px;height:72px;border:1px solid var(--forge);background:rgba(200,65,10,0.1);display:flex;align-items:center;justify-content:center;font-size:32px; }
        .cp-success-title { font-family:'Bebas Neue',sans-serif;font-size:48px;color:var(--white);line-height:1; }
        .cp-success-sub { font-size:15px;color:var(--smoke);font-weight:300; }
        .cp-info-panel { background:var(--iron);display:flex;flex-direction:column; }
        .cp-info-items { flex:1; }
        .cp-info-item { padding:36px 44px;border-bottom:1px solid var(--slag);position:relative; }
        .cp-info-item::before { content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--forge);transform:scaleY(0);transform-origin:bottom;transition:transform 0.35s ease; }
        .cp-info-item:hover::before { transform:scaleY(1); }
        .cp-info-label { font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--forge);margin-bottom:10px; }
        .cp-info-value { font-size:18px;font-weight:500;color:var(--white);text-decoration:none;display:block;line-height:1.3;transition:color 0.2s; }
        a.cp-info-value:hover { color:var(--forge); }
        .cp-info-sub { font-size:12px;color:var(--smoke);margin-top:4px;font-weight:300; }
        .cp-emergency { background:var(--forge);padding:44px; }
        .cp-emergency-label { font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-bottom:12px; }
        .cp-emergency-title { font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--white);line-height:1.1;margin-bottom:20px; }
        .cp-emergency-phone { display:block;font-family:'Bebas Neue',sans-serif;font-size:40px;letter-spacing:2px;color:var(--white);text-decoration:none;line-height:1;transition:opacity 0.2s; }
        .cp-emergency-phone:hover { opacity:0.8; }
        .cp-emergency-sub { font-size:11px;color:rgba(255,255,255,0.6);letter-spacing:1.5px;text-transform:uppercase;margin-top:8px; }
        .cp-services-link { display:flex;align-items:center;justify-content:space-between;padding:24px 44px;border-top:1px solid var(--slag);font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--ash);text-decoration:none;transition:color 0.2s;background:var(--steel); }
        .cp-services-link:hover { color:var(--forge); }
        .cp-trust { background:var(--steel);padding:60px 48px;border-top:1px solid var(--slag); }
        .cp-trust-inner { max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:var(--slag); }
        .cp-trust-item { background:var(--steel);padding:32px 28px;text-align:center; }
        .cp-trust-num { font-family:'Bebas Neue',sans-serif;font-size:44px;color:var(--white);line-height:1;margin-bottom:6px; }
        .cp-trust-num span { color:var(--forge); }
        .cp-trust-label { font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--smoke); }
        @media(max-width:900px){.cp-hero{padding:140px 24px 64px;}.cp-hero-inner{grid-template-columns:1fr;}.cp-hero-response{display:none;}.cp-body{padding:0 24px 80px;}.cp-body-inner{grid-template-columns:1fr;}.cp-form-panel{padding:48px 28px;}.cp-field-row{grid-template-columns:1fr;gap:0;}.cp-trust{padding:48px 24px;}.cp-trust-inner{grid-template-columns:1fr 1fr;}.cp-info-item{padding:28px 28px;}.cp-emergency{padding:36px 28px;}.cp-services-link{padding:20px 28px;}}
        @media(max-width:480px){.cp-trust-inner{grid-template-columns:1fr;}}
      `}</style>

      <div className="cp-wrap">
        <section className="cp-hero">
          <div className="cp-hero-grid" />
          <div className="cp-hero-glow" />
          <div className="cp-hero-line" />
          <div className="cp-hero-inner">
            <div>
              <div className="cp-hero-tag">Free Estimates · No Obligation</div>
              <h1 className="cp-hero-title">Get In <em>Touch</em></h1>
              <p className="cp-hero-sub">Ready to start your project? Fill out the form or call us directly. We respond within one business day — usually faster.</p>
            </div>
            <div className="cp-hero-response">
              <div className="cp-hero-response-num">1</div>
              <div className="cp-hero-response-label">Business Day<br />Response Time</div>
            </div>
          </div>
        </section>

        <section className="cp-body">
          <div className="cp-body-inner">
            <div className="cp-form-panel">
              <h2 className="cp-panel-title">Send a Message</h2>
              <p className="cp-panel-sub">All fields marked * are required</p>
              {submitted ? (
                <div className="cp-success">
                  <div className="cp-success-icon">✓</div>
                  <div className="cp-success-title">Message Sent</div>
                  <p className="cp-success-sub">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="cp-field">
                    <label className={`cp-label ${focused === 'name' ? 'active' : ''}`}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="cp-input" placeholder="John Doe" onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
                  </div>
                  <div className="cp-field-row">
                    <div>
                      <label className={`cp-label ${focused === 'phone' ? 'active' : ''}`}>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="cp-input" placeholder="(248) 123-4567" onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} />
                    </div>
                    <div>
                      <label className={`cp-label ${focused === 'email' ? 'active' : ''}`}>Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="cp-input" placeholder="your@email.com" onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
                    </div>
                  </div>
                  <div className="cp-field">
                    <label className={`cp-label ${focused === 'service' ? 'active' : ''}`}>Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="cp-select" onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}>
                      <option value="">Select a Service</option>
                      <option value="Custom Fabrication">Custom Metal Fabrication</option>
                      <option value="On-Site Welding">On-Site / Mobile Welding</option>
                      <option value="Repair">Repair & Maintenance</option>
                      <option value="Railing">Railing & Gates</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="cp-field">
                    <label className={`cp-label ${focused === 'message' ? 'active' : ''}`}>Project Details *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="cp-textarea" placeholder="Describe your project — dimensions, material, location, timeline..." onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                  </div>
                  <button type="submit" className="cp-submit">Send Message →</button>
                  <p className="cp-submit-note">We respond within 1 business day</p>
                </form>
              )}
            </div>

            <div className="cp-info-panel">
              <div className="cp-info-items">
                {info.map((item, i) => (
                  <div key={i} className="cp-info-item">
                    <div className="cp-info-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="cp-info-value">{item.value}</a>
                    ) : (
                      <span className="cp-info-value" style={{ cursor: 'default' }}>{item.value}</span>
                    )}
                    <p className="cp-info-sub">{item.sub}</p>
                  </div>
                ))}
              </div>
              <div className="cp-emergency">
                <div className="cp-emergency-label">Need Immediate Help?</div>
                <div className="cp-emergency-title">Emergency &<br />Same-Day Service</div>
                <a href="tel:2482599956" className="cp-emergency-phone">(248) 259-9956</a>
                <p className="cp-emergency-sub">Call or text anytime</p>
              </div>
              <Link href="/services" className="cp-services-link">
                <span>View All Services</span><span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="cp-trust">
          <div className="cp-trust-inner">
            {[{ num: '25+', label: 'Years Experience' }, { num: '2K+', label: 'Projects Completed' }, { num: '5★', label: 'Google Rating' }, { num: '1', label: 'Day Response Time' }].map((t, i) => (
              <div key={i} className="cp-trust-item">
                <div className="cp-trust-num">{t.num.replace('★', '')}<span>{t.num.includes('★') ? '★' : ''}</span></div>
                <div className="cp-trust-label">{t.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}