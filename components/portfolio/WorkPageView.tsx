import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, isFramedProject } from "@/lib/portfolio";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function WorkPageView() {
  return (
    <div>
      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Selected work · 2024—2026
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[0.9] tracking-tight sm:text-6xl">
              Work that
              <br />
              people <span className="text-accent">notice.</span>
            </h1>
            <p className="mt-5 max-w-lg font-display text-lg leading-snug text-muted">
              Real clients. Real creative direction — hospitality, beauty,
              fashion, products and local brands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 40}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                    isFramedProject(project) ? "border border-border bg-white" : "bg-surface"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`Creative presentation for ${project.name}`}
                    fill
                    unoptimized={isFramedProject(project)}
                    className={`${isFramedProject(project) ? "object-contain p-2" : "object-cover"} transition duration-500 group-hover:scale-[1.04]`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {isFramedProject(project) ? null : (
                    <div className="absolute inset-0 bg-primary/0 transition duration-300 group-hover:bg-primary/25" />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 font-display text-xs font-bold text-primary">
                    {project.num}
                  </span>
                  <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-primary opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View case ↗
                  </span>
                </div>
                <p className="mt-4 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.industry}
                </p>
                <h2 className="mt-1.5 font-display text-lg font-bold tracking-tight transition group-hover:text-accent sm:text-xl">
                  {project.name}
                </h2>
                <p className="mt-1.5 line-clamp-1 text-sm text-muted">
                  {project.services.slice(0, 3).join(" · ")}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Your brand could
              <br />
              <span className="text-accent">be next.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              Have a business, launch or idea that deserves attention?
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" className="px-6 py-3 text-[0.65rem]">
                Start a project
              </Button>
              <Button
                href="/services"
                variant="secondary"
                arrow={false}
                className="px-6 py-3 text-[0.65rem]"
              >
                View services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
