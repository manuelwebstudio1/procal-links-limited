export const siteConfig = {
  name: "Procal Links Limited",
  shortName: "Procal",
  tagline: "Buy. Rent. Sell. Connect.",
  description:
    "Discover homes, apartments, land and commercial properties for sale and rent with Procal Links Limited.",
  url: "https://procallinks.com",
  phone: "0244204344",
  phoneHref: "tel:0244204344",
  whatsapp: "233244204344",
  email: "info@procallinks.com",
  location: "69 Lagos Ave, Ghana",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const whatsappDefaultMessage =
  "Hello Procal Links Limited, I am interested in one of your properties and would like to get more information.";

export function whatsappLink(message = whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function propertyWhatsappMessage(title: string, location: string) {
  return `Hello Procal Links Limited, I am interested in the ${title} in ${location}. Is it still available?`;
}

export function formatPrice(price: number, period?: "month" | null) {
  const formatted = new Intl.NumberFormat("en-GH").format(price);
  return period === "month" ? `GH₵ ${formatted} / month` : `GH₵ ${formatted}`;
}
