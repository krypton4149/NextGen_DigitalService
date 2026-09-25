import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
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
      <section className="border-b border-border bg-background">
        <div className="site-wrap py-12 sm:py-16 lg:py-20">
          <Link
            href="/work"
            className="text-[0.78rem] font-medium tracking-[0.04em] uppercase text-muted transition hover:text-navy"
          >
            ← All clients
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-8">
              <p className="eyebrow">
                Case study · {project.num} /{" "}
                {String(PORTFOLIO_PROJECTS.length).padStart(2, "0")}
              </p>
              <h1 className="display-title mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4rem)] text-navy">
                {project.name}
              </h1>
              <p className="mt-4 text-sm text-muted">{project.industry}</p>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                {project.services.map((service) => (
                  <li key={service} className="eyebrow">
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={80} className="lg:col-span-4">
              <div className="mx-auto flex max-w-[14rem] flex-col items-center text-center lg:ml-auto lg:mr-0">
                <div
                  className={`relative aspect-square w-full overflow-hidden rounded-full border border-border ${logoShell(mark)}`}
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
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Client
                </dt>
                <dd className="mt-2 font-display text-lg tracking-tight text-navy">
                  {project.name}
                </dd>
              </div>
              <div>
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
                      className="border border-border bg-white px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy"
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

      <section className="border-b border-border py-12 sm:py-16">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>Presentation</SectionLabel>
            <h2 className="display-title mt-4 text-[clamp(1.5rem,2.8vw,2.2rem)] text-navy">
              How the brand shows up.
            </h2>
          </Reveal>
          <Reveal delayMs={50}>
            <div
              className={`relative mt-8 overflow-hidden ${
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
                    : "object-cover"
                }
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-wrap grid sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-4 border-b border-border py-8 sm:border-b-0 sm:border-r sm:pr-8"
            >
              <span
                className={`relative size-14 shrink-0 overflow-hidden rounded-full sm:size-16 ${logoShell(projectLogo(prev))}`}
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
                <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                  Previous
                </span>
                <span className="mt-1 block font-display text-lg tracking-tight text-navy transition group-hover:text-coral">
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
                <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                  Next · {String(index + 2).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-display text-lg tracking-tight text-navy transition group-hover:text-coral">
                  {next.name} →
                </span>
              </span>
              <span
                className={`relative size-14 shrink-0 overflow-hidden rounded-full sm:size-16 ${logoShell(projectLogo(next))}`}
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

      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>Start yours</SectionLabel>
            <h2 className="display-title mt-6 text-[clamp(2.2rem,4.5vw,3.4rem)] text-navy">
              Ready for a case study
              <br />
              with your name on it?
            </h2>
            <p className="mt-5 max-w-md text-[1rem] leading-[1.7] text-muted">
              Tell us about the brand — we&apos;ll help people notice it.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Start a brief</Button>
              <Button href="/work" variant="ghost" arrow={false}>
                Back to work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
