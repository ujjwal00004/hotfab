import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import './globals.css';

import Script from "next/script"; // 👈 ADD THIS

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hotfabwelding.com'),
  title: {
    default: 'HotFab Welding | Expert Welding & Custom Metal Fabrication in Warren, MI',
    template: '%s | HotFab Welding — Warren, MI',
  },
  description: 'Family-owned welding company in Warren, Michigan. 25+ years experience in custom railings, gates, fences, balconies, staircases, sculptures, and mobile on-site welding. Free quotes. Call (248) 259-9956.',
  keywords: [
    // Core local SEO
    'welding Warren MI', 'metal fabrication Warren MI', 'custom railings Warren MI',
    'on site welding Michigan', 'mobile welding Detroit', 'steel fabrication Warren',
    'gates and fences Warren MI', 'aluminum welding Michigan', 'structural welding Detroit',
    'HotFab Welding', 'Warren MI welder', 'custom metal fabrication Michigan',
    // AEO: long-tail conversational queries AI engines index
    'best welder near Warren MI', 'who does custom metal fabrication in Warren Michigan',
    'mobile welding service near me Metro Detroit', 'emergency welding repair Michigan',
    'custom staircase railing Warren MI', 'spiral staircase fabrication Michigan',
    'balcony railing fabrication Detroit', 'stainless steel welding Warren',
    // GEO: AI assistants look for these specific phrases
    'welding company Warren Michigan', 'family owned welding shop Metro Detroit',
    'licensed insured welder Michigan', 'on site welding Metro Detroit',
  ],
  authors: [{ name: 'HotFab Welding', url: 'https://www.hotfabwelding.com' }],
  creator: 'HotFab Welding',
  publisher: 'HotFab Welding',
  openGraph: {
    title: 'HotFab Welding — Warren, Michigan',
    description: 'Expert custom metal fabrication and on-site welding services in Warren, MI. 25+ years, 2,000+ projects. Call (248) 259-9956 for a free quote.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HotFab Welding — Custom Metal Fabrication in Warren, Michigan' }],
    url: 'https://www.hotfabwelding.com',
    siteName: 'HotFab Welding',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HotFab Welding | Warren MI',
    description: '25+ years of expert welding and metal fabrication in Warren, Michigan. Call (248) 259-9956.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.hotfabwelding.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,        // AEO: allow Google to show full snippets in AI answers
      'max-video-preview': -1,
    },
  },
  // AEO: Helps AI engines identify geographic relevance
  other: {
    'geo.region': 'US-MI',
    'geo.placename': 'Warren, Michigan',
    'geo.position': '42.4977;-83.0166',
    'ICBM': '42.4977, -83.0166',
    // GEO: Perplexity, ChatGPT, Gemini read these for AI citations
    'citation': 'HotFab Welding, 13118 E 9 Mile Rd, Warren, MI 48089, (248) 259-9956',
    'business:contact_data:locality': 'Warren',
    'business:contact_data:region': 'Michigan',
    'business:contact_data:country_name': 'United States',
  },
  verification: {
    google: 'xsd8cNQkJ9gyHpqvbfjjVqiF9_cp2Oks7G4g7FEabN8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LZVSWPVNQK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LZVSWPVNQK');
          `}
        </Script>
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}