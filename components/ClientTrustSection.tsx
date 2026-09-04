import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export function ClientTrustSection() {
  return (
    <section className="partners-strips border-b border-border bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-coral" aria-hidden />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Our Partners
            </span>
          </p>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-navy">
            Collaborations With
            <br />
            <span className="text-accent">Leading Brands</span>
          </h2>
          <span className="mx-auto mt-5 block h-1 w-14 bg-navy" aria-hidden />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Get to know the brands that trust Shikohabad Creative Co. We build
            long-term relationships through work people notice.
          </p>
        </Reveal>
      </div>

      <p className="sr-only">
        {PORTFOLIO_PROJECTS.map((client) => client.name).join(", ")}
      </p>

      <div className="mt-12 overflow-hidden">
        <div className="flex w-max marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex items-center gap-6 px-3 sm:gap-8"
              aria-hidden={copy === 1}
            >
              {[...PORTFOLIO_PROJECTS].reverse().map((client) => (
                <li key={`${copy}-${client.id}`} className="w-[12.5rem] shrink-0 sm:w-[15rem]">
                  <Link
                    href={`/work/${client.slug}`}
                    className="group block outline-none"
                  >
                    <span className="relative flex aspect-[16/10] w-full overflow-hidden rounded-xl">
                      <Image
                        src={client.image}
                        alt={copy === 0 ? client.name : ""}
                        fill
                        className="object-contain transition duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 200px, 240px"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
