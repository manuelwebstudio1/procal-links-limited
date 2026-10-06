"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/favorites";

export function FavoriteButton({ id, title }: { id: string; title: string }) {
  const { has, toggle } = useFavorites();
  const liked = has(id);

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-label={liked ? `Remove ${title} from favourites` : `Save ${title}`}
      className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
        liked ? "border-red-200 bg-white text-red-500" : "border-line bg-white text-procal-900"
      }`}
    >
      <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
    </button>
  );
}
