import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
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
      <PageHero
        label="Studio · About"
        title={
          <>
            Marketing.
            <br />
            Advertising.
            <br />
            Events.
          </>
        }
        body="Shikohabad Creative Co. is a marketing and advertising agency that also manages events — one studio for brands that need to look sharp online and feel alive on the ground."
        cta={{ href: "/contact", label: "Work with us" }}
      />

      <section className="py-16 sm:py-20">
        <div className="site-wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <figure className="mx-auto max-w-[16rem] text-center lg:mx-0">
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-navy">
                <Image
                  src="/images/ceo-piyush-yadav.png"
                  alt="Piyush Yadav, Founder of Shikohabad Creative Co."
                  fill
                  className="scale-[1.18] object-cover object-center"
                  sizes="256px"
                  priority
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-lg tracking-tight">Piyush Yadav</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-coral">
                  Founder & CEO
                </p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delayMs={80} className="lg:col-span-8">
            <SectionLabel>Founder</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.8rem,3.4vw,2.7rem)] text-navy">
              Building a studio for brands
              <br className="hidden sm:block" /> that deserve to be seen.
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Piyush started Shikohabad Creative Co. because local businesses
                were being sold leftover templates while metro agencies kept the
                real creative work. He wanted a studio that stays close to the
                brand — and still looks premium.
              </p>
              <p>
                He leads creative direction and client work across social,
                branding, websites and events. The brief is simple: help
                restaurants, beauty, retail and growing teams get discovered,
                remembered and trusted — from Shikohabad to wherever the work
                needs to travel.
              </p>
            </div>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Based in", value: "Shikohabad" },
                { label: "Leads", value: "Creative direction" },
                { label: "Focus", value: "Social · Brand · Web · Events" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
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

      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="site-wrap grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Story</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy">
              From Shikohabad
              <br />
              to everywhere.
            </h2>
          </Reveal>
          <Reveal delayMs={60} className="space-y-4 text-sm leading-relaxed text-muted lg:col-span-7 sm:text-base">
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
            <p>Based in Shikohabad, Uttar Pradesh. Creating beyond it.</p>
          </Reveal>
        </div>

        <div className="site-wrap mt-12 grid gap-px bg-border sm:grid-cols-3">
          {[
            { label: "Based in", value: "Shikohabad, UP" },
            { label: "Focus", value: "Creative + Digital" },
            { label: "Built for", value: "Local brands" },
          ].map((item, i) => (
            <Reveal key={item.label} delayMs={i * 40}>
              <div className="bg-background px-5 py-6">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-xl tracking-tight">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>Beliefs</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy">
              How we work with brands.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} as="li" delayMs={index * 50}>
                <article className="h-full bg-background p-7">
                  <p className="text-[0.68rem] tracking-[0.2em] text-coral">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-xl tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>Practice</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy">
              Four things. Done properly.
            </h2>
          </Reveal>
          <ul className="mt-8 border-t border-border">
            {CORE_SERVICES.map((service, index) => (
              <Reveal key={service.num} as="li" delayMs={index * 40}>
                <div className="grid gap-2 border-b border-border py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <span className="text-[0.68rem] tracking-[0.18em] text-coral sm:col-span-1">
                    {service.num}
                  </span>
                  <p className="font-display text-lg tracking-tight sm:col-span-4">
                    {service.title}
                  </p>
                  <p className="text-sm text-muted sm:col-span-7">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>People</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy">
              The studio.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-10 sm:grid-cols-3">
            {team.map((person, index) => (
              <Reveal key={person.name} as="li" delayMs={index * 60}>
                <article className="mx-auto max-w-[16rem] text-center">
                  <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-navy">
                    <Image
                      src={person.image}
                      alt={person.alt}
                      fill
                      className="scale-[1.18] object-cover object-center"
                      sizes="256px"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-tight">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-coral">
                    {person.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-wrap grid items-center gap-10 py-16 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[1207/1303] w-full max-w-[16rem] sm:max-w-[20rem]">
            <Image
              src="/images/City.png"
              alt="Shikohabad — local streets, local understanding, digital reach"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <Reveal>
            <SectionLabel>Origin</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy">
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
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-wrap">
          <Reveal>
            <h2 className="display-title text-[clamp(1.8rem,3.5vw,3rem)] text-navy">
              Ready to make your brand
              <br />
              impossible to ignore?
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              Tell us what you&apos;re building — we&apos;ll help people notice it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Start a brief</Button>
              <Button href="/work" variant="outline" arrow={false}>
                See the work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
