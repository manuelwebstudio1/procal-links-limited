import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PropertyGrid } from "./PropertyGrid";
import { FadeIn } from "./FadeIn";
import { getFeaturedProperties } from "@/data/properties";

export function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section className="bg-white py-20">
      <div className="container-procal">
        <FadeIn className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Featured Properties</p>
            <h2 className="mt-3 font-serif text-4xl text-procal-900 sm:text-5xl">Properties Worth a Look</h2>
            <p className="mt-3 max-w-xl text-muted">
              A curated selection of homes, land and commercial space currently linked through Procal.
            </p>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-procal-800 hover:text-gold-dark"
          >
            View All Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
        <div className="mt-10">
          <PropertyGrid properties={featured} />
        </div>
      </div>
    </section>
  );
}
