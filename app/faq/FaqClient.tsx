'use client';

import { useState } from 'react';
import Link from 'next/link';

type FaqItem = { question: string; answer: string };

export default function FaqClient({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        :root{--forge:#C8410A;--forge-light:#E85D1A;--iron:#0D0D0D;--steel:#1A1A1A;--slag:#2C2C2C;--smoke:#6B6B6B;--ash:#A0A0A0;--white:#F5F3EF;}
        .faq-wrap{font-family:'Barlow',sans-serif;background:var(--iron);color:var(--white);min-height:100vh;}
        .faq-hero{position:relative;padding:140px 48px 80px;background:linear-gradient(180deg,rgba(200,65,10,0.05) 0%,transparent 100%);border-bottom:1px solid var(--slag);}
        .faq-hero-line{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,transparent,var(--forge),transparent);}
        .faq-hero-inner{max-width:900px;margin:0 auto;}
        .faq-tag{font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--forge);margin-bottom:20px;display:flex;align-items:center;gap:12px;}
        .faq-tag::before{content:'';display:block;width:32px;height:1px;background:var(--forge);}
        .faq-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(56px,8vw,100px);line-height:0.92;color:var(--white);margin-bottom:24px;}
        .faq-title em{color:var(--forge);font-style:normal;}
        .faq-sub{font-size:17px;font-weight:300;color:var(--ash);line-height:1.8;max-width:600px;}
        .faq-body{max-width:900px;margin:0 auto;padding:80px 48px 120px;}
        .faq-item{border-bottom:1px solid var(--slag);}
        .faq-question{width:100%;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:28px 0;font-family:'Barlow',sans-serif;font-size:18px;font-weight:600;color:var(--white);text-align:left;line-height:1.4;transition:color 0.2s;}
        .faq-question:hover{color:var(--forge);}
        .faq-question.open{color:var(--forge);}
        .faq-icon{width:28px;height:28px;flex-shrink:0;border:1px solid var(--slag);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;color:var(--forge);transition:transform 0.3s,border-color 0.2s;}
        .faq-icon.open{transform:rotate(45deg);border-color:var(--forge);}
        .faq-answer{font-size:15px;font-weight:300;color:var(--ash);line-height:1.8;overflow:hidden;transition:max-height 0.35s ease,padding-bottom 0.3s;padding-bottom:0;}
        .faq-answer.open{padding-bottom:28px;}
        .faq-cta{background:var(--steel);border:1px solid var(--slag);padding:52px 48px;margin-top:80px;text-align:center;}
        .faq-cta-title{font-family:'Bebas Neue',sans-serif;font-size:52px;color:var(--white);margin-bottom:12px;}
        .faq-cta-sub{font-size:16px;color:var(--smoke);font-weight:300;margin-bottom:32px;}
        .faq-btn{display:inline-block;background:var(--forge);color:var(--white);padding:16px 40px;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;text-decoration:none;margin:0 8px 8px;border:2px solid var(--forge);transition:background 0.2s;}
        .faq-btn:hover{background:var(--forge-light);border-color:var(--forge-light);}
        .faq-btn-ghost{background:transparent;border:2px solid var(--slag);color:var(--white);}
        .faq-btn-ghost:hover{border-color:var(--white);background:transparent;}
        @media(max-width:768px){.faq-hero{padding:120px 24px 60px;}.faq-body{padding:60px 24px 80px;}.faq-question{font-size:16px;}}
      `}</style>

      <div className="faq-wrap">
        <section className="faq-hero">
          <div className="faq-hero-line" />
          <div className="faq-hero-inner">
            <div className="faq-tag">Common Questions</div>
            <h1 className="faq-title">
              Welding <em>&</em><br />
              Fabrication<br />
              <em>FAQ</em>
            </h1>
            <p className="faq-sub">
              Everything you need to know about our services, process, materials, and pricing — answered by Warren, Michigan's most trusted welding team.
            </p>
          </div>
        </section>

        <div className="faq-body">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question${isOpen ? ' open' : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {faq.question}
                  <span className={`faq-icon${isOpen ? ' open' : ''}`} aria-hidden="true">+</span>
                </button>
                <div
                  className={`faq-answer${isOpen ? ' open' : ''}`}
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}

          <div className="faq-cta">
            <h2 className="faq-cta-title">Still Have Questions?</h2>
            <p className="faq-cta-sub">Call us directly or send a message — we reply fast.</p>
            <a href="tel:2482599956" className="faq-btn">Call (248) 259-9956</a>
            <Link href="/contact" className="faq-btn faq-btn-ghost">Request a Quote →</Link>
          </div>
        </div>
      </div>
    </>
  );
}