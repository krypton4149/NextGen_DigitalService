import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Button } from "./Button";
import {
  PORTFOLIO_PROJECTS,
  isLogoMark,
  logoFitClass,
  projectLogo,
} from "@/lib/portfolio";

const HOME_CLIENT_COUNT = 4;

function logoShell(image: string) {
  if (image.includes("eventz") || image.includes("airsupra.png")) return "bg-navy";
  return "bg-white";
}

export function ClientTrustSection() {
  const featured = PORTFOLIO_PROJECTS.slice(0, HOME_CLIENT_COUNT);
  const remaining = PORTFOLIO_PROJECTS.length - featured.length;

  return (
    <section className="border-b border-border">
      <div className="site-wrap py-24 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="display-title mt-6 text-[clamp(2.4rem,4.5vw,3.8rem)] text-navy">
                Brands we move.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-[1.7] text-muted sm:text-right">
              Marketing, advertising and events — for clients who want results that show.
            </p>
          </div>
        </Reveal>

        <ul className="mt-16 grid grid-cols-2 sm:grid-cols-4">
          {featured.map((client, index) => {
            const mark = projectLogo(client);
            const framed = isLogoMark(mark);
            return (
              <Reveal
                key={client.id}
                as="li"
                delayMs={Math.min(index * 40, 160)}
              >
                <Link
                  href={`/work/${client.slug}`}
                  className="group flex h-full flex-col items-center border border-border bg-background px-4 py-10 text-center transition hover:bg-surface sm:px-5 sm:py-12"
                >
                  <span
                    className={`relative flex size-[5.5rem] items-center justify-center overflow-hidden rounded-full sm:size-[6.25rem] ${logoShell(mark)}`}
                  >
                    <Image
                      src={mark}
                      alt=""
                      fill
                      unoptimized={framed}
                      className={
                        framed
                          ? logoFitClass(mark, { hover: true })
                          : "object-cover transition duration-500 group-hover:scale-105"
                      }
                      sizes="100px"
                      aria-hidden
                    />
                  </span>
                  <span className="eyebrow mt-6">{client.industry}</span>
                  <span className="mt-3 font-display text-xl tracking-tight text-navy transition group-hover:text-coral">
                    {client.name}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delayMs={60}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-10 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              {remaining > 0
                ? `${remaining} more on the work page.`
                : "Full stories on the work page."}
            </p>
            <Button href="/work" variant="outline">
              View more
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
