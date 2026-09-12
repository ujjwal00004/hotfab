import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { localBusinessSchema, websiteSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';
import './globals.css';

// Fonts used by every page's scoped <style> blocks. Loaded ONCE here (with
// preconnect) instead of via per-page CSS @import, which was render-blocking
// and duplicated on every route.
const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Lora:ital,wght@0,400;0,500;1,400&display=swap';

// NOTE: no `alternates.canonical` here on purpose. `alternates` is shallow-merged
// into child routes, so a site-wide canonical would make every page that forgot
// to set its own canonical point at the homepage (a classic "alternate page with
// proper canonical tag" indexing failure). Each page sets its own via buildMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'Welding and Metal Fabrication',
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_US',
    url: SITE.url,
    title: `${SITE.name} — Warren, Michigan`,
    description: SITE.description,
    images: [{ url: SITE.ogImage.url, width: SITE.ogImage.width, height: SITE.ogImage.height, alt: SITE.ogImage.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Warren MI`,
    description: SITE.description,
    images: [SITE.ogImage.url],
  },
  icons: { icon: '/favicon.ico' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': `US-${SITE.address.region}`,
    'geo.placename': `${SITE.address.city}, ${SITE.address.regionName}`,
    'geo.position': `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
  verification: { google: SITE.verification.google },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0D0D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body>
        {/* Site-wide entity graph: the business + the website. Page-level schema lives in each page. */}
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.analytics.gaId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.analytics.gaId}');`}
        </Script>
      </body>
    </html>
  );
}
