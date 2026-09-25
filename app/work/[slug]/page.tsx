import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkCaseStudyView } from "@/components/portfolio/WorkCaseStudyView";
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
      <WorkCaseStudyView project={project} />
    </main>
  );
}
