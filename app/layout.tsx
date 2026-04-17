import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  title: 'HotFab Welding | Expert Welding & Custom Metal Fabrication in Warren, MI',
  description: 'Family-owned welding company in Warren, Michigan. 25+ years experience in custom railings, gates, fences, balconies, staircases, sculptures, and mobile on-site welding. Serving Metro Detroit.',
  keywords: [
    'welding Warren MI', 'metal fabrication Warren MI', 'custom railings Warren MI',
    'on site welding Michigan', 'mobile welding Detroit', 'steel fabrication Warren',
    'gates and fences Warren MI', 'aluminum welding Michigan', 'structural welding Detroit',
    'HotFab Welding', 'Warren MI welder'
  ],
  authors: [{ name: 'HotFab Welding' }],
  openGraph: {
    title: 'HotFab Welding - Warren, Michigan',
    description: 'Expert custom metal fabrication and on-site welding services in Warren, MI. Call (248) 259-9956 for free quote.',
    images: [{ url: '/og-image.jpg' }], // Add a good hero image later
    url: 'https://yourdomain.com',
    siteName: 'HotFab Welding',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HotFab Welding | Warren MI',
    description: '25+ years of expert welding and metal fabrication in Warren, Michigan.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}