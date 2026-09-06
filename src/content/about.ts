import type { AboutPageContent } from "@/types/internal-pages";

export const aboutPageContent: AboutPageContent = {
  family: "about",
  slug: "about",
  seo: {
    title: "About DDMSS — Technology, AI & Connected Infrastructure",
    description:
      "Learn how DDMSS combines digital transformation, AI, software, data and connected infrastructure to design intelligent operational systems from Oman for regional and international markets.",
  },
  hero: {
    marker: "ABOUT / 01",
    title: "Technology Built Around the Real World.",
    introduction:
      "DDMSS is an Oman-based technology company designing intelligent digital ecosystems that connect software, data, AI and physical infrastructure.",
    technicalLine: "TRANSFORM · BUILD · CONNECT · OPTIMIZE",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "About" }],
  },
  identity: {
    fullName: "Digital Data & Media Solutions & Services",
    introduction:
      "DDMSS brings together digital transformation, software engineering, AI, data and connected infrastructure to solve practical business and operational challenges. We work across enterprise systems, applications, smart infrastructure, mobility, IoT, digital twins and intelligent operations—without treating any one technology as the complete answer.",
    domains: [
      "Business",
      "Software",
      "Data",
      "AI",
      "Devices",
      "Infrastructure",
      "Operations",
    ],
  },
  beliefs: [
    {
      title: "Business Before Technology",
      technicalLabel: "CONTEXT / OBJECTIVE",
      description:
        "Start with the operational problem, user requirement and business objective before selecting tools.",
    },
    {
      title: "Systems, Not Silos",
      technicalLabel: "CONNECT / INTEGRATE",
      description:
        "Software, devices, infrastructure and data create more value when designed as one connected environment.",
    },
    {
      title: "Intelligence With Purpose",
      technicalLabel: "EVIDENCE / DECISION",
      description:
        "AI should support useful decisions, controlled automation and measurable operational outcomes.",
    },
    {
      title: "Build for the Real Environment",
      technicalLabel: "USERS / OPERATIONS",
      description:
        "Technology must account for users, infrastructure, workflows, integration constraints and day-to-day operations.",
    },
  ],
  model: [
    {
      title: "Transform",
      technicalLabel: "STRATEGY / CHANGE",
      description: "Strategy, governance, workflows and business change.",
    },
    {
      title: "Build",
      technicalLabel: "SOFTWARE / PRODUCTS",
      description: "Software, applications, platforms and digital products.",
    },
    {
      title: "Connect",
      technicalLabel: "DEVICES / SYSTEMS",
      description: "Devices, infrastructure, mobility and physical systems.",
    },
    {
      title: "Optimize",
      technicalLabel: "DATA / INTELLIGENCE",
      description: "Data, analytics, AI and controlled automation.",
    },
  ],
  digitalPhysical: {
    introduction:
      "Many technology companies work primarily in software. DDMSS focuses on the boundary where applications, data and intelligence meet devices, infrastructure, assets and operating systems. That boundary determines whether a digital idea can function dependably in the real environment.",
    digitalSystems: ["Software", "Applications", "APIs", "Data", "AI"],
    physicalSystems: [
      "Sensors",
      "Gateways",
      "Chargers",
      "Parking",
      "Buildings",
      "Industrial Assets",
    ],
  },
  ai: {
    introduction: [
      "AI should begin with a defined use case and a clear understanding of the decision, task or workflow it is intended to support. Enterprise data quality, access controls and governance shape whether the resulting capability can be trusted.",
      "Human oversight remains part of the system. DDMSS favours controlled automation with visible evidence, permissions and approval boundaries over unmanaged autonomy, integrating intelligence into the workflows people already use.",
    ],
    principles: [
      {
        title: "Defined Use Case",
        technicalLabel: "OBJECTIVE / OWNER",
        description: "Connect the capability to a specific business problem and accountable outcome.",
      },
      {
        title: "Trusted Context",
        technicalLabel: "DATA / ACCESS",
        description: "Use governed information with understood quality, provenance and permissions.",
      },
      {
        title: "Human Oversight",
        technicalLabel: "REVIEW / CONTROL",
        description: "Keep consequential decisions and actions visible to responsible people.",
      },
    ],
    examples: [
      "AI Assistants",
      "Agents",
      "Analytics",
      "Document Intelligence",
      "Automation",
    ],
  },
  regions: [
    {
      title: "Oman",
      technicalLabel: "BASE / PRIMARY MARKET",
      description:
        "The company base and primary market, grounding how DDMSS understands client needs and operational environments.",
    },
    {
      title: "Middle East",
      technicalLabel: "REGIONAL MARKETS",
      description:
        "Regional markets where enterprise systems, infrastructure and digital transformation require local operating context.",
    },
    {
      title: "Pakistan / India",
      technicalLabel: "TECHNOLOGY / ENGINEERING / DELIVERY ECOSYSTEM",
      description:
        "A wider technology, engineering and delivery ecosystem that can support suitable programmes and systems.",
    },
    {
      title: "United Kingdom / United States",
      technicalLabel: "INTERNATIONAL MARKET / TECHNOLOGY / PARTNERSHIP ECOSYSTEM",
      description:
        "International markets and technology or partnership ecosystems relevant to DDMSS capabilities.",
    },
  ],
  approach: [
    {
      number: "01",
      title: "Understand",
      technicalLabel: "CONTEXT",
      description: "Establish the challenge, users, operating environment and desired outcome.",
    },
    {
      number: "02",
      title: "Design",
      technicalLabel: "ARCHITECTURE",
      description: "Shape the experience, system boundaries, data and delivery model.",
    },
    {
      number: "03",
      title: "Engineer",
      technicalLabel: "BUILD",
      description: "Create the software, platforms and technical components the system requires.",
    },
    {
      number: "04",
      title: "Integrate",
      technicalLabel: "CONNECT",
      description: "Connect applications, data, devices, infrastructure and existing systems.",
    },
    {
      number: "05",
      title: "Optimize",
      technicalLabel: "IMPROVE",
      description: "Use operating evidence, analytics and intelligence to refine performance.",
    },
  ],
  work: [
    {
      title: "Smart Parking Ecosystem",
      description:
        "A connected system pattern linking the user journey to physical access and operator visibility.",
      architecture: "ACCESS + PARKING + PAYMENTS + OPERATIONAL PLATFORM",
    },
    {
      title: "EV Charging Platform",
      description:
        "A platform architecture coordinating the driver experience, charging infrastructure and operations.",
      architecture: "DRIVER + CHARGER + PAYMENTS + OPERATOR CMS",
    },
    {
      title: "Industrial Digital Operations",
      description:
        "An operational architecture connecting physical assets to live context and decision support.",
      architecture: "ASSET + TELEMETRY + DIGITAL TWIN + INTELLIGENCE",
    },
  ],
  finalCta: {
    marker: "ABOUT / NEXT STEP",
    title: "Start With the Challenge.",
    description:
      "Tell us what you are trying to achieve, and we’ll start by understanding the operation, users and systems around it.",
    action: { label: "Start a Conversation", href: "/contact" },
  },
};
