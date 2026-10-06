import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyEnquiry } from "@/components/PropertyEnquiry";
import { MobilePropertyBar } from "@/components/MobilePropertyBar";
import { PropertyCard } from "@/components/PropertyCard";
import { FavoriteButton } from "@/components/FavoriteButton";
import { getPropertyById, getRelatedProperties, properties } from "@/data/properties";
import { formatPrice, siteConfig } from "@/data/site";

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return { title: "Property" };
  return {
    title: `${property.title} | ${property.location}`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) notFound();
  const related = getRelatedProperties(property);

  return (
    <article className="bg-cream pb-24 pt-28 lg:pb-20">
      <div className="container-procal">
        <p className="text-sm text-muted">
          <Link href="/properties" className="hover:text-procal-800">
            Properties
          </Link>
          <span className="px-2">/</span>
          {property.title}
        </p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-serif text-4xl text-procal-900 sm:text-5xl">{property.title}</h1>
            <p className="mt-2 flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4 text-gold-dark" />
              {property.location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-serif text-3xl text-gold-dark">{formatPrice(property.price, property.pricePeriod)}</p>
            <FavoriteButton id={property.id} title={property.title} />
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_380px]">
          <div>
            <PropertyGallery property={property} />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Spec label="Type" value={property.type} />
              {property.bedrooms !== null && (
                <Spec
                  label="Bedrooms"
                  value={`${property.bedrooms}`}
                  icon={<BedDouble className="h-4 w-4" />}
                />
              )}
              {property.bathrooms !== null && (
                <Spec
                  label="Bathrooms"
                  value={`${property.bathrooms}`}
                  icon={<Bath className="h-4 w-4" />}
                />
              )}
              <Spec
                label="Size"
                value={`${property.size.toLocaleString()} ${property.sizeUnit}`}
                icon={<Maximize className="h-4 w-4" />}
              />
            </div>

            <section className="mt-10 rounded-[28px] bg-white p-7">
              <h2 className="font-serif text-3xl text-procal-900">About this property</h2>
              <p className="mt-4 leading-relaxed text-muted">{property.description}</p>
            </section>

            <section className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-white p-7">
                <h3 className="font-serif text-2xl text-procal-900">Amenities</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {property.amenities.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] bg-white p-7">
                <h3 className="font-serif text-2xl text-procal-900">Features</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {property.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-6 rounded-[28px] bg-white p-7">
              <h3 className="font-serif text-2xl text-procal-900">Speak with a Procal agent</h3>
              <p className="mt-3 max-w-xl text-sm text-muted">
                An agent can confirm availability, arrange a viewing and answer questions about this {property.type.toLowerCase()} in {property.location}.
              </p>
              <p className="mt-4 text-sm font-medium text-procal-900">{siteConfig.phone}</p>
            </section>
          </div>

          <div id="enquire">
            <PropertyEnquiry property={property} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-3xl text-procal-900">Similar properties</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </section>
        )}
      </div>
      <MobilePropertyBar property={property} />
    </article>
  );
}

function Spec({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="rounded-2xl bg-white px-4 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 inline-flex items-center gap-2 font-medium text-procal-900">
        {icon}
        {value}
      </p>
    </div>
  );
}

