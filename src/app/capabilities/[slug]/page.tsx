import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityPageTemplate } from "@/components/internal/templates/capability-page-template";
import { capabilityPages, getCapabilityPage } from "@/content/capabilities";
import { createInternalMetadata } from "@/lib/metadata";

type CapabilityPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return capabilityPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CapabilityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getCapabilityPage(slug);

  if (!content) notFound();

  return createInternalMetadata(content.seo);
}

export default async function CapabilityPage({ params }: CapabilityPageProps) {
  const { slug } = await params;
  const content = getCapabilityPage(slug);

  if (!content) notFound();

  return <CapabilityPageTemplate content={content} />;
}
