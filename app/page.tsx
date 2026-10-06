import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PropertySearch } from "@/components/PropertySearch";
import { TrustStrip } from "@/components/TrustStrip";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { CTASection } from "@/components/CTASection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Locations } from "@/components/Locations";
import { Testimonials } from "@/components/Testimonials";
import { AboutPreview } from "@/components/AboutPreview";
import { PropertyOwner } from "@/components/PropertyOwner";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertySearch />
      <TrustStrip />
      <FeaturedProperties />
      <CTASection />
      <ServicesSection />
      <HowItWorks />
      <Locations />
      <Testimonials />
      <AboutPreview />
      <PropertyOwner />
      <BlogSection />
      <ContactSection />
      <p className="sr-only">
        <Link href="/favorites">Saved properties</Link>
      </p>
    </>
  );
}
