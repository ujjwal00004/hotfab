import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema, type Crumb } from '@/lib/schema';

/**
 * Real-HTML breadcrumb trail + matching BreadcrumbList JSON-LD.
 * Pass the full trail including Home; the last crumb is rendered as the current page.
 */
export default function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className={className ?? 'hf-crumbs'}>
        <ol className="hf-crumbs-list">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.path} className="hf-crumbs-item">
                {last ? (
                  <span aria-current="page" className="hf-crumbs-current">{c.name}</span>
                ) : (
                  <Link href={c.path}>{c.name}</Link>
                )}
                {!last && <span aria-hidden="true" className="hf-crumbs-sep">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
