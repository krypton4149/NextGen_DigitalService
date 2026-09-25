import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Button } from "./Button";

export function AboutTeaserSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border">
      <div className="site-wrap grid items-center gap-14 py-24 lg:grid-cols-12 lg:gap-20 lg:py-28">
        <Reveal className="lg:col-span-6">
          <SectionLabel>Studio</SectionLabel>
          <h2 className="display-title mt-6 text-[clamp(2.4rem,4.5vw,3.8rem)] text-navy">
            Local roots.
            <br />
            Full creative reach.
          </h2>
          <p className="mt-7 max-w-md text-[1.05rem] leading-[1.75] text-muted">
            Based in Shikohabad — a marketing and advertising agency that also
            runs events. One team for restaurants, beauty, retail and growing
            brands that need to look sharp and show up live.
          </p>
          <div className="mt-10">
            <Button href="/about" variant="outline">
              Our story
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="lg:col-span-6">
          <div className="relative aspect-[5/4] bg-surface">
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
