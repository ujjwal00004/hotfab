import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery — Custom Metalwork & Welding Projects Warren, MI',
  description: 'Browse HotFab Welding project gallery: custom railings, gates, balconies, staircases, sculptures, and on-site welding jobs across Warren, Michigan and Metro Detroit.',
  alternates: { canonical: 'https://www.hotfabwelding.com/gallery' },
  openGraph: {
    title: 'Project Gallery | HotFab Welding Warren, MI',
    description: 'See our custom metalwork: railings, gates, staircases, sculptures and more. Warren, Michigan welding and fabrication.',
    url: 'https://www.hotfabwelding.com/gallery',
    images: [{ url: 'https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279/wrought-iron-staircase-warren-mi.jpg', width: 800, height: 600, alt: 'Wrought iron staircase railing by HotFab Welding Warren MI' }],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}