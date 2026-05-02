// AEO: FAQ structured data — surfaces in Google rich snippets and AI answers
// Place <FaqSchema /> on any page with FAQ content

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}