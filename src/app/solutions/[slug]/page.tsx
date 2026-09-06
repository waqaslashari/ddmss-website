import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageTemplate } from "@/components/internal/templates/solution-page-template";
import { getSolutionPage, solutionPages } from "@/content/solutions";
import { createInternalMetadata } from "@/lib/metadata";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getSolutionPage(slug);

  if (!content) notFound();

  return createInternalMetadata(content.seo);
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const content = getSolutionPage(slug);

  if (!content) notFound();

  return <SolutionPageTemplate content={content} />;
}
