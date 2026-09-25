"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  isLogoMark,
  logoFitClass,
  projectLogo,
  type PortfolioFilter,
  type PortfolioProject,
} from "@/lib/portfolio";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 4;

function logoTone(src: string) {
  if (src.includes("eventz") || src.includes("airsupra.png")) return "dark";
  if (isLogoMark(src)) return "light";
  return "photo";
}

function ClientVisual({
  project,
  className = "",
}: {
  project: PortfolioProject;
  className?: string;
}) {
  const tone = logoTone(project.image);
  return (
    <div
      className={`relative overflow-hidden ${
        tone === "dark"
          ? "bg-navy"
          : tone === "light"
            ? "bg-white"
            : "bg-surface"
      } ${className}`}
    >
      <Image
        src={project.image}
        alt=""
        fill
        unoptimized={isLogoMark(project.image)}
        className={
          tone === "photo"
            ? "object-cover transition duration-700 group-hover:scale-[1.04]"
            : "object-contain p-6 transition duration-700 group-hover:scale-[1.05] sm:p-8"
        }
        sizes="(max-width: 1024px) 100vw, 42vw"
        aria-hidden
      />
    </div>
  );
}

function BrandMark({ project }: { project: PortfolioProject }) {
  const mark = projectLogo(project);
  return (
    <span
      className={`relative size-[5.5rem] shrink-0 overflow-hidden rounded-full border border-border sm:size-[6.5rem] ${
        mark.includes("eventz") || mark.includes("airsupra.png")
          ? "bg-navy"
          : "bg-white"
      }`}
    >
      <Image
        src={mark}
        alt=""
        fill
        unoptimized={isLogoMark(mark)}
        className={isLogoMark(mark) ? logoFitClass(mark) : "object-cover"}
        sizes="104px"
        aria-hidden
      />
    </span>
  );
}

export function WorkPageView() {
  const [filter, setFilter] = useState<PortfolioFilter>("ALL");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered = useMemo(() => {
    if (filter === "ALL") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.filters.includes(filter));
  }, [filter]);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [filter]);

  const projects = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleCount;
  const canShowMore = remaining > 0;

  return (
    <div>
      <PageHero
        label={`Selected work · ${PORTFOLIO_PROJECTS.length} brands`}
        title={
          <>
            Clients we
            <br />
            helped get noticed.
          </>
        }
        body="Hospitality, beauty, fashion, products, consultancy and events — real brands, real creative direction from Shikohabad."
      />

      <section className="border-b border-border bg-surface py-10 sm:py-12">
        <div className="site-wrap">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionLabel>Client roster</SectionLabel>
                <p className="mt-3 max-w-lg font-display text-xl tracking-tight text-navy sm:text-2xl">
                  A few featured brands — open more whenever you want the full
                  roster.
                </p>
              </div>
              <p className="text-sm text-muted lg:max-w-xs lg:text-right">
                Showing {Math.min(visibleCount, filtered.length)} of{" "}
                {filtered.length}
                {filter === "ALL" ? " clients" : ` in ${filter.toLowerCase()}`}.
              </p>
            </div>
          </Reveal>

          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Filter work by type"
          >
            {PORTFOLIO_FILTERS.map((item) => {
              const active = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item)}
                  className={`shrink-0 border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-white text-muted hover:border-navy/40 hover:text-navy"
                  }`}
                >
                  {item === "ALL" ? "All clients" : item}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <ul>
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal
                key={project.id}
                as="li"
                delayMs={Math.min(index * 40, 160)}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid border-b border-border last:border-b-0 lg:grid-cols-12"
                >
                  <div
                    className={`relative min-h-[16rem] lg:col-span-5 lg:min-h-[22rem] ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <ClientVisual
                      project={project}
                      className="absolute inset-0"
                    />
                    <span className="absolute left-5 top-5 font-display text-sm tracking-[0.2em] text-coral sm:left-6 sm:top-6">
                      {project.num}
                    </span>
                  </div>

                  <div
                    className={`flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:col-span-7 lg:px-12 xl:px-16 ${
                      reverse ? "lg:order-1 bg-surface" : "bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <BrandMark project={project} />
                      <div className="min-w-0">
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-coral">
                          {project.industry}
                        </p>
                        <h2 className="display-title mt-2 text-[clamp(1.5rem,2.8vw,2.4rem)] text-navy transition group-hover:text-coral">
                          {project.name}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      {project.approach}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                      {project.services.map((service) => (
                        <li
                          key={service}
                          className="text-[0.65rem] uppercase tracking-[0.16em] text-navy/55"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.78rem] font-semibold text-navy transition group-hover:text-coral">
                      View case
                      <span
                        aria-hidden
                        className="transition group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        {projects.length === 0 ? (
          <div className="site-wrap py-20 text-center">
            <p className="font-display text-xl text-navy">
              No clients in this filter.
            </p>
            <button
              type="button"
              onClick={() => setFilter("ALL")}
              className="mt-4 text-sm font-semibold text-coral underline-offset-4 hover:underline"
            >
              Show all clients
            </button>
          </div>
        ) : null}

        {filtered.length > INITIAL_COUNT ? (
          <div className="site-wrap flex flex-col items-center gap-3 py-10 sm:py-12">
            {canShowMore ? (
              <>
                <p className="text-sm text-muted">
                  {remaining} more client{remaining === 1 ? "" : "s"} in this
                  list
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((count) =>
                      Math.min(count + LOAD_MORE_COUNT, filtered.length),
                    )
                  }
                  className="min-h-12 border border-navy bg-navy px-8 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-coral hover:border-coral"
                >
                  View more
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setVisibleCount(INITIAL_COUNT)}
                className="min-h-12 border border-border bg-white px-8 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-coral hover:text-coral"
              >
                Show less
              </button>
            )}
          </div>
        ) : null}
      </section>

      <section className="border-t border-border bg-surface py-20 sm:py-24">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>Next</SectionLabel>
            <h2 className="display-title mt-6 text-[clamp(2.4rem,5vw,3.8rem)] text-navy">
              Your brand could
              <br />
              be next.
            </h2>
            <p className="mt-5 max-w-md text-[1rem] leading-[1.7] text-muted">
              Have a business, launch or idea that deserves a quieter kind of
              attention?
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Start a brief</Button>
              <Button href="/services" variant="ghost" arrow={false}>
                View services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
