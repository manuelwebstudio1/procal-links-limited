import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { images } from "@/data/images";

const benefits = ["Professional Marketing", "Reach Serious Clients", "Smooth & Hassle-Free Process"];

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.sellCta})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-procal-950/82" />
      <div className="container-procal relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Looking to Sell or Rent Your Property?
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Let Procal Links Limited help you reach serious buyers and tenants.
          </p>
          <Link
            href="/list-property"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-procal-950 hover:bg-gold-light"
          >
            List Your Property
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="space-y-4 rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-md">
          {benefits.map((item) => (
            <li key={item} className="flex items-center gap-3 text-white/90">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-4 w-4" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
