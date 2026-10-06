"use client";

import { useState } from "react";
import { siteConfig, whatsappLink } from "@/data/site";

const interests = ["Buying", "Renting", "Selling", "Land", "Commercial Property"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Hello Procal Links Limited, my name is ${data.get("name")}. I am interested in ${data.get("interest")}. Phone: ${data.get("phone")}. Email: ${data.get("email")}. ${data.get("message")}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-procal-900 p-8 text-white">
        <h3 className="font-serif text-3xl">Enquiry sent</h3>
        <p className="mt-3 text-white/75">
          We have opened WhatsApp with your message. You can also call {siteConfig.phone} if you would prefer to speak now.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Name</span>
          <input required name="name" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Phone</span>
          <input required name="phone" type="tel" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Email</span>
          <input required name="email" type="email" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">I&apos;m interested in</span>
          <select name="interest" className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700">
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Message</span>
          <textarea required name="message" rows={5} className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-procal-700" />
        </label>
      </div>
      <button type="submit" className="mt-5 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-procal-950 hover:bg-gold-light">
        Send Enquiry
      </button>
    </form>
  );
}
