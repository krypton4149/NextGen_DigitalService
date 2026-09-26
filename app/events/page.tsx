import type { Metadata } from "next";
import Image from "next/image";
import { BrandCta } from "@/components/BrandCta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Event management, promotion and creative experiences by Shikohabad Creative Co. — planning, branding, social and on-ground execution in Shikohabad.",
};

const pillars = [
  {
    title: "Event planning",
    body: "Structure, flow and creative direction before the first guest arrives.",
  },
  {
    title: "Promotional creatives",
    body: "Teasers, posters and motion that make people want to be there.",
  },
  {
    title: "Event branding",
    body: "Stage, signage and visual systems that feel cohesive and premium.",
  },
  {
    title: "Social promotion",
    body: "Reels, stories and campaigns that build anticipation in the feed.",
  },
  {
    title: "On-ground execution",
    body: "Real-world presence — not just posts. We help moments land.",
  },
  {
    title: "Photo & video",
    body: "Coverage that extends the event long after the lights go down.",
  },
] as const;

export default function EventsPage() {
  return (
    <main>
      <PageHero
        label="Events & experiences"
        tone="navy"
        title={
          <>
            We don&apos;t just promote events.
            <br />
            We <span className="text-coral">stage</span> them.
          </>
        }
        body="Event management and promotion for brands that want energy people remember — and share."
        cta={{ href: "/contact", label: "Plan an event" }}
      />

      <div className="color-band" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <section className="bg-surface py-16 sm:py-24">
        <div className="site-wrap grid gap-12 lg:grid-cols-12">
          <Reveal className="group lg:col-span-7">
            <figure>
              <div className="relative min-h-[20rem] overflow-hidden bg-navy md:min-h-[26rem] lg:min-h-[32rem]">
                <Image
                  src="/images/work-events.jpg"
                  alt="Experiential event atmosphere by Shikohabad Creative Co."
                  fill
                  className="img-zoom object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
              <figcaption className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                Live production · Shikohabad Creative Co.
              </figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>What we cover</SectionLabel>
              <h2 className="display-title mt-4 text-[clamp(1.7rem,3vw,2.3rem)] text-navy">
                From teaser to final cut.
              </h2>
            </Reveal>
            <ul className="mt-8 border-t border-border">
              {pillars.map((item, index) => (
                <Reveal key={item.title} as="li" delayMs={index * 50}>
                  <article className="border-b border-border py-5 transition hover:bg-coral/5">
                    <p className="text-[0.65rem] tracking-[0.18em] text-coral">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-xl tracking-tight text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BrandCta
        label="Book the date"
        title={
          <>
            Ready to put your
            <br />
            event on the map?
          </>
        }
        body="Planning, creatives, promotion and on-ground — one studio."
        primary={{ href: "/contact", label: "Start a brief" }}
        secondary={{ href: "/work", label: "See event work" }}
        tone="navy"
      />
    </main>
  );
}
