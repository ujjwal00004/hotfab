import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

async function getBlogs() {
  const res = await import('@/data/blogs.json');
  return res.default;
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

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

        .bl-wrap {
          font-family: 'Barlow', sans-serif;
          background: var(--iron);
          color: var(--white);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .bl-hero {
          position: relative;
          padding: 160px 48px 100px;
          overflow: hidden;
        }
        .bl-hero-line {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge), transparent);
        }
        .bl-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }
        .bl-hero-glow {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 700px; height: 340px;
          background: radial-gradient(ellipse, rgba(200,65,10,0.1) 0%, transparent 65%);
          pointer-events: none;
        }

        .bl-hero-inner {
          max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 48px;
        }

        .bl-hero-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .bl-hero-tag::before { content: ''; width: 32px; height: 1px; background: var(--forge); display: block; }

        .bl-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 10vw, 120px);
          line-height: 0.9; letter-spacing: 0.01em;
          color: var(--white);
        }
        .bl-hero-title em { color: var(--forge); font-style: normal; }

        .bl-hero-sub {
          font-size: 17px; font-weight: 300; color: var(--ash);
          line-height: 1.8; margin-top: 28px; max-width: 520px;
        }

        /* Article count badge */
        .bl-hero-count {
          flex-shrink: 0;
          border: 1px solid var(--slag);
          background: var(--steel);
          padding: 28px 36px; text-align: center;
        }
        .bl-hero-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px; line-height: 1; color: var(--white);
        }
        .bl-hero-count-num span { color: var(--forge); }
        .bl-hero-count-label {
          font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--smoke); margin-top: 6px;
        }

        /* ── FEATURED (first blog) ── */
        .bl-featured-wrap {
          padding: 0 48px;
          background: var(--iron);
        }
        .bl-featured-inner {
          max-width: 1100px; margin: 0 auto;
        }
        .bl-featured-label {
          font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 16px; display: flex; align-items: center; gap: 12px;
        }
        .bl-featured-label::after { content: ''; flex: 1; height: 1px; background: var(--slag); }

        .bl-featured-card {
          display: grid; grid-template-columns: 1.2fr 1fr;
          border: 1px solid var(--slag);
          background: var(--steel);
          text-decoration: none; overflow: hidden;
          position: relative;
          transition: border-color 0.3s;
          margin-bottom: 80px;
        }
        .bl-featured-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--forge);
        }
        .bl-featured-card:hover { border-color: rgba(200,65,10,0.5); }

        .bl-featured-img {
          position: relative; min-height: 380px; overflow: hidden;
          background: var(--iron);
        }
        .bl-featured-img img {
          object-fit: cover;
          filter: brightness(0.65) saturate(0.5);
          transition: filter 0.5s ease, transform 0.6s ease;
        }
        .bl-featured-card:hover .bl-featured-img img {
          filter: brightness(0.8) saturate(0.65);
          transform: scale(1.04);
        }
        .bl-featured-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, transparent 60%, rgba(26,26,26,0.9) 100%);
          z-index: 1;
        }

        .bl-featured-content {
          padding: 52px 52px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .bl-feat-date {
          font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--forge); margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .bl-feat-date::before { content: ''; width: 20px; height: 1px; background: var(--forge); display: block; }
        .bl-feat-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px; line-height: 1.05; letter-spacing: 0.5px;
          color: var(--white); margin-bottom: 20px;
          transition: color 0.2s;
        }
        .bl-featured-card:hover .bl-feat-title { color: var(--forge); }
        .bl-feat-excerpt {
          font-size: 14px; font-weight: 300; color: var(--smoke);
          line-height: 1.8; margin-bottom: 36px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bl-feat-cta {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--ash); transition: color 0.2s;
        }
        .bl-featured-card:hover .bl-feat-cta { color: var(--forge); }
        .bl-feat-arrow {
          width: 32px; height: 32px; border: 1px solid var(--slag);
          display: flex; align-items: center; justify-content: center; font-size: 13px;
          color: var(--smoke); transition: all 0.25s;
        }
        .bl-featured-card:hover .bl-feat-arrow {
          border-color: var(--forge); color: var(--forge);
          background: rgba(200,65,10,0.08); transform: translate(2px,-2px);
        }

        /* ── GRID ── */
        .bl-grid-section {
          padding: 0 48px 120px;
          background: var(--iron);
        }
        .bl-grid-inner { max-width: 1100px; margin: 0 auto; }

        .bl-grid-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 40px;
        }
        .bl-grid-label {
          font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
          color: var(--forge); display: flex; align-items: center; gap: 12px;
        }
        .bl-grid-label::after { content: ''; flex: 1; height: 1px; background: var(--slag); display: block; min-width: 60px; }
        .bl-grid-count {
          font-size: 11px; color: var(--smoke); letter-spacing: 1px;
        }

        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--slag);
        }

        /* ── EMPTY STATE ── */
        .bl-empty {
          border: 1px solid var(--slag); background: var(--steel);
          padding: 120px 40px; text-align: center;
        }
        .bl-empty-icon {
          width: 64px; height: 64px; border: 1px solid var(--slag);
          background: var(--iron);
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; margin: 0 auto 28px;
        }
        .bl-empty-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px; color: var(--white); margin-bottom: 12px;
        }
        .bl-empty-sub { font-size: 15px; color: var(--smoke); font-weight: 300; }

        /* ── CTA STRIP ── */
        .bl-cta-strip {
          background: var(--steel); padding: 72px 48px;
          border-top: 1px solid var(--slag);
          position: relative;
        }
        .bl-cta-strip::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--forge) 40%, var(--forge) 60%, transparent);
        }
        .bl-cta-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap;
        }
        .bl-cta-left {}
        .bl-cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px; line-height: 1; color: var(--white);
        }
        .bl-cta-title span { color: var(--forge); }
        .bl-cta-sub {
          font-size: 15px; color: var(--smoke); font-weight: 300; margin-top: 8px;
        }
        .bl-cta-actions { display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }
        .bl-btn-primary {
          background: var(--forge); color: var(--white);
          padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--forge);
          transition: all 0.2s; white-space: nowrap;
        }
        .bl-btn-primary:hover { background: var(--forge-light); border-color: var(--forge-light); }
        .bl-btn-ghost {
          background: transparent; color: var(--white);
          padding: 16px 36px; font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; text-decoration: none; border: 2px solid var(--slag);
          transition: all 0.2s; white-space: nowrap;
        }
        .bl-btn-ghost:hover { border-color: var(--white); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .bl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .bl-hero { padding: 140px 24px 80px; }
          .bl-hero-inner { grid-template-columns: 1fr; }
          .bl-hero-count { display: none; }
          .bl-featured-wrap { padding: 0 24px; }
          .bl-featured-card { grid-template-columns: 1fr; }
          .bl-featured-img { min-height: 260px; }
          .bl-featured-img-overlay { background: linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.95)); }
          .bl-featured-content { padding: 36px 28px; }
          .bl-grid-section { padding: 0 24px 80px; }
          .bl-grid { grid-template-columns: 1fr; }
          .bl-cta-strip { padding: 56px 24px; }
          .bl-cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="bl-wrap">

        {/* ── HERO ── */}
        <section className="bl-hero">
          <div className="bl-hero-line" />
          <div className="bl-hero-grid" />
          <div className="bl-hero-glow" />
          <div className="bl-hero-inner">
            <div>
              <div className="bl-hero-tag">Knowledge from the Shop Floor</div>
              <h1 className="bl-hero-title">
                The <em>HotFab</em><br />Blog
              </h1>
              <p className="bl-hero-sub">
                Real welding tips, project breakdowns, shop stories, and practical advice from 25+ years in the trade.
              </p>
            </div>
            <div className="bl-hero-count">
              <div className="bl-hero-count-num">{blogs.length}<span>+</span></div>
              <div className="bl-hero-count-label">Articles<br />&amp; Guides</div>
            </div>
          </div>
        </section>

        {blogs.length > 0 ? (
          <>
            {/* ── FEATURED POST ── */}
            <div className="bl-featured-wrap">
              <div className="bl-featured-inner">
                <div className="bl-featured-label">Featured Article</div>
                <Link href={`/blogs/${blogs[0].slug}`} className="bl-featured-card">
                  <div className="bl-featured-img">
                    <img src={blogs[0].image} alt={blogs[0].title} style={{position:'absolute',inset:0,width:'100%',height:'100%'}} />
                    <div className="bl-featured-img-overlay" />
                  </div>
                  <div className="bl-featured-content">
                    <div className="bl-feat-date">
                      {new Date(blogs[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h2 className="bl-feat-title">{blogs[0].title}</h2>
                    <p className="bl-feat-excerpt">{blogs[0].excerpt}</p>
                    <div className="bl-feat-cta">
                      Read Article
                      <span className="bl-feat-arrow">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* ── GRID ── */}
            {blogs.length > 1 && (
              <section className="bl-grid-section">
                <div className="bl-grid-inner">
                  <div className="bl-grid-header">
                    <div className="bl-grid-label">All Articles</div>
                    <span className="bl-grid-count">{blogs.length - 1} more {blogs.length - 1 === 1 ? 'post' : 'posts'}</span>
                  </div>
                  <div className="bl-grid">
                    {blogs.slice(1).map((blog: any) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <section className="bl-grid-section">
            <div className="bl-grid-inner">
              <div className="bl-empty">
                <div className="bl-empty-icon">✦</div>
                <div className="bl-empty-title">No Posts Yet</div>
                <p className="bl-empty-sub">We're forging new articles. Check back soon.</p>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA STRIP ── */}
        <div className="bl-cta-strip">
          <div className="bl-cta-inner">
            <div className="bl-cta-left">
              <div className="bl-cta-title">Ready to <span>Start</span> a Project?</div>
              <p className="bl-cta-sub">Talk to our team — free estimates, no obligation.</p>
            </div>
            <div className="bl-cta-actions">
              <a href="tel:2482599956" className="bl-btn-primary">☎ Call Now</a>
              <Link href="/contact" className="bl-btn-ghost">Get a Free Quote →</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}