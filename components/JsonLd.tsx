export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HotFab Welding",
    "description": "Family-owned expert welding and custom metal fabrication company in Warren, Michigan with over 25 years experience.",
    "url": "https://yourdomain.com",
    "telephone": "+12482599956",
    "email": "hotfabah@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13118 E 9 Mile Rd",
      "addressLocality": "Warren",
      "addressRegion": "MI",
      "postalCode": "48017",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.45,   // Replace with exact coordinates if you have them
      "longitude": -83.00
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "image": "https://yourdomain.com/hero-welding.jpg",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Welding and Metal Fabrication Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Metal Fabrication" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile On-Site Welding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Steel Work" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}