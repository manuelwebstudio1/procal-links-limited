import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { extraServices, services } from "@/data/services";
import { images } from "@/data/images";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Services",
  description:
    "Property sales, rentals, land and commercial services from Procal Links Limited in Ghana.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Property Solutions Linked Around You"
        text="Procal Links Limited supports buyers, tenants, owners and investors across homes, land and commercial space."
        image={images.servicesHero}
      />
      <section className="bg-cream py-16">
        <div className="container-procal space-y-10">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.slug}
              className={`grid items-center gap-8 overflow-hidden rounded-[28px] bg-white lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[280px]">
                <Image src={service.image} alt={service.title} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="font-serif text-3xl text-procal-900 sm:text-4xl">{service.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-procal-900 px-5 py-3 text-sm font-semibold text-white"
                >
                  Talk to an Agent
                </Link>
              </div>
            </article>
          ))}
          <div className="grid gap-5 md:grid-cols-2">
            {extraServices.map((service) => (
              <article key={service.title} className="rounded-[28px] border border-line bg-white p-8">
                <h3 className="font-serif text-2xl text-procal-900">{service.title}</h3>
                <p className="mt-3 text-muted">{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
