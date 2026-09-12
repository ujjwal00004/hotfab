import type { JsonLdObject } from '@/lib/schema';

/**
 * Server-rendered JSON-LD. Accepts one object or an array of objects.
 * Escapes "<" so a stray "</script>" inside content can't break out of the tag.
 */
export default function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}
