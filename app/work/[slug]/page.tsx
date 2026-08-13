import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { getProjectBySlug, PORTFOLIO_PROJECTS } from "@/lib/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.name,
    description: `${project.name} — ${project.categoryLabel}. Creative work by Shikohabad Creative Co.`,
  };
}

export default async function WorkProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main>
      <section className="border-b border-border px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/work"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted transition hover:text-accent"
          >
            ← All work
          </Link>
          <Reveal>
            <p className="mt-6 font-mono text-xs tracking-[0.18em] text-accent">
              {project.num} · Case study
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {project.name}
            </h1>
            <p className="mt-3 text-sm text-muted">{project.industry}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden border-x border-border bg-surface">
          <Image
            src={project.image}
            alt={`Creative presentation for ${project.name}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="border-b border-border px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-4">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                Client
              </p>
              <p className="mt-2 text-sm font-medium">{project.name}</p>
            </div>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                Industry
              </p>
              <p className="mt-2 text-sm">{project.industry}</p>
            </div>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                What we did
              </p>
              <ul className="mt-3 space-y-2">
                {project.services.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-foreground">
                    <span className="text-accent">✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="whitespace-pre-line font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
              {project.headline}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {project.approach}
            </p>
            <div className="mt-8">
              <Button href="/contact" className="px-6 py-3 text-[0.65rem]">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
