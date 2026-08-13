import { Reveal } from "./Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import Link from "next/link";

export function ClientTrustSection() {
  return (
    <section className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Trusted by local brands
          </h2>
        </Reveal>
        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-y border-border py-8 sm:gap-x-12">
          {PORTFOLIO_PROJECTS.map((client, index) => (
            <Reveal key={client.id} as="li" delayMs={index * 40}>
              <Link
                href={`/work/${client.slug}`}
                className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted transition hover:text-accent sm:text-base"
              >
                {client.name}
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
