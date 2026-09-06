import type { InsightVisualKey } from "@/types/content";
import type { InternalIndexContent } from "@/types/internal-pages";

export type InsightVisual = InsightVisualKey;

export type Insight = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  visual: InsightVisual;
  publishedAt?: string;
  author?: string;
  readingTime?: string;
};

export const insights: readonly Insight[] = [
  {
    slug: "/insights/ai-governance-for-enterprises",
    category: "AI & Governance",
    title: "AI Governance for Enterprises",
    summary:
      "How organizations can introduce artificial intelligence with clear governance, accountability, data controls and measurable business objectives.",
    visual: "aiGovernance",
  },
  {
    slug: "/insights/digital-twins-industrial-operations",
    category: "Digital Twins",
    title: "Digital Twins in Industrial Operations",
    summary:
      "How connected physical assets, operational data and synchronized digital models can improve visibility, monitoring and predictive decision-making.",
    visual: "digitalTwins",
  },
  {
    slug: "/insights/infrastructure-behind-smart-mobility",
    category: "Smart Mobility",
    title: "Building the Infrastructure Behind Smart Mobility",
    summary:
      "Why parking, EV charging, access, payments, connectivity and operational platforms increasingly need to function as one mobility ecosystem.",
    visual: "smartMobility",
  },
] as const;

export const insightsIndexContent: InternalIndexContent = {
  family: "insight",
  seo: {
    title: "Insights",
    description:
      "Practical DDMSS perspectives on AI governance, digital twins, smart mobility and the technologies reshaping modern operations.",
  },
  hero: {
    marker: "INSIGHTS / 00",
    title: "Ideas. Insights. Impact.",
    introduction:
      "Perspectives on artificial intelligence, digital transformation, intelligent infrastructure and the technologies reshaping modern operations.",
    technicalLine: "GOVERNANCE · OPERATIONS · INFRASTRUCTURE · INTELLIGENCE",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Insights" }],
  },
  items: insights.map((insight, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: insight.title,
    description: insight.summary,
    href: insight.slug,
    tags: [insight.category],
    visualKey: insight.visual,
    actionLabel: "Read Insight",
  })),
  finalCta: {
    marker: "INSIGHTS / CONTINUE",
    title: "Turn a technology question into practical direction.",
    description:
      "Discuss the operational context, governance and system choices behind your next technology initiative.",
    action: { label: "Discuss This Topic", href: "/contact" },
  },
};

export function getInsightSummary(slug: string) {
  return insights.find((insight) => insight.slug === `/insights/${slug}`);
}
