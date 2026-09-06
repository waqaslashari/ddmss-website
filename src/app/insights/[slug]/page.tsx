import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightPageTemplate } from "@/components/internal/templates/insight-page-template";
import { getInsightPage, insightPages } from "@/content/insight-articles";
import { createInternalMetadata } from "@/lib/metadata";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return insightPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getInsightPage(slug);

  if (!content) notFound();

  return createInternalMetadata(content.seo);
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const content = getInsightPage(slug);

  if (!content) notFound();

  return <InsightPageTemplate content={content} />;
}
