import type { Metadata } from "next";
import { AboutPageTemplate } from "@/components/internal/templates/about-page-template";
import { aboutPageContent } from "@/content/about";
import { createInternalMetadata } from "@/lib/metadata";

export const metadata: Metadata = createInternalMetadata(aboutPageContent.seo);

export default function AboutPage() {
  return <AboutPageTemplate content={aboutPageContent} />;
}
