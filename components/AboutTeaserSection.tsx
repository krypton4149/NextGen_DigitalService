import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Button } from "./Button";

export function AboutTeaserSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-soft-navy text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -right-10 bottom-0 size-[22rem] opacity-40" />
      </div>
      <div className="site-wrap relative grid items-center gap-14 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <Reveal className="lg:col-span-6">
          <SectionLabel className="text-coral">Studio</SectionLabel>
          <h2 className="display-title mt-5 text-[clamp(2.2rem,4.5vw,3.6rem)]">
            Local roots.
            <br />
            <span className="text-coral">Full creative reach.</span>
          </h2>
          <p className="mt-7 max-w-md text-[1.05rem] leading-[1.75] text-white/65">
            Based in Shikohabad — a marketing and advertising agency that also
            runs events. One team for restaurants, beauty, retail and growing
            brands that need to look sharp and show up live.
          </p>
          <div className="mt-10">
            <Button href="/about" variant="primary">
              Our story
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={90} className="lg:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden border border-white/10 bg-navy/40">
            <Image
              src="/images/team.png"
              alt="Shikohabad Creative Co. team"
              fill
              className="object-contain object-center p-6"
              sizes="(max-width: 1024px) 90vw, 46vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
