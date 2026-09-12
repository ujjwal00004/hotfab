// Single source of truth for business identity (NAP), used by:
// metadata helpers, JSON-LD builders, llms.txt, footer, contact page, sitemap.
// Change a fact here and it updates everywhere. Do not hard-code these values
// elsewhere.

export const SITE_URL = 'https://www.hotfabwelding.com';

export const SITE = {
  name: 'HotFab Welding',
  legalName: 'HotFab Welding',
  url: SITE_URL,
  tagline: 'Expert Welding & Custom Metal Fabrication in Warren, MI',
  description:
    'Family-owned welding and custom metal fabrication company in Warren, Michigan. Custom railings, gates, fences, staircases, structural steel, storm shields, and mobile on-site welding across Metro Detroit since 1999.',
  foundingYear: '1999',
  email: 'hotfabwelding@gmail.com',
  phone: {
    display: '(248) 259-9956',
    e164: '+12482599956',
    href: 'tel:2482599956',
  },
  address: {
    street: '13118 E 9 Mile Rd',
    city: 'Warren',
    region: 'MI',
    regionName: 'Michigan',
    postalCode: '48089',
    country: 'US',
    /** Single-line, human readable. */
    full: '13118 E 9 Mile Rd, Warren, MI 48089',
  },
  geo: { latitude: 42.4977, longitude: -83.0166 },
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00', label: 'Mon–Fri 8:00 AM – 5:00 PM' },
    { days: ['Saturday'], opens: '08:00', closes: '14:00', label: 'Sat 8:00 AM – 2:00 PM' },
  ],
  /** Cities/regions the business states it serves (also see data/locations.ts for dedicated pages). */
  serviceArea: {
    primary: 'Warren, Michigan',
    region: 'Metro Detroit',
    counties: ['Macomb County', 'Wayne County', 'Oakland County'],
    cities: [
      'Warren', 'Sterling Heights', 'Detroit', 'Troy', 'Dearborn', 'Livonia',
      'Macomb', 'Clinton Township', 'Roseville', 'Eastpointe',
    ],
  },
  /** Google Maps directions to the shop (safe to use without a Business Profile). */
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=13118+E+9+Mile+Rd,+Warren,+MI+48089',
  /** "Leave a review" link from Google Business Profile (https://g.page/r/.../review). Empty = not rendered. */
  reviewUrl: '',
  /** Public social / directory profiles. Add real URLs here (Google Business Profile, Facebook, Instagram, Yelp…). */
  sameAs: [] as string[],
  /** Slug of the blog post with published price ranges — linked from every service page. */
  pricingGuideSlug: 'welding-cost-guide-michigan-2026',
  ogImage: {
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: 'HotFab Welding — Custom Metal Fabrication in Warren, Michigan',
  },
  analytics: { gaId: 'G-LZVSWPVNQK' },
  verification: { google: 'xsd8cNQkJ9gyHpqvbfjjVqiF9_cp2Oks7G4g7FEabN8' },
} as const;

/** Absolute URL for a site path. Accepts '/', '/services', 'services'. */
export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `${SITE_URL}/${clean}` : SITE_URL;
}
