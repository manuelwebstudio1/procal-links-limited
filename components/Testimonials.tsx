import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container-procal">
        <FadeIn>
          <p className="eyebrow">What Our Clients Say</p>
          <h2 className="mt-3 font-serif text-4xl text-procal-900 sm:text-5xl">Clients We Have Linked</h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <figure className="h-full rounded-3xl border border-line bg-cream/60 p-7">
                <div className="mb-4 text-gold" aria-hidden>
                  {"★★★★★"}
                </div>
                <blockquote className="text-[0.98rem] leading-relaxed text-ink">“{item.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-procal-900">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
