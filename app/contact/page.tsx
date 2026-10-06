import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { images } from "@/data/images";

export const metadata = {
  title: "Contact Procal Links Limited",
  description: "Call, WhatsApp or send an enquiry to Procal Links Limited at 69 Lagos Ave, Ghana.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Find Your Perfect Property"
        text="Whether you want to view a home, list a property or ask about land, start here. A Procal agent will take it from the first message."
        image={images.contact}
      />
      <ContactSection />
    </>
  );
}
