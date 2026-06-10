import { NextResponse } from 'next/server';
import blogs from '@/data/blogs.json';
import { services } from '@/data/services';

export async function GET() {
  const blogList = (blogs as any[])
    .map((b) => `- [${b.title}](https://www.hotfabwelding.com/blogs/${b.slug})`)
    .join('\n');

  const serviceList = services
    .map((s) => `- [${s.serviceName}](https://www.hotfabwelding.com/services/${s.slug}): ${s.schemaDescription}`)
    .join('\n');

  const text = `# HotFab Welding

> Family-owned welding and custom metal fabrication in Warren, Michigan. Founded 1999. Serving Metro Detroit for 25+ years.

Phone: (248) 259-9956 | Email: hotfabwelding@gmail.com | Address: 13118 E 9 Mile Rd, Warren, MI 48089

## Services

${serviceList}

## Pages

- [Home](https://www.hotfabwelding.com/)
- [Services](https://www.hotfabwelding.com/services)
- [About](https://www.hotfabwelding.com/about)
- [Gallery](https://www.hotfabwelding.com/gallery)
- [FAQ](https://www.hotfabwelding.com/faq)
- [Contact](https://www.hotfabwelding.com/contact)
- [Blog](https://www.hotfabwelding.com/blogs)

## Blog Posts

${blogList}
`;

  return new NextResponse(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}