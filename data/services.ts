// Individual service page content.
// Each entry powers one page at /services/<slug> via components/ServicePage.tsx.
// Add a new service by appending an object here — the page, schema, sitemap-ready
// metadata, and internal links all read from this file.

export type ServiceFaq = { question: string; answer: string };
export type ServiceSection = { heading: string; body: string[] };
export type ServiceFeature = { title: string; desc: string };

export type Service = {
  slug: string;
  title: string;            // <title> / metadata title
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  heroTag: string;          // eyebrow above the H1
  h1: string;               // keyword-bearing H1
  heroSub: string;
  serviceName: string;      // schema.org Service name
  serviceType: string;      // schema.org serviceType
  schemaDescription: string;
  intro: string[];
  sections: ServiceSection[];
  features: ServiceFeature[];
  faqs: ServiceFaq[];
  related: string[];        // slugs of related services
  image: string;
};

const IMG = 'https://res.cloudinary.com/dty0qurl9/image/upload/v1777365279';

export const services: Service[] = [
  // 1 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'custom-railings',
    title: 'Custom Metal Railings in Warren, MI | Interior, Exterior & ADA',
    metaDescription:
      'Custom metal railings fabricated and installed in Warren, MI. Interior stair railings, exterior deck and balcony railings, and ADA-compliant commercial handrails in steel, stainless, and aluminum. Free quotes — (248) 259-9956.',
    ogTitle: 'Custom Metal Railings in Warren, MI | HotFab Welding',
    ogDescription:
      'Interior, exterior, deck, balcony, and ADA-compliant railings built to code and to your spec across Metro Detroit. 25+ years. Free quotes.',
    heroTag: 'CUSTOM RAILINGS · WARREN, MI',
    h1: 'Custom Metal Railings in Warren, Michigan',
    heroSub:
      'Interior stair railings, exterior deck and balcony railings, and ADA-compliant commercial handrails — designed, fabricated, and installed to code by a family-owned shop with 25+ years in Metro Detroit.',
    serviceName: 'Custom Metal Railing Fabrication',
    serviceType: 'Metal Railing Fabrication',
    schemaDescription:
      'Custom interior, exterior, deck, balcony, stair, and ADA-compliant metal railing fabrication and installation in steel, stainless steel, and aluminum, serving Warren, MI and Metro Detroit.',
    intro: [
      'Custom metal railings are one of the most requested services at HotFab Welding. Whether you need interior stair railings, exterior deck railings, or ADA-compliant commercial handrails, the right fabrication makes the difference in safety, durability, and how the finished piece looks for the next 20 to 30 years.',
      'We design, fabricate, and install railings for homes and businesses throughout Warren, Sterling Heights, Troy, Dearborn, and the wider Metro Detroit area — working directly with you from measurement to final install rather than handing your project off to a subcontractor.',
    ],
    sections: [
      {
        heading: 'Choosing the right material',
        body: [
          'The first decision is material, because it drives both cost and longevity. Steel is the strongest and most affordable option for structural railings and takes ornamental detail well. Stainless steel adds a clean, modern, corrosion-resistant finish that stands up to Michigan winters near salt and moisture. Aluminum is the lightest choice and naturally rust-resistant, which makes it popular for residential decks and balconies.',
          'A note on "wrought iron": almost nothing sold as wrought iron today is actually wrought iron. What people mean is mild steel fabricated to look like traditional ironwork — and that is a good thing. Modern mild steel is structurally superior, easier to repair, and visually identical to historical pieces once powder coated.',
        ],
      },
      {
        heading: 'Code and safety requirements',
        body: [
          'Railings are not just decorative — they are governed by building code. For elevated surfaces more than 30 inches above the floor or grade, Michigan code requires guards at a minimum of 36 inches for residential and 42 inches for commercial buildings. Balusters (the vertical members) must be spaced so a 4-inch sphere cannot pass through, which protects small children.',
          'For public-facing commercial properties, ADA handrails carry their own rules: a mounting height of 34 to 38 inches measured from the stair nosing or ramp surface, and a graspable cross-section between 1.25 and 2 inches in outside diameter. We build to these requirements as standard so your project passes inspection the first time.',
        ],
      },
      {
        heading: 'Finishes that last in Michigan',
        body: [
          'Freeze-thaw cycles, road salt, and months of moisture are hard on metal. We prime and powder coat steel railings for long-term rust protection, and we recommend a quick spring inspection each year — checking the base of posts where water pools — to catch chips before they become rust. Done right, a properly finished railing looks excellent for decades.',
        ],
      },
    ],
    features: [
      { title: 'Interior Stair Railings', desc: 'Straight-run, return, and open-rail designs in steel or stainless.' },
      { title: 'Exterior & Deck Railings', desc: 'Weather-resistant aluminum and powder-coated steel for Michigan climates.' },
      { title: 'Balcony Railings', desc: 'Code-compliant guards built to 36"/42" height requirements.' },
      { title: 'ADA Commercial Handrails', desc: 'Graspable, code-correct handrails for public and multi-family buildings.' },
      { title: 'Glass & Steel Systems', desc: 'Modern infill panels combined with structural metal frames.' },
      { title: 'Ornamental Ironwork', desc: 'Scrollwork and decorative designs in mild steel.' },
    ],
    faqs: [
      {
        question: 'How much do custom metal railings cost in Warren, MI?',
        answer:
          'Cost depends on length, material, design complexity, and finish. Simple powder-coated steel railings are the most economical, while stainless, glass infill, and detailed ornamental work cost more. HotFab Welding provides a free, detailed written quote after measuring your space so you know the full price before any work begins.',
      },
      {
        question: 'What is the code-required height for a residential railing in Michigan?',
        answer:
          'Michigan residential code requires guards at least 36 inches high on any surface more than 30 inches above the floor or grade, with balusters spaced so a 4-inch sphere cannot pass through. Commercial guards must be at least 42 inches. HotFab Welding builds every railing to current code.',
      },
      {
        question: 'Do you make ADA-compliant handrails for commercial buildings?',
        answer:
          'Yes. We fabricate ADA-compliant handrails mounted 34 to 38 inches from the stair nosing or ramp surface, with a graspable cross-section between 1.25 and 2 inches in diameter, for commercial and institutional clients throughout Metro Detroit.',
      },
      {
        question: 'Can you match railings to an existing design in my home?',
        answer:
          'In most cases, yes. We regularly duplicate spindles, match patterns, and extend existing railings so new work blends seamlessly with what is already installed. Bring a photo or a sample to your consultation.',
      },
    ],
    related: ['custom-staircases', 'driveway-gates', 'mobile-welding'],
    image: `${IMG}/ornamental-balcony-railing-michigan.jpg`,
  },

  // 2 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'driveway-gates',
    title: 'Custom Driveway & Security Gates in Metro Detroit | HotFab Welding',
    metaDescription:
      'Custom driveway gates and security gates fabricated in Warren, MI. Swing and sliding gates, automated gate prep, and ornamental designs for residential and commercial properties across Metro Detroit. Free quotes — (248) 259-9956.',
    ogTitle: 'Custom Driveway & Security Gates | HotFab Welding Warren, MI',
    ogDescription:
      'Swing and sliding driveway gates, security gates, and automation-ready fabrication for homes and businesses across Macomb, Wayne, and Oakland counties.',
    heroTag: 'DRIVEWAY & SECURITY GATES · METRO DETROIT',
    h1: 'Custom Driveway & Security Gates in Metro Detroit',
    heroSub:
      'Swing gates, sliding gates, and automation-ready security gates designed and built to fit your property — combining curb appeal with real security. Serving Macomb, Wayne, and Oakland counties.',
    serviceName: 'Custom Gate Fabrication',
    serviceType: 'Gate Fabrication',
    schemaDescription:
      'Custom driveway and security gate design, fabrication, and installation — swing gates, sliding gates, and automated gate preparation — for residential and commercial properties in Metro Detroit.',
    intro: [
      'A custom driveway gate is one of the most impactful upgrades you can make to a property. Beyond security, a well-designed gate signals pride of ownership and dramatically improves curb appeal. HotFab Welding designs and fabricates custom gates for clients across Macomb, Wayne, and Oakland counties.',
      'Because we are the fabricator and the installer, the gate that gets hung is the gate we measured and built — no handoffs, no telephone game between a designer and a separate install crew.',
    ],
    sections: [
      {
        heading: 'Swing gates vs. sliding gates',
        body: [
          'The two most popular styles are swing gates and sliding gates. Swing gates open inward or outward like a door and are ideal for driveways with enough clearance on either side. Sliding gates run on a track parallel to the fence line and are better suited to sloped driveways or tight urban lots where a swinging gate would not have room to open.',
          'During your consultation we look at your grade, available clearance, and how you actually use the entrance day to day, then recommend the style that will operate reliably for years rather than the one that simply looks good on paper.',
        ],
      },
      {
        heading: 'Automation-ready fabrication',
        body: [
          'If you want an automatic gate, the welding and fabrication have to be done with automation in mind from the start — proper hinge placement, weight balance, mounting points for the operator, and conduit access for wiring. We build gates that are ready for the operator your automation contractor installs, so the two halves of the project fit together cleanly.',
        ],
      },
      {
        heading: 'Materials and finishes',
        body: [
          'We build gates in mild steel for ornamental designs, with stainless or aluminum options where corrosion resistance or weight matter. Every gate is primed and powder coated for Michigan weather, with finish colors selected to match your fence, home, or branding.',
        ],
      },
    ],
    features: [
      { title: 'Swing Gates', desc: 'Single and double-leaf gates for driveways with side clearance.' },
      { title: 'Sliding Gates', desc: 'Track-mounted gates for sloped or space-limited entrances.' },
      { title: 'Security Gates', desc: 'Heavy-duty gates and barriers for commercial properties.' },
      { title: 'Pedestrian Gates', desc: 'Matching walk-through gates for fence lines and courtyards.' },
      { title: 'Automation-Ready', desc: 'Fabricated for clean integration with gate operators.' },
      { title: 'Ornamental Designs', desc: 'Custom scrollwork and patterns to match your property.' },
    ],
    faqs: [
      {
        question: 'Should I get a swing gate or a sliding gate?',
        answer:
          'It depends on your driveway. Swing gates work well when there is clearance for the gate to open like a door. Sliding gates are better for sloped driveways or tight lots because they move parallel to the fence line. HotFab Welding assesses your grade and clearance and recommends the right option.',
      },
      {
        question: 'Can you build a gate that works with an automatic opener?',
        answer:
          'Yes. We fabricate gates to be automation-ready, with correct hinge placement, weight balance, operator mounting points, and conduit access, so your automation contractor can install the opener cleanly.',
      },
      {
        question: 'Do you install driveway gates, or only build them?',
        answer:
          'Both. HotFab Welding is the fabricator and the installer. We measure, build, deliver, and install your gate, and we handle on-site welding for posts and mounting.',
      },
    ],
    related: ['metal-fences', 'custom-railings', 'mobile-welding'],
    image: `${IMG}/wrought-iron-staircase-warren-mi.jpg`,
  },

  // 3 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'metal-fences',
    title: 'Custom Metal Fence Fabrication in Warren, MI | HotFab Welding',
    metaDescription:
      'Custom metal fences fabricated and installed in Warren, MI. Steel, aluminum, and ornamental fencing for residential and commercial properties across Macomb County and Metro Detroit. Free quotes — (248) 259-9956.',
    ogTitle: 'Custom Metal Fence Fabrication | HotFab Welding Warren, MI',
    ogDescription:
      'Steel and aluminum fencing — picket, panel, and ornamental — fabricated and installed across Metro Detroit. Powder-coated for Michigan winters.',
    heroTag: 'METAL FENCES · WARREN, MI',
    h1: 'Custom Metal Fence Fabrication in Warren, Michigan',
    heroSub:
      'A metal fence secures your property, defines your boundary, and says something about your taste. We fabricate and install custom steel and aluminum fencing for homes and businesses across Macomb County and Metro Detroit.',
    serviceName: 'Custom Metal Fence Fabrication',
    serviceType: 'Fence Fabrication',
    schemaDescription:
      'Custom metal fence fabrication and installation in steel and aluminum — picket, panel, and ornamental styles — for residential and commercial properties in Warren, MI and Metro Detroit.',
    intro: [
      'A metal fence does three things at once: it secures your property, defines your boundary, and makes a statement about your taste. HotFab Welding fabricates and installs custom metal fences for residential and commercial properties throughout Macomb County and Metro Detroit.',
      'Every fence is built in our Warren shop and installed by our own crew, so the workmanship you see in the sample is the workmanship that ends up in your yard.',
    ],
    sections: [
      {
        heading: 'Steel vs. aluminum fencing',
        body: [
          'The most popular material we work with is mild steel. It is strong, affordable, and highly versatile — it can be shaped into flat panels, picket styles, or elaborate ornamental designs. Steel fences are primed and powder coated for long-term rust protection and, with basic maintenance, last decades in Michigan\u2019s freeze-thaw climate.',
          'Aluminum fencing is the low-maintenance alternative. It will not rust, weighs far less, and is well suited to pool enclosures and decorative perimeters where strength demands are lower. We help you weigh the trade-off between steel\u2019s strength and aluminum\u2019s maintenance-free finish based on how the fence will be used.',
        ],
      },
      {
        heading: 'Styles and security',
        body: [
          'From timeless picket and spear-top designs to modern flat-panel privacy fencing, we fabricate to your design or develop one with you. For commercial clients, we build heavier-gauge security fencing that provides genuine perimeter protection without looking like a prison yard.',
        ],
      },
      {
        heading: 'Built to last through Michigan weather',
        body: [
          'Posts set incorrectly are the number one reason fences fail. We set posts properly, weld connections for strength rather than relying on fasteners alone, and finish every component to resist the salt and moisture that destroy lesser fencing.',
        ],
      },
    ],
    features: [
      { title: 'Steel Fencing', desc: 'Strong, versatile, powder-coated panels and pickets.' },
      { title: 'Aluminum Fencing', desc: 'Rust-free, lightweight perimeters and pool enclosures.' },
      { title: 'Ornamental Fencing', desc: 'Spear-top, scroll, and custom decorative patterns.' },
      { title: 'Commercial Security Fence', desc: 'Heavy-gauge perimeter fencing for businesses.' },
      { title: 'Matching Gates', desc: 'Pedestrian and driveway gates built to match the fence line.' },
      { title: 'Repairs & Extensions', desc: 'Add to or repair existing metal fencing.' },
    ],
    faqs: [
      {
        question: 'Is a steel or aluminum fence better for Michigan?',
        answer:
          'Both work well. Steel is stronger and takes ornamental detail beautifully, but needs its powder-coat finish maintained. Aluminum will never rust and is virtually maintenance-free, making it ideal for pool enclosures and decorative perimeters. HotFab Welding recommends the right material based on your security needs and how much maintenance you want.',
      },
      {
        question: 'Do you install the fence or just fabricate it?',
        answer:
          'We do both. HotFab Welding fabricates your fence in our Warren, MI shop and installs it with our own crew, including setting and welding posts on site.',
      },
      {
        question: 'Can you match or extend my existing metal fence?',
        answer:
          'Yes. We regularly extend existing fence lines and repair damaged sections, matching the original style and finish as closely as possible.',
      },
    ],
    related: ['driveway-gates', 'custom-railings', 'storm-shields'],
    image: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
  },

  // 4 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'custom-staircases',
    title: 'Spiral & Custom Staircase Fabrication in Michigan | HotFab Welding',
    metaDescription:
      'Custom steel staircases and spiral staircase fabrication in Warren, MI. Spiral, straight-run, and floating stair designs in steel, stainless, and aluminum for Metro Detroit homes and businesses. Free quotes — (248) 259-9956.',
    ogTitle: 'Spiral & Custom Staircase Fabrication | HotFab Welding',
    ogDescription:
      'Custom spiral, straight-run, and floating staircases fabricated in steel and stainless for Metro Detroit. 25+ years of precision metalwork.',
    heroTag: 'CUSTOM STAIRCASES · MICHIGAN',
    h1: 'Spiral & Custom Staircase Fabrication in Michigan',
    heroSub:
      'A staircase can be the focal point of a room. We custom-fabricate spiral, straight-run, and floating staircases in steel, stainless, and aluminum for homes and commercial spaces across Metro Detroit.',
    serviceName: 'Custom Staircase Fabrication',
    serviceType: 'Staircase Fabrication',
    schemaDescription:
      'Custom spiral, straight-run, and floating staircase design and fabrication in steel, stainless steel, and aluminum for residential and commercial spaces in Warren, MI and Metro Detroit.',
    intro: [
      'A spiral staircase is one of the most visually striking elements you can add to a home or commercial space. Unlike a standard straight-run stair, a spiral staircase becomes a focal point — drawing the eye upward and creating real architectural presence. HotFab Welding custom-fabricates spiral and custom staircases in steel, stainless steel, and aluminum for clients throughout Metro Detroit.',
      'Every staircase starts with a detailed consultation and precise measurements. Stairs are unforgiving — a fraction of an inch matters — so we measure floor-to-floor height, available footprint, and direction of rotation before a single piece is cut.',
    ],
    sections: [
      {
        heading: 'Designing your staircase',
        body: [
          'We take precise measurements of your floor-to-floor height, the available footprint diameter, and the direction of rotation. We also work through tread style with you — solid plate, open grating, or wood-topped treads — along with the railing design and the finish that ties the stair into the rest of the space.',
          'Because stairs must meet code for rise, run, headroom, and railing height, we design to those requirements from the outset so the finished stair is both beautiful and safe to use for decades.',
        ],
      },
      {
        heading: 'Spiral, straight-run, and floating stairs',
        body: [
          'Spiral staircases save floor space and make a dramatic statement. Straight-run and L-shaped stairs suit larger openings and heavier traffic. Floating (cantilevered) stairs create a modern, open look where treads appear to hover — these require especially careful structural engineering, which is exactly the kind of precision welding we specialize in.',
        ],
      },
      {
        heading: 'Fabrication and installation',
        body: [
          'We fabricate your staircase at our Warren shop and install it on site, coordinating with your contractor where needed. The result is a single piece of engineered metalwork — not a kit assembled from generic parts.',
        ],
      },
    ],
    features: [
      { title: 'Spiral Staircases', desc: 'Space-saving, sculptural steel and stainless designs.' },
      { title: 'Straight-Run Stairs', desc: 'Classic and L-shaped stairs for high-traffic areas.' },
      { title: 'Floating Stairs', desc: 'Cantilevered treads with hidden structural support.' },
      { title: 'Steel Stair Stringers', desc: 'Structural stringers for contractors and builders.' },
      { title: 'Matching Railings', desc: 'Integrated railing systems designed with the stair.' },
      { title: 'Commercial Stairs', desc: 'Code-compliant egress and mezzanine staircases.' },
    ],
    faqs: [
      {
        question: 'How much space does a spiral staircase need?',
        answer:
          'Spiral staircases are valued precisely because they fit small footprints, but the exact diameter depends on your floor-to-floor height and code requirements for tread width and headroom. HotFab Welding measures your space and designs a stair that fits while remaining safe and comfortable to climb.',
      },
      {
        question: 'Can you build a floating (cantilevered) staircase?',
        answer:
          'Yes. Floating stairs require careful structural engineering so the treads carry load safely while appearing to hover. This precision welding is a core part of what we do.',
      },
      {
        question: 'Do your staircases meet building code?',
        answer:
          'Yes. We design to code requirements for rise, run, headroom, and railing height from the start, so your staircase passes inspection and is safe for everyday use.',
      },
    ],
    related: ['custom-railings', 'structural-steel', 'mobile-welding'],
    image: `${IMG}/wrought-iron-staircase-warren-mi.jpg`,
  },

  // 5 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'mobile-welding',
    title: 'Mobile On-Site & Emergency Welding in Metro Detroit | HotFab Welding',
    metaDescription:
      'Mobile on-site welding and emergency welding repair throughout Metro Detroit. Truck and trailer repair, structural reinforcement, field fabrication, and same-day service. We bring the shop to you — (248) 259-9956.',
    ogTitle: 'Mobile On-Site & Emergency Welding | HotFab Welding',
    ogDescription:
      'Fully equipped mobile welding team for on-site repairs, truck and trailer welding, and emergency same-day service across Metro Detroit.',
    heroTag: 'MOBILE & EMERGENCY WELDING · METRO DETROIT',
    h1: 'Mobile On-Site & Emergency Welding in Metro Detroit',
    heroSub:
      'Metal failures do not wait for business hours. Our fully equipped mobile team brings the shop to your location for repairs, reinforcement, and same-day emergency welding across Warren, Sterling Heights, Troy, Dearborn, and beyond.',
    serviceName: 'Mobile On-Site Welding & Emergency Repair',
    serviceType: 'Mobile Welding',
    schemaDescription:
      'Mobile on-site welding and emergency welding repair throughout Metro Detroit — truck and trailer repair, structural reinforcement, field fabrication, equipment repair, and same-day service.',
    intro: [
      'Transporting large metal structures to a shop is expensive and slow. Our portable welding service brings the workshop to you — whether that means repairing heavy equipment, reinforcing a structure, or installing railings on site. The result is less downtime, lower transportation cost, and an immediate fix when something fails.',
      'A cracked truck frame on a Saturday morning, a broken gate latch before a Monday delivery, a failed support beam discovered mid-renovation — these cannot wait. HotFab Welding offers emergency on-site welding throughout Metro Detroit, including Warren, Sterling Heights, Troy, Dearborn, and the surrounding communities. This is our signature service and a big part of why clients keep our number saved.',
    ],
    sections: [
      {
        heading: 'Truck and trailer repair',
        body: [
          'The most common emergency calls we get involve trucks and trailers: broken hitches, cracked frames, failed ramps, and damaged toolboxes. These are structural welds that cannot be left unrepaired without risking the load — and the driver. We come to your yard, jobsite, or roadside and make the weld correctly.',
        ],
      },
      {
        heading: 'On-site structural and equipment welding',
        body: [
          'We handle structural reinforcement, equipment repair, and field fabrication on location in steel, stainless steel, and aluminum. For commercial and industrial clients, on-site welding keeps a production line or piece of equipment running instead of waiting days for a part to be shipped out and back.',
        ],
      },
      {
        heading: 'What to expect when you call',
        body: [
          'When you call with an emergency, we ask what failed, what the metal is, and where you are, so we arrive with the right process and filler. We give you a realistic arrival window and an honest assessment of whether a field repair is the right call or whether the part should come to the shop. No surprises.',
        ],
      },
    ],
    features: [
      { title: 'Truck & Trailer Repair', desc: 'Hitches, frames, ramps, and toolboxes welded on site.' },
      { title: 'Emergency Same-Day Service', desc: 'Rapid response for urgent structural failures.' },
      { title: 'Structural Reinforcement', desc: 'On-location reinforcement of beams and supports.' },
      { title: 'Equipment Repair', desc: 'Heavy and industrial equipment welded in the field.' },
      { title: 'Field Fabrication', desc: 'Custom fabrication and installation at your location.' },
      { title: 'Multi-Material Capable', desc: 'Steel, stainless steel, and aluminum on site.' },
    ],
    faqs: [
      {
        question: 'Do you offer emergency welding in Metro Detroit?',
        answer:
          'Yes. HotFab Welding provides emergency on-site welding throughout Metro Detroit, including Warren, Sterling Heights, Troy, and Dearborn. Call (248) 259-9956 and we will give you a realistic arrival window and an honest assessment of the repair.',
      },
      {
        question: 'Can you weld a truck or trailer frame on site?',
        answer:
          'Yes. Truck and trailer repairs — cracked frames, broken hitches, failed ramps, damaged toolboxes — are among our most common mobile calls. We bring a fully equipped mobile rig to your location and make the structural weld correctly.',
      },
      {
        question: 'What does mobile welding cost compared to bringing it to a shop?',
        answer:
          'Mobile welding often costs less overall because it eliminates the time and expense of transporting large or immovable items, and it reduces downtime. We provide a clear quote before starting and will tell you honestly if a shop repair would serve you better.',
      },
      {
        question: 'What materials can you weld on site?',
        answer:
          'Our mobile team welds steel, stainless steel, and aluminum on location, handling structural, equipment, and fabrication work in the field.',
      },
    ],
    related: ['structural-steel', 'driveway-gates', 'custom-railings'],
    image: `${IMG}/ornamental-balcony-railing-michigan.jpg`,
  },

  // 6 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'structural-steel',
    title: 'Structural Steel Fabrication in Michigan | HotFab Welding',
    metaDescription:
      'Structural steel fabrication for commercial and industrial projects in Michigan. Beams, columns, lintels, connection plates, bracing, and mezzanines fabricated to spec from shop drawings. Warren, MI — (248) 259-9956.',
    ogTitle: 'Structural Steel Fabrication in Michigan | HotFab Welding',
    ogDescription:
      'Commercial and industrial structural steel — beams, columns, lintels, bracing, and mezzanines — fabricated to code and to shop drawings since 1999.',
    heroTag: 'STRUCTURAL STEEL · MICHIGAN',
    h1: 'Structural Steel Fabrication for Commercial Projects in Michigan',
    heroSub:
      'Commercial and industrial construction demands steel that meets precise specifications, tight tolerances, and building code. We have delivered structural steel for Metro Detroit projects since 1999.',
    serviceName: 'Structural Steel Fabrication',
    serviceType: 'Structural Steel Fabrication',
    schemaDescription:
      'Structural steel fabrication and installation for commercial and industrial projects in Michigan — beams, columns, lintels, connection plates, bracing systems, and mezzanines built from shop drawings.',
    intro: [
      'Commercial and industrial construction in Michigan requires structural steel that meets precise specifications, tight tolerances, and applicable building code. HotFab Welding has served commercial clients in Warren and Metro Detroit since 1999, delivering structural steel fabrication for warehouses, manufacturing facilities, retail buildouts, and mixed-use construction.',
      'We read and work directly from structural drawings, coordinating with general contractors and engineers so the steel that arrives on your site fits the first time.',
    ],
    sections: [
      {
        heading: 'What we fabricate',
        body: [
          'Structural steel work typically involves fabricating beams, columns, lintels, connection plates, and bracing systems from engineering or shop drawings provided by the project engineer. We work from the S-sheets, coordinate with the general contractor, and fabricate components to the tolerances the drawings call for.',
          'We also build steel mezzanine platforms — a cost-effective way to add usable square footage inside an existing building without moving or expanding the footprint.',
        ],
      },
      {
        heading: 'Working from your drawings',
        body: [
          'Precision in structural work is non-negotiable. We fabricate to the dimensions and connection details specified, flag conflicts we spot in the drawings before they become field problems, and deliver steel that bolts up cleanly on site. For projects that need it, we provide on-site welding to complete connections in the field.',
        ],
      },
      {
        heading: 'Commercial and industrial experience',
        body: [
          'From warehouse racking supports to retail tenant buildouts, we understand the schedule pressure on commercial work. We communicate timelines honestly and treat your project deadline as our own.',
        ],
      },
    ],
    features: [
      { title: 'Beams & Columns', desc: 'Primary structural members fabricated to spec.' },
      { title: 'Connection Plates', desc: 'Gussets, base plates, and bolted/welded connections.' },
      { title: 'Bracing Systems', desc: 'Lateral bracing and reinforcement assemblies.' },
      { title: 'Steel Mezzanines', desc: 'Add usable floor space without expanding the building.' },
      { title: 'Lintels & Supports', desc: 'Load-bearing supports for openings and renovations.' },
      { title: 'On-Site Connections', desc: 'Field welding to complete structural connections.' },
    ],
    faqs: [
      {
        question: 'Do you fabricate structural steel from engineer shop drawings?',
        answer:
          'Yes. We work directly from structural (S-sheet) and shop drawings, fabricating beams, columns, lintels, connection plates, and bracing to the specified tolerances, and we coordinate with your general contractor and engineer throughout.',
      },
      {
        question: 'Can you build a steel mezzanine to add space to my building?',
        answer:
          'Yes. Steel mezzanine platforms are a cost-effective way to add usable square footage inside an existing facility without moving or expanding. We fabricate and install mezzanines to code.',
      },
      {
        question: 'Do you handle commercial and industrial projects?',
        answer:
          'Yes. HotFab Welding has fabricated structural steel for warehouses, manufacturing facilities, retail buildouts, and mixed-use projects across Metro Detroit since 1999.',
      },
    ],
    related: ['mobile-welding', 'custom-staircases', 'storm-shields'],
    image: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
  },

  // 7 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'storm-shields',
    title: 'Metal Storm Shields & Flood Protection Barriers in Michigan | HotFab',
    metaDescription:
      'Custom metal storm shields and flood protection barriers fabricated in Warren, MI. Reinforced steel panels for window wells, vents, garage doors, and storefronts across Metro Detroit. Free quotes — (248) 259-9956.',
    ogTitle: 'Metal Storm Shields & Flood Protection | HotFab Welding',
    ogDescription:
      'Custom-fabricated steel storm shields and flood barriers protecting Michigan homes and businesses from wind-driven debris and water intrusion.',
    heroTag: 'STORM SHIELDS & FLOOD PROTECTION · MICHIGAN',
    h1: 'Metal Storm Shields & Flood Protection Barriers in Michigan',
    heroSub:
      "Michigan's weather is increasingly unpredictable. We fabricate custom reinforced steel storm shields and flood protection barriers that protect the vulnerable openings of homes and businesses across Metro Detroit.",
    serviceName: 'Storm Shield & Flood Protection Fabrication',
    serviceType: 'Specialty Metal Fabrication',
    schemaDescription:
      'Custom metal storm shield and flood protection barrier fabrication — reinforced steel panels for window wells, vents, garage doors, and storefronts — for residential and commercial properties in Warren, MI and Metro Detroit.',
    intro: [
      'Michigan\u2019s weather is increasingly unpredictable. Heavy rainstorms, basement flooding, and high winds cause thousands of dollars in damage to homes and businesses across Metro Detroit every year. One of HotFab Welding\u2019s specialty services is fabricating custom metal storm shields and flood protection barriers — a product almost no other local shop offers.',
      'Because each opening is different, every shield and barrier we build is custom-fabricated to fit the specific window well, vent, door, or storefront it protects.',
    ],
    sections: [
      {
        heading: 'How storm shields work',
        body: [
          'Storm shields are reinforced steel panels that mount over vulnerable openings — basement window wells, crawlspace vents, garage doors, and glass storefronts — to keep wind-driven debris from penetrating the building envelope during severe weather. We custom-fabricate each shield to the exact opening so it seals properly and mounts securely.',
        ],
      },
      {
        heading: 'Flood protection barriers',
        body: [
          'For properties prone to water intrusion, we build removable and permanent flood barriers that block water at doorways, loading docks, and below-grade entries. These are engineered to seat tightly and stand up to hydrostatic pressure, protecting basements and ground floors from the kind of flooding that has become more common across the region.',
        ],
      },
      {
        heading: 'A genuine local differentiator',
        body: [
          'Most welding shops do not offer storm and flood protection at all. If you have experienced basement flooding or storm damage and want a durable, custom metal solution rather than a generic off-the-shelf product, this is exactly the kind of specialty work we built our reputation on.',
        ],
      },
    ],
    features: [
      { title: 'Window Well Shields', desc: 'Reinforced covers for basement window wells.' },
      { title: 'Vent & Crawlspace Covers', desc: 'Protect low openings from debris and water.' },
      { title: 'Garage & Storefront Shields', desc: 'Panels guarding large vulnerable openings.' },
      { title: 'Flood Barriers', desc: 'Removable and permanent water-intrusion barriers.' },
      { title: 'Security Panels', desc: 'Reinforced panels for commercial property protection.' },
      { title: 'Custom-Fit Fabrication', desc: 'Every shield built to the exact opening.' },
    ],
    faqs: [
      {
        question: 'What is a metal storm shield?',
        answer:
          'A storm shield is a reinforced steel panel custom-fabricated to mount over a vulnerable opening — such as a basement window well, vent, garage door, or storefront — to keep wind-driven debris from breaching the building during severe weather. HotFab Welding builds each shield to fit the specific opening.',
      },
      {
        question: 'Can you build a flood barrier for my basement or business?',
        answer:
          'Yes. We fabricate removable and permanent flood protection barriers that seat tightly at doorways, loading docks, and below-grade entries to block water intrusion. Each is custom-built for the opening it protects.',
      },
      {
        question: 'Do other welding companies offer storm and flood protection?',
        answer:
          'Most do not. Custom metal storm shields and flood barriers are a specialty service at HotFab Welding, which is why property owners across Metro Detroit come to us specifically for this work.',
      },
    ],
    related: ['metal-fences', 'structural-steel', 'mobile-welding'],
    image: `${IMG}/residential-balcony-railing-steel-michigan.jpg`,
  },
];

