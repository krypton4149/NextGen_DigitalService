import { AboutTeaserSection } from "@/components/AboutTeaserSection";
import { ClientTrustSection } from "@/components/ClientTrustSection";
import { ContactSection } from "@/components/ContactSection";
import { CreativeMarquee } from "@/components/CreativeMarquee";
import { CTASection } from "@/components/CTASection";
import { EventsSection } from "@/components/EventsSection";
import { Hero } from "@/components/Hero";
import { LocalIdentitySection } from "@/components/LocalIdentitySection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <CreativeMarquee />
      <LocalIdentitySection />
      <PortfolioSection />
      <AboutTeaserSection />
      <WhyUsSection />
      <EventsSection />
      <ProcessSection />
      <ClientTrustSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
