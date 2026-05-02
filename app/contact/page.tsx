import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — Free Quote for Welding in Warren, MI',
  description: 'Contact HotFab Welding for a free project quote. Call (248) 259-9956 or send a message. Located at 13118 E 9 Mile Rd, Warren, Michigan. Serving Metro Detroit.',
  alternates: { canonical: 'https://www.hotfabwelding.com/contact' },
  openGraph: {
    title: 'Contact HotFab Welding | Free Quote Warren, MI',
    description: 'Get a free quote for custom metal fabrication or on-site welding. Call (248) 259-9956. Warren, Michigan.',
    url: 'https://www.hotfabwelding.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}