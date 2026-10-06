"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, siteConfig, whatsappLink } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-procal-900/92 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-procal flex h-[88px] items-center justify-between gap-6 overflow-visible bg-transparent">
        <Logo theme="light" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.92rem] tracking-wide transition ${
                  active ? "text-gold-light" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/favorites" aria-label="Saved properties" className="text-white/80 hover:text-gold-light">
            <Heart className="h-5 w-5" />
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-white/90 transition hover:text-gold-light"
          >
            <Phone className="h-4 w-4 text-gold" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-gold/80 px-5 py-2.5 text-sm font-medium text-gold-light transition hover:bg-gold hover:text-procal-950"
          >
            Talk to an Agent
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="rounded-full p-2 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-procal-900 lg:hidden">
          <nav className="container-procal flex flex-col gap-1 py-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-lg ${
                  pathname === link.href ? "bg-white/5 text-gold-light" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/favorites" className="rounded-lg px-3 py-3 text-lg text-white">
              Saved Properties
            </Link>
            <a href={siteConfig.phoneHref} className="px-3 py-3 text-gold-light">
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center font-medium text-procal-950"
            >
              Talk to an Agent
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
