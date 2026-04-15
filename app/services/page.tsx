import type { Metadata } from "next";
import { ServicesBottomCta } from "@/components/services/ServicesBottomCta";
import { ServicesDetailBento } from "@/components/services/ServicesDetailBento";
import { ServicesPageHero } from "@/components/services/ServicesPageHero";
import { ServicesPricingTeaser } from "@/components/services/ServicesPricingTeaser";
import { ServicesReliabilitySection } from "@/components/services/ServicesReliabilitySection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive digital services from NextGen: web development, SEO, Google Business, apps, branding, social, and more for small businesses.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesPageHero />
      <ServicesDetailBento />
      <ServicesReliabilitySection />
      <ServicesPricingTeaser />
      <ServicesBottomCta />
    </main>
  );
}
