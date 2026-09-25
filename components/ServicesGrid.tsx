import Link from "next/link";
import { CORE_SERVICES } from "@/lib/services";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-border">
      <div className="site-wrap py-24 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="display-title mt-6 max-w-xl text-[clamp(2.4rem,4.5vw,3.8rem)] text-navy">
              Built for brands
              <br />
              that want to move.
            </h2>
          </div>
          <Button href="/services" variant="outline" arrow={false}>
            All services
          </Button>
        </div>

        <ul className="mt-16">
          {CORE_SERVICES.map((service, index) => (
            <Reveal key={service.num} as="li" delayMs={Math.min(index * 50, 180)}>
              <Link
                href="/services"
                className="group grid gap-3 border-t border-border py-8 transition last:border-b sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-10"
              >
                <span className="eyebrow sm:col-span-1">{service.num}</span>
                <h3 className="display-title text-[clamp(1.6rem,2.5vw,2.2rem)] text-navy transition group-hover:text-coral sm:col-span-4">
                  {service.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-muted sm:col-span-6">
                  {service.description}
                </p>
                <span className="hidden text-right text-muted transition group-hover:text-coral sm:col-span-1 sm:block">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
