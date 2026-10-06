"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { priceRanges, propertyTypes, searchTabs, type PropertyCategory } from "@/data/properties";
import { toSearchParams, type SearchFilters } from "@/lib/filter";

const bedrooms = [
  { value: "any", label: "Any" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
];

type Props = {
  initial?: SearchFilters;
  compact?: boolean;
};

export function PropertySearch({ initial, compact = false }: Props) {
  const router = useRouter();
  const [category, setCategory] = useState<PropertyCategory>((initial?.category as PropertyCategory) || "buy");
  const [location, setLocation] = useState(initial?.location || "");
  const [type, setType] = useState(initial?.type || "");
  const [price, setPrice] = useState(initial?.price || "");
  const [beds, setBeds] = useState(initial?.bedrooms || "any");

  const ranges = useMemo(() => priceRanges[category], [category]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = toSearchParams({
      category,
      location,
      type,
      price,
      bedrooms: beds === "any" ? "" : beds,
    });
    router.push(`/properties${query ? `?${query}` : ""}`);
  }

  return (
    <div className={`relative z-20 ${compact ? "" : "-mt-24"}`}>
      <form
        onSubmit={onSubmit}
        className="container-procal rounded-[28px] border border-white/70 bg-white p-4 shadow-[0_30px_80px_-40px_rgba(13,28,51,0.55)] sm:p-5"
      >
        <div className="flex gap-1 overflow-x-auto no-scrollbar rounded-full bg-cream p-1">
          {searchTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setCategory(tab.id);
                setPrice("");
              }}
              className={`min-w-[84px] flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                category === tab.id
                  ? "bg-procal-900 text-white shadow-sm"
                  : "text-muted hover:text-procal-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted uppercase">Location</span>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Airport Hills, Accra"
              className="w-full rounded-2xl border border-line bg-cream/60 px-4 py-3 text-sm outline-none transition focus:border-procal-700 focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted uppercase">Property Type</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-2xl border border-line bg-cream/60 px-4 py-3 text-sm outline-none transition focus:border-procal-700 focus:bg-white"
            >
              <option value="">Any type</option>
              {propertyTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted uppercase">Price Range</span>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-2xl border border-line bg-cream/60 px-4 py-3 text-sm outline-none transition focus:border-procal-700 focus:bg-white"
            >
              <option value="">Any price</option>
              {ranges.map((item) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted uppercase">Bedrooms</span>
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-full rounded-2xl border border-line bg-cream/60 px-4 py-3 text-sm outline-none transition focus:border-procal-700 focus:bg-white"
            >
              {bedrooms.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-procal-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-procal-800 md:col-span-2 xl:col-span-1"
          >
            <Search className="h-4 w-4 text-gold" />
            Search Properties
          </button>
        </div>
      </form>
    </div>
  );
}
