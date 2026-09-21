import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, isFramedProject } from "@/lib/portfolio";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";

export function WorkPageView() {
  return (
    <div>
      <PageHero
        label="Selected work · 2024—2026"
        title={
          <>
            Work people
            <br />
            actually notice.
          </>
        }
        body="Real clients. Real creative direction — hospitality, beauty, fashion, products and local brands."
      />

      <section className="py-12 sm:py-16">
        <div className="site-wrap grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <Reveal
              key={project.id}
              delayMs={index * 40}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden rounded-[1.4rem] bg-surface ${
                    index === 0 ? "aspect-[16/8] min-h-[16rem]" : "aspect-[4/3]"
                  } ${isFramedProject(project) ? "border border-border bg-white" : ""}`}
                >
                  <Image
                    src={project.image}
                    alt={`Creative presentation for ${project.name}`}
                    fill
                    unoptimized={isFramedProject(project)}
                    className={`${isFramedProject(project) ? "object-contain p-4" : "object-cover"} transition duration-700 group-hover:scale-[1.03]`}
                    sizes={
                      index === 0
                        ? "100vw"
                        : "(max-width: 640px) 100vw, 50vw"
                    }
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.2em] text-coral">
                      {project.industry}
                    </p>
                    <h2 className="mt-1 font-display text-2xl tracking-tight transition group-hover:text-coral">
                      {project.name}
                    </h2>
                    <p className="mt-1 line-clamp-1 text-sm text-muted">
                      {project.services.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                  <span className="text-[0.7rem] tracking-[0.16em] text-muted">
                    {project.num}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-wrap">
          <Reveal>
            <h2 className="display-title text-[clamp(2rem,4.5vw,3.6rem)] text-navy">
              Your brand could
              <br />
              be next.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              Have a business, launch or idea that deserves attention?
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Start a brief</Button>
              <Button href="/services" variant="outline" arrow={false}>
                View services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
