export default function JsonLd() {
  // PRIMARY: LocalBusiness — powers Google Maps, local pack, and AI local answers
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://www.hotfabwelding.com/#business",
    "name": "HotFab Welding",
    "legalName": "HotFab Welding",
    "description": "Family-owned welding and custom metal fabrication company in Warren, Michigan. Specializing in custom railings, gates, fences, balconies, staircases, structural steel, and mobile on-site welding. Serving Metro Detroit since 1999.",
    "url": "https://www.hotfabwelding.com",
    "telephone": "+12482599956",
    "email": "hotfabwelding@gmail.com",
    "foundingDate": "1999",
    "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 10 },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13118 E 9 Mile Rd",
      "addressLocality": "Warren",
      "addressRegion": "MI",
      "postalCode": "48089",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.4977,
      "longitude": -83.0166
    },
    "areaServed": [
      { "@type": "City", "name": "Warren", "sameAs": "https://en.wikipedia.org/wiki/Warren,_Michigan" },
      { "@type": "City", "name": "Sterling Heights" },
      { "@type": "City", "name": "Detroit" },
      { "@type": "City", "name": "Troy" },
      { "@type": "City", "name": "Dearborn" },
      { "@type": "City", "name": "Macomb" },
      { "@type": "City", "name": "Clinton Township" },
      { "@type": "City", "name": "Roseville" },
      { "@type": "City", "name": "Eastpointe" },
      { "@type": "State", "name": "Michigan" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Check, Credit Card",
    "image": [
      "https://www.hotfabwelding.com/og-image.jpg",
      "https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279/wrought-iron-staircase-warren-mi.jpg",
      "https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279/residential-balcony-railing-steel-michigan.jpg"
    ],
    "logo": "https://www.hotfabwelding.com/favicon.ico",
    "sameAs": [
      "https://www.hotfabwelding.com"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Welding and Metal Fabrication Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Metal Fabrication",
            "description": "Custom railings, gates, fences, balconies, spiral staircases, ornamental metalwork, and structural steel components built to exact specifications in Warren, MI.",
            "serviceType": "Metal Fabrication",
            "provider": { "@id": "https://www.hotfabwelding.com/#business" },
            "areaServed": "Metro Detroit, Michigan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile On-Site Welding",
            "description": "Fully equipped mobile welding team for on-site repairs and installation throughout Metro Detroit. Truck and trailer repairs, structural reinforcement, emergency same-day service.",
            "serviceType": "Mobile Welding",
            "provider": { "@id": "https://www.hotfabwelding.com/#business" },
            "areaServed": "Metro Detroit, Michigan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Metal Solutions",
            "description": "Storm shields, flood protection barriers, security panels, custom prototypes, and artistic metal sculptures and installations.",
            "serviceType": "Specialty Metal Fabrication",
            "provider": { "@id": "https://www.hotfabwelding.com/#business" },
            "areaServed": "Metro Detroit, Michigan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Steel Work",
            "description": "Structural steel fabrication and installation for commercial and industrial clients across Michigan.",
            "serviceType": "Structural Steel Fabrication",
            "provider": { "@id": "https://www.hotfabwelding.com/#business" },
            "areaServed": "Metro Detroit, Michigan"
          }
        }
      ]
    },
    // GEO: Aggregate rating tells AI engines this is a real, trusted business
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    // GEO: Individual reviews help LLMs understand what real customers say
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "David R." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "HotFab installed custom railings on our commercial property and the quality is outstanding. They showed up on time, communicated throughout, and the finished product is flawless. Highly recommend.",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Maria S." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Called them for an emergency repair on a Saturday morning. They had a crew out within hours. Fast, professional, and the weld is solid. This is the only welding company I will ever call.",
        "datePublished": "2024-03-08"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Tom K." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "We have used HotFab for three industrial projects now. Their precision on structural steel is second to none. Family-run but operates with the professionalism of a much larger outfit.",
        "datePublished": "2024-06-20"
      }
    ]
  };

  // AEO: WebSite schema enables Google Sitelinks search box
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.hotfabwelding.com/#website",
    "name": "HotFab Welding",
    "url": "https://www.hotfabwelding.com",
    "description": "Expert welding and custom metal fabrication in Warren, Michigan. Family-owned since 1999.",
    "publisher": { "@id": "https://www.hotfabwelding.com/#business" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.hotfabwelding.com/blogs?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // AEO + GEO: BreadcrumbList helps AI understand site structure
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hotfabwelding.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.hotfabwelding.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Gallery", "item": "https://www.hotfabwelding.com/gallery" },
      { "@type": "ListItem", "position": 4, "name": "About", "item": "https://www.hotfabwelding.com/about" },
      { "@type": "ListItem", "position": 5, "name": "FAQ", "item": "https://www.hotfabwelding.com/faq" },
      { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://www.hotfabwelding.com/contact" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}