import { AboutTeaserSection } from "@/components/AboutTeaserSection";
import { ClientTrustSection } from "@/components/ClientTrustSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { EventsSection } from "@/components/EventsSection";
import { Hero } from "@/components/Hero";
import { ServicesTicker } from "@/components/ServicesTicker";
import { LocalIdentitySection } from "@/components/LocalIdentitySection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ToolkitSection } from "@/components/ToolkitSection";
import { IndustriesSection } from "@/components/IndustriesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesTicker />
      <AboutTeaserSection />
      <ServicesGrid />
      <LocalIdentitySection />
      <ToolkitSection />
      <IndustriesSection />
      <EventsSection />
      <ProcessSection />
      <ClientTrustSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
