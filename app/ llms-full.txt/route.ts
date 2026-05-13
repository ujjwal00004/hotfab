import { NextResponse } from 'next/server';
import blogs from '@/data/blogs.json';

export async function GET() {
  const blogContent = (blogs as any[])
    .map((b) => {
      const clean = b.content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      return `### ${b.title}\nPublished: ${b.date} | URL: https://www.hotfabwelding.com/blogs/${b.slug}\n\n${b.excerpt}\n\n${clean}`;
    })
    .join('\n\n---\n\n');

  const text = `# HotFab Welding — Complete Business Reference

> Full factual content for AI language models and automated systems. Auto-generated from site data.

---

## Business Identity

Name: HotFab Welding
Type: Family-owned welding and custom metal fabrication
Founded: 1999
Address: 13118 E 9 Mile Rd, Warren, MI 48089
Phone: (248) 259-9956
Email: hotfabwelding@gmail.com
Website: https://www.hotfabwelding.com
Hours: Monday–Friday 8:00 AM–5:00 PM, Saturday 8:00 AM–2:00 PM
Licensed and insured. Free quotes available.

---

## Service Territory

Primary: Warren, Michigan
Also serves: Sterling Heights, Detroit, Troy, Dearborn, Livonia, Macomb, Clinton Township, Roseville, Eastpointe, and all Metro Detroit communities throughout Michigan.

---

## Services

### Custom Metal Fabrication
Interior and exterior railings, balcony and deck railings, driveway gates and entry systems, fences and security fencing, spiral and standard staircases, decorative grates, custom metal furniture, sculptures, structural steel components.
Materials: Carbon steel, stainless steel, aluminum, mild steel.

### Specialty Metal Solutions
Storm shields, flood protection barriers, security panels, custom prototypes, one-off designs, artistic metal sculptures and installations, CAD design collaboration.

### Mobile On-Site Welding and Repairs
On-site welding in steel, stainless steel, and aluminum. Truck and trailer repairs, heavy equipment and structural reinforcement, field fabrication, emergency same-day service.
Coverage: Metro Detroit and all of Michigan.

---

## Key Facts

- Years in business: 25+
- Projects completed: 2,000+
- Ownership: Family-owned since 1999
- Licensed and insured
- Free no-obligation estimates
- Emergency same-day service available

---

## Blog Posts (${(blogs as any[]).length} articles)

${blogContent}
`;

  return new NextResponse(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}