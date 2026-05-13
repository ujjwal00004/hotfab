import type { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: 'FAQ — Welding & Metal Fabrication Questions Answered',
  description: 'Common questions about HotFab Welding services in Warren, MI. Learn about custom fabrication, mobile welding, materials, pricing, and project timelines.',
  alternates: { canonical: 'https://www.hotfabwelding.com/faq' },
  openGraph: {
    title: 'Welding FAQ | HotFab Welding Warren, MI',
    description: 'Answers to common questions about welding, metal fabrication, railings, gates, and on-site welding in Warren, Michigan.',
    url: 'https://www.hotfabwelding.com/faq',
  },
};

export const faqs = [
  { question: 'What welding services does HotFab Welding offer in Warren, MI?', answer: 'HotFab Welding offers three core services in Warren, Michigan: custom metal fabrication (railings, gates, fences, balconies, staircases, sculptures, structural steel), specialty metal solutions (storm shields, security panels, prototypes, artistic installations), and mobile on-site welding (truck and trailer repairs, equipment reinforcement, emergency repairs throughout Metro Detroit).' },
  { question: 'Does HotFab Welding offer mobile or on-site welding near me?', answer: 'Yes. HotFab Welding has a fully equipped mobile welding team that travels to your location anywhere in Metro Detroit and Michigan. This includes Warren, Sterling Heights, Detroit, Troy, Dearborn, Macomb County, and surrounding areas. There is no need to transport heavy metal structures to a shop.' },
  { question: 'How much does custom metal fabrication cost in Warren, Michigan?', answer: 'Pricing depends on the material (steel, stainless steel, aluminum), complexity of the design, and project size. HotFab Welding offers free, no-obligation quotes. Call (248) 259-9956 or use the contact form at hotfabwelding.com/contact to request a detailed estimate.' },
  { question: 'What materials does HotFab Welding work with?', answer: 'HotFab Welding works with carbon steel, stainless steel, aluminum, and mild steel. Each material is chosen based on the project requirements: stainless steel for corrosion resistance and modern aesthetics, aluminum for lightweight outdoor applications, and carbon or mild steel for structural and decorative work.' },
  { question: 'How long has HotFab Welding been in business?', answer: "HotFab Welding is a family-owned business founded in Warren, Michigan in 1999. With over 25 years of experience and more than 2,000 completed projects, it is one of Metro Detroit's most trusted welding and fabrication companies." },
  { question: 'Can HotFab Welding build custom railings and gates?', answer: "Yes. Custom railings and gates are one of HotFab Welding's most common services. This includes interior and exterior stair railings, balcony railings, driveway gates, entry systems, wrought iron fences, and ornamental metalwork — all built to your exact specifications." },
  { question: 'Does HotFab Welding do emergency welding repairs?', answer: 'Yes. HotFab Welding offers same-day and emergency on-site welding repairs across Metro Detroit. Call (248) 259-9956 for urgent service. The mobile welding team can reach most locations within the Detroit metro area quickly.' },
  { question: 'Is HotFab Welding licensed and insured?', answer: 'Yes. HotFab Welding is fully licensed and insured, serving both residential and commercial clients in Warren, Michigan and the broader Metro Detroit area.' },
  { question: 'What is the process for starting a custom metalwork project?', answer: 'The process has four steps: (1) Consultation — HotFab visits your site or discusses your project needs by phone or email. (2) Design & Quote — you receive a free detailed quote with drawings and material recommendations. (3) Fabrication — work is precision-built at the Warren, MI shop at 13118 E 9 Mile Rd. (4) Delivery & Installation — professional on-site installation and final inspection.' },
  { question: 'What areas does HotFab Welding serve?', answer: 'HotFab Welding is based in Warren, Michigan and serves the entire Metro Detroit area, including Sterling Heights, Troy, Dearborn, Livonia, Macomb, Clinton Township, Roseville, Eastpointe, and surrounding Michigan communities.' },
  { question: 'Can HotFab Welding fabricate spiral staircases?', answer: 'Yes. HotFab Welding builds both standard and spiral staircases in steel, stainless steel, and aluminum — for residential homes, commercial buildings, and industrial facilities throughout Michigan.' },
  { question: 'How do I get a free quote from HotFab Welding?', answer: 'You can request a free quote by calling (248) 259-9956, emailing hotfabwelding@gmail.com, or filling out the contact form at hotfabwelding.com/contact. HotFab is available Monday through Friday 8AM–5PM and Saturday 8AM–2PM.' },
];

export default function FaqPage() {
  return (
    <>
      {/* FaqSchema is a server-safe script tag — no interactivity needed */}
      <FaqSchema faqs={faqs} />
      {/* FaqClient handles the accordion click interactions */}
      <FaqClient faqs={faqs} />
    </>
  );
}