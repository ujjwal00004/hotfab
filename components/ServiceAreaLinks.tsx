import Link from 'next/link';
import { locations } from '@/data/locations';

/**
 * Crawlable list of service-area city pages. Used on service pages, the
 * footer, and the homepage so /welding/* pages are never orphaned.
 */
export default function ServiceAreaLinks({ current, includeHub = true }: { current?: string; includeHub?: boolean }) {
  return (
    <ul className="hf-areas">
      {locations
        .filter((l) => l.slug !== current)
        .map((l) => (
          <li key={l.slug}>
            <Link href={`/welding/${l.slug}`}>{l.city}, MI</Link>
          </li>
        ))}
      {includeHub && <li><Link href="/welding">All service areas →</Link></li>}
    </ul>
  );
}
