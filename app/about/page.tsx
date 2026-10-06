import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/images";

export const metadata = {
  title: "About Procal Links Limited",
  description:
    "Procal Links Limited is a trusted real-estate partner helping clients buy, rent, sell and invest in Ghana.",
};

const values = [
  {
    title: "Integrity",
    text: "We present properties honestly and keep the process transparent from first enquiry to completion.",
  },
  {
    title: "Professionalism",
    text: "Viewings, follow-ups and documentation are handled with care and respect for your time.",
  },
  {
    title: "Transparency",
    text: "You should always know what is available, what it costs, and what the next step is.",
  },
  {
    title: "Client First",
    text: "The brief comes before the listing. We look for a fit, not a forced match.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Link to Your Next Property"
        text="Procal Links Limited helps clients navigate property buying, selling, renting and investment opportunities in Ghana — from 69 Lagos Ave."
        image={images.aboutHero}
      />
      <section className="bg-cream py-16">
        <div className="container-procal grid items-center gap-12 lg:grid-cols-2">
          <Image
            src={images.about}
            alt="Premium home representing Procal Links Limited"
            width={900}
            height={700}
            className="h-[480px] w-full rounded-[28px] object-cover"
          />
          <div>
            <h2 className="font-serif text-4xl text-procal-900">A connected approach to property</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Procal was built around a simple idea: the right property is easier to find when someone links you to
              real options, listens to the brief, and stays present through the details. We work with buyers, tenants,
              owners and people exploring land or commercial space.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Our mission is to make the path from enquiry to viewing to agreement feel clear. No inflated claims. No
              pressure. Just professional support around the property in front of you.
            </p>
            <Link href="/contact" className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-procal-950">
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className="container-procal mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-[28px] bg-white p-7">
              <h3 className="font-serif text-2xl text-procal-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
