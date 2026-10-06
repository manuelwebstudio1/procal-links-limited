import Link from "next/link";
import { ArrowRight, Building2, Home, KeyRound, Trees } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { services } from "@/data/services";

const icons = [Home, KeyRound, Trees, Building2];

export function ServicesSection({ heading = "Property Solutions Linked Around You" }: { heading?: string }) {
  return (
    <section className="bg-cream py-20">
      <div className="container-procal">
        <FadeIn>
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl text-procal-900 sm:text-5xl">{heading}</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={service.id} delay={index * 0.06}>
                <article className="group h-full rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card)]">
                  <Icon className="h-8 w-8 text-gold-dark" strokeWidth={1.4} />
                  <h3 className="mt-5 font-serif text-2xl text-procal-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-procal-800 group-hover:text-gold-dark"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
