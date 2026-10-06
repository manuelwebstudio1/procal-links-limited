export type PropertyCategory = "buy" | "rent" | "land" | "commercial";
export type PropertyType =
  | "House"
  | "Apartment"
  | "Villa"
  | "Townhouse"
  | "Land"
  | "Office"
  | "Shop"
  | "Warehouse";
export type PropertyStatus = "For Sale" | "For Rent";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  category: PropertyCategory;
  status: PropertyStatus;
  location: string;
  locationKey: string;
  price: number;
  pricePeriod: "month" | null;
  bedrooms: number | null;
  bathrooms: number | null;
  size: number;
  sizeUnit: "sq ft" | "acres";
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  features: string[];
  featured: boolean;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "trasacco-5bed-house",
    title: "5 Bedroom Executive House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Trasacco Valley, Accra",
    locationKey: "trasacco",
    price: 4850000,
    pricePeriod: null,
    bedrooms: 5,
    bathrooms: 5,
    size: 3800,
    sizeUnit: "sq ft",
    image: img("photo-1600585153490-76fb20a32601"),
    gallery: [
      img("photo-1600585153490-76fb20a32601"),
      img("photo-1600047509358-9dc13528ad37"),
      img("photo-1600585152220-90363fe30d59"),
      img("photo-1618221195710-dd6b41faaea6"),
    ],
    description:
      "A generous five-bedroom house in Trasacco Valley with formal living spaces, a private garden and a quiet street setting. Built for a family that wants room to host without leaving a gated neighbourhood.",
    amenities: ["Gated estate", "Private garden", "Covered parking", "Standby generator", "Staff quarters"],
    features: ["En-suite master wing", "Double living rooms", "Study", "Covered terrace"],
    featured: true,
  },
  {
    id: "labone-3bed-penthouse",
    title: "3 Bedroom Penthouse Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Labone, Accra",
    locationKey: "labone",
    price: 11500,
    pricePeriod: "month",
    bedrooms: 3,
    bathrooms: 3,
    size: 2100,
    sizeUnit: "sq ft",
    image: img("photo-1505691938895-1758d7afd59e"),
    gallery: [
      img("photo-1505691938895-1758d7afd59e"),
      img("photo-1560448204-61dc36dc98c8"),
      img("photo-1616594039964-ae9021a400a0"),
      img("photo-1558036117-15d82a90b9bc"),
    ],
    description:
      "A top-floor three-bedroom apartment in Labone with long views, a private terrace and a short walk to restaurants. Practical for a professional household that wants city convenience without a compound to maintain.",
    amenities: ["24-hour security", "Lift", "Assigned parking", "Backup power", "Water reservoir"],
    features: ["Private terrace", "Open-plan living", "Fitted kitchen", "Walk-in closet"],
    featured: true,
  },
  {
    id: "airport-hills-4bed",
    title: "4 Bedroom Contemporary Home",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Airport Hills, Accra",
    locationKey: "airport-hills",
    price: 4200000,
    pricePeriod: null,
    bedrooms: 4,
    bathrooms: 4,
    size: 3100,
    sizeUnit: "sq ft",
    image: img("photo-1605276374104-dee2a0ed3cd6"),
    gallery: [
      img("photo-1605276374104-dee2a0ed3cd6"),
      img("photo-1600047509782-20d39509f26d"),
      img("photo-1572120360610-d91159ce588e"),
      img("photo-1605146769289-440113cc3d00"),
    ],
    description:
      "A contemporary four-bedroom home in Airport Hills with clean lines, natural light and a private compound. Close to the airport corridor and a comfortable base for family living.",
    amenities: ["Walled compound", "Parking for 4 cars", "Borehole", "Kitchen pantry", "Security gate"],
    features: ["High ceilings", "Guest suite", "Outdoor lounge", "Utility room"],
    featured: true,
  },
  {
    id: "ridge-studio-apartment",
    title: "Premium Studio Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Ridge, Accra",
    locationKey: "ridge",
    price: 3800,
    pricePeriod: "month",
    bedrooms: 1,
    bathrooms: 1,
    size: 620,
    sizeUnit: "sq ft",
    image: img("photo-1599423300746-b62533397364"),
    gallery: [
      img("photo-1599423300746-b62533397364"),
      img("photo-1560448204-61dc36dc98c8"),
      img("photo-1505691938895-1758d7afd59e"),
      img("photo-1616594039964-ae9021a400a0"),
    ],
    description:
      "A well-finished studio on Ridge, suited to a professional who wants a central Accra address with shops, offices and restaurants nearby.",
    amenities: ["Security", "Parking", "Shared generator", "Water supply"],
    features: ["Open kitchen", "City views", "Fitted wardrobe", "Tiled floors"],
    featured: true,
  },
  {
    id: "east-airport-villa",
    title: "6 Bedroom Estate Villa",
    type: "Villa",
    category: "buy",
    status: "For Sale",
    location: "East Airport, Accra",
    locationKey: "airport-hills",
    price: 7800000,
    pricePeriod: null,
    bedrooms: 6,
    bathrooms: 6,
    size: 5200,
    sizeUnit: "sq ft",
    image: img("photo-1600047509358-9dc13528ad37"),
    gallery: [
      img("photo-1600047509358-9dc13528ad37"),
      img("photo-1600585153490-76fb20a32601"),
      img("photo-1600585152220-90363fe30d59"),
      img("photo-1605146769289-440113cc3d00"),
    ],
    description:
      "A substantial six-bedroom villa in East Airport with a pool, formal dining and a mature garden. For clients who want space, privacy and a neighbourhood that is already established.",
    amenities: ["Swimming pool", "Staff quarters", "Double garage", "Garden irrigation", "CCTV"],
    features: ["Formal dining", "Family lounge", "Walk-in closet", "Covered terrace"],
    featured: true,
  },
  {
    id: "tesano-townhouse",
    title: "3 Bedroom Gated Townhouse",
    type: "Townhouse",
    category: "rent",
    status: "For Rent",
    location: "Tesano, Accra",
    locationKey: "tesano",
    price: 9500,
    pricePeriod: "month",
    bedrooms: 3,
    bathrooms: 3,
    size: 2400,
    sizeUnit: "sq ft",
    image: img("photo-1572120360610-d91159ce588e"),
    gallery: [
      img("photo-1572120360610-d91159ce588e"),
      img("photo-1605276374104-dee2a0ed3cd6"),
      img("photo-1600047509782-20d39509f26d"),
      img("photo-1558036117-15d82a90b9bc"),
    ],
    description:
      "A three-bedroom townhouse in a gated Tesano community. Family-friendly layout with a small garden and straightforward access to the city and nearby schools.",
    amenities: ["Gated community", "Generator", "Garden", "Parking", "Borehole"],
    features: ["Two living rooms", "Maid's room", "Study nook", "Patio"],
    featured: false,
  },
  {
    id: "oyarifa-residential-land",
    title: "Residential Plot, Oyarifa",
    type: "Land",
    category: "land",
    status: "For Sale",
    location: "Oyarifa, Accra",
    locationKey: "oyarifa",
    price: 720000,
    pricePeriod: null,
    bedrooms: null,
    bathrooms: null,
    size: 0.35,
    sizeUnit: "acres",
    image: img("photo-1470071459604-3b5ec3a7fe05"),
    gallery: [
      img("photo-1470071459604-3b5ec3a7fe05"),
      img("photo-1472214103451-9374bd1c798e"),
      img("photo-1441974231531-c6227db76b6e"),
      img("photo-1469474968028-56623f02e42e"),
    ],
    description:
      "A surveyed residential plot in Oyarifa with road frontage, suitable for a private home or a modest development. Neighbourhood infrastructure is growing around the site.",
    amenities: ["Road access", "Nearby utilities", "Surveyed plot"],
    features: ["Rectangular shape", "Quiet street", "Rising residential area"],
    featured: false,
  },
  {
    id: "ridge-office-floor",
    title: "Open-Plan Office Floor",
    type: "Office",
    category: "commercial",
    status: "For Rent",
    location: "Ridge, Accra",
    locationKey: "ridge",
    price: 15000,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 2,
    size: 1850,
    sizeUnit: "sq ft",
    image: img("photo-1497366754035-f200968a6e72"),
    gallery: [
      img("photo-1497366754035-f200968a6e72"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1524758631624-e2822e304c36"),
    ],
    description:
      "A ready office floor on Ridge with meeting rooms, a reception zone and reliable power. Practical for a professional firm that wants a central Accra address without a long commute for clients.",
    amenities: ["Reception", "Standby power", "Parking", "Air conditioning", "Fibre internet ready"],
    features: ["Open work area", "Two meeting rooms", "Kitchenette", "Client waiting area"],
    featured: false,
  },
  {
    id: "achimota-family-house",
    title: "4 Bedroom Family House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Achimota, Accra",
    locationKey: "achimota",
    price: 1850000,
    pricePeriod: null,
    bedrooms: 4,
    bathrooms: 3,
    size: 2200,
    sizeUnit: "sq ft",
    image: img("photo-1600047509782-20d39509f26d"),
    gallery: [
      img("photo-1600047509782-20d39509f26d"),
      img("photo-1572120360610-d91159ce588e"),
      img("photo-1605276374104-dee2a0ed3cd6"),
      img("photo-1558036117-15d82a90b9bc"),
    ],
    description:
      "A well-kept four-bedroom house in Achimota, offering a compound, parking and straightforward access to the motorway and the northern Accra corridor.",
    amenities: ["Compound", "Parking", "Water tank", "Security bars"],
    features: ["Dining area", "Outdoor kitchen space", "Store room", "Porch"],
    featured: false,
  },
  {
    id: "haatso-2bed-apartment",
    title: "2 Bedroom Garden Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Haatso, Accra",
    locationKey: "achimota",
    price: 4200,
    pricePeriod: "month",
    bedrooms: 2,
    bathrooms: 2,
    size: 980,
    sizeUnit: "sq ft",
    image: img("photo-1616594039964-ae9021a400a0"),
    gallery: [
      img("photo-1616594039964-ae9021a400a0"),
      img("photo-1560448204-61dc36dc98c8"),
      img("photo-1599423300746-b62533397364"),
      img("photo-1505691938895-1758d7afd59e"),
    ],
    description:
      "A peaceful two-bedroom garden-level apartment in Haatso. Good for a small family or couple looking for space just outside the inner city, with shops and transport nearby.",
    amenities: ["Parking", "Security", "Shared compound", "Water supply"],
    features: ["Garden access", "Kitchen with pantry", "Tiled throughout"],
    featured: false,
  },
  {
    id: "tema-logistics-warehouse",
    title: "Logistics Warehouse with Yard",
    type: "Warehouse",
    category: "commercial",
    status: "For Rent",
    location: "Tema Community 9",
    locationKey: "tema",
    price: 32000,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 2,
    size: 14500,
    sizeUnit: "sq ft",
    image: img("photo-1586528116311-ad8dd3c8310d"),
    gallery: [
      img("photo-1586528116311-ad8dd3c8310d"),
      img("photo-1553413077-190dd305871c"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366754035-f200968a6e72"),
    ],
    description:
      "A practical warehouse with loading yard in Tema Community 9. Suitable for storage, distribution or light operations close to the port and the motorway.",
    amenities: ["Loading bay", "Yard parking", "Security post", "Three-phase power"],
    features: ["High clearance", "Office annex", "Walled perimeter"],
    featured: false,
  },
  {
    id: "labone-retail-shop",
    title: "Street-Front Retail Shop",
    type: "Shop",
    category: "commercial",
    status: "For Rent",
    location: "Labone, Accra",
    locationKey: "labone",
    price: 6800,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 1,
    size: 580,
    sizeUnit: "sq ft",
    image: img("photo-1441986300917-64674bd600d8"),
    gallery: [
      img("photo-1441986300917-64674bd600d8"),
      img("photo-1472851294608-062f824d29cc"),
      img("photo-1441984904996-e0b6ba687e04"),
      img("photo-1556742049-0cfed4f6a45d"),
    ],
    description:
      "A visible ground-floor shop on a busy Labone stretch. Suitable for retail, a showroom or a service business that needs walk-in traffic.",
    amenities: ["Street frontage", "Shutters", "Power", "Water"],
    features: ["Display windows", "Rear store", "Single washroom"],
    featured: false,
  },
  {
    id: "prampram-land",
    title: "Development Land, Prampram",
    type: "Land",
    category: "land",
    status: "For Sale",
    location: "Prampram, Greater Accra",
    locationKey: "prampram",
    price: 1150000,
    pricePeriod: null,
    bedrooms: null,
    bathrooms: null,
    size: 0.6,
    sizeUnit: "acres",
    image: img("photo-1441974231531-c6227db76b6e"),
    gallery: [
      img("photo-1441974231531-c6227db76b6e"),
      img("photo-1470071459604-3b5ec3a7fe05"),
      img("photo-1472214103451-9374bd1c798e"),
      img("photo-1469474968028-56623f02e42e"),
    ],
    description:
      "Just over half an acre on the Prampram corridor, suitable for a coastal home, a small compound or a longer-term hold. Growing access and neighbourhood activity around the plot.",
    amenities: ["Road nearby", "Surveyed", "Clear boundaries"],
    features: ["Development potential", "Accessible from the Accra–Aflao corridor"],
    featured: false,
  },
  {
    id: "airport-hills-furnished-villa",
    title: "Furnished 5 Bedroom Villa",
    type: "Villa",
    category: "rent",
    status: "For Rent",
    location: "Airport Hills, Accra",
    locationKey: "airport-hills",
    price: 28000,
    pricePeriod: "month",
    bedrooms: 5,
    bathrooms: 5,
    size: 4400,
    sizeUnit: "sq ft",
    image: img("photo-1605146769289-440113cc3d00"),
    gallery: [
      img("photo-1605146769289-440113cc3d00"),
      img("photo-1600047509358-9dc13528ad37"),
      img("photo-1600585152220-90363fe30d59"),
      img("photo-1618221195710-dd6b41faaea6"),
    ],
    description:
      "A furnished five-bedroom villa with a pool in Airport Hills. Ready for a family or executive household that wants a finished home close to the airport and international schools.",
    amenities: ["Swimming pool", "Furnished", "Generator", "DSTV ready", "Security"],
    features: ["Open living", "Outdoor kitchen", "Guest suite", "Landscaped garden"],
    featured: true,
  },
];

export const propertyTypes: PropertyType[] = [
  "House",
  "Apartment",
  "Villa",
  "Townhouse",
  "Land",
  "Office",
  "Shop",
  "Warehouse",
];

export const searchTabs: { id: PropertyCategory; label: string }[] = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
  { id: "land", label: "Land" },
  { id: "commercial", label: "Commercial" },
];

