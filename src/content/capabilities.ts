import type { CapabilitySummary } from "@/types/content";
import type { CapabilityPageContent } from "@/types/internal-pages";

export const capabilitySummaries: readonly CapabilitySummary[] = [
  {
    key: "transformation",
    number: "01",
    label: "Transformation",
    slug: "digital-transformation-governance",
    title: "Digital Transformation & Governance",
    shortDescription:
      "Strategy, governance, process digitization, enterprise architecture and technology roadmaps.",
    tags: ["Strategy", "Governance", "Process", "Architecture"],
  },
  {
    key: "intelligence",
    number: "02",
    label: "Intelligence",
    slug: "ai-data-intelligence",
    title: "AI & Data Intelligence",
    shortDescription:
      "AI applications, agents, analytics, computer vision, predictive systems and data platforms.",
    tags: ["AI", "Agents", "Analytics", "Data"],
  },
  {
    key: "software",
    number: "03",
    label: "Software",
    slug: "software-digital-products",
    title: "Software & Digital Products",
    shortDescription:
      "Web applications, mobile apps, enterprise platforms, APIs, portals and system integrations.",
    tags: ["Web", "Mobile", "Platforms", "API"],
  },
  {
    key: "connected",
    number: "04",
    label: "Connected Systems",
    slug: "smart-infrastructure-iot",
    title: "Smart Infrastructure & IoT",
    shortDescription:
      "Connected devices, sensors, gateways, smart infrastructure, mobility and operational IoT.",
    tags: ["IoT", "Edge", "Sensors", "Infrastructure"],
  },
  {
    key: "digitalTwin",
    number: "05",
    label: "Digital Operations",
    slug: "digital-twins-intelligent-operations",
    title: "Digital Twins & Intelligent Operations",
    shortDescription:
      "Real-time asset visualization, monitoring, predictive maintenance, operational intelligence and simulation.",
    tags: ["Digital Twin", "Monitoring", "Predictive", "Operations"],
    flagship: true,
  },
] as const;

const digitalTransformationGovernance: CapabilityPageContent = {
  family: "capability",
  slug: "digital-transformation-governance",
  seo: {
    title: "Digital Transformation & Governance",
    description:
      "DDMSS helps organizations structure digital strategy, governance, enterprise architecture, process digitization and responsible AI adoption.",
  },
  hero: {
    marker: "CAPABILITY / 01",
    title: "Digital Transformation & Governance",
    introduction:
      "Connect business priorities, operating realities and technology decisions through a structured transformation system built for accountable execution.",
    technicalLine:
      "STRATEGY · GOVERNANCE · PROCESS · ARCHITECTURE · ROADMAP",
    tags: ["Digital Strategy", "Governance", "Enterprise Architecture", "AI Adoption"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Digital Transformation" },
    ],
    action: {
      label: "Discuss This Capability",
      href: "/contact",
    },
  },
  enablement: [
    {
      technicalLabel: "DIRECTION / 01",
      title: "A clear transformation direction",
      description:
        "Translate business objectives and operational priorities into a coherent digital agenda.",
    },
    {
      technicalLabel: "CONTROL / 02",
      title: "Governed technology decisions",
      description:
        "Define decision rights, standards and accountability around systems, data and emerging technology.",
    },
    {
      technicalLabel: "FLOW / 03",
      title: "Digitized operating workflows",
      description:
        "Identify where connected processes, automation and information flow can improve how work is performed.",
    },
    {
      technicalLabel: "SEQUENCE / 04",
      title: "An executable technology roadmap",
      description:
        "Sequence initiatives, dependencies and architectural foundations into a practical delivery path.",
    },
  ],
  coreAreas: [
    {
      title: "Digital strategy",
      description: "Business-aligned priorities, transformation themes and investment direction.",
    },
    {
      title: "Governance",
      description: "Decision structures, standards, ownership and technology controls.",
    },
    {
      title: "Process digitization",
      description: "Workflow redesign, service improvement and automation opportunities.",
    },
    {
      title: "Enterprise architecture",
      description: "Target-state systems, integration, data and infrastructure alignment.",
    },
    {
      title: "Technology roadmaps",
      description: "Sequenced initiatives, dependencies and practical delivery horizons.",
    },
    {
      title: "Workflow automation",
      description: "Rules, approvals and handoffs designed for accountable execution.",
    },
    {
      title: "Data governance",
      description: "Ownership, quality, access and lifecycle principles for trusted data.",
    },
    {
      title: "AI adoption frameworks",
      description: "Governed pathways for evaluating, prioritizing and introducing AI.",
    },
  ],
  application: [
    {
      number: "01",
      technicalLabel: "DISCOVER",
      title: "Understand the operating context",
      description:
        "Map objectives, users, processes, systems, information flows and constraints before recommending technology.",
    },
    {
      number: "02",
      technicalLabel: "DEFINE",
      title: "Shape the target state",
      description:
        "Define the operating model, architecture principles and prioritized transformation themes.",
    },
    {
      number: "03",
      technicalLabel: "GOVERN",
      title: "Establish accountable guardrails",
      description:
        "Set decision structures, ownership and standards that support consistent delivery and adoption.",
    },
    {
      number: "04",
      technicalLabel: "ENABLE",
      title: "Move into engineered delivery",
      description:
        "Translate the roadmap into defined initiatives that can progress into design, engineering and integration.",
    },
  ],
  relatedSolutions: [
    {
      family: "solution",
      slug: "intelligent-operations",
      title: "Intelligent Operations",
      description: "Connect operational workflows, data and decision support.",
    },
    {
      family: "solution",
      slug: "digital-twins",
      title: "Digital Twins",
      description: "Structure the data and systems behind synchronized operations.",
    },
    {
      family: "solution",
      slug: "smart-facilities",
      title: "Smart Facilities",
      description: "Apply governance and architecture to connected physical environments.",
    },
  ],
  relevantIndustries: [
    {
      family: "industry",
      slug: "government-public-sector",
      title: "Government & Public Sector",
      description: "Digital services, governed data and structured modernization.",
    },
    {
      family: "industry",
      slug: "energy-oil-gas",
      title: "Energy & Oil & Gas",
      description: "Transformation designed around complex operational environments.",
    },
    {
      family: "industry",
      slug: "manufacturing-industrial",
      title: "Manufacturing & Industrial",
      description: "Connected processes, systems and operational intelligence.",
    },
  ],
  finalCta: {
    marker: "CAPABILITY / NEXT STEP",
    title: "Turn transformation intent into an engineered direction.",
    description:
      "Start with the objective, operating environment and systems already in place. DDMSS can help define the path forward.",
    action: {
      label: "Discuss This Capability",
      href: "/contact",
    },
  },
};

export const capabilityPages: readonly CapabilityPageContent[] = [
  digitalTransformationGovernance,
];

export function getCapabilityPage(slug: string) {
  return capabilityPages.find((capability) => capability.slug === slug);
}
