import { NextResponse } from 'next/server';
import { SITE, absoluteUrl } from '@/lib/site';
import { blogs } from '@/data/blogs';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

// /llms.txt — concise, machine-readable overview of the site for AI assistants
// and crawlers (llmstxt.org convention). Generated from the same data files
// that power the pages, so it never drifts from what the site actually says.
export const dynamic = 'force-static';

export function GET() {
  const serviceList = services
    .map((s) => `- [${s.serviceName}](${absoluteUrl(`/services/${s.slug}`)}): ${s.schemaDescription}`)
    .join('\n');

  const areaList = locations
    .map((l) => `- [${l.city}, MI (${l.county})](${absoluteUrl(`/welding/${l.slug}`)})`)
    .join('\n');

  const blogList = blogs
    .map((b) => `- [${b.title}](${absoluteUrl(`/blogs/${b.slug}`)}) — ${b.excerpt}`)
    .join('\n');

  const hours = SITE.hours.map((h) => h.label).join(', ');

  const text = `# ${SITE.name}

> ${SITE.description}

- Website: ${SITE.url}
- Phone: ${SITE.phone.display}
- Email: ${SITE.email}
- Address: ${SITE.address.full}
- Hours: ${hours}
- Founded: ${SITE.foundingYear} (family-owned)
- Primary service area: ${SITE.serviceArea.primary}; ${SITE.serviceArea.region} (${SITE.serviceArea.counties.join(', ')})
- Materials: carbon steel, stainless steel, aluminum, mild steel
- Free, no-obligation quotes: ${absoluteUrl('/contact')}

## Services

${serviceList}

## Service areas

${areaList}
- [All service areas](${absoluteUrl('/welding')})

## Company

- [About ${SITE.name}](${absoluteUrl('/about')})
- [Contact / request a quote](${absoluteUrl('/contact')})
- [Project gallery](${absoluteUrl('/gallery')})
- [Frequently asked questions](${absoluteUrl('/faq')})

## Blog

${blogList}

## Optional

- [Full-text reference for AI systems](${absoluteUrl('/llms-full.txt')})
- [Sitemap](${absoluteUrl('/sitemap.xml')})
`;

  return new NextResponse(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
