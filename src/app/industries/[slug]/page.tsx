import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPageTemplate } from "@/components/internal/templates/industry-page-template";
import { getIndustryPage, industryPages } from "@/content/industries";
import { createInternalMetadata } from "@/lib/metadata";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getIndustryPage(slug);

  if (!content) notFound();

  return createInternalMetadata(content.seo);
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const content = getIndustryPage(slug);

  if (!content) notFound();

  return <IndustryPageTemplate content={content} />;
}
