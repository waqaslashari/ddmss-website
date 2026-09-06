import type { CapabilitySummary } from "@/types/content";
import type { CapabilityPageContent, InternalIndexContent } from "@/types/internal-pages";

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

export const capabilitiesIndexContent: InternalIndexContent = {
  family: "capability",
  seo: {
    title: "Digital Capabilities",
    description:
      "Explore DDMSS capabilities across digital transformation, AI and data, software engineering, IoT, smart infrastructure and digital twins.",
  },
  hero: {
    marker: "CAPABILITIES / 00",
    title: "From Strategy to Systems.",
    introduction:
      "DDMSS brings together transformation, software, data, connected infrastructure and intelligent operations to design complete digital ecosystems.",
    technicalLine: "TRANSFORM · BUILD · CONNECT · OPTIMIZE",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Capabilities" },
    ],
  },
  items: capabilitySummaries.map((capability) => ({
    number: capability.number,
    title: capability.title,
    description: capability.shortDescription,
    href: `/capabilities/${capability.slug}`,
    tags: capability.tags,
    visualKey: capability.key,
    actionLabel: "Explore Capability",
  })),
  finalCta: {
    marker: "CAPABILITIES / NEXT STEP",
    title: "Start with the operating challenge.",
    description:
      "DDMSS can help connect the transformation, engineering and technology capabilities required around your objective.",
    action: { label: "Start a Conversation", href: "/contact" },
  },
};

