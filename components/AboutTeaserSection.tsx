import Image from "next/image";
import { Reveal } from "./Reveal";

export function AboutTeaserSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-12 md:gap-10 md:px-8 lg:gap-16 lg:py-24">
        <Reveal className="md:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-coral" aria-hidden />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Our Story
            </span>
          </p>

          <h2 className="mt-6 max-w-xl font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-navy">
            Meet Shikohabad&apos;s First
            <br />
            <span className="text-accent">Creative Market Agency</span>
          </h2>

          <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted sm:text-[0.78rem]">
            Defining how brands build digital priority
          </p>

          <span className="mt-5 block h-1 w-14 bg-coral" aria-hidden />

          <div className="mt-8 max-w-xl space-y-5 text-[0.95rem] leading-[1.75] text-muted sm:text-base">
            <p>
              Shikohabad Creative Co. is a modern studio where creativity meets
              strategy with clarity. Working with restaurants, beauty brands,
              events, retail and local businesses, one thing became clear —
              brands do not fail because of competition. They fail when their
              digital presence lacks direction, consistency and trust.
            </p>
            <p>
              Over 5+ years of work with 150+ businesses, we have built a
              structured way to help brands get discovered, remembered and
              trusted — through social media, branding, websites and events,
              from Shikohabad to everywhere the work needs to travel.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={90} className="md:col-span-6">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/images/team.png"
              alt="Shikohabad Creative Co. team — strategy, branding, social, websites and events"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 90vw, 48vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
