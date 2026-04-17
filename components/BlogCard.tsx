import Link from 'next/link';
import Image from 'next/image';

type Blog = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  const formatted = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600&display=swap');

        .bc-card {
          display: block;
          text-decoration: none;
          background: #1A1A1A;
          border: 1px solid #2C2C2C;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease;
          font-family: 'Barlow', sans-serif;
        }
        .bc-card:hover {
          border-color: rgba(200, 65, 10, 0.45);
        }

        /* Forge-orange left-edge reveal */
        .bc-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 2px;
          background: #C8410A;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.4s ease;
          z-index: 2;
        }
        .bc-card:hover::before {
          transform: scaleY(1);
        }

        /* Image wrapper */
        .bc-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #0D0D0D;
        }
        .bc-image-wrap img {
          object-fit: cover;
          filter: brightness(0.7) saturate(0.55);
          transition: filter 0.5s ease, transform 0.6s ease;
        }
        .bc-card:hover .bc-image-wrap img {
          filter: brightness(0.85) saturate(0.7);
          transform: scale(1.04);
        }

        /* Gradient overlay at bottom of image */
        .bc-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.95) 100%);
          z-index: 1;
        }

        /* Date badge overlapping image bottom */
        .bc-date {
          position: absolute;
          bottom: 16px; left: 24px;
          z-index: 2;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #C8410A;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bc-date::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #C8410A;
        }

        /* Content */
        .bc-content {
          padding: 28px 28px 32px;
        }

        .bc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 0.5px;
          line-height: 1.1;
          color: #F5F3EF;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s;
        }
        .bc-card:hover .bc-title {
          color: #C8410A;
        }

        .bc-excerpt {
          font-size: 13px;
          font-weight: 300;
          color: #6B6B6B;
          line-height: 1.8;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 28px;
        }

        /* Read more row */
        .bc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #2C2C2C;
          padding-top: 20px;
        }
        .bc-read {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #6B6B6B;
          transition: color 0.2s;
        }
        .bc-card:hover .bc-read {
          color: #C8410A;
        }

        .bc-arrow {
          width: 32px;
          height: 32px;
          border: 1px solid #2C2C2C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #6B6B6B;
          transition: all 0.25s;
          flex-shrink: 0;
        }
        .bc-card:hover .bc-arrow {
          border-color: #C8410A;
          color: #C8410A;
          background: rgba(200,65,10,0.08);
          transform: translate(2px, -2px);
        }
      `}</style>

      <Link href={`/blogs/${blog.slug}`} className="bc-card">
        {/* Image */}
        <div className="bc-image-wrap">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
          />
          <div className="bc-image-overlay" />
          <div className="bc-date">{formatted}</div>
        </div>

        {/* Content */}
        <div className="bc-content">
          <h3 className="bc-title">{blog.title}</h3>
          <p className="bc-excerpt">{blog.excerpt}</p>

          <div className="bc-footer">
            <span className="bc-read">Read Article</span>
            <span className="bc-arrow">→</span>
          </div>
        </div>
      </Link>
    </>
  );
}