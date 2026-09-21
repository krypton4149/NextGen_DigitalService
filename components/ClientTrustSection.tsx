import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export function ClientTrustSection() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="site-wrap">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="display-title mt-5 max-w-2xl text-[clamp(2rem,4.2vw,3.3rem)] text-navy">
            Brands that trusted the studio.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((client, index) => (
            <Reveal key={client.id} as="li" delayMs={Math.min(index * 50, 200)}>
              <Link
                href={`/work/${client.slug}`}
                className="group block overflow-hidden rounded-[1.4rem] border border-border bg-white transition duration-300 hover:-translate-y-1 hover:border-coral/30 hover:shadow-[0_24px_50px_-28px_rgba(11,19,43,0.35)]"
              >
                <span className="relative flex aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </span>
                <span className="flex items-center justify-between px-5 py-4">
                  <span className="font-display font-bold text-navy">{client.name}</span>
                  <span className="text-xs font-bold text-coral">{client.num}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
