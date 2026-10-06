import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { locations } from "@/data/locations";

export function Locations() {
  return (
    <section className="bg-cream py-20">
      <div className="container-procal">
        <FadeIn className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Explore by Location</p>
            <h2 className="mt-3 font-serif text-4xl text-procal-900 sm:text-5xl">Neighbourhoods We Work In</h2>
          </div>
          <Link href="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-procal-800">
            View All Locations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {locations.map((location, index) => (
            <FadeIn key={location.key} delay={index * 0.04}>
              <Link
                href={`/properties?location=${encodeURIComponent(location.name)}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl"
              >
                <Image
                  src={location.image}
                  alt={`Properties in ${location.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-procal-950/85 via-procal-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-serif text-2xl">{location.name}</h3>
                  <p className="mt-1 text-xs text-white/70">{location.area}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-gold-light">
                    View Properties
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
