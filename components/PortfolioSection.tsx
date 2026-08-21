"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  isFramedProject,
  type PortfolioFilter,
  type PortfolioProject,
} from "@/lib/portfolio";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CaseStudyOverlay } from "@/components/portfolio/CaseStudyOverlay";

function ProjectCard({
  project,
  onOpen,
}: {
  project: PortfolioProject;
  onOpen: (project: PortfolioProject) => void;
}) {
  const framed = isFramedProject(project);

  return (
    <button
      type="button"
      data-cursor="hover"
      onClick={() => onOpen(project)}
      className="group flex h-full w-full flex-col text-left outline-none"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
          framed ? "border border-border bg-white" : "bg-surface"
        }`}
      >
        <Image
          src={project.image}
          alt={`Creative presentation for ${project.name}`}
          fill
          unoptimized={framed}
          className={`${framed ? "object-contain p-2" : "object-cover"} transition duration-500 group-hover:scale-[1.04]`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {framed ? null : (
          <div className="absolute inset-0 bg-primary/0 transition duration-300 group-hover:bg-primary/25" />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 font-display text-xs font-bold text-primary">
          {project.num}
        </span>
        <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-primary opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View case ↗
        </span>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {project.industry}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight transition group-hover:text-accent sm:text-xl">
          {project.name}
        </h3>
        <p className="mt-1.5 line-clamp-1 text-sm text-muted">
          {project.services.slice(0, 3).join(" · ")}
        </p>
      </div>
    </button>
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
    <section id="work" className="scroll-mt-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
                Selected work · 2024—2026
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Work that
                <br />
                people <span className="text-accent">notice.</span>
              </h2>
            </div>
            <p className="max-w-xs font-display text-lg leading-snug text-muted sm:text-right">
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
                className={`shrink-0 rounded-full border px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition ${
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

        <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delayMs={Math.min(index * 50, 180)}>
              <ProjectCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>

        {projects.length === 0 ? (
          <p className="py-10 text-sm text-muted">
            No projects in this category yet — try another filter.
          </p>
        ) : null}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border py-8">
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

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <h3 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Your brand could
            <br />
            <span className="text-accent">be next.</span>
          </h3>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" className="px-6 py-3 text-[0.65rem]">
              Start a project
            </Button>
            <Button href="/work" variant="secondary" arrow={false} className="px-6 py-3 text-[0.65rem]">
              View all work
            </Button>
          </div>
        </Reveal>
      </div>

      <CaseStudyOverlay project={active} onClose={() => setActive(null)} />
    </section>
  );
}
