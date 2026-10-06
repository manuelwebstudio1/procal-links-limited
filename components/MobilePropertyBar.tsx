"use client";

import { CalendarDays, MessageCircle } from "lucide-react";
import type { Property } from "@/data/properties";
import { propertyWhatsappMessage, whatsappLink } from "@/data/site";

export function MobilePropertyBar({ property }: { property: Property }) {
  const message = propertyWhatsappMessage(property.title, property.location);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Agent
        </a>
        <a
          href="#enquire"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-3 py-3 text-sm font-semibold text-procal-950"
        >
          <CalendarDays className="h-4 w-4" />
          Schedule Viewing
        </a>
      </div>
    </div>
  );
}
