import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, siteConfig, whatsappLink } from "@/data/site";

const serviceLinks = [
  { href: "/services#property-sales", label: "Property Sales" },
  { href: "/services#property-rentals", label: "Property Rentals" },
  { href: "/services#land-sales", label: "Land Sales" },
  { href: "/services#commercial-properties", label: "Commercial Properties" },
  { href: "/services", label: "Property Management" },
  { href: "/services", label: "Property Valuation" },
];

export function Footer() {
  return (
    <footer className="bg-procal-950 text-white">
      <div className="container-procal grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo theme="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Linking clients to homes, land and commercial space across Ghana — with clarity from first enquiry to close.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook },
              { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
              { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold-light hover:bg-white/10"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href={siteConfig.social.tiktok}
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold-light hover:bg-white/10"
            >
              <span className="text-xs font-bold">TT</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <a href={siteConfig.phoneHref} className="hover:text-gold-light">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              {siteConfig.location}
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.hours}</li>
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-procal flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Procal Links Limited. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
