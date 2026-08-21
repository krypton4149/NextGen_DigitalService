"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { isFramedProject, type PortfolioProject } from "@/lib/portfolio";
import { Button } from "@/components/Button";

type CaseStudyOverlayProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

export function CaseStudyOverlay({ project, onClose }: CaseStudyOverlayProps) {
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const framed = isFramedProject(project);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        aria-label="Close case study"
        onClick={onClose}
      />
      <div className="relative z-[1] flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border bg-surface sm:max-h-[90vh]">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-8 sm:py-5">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Case study · {project.num}
            </p>
            <h2
              id="case-study-title"
              className="mt-2 font-display text-xl font-bold tracking-tight sm:text-3xl"
            >
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center border border-border text-foreground transition hover:border-accent hover:text-accent"
            aria-label="Close"
          >
            <X className="size-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div
            className={`relative m-4 aspect-[16/9] sm:m-6 ${framed ? "bg-surface" : "img-frame"}`}
          >
            <Image
              src={project.image}
              alt={`Creative presentation for ${project.name}`}
              fill
              className={framed ? "object-contain p-4" : "object-cover"}
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
            {framed ? null : (
              <>
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
                <p className="img-stamp">{project.name}</p>
              </>
            )}
          </div>

          <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  Client
                </p>
                <p className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {project.name}
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  Industry
                </p>
                <p className="mt-2 text-sm text-foreground">{project.industry}</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  What we did
                </p>
                <ul className="mt-3 space-y-2">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="text-accent" aria-hidden>
                        ✦
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                The approach
              </p>
              <p className="mt-4 whitespace-pre-line font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                {project.headline}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                {project.approach}
              </p>

              <div className="mt-10">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  The work
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.services.map((service) => (
                    <li
                      key={`work-${service}`}
                      className="border border-border bg-background px-5 py-6"
                    >
                      <p className="font-display text-lg font-semibold tracking-tight">
                        {service}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
                        Creative deliverable
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">
                  Visual gallery expands as client assets are added to the
                  studio archive.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-8">
                <Button href="/contact">Start a project</Button>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-accent hover:text-accent"
                  onClick={onClose}
                >
                  Open full page
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
