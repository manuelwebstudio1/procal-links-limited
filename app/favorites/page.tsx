"use client";

import Link from "next/link";
import { properties } from "@/data/properties";
import { PropertyGrid } from "@/components/PropertyGrid";
import { useFavorites } from "@/lib/favorites";

export default function FavoritesPage() {
  const { ids } = useFavorites();
  const saved = properties.filter((property) => ids.includes(property.id));

  return (
    <section className="bg-cream pb-20 pt-32">
      <div className="container-procal">
        <p className="eyebrow">Saved</p>
        <h1 className="mt-3 font-serif text-4xl text-procal-900 sm:text-5xl">Your Favourite Properties</h1>
        <p className="mt-3 max-w-xl text-muted">
          Hearts are stored on this device. Use them to keep a shortlist while you browse.
        </p>
        <div className="mt-10">
          {saved.length > 0 ? (
            <PropertyGrid properties={saved} />
          ) : (
            <div className="rounded-[28px] bg-white px-8 py-16 text-center">
              <h2 className="font-serif text-3xl text-procal-900">No saved properties yet</h2>
              <p className="mt-3 text-muted">Tap the heart on a listing to keep it here.</p>
              <Link href="/properties" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-procal-950">
                Explore Properties
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
