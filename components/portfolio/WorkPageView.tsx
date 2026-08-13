import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function WorkPageView() {
  return (
    <div>
      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Selected work · 2024—2026
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Work that
              <br />
              people <span className="text-accent">notice.</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Real clients. Real creative direction — hospitality, beauty,
              fashion, products and local brands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <ul className="mx-auto max-w-6xl divide-y divide-border px-4 sm:px-6 lg:px-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <Reveal key={project.id} as="li" delayMs={index * 40}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 py-10 transition sm:py-12 lg:grid-cols-12 lg:items-center lg:gap-10"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface lg:col-span-5">
                  <Image
                    src={project.image}
                    alt={`Creative presentation for ${project.name}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="lg:col-span-7">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs tracking-[0.18em] text-accent">
                      {project.num}
                    </span>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      {project.industry}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground transition group-hover:text-accent sm:text-2xl lg:text-[1.65rem]">
                    {project.name}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                    {project.approach}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.services.slice(0, 4).map((service) => (
                      <li
                        key={service}
                        className="border border-border px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">
                    View project
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Your brand could
              <br />
              <span className="text-accent">be next.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              Have a business, launch or idea that deserves attention?
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" className="px-6 py-3 text-[0.65rem]">
                Start a project
              </Button>
              <Button
                href="/services"
                variant="secondary"
                arrow={false}
                className="px-6 py-3 text-[0.65rem]"
              >
                View services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
