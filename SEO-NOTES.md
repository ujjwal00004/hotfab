# SEO / GEO implementation notes

Single sources of truth — edit these, never hard-code business facts in pages:

- `lib/site.ts` — name, address, phone, email, hours, geo, service areas, social profiles (`sameAs`), OG image.
- `lib/seo.ts` — `buildMetadata()` used by every page for title / description / canonical / OG / Twitter / robots.
- `lib/schema.ts` — JSON-LD builders (LocalBusiness, WebSite, WebPage, Service, Article, Blog, FAQPage, BreadcrumbList).
- `components/seo/JsonLd.tsx`, `components/seo/Breadcrumbs.tsx` — render helpers.
- `data/services.ts`, `data/locations.ts`, `data/blogs.json` (+ `data/blogs.ts`), `data/faqs.ts` — content. Adding an entry updates the page, sitemap, llms.txt and internal links automatically.

Generated routes: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/og-image.jpg` (placeholder in `public/` — replace with a real brand image, 1200×630).

Still to supply (see `lib/site.ts`):
- Public profile URLs for `sameAs` (Google Business Profile, Facebook, Instagram, Yelp, BBB…).
- A real logo file (currently the OG image doubles as the schema logo).
- Confirm Saturday hours (site now says 8 AM–2 PM everywhere).
