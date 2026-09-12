// Schema.org JSON-LD builders. Every builder returns a plain object; render it
// with <JsonLd data={...} /> (components/seo/JsonLd.tsx). Builders only use facts
// from lib/site.ts and the data/ files — nothing is invented here.

import { SITE, absoluteUrl } from '@/lib/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export type JsonLdObject = Record<string, unknown>;

export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const LOGO_ID = `${SITE.url}/#logo`;

export type Crumb = { name: string; path: string };

/* ───────────────────────── Site-wide entities ───────────────────────── */

export function localBusinessSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone.e164,
    email: SITE.email,
    foundingDate: SITE.foundingYear,
    image: [SITE.ogImage.url],
    logo: { '@type': 'ImageObject', '@id': LOGO_ID, url: SITE.ogImage.url, width: SITE.ogImage.width, height: SITE.ogImage.height },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name}, ${SITE.address.full}`)}`,
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      ...SITE.serviceArea.cities.map((name) => ({ '@type': 'City', name })),
      ...SITE.serviceArea.counties.map((name) => ({ '@type': 'AdministrativeArea', name })),
      { '@type': 'State', name: SITE.address.regionName },
    ],
    knowsAbout: ['Welding', 'Metal fabrication', 'Custom railings', 'Driveway gates', 'Metal fences', 'Staircases', 'Structural steel', 'Mobile on-site welding', 'Storm shields'],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Welding and Metal Fabrication Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${absoluteUrl(`/services/${s.slug}`)}#service`,
          name: s.serviceName,
          serviceType: s.serviceType,
          description: s.schemaDescription,
          url: absoluteUrl(`/services/${s.slug}`),
        },
      })),
    },
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    inLanguage: 'en-US',
    publisher: { '@id': BUSINESS_ID },
  };
}

/* ───────────────────────── Page-level entities ──────────────────────── */

export function breadcrumbSchema(crumbs: Crumb[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage';
  image?: string;
}): JsonLdObject {
  const url = absoluteUrl(opts.path);
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: opts.image } } : {}),
  };
}

export function serviceSchema(opts: {
  slug: string;
  name: string;
  serviceType: string;
  description: string;
  image?: string;
}): JsonLdObject {
  const url = absoluteUrl(`/services/${opts.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    ...(opts.image ? { image: opts.image } : {}),
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      ...locations.map((l) => ({ '@type': 'City', name: l.city })),
      { '@type': 'City', name: SITE.address.city },
      { '@type': 'State', name: SITE.address.regionName },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl('/contact'),
      servicePhone: { '@type': 'ContactPoint', telephone: SITE.phone.e164, contactType: 'customer service' },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function articleSchema(opts: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  wordCount?: number;
}): JsonLdObject {
  const url = absoluteUrl(`/blogs/${opts.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: opts.title,
    description: opts.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: 'en-US',
    ...(opts.image ? { image: [opts.image] } : {}),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    // Articles are published by the business; no individual author is recorded in data/blogs.json.
    author: { '@type': 'Organization', '@id': BUSINESS_ID, name: SITE.name, url: SITE.url },
    publisher: { '@id': BUSINESS_ID },
  };
}

export function blogSchema(posts: { slug: string; title: string; date: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${absoluteUrl('/blogs')}#blog`,
    name: `${SITE.name} Blog`,
    url: absoluteUrl('/blogs'),
    publisher: { '@id': BUSINESS_ID },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: absoluteUrl(`/blogs/${p.slug}`),
      datePublished: p.date,
    })),
  };
}

export function imageGallerySchema(opts: { name: string; description: string; images: { url: string; caption: string }[] }): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${absoluteUrl('/gallery')}#gallery`,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl('/gallery'),
    about: { '@id': BUSINESS_ID },
    image: opts.images.map((img) => ({ '@type': 'ImageObject', contentUrl: img.url, caption: img.caption })),
  };
}
