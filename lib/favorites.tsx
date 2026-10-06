"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FavoritesContextValue = {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);
const STORAGE_KEY = "procal-favorites";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setIds(JSON.parse(stored));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, ready]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      ids,
      toggle: (id) =>
        setIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id])),
      has: (id) => ids.includes(id),
    }),
    [ids],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}
