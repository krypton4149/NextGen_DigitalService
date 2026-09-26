import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CORE_SERVICES } from "@/lib/services";

const pillars = [
  {
    title: "Marketing",
    body: "Strategy, social and content that keep brands discoverable.",
  },
  {
    title: "Advertising",
    body: "Creatives and campaigns built to turn attention into action.",
  },
  {
    title: "Events",
    body: "Planning, promotion and on-ground energy people remember.",
  },
] as const;

const values = [
  {
    title: "Local understanding",
    body: "We know the people, businesses and culture around Shikohabad — so the work feels relevant, not imported.",
  },
  {
    title: "Creative first",
    body: "We don't sell copy-paste packages. Every brand gets direction made for how it should look and feel.",
  },
  {
    title: "Full journey",
    body: "From idea to execution — marketing, advertising creatives, websites and live events under one studio.",
  },
  {
    title: "Real presence",
    body: "Campaigns that sell and events people show up for. Online and on-ground, same brand voice.",
  },
] as const;

const team = [
  {
    name: "Piyush Yadav",
    role: "Founder & CEO",
    image: "/images/piyush.png",
    alt: "Portrait of Piyush Yadav, Founder and CEO",
    ring: "ring-coral/70",
  },
  {
    name: "Arpan",
    role: "CTO",
    image: "/images/about-cto.png",
    alt: "Portrait of Arpan, Chief Technology Officer",
    ring: "ring-white/40",
  },
  {
    name: "Shivam Yadav",
    role: "Chief Strategy Partner",
    image: "/images/shivam-yadav.png",
    alt: "Portrait of Shivam Yadav, Chief Strategy Partner",
    ring: "ring-coral/50",
  },
] as const;

const facts = [
  { label: "Based in", value: "Shikohabad, UP" },
  { label: "Craft", value: "Marketing · Ads · Events" },
  { label: "Built for", value: "Growing brands" },
] as const;

