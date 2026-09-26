import Link from "next/link";
import { CORE_SERVICES } from "@/lib/services";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-24 relative overflow-hidden bg-navy text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="agency-orb agency-orb-a absolute right-0 top-10 size-[20rem] opacity-35" />
      </div>
      <div className="site-wrap relative py-20 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel className="text-coral">Capabilities</SectionLabel>
            <h2 className="display-title mt-5 max-w-xl text-[clamp(2.2rem,4.5vw,3.6rem)]">
              Built for brands
              <br />
              that want to <span className="text-coral">move.</span>
            </h2>
          </div>
          <Button href="/services" variant="primary">
            All services
          </Button>
        </div>

        <ul className="mt-14">
          {CORE_SERVICES.map((service, index) => (
            <Reveal key={service.num} as="li" delayMs={Math.min(index * 70, 220)} variant="clip">
              <Link
                href="/services"
                className="group grid gap-3 border-t border-white/12 py-8 transition last:border-b sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-10"
              >
                <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-coral sm:col-span-1">
                  {service.num}
                </span>
                <h3 className="display-title text-[clamp(1.6rem,2.5vw,2.2rem)] text-white transition group-hover:text-coral sm:col-span-4">
                  {service.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-white/60 sm:col-span-6">
                  {service.description}
                </p>
                <span className="hidden text-right text-white/40 transition group-hover:translate-x-1 group-hover:text-coral sm:col-span-1 sm:block">
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
