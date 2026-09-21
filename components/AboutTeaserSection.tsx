import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Button } from "./Button";

export function AboutTeaserSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="site-wrap grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <Reveal className="lg:col-span-6">
          <SectionLabel>The studio</SectionLabel>
          <h2 className="display-title mt-5 text-[clamp(2rem,4.4vw,3.4rem)] text-navy">
            Shikohabad&apos;s creative
            <span className="text-coral"> market agency.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted">
            Brands fail when their presence lacks direction, consistency and
            trust. We build that presence — for restaurants, beauty, retail,
            events and growing local businesses.
          </p>
          <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-muted">
            Over 5+ years with 150+ businesses, we help brands get discovered,
            remembered and trusted — from Shikohabad to everywhere the work
            needs to travel.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Our story
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={90} className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-surface p-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/team.png"
                alt="Shikohabad Creative Co. team"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 90vw, 46vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
