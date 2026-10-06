"use client";

import { usePathname } from "next/navigation";
import { siteConfig, whatsappDefaultMessage, whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  const pathname = usePathname();
  const lifted = pathname.startsWith("/properties/") && pathname !== "/properties";

  return (
    <a
      href={whatsappLink(whatsappDefaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Procal Links Limited on WhatsApp"
      className={`fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.8)] transition hover:scale-105 ${
        lifted ? "bottom-24 lg:bottom-5" : "bottom-5"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.47c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.11.55 4.17 1.6 6L4 29l8.16-1.56c1.76.96 3.75 1.47 5.86 1.47 6.63 0 12.02-5.39 12.02-12.02C30.04 8.39 24.65 3 16.02 3zm0 21.82c-1.86 0-3.68-.5-5.27-1.44l-.38-.23-4.84.93.94-4.72-.25-.4a10.76 10.76 0 0 1-1.65-5.94c0-5.95 4.84-10.79 10.79-10.79S26.81 9.07 26.81 15.02 21.97 24.82 16.02 24.82z" />
      </svg>
      <span className="sr-only">{siteConfig.name} WhatsApp</span>
    </a>
  );
}
