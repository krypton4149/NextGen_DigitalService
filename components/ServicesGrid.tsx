"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CORE_SERVICES, type CoreService } from "@/lib/services";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

function ServiceRow({
  service,
  index,
}: {
  service: CoreService;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delayMs={index * 60} as="li">
      <article
        data-cursor="hover"
        className="group relative border-b border-border"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link
          href={service.href}
          className="relative grid gap-4 py-8 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:grid-cols-12 sm:items-center sm:gap-6 sm:py-10"
        >
          <span
            aria-hidden
            className={`absolute left-0 top-0 h-px bg-accent transition-all duration-500 ${
              hovered ? "w-full opacity-100" : "w-8 opacity-40"
            }`}
          />

          <div className="sm:col-span-1">
            <span
              className={`font-mono text-xs tracking-[0.18em] transition-colors duration-300 ${
                hovered ? "text-accent" : "text-muted"
              }`}
            >
              {service.num}
            </span>
          </div>

          <div className="sm:col-span-4">
            <h3
              className={`font-display text-xl font-semibold tracking-tight transition duration-300 sm:text-2xl lg:text-[1.75rem] ${
                hovered ? "text-accent" : "text-foreground"
              }`}
            >
              {service.title}
            </h3>
          </div>

          <div className="sm:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              {service.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 sm:text-right">
            <span
              className={`inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition duration-300 ${
                hovered ? "text-accent" : "text-foreground"
              }`}
            >
              Explore
              <span
                className={`transition-transform duration-300 ${
                  hovered ? "translate-x-0.5 -translate-y-0.5" : ""
                }`}
                aria-hidden
              >
                ↗
              </span>
            </span>
          </div>

          <div
            aria-hidden
            className={`pointer-events-none absolute right-4 top-1/2 z-10 hidden w-36 -translate-y-1/2 overflow-hidden border border-border bg-surface transition-all duration-400 lg:block ${
              hovered
                ? "rotate-[-3deg] scale-100 opacity-100"
                : "rotate-[-6deg] scale-95 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={service.image}
                alt=""
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
                What we do
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                We build brands
                <br />
                people <span className="text-accent">notice.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
              Social, branding, websites and events — built to help local brands
              stand out.
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 border-t border-border">
          {CORE_SERVICES.map((service, index) => (
            <ServiceRow key={service.num} service={service} index={index} />
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-8">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
            Services / 01—04
          </p>
          <Link
            href="/services"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-foreground"
          >
            View all services →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a brand that deserves
            <br />
            <span className="text-accent">more attention?</span>
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
              View our work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
