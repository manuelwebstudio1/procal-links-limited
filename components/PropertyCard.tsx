"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Heart, MapPin, Maximize } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/data/site";
import { useFavorites } from "@/lib/favorites";

export function PropertyCard({ property }: { property: Property }) {
  const { has, toggle } = useFavorites();
  const liked = has(property.id);

  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-procal-900/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold-light uppercase">
          {property.status}
        </span>
        <button
          type="button"
          aria-label={liked ? `Remove ${property.title} from favourites` : `Save ${property.title}`}
          onClick={() => toggle(property.id)}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition ${
            liked ? "bg-white text-red-500" : "bg-white/80 text-procal-900 hover:bg-white"
          }`}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl text-procal-900">
          <Link href={`/properties/${property.id}`} className="transition hover:text-procal-700">
            {property.title}
          </Link>
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 text-gold-dark" />
          {property.location}
        </p>
        <p className="mt-3 text-lg font-semibold text-gold-dark">{formatPrice(property.price, property.pricePeriod)}</p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4 text-xs text-muted">
          {property.bedrooms !== null && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5" />
              {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
            </span>
          )}
          {property.bathrooms !== null && (
            <span className="inline-flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5" />
              {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5" />
            {property.size.toLocaleString()} {property.sizeUnit}
          </span>
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-procal-900/15 px-4 py-2.5 text-sm font-medium text-procal-900 transition group-hover:border-gold group-hover:bg-gold group-hover:text-procal-950"
        >
          View Property
        </Link>
      </div>
    </article>
  );
}
