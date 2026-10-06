"use client";

import { useState } from "react";
import { CalendarDays, MessageCircle } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice, propertyWhatsappMessage, siteConfig, whatsappLink } from "@/data/site";

export function PropertyEnquiry({ property }: { property: Property }) {
  const [sent, setSent] = useState(false);
  const message = propertyWhatsappMessage(property.title, property.location);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const composed = `${message} My name is ${data.get("name")}. Phone: ${data.get("phone")}. I would like to ${data.get("intent")}. ${data.get("note") || ""}`;
    window.open(whatsappLink(composed), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <aside className="rounded-[28px] border border-line bg-white p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
      <p className="text-sm text-muted">{property.status}</p>
      <p className="mt-1 font-serif text-3xl text-procal-900">{formatPrice(property.price, property.pricePeriod)}</p>
      <p className="mt-1 text-sm text-muted">{property.location}</p>

      <div className="mt-5 grid gap-2">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Agent
        </a>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-procal-900/15 px-5 py-3 text-sm font-semibold text-procal-900"
        >
          Call {siteConfig.phone}
        </a>
      </div>

      {sent ? (
        <p className="mt-6 rounded-2xl bg-cream p-4 text-sm text-muted">
          Your request is ready in WhatsApp. A Procal agent will continue the conversation from there.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <p className="text-sm font-semibold text-procal-900">Request more information</p>
          <input required name="name" placeholder="Full name" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700" />
          <input required name="phone" type="tel" placeholder="Phone number" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700" />
          <select name="intent" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700">
            <option>Schedule a viewing</option>
            <option>Request more information</option>
          </select>
          <textarea name="note" rows={3} placeholder="Preferred day or any questions" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700" />
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-procal-950">
            <CalendarDays className="h-4 w-4" />
            Schedule Viewing
          </button>
        </form>
      )}
    </aside>
  );
}
