import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

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
        title={
          <>
            We don&apos;t just promote events.
            <br />
            We stage them.
          </>
        }
        body="Event management and promotion for brands that want energy people remember — and share."
        cta={{ href: "/contact", label: "Plan an event" }}
      />

      <section className="py-16 sm:py-24">
        <div className="site-wrap grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure>
              <div className="relative min-h-[20rem] overflow-hidden bg-surface md:min-h-[26rem] lg:min-h-[32rem]">
                <Image
                  src="/images/work-events.jpg"
                  alt="Experiential event atmosphere by Shikohabad Creative Co."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                Fig. 03 — Live production
              </figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-5">
            <ul className="border-t border-border">
              {pillars.map((item, index) => (
                <Reveal key={item.title} as="li" delayMs={index * 50}>
                  <article className="border-b border-border py-6">
                    <p className="text-[0.65rem] tracking-[0.18em] text-coral">
                      0{index + 1}
                    </p>
                    <h2 className="mt-2 font-display text-xl tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-24">
        <div className="site-wrap">
          <Reveal>
            <h2 className="display-title text-[clamp(2rem,5vw,3.8rem)]">
              Ready to put your
              <br />
              event on the map?
            </h2>
            <div className="mt-8">
              <Button href="/contact" className="bg-coral hover:bg-accent-dim">
                Start a brief
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