const digitalTransformationGovernance: CapabilityPageContent = {
  family: "capability",
  slug: "digital-transformation-governance",
  visualKey: "transformation",
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
  sections: {
    enablement: {
      title: "Transformation with a defined operating logic.",
      introduction:
        "A transformation program becomes actionable when business direction, governance, processes and architecture are treated as one connected system.",
      ariaLabel: "Digital transformation outcomes",
    },
    coreAreas: {
      title: "The foundations behind responsible change.",
      introduction:
        "Each area can be addressed independently, but the strongest transformation direction considers how they affect one another.",
      ariaLabel: "Digital transformation and governance core areas",
    },
    application: {
      title: "From operating context to executable direction.",
      introduction:
        "DDMSS begins with how the organization works, then connects strategy and governance to the architecture and delivery path required.",
      ariaLabel: "How DDMSS applies this capability",
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

const aiDataIntelligence: CapabilityPageContent = {
  family: "capability",
  slug: "ai-data-intelligence",
  visualKey: "intelligence",
  seo: {
    title: "AI & Data Intelligence",
    description:
      "DDMSS designs governed AI applications, data platforms, analytics, computer vision and predictive intelligence around accountable business and operational decisions.",
  },
  hero: {
    marker: "CAPABILITY / 02",
    title: "AI & Data Intelligence",
    introduction:
      "Turn enterprise and operational data into intelligence, automation and better decisions.",
    technicalLine: "DATA · GOVERNANCE · AI / ANALYTICS · DECISION · ACTION",
    tags: ["AI Applications", "Data Platforms", "Analytics", "Governance"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "AI & Data Intelligence" },
    ],
    action: { label: "Discuss This Capability", href: "/contact" },
  },
  sections: {
    enablement: {
      title: "Trusted data translated into useful intelligence.",
      introduction:
        "AI creates value when it is connected to a defined objective, reliable information and accountable human decisions.",
      ariaLabel: "AI and data intelligence outcomes",
    },
    coreAreas: {
      title: "Intelligence built on controlled foundations.",
      introduction:
        "Each capability is designed around data quality, governance, operational context and appropriate human oversight.",
      ariaLabel: "AI and data intelligence core areas",
    },
    application: {
      title: "From decision need to governed operation.",
      introduction:
        "DDMSS frames the business decision first, then engineers the data, intelligence and controls required to support it.",
      ariaLabel: "How DDMSS applies AI and data intelligence",
    },
  },
  enablement: [
    {
      technicalLabel: "TRUST / 01",
      title: "A reliable information foundation",
      description:
        "Bring relevant enterprise and operational data into a structured, governed environment.",
    },
    {
      technicalLabel: "INSIGHT / 02",
      title: "Decision-focused intelligence",
      description:
        "Shape analytics and models around the decisions users and operators actually need to make.",
    },
    {
      technicalLabel: "FLOW / 03",
      title: "Controlled workflow assistance",
      description:
        "Embed AI assistance and automation into defined processes with clear accountability and review.",
    },
    {
      technicalLabel: "AWARENESS / 04",
      title: "Earlier operational awareness",
      description:
        "Use patterns, anomalies and visual signals to support timely investigation and proactive action.",
    },
  ],
  coreAreas: [
    {
      title: "AI Applications",
      description:
        "Purpose-built AI capabilities embedded in business and operational systems.",
    },
    {
      title: "AI Agents & Assistants",
      description:
        "Controlled intelligent systems supporting knowledge, analysis and workflow execution.",
    },
    {
      title: "Data Platforms",
      description:
        "Structured foundations for collecting, integrating and using enterprise and operational data.",
    },
    {
      title: "Analytics & Decision Support",
      description:
        "Dashboards, models and analytical systems designed around operational decisions.",
    },
    {
      title: "Computer Vision",
      description:
        "Visual intelligence for monitoring, inspection, detection and operational awareness.",
    },
    {
      title: "Predictive Intelligence",
      description:
        "Models supporting forecasting, anomaly detection, condition monitoring and proactive action.",
    },
  ],
  application: [
    {
      number: "01",
      technicalLabel: "FRAME",
      title: "Define the decision objective",
      description:
        "Establish the user, operational question, expected action and boundaries before selecting an AI approach.",
    },
    {
      number: "02",
      technicalLabel: "GOVERN",
      title: "Assess data and controls",
      description:
        "Evaluate availability, quality, access, traceability and the human oversight required for responsible use.",
    },
    {
      number: "03",
      technicalLabel: "ENGINEER",
      title: "Build the intelligence layer",
      description:
        "Develop the data pipelines, models, applications and interfaces around the defined operating need.",
    },
    {
      number: "04",
      technicalLabel: "OPERATE",
      title: "Monitor and improve",
      description:
        "Review performance, data conditions and user outcomes so the system remains controlled and useful.",
    },
  ],
  relatedSolutions: [
    { family: "solution", slug: "ai-powered-enterprise", title: "AI-Powered Enterprise", description: "Governed AI assistance embedded in enterprise knowledge and workflows." },
    { family: "solution", slug: "intelligent-operations", title: "Intelligent Operations", description: "Operational information translated into awareness and decision support." },
    { family: "solution", slug: "digital-twins", title: "Digital Twins", description: "Live asset data connected to synchronized models and intelligence." },
  ],
  relevantIndustries: [
    { family: "industry", slug: "energy-oil-gas", title: "Energy & Oil & Gas", description: "Operational analytics, condition awareness and governed intelligence." },
    { family: "industry", slug: "government-public-sector", title: "Government & Public Sector", description: "Responsible AI, governed data and improved digital services." },
    { family: "industry", slug: "manufacturing-industrial", title: "Manufacturing & Industrial", description: "Production insight, visual monitoring and predictive intelligence." },
    { family: "industry", slug: "logistics-warehousing", title: "Logistics & Warehousing", description: "Connected data, demand visibility and operational decision support." },
  ],
  finalCta: {
    marker: "CAPABILITY / NEXT STEP",
    title: "Apply intelligence to a defined operating need.",
    description:
      "Start with the decision, workflow and data environment. DDMSS can help structure a controlled path from information to action.",
    action: { label: "Discuss This Capability", href: "/contact" },
  },
};

const softwareDigitalProducts: CapabilityPageContent = {
  family: "capability",
  slug: "software-digital-products",
  visualKey: "software",
  seo: {
    title: "Software & Digital Products",
    description:
      "DDMSS designs web applications, mobile experiences, enterprise platforms, APIs and digital products around real users, workflows and connected systems.",
  },
  hero: {
    marker: "CAPABILITY / 03",
    title: "Software & Digital Products",
    introduction:
      "Design and engineer digital products around the way users, businesses and operational systems actually work.",
    technicalLine: "USER · APPLICATION · API · PLATFORM · DATA",
    tags: ["Web", "Mobile", "Platforms", "APIs", "User Experience"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Software & Digital Products" },
    ],
    action: { label: "Discuss This Capability", href: "/contact" },
  },
  sections: {
    enablement: {
      title: "Requirements and workflows translated into usable products.",
      introduction:
        "Effective software connects user needs, business rules, data and surrounding systems through a clear product architecture.",
      ariaLabel: "Software and digital product outcomes",
    },
    coreAreas: {
      title: "Digital products engineered as complete systems.",
      introduction:
        "The experience, application architecture, integrations and long-term operating requirements are designed together.",
      ariaLabel: "Software and digital product core areas",
    },
    application: {
      title: "From workflow understanding to maintainable delivery.",
      introduction:
        "DDMSS structures product decisions around users and operations, then connects design, engineering and integration into one delivery path.",
      ariaLabel: "How DDMSS applies software and product engineering",
    },
  },
  enablement: [
    { technicalLabel: "EXPERIENCE / 01", title: "Clear digital experiences", description: "Give users focused interfaces built around the tasks, decisions and information that matter." },
    { technicalLabel: "WORKFLOW / 02", title: "Connected business processes", description: "Translate rules, approvals and handoffs into accountable digital workflows." },
    { technicalLabel: "SYSTEM / 03", title: "Integrated applications", description: "Connect products with platforms, devices, services and trusted data sources." },
    { technicalLabel: "FOUNDATION / 04", title: "Maintainable product architecture", description: "Structure applications for ongoing evolution, integration and responsible operation." },
  ],
  coreAreas: [
    { title: "Web Applications", description: "Modern web platforms for enterprise, customer and operational use." },
    { title: "Mobile Applications", description: "Purpose-built mobile experiences supporting users, field teams and connected systems." },
    { title: "Enterprise Platforms", description: "Internal systems, portals and operational applications designed around real workflows." },
    { title: "APIs & Integrations", description: "Secure connectivity between platforms, devices, services and data sources." },
    { title: "Product Architecture", description: "Scalable application architecture designed around long-term maintainability and integration." },
    { title: "User Experience", description: "Clear interaction design aligned with business processes and user requirements." },
  ],
  application: [
    { number: "01", technicalLabel: "DEFINE", title: "Understand users and workflows", description: "Map objectives, user roles, process logic, information needs and the systems already in place." },
    { number: "02", technicalLabel: "ARCHITECT", title: "Design the product system", description: "Define experience, application boundaries, data flows, integrations and technology direction." },
    { number: "03", technicalLabel: "ENGINEER", title: "Build and validate", description: "Develop the product in controlled increments and validate it against real requirements and usage." },
    { number: "04", technicalLabel: "EVOLVE", title: "Operate and improve", description: "Support maintainability, integration and informed product development as needs change." },
  ],
  relatedSolutions: [
    { family: "solution", slug: "smart-parking", title: "Smart Parking", description: "Applications and integrations connecting access, availability, payments and operations." },
    { family: "solution", slug: "ev-charging", title: "EV Charging", description: "Digital services connecting charging infrastructure, users and operational systems." },
    { family: "solution", slug: "ai-powered-enterprise", title: "AI-Powered Enterprise", description: "Enterprise applications shaped around governed AI and knowledge workflows." },
    { family: "solution", slug: "smart-facilities", title: "Smart Facilities", description: "Operational software connecting people, building systems and facility information." },
  ],
  relevantIndustries: [
    { family: "industry", slug: "government-public-sector", title: "Government & Public Sector", description: "Digital services, internal platforms and governed workflows." },
    { family: "industry", slug: "mobility-transportation", title: "Mobility & Transportation", description: "User applications and operational platforms for connected movement." },
    { family: "industry", slug: "real-estate-smart-cities", title: "Real Estate & Smart Cities", description: "Digital experiences connected to facilities and urban infrastructure." },
    { family: "industry", slug: "logistics-warehousing", title: "Logistics & Warehousing", description: "Operational applications, integrations and mobile workflows." },
  ],
  finalCta: {
    marker: "CAPABILITY / NEXT STEP",
    title: "Turn an operating requirement into a digital product.",
    description:
      "Bring the users, workflows and systems already involved. DDMSS can help define and engineer the right product architecture.",
    action: { label: "Discuss This Capability", href: "/contact" },
  },
};

const smartInfrastructureIot: CapabilityPageContent = {
  family: "capability",
  slug: "smart-infrastructure-iot",
  visualKey: "connected",
  seo: {
    title: "Smart Infrastructure & IoT",
    description:
      "DDMSS connects devices, sensors, edge systems and physical infrastructure to software, data and operational intelligence.",
  },
  hero: {
    marker: "CAPABILITY / 04",
    title: "Smart Infrastructure & IoT",
    introduction:
      "Connect physical infrastructure, devices and operational environments to software, data and intelligence.",
    technicalLine: "PHYSICAL ASSET · SENSOR · EDGE · PLATFORM · INTELLIGENCE",
    tags: ["Connected Devices", "Edge", "Monitoring", "Automation"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Smart Infrastructure & IoT" },
    ],
    action: { label: "Discuss This Capability", href: "/contact" },
  },
  sections: {
    enablement: {
      title: "Real-world systems connected into digital operations.",
      introduction:
        "Physical assets become more useful when status, events and control can move reliably between infrastructure and digital systems.",
      ariaLabel: "Smart infrastructure and IoT outcomes",
    },
    coreAreas: {
      title: "The layers behind connected operations.",
      introduction:
        "Devices, local connectivity, platforms and operational workflows must be designed as one dependable ecosystem.",
      ariaLabel: "Smart infrastructure and IoT core areas",
    },
    application: {
      title: "From physical environment to connected operation.",
      introduction:
        "DDMSS starts with the asset and operating conditions, then defines how devices, networks, software and data should work together.",
      ariaLabel: "How DDMSS applies smart infrastructure and IoT",
    },
  },
  enablement: [
    { technicalLabel: "VISIBILITY / 01", title: "Live infrastructure awareness", description: "Make relevant device, asset and environment status available to operational users and systems." },
    { technicalLabel: "CONNECTION / 02", title: "Coordinated physical systems", description: "Connect equipment, gateways and platforms through a defined systems architecture." },
    { technicalLabel: "RESPONSE / 03", title: "Event-driven workflows", description: "Translate device events and operating conditions into alerts, processes and controlled responses." },
    { technicalLabel: "FOUNDATION / 04", title: "Data for operational intelligence", description: "Create dependable information flows that can support monitoring, analytics and optimization." },
  ],
  coreAreas: [
    { title: "Connected Devices", description: "Sensors, controllers and intelligent endpoints connected into broader operational systems." },
    { title: "Edge & Gateways", description: "Local processing and connectivity between equipment, networks and cloud platforms." },
    { title: "Smart Infrastructure", description: "Connected buildings, facilities, mobility infrastructure and operational assets." },
    { title: "Monitoring", description: "Real-time visibility into device status, asset state and operational conditions." },
    { title: "Control & Automation", description: "Digital workflows and control logic linking software with physical systems." },
    { title: "Systems Integration", description: "Connecting devices, APIs, infrastructure and enterprise platforms into one ecosystem." },
  ],
  application: [
    { number: "01", technicalLabel: "SURVEY", title: "Understand the environment", description: "Identify assets, operating conditions, users, connectivity constraints and the information that matters." },
    { number: "02", technicalLabel: "ARCHITECT", title: "Define the connected system", description: "Structure device, edge, network, platform and data relationships around the operating requirement." },
    { number: "03", technicalLabel: "INTEGRATE", title: "Connect physical and digital layers", description: "Bring infrastructure, devices, APIs and applications into a controlled end-to-end flow." },
    { number: "04", technicalLabel: "OPERATE", title: "Monitor and refine", description: "Observe system health, data quality and operational use to support dependable ongoing performance." },
  ],
  relatedSolutions: [
    { family: "solution", slug: "smart-parking", title: "Smart Parking", description: "Connected access, parking infrastructure, availability and operational systems." },
    { family: "solution", slug: "ev-charging", title: "EV Charging", description: "Charging infrastructure connected to digital services and operations." },
    { family: "solution", slug: "smart-facilities", title: "Smart Facilities", description: "Building systems, devices and facility workflows connected through one platform." },
    { family: "solution", slug: "intelligent-operations", title: "Intelligent Operations", description: "Live operational information connected to analysis and action." },
  ],
  relevantIndustries: [
    { family: "industry", slug: "real-estate-smart-cities", title: "Real Estate & Smart Cities", description: "Connected buildings, public environments and urban infrastructure." },
    { family: "industry", slug: "mobility-transportation", title: "Mobility & Transportation", description: "Connected access, vehicles and transport infrastructure." },
    { family: "industry", slug: "energy-oil-gas", title: "Energy & Oil & Gas", description: "Operational assets, field connectivity and condition monitoring." },
    { family: "industry", slug: "manufacturing-industrial", title: "Manufacturing & Industrial", description: "Connected equipment, production environments and operational data." },
    { family: "industry", slug: "logistics-warehousing", title: "Logistics & Warehousing", description: "Asset tracking, facility systems and connected workflows." },
  ],
  finalCta: {
    marker: "CAPABILITY / NEXT STEP",
    title: "Connect the physical environment to useful digital operations.",
    description:
      "Start with the assets, operating conditions and information needed. DDMSS can help define the connected system around them.",
    action: { label: "Discuss This Capability", href: "/contact" },
  },
};

const digitalTwinsIntelligentOperations: CapabilityPageContent = {
  family: "capability",
  slug: "digital-twins-intelligent-operations",
  visualKey: "digitalTwin",
  seo: {
    title: "Digital Twins & Intelligent Operations",
    description:
      "DDMSS connects physical assets, live telemetry, digital twins and operational intelligence to support visibility, prediction and informed action.",
  },
  hero: {
    marker: "CAPABILITY / 05 · FLAGSHIP",
    title: "Digital Twins & Intelligent Operations",
    introduction:
      "Create synchronized digital representations of assets and operations that turn live data into visibility, prediction and action.",
    technicalLine: "PHYSICAL · TELEMETRY · DIGITAL TWIN · INTELLIGENCE · ACTION",
    tags: ["Digital Twin", "Telemetry", "Monitoring", "Predictive Intelligence"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Digital Twins & Intelligent Operations" },
    ],
    action: { label: "Discuss This Capability", href: "/contact" },
  },
  sections: {
    enablement: {
      title: "Synchronized visibility around physical operations.",
      introduction:
        "A digital twin connects the state of a real asset or environment to a digital representation that supports understanding and action.",
      ariaLabel: "Digital twin and intelligent operations outcomes",
    },
    coreAreas: {
      title: "From physical state to operational intelligence.",
      introduction:
        "The model, telemetry, analytics and operational workflow must remain connected to the real system they represent.",
      ariaLabel: "Digital twin and intelligent operations core areas",
    },
    application: {
      title: "From asset context to synchronized operation.",
      introduction:
        "DDMSS defines the operational question first, then engineers the model, live data and intelligence layers required to answer it.",
      ariaLabel: "How DDMSS applies digital twins and intelligent operations",
    },
  },
  enablement: [
    { technicalLabel: "STATE / 01", title: "Shared operational visibility", description: "Connect asset state, events and conditions into one understandable operational view." },
    { technicalLabel: "CONTEXT / 02", title: "A synchronized digital model", description: "Relate live information to the structure, behavior and context of the physical environment." },
    { technicalLabel: "AWARENESS / 03", title: "Earlier condition insight", description: "Use telemetry and patterns to support anomaly awareness and proactive investigation." },
    { technicalLabel: "ACTION / 04", title: "Informed operational decisions", description: "Bring model and analytical outputs into the workflows where teams evaluate and act." },
  ],
  coreAreas: [
    { title: "Digital Representation", description: "Digital models connected to the physical asset or operational environment." },
    { title: "Live Telemetry", description: "Operational data synchronized from sensors, equipment and connected systems." },
    { title: "Asset Monitoring", description: "Visibility into state, condition, utilization and performance." },
    { title: "Predictive Maintenance", description: "Using operational patterns and analytics to support proactive maintenance decisions." },
    { title: "Operational Intelligence", description: "Combining system data, analytics and AI into decision-support workflows." },
    { title: "Simulation & Optimization", description: "Using digital models to understand scenarios, performance and possible operational improvements." },
  ],
  application: [
    { number: "01", technicalLabel: "MODEL", title: "Define the operational representation", description: "Identify the asset, environment, behaviors and decisions the digital representation must support." },
    { number: "02", technicalLabel: "CONNECT", title: "Structure live information", description: "Connect the required sensors, systems and data sources through an accountable telemetry architecture." },
    { number: "03", technicalLabel: "SYNCHRONIZE", title: "Relate data to the model", description: "Map asset state and operational events into a clear, current digital view." },
    { number: "04", technicalLabel: "OPTIMIZE", title: "Apply intelligence in context", description: "Use analytics, prediction and simulation to support defined operational decisions and improvement." },
  ],
  relatedSolutions: [
    { family: "solution", slug: "digital-twins", title: "Digital Twins", description: "Synchronized operational representations built around physical assets and live data." },
    { family: "solution", slug: "intelligent-operations", title: "Intelligent Operations", description: "Operational data, analytics and workflows connected for better decisions." },
    { family: "solution", slug: "smart-facilities", title: "Smart Facilities", description: "Connected facility systems with contextual monitoring and control." },
  ],
  relevantIndustries: [
    { family: "industry", slug: "energy-oil-gas", title: "Energy & Oil & Gas", description: "Asset-intensive environments requiring connected operational awareness." },
    { family: "industry", slug: "manufacturing-industrial", title: "Manufacturing & Industrial", description: "Production assets, process visibility and condition intelligence." },
    { family: "industry", slug: "real-estate-smart-cities", title: "Real Estate & Smart Cities", description: "Buildings and infrastructure represented as connected operating systems." },
    { family: "industry", slug: "logistics-warehousing", title: "Logistics & Warehousing", description: "Facilities, equipment and operational flows connected through live data." },
  ],
  finalCta: {
    marker: "CAPABILITY / NEXT STEP",
    title: "Make physical operations visible, connected and intelligible.",
    description:
      "Start with the asset, operating questions and available data. DDMSS can help define a useful digital-twin system.",
    action: { label: "Discuss This Capability", href: "/contact" },
  },
};

export const capabilityPages: readonly CapabilityPageContent[] = [
  digitalTransformationGovernance,
  aiDataIntelligence,
  softwareDigitalProducts,
  smartInfrastructureIot,
  digitalTwinsIntelligentOperations,
];

export function getCapabilityPage(slug: string) {
  return capabilityPages.find((capability) => capability.slug === slug);
}
