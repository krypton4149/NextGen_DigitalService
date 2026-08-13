"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  type PortfolioFilter,
  type PortfolioProject,
} from "@/lib/portfolio";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CaseStudyOverlay } from "@/components/portfolio/CaseStudyOverlay";

function ProjectRow({
  project,
  onOpen,
}: {
  project: PortfolioProject;
  onOpen: (project: PortfolioProject) => void;
}) {
  return (
    <article className="group border-b border-border">
      <button
        type="button"
        data-cursor="hover"
        onClick={() => onOpen(project)}
        className="grid w-full gap-5 py-8 text-left transition sm:grid-cols-12 sm:items-center sm:gap-6 sm:py-9"
      >
        <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface sm:col-span-4 sm:aspect-[4/3]">
          <Image
            src={project.image}
            alt={`Creative presentation for ${project.name}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
        <div className="sm:col-span-7">
          <p className="font-mono text-xs tracking-[0.18em] text-accent">
            {project.num}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold tracking-tight transition group-hover:text-accent sm:text-xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.industry}
          </p>
          <p className="mt-3 line-clamp-2 max-w-lg text-sm text-muted/90">
            {project.approach}
          </p>
        </div>
        <div className="hidden sm:col-span-1 sm:flex sm:justify-end">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent transition group-hover:translate-x-0.5">
            ↗
          </span>
        </div>
      </button>
    </article>
  );
}

export function PortfolioSection() {
  const [filter, setFilter] = useState<PortfolioFilter>("ALL");
  const [active, setActive] = useState<PortfolioProject | null>(null);

  const projects = useMemo(() => {
    if (filter === "ALL") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.filters.includes(filter));
  }, [filter]);

  return (
    <section
      id="work"
      className="scroll-mt-24 border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
                Selected work · 2024—2026
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Work that
                <br />
                people <span className="text-accent">notice.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
              Hospitality, beauty, fashion, products and local brands.
            </p>
          </div>
        </Reveal>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Portfolio filters"
        >
          {PORTFOLIO_FILTERS.map((item) => {
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(item)}
                className={`shrink-0 border px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${
                  selected
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <ul className="mt-6 border-t border-border">
          {projects.map((project, index) => (
            <Reveal key={project.id} as="li" delayMs={Math.min(index * 40, 160)}>
              <ProjectRow project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </ul>

        {projects.length === 0 ? (
          <p className="py-10 text-sm text-muted">
            No projects in this category yet — try another filter.
          </p>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-8">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
            Trusted by local brands
          </p>
          <Link
            href="/work"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-foreground"
          >
            Browse all work →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Your brand could
            <br />
            <span className="text-accent">be next.</span>
          </h3>
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
              View all work
            </Button>
          </div>
        </Reveal>
      </div>

      <CaseStudyOverlay project={active} onClose={() => setActive(null)} />
    </section>
  );
}
