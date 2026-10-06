import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { images } from "@/data/images";

const values = ["Integrity", "Professionalism", "Transparency", "Client First"];

export function AboutPreview() {
  return (
    <section className="bg-cream py-20">
      <div className="container-procal grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src={images.about}
                alt="A well-presented home from Procal Links Limited"
                width={900}
                height={720}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[240px] rounded-2xl bg-procal-900 p-5 text-white shadow-xl sm:right-6">
              <p className="font-serif text-2xl">Your next move starts here.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="eyebrow">About Procal</p>
          <h2 className="mt-3 font-serif text-4xl text-procal-900 sm:text-5xl">The Link to Your Next Property</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Procal Links Limited helps clients navigate property buying, selling, renting and investment
            opportunities across Ghana. From 69 Lagos Ave, we focus on clear communication, carefully presented
            listings and support that feels personal rather than transactional.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Whether you are searching for a home, listing a property or exploring land and commercial space, we
            work with you to understand the brief and move at a considered pace.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {values.map((value) => (
              <li key={value} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium text-procal-900">
                {value}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full bg-procal-900 px-6 py-3 text-sm font-semibold text-white hover:bg-procal-800"
          >
            Learn About Procal
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