export const serviceSlugs = services.map((s) => s.slug);
export const getService = (slug: string) => services.find((s) => s.slug === slug);

// Maps a blog post to its most relevant service page for internal linking.
// Keyword rules are checked in order; the first match wins. Generic welding
// posts (cost guides, safety, history, etc.) return undefined and fall back to
// the /services hub in the blog template.
const BLOG_SERVICE_RULES: { match: string[]; slug: string }[] = [
  { match: ['storm', 'flood', 'security-panel'], slug: 'storm-shields' },
  { match: ['driveway', 'gate', 'automation'], slug: 'driveway-gates' },
  { match: ['fence'], slug: 'metal-fences' },
  { match: ['staircase', 'spiral'], slug: 'custom-staircases' },
  { match: ['mezzanine', 'structural'], slug: 'structural-steel' },
  { match: ['railing', 'handrail', 'balcony'], slug: 'custom-railings' },
  { match: ['on-site', 'emergency', 'truck', 'trailer', 'industrial-equipment'], slug: 'mobile-welding' },
];

export function serviceForBlog(slug: string): Service | undefined {
  const key = slug.toLowerCase();
  for (const rule of BLOG_SERVICE_RULES) {
    if (rule.match.some((m) => key.includes(m))) return getService(rule.slug);
  }
  return undefined;
}