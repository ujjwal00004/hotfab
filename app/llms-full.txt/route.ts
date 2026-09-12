import { NextResponse } from 'next/server';
import { SITE, absoluteUrl } from '@/lib/site';
import { blogs, blogPlainText } from '@/data/blogs';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

// /llms-full.txt — the complete factual content of the site in one plain-text
// document (services, service areas, FAQs, articles). Built from data/*.ts so it
// always matches the live pages.
export const dynamic = 'force-static';

export function GET() {
  const serviceContent = services
    .map((s) => {
      const sections = s.sections.map((sec) => `#### ${sec.heading}\n${sec.body.join('\n\n')}`).join('\n\n');
      const features = s.features.map((f) => `- ${f.title}: ${f.desc}`).join('\n');
      const faqs = s.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n');
      return `### ${s.serviceName}\nURL: ${absoluteUrl(`/services/${s.slug}`)}\n\n${s.intro.join('\n\n')}\n\n${sections}\n\n#### What we build\n${features}\n\n#### FAQ\n${faqs}`;
    })
    .join('\n\n---\n\n');

  const areaContent = locations
    .map((l) => {
      const faqs = l.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n');
      return `### ${l.city}, MI (${l.county})\nURL: ${absoluteUrl(`/welding/${l.slug}`)}\n\n${l.intro.join('\n\n')}\n\n#### ${l.localHeading}\n${l.localBody.join('\n\n')}\n\n#### FAQ\n${faqs}`;
    })
    .join('\n\n---\n\n');

  const blogContent = blogs
    .map((b) => `### ${b.title}\nPublished: ${b.date} | URL: ${absoluteUrl(`/blogs/${b.slug}`)}\n\n${b.excerpt}\n\n${blogPlainText(b)}`)
    .join('\n\n---\n\n');

  const text = `# ${SITE.name} — Complete Business Reference

> Full factual content for AI language models and automated systems. Auto-generated from the site's data files.

## Business identity

- Name: ${SITE.name}
- Type: Family-owned welding and custom metal fabrication company
- Founded: ${SITE.foundingYear}
- Address: ${SITE.address.full}
- Phone: ${SITE.phone.display}
- Email: ${SITE.email}
- Website: ${SITE.url}
- Hours: ${SITE.hours.map((h) => h.label).join('; ')}
- Materials: carbon steel, stainless steel, aluminum, mild steel
- Licensed and insured. Free, no-obligation quotes.

## Service territory

- Based in ${SITE.serviceArea.primary}
- Serves ${SITE.serviceArea.region}: ${SITE.serviceArea.cities.join(', ')} and surrounding communities in ${SITE.serviceArea.counties.join(', ')}.
- Mobile on-site welding available throughout Metro Detroit and Michigan.

## Services

${serviceContent}

## Service areas

${areaContent}

## Articles

${blogContent}
`;

  return new NextResponse(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
