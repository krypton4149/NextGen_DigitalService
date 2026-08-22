import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CORE_SERVICES } from "@/lib/services";

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
    body: "From idea to execution — social, branding, websites and events under one creative studio.",
  },
  {
    title: "Real presence",
    body: "Online and on-ground. We help brands show up where attention actually happens.",
  },
] as const;

const team = [
  {
    name: "Piyush Yadav",
    role: "Founder & CEO",
    image: "/images/ceo-piyush-yadav.png",
    alt: "Portrait of Piyush Yadav, Founder and CEO",
  },
  {
    name: "Arpan",
    role: "CTO",
    image: "/images/about-cto.png",
    alt: "Portrait of Arpan, Chief Technology Officer",
  },
  {
    name: "Shivam Yadav",
    role: "Chief Strategy Partner",
    image: "/images/shivam-yadav.png",
    alt: "Portrait of Shivam Yadav, Chief Strategy Partner",
  },
] as const;

export function AboutPageView() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              About · Shikohabad Creative Co.
            </p>
            <h1 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Not just another
              <br />
              digital agency.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              We are a creative studio based in Shikohabad — helping local and
              growing businesses turn attention into connection through social
              media, branding, websites and events.
            </p>
            <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
              Local Roots. Creative Reach.
            </p>
          </Reveal>

          <Reveal delayMs={80} className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-full border border-border bg-surface lg:ml-auto lg:mr-0 lg:max-w-[20rem]">
              <Image
                src="/images/ceo-piyush-yadav.png"
                alt="Piyush Yadav, Founder of Shikohabad Creative Co."
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 288px, 320px"
                priority
              />
            </div>
            <div className="mt-4 text-center lg:ml-auto lg:max-w-[20rem] lg:text-left">
              <p className="font-display text-base font-semibold">Piyush Yadav</p>
              <p className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-accent">
                Founder & CEO
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border bg-surface px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Our story
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              From Shikohabad
              <br />
              <span className="text-accent">to everywhere.</span>
            </h2>
          </Reveal>
          <Reveal delayMs={60} className="lg:col-span-7">
            <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Shikohabad Creative Co. started with a clear belief: local
                brands deserve creative work that feels premium — not leftover
                templates from big-city agencies.
              </p>
              <p>
                We work with restaurants, beauty brands, boutiques, product
                businesses and growing teams who want to look sharper online and
                feel stronger offline. Social media management, branding,
                website creation and event management — handled as one creative
                journey.
              </p>
              <p>
                Based in Shikohabad, Uttar Pradesh. Creating beyond it.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-3 sm:grid-cols-3">
          {[
            { label: "Based in", value: "Shikohabad, UP" },
            { label: "Focus", value: "Creative + Digital" },
            { label: "Built for", value: "Local brands" },
          ].map((item, i) => (
            <Reveal key={item.label} delayMs={i * 40}>
              <div className="border border-border bg-background px-5 py-5">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we believe */}
      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              What we believe
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              How we work with brands.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} as="li" delayMs={index * 50}>
                <article className="h-full border border-border bg-surface p-6 transition hover:border-accent/40">
                  <p className="font-mono text-xs tracking-[0.18em] text-accent">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-border bg-surface px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              What we do
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Four things. Done properly.
            </h2>
          </Reveal>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {CORE_SERVICES.map((service, index) => (
              <Reveal key={service.num} as="li" delayMs={index * 40}>
                <div className="grid gap-2 py-5 sm:grid-cols-12 sm:items-center sm:gap-6">
                  <span className="font-mono text-xs tracking-[0.18em] text-accent sm:col-span-1">
                    {service.num}
                  </span>
                  <p className="font-display text-base font-semibold tracking-tight sm:col-span-4 sm:text-lg">
                    {service.title}
                  </p>
                  <p className="text-sm text-muted sm:col-span-7">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              The team
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              People behind the work.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {team.map((person, index) => (
              <Reveal key={person.name} as="li" delayMs={index * 60}>
                <article className="text-center">
                  <div className="relative mx-auto aspect-square w-full max-w-[14rem] overflow-hidden rounded-full border-[4px] border-white bg-surface shadow-[0_18px_40px_-20px_rgba(11,19,43,0.45)] sm:max-w-[15rem]">
                    <Image
                      src={person.image}
                      alt={person.alt}
                      fill
                      className="object-cover object-center"
                      sizes="240px"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {person.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Local identity */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="relative mx-auto aspect-[1207/1303] w-full max-w-[14rem] py-8 sm:max-w-[18rem] lg:py-10">
            <Image
              src="/images/City.png"
              alt="Shikohabad — local streets, local understanding, digital reach"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-14 lg:px-12">
            <Reveal>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
                Where we create from
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Based in Shikohabad.
                <br />
                Creating beyond it.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                Our roots keep the work grounded. Our creative reach helps brands
                travel further — across feeds, screens and real-world moments.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to make your brand
              <br />
              <span className="text-accent">impossible to ignore?</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              Tell us what you&apos;re building — we&apos;ll help people notice
              it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" className="px-6 py-3 text-[0.65rem]">
                Start a project
              </Button>
              <Button
                href="/work"
                variant="secondary"
                arrow={false}
                className="px-6 py-3 text-[0.65rem]"
              >
                View our work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
