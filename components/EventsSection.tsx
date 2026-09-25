import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  "Event planning",
  "Promotional creatives",
  "Event branding",
  "Social promotion",
  "On-ground execution",
  "Photo & video",
] as const;

export function EventsSection() {
  return (
    <section id="events" className="scroll-mt-24 border-b border-border bg-white py-20 lg:py-24">
      <div className="site-wrap">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <SectionLabel>Events</SectionLabel>
            <h2 className="display-title mt-5 text-[clamp(2rem,4.6vw,3.6rem)] text-navy">
              We don&apos;t just promote events.
              <span className="text-coral"> We stage them.</span>
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="lg:col-span-4">
            <p className="text-muted">
              From first teaser to final cut — energy people show up for, feel,
              and share.
            </p>
            <Link
              href="/events"
              className="mt-4 inline-flex font-semibold text-coral transition hover:translate-x-0.5"
            >
              Explore events →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-8">
            <div className="relative min-h-[18rem] overflow-hidden bg-surface sm:min-h-[26rem]">
              <Image
                src="/images/work-events.jpg"
                alt="Event atmosphere by Shikohabad Creative Co."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </Reveal>
          <Reveal delayMs={100} className="lg:col-span-4">
            <ol className="border-t border-border">
              {pillars.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-border py-4"
                >
                  <span className="text-[0.65rem] tracking-[0.16em] text-coral">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg tracking-tight text-navy">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
