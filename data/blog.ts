export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "how-to-shortlist-homes-in-accra",
    title: "How to Shortlist Homes in Accra Without Wasting Weekends",
    excerpt:
      "A simple method for turning a long listing feed into three viewings that actually match your brief.",
    category: "Buying Guide",
    date: "28 September 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Accra has no shortage of listings. The work is deciding which ones deserve a Saturday. A short, honest brief will do more for you than another hour of scrolling.",
      "Write down the non-negotiables first: maximum budget, the part of town you can live in, bedroom count, and whether you need a compound, a lift or parking for more than one car. Everything else is a preference.",
      "Visit the area at two different times of day before you fall in love with a kitchen. Access, drainage and neighbouring uses change how a house feels once you actually live there.",
      "Inspect roofs, plumbing, electrical fittings and water supply. If the property is land, walk the boundaries with a surveyor rather than relying on a sketch sent by phone.",
      "Keep legal fees, inspections and possible repairs in the same conversation as the asking price, so the decision stays realistic.",
      "Procal Links Limited can help you turn that brief into a shortlist, arrange viewings and connect you with the right next steps — from first enquiry to a considered offer.",
    ],
  },
  {
    slug: "what-makes-a-neighbourhood-worth-the-premium",
    title: "What Makes a Neighbourhood Worth the Premium",
    excerpt:
      "A grounded look at why some Accra addresses cost more — and when that extra spend actually serves you.",
    category: "Investment",
    date: "12 September 2026",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Airport Hills, Labone, Trasacco, Ridge and Tesano are not interchangeable. Each serves a different daily life, even when the photographs look similar.",
      "Established inner neighbourhoods often cost more because they save time: schools, restaurants, offices and a known address. Growing corridors can offer more space for the same budget, with a different commute.",
      "Start with use. A family home, a rental unit and a commercial floor should not be judged by the same ranking of 'best areas'.",
      "Walk the street. Maps cannot replace a look at access, flooding risk and how the neighbourhood feels after dark.",
      "Procal Links Limited helps clients compare locations against a real brief — not a generic ranking — so the extra spend, if any, is doing useful work.",
    ],
  },
  {
    slug: "preparing-your-property-for-serious-viewers",
    title: "Preparing Your Property for Serious Viewers",
    excerpt:
      "Small presentation choices that help serious buyers and tenants take your listing seriously.",
    category: "Advice",
    date: "2 September 2026",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    content: [
      "A viewing is not a tour of your life. It is a chance for someone else to picture theirs. Clear surfaces, working lights and honest photographs do more than a long description.",
      "Fix the obvious: dripping taps, broken switches, overgrown edges and rooms that cannot be entered. Viewers notice what is unfinished before they notice what is beautiful.",
      "Be ready with documents and a realistic price. Serious clients ask about title, occupancy and what stays with the property. Vague answers slow everything down.",
      "Do not overstage. Natural light, empty corners and a clean kitchen tell a clearer story than borrowed furniture that will not be there on moving day.",
      "If you would rather not manage enquiries yourself, talk to Procal. We help owners present a property clearly and filter for people who are ready to view.",
    ],
  },
  {
    slug: "a-practical-look-at-commercial-leases-in-ghana",
    title: "A Practical Look at Commercial Leases in Ghana",
    excerpt:
      "What to check on offices, shops and warehouses before you sign — access, power, term and how you will actually use the space.",
    category: "Commercial",
    date: "18 August 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    content: [
      "A commercial lease is a working tool. The rent is only one line. Power, parking, loading, fibre and the length of the term decide whether the space will support the business.",
      "Visit during operating hours. A quiet Sunday photograph will not tell you how the street feels when deliveries arrive or when clients try to park.",
      "Confirm who pays for standby power, water and common-area security. Those costs change the real monthly figure.",
      "Have a lawyer review the term, break clauses and what happens if you need to fit out the space. Verbal assurances are not a substitute for the document.",
      "Procal Links Limited works with businesses looking for offices, shops and warehouses. We help you look at premises with a practical eye before you commit.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
