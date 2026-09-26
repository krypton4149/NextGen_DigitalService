import Image from "next/image";
import Link from "next/link";
import { BrandCta } from "@/components/BrandCta";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import {
  isFramedProject,
  isLogoMark,
  logoFitClass,
  PORTFOLIO_PROJECTS,
  projectLogo,
  type PortfolioProject,
} from "@/lib/portfolio";

function logoShell(image: string) {
  if (image.includes("eventz") || image.includes("airsupra.png")) return "bg-navy";
  return "bg-white";
}

function neighbors(slug: string) {
  const index = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? PORTFOLIO_PROJECTS[index - 1] : null;
  const next =
    index >= 0 && index < PORTFOLIO_PROJECTS.length - 1
      ? PORTFOLIO_PROJECTS[index + 1]
      : null;
  return { prev, next, index };
}

export function WorkCaseStudyView({ project }: { project: PortfolioProject }) {
  const framed = isFramedProject(project);
  const mark = projectLogo(project);
  const markFramed = isLogoMark(mark);
  const { prev, next, index } = neighbors(project.slug);
  const headlineLines = project.headline.split("\n");

  return (
    <div>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="agency-orb agency-orb-a absolute -left-16 top-0 size-[20rem] opacity-50" />
          <div className="agency-orb agency-orb-b absolute -right-12 bottom-0 size-[18rem] opacity-40" />
        </div>
        <div className="site-wrap relative py-12 sm:py-16 lg:py-20">
          <Link
            href="/work"
            className="text-[0.78rem] font-medium uppercase tracking-[0.04em] text-white/55 transition hover:text-coral"
          >
            ← All clients
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-8">
              <p className="eyebrow text-coral">
                Case study · {project.num} /{" "}
                {String(PORTFOLIO_PROJECTS.length).padStart(2, "0")}
              </p>
              <h1 className="display-title mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4rem)]">
                {project.name}
              </h1>
              <p className="mt-4 text-sm text-white/55">{project.industry}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="border border-white/20 bg-white/5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/80"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={80} className="lg:col-span-4">
              <div className="mx-auto flex max-w-[14rem] flex-col items-center text-center lg:ml-auto lg:mr-0">
                <div
                  className={`relative aspect-square w-full overflow-hidden rounded-full ring-4 ring-coral/40 ${logoShell(mark)}`}
                >
                  <Image
                    src={mark}
                    alt={`${project.name} logo`}
                    fill
                    unoptimized={markFramed}
                    className={markFramed ? logoFitClass(mark) : "object-cover"}
                    sizes="224px"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="color-band" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <section className="border-b border-border bg-surface py-12 sm:py-16">
        <div className="site-wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel>The brief</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.6rem,3vw,2.4rem)] text-navy">
              {headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delayMs={60} className="lg:col-span-7">
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {project.approach}
            </p>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-coral bg-white px-4 py-3">
                <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-coral">
                  Client
                </dt>
                <dd className="mt-2 font-display text-lg tracking-tight text-navy">
                  {project.name}
                </dd>
              </div>
              <div className="border-l-2 border-navy/30 bg-white px-4 py-3">
                <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Industry
                </dt>
                <dd className="mt-2 font-display text-lg tracking-tight text-navy">
                  {project.industry}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  What we did
                </dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="border border-coral/30 bg-coral-soft px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy"
                    >
                      {service}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-12 sm:py-16">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>Presentation</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.5rem,2.8vw,2.2rem)] text-navy">
              How the brand shows up.
            </h2>
          </Reveal>
          <Reveal delayMs={50}>
            <div
              className={`group relative mt-8 overflow-hidden ${
                framed
                  ? "aspect-[16/10] border border-border bg-white sm:aspect-[21/9]"
                  : "aspect-[16/9] bg-surface sm:aspect-[21/9]"
              }`}
            >
              <Image
                src={project.image}
                alt={`Creative presentation for ${project.name}`}
                fill
                unoptimized={framed}
                className={
                  framed
                    ? "object-contain p-8 sm:p-12 lg:p-16"
                    : "img-zoom object-cover"
                }
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-soft-navy text-white">
        <div className="site-wrap grid sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-4 border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:pr-8"
            >
              <span
                className={`relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-coral/30 sm:size-16 ${logoShell(projectLogo(prev))}`}
              >
                <Image
                  src={projectLogo(prev)}
                  alt=""
                  fill
                  unoptimized={isLogoMark(projectLogo(prev))}
                  className={
                    isLogoMark(projectLogo(prev))
                      ? logoFitClass(projectLogo(prev))
                      : "object-cover"
                  }
                  sizes="64px"
                  aria-hidden
                />
              </span>
              <span>
                <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-white/45">
                  Previous
                </span>
                <span className="mt-1 block font-display text-lg tracking-tight text-white transition group-hover:text-coral">
                  ← {prev.name}
                </span>
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-end gap-4 py-8 text-right sm:pl-8"
            >
              <span>
                <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-white/45">
                  Next · {String(index + 2).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-display text-lg tracking-tight text-white transition group-hover:text-coral">
                  {next.name} →
                </span>
              </span>
              <span
                className={`relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-coral/30 sm:size-16 ${logoShell(projectLogo(next))}`}
              >
                <Image
                  src={projectLogo(next)}
                  alt=""
                  fill
                  unoptimized={isLogoMark(projectLogo(next))}
                  className={
                    isLogoMark(projectLogo(next))
                      ? logoFitClass(projectLogo(next))
                      : "object-cover"
                  }
                  sizes="64px"
                  aria-hidden
                />
              </span>
            </Link>
          ) : null}
        </div>
      </section>

      <BrandCta
        label="Start yours"
        title={
          <>
            Ready for a case study
            <br />
            with your name on it?
          </>
        }
        body="Tell us about the brand — we'll help people notice it."
        primary={{ href: "/contact", label: "Start a brief" }}
        secondary={{ href: "/work", label: "Back to work" }}
        tone="coral"
      />
    </div>
  );
}
