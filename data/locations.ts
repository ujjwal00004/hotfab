// City / service-area landing pages.
// Each entry powers one page at /welding/<slug> via components/LocationPage.tsx,
// plus the /welding hub. Add a city by appending an object here — the page,
// schema, sitemap, llms.txt, and hub list all update automatically.
//
// IMPORTANT: keep each city's copy genuinely unique (local angle, neighborhoods,
// relationship to the Warren shop). Near-duplicate "doorway" pages get filtered
// by Google and can hurt the whole set.

export type LocationFaq = { question: string; answer: string };

export type Location = {
  slug: string;          // e.g. 'sterling-heights-mi'
  city: string;          // 'Sterling Heights'
  county: string;        // 'Macomb County'
  title: string;         // metadata <title>
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  heroSub: string;
  intro: string[];
  localHeading: string;
  localBody: string[];
  faqs: LocationFaq[];
  image: string;
};

const IMG = 'https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279';

export const locations: Location[] = [
  // 1 ─ Sterling Heights ──────────────────────────────────────────────────
  {
    slug: 'sterling-heights-mi',
    city: 'Sterling Heights',
    county: 'Macomb County',
    title: 'Welding & Metal Fabrication in Sterling Heights, MI | HotFab',
    metaDescription:
      'Custom welding and metal fabrication for Sterling Heights, MI. Railings, decks, fences, gates, and mobile on-site welding — minutes from our Warren shop. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Sterling Heights, MI | HotFab Welding',
    ogDescription:
      'Custom railings, deck railings, fences, gates, and mobile welding for Sterling Heights homes and businesses. Family-owned, 25+ years.',
    h1: 'Welding & Metal Fabrication in Sterling Heights, MI',
    heroSub:
      'Custom railings, fences, gates, and mobile on-site welding for Sterling Heights homes and businesses — from a family-owned shop just minutes south in Warren.',
    intro: [
      'Sterling Heights sits directly north of our Warren shop, which makes it one of the closest communities we serve — usually a short drive for measurements, installs, and mobile repairs. HotFab Welding has fabricated and installed custom metalwork for Sterling Heights homeowners and businesses for years.',
      'As one of the largest residential suburbs in Macomb County, Sterling Heights keeps us busy with deck and balcony railings, backyard fencing, and driveway gates — plus on-site repair calls we can reach quickly because of how close it is.',
    ],
    localHeading: 'What we build most in Sterling Heights',
    localBody: [
      'The bulk of our Sterling Heights work is residential: powder-coated steel and aluminum deck railings that survive Michigan winters, ornamental fencing, and custom gates that lift curb appeal on the area\u2019s many subdivision homes. Aluminum is especially popular here for its rust-free, low-maintenance finish around decks and pools.',
      'Because we are so close, Sterling Heights is also a strong fit for our mobile welding service — truck, trailer, and equipment repairs handled at your driveway or jobsite without the cost of hauling anything to a shop.',
    ],
    faqs: [
      {
        question: 'Do you serve all of Sterling Heights?',
        answer:
          'Yes. Sterling Heights is one of our closest service areas — directly north of our Warren shop — so we cover the entire city for fabrication, installation, and mobile on-site welding.',
      },
      {
        question: 'How fast can you get to Sterling Heights for a repair?',
        answer:
          'Because Sterling Heights borders Warren, our mobile team can usually reach it quickly, which makes it ideal for same-day and emergency welding repairs. Call (248) 259-9956 for a current arrival window.',
      },
    ],
    image: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
  },

  // 2 ─ Troy ─────────────────────────────────────────────────────────────
  {
    slug: 'troy-mi',
    city: 'Troy',
    county: 'Oakland County',
    title: 'Welding & Custom Metalwork in Troy, MI | HotFab Welding',
    metaDescription:
      'Custom metal fabrication for Troy, MI. Interior staircases, ornamental and glass-and-steel railings, and commercial handrails for Troy homes and businesses. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Custom Metalwork in Troy, MI | HotFab Welding',
    ogDescription:
      'Interior staircases, ornamental railings, glass-and-steel systems, and commercial handrails for Troy, Michigan. Family-owned, 25+ years.',
    h1: 'Welding & Custom Metalwork in Troy, MI',
    heroSub:
      'Interior staircases, ornamental and glass-and-steel railings, and commercial handrails for Troy homes and businesses — designed and built to your exact spec.',
    intro: [
      'Troy, in Oakland County, is known for its upscale residential neighborhoods and busy Big Beaver business corridor. The projects we take on in Troy tend to reflect that: refined interior staircases, statement railings, and clean commercial metalwork where finish and detail matter as much as strength.',
      'HotFab Welding brings 25+ years of fabrication experience to Troy clients who want metalwork that looks designed, not just installed.',
    ],
    localHeading: 'A focus on finish and design in Troy',
    localBody: [
      'For Troy homes, we frequently build interior stair railings, modern glass-and-steel systems, and ornamental ironwork in mild steel finished to look like traditional wrought iron. These are the showpiece projects where powder-coat quality and weld cleanliness are everything.',
      'On the commercial side, Troy\u2019s office and retail corridor calls for ADA-compliant handrails, guardrails, and structural fabrication that passes inspection the first time. We work from your drawings and coordinate with contractors to keep projects on schedule.',
    ],
    faqs: [
      {
        question: 'Do you do high-end interior railings in Troy?',
        answer:
          'Yes. Troy is one of the areas where we do the most interior stair railings, glass-and-steel systems, and ornamental ironwork, with a focus on finish quality and custom design. We can match an existing style or design something new with you.',
      },
      {
        question: 'Can you handle commercial handrail and code work in Troy?',
        answer:
          'Yes. We fabricate ADA-compliant handrails and code-compliant guardrails for Troy offices, retail, and multi-family buildings, working from your drawings and coordinating with your contractor.',
      },
    ],
    image: `${IMG}/wrought-iron-staircase-warren-mi.jpg`,
  },

  // 3 ─ Detroit ──────────────────────────────────────────────────────────
  {
    slug: 'detroit-mi',
    city: 'Detroit',
    county: 'Wayne County',
    title: 'Welding & Metal Fabrication in Detroit, MI | HotFab Welding',
    metaDescription:
      'Custom and commercial welding for Detroit, MI. Ornamental ironwork for historic homes, security gates, structural steel, and on-site industrial repair. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Detroit, MI | HotFab Welding',
    ogDescription:
      'Ornamental ironwork, security gates and panels, structural steel, and mobile industrial welding for Detroit. Family-owned, 25+ years.',
    h1: 'Welding & Metal Fabrication in Detroit, MI',
    heroSub:
      'From ornamental ironwork on historic homes to security gates, structural steel, and on-site industrial repairs — full-service welding for Detroit\u2019s homes and businesses.',
    intro: [
      'Detroit\u2019s mix of historic housing stock, dense commercial property, and active industrial sites means the welding work here runs the full range — and HotFab Welding handles all of it. We serve Detroit homeowners restoring period ironwork and businesses that need security, structure, and fast on-site repair.',
      'With 25+ years of experience and a fully mobile team, we can fabricate in our Warren shop or bring the work to your Detroit location.',
    ],
    localHeading: 'Detroit\u2019s range: historic, commercial, and industrial',
    localBody: [
      'Detroit\u2019s older neighborhoods are full of ornamental ironwork — porch railings, fences, and gates — that needs repair, matching, or full re-fabrication. We reproduce historical patterns in mild steel that are stronger and more repairable than the originals while looking the part.',
      'For commercial and industrial Detroit clients we build security gates and panels, structural steel components, and provide mobile on-site welding for equipment and structural repairs that cannot afford downtime. Same-day and emergency service is available across the city.',
    ],
    faqs: [
      {
        question: 'Can you match or repair old ornamental ironwork in Detroit?',
        answer:
          'Yes. Detroit\u2019s historic homes often need ironwork repaired, extended, or re-fabricated. We reproduce traditional patterns in modern mild steel that is stronger and easier to maintain than the original, while keeping the period look.',
      },
      {
        question: 'Do you offer on-site industrial welding in Detroit?',
        answer:
          'Yes. Our mobile team handles structural reinforcement, equipment repair, and emergency welding at Detroit jobsites and facilities, so a failed weld does not mean days of downtime waiting for a shop.',
      },
    ],
    image: `${IMG}/ornamental-balcony-railing-michigan.jpg`,
  },

  // 4 ─ Dearborn ─────────────────────────────────────────────────────────
  {
    slug: 'dearborn-mi',
    city: 'Dearborn',
    county: 'Wayne County',
    title: 'Welding & Metal Fabrication in Dearborn, MI | HotFab Welding',
    metaDescription:
      'Custom welding for Dearborn, MI. Fences, driveway and security gates, ADA handrails, and commercial metal fabrication for Dearborn homes and businesses. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Dearborn, MI | HotFab Welding',
    ogDescription:
      'Fences, gates, ADA handrails, and commercial fabrication for Dearborn, Michigan. Family-owned, 25+ years of metalwork.',
    h1: 'Welding & Metal Fabrication in Dearborn, MI',
    heroSub:
      'Fences, driveway and security gates, ADA handrails, and commercial metal fabrication for Dearborn\u2019s homes and businesses.',
    intro: [
      'Dearborn blends established residential neighborhoods with a strong commercial and institutional base in southwest Wayne County. HotFab Welding serves both sides of that — homeowners adding fences, gates, and railings, and businesses needing code-compliant commercial metalwork.',
      'Our family-owned shop has built custom metal for Metro Detroit for over 25 years, and we bring the same quality and direct, no-handoff service to every Dearborn project.',
    ],
    localHeading: 'Residential and commercial work in Dearborn',
    localBody: [
      'For Dearborn homes we fabricate and install ornamental fencing, driveway and pedestrian gates, and interior and exterior railings — primed and powder coated to last through Michigan\u2019s freeze-thaw seasons.',
      'For Dearborn\u2019s commercial and institutional buildings, we build ADA-compliant handrails, security gates and panels, and structural steel to spec, working from your drawings and coordinating with your contractor to pass inspection.',
    ],
    faqs: [
      {
        question: 'Do you build commercial gates and fencing in Dearborn?',
        answer:
          'Yes. We fabricate and install security gates, perimeter fencing, and ornamental gates for Dearborn commercial properties, plus matching residential fences and driveway gates for homes.',
      },
      {
        question: 'Are your Dearborn handrails ADA-compliant?',
        answer:
          'Yes. For Dearborn commercial and institutional buildings we fabricate ADA-compliant handrails mounted 34 to 38 inches high with a graspable 1.25 to 2 inch cross-section, built to pass inspection.',
      },
    ],
    image: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
  },

  // 5 ─ Clinton Township ─────────────────────────────────────────────────
  {
    slug: 'clinton-township-mi',
    city: 'Clinton Township',
    county: 'Macomb County',
    title: 'Welding & Metal Fabrication in Clinton Township, MI | HotFab',
    metaDescription:
      'Custom welding for Clinton Township, MI. Deck and balcony railings, fencing, gates, and mobile on-site repair for homes and businesses. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Clinton Township, MI | HotFab Welding',
    ogDescription:
      'Deck and balcony railings, fences, gates, and mobile welding for Clinton Township, Michigan. Family-owned, 25+ years.',
    h1: 'Welding & Metal Fabrication in Clinton Township, MI',
    heroSub:
      'Deck and balcony railings, fencing, custom gates, and mobile on-site welding for one of Macomb County\u2019s largest residential communities.',
    intro: [
      'Clinton Township is one of the largest communities in Macomb County, and its many residential neighborhoods generate steady demand for the kind of custom metalwork HotFab Welding specializes in — railings, fences, and gates built to last.',
      'We are a short drive north and east of our Warren shop, so Clinton Township is well within range for installs and mobile repair calls.',
    ],
    localHeading: 'Residential metalwork built for Clinton Township',
    localBody: [
      'Deck and balcony railings are among our most-requested Clinton Township projects, fabricated to Michigan\u2019s 36-inch residential code height with baluster spacing that meets the 4-inch rule. We build in powder-coated steel for strength and aluminum for a rust-free, low-maintenance finish.',
      'We also handle backyard and front-yard fencing, custom gates, and mobile repairs to trailers, equipment, and existing metalwork right at your property.',
    ],
    faqs: [
      {
        question: 'Do your Clinton Township railings meet code?',
        answer:
          'Yes. We build residential deck and balcony railings to Michigan code — a minimum 36-inch height on surfaces over 30 inches high, with baluster spacing that blocks a 4-inch sphere — so they are safe and pass inspection.',
      },
      {
        question: 'Can you come to Clinton Township for on-site welding?',
        answer:
          'Yes. Clinton Township is within easy range of our Warren shop, so our mobile team handles on-site and emergency welding there for trailers, equipment, gates, and structural repairs.',
      },
    ],
    image: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
  },

  // 6 ─ Roseville ────────────────────────────────────────────────────────
  {
    slug: 'roseville-mi',
    city: 'Roseville',
    county: 'Macomb County',
    title: 'Welding & Metal Fabrication in Roseville, MI | HotFab Welding',
    metaDescription:
      'Custom welding for Roseville, MI. Fences, gates, railings, storefront security, and mobile repair for homes and Gratiot-corridor businesses. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Roseville, MI | HotFab Welding',
    ogDescription:
      'Fences, gates, railings, commercial storefront security, and mobile welding for Roseville, Michigan. Family-owned, 25+ years.',
    h1: 'Welding & Metal Fabrication in Roseville, MI',
    heroSub:
      'Fences, gates, railings, storefront security work, and fast mobile welding for Roseville homes and the Gratiot Avenue business corridor.',
    intro: [
      'Roseville borders Warren to the east, making it one of our closest and most frequently served communities. Its blend of residential streets and the busy Gratiot Avenue commercial corridor gives us a steady mix of home and business projects.',
      'Because Roseville is so close to our shop, it is an ideal area for quick installs and fast-response mobile repair calls.',
    ],
    localHeading: 'Homes and Gratiot-corridor businesses',
    localBody: [
      'For Roseville homes we build fences, driveway and pedestrian gates, and interior and exterior railings, all finished to handle Michigan weather. For the commercial properties along Gratiot and throughout the city, we fabricate security gates and panels, storefront protection, and handle on-site repair work.',
      'Storm shields and flood barriers are also available for Roseville properties that have dealt with basement flooding or want to protect vulnerable openings ahead of severe weather.',
    ],
    faqs: [
      {
        question: 'How quickly can you reach Roseville?',
        answer:
          'Roseville borders Warren, so it is one of the fastest areas for us to reach. That makes it well suited to same-day and emergency mobile welding, as well as quick turnaround on installs.',
      },
      {
        question: 'Do you do commercial storefront and security work in Roseville?',
        answer:
          'Yes. Along the Gratiot corridor and throughout Roseville we fabricate security gates, protective panels, and storefront metalwork for businesses, and we can handle on-site installation and repair.',
      },
    ],
    image: `${IMG}/ornamental-balcony-railing-michigan.jpg`,
  },
  // 7 ─ Eastpointe ────────────────────────────────────────────────────────
  {
    slug: 'eastpointe-mi',
    city: 'Eastpointe',
    county: 'Macomb County',
    title: 'Welding & Metal Fabrication in Eastpointe, MI | HotFab Welding',
    metaDescription:
      'Custom railings, fences, gates, and mobile welding repair for Eastpointe, MI — minutes from our Warren shop. Porch and stair railings for older brick homes. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Eastpointe, MI | HotFab Welding',
    ogDescription:
      'Porch railings, fences, gates, and fast mobile welding for Eastpointe homes and businesses. Family-owned, 25+ years.',
    h1: 'Welding & Metal Fabrication in Eastpointe, MI',
    heroSub:
      'Porch and stair railings, fences, gates, and same-day mobile welding for Eastpointe — one of the closest cities to our Warren shop.',
    intro: [
      'Eastpointe sits directly southeast of Warren along 8 Mile and Gratiot, which makes it one of the shortest drives we make for measurements, installs, and mobile repair calls. HotFab Welding fabricates every piece at our shop at 13118 E 9 Mile Rd and installs it at your property.',
      'Eastpointe\u2019s housing stock is largely post-war brick bungalows and colonials, and the work we are asked for most reflects that: replacement porch and step railings, backyard fencing, and gates that match the character of the home.',
    ],
    localHeading: 'What we build most in Eastpointe',
    localBody: [
      'Front-porch and stoop railings are the number-one request — often replacing a rusted or loose original with a powder-coated steel or aluminum railing built to current code height. We also fabricate ornamental and privacy fencing, pedestrian and driveway gates, and window guards and security panels for the commercial storefronts along Gratiot Avenue and 9 Mile.',
      'Because Eastpointe borders Warren, it is well suited to our mobile welding service for truck, trailer, and equipment repairs at your driveway or business.',
    ],
    faqs: [
      {
        question: 'Do you replace old porch railings in Eastpointe?',
        answer:
          'Yes. Replacing rusted, loose, or non-code porch and step railings on Eastpointe\u2019s brick homes is one of our most common jobs. We measure on site, fabricate at our Warren shop, and install with proper anchoring into masonry or concrete.',
      },
      {
        question: 'How far is Eastpointe from your shop?',
        answer:
          'Eastpointe borders Warren to the southeast, so it is a short drive from 13118 E 9 Mile Rd. That keeps travel time low for quotes, installs, and same-day mobile welding repairs.',
      },
    ],
    image: `${IMG}/ornamental-balcony-railing-michigan.jpg`,
  },

  // 8 ─ Macomb Township ─────────────────────────────────────────────────
  {
    slug: 'macomb-township-mi',
    city: 'Macomb Township',
    county: 'Macomb County',
    title: 'Welding & Metal Fabrication in Macomb Township, MI | HotFab',
    metaDescription:
      'Custom deck and balcony railings, aluminum pool fencing, driveway gates, and mobile welding for Macomb Township, MI homes and businesses. Family-owned Warren shop. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Macomb Township, MI | HotFab Welding',
    ogDescription:
      'Deck railings, aluminum pool fencing, driveway gates, and mobile welding for Macomb Township. Family-owned, 25+ years.',
    h1: 'Welding & Metal Fabrication in Macomb Township, MI',
    heroSub:
      'Deck and balcony railings, aluminum pool and yard fencing, driveway gates, and mobile on-site welding for Macomb Township\u2019s newer subdivisions.',
    intro: [
      'Macomb Township lies north of Clinton Township, roughly a 20-minute drive up from our Warren shop via M-53 or M-59. It is one of the fastest-growing communities in Macomb County, and most of what we build there goes on newer homes: decks, patios, pools, and driveways that need railings, fencing, and gates.',
      'We fabricate at 13118 E 9 Mile Rd in Warren and deliver and install at your property, so Macomb Township projects get the same shop-built quality as work closer to home.',
    ],
    localHeading: 'What we build most in Macomb Township',
    localBody: [
      'Deck and balcony railings lead the list \u2014 aluminum is especially popular here because it never rusts and needs no upkeep around pools and patios. We also build aluminum and steel pool fencing, ornamental yard fencing, and driveway gates prepped for automation on the township\u2019s larger lots.',
      'For contractors and homeowners with trucks, trailers, and equipment, our mobile welding unit handles repairs on site rather than requiring a trip to the shop.',
    ],
    faqs: [
      {
        question: 'Do you serve Macomb Township, or only Warren?',
        answer:
          'We serve all of Macomb Township. Fabrication happens at our Warren shop and we deliver and install at your home or business; our mobile unit also covers on-site repairs in the township.',
      },
      {
        question: 'What railing material do you recommend for a pool deck in Macomb Township?',
        answer:
          'Aluminum. It will not rust from splash and chlorine, it is lighter than steel, and it needs essentially no maintenance. We build aluminum railings and pool fencing to Michigan code heights and baluster spacing.',
      },
    ],
    image: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
  },

  // 9 ─ Livonia ───────────────────────────────────────────────────────────
  {
    slug: 'livonia-mi',
    city: 'Livonia',
    county: 'Wayne County',
    title: 'Welding & Metal Fabrication in Livonia, MI | HotFab Welding',
    metaDescription:
      'Custom railings, gates, fences, structural steel, and mobile welding for Livonia, MI homes and industrial businesses. Fabricated in Warren, installed on site. Free quotes: (248) 259-9956.',
    ogTitle: 'Welding & Metal Fabrication in Livonia, MI | HotFab Welding',
    ogDescription:
      'Railings, gates, fences, structural steel, and on-site industrial welding for Livonia, Michigan. Family-owned, 25+ years.',
    h1: 'Welding & Metal Fabrication in Livonia, MI',
    heroSub:
      'Residential railings, gates, and fences plus on-site industrial and equipment welding for Livonia\u2019s homes and its large base of manufacturing and distribution businesses.',
    intro: [
      'Livonia is on the west side of Metro Detroit in Wayne County, reached from our Warren shop by I-696 and I-96. It is a longer drive than our Macomb County neighbors, so we plan Livonia work efficiently \u2014 measuring and installing in a single trip where possible \u2014 and it is a good fit for shop-fabricated projects like railings, gates, fences, and structural steel that are built in Warren and installed on site.',
      'Livonia also has one of the region\u2019s largest concentrations of industrial and distribution facilities, which is where our on-site welding and structural steel work comes in.',
    ],
    localHeading: 'What we build most in Livonia',
    localBody: [
      'For Livonia homeowners: interior and exterior stair railings, deck and balcony guards, ornamental fencing, and driveway gates in steel or aluminum, all built to Michigan code. For businesses in Livonia\u2019s industrial corridors: structural steel components, mezzanine and platform work, warehouse racking repairs, and on-site equipment and trailer welding scheduled around your production hours.',
      'Emergency mobile welding is available in Livonia; because of the distance from Warren, we give an honest arrival window on the phone before dispatching.',
    ],
    faqs: [
      {
        question: 'Is Livonia within your service area?',
        answer:
          'Yes. Livonia is in Wayne County on the west side of Metro Detroit and is part of our regular service area for fabrication, installation, and mobile welding. Travel from Warren is longer than for Macomb County cities, so we schedule Livonia work to minimize trips.',
      },
      {
        question: 'Do you do industrial welding for Livonia businesses?',
        answer:
          'Yes. We handle structural steel, mezzanines and platforms, racking reinforcement, and on-site equipment and trailer repairs for Livonia\u2019s manufacturing and distribution facilities, coordinating work around your downtime windows.',
      },
    ],
    image: `${IMG}/wrought-iron-staircase-warren-mi.jpg`,
  },
];

export const locationSlugs = locations.map((l) => l.slug);
export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);