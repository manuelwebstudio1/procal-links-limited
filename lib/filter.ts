import { priceRanges, properties, type Property, type PropertyCategory } from "@/data/properties";

export type SearchFilters = {
  category?: PropertyCategory | string;
  location?: string;
  type?: string;
  price?: string;
  bedrooms?: string;
};

export function filterProperties(filters: SearchFilters): Property[] {
  return properties.filter((property) => {
    if (filters.category && property.category !== filters.category) return false;

    if (filters.location) {
      const q = filters.location.toLowerCase().trim();
      const haystack = `${property.location} ${property.locationKey}`.toLowerCase();
      if (!haystack.includes(q) && !haystack.includes(q.replace(/\s+/g, "-"))) {
        return false;
      }
    }

    if (filters.type && property.type !== filters.type) return false;

    if (filters.price) {
      const category = filters.category as PropertyCategory | undefined;
      const ranges = category && priceRanges[category]
        ? priceRanges[category]
        : Object.values(priceRanges).flat();
      const range = ranges.find((item) => item.label === filters.price);
      if (range) {
        const max = range.max === Infinity ? Number.MAX_SAFE_INTEGER : range.max;
        if (property.price < range.min || property.price > max) return false;
      }
    }

    if (filters.bedrooms && filters.bedrooms !== "any") {
      const beds = Number(filters.bedrooms);
      if (Number.isNaN(beds) || property.bedrooms === null || property.bedrooms < beds) {
        return false;
      }
    }

    return true;
  });
}

export function toSearchParams(filters: SearchFilters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  return params.toString();
}
