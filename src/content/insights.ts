export type InsightVisual = "aiGovernance" | "digitalTwins" | "smartMobility";

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
