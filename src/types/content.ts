export type CapabilityVisualKey =
  | "transformation"
  | "intelligence"
  | "software"
  | "connected"
  | "digitalTwin";

export type CapabilitySummary = {
  key: CapabilityVisualKey;
  slug: string;
  number: string;
  label: string;
  title: string;
  shortDescription: string;
  tags: readonly string[];
  flagship?: boolean;
};

export type Solution = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  visual: string;
  technologies: string[];
};

export type Industry = {
  slug: string;
  title: string;
  description: string;
  visual: string;
  technologyTags: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  visual: string;
  status: "concept" | "prototype" | "delivered";
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  visual: string;
  publishedAt?: string;
};
