import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

async function getBlog(slug: string) {
  const res = await import('@/data/blogs.json');
  const blogs = res.default;

  return blogs.find(
    (blog: any) => blog.slug.toLowerCase() === slug.toLowerCase()
  );
}

async function getRelated(slug: string) {
  const res = await import('@/data/blogs.json');
  const blogs = res.default as any[];

  return blogs.filter(
    (b: any) => b.slug.toLowerCase() !== slug.toLowerCase()
  ).slice(0, 2);
}
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog = await getBlog(slug);
  if (!blog) notFound();

  const related = await getRelated(slug);

  const formatted = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

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

        .bp-wrap {
          font-family: 'Barlow', sans-serif;
          background: var(--iron);
          color: var(--white);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .bp-hero {
          position: relative;
          min-height: 72vh;
          display: flex; align-items: flex-end;
          overflow: hidden;
        }
        .bp-hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          filter: brightness(0.2) saturate(0.45);
          transition: filter 0.3s;
        }
        .bp-hero-fade {
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--iron) 0%, rgba(13,13,13,0.5) 50%, rgba(13,13,13,0.1) 100%);
        }
        .bp-hero-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge), transparent);
        }
        .bp-hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .bp-hero-inner {
          position: relative; z-index: 2;
          max-width: 860px; margin: 0 auto; width: 100%;
          padding: 0 48px 72px;
        }
        .bp-hero-breadcrumb {
          display: flex; align-items: center; gap: 10px;
          font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--smoke); margin-bottom: 28px;
        }
        .bp-hero-breadcrumb a {
          color: var(--smoke); text-decoration: none; transition: color 0.2s;
        }
        .bp-hero-breadcrumb a:hover { color: var(--forge); }
        .bp-hero-breadcrumb span { color: var(--slag); }

        .bp-hero-date {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 20px;
          display: flex; align-items: center; gap: 10px;
        }
        .bp-hero-date::before { content: ''; width: 24px; height: 1px; background: var(--forge); display: block; }

        .bp-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95; letter-spacing: 0.01em;
          color: var(--white);
        }

        /* ── ARTICLE BODY ── */
        .bp-article-outer {
          background: var(--iron);
          padding: 0 48px 100px;
        }
        .bp-article-layout {
          max-width: 860px; margin: 0 auto;
        }

        /* Divider */
        .bp-divider {
          height: 1px; margin: 0 0 64px;
          background: linear-gradient(to right, var(--forge) 0%, var(--slag) 60%, transparent 100%);
        }

        /* ── PROSE ── */
        .bp-prose {
          font-family: 'Lora', Georgia, serif;
          font-size: 18px; line-height: 1.9;
          color: #C8C4BC;
          font-weight: 400;
        }
        .bp-prose p { margin-bottom: 1.6em; }
        .bp-prose h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px; letter-spacing: 1px;
          color: var(--white); line-height: 1.05;
          margin: 2.2em 0 0.6em;
        }
        .bp-prose h3 {
          font-family: 'Barlow', sans-serif;
          font-size: 22px; font-weight: 600;
          color: var(--white); margin: 2em 0 0.5em;
        }
        .bp-prose strong { color: var(--white); font-weight: 600; }
        .bp-prose em { color: var(--ash); font-style: italic; }
        .bp-prose ul, .bp-prose ol {
          padding-left: 0; margin-bottom: 1.6em; list-style: none;
        }
        .bp-prose ul li, .bp-prose ol li {
          padding: 10px 0 10px 24px;
          border-bottom: 1px solid var(--slag);
          position: relative; color: var(--ash);
          font-family: 'Barlow', sans-serif;
          font-size: 16px; font-weight: 300;
        }
        .bp-prose ul li::before {
          content: '';
          position: absolute; left: 0; top: 50%; transform: translateY(-50%);
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--forge);
        }
        .bp-prose ol { counter-reset: item; }
        .bp-prose ol li::before {
          content: counter(item);
          counter-increment: item;
          position: absolute; left: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px; color: var(--forge); line-height: 1;
          top: 10px;
        }
        .bp-prose blockquote {
          margin: 2em 0; padding: 28px 36px;
          border-left: 3px solid var(--forge);
          background: var(--steel);
          font-style: italic; color: var(--ash);
          font-size: 19px;
        }
        .bp-prose a { color: var(--forge); text-decoration: none; border-bottom: 1px solid rgba(200,65,10,0.4); transition: border-color 0.2s; }
        .bp-prose a:hover { border-color: var(--forge); }
        .bp-prose hr { border: none; border-top: 1px solid var(--slag); margin: 2.5em 0; }
        .bp-prose img { width: 100%; display: block; filter: brightness(0.85) saturate(0.6); margin: 2em 0; }
        .bp-prose code {
          font-family: monospace; font-size: 14px;
          background: var(--steel); color: var(--ash);
          padding: 2px 8px; border: 1px solid var(--slag);
        }
        .bp-prose pre {
          background: var(--steel); border: 1px solid var(--slag);
          padding: 24px; overflow-x: auto; margin-bottom: 1.6em;
        }

        /* ── BACK LINK ── */
        .bp-back {
          display: inline-flex; align-items: center; gap: 12px;
          margin-top: 72px; padding-top: 40px;
          border-top: 1px solid var(--slag);
          font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--smoke); text-decoration: none;
          transition: color 0.2s;
        }
        .bp-back:hover { color: var(--forge); }
        .bp-back-arrow {
          width: 32px; height: 32px; border: 1px solid var(--slag);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: all 0.25s;
        }
        .bp-back:hover .bp-back-arrow {
          border-color: var(--forge); color: var(--forge);
          background: rgba(200,65,10,0.08); transform: translateX(-3px);
        }

        /* ── RELATED POSTS ── */
        .bp-related {
          background: var(--steel); padding: 80px 48px;
          border-top: 1px solid var(--slag);
        }
        .bp-related-inner { max-width: 860px; margin: 0 auto; }
        .bp-related-label {
          font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 40px;
          display: flex; align-items: center; gap: 12px;
        }
        .bp-related-label::after { content: ''; flex: 1; height: 1px; background: var(--slag); }
        .bp-related-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2px; background: var(--slag);
        }
        .bp-related-card {
          background: var(--steel); padding: 32px 36px;
          text-decoration: none; display: block;
          position: relative; overflow: hidden;
          border-left: 2px solid transparent;
          transition: border-color 0.3s, background 0.3s;
        }
        .bp-related-card:hover { border-left-color: var(--forge); background: #202020; }
        .bp-related-date {
          font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 12px;
        }
        .bp-related-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px; line-height: 1.1; color: var(--white);
          margin-bottom: 16px; transition: color 0.2s;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .bp-related-card:hover .bp-related-title { color: var(--forge); }
        .bp-related-read {
          font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--smoke); display: flex; align-items: center; gap: 8px;
          transition: color 0.2s;
        }
        .bp-related-card:hover .bp-related-read { color: var(--forge); }

        /* ── CTA ── */
        .bp-cta {
          background: var(--iron); padding: 80px 48px;
          border-top: 1px solid var(--slag); position: relative;
        }
        .bp-cta::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge) 40%, var(--forge) 60%, transparent);
        }
        .bp-cta-inner {
          max-width: 860px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          gap: 40px; flex-wrap: wrap;
        }
        .bp-cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px; line-height: 1; color: var(--white);
        }
        .bp-cta-title span { color: var(--forge); }
        .bp-cta-sub { font-size: 14px; color: var(--smoke); font-weight: 300; margin-top: 6px; }
        .bp-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
        .bp-btn-primary {
          background: var(--forge); color: var(--white);
          padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--forge);
          transition: all 0.2s; white-space: nowrap;
        }
        .bp-btn-primary:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .bp-btn-ghost {
          background: transparent; color: var(--white);
          padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--slag);
          transition: all 0.2s; white-space: nowrap;
        }
        .bp-btn-ghost:hover { border-color: var(--white); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .bp-hero-inner { padding: 0 24px 56px; }
          .bp-article-outer { padding: 0 24px 80px; }
          .bp-prose { font-size: 16px; }
          .bp-related { padding: 60px 24px; }
          .bp-related-grid { grid-template-columns: 1fr; }
          .bp-cta { padding: 60px 24px; }
          .bp-cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="bp-wrap">

        {/* ── HERO ── */}
        <section className="bp-hero">
          <div
            className="bp-hero-bg"
            style={{ backgroundImage: `url('${blog.image}')` }}
          />
          <div className="bp-hero-fade" />
          <div className="bp-hero-top-line" />
          <div className="bp-hero-grain" />

          <div className="bp-hero-inner">
            <div className="bp-hero-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/blogs">Blog</a>
              <span>/</span>
              <span style={{color:'var(--ash)', maxWidth:'260px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                {blog.title}
              </span>
            </div>
            <div className="bp-hero-date">{formatted}</div>
            <h1 className="bp-hero-title">{blog.title}</h1>
          </div>
        </section>

        {/* ── ARTICLE ── */}
        <div className="bp-article-outer">
          <div className="bp-article-layout">
            <div className="bp-divider" />
            <div
              className="bp-prose"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Back link */}
            <a href="/blogs" className="bp-back">
              <span className="bp-back-arrow">←</span>
              Back to All Articles
            </a>
          </div>
        </div>

        {/* ── RELATED POSTS ── */}
        {related.length > 0 && (
          <section className="bp-related">
            <div className="bp-related-inner">
              <div className="bp-related-label">More Articles</div>
              <div className="bp-related-grid">
                {related.map((r: any) => (
                  <Link key={r.id} href={`/blogs/${r.slug}`} className="bp-related-card">
                    <div className="bp-related-date">
                      {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="bp-related-title">{r.title}</div>
                    <div className="bp-related-read">Read Article →</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="bp-cta">
          <div className="bp-cta-inner">
            <div>
              <div className="bp-cta-title">Have a <span>Project</span>?</div>
              <p className="bp-cta-sub">Free estimates — no obligation. Call or send a message.</p>
            </div>
            <div className="bp-cta-actions">
              <a href="tel:2482599956" className="bp-btn-primary">☎ Call Now</a>
              <Link href="/contact" className="bp-btn-ghost">Get a Quote →</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}