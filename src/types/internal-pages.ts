import type {
  CapabilityVisualKey,
  IndustryVisualKey,
  SolutionVisualKey,
  WorkVisualKey,
} from "@/types/content";

export type PageFamily =
  | "capability"
  | "solution"
  | "industry"
  | "work"
  | "insight"
  | "about";

export type SeoContent = {
  title: string;
  description: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageAction = {
  label: string;
  href: string;
};

export type InternalHeroContent = {
  marker: string;
  title: string;
  introduction: string;
  technicalLine?: string;
  tags?: readonly string[];
  breadcrumbs?: readonly BreadcrumbItem[];
  action?: PageAction;
};

export type DetailItem = {
  title: string;
  description: string;
  technicalLabel?: string;
};

export type ProcessItem = DetailItem & {
  number: string;
};

export type InternalSectionCopy = {
  title: string;
  introduction: string;
  ariaLabel: string;
};

export type ContentReference = {
  family: Exclude<PageFamily, "about">;
  slug: string;
  title: string;
  description?: string;
};

export type FinalCtaContent = {
  marker?: string;
  title: string;
  description: string;
  action: PageAction;
};

type InternalPageContentBase = {
  family: PageFamily;
  slug: string;
  hero: InternalHeroContent;
  seo: SeoContent;
  finalCta: FinalCtaContent;
};

export type CapabilityPageContent = InternalPageContentBase & {
  family: "capability";
  visualKey: CapabilityVisualKey;
  sections: {
    enablement: InternalSectionCopy;
    coreAreas: InternalSectionCopy;
    application: InternalSectionCopy;
  };
  enablement: readonly DetailItem[];
  coreAreas: readonly DetailItem[];
  application: readonly ProcessItem[];
  relatedSolutions: readonly ContentReference[];
  relevantIndustries: readonly ContentReference[];
};

export type SolutionPageContent = InternalPageContentBase & {
  family: "solution";
  visualKey: SolutionVisualKey;
  challenge: string;
  challengeSystems: readonly string[];
  architecture: string;
  coreComponents: readonly DetailItem[];
  operatingFlow: readonly ProcessItem[];
  benefits: readonly DetailItem[];
  relatedCapabilities: readonly ContentReference[];
  relatedIndustries: readonly ContentReference[];
  relatedWork: readonly ContentReference[];
};

export type IndustryPageContent = InternalPageContentBase & {
  family: "industry";
  visualKey: IndustryVisualKey;
  operationalContext: string;
  challenges: readonly DetailItem[];
  capabilities: readonly ContentReference[];
  solutions: readonly ContentReference[];
  architecture: string;
  application: readonly ProcessItem[];
  relatedWork: readonly ContentReference[];
};

export type WorkPageContent = InternalPageContentBase & {
  family: "work";
  visualKey: WorkVisualKey;
  client?: string;
  status?: "concept" | "prototype" | "delivered";
  context: string;
  challenge: string;
  challengeAreas: readonly DetailItem[];
  architecture: string;
  components: readonly DetailItem[];
  approach: readonly ProcessItem[];
  evidence?: {
    marker: string;
    title: string;
    introduction?: string;
    items: readonly DetailItem[];
  };
  relatedCapabilities: readonly ContentReference[];
  relatedSolutions: readonly ContentReference[];
  relevantIndustries: readonly ContentReference[];
};

export type ArticleSection = {
  id: string;
  title: string;
  body: readonly string[];
  callout?: string;
  diagramKey?: string;
};

export type InsightPageContent = InternalPageContentBase & {
  family: "insight";
  category: string;
  publishedAt?: string;
  author?: string;
  readingTime?: string;
  sections: readonly ArticleSection[];
  relatedInsights: readonly ContentReference[];
};

export type AboutPageContent = InternalPageContentBase & {
  family: "about";
  beliefs: readonly DetailItem[];
  approach: readonly ProcessItem[];
  regionalPositioning: string;
};

export type InternalPageContent =
  | CapabilityPageContent
  | SolutionPageContent
  | IndustryPageContent
  | WorkPageContent
  | InsightPageContent
  | AboutPageContent;

export type IndexItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  tags?: readonly string[];
  architectureLine?: string;
  visualKey?: string;
  actionLabel?: string;
};

export type InternalIndexContent = {
  family: Exclude<PageFamily, "about">;
  hero: InternalHeroContent;
  seo: SeoContent;
  items: readonly IndexItem[];
  finalCta?: FinalCtaContent;
};
