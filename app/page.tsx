import { ClientSuccessSection } from "@/components/ClientSuccessSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { EdgePhilosophySection } from "@/components/EdgePhilosophySection";
import { Hero } from "@/components/Hero";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <EdgePhilosophySection />
      <PortfolioSection />
      <ClientSuccessSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
