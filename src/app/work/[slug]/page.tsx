import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkPageTemplate } from "@/components/internal/templates/work-page-template";
import { getWorkPage, workPages } from "@/content/featured-work";
import { createInternalMetadata } from "@/lib/metadata";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return workPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getWorkPage(slug);

  if (!content) notFound();

  return createInternalMetadata(content.seo);
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const content = getWorkPage(slug);

  if (!content) notFound();

  return <WorkPageTemplate content={content} />;
}
