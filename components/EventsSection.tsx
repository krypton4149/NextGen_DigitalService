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
    <section id="events" className="scroll-mt-24 bg-surface py-20 lg:py-24">
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

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="relative min-h-[16rem] overflow-hidden rounded-[1.6rem] sm:min-h-[22rem]">
              <Image
                src="/images/work-events.jpg"
                alt="Event atmosphere by Shikohabad Creative Co."
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </Reveal>
          <Reveal delayMs={100} className="lg:col-span-4">
            <ol className="space-y-3">
              {pillars.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3"
                >
                  <span className="text-xs font-bold text-coral">0{i + 1}</span>
                  <span className="font-display font-bold text-navy">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
