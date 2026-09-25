import { AboutTeaserSection } from "@/components/AboutTeaserSection";
import { ClientTrustSection } from "@/components/ClientTrustSection";
import { ContactSection } from "@/components/ContactSection";
import { EventsSection } from "@/components/EventsSection";
import { Hero } from "@/components/Hero";
import { PillarsSection } from "@/components/PillarsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProofBar } from "@/components/ProofBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServicesTicker } from "@/components/ServicesTicker";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesTicker />
      <PillarsSection />
      <ProofBar />
      <ClientTrustSection />
      <ServicesGrid />
      <EventsSection />
      <AboutTeaserSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