export const priceRanges: Record<
  PropertyCategory,
  { label: string; min: number; max: number }[]
> = {
  buy: [
    { label: "Under GH₵ 1,000,000", min: 0, max: 1000000 },
    { label: "GH₵ 1M – 2.5M", min: 1000000, max: 2500000 },
    { label: "GH₵ 2.5M – 5M", min: 2500000, max: 5000000 },
    { label: "Above GH₵ 5M", min: 5000000, max: Infinity },
  ],
  rent: [
    { label: "Under GH₵ 5,000", min: 0, max: 5000 },
    { label: "GH₵ 5,000 – 10,000", min: 5000, max: 10000 },
    { label: "GH₵ 10,000 – 20,000", min: 10000, max: 20000 },
    { label: "Above GH₵ 20,000", min: 20000, max: Infinity },
  ],
  land: [
    { label: "Under GH₵ 400,000", min: 0, max: 400000 },
    { label: "GH₵ 400,000 – 1M", min: 400000, max: 1000000 },
    { label: "Above GH₵ 1M", min: 1000000, max: Infinity },
  ],
  commercial: [
    { label: "Under GH₵ 10,000 / mo", min: 0, max: 10000 },
    { label: "GH₵ 10,000 – 20,000 / mo", min: 10000, max: 20000 },
    { label: "Above GH₵ 20,000 / mo", min: 20000, max: Infinity },
  ],
};

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured).slice(0, 4);
}

export function getRelatedProperties(property: Property, limit = 3) {
  return properties
    .filter((p) => p.id !== property.id && (p.locationKey === property.locationKey || p.category === property.category))
    .slice(0, limit);
}
