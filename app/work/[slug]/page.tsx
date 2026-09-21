import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { getProjectBySlug, isFramedProject, PORTFOLIO_PROJECTS } from "@/lib/portfolio";

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
      <section className="relative overflow-hidden bg-navy py-8 text-white sm:py-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="agency-orb agency-orb-a absolute -left-8 top-0 size-32" />
        </div>
        <div className="site-wrap relative">
          <Link
            href="/work"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← All work
          </Link>
          <Reveal>
            <p className="mt-4 text-[0.68rem] tracking-[0.2em] text-coral">
              {project.num} · Case study
            </p>
            <h1 className="display-title mt-2 max-w-3xl text-[clamp(1.7rem,3.6vw,2.6rem)]">
              {project.name}
            </h1>
            <p className="mt-2 text-sm text-white/65">{project.industry}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-10">
        <div className="site-wrap">
          <div
            className={`relative aspect-[16/9] overflow-hidden rounded-[1.4rem] ${isFramedProject(project) ? "border border-border bg-white" : "bg-surface"}`}
          >
            <Image
              src={project.image}
              alt={`Creative presentation for ${project.name}`}
              fill
              unoptimized={isFramedProject(project)}
              className={isFramedProject(project) ? "object-contain p-6" : "object-cover"}
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="site-wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 border-t border-border pt-6 lg:col-span-4">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">Client</p>
              <p className="mt-2 text-sm">{project.name}</p>
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">Industry</p>
              <p className="mt-2 text-sm">{project.industry}</p>
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">What we did</p>
              <ul className="mt-3 space-y-2">
                {project.services.map((s) => (
                  <li key={s} className="flex gap-2 text-sm">
                    <span className="text-coral">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
              {project.headline}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {project.approach}
            </p>
            <div className="mt-8">
              <Button href="/contact">Start a brief</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
