"use client";

import { useState } from "react";
import Image from "next/image";
import type { Property } from "@/data/properties";

export function PropertyGallery({ property }: { property: Property }) {
  const [active, setActive] = useState(0);
  const current = property.gallery[active] || property.image;

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-cream">
        <Image
          src={current}
          alt={`${property.title} photo ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-procal-900/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-light">
          {property.status}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {property.gallery.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View photo ${index + 1}`}
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
              active === index ? "ring-2 ring-gold" : "ring-1 ring-line"
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="160px" />
          </button>
        ))}
      </div>
    </div>
  );
}
