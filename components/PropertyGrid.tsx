import { PropertyCard } from "./PropertyCard";
import type { Property } from "@/data/properties";

export function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