export function AboutPageView() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="agency-orb agency-orb-a absolute -left-16 top-0 size-[22rem] opacity-80 sm:size-[28rem]" />
          <div className="agency-orb agency-orb-b absolute -right-20 bottom-0 size-[20rem] opacity-70 sm:size-[26rem]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-coral/60 to-transparent" />
        </div>

        <div className="site-wrap relative grid items-end gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-8">
            <p className="eyebrow text-coral">Studio</p>
            <h1 className="display-title mt-5 text-[clamp(2.8rem,7vw,5.2rem)]">
              A creative house for
              <span className="text-coral"> brands that move.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.7] text-white/68">
              Marketing agency. Advertising studio. Event management company —
              one team in Shikohabad for brands that need to look sharp and show
              up live.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">Work with us</Button>
              <Button href="/work" variant="secondary" arrow={false}>
                See the work
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <ul className="space-y-3 border-l border-white/15 pl-5">
              {pillars.map((pillar) => (
                <li key={pillar.title}>
                  <p className="font-display text-2xl tracking-tight text-white">
                    {pillar.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Color strip */}
      <div className="grid grid-cols-3">
        <div className="h-1.5 bg-navy" />
        <div className="h-1.5 bg-coral" />
        <div className="h-1.5 bg-soft-navy" />
      </div>

      {/* Founder */}
      <section className="border-b border-border bg-background">
        <div className="site-wrap grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <figure className="mx-auto max-w-[17rem] text-center lg:mx-0">
              <div className="relative mx-auto">
                <div
                  className="absolute -inset-3 rounded-full bg-coral/15 blur-xl"
                  aria-hidden
                />
                <div className="relative aspect-square overflow-hidden rounded-full bg-navy ring-4 ring-coral/40">
                  <Image
                    src="/images/piyush.png"
                    alt="Piyush Yadav, Founder of Shikohabad Creative Co."
                    fill
                    className="object-cover object-center"
                    sizes="280px"
                    priority
                  />
                </div>
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-xl tracking-tight text-navy">
                  Piyush Yadav
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-coral">
                  Founder & CEO
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delayMs={80} className="lg:col-span-8">
            <SectionLabel>Founder</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] text-navy">
              Building a studio for brands
              <br className="hidden sm:block" /> that deserve to be seen.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-[0.98rem] leading-[1.75] text-muted">
              <p>
                Piyush started Shikohabad Creative Co. because local businesses
                were being sold leftover templates while metro agencies kept the
                real creative work. He wanted a studio that stays close to the
                brand — and still looks premium.
              </p>
              <p>
                He leads creative direction across social, branding, websites and
                events. The brief is simple: help restaurants, beauty, retail and
                growing teams get discovered, remembered and trusted.
              </p>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Based in", value: "Shikohabad" },
                { label: "Leads", value: "Creative direction" },
                { label: "Focus", value: "Social · Brand · Web · Events" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-coral bg-coral/5 px-4 py-3"
                >
                  <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-coral">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-lg tracking-tight text-navy">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden bg-soft-navy text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="agency-orb agency-orb-a absolute right-0 top-1/2 size-[18rem] -translate-y-1/2 opacity-40 sm:size-[24rem]" />
        </div>
        <div className="site-wrap relative py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel className="text-coral">Story</SectionLabel>
              <h2 className="display-title mt-4 text-[clamp(1.9rem,3.6vw,3rem)]">
                From Shikohabad
                <br />
                to everywhere.
              </h2>
            </Reveal>
            <Reveal
              delayMs={60}
              className="space-y-4 text-[0.98rem] leading-[1.75] text-white/70 lg:col-span-7"
            >
              <p>
                Shikohabad Creative Co. started with a clear belief: local brands
                deserve creative work that feels premium — not leftover templates
                from big-city agencies.
              </p>
              <p>
                We work with restaurants, beauty brands, boutiques, product
                businesses and growing teams who want to look sharper online and
                feel stronger offline.
              </p>
              <p className="font-display text-xl tracking-tight text-coral">
                Based in Shikohabad. Creating beyond it.
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-3 sm:grid-cols-3">
            {facts.map((item, i) => (
              <Reveal key={item.label} as="li" delayMs={i * 50}>
                <div className="border border-white/12 bg-white/5 px-5 py-6 backdrop-blur-sm">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-coral">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-xl tracking-tight text-white">
                    {item.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Beliefs */}
      <section className="border-b border-border bg-background">
        <div className="site-wrap py-16 sm:py-20">
          <Reveal>
            <SectionLabel>Beliefs</SectionLabel>
            <h2 className="display-title mt-4 max-w-xl text-[clamp(1.9rem,3.6vw,2.9rem)] text-navy">
              How we work with brands.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} as="li" delayMs={index * 50}>
                <article className="group h-full border border-border bg-surface p-7 transition duration-300 hover:border-coral/45 hover:bg-white sm:p-8">
                  <p className="font-display text-4xl tracking-tight text-coral/80 transition group-hover:text-coral">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 display-title text-[1.55rem] text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Practice */}
      <section className="bg-navy text-white">
        <div className="site-wrap py-16 sm:py-20">
          <Reveal>
            <SectionLabel className="text-coral">Practice</SectionLabel>
            <h2 className="display-title mt-4 max-w-xl text-[clamp(1.9rem,3.6vw,2.9rem)]">
              Four things.
              <br />
              Done properly.
            </h2>
          </Reveal>
          <ul className="mt-10">
            {CORE_SERVICES.map((service, index) => (
              <Reveal key={service.num} as="li" delayMs={index * 40}>
                <div className="grid gap-3 border-t border-white/12 py-7 last:border-b sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-coral sm:col-span-1">
                    {service.num}
                  </span>
                  <p className="font-display text-xl tracking-tight sm:col-span-4 sm:text-2xl">
                    {service.title}
                  </p>
                  <p className="text-sm leading-relaxed text-white/60 sm:col-span-7">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/services" variant="primary">
              All services
            </Button>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          className="pointer-events-none absolute -left-10 top-20 size-48 rounded-full bg-coral/10 blur-3xl"
          aria-hidden
        />
        <div className="site-wrap py-16 sm:py-20">
          <Reveal>
            <SectionLabel>People</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] text-navy">
              The studio.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              The people shaping campaigns, creatives and experiences every day.
            </p>
          </Reveal>
          <ul className="mt-14 grid gap-10 sm:grid-cols-3">
            {team.map((person, index) => (
              <Reveal key={person.name} as="li" delayMs={index * 70}>
                <article className="mx-auto max-w-[17rem] text-center">
                  <div className="relative mx-auto w-full max-w-[15rem]">
                    <div
                      className="absolute -inset-2 rounded-full bg-coral/10 blur-md"
                      aria-hidden
                    />
                    <div
                      className={`relative aspect-square overflow-hidden rounded-full bg-navy ring-[3px] ${person.ring}`}
                    >
                      <Image
                        src={person.image}
                        alt={person.alt}
                        fill
                        className={
                          person.image.includes("piyush")
                            ? "object-cover object-center"
                            : "scale-[1.12] object-cover object-center"
                        }
                        sizes="240px"
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-tight text-navy">
                    {person.name}
                  </h3>
                  <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-coral">
                    {person.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Origin */}
      <section className="border-b border-border bg-background">
        <div className="site-wrap grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[1207/1303] w-full max-w-[18rem] sm:max-w-[22rem]">
              <div
                className="absolute -inset-4 bg-gradient-to-br from-coral/20 via-transparent to-navy/10"
                aria-hidden
              />
              <Image
                src="/images/City.png"
                alt="Shikohabad — local streets, local understanding, digital reach"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
          <Reveal delayMs={70}>
            <SectionLabel>Origin</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] text-navy">
              Based in Shikohabad.
              <br />
              <span className="text-coral">Creating beyond it.</span>
            </h2>
            <p className="mt-5 max-w-md text-[0.98rem] leading-[1.75] text-muted">
              Our roots keep the work grounded. Our creative reach helps brands
              travel further — across feeds, screens and real-world moments.
            </p>
            <Link
              href="/events"
              className="mt-8 inline-flex text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-navy transition hover:text-coral"
            >
              Explore events →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-coral text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 size-64 rounded-full bg-navy/20 blur-3xl" />
        </div>
        <div className="site-wrap relative py-16 sm:py-20">
          <Reveal>
            <h2 className="display-title text-[clamp(2rem,4vw,3.4rem)]">
              Ready to make your brand
              <br />
              impossible to ignore?
            </h2>
            <p className="mt-5 max-w-md text-white/85">
              Tell us what you&apos;re building — we&apos;ll help people notice
              it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center bg-navy px-6 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-soft-navy"
              >
                Start a brief →
              </Link>
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center border border-white/40 px-6 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-white transition hover:border-white hover:bg-white/10"
              >
                See the work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
