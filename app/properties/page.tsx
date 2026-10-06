import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PropertySearch } from "@/components/PropertySearch";
import { PropertyGrid } from "@/components/PropertyGrid";
import { images } from "@/data/images";
import { filterProperties, type SearchFilters } from "@/lib/filter";

export const metadata = {
  title: "Properties for Sale and Rent in Ghana",
  description:
    "Browse homes, apartments, land and commercial properties with Procal Links Limited.",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<SearchFilters>;
}) {
  const filters = await searchParams;
  const results = filterProperties(filters);
  const hasFilters = Boolean(filters.category || filters.location || filters.type || filters.price || filters.bedrooms);

  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Find a Place You'll Love"
        text="Search homes, apartments, land and commercial spaces across Accra and beyond. These are demo listings — easy for Procal to replace with live inventory."
        image={images.servicesHero}
      />
      <section className="bg-cream pb-20">
        <div className="pt-8">
          <PropertySearch initial={filters} compact />
        </div>
        <div className="container-procal mt-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-3xl text-procal-900">
                {results.length} {results.length === 1 ? "property" : "properties"}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {hasFilters ? "Showing results for your current filters." : "Showing the full Procal demo collection."}
              </p>
            </div>
            <Link href="/favorites" className="text-sm font-semibold text-procal-800">
              View saved properties
            </Link>
          </div>

          {results.length > 0 ? (
            <PropertyGrid properties={results} />
          ) : (
            <div className="rounded-[28px] border border-line bg-white px-8 py-16 text-center">
              <h3 className="font-serif text-3xl text-procal-900">No matching properties</h3>
              <p className="mx-auto mt-3 max-w-md text-muted">
                We couldn&apos;t find a property matching those filters. Try another location, type or price range.
              </p>
              <Link
                href="/properties"
                className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-procal-950"
              >
                Clear Filters
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
