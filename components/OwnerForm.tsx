"use client";

import { useState } from "react";
import { propertyTypes } from "@/data/properties";
import { siteConfig, whatsappLink } from "@/data/site";

export function OwnerForm({ defaultIntent = "sell" }: { defaultIntent?: string }) {
  const [sent, setSent] = useState(false);
  const [intent, setIntent] = useState(defaultIntent || "sell");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Hello Procal Links Limited, I would like to ${data.get("intent") || "list"} my ${data.get("type")} in ${data.get("location")}. Name: ${data.get("name")}. Phone: ${data.get("phone")}. ${data.get("message") || ""}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-line bg-cream p-8">
        <h3 className="font-serif text-3xl text-procal-900">Thank you</h3>
        <p className="mt-3 text-muted">
          Your property details have been prepared. If WhatsApp did not open, call us on {siteConfig.phone} and we will take it from there.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-cream p-6 sm:p-8">
      <h3 className="font-serif text-2xl text-procal-900">Submit Property</h3>
      <p className="mt-2 text-sm text-muted">Share a few details and an agent will follow up.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Full Name</span>
          <input required name="name" className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Phone Number</span>
          <input required name="phone" type="tel" placeholder="024 XXX XXXX" className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Property Location</span>
          <input required name="location" placeholder="e.g. Airport Hills" className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Property Type</span>
          <select name="type" className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-procal-700">
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Sell / Rent</span>
          <select
            name="intent"
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-procal-700"
          >
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Message</span>
          <textarea name="message" rows={4} className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
      </div>
      <button type="submit" className="mt-5 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-procal-950 hover:bg-gold-light">
        Submit Property
      </button>
    </form>
  );
}
