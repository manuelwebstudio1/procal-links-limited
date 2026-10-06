import { PageHero } from "@/components/PageHero";
import { OwnerForm } from "@/components/OwnerForm";
import { images } from "@/data/images";

export const metadata = {
  title: "List Your Property",
  description: "Sell or rent your property with professional marketing from Procal Links Limited.",
};

export default async function ListPropertyPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Property Owners"
        title="Have a Property to Sell or Rent?"
        text="Put your property in front of potential buyers and tenants with professional real-estate marketing and personalized support."
        image={images.sellCta}
      />
      <section className="bg-cream py-16">
        <div className="container-procal grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-serif text-3xl text-procal-900">What happens next</h2>
            <ol className="mt-6 space-y-4 text-muted">
              <li>
                <strong className="text-procal-900">1. Share the basics.</strong> Location, type and whether you want to sell or rent.
              </li>
              <li>
                <strong className="text-procal-900">2. We follow up.</strong> An agent will call or message to understand the property.
              </li>
              <li>
                <strong className="text-procal-900">3. Presentation.</strong> We help you present it clearly to serious enquiries.
              </li>
            </ol>
          </div>
          <OwnerForm defaultIntent={intent === "rent" ? "rent" : "sell"} />
        </div>
      </section>
    </>
  );
}
