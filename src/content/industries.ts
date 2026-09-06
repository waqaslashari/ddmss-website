import type { IndustryVisualKey } from "@/types/content";
import type {
  ContentReference,
  FinalCtaContent,
  IndustryPageContent,
  InternalIndexContent,
} from "@/types/internal-pages";

export type IndustryKey = IndustryVisualKey;

export type Industry = {
  key: IndustryKey;
  number: string;
  title: string;
  statement: string;
  technologies: readonly string[];
  href: string;
  environmentLabel: string;
};

export const industries: readonly Industry[] = [
  {
    key: "energy",
    number: "01",
    title: "Energy & Oil & Gas",
    statement:
      "Connected operations, asset intelligence and digital systems for complex energy environments.",
    technologies: [
      "Digital Twins",
      "IoT",
      "AI Analytics",
      "Asset Monitoring",
      "Field Applications",
    ],
    href: "/industries/energy-oil-gas",
    environmentLabel: "Connected energy field and industrial processing environment",
  },
  {
    key: "government",
    number: "02",
    title: "Government & Public Sector",
    statement:
      "Digital services, intelligent workflows and data platforms designed around public-sector operations.",
    technologies: ["Digital Services", "AI", "Data", "Workflow", "Smart Infrastructure"],
    href: "/industries/government-public-sector",
    environmentLabel: "Secure civic infrastructure and connected public-service network",
  },
  {
    key: "smartCities",
    number: "03",
    title: "Real Estate & Smart Cities",
    statement:
      "Connected buildings, mobility and infrastructure designed as one intelligent urban ecosystem.",
    technologies: ["Smart Buildings", "Parking", "EV Charging", "Digital Twins", "Energy"],
    href: "/industries/real-estate-smart-cities",
    environmentLabel: "Connected urban district with intelligent buildings and infrastructure",
  },
  {
    key: "mobility",
    number: "04",
    title: "Mobility & Transportation",
    statement:
      "Connected mobility platforms that integrate vehicles, access, parking, charging and operational data.",
    technologies: ["Smart Parking", "EV", "Fleet", "Access", "Mobility Data"],
    href: "/industries/mobility-transportation",
    environmentLabel: "Connected transport corridor and intelligent mobility network",
  },
  {
    key: "manufacturing",
    number: "05",
    title: "Manufacturing & Industrial",
    statement:
      "Industrial intelligence connecting equipment, production, maintenance and operational decision-making.",
    technologies: ["Industrial IoT", "Automation", "Predictive", "Monitoring", "Digital Twin"],
    href: "/industries/manufacturing-industrial",
    environmentLabel: "Connected production line and industrial automation environment",
  },
  {
    key: "logistics",
    number: "06",
    title: "Logistics & Warehousing",
    statement:
      "Digital systems connecting warehouses, yards, assets, access and logistics operations.",
    technologies: ["Asset Tracking", "Yard Management", "Fleet", "Smart Access", "Analytics"],
    href: "/industries/logistics-warehousing",
    environmentLabel: "Intelligent warehouse, yard and logistics flow environment",
  },
] as const;

export const industriesIndexContent: InternalIndexContent = {
  family: "industry",
  seo: {
    title: "Industries",
    description:
      "Explore how DDMSS applies AI, data, software and connected infrastructure across energy, government, smart cities, mobility, manufacturing and logistics.",
  },
  hero: {
    marker: "INDUSTRIES / 00",
    title: "Technology Designed Around the Environment.",
    introduction:
      "Different industries require different systems, workflows, infrastructure and operational intelligence. DDMSS applies a common technology foundation around the realities of each operating environment.",
    technicalLine: "ENVIRONMENT · SYSTEMS · DATA · OPERATIONS · INTELLIGENCE",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries" }],
  },
  items: industries.map((industry) => ({
    number: industry.number,
    title: industry.title,
    description: industry.statement,
    href: industry.href,
    tags: industry.technologies,
    visualKey: industry.key,
    actionLabel: "Explore Industry",
  })),
  finalCta: {
    marker: "INDUSTRIES / NEXT STEP",
    title: "Design technology around the operating environment.",
    description:
      "Discuss the systems, workflows, infrastructure and operational priorities that shape your industry challenge.",
    action: { label: "Discuss Your Industry Challenge", href: "/contact" },
  },
};

const capabilities = {
  transformation: {
    family: "capability",
    slug: "digital-transformation-governance",
    title: "Digital Transformation & Governance",
    description: "Strategy, governance and delivery models shaped around operational change.",
  },
  intelligence: {
    family: "capability",
    slug: "ai-data-intelligence",
    title: "AI & Data Intelligence",
    description: "Trusted data, analytics and governed intelligence for practical decisions.",
  },
  software: {
    family: "capability",
    slug: "software-digital-products",
    title: "Software & Digital Products",
    description: "Applications, platforms, portals and APIs engineered around users and operations.",
  },
  connected: {
    family: "capability",
    slug: "smart-infrastructure-iot",
    title: "Smart Infrastructure & IoT",
    description: "Devices, gateways and physical infrastructure connected to digital platforms.",
  },
  twins: {
    family: "capability",
    slug: "digital-twins-intelligent-operations",
    title: "Digital Twins & Intelligent Operations",
    description: "Synchronized assets, operational context and intelligent action.",
  },
} as const satisfies Record<string, ContentReference>;

const solutions = {
  parking: {
    family: "solution",
    slug: "smart-parking",
    title: "Smart Parking",
    description: "Connected access, availability, payments and parking operations.",
  },
  charging: {
    family: "solution",
    slug: "ev-charging",
    title: "EV Charging",
    description: "Driver, charger, payment and operator systems for managed charging networks.",
  },
  twins: {
    family: "solution",
    slug: "digital-twins",
    title: "Digital Twins",
    description: "Operational representations connecting physical assets to data and intelligence.",
  },
  operations: {
    family: "solution",
    slug: "intelligent-operations",
    title: "Intelligent Operations",
    description: "Connected systems, data, analytics and automation for operational visibility.",
  },
  facilities: {
    family: "solution",
    slug: "smart-facilities",
    title: "Smart Facilities",
    description: "Integrated building, access, mobility, energy and facility operations.",
  },
  enterpriseAi: {
    family: "solution",
    slug: "ai-powered-enterprise",
    title: "AI-Powered Enterprise",
    description: "Governed assistants, agents and intelligence grounded in enterprise context.",
  },
} as const satisfies Record<string, ContentReference>;

const work = {
  parking: {
    family: "work",
    slug: "smart-parking-ecosystem",
    title: "Smart Parking Ecosystem",
    description: "Connected parking access, services and operational management.",
  },
  charging: {
    family: "work",
    slug: "ev-charging-platform",
    title: "EV Charging Platform",
    description: "Driver, charger, payment and operator platform architecture.",
  },
  industrial: {
    family: "work",
    slug: "industrial-digital-operations",
    title: "Industrial Digital Operations",
    description: "Asset telemetry, digital representation and operational intelligence.",
  },
} as const satisfies Record<string, ContentReference>;

const industryCta: FinalCtaContent = {
  marker: "INDUSTRY / NEXT STEP",
  title: "Design technology around your operating environment.",
  description:
    "Bring the operational context, systems and delivery priorities behind your challenge into one focused conversation.",
  action: { label: "Discuss Your Industry Challenge", href: "/contact" },
};

const energy: IndustryPageContent = {
  family: "industry",
  slug: "energy-oil-gas",
  visualKey: "energy",
  seo: {
    title: "Energy & Oil & Gas Technology",
    description:
      "Explore how DDMSS applies connected operations, digital twins, AI, data and software across complex energy and oil and gas environments.",
  },
  hero: {
    marker: "INDUSTRY / 01",
    title: "Energy & Oil & Gas",
    introduction:
      "Connected operations, asset intelligence and digital systems for complex energy environments.",
    technicalLine: "FIELD · ASSETS · INSPECTION · DATA · INTELLIGENCE",
    tags: ["Digital Twin", "IoT", "AI", "Asset Monitoring"],
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Energy & Oil & Gas" }],
    action: { label: "Discuss Your Industry Challenge", href: "/contact" },
  },
  operationalContext:
    "Energy operations bring industrial facilities, field assets, equipment, inspection and maintenance activities together across safety-critical workflows. Useful digital systems must connect operational data to the asset and field context in which decisions are made.",
  challenges: [
    { title: "Fragmented Operational Data", description: "Information is distributed across equipment, reports, enterprise platforms and field systems." },
    { title: "Asset Visibility", description: "Teams need one contextual view of asset state, history, condition and performance." },
    { title: "Field / Office Disconnect", description: "Operational information can move slowly between physical sites and management systems." },
    { title: "Inspection & Monitoring", description: "Large volumes of asset, inspection and condition information require consistent handling." },
    { title: "Decision Support", description: "Operational information must become timely, accountable guidance for the people responsible for action." },
  ],
  capabilities: [capabilities.twins, capabilities.intelligence, capabilities.connected, capabilities.software, capabilities.transformation],
  solutions: [solutions.twins, solutions.operations, solutions.enterpriseAi],
  architecture:
    "Field assets, sensors, operational systems and inspection information converge into a shared data layer before supporting synchronized monitoring, analytics and accountable operational decisions.",
  application: [
    { number: "01", title: "Understand the operation", description: "Map the facility, field and safety context around the required outcome." },
    { number: "02", title: "Identify asset information", description: "Locate equipment, inspection, maintenance and operational data sources." },
    { number: "03", title: "Architect connections", description: "Define secure paths between field systems, platforms and operational users." },
    { number: "04", title: "Engineer the system", description: "Build the monitoring, twin, data or workflow capabilities required." },
    { number: "05", title: "Integrate operations", description: "Connect the solution to accountable field and office processes." },
    { number: "06", title: "Improve decisions", description: "Use operational evidence to refine visibility, analysis and action." },
  ],
  relatedWork: [work.industrial],
  finalCta: industryCta,
};

const government: IndustryPageContent = {
  family: "industry",
  slug: "government-public-sector",
  visualKey: "government",
  seo: {
    title: "Government & Public Sector Technology",
    description:
      "Explore how DDMSS applies digital services, governed AI, intelligent workflows and connected infrastructure in public-sector environments.",
  },
  hero: {
    marker: "INDUSTRY / 02",
    title: "Government & Public Sector",
    introduction:
      "Digital services, intelligent workflows and connected infrastructure designed around public-sector operations.",
    technicalLine: "SERVICE · WORKFLOW · DATA · GOVERNANCE · INFRASTRUCTURE",
    tags: ["Digital Services", "Workflow", "Data", "Governance"],
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Government & Public Sector" }],
    action: { label: "Discuss Your Industry Challenge", href: "/contact" },
  },
  operationalContext:
    "Public-sector services connect citizen and user interactions to internal workflows, approvals, documents, departmental systems and public infrastructure. Technology must make those journeys clearer while preserving accountability, access control and policy requirements.",
  challenges: [
    { title: "Digital Service Delivery", description: "Digital journeys must reflect real service requirements and remain clear to the people using them." },
    { title: "Workflow Complexity", description: "Processes may cross departments, systems, responsibilities and multiple approval layers." },
    { title: "Data Fragmentation", description: "Information often exists across disconnected applications and document repositories." },
    { title: "Governance", description: "Technology adoption must include accountability, appropriate access controls and policy." },
    { title: "Infrastructure Integration", description: "Physical public infrastructure increasingly needs to interact with digital services and operations." },
  ],
  capabilities: [capabilities.transformation, capabilities.software, capabilities.intelligence, capabilities.connected],
  solutions: [solutions.enterpriseAi, solutions.parking, solutions.facilities, solutions.operations],
  architecture:
    "A digital service connects users to governed workflows, approvals and trusted systems. Data and intelligence support the process while governance spans every layer from interaction to service delivery.",
  application: [
    { number: "01", title: "Understand the service", description: "Define the user need, public outcome and operational responsibilities." },
    { number: "02", title: "Map workflow and policy", description: "Trace approvals, documents, access rules and accountable decision points." },
    { number: "03", title: "Connect trusted systems", description: "Design integration across departments, data and relevant infrastructure." },
    { number: "04", title: "Engineer the journey", description: "Build accessible services and internal tools around the full process." },
    { number: "05", title: "Embed governance", description: "Make controls, oversight and traceability visible throughout delivery." },
    { number: "06", title: "Improve service flow", description: "Use evidence from real operations to refine experience and execution." },
  ],
  relatedWork: [],
  finalCta: industryCta,
};

const smartCities: IndustryPageContent = {
  family: "industry",
  slug: "real-estate-smart-cities",
  visualKey: "smartCities",
  seo: {
    title: "Real Estate & Smart Cities Technology",
    description:
      "Explore how DDMSS connects buildings, mobility, energy, assets and digital services across real estate and smart-city environments.",
  },
  hero: {
    marker: "INDUSTRY / 03",
    title: "Real Estate & Smart Cities",
    introduction:
      "Connect buildings, mobility, energy and digital services into intelligent urban environments.",
    technicalLine: "BUILDINGS · ACCESS · MOBILITY · ENERGY · OPERATIONS",
    tags: ["Smart Infrastructure", "Digital Twin", "Mobility", "Energy"],
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Real Estate & Smart Cities" }],
    action: { label: "Discuss Your Industry Challenge", href: "/contact" },
  },
  operationalContext:
    "Residential and commercial developments combine buildings, parking, access, EV charging, energy, occupancy, assets and mobility services in one lived environment. The technology should connect those systems without losing the needs of occupants, visitors and facility operators.",
  challenges: [
    { title: "Disconnected Building Systems", description: "Access, facility, mobility, energy and asset systems often operate independently." },
    { title: "Mobility Experience", description: "Parking, access and EV charging can create fragmented journeys for users and operators." },
    { title: "Operational Visibility", description: "Facility teams need clearer information across assets, services and locations." },
    { title: "Energy & Resource Awareness", description: "Connected data can improve visibility into consumption and operating conditions." },
    { title: "User Experience", description: "Physical and digital interactions should work together as one coherent environment." },
  ],
  capabilities: [capabilities.connected, capabilities.software, capabilities.twins, capabilities.intelligence],
  solutions: [solutions.facilities, solutions.parking, solutions.charging, solutions.twins],
  architecture:
    "Building, access, parking, charging, energy, asset and occupancy systems converge through a facility platform that coordinates data, digital services and operational workflows across the wider development.",
  application: [
    { number: "01", title: "Understand the place", description: "Map the development, its users, operators and physical service journeys." },
    { number: "02", title: "Identify urban systems", description: "Define the building, mobility, energy and asset layers that must cooperate." },
    { number: "03", title: "Design shared services", description: "Architect common identity, data, integration and operational foundations." },
    { number: "04", title: "Engineer experiences", description: "Build interfaces and infrastructure around occupants and facility teams." },
    { number: "05", title: "Integrate the environment", description: "Connect systems without obscuring ownership or operational responsibility." },
    { number: "06", title: "Optimize the district", description: "Use operating information to improve services, resources and future decisions." },
  ],
  relatedWork: [work.parking, work.charging],
  finalCta: industryCta,
};

const mobility: IndustryPageContent = {
  family: "industry",
  slug: "mobility-transportation",
  visualKey: "mobility",
  seo: {
    title: "Mobility & Transportation Technology",
    description:
      "Explore how DDMSS connects vehicles, parking, access, EV charging, fleet systems and operational data across mobility environments.",
  },
  hero: {
    marker: "INDUSTRY / 04",
    title: "Mobility & Transportation",
    introduction:
      "Connected mobility systems integrating vehicles, parking, access, charging and operational data.",
    technicalLine: "USER · VEHICLE · ACCESS · CHARGING · OPERATIONS",
    tags: ["Smart Parking", "EV Charging", "Fleet", "Mobility Data"],
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Mobility & Transportation" }],
    action: { label: "Discuss Your Industry Challenge", href: "/contact" },
  },
  operationalContext:
    "Mobility environments connect parking, vehicles, charging, access, fleet activity, customer journeys and distributed infrastructure. A useful system must coordinate the physical journey with the digital services and operational information behind it.",
  challenges: [
    { title: "Fragmented Mobility Services", description: "Parking, charging, access and fleet experiences are frequently managed as separate systems." },
    { title: "Infrastructure Connectivity", description: "Physical mobility assets need dependable digital connectivity and clear operating status." },
    { title: "User Experience", description: "Drivers, passengers and operators need consistent journeys across connected services." },
    { title: "Operational Visibility", description: "Operators need timely status, utilization and event information across infrastructure." },
    { title: "Data Integration", description: "Mobility information often spans applications, devices, platforms and service providers." },
  ],
  capabilities: [capabilities.connected, capabilities.software, capabilities.intelligence],
  solutions: [solutions.parking, solutions.charging, solutions.facilities, solutions.operations],
  architecture:
    "The user and vehicle journey connects parking, access, charging, fleet devices and service interfaces through a shared mobility platform, creating one operational data and analytics layer.",
  application: [
    { number: "01", title: "Trace the journey", description: "Understand how users, vehicles and operators move through the service." },
    { number: "02", title: "Map infrastructure", description: "Identify parking, access, charging, fleet and connectivity requirements." },
    { number: "03", title: "Architect the platform", description: "Define service, data, payment and operational integration boundaries." },
    { number: "04", title: "Engineer touchpoints", description: "Build clear user experiences and operator tools around physical movement." },
    { number: "05", title: "Connect mobility assets", description: "Integrate field infrastructure into one manageable operating flow." },
    { number: "06", title: "Optimize operations", description: "Use utilization and event information to guide service improvement." },
  ],
  relatedWork: [work.parking, work.charging],
  finalCta: industryCta,
};

const manufacturing: IndustryPageContent = {
  family: "industry",
  slug: "manufacturing-industrial",
  visualKey: "manufacturing",
  seo: {
    title: "Manufacturing & Industrial Technology",
    description:
      "Explore how DDMSS connects manufacturing equipment, production, maintenance and operational data through intelligent industrial systems.",
  },
  hero: {
    marker: "INDUSTRY / 05",
    title: "Manufacturing & Industrial",
    introduction:
      "Connect equipment, production, maintenance and operational data into intelligent industrial systems.",
    technicalLine: "MACHINES · PRODUCTION · EDGE · MONITORING · ACTION",
    tags: ["Industrial IoT", "Automation", "Digital Twin", "Analytics"],
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Manufacturing & Industrial" }],
    action: { label: "Discuss Your Industry Challenge", href: "/contact" },
  },
  operationalContext:
    "Manufacturing operations bring equipment, production lines, quality processes, maintenance activity, plant data and enterprise systems together. Technology has to respect production continuity while making machine-level information useful across operational and management decisions.",
  challenges: [
    { title: "Equipment Visibility", description: "Operational information can remain isolated at machine, line or control-system level." },
    { title: "Production Information", description: "Production, inspection, quality and maintenance data may not be contextualized together." },
    { title: "Downtime / Condition Awareness", description: "Teams need clearer visibility into equipment state and operational patterns." },
    { title: "Integration", description: "Industrial equipment and enterprise software frequently operate as separate environments." },
    { title: "Decision Support", description: "Data should support production, maintenance and management choices without disrupting operations." },
  ],
  capabilities: [capabilities.connected, capabilities.twins, capabilities.intelligence, capabilities.software],
  solutions: [solutions.operations, solutions.twins, solutions.enterpriseAi],
  architecture:
    "Machines and production systems connect through sensors and edge infrastructure to an operational platform, where monitoring and analytics support maintenance and production action.",
  application: [
    { number: "01", title: "Understand production", description: "Define line, equipment, quality and maintenance operating priorities." },
    { number: "02", title: "Identify machine data", description: "Map signals, control systems, records and enterprise information." },
    { number: "03", title: "Design the edge", description: "Architect dependable connectivity between plant equipment and platforms." },
    { number: "04", title: "Engineer operations", description: "Build monitoring, data, twin and workflow components around the plant." },
    { number: "05", title: "Integrate decisions", description: "Connect insight to maintenance, quality and production responsibilities." },
    { number: "06", title: "Optimize carefully", description: "Use operating evidence to improve visibility and performance over time." },
  ],
  relatedWork: [work.industrial],
  finalCta: industryCta,
};

const logistics: IndustryPageContent = {
  family: "industry",
  slug: "logistics-warehousing",
  visualKey: "logistics",
  seo: {
    title: "Logistics & Warehousing Technology",
    description:
      "Explore how DDMSS connects warehouses, yards, fleet activity, assets, access and operational workflows through integrated digital systems.",
  },
  hero: {
    marker: "INDUSTRY / 06",
    title: "Logistics & Warehousing",
    introduction:
      "Connect warehouses, yards, assets, access and fleet operations through integrated digital systems.",
    technicalLine: "WAREHOUSE · YARD · ACCESS · FLEET · TRACKING",
    tags: ["Asset Tracking", "Smart Access", "Fleet", "Analytics"],
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Logistics & Warehousing" }],
    action: { label: "Discuss Your Industry Challenge", href: "/contact" },
  },
  operationalContext:
    "Logistics environments coordinate warehouses, yards, loading, site access, fleet activity, assets, tracking and inventory movement. Digital systems must preserve the flow of physical operations while connecting teams and information across the site and wider network.",
  challenges: [
    { title: "Yard Visibility", description: "Teams need a clearer understanding of vehicle, loading and movement activity." },
    { title: "Asset Tracking", description: "Assets and equipment need location information connected to their operating context." },
    { title: "Access", description: "Vehicle, person and site-entry workflows must work with yard and warehouse operations." },
    { title: "Operational Coordination", description: "Warehouse and transport activity depends on multiple teams, handoffs and systems." },
    { title: "Data Fragmentation", description: "Operational information may be spread across fleet, warehouse and enterprise platforms." },
  ],
  capabilities: [capabilities.connected, capabilities.software, capabilities.intelligence, capabilities.transformation],
  solutions: [solutions.operations, solutions.parking, solutions.enterpriseAi],
  architecture:
    "Vehicles and assets pass through smart access into connected yard and warehouse operations, where loading, tracking, fleet and asset information converge in an operational platform and accountable workflow layer.",
  application: [
    { number: "01", title: "Understand movement", description: "Map vehicle, asset, loading and inventory journeys across the site." },
    { number: "02", title: "Identify control points", description: "Define access, tracking, handoff and operational information needs." },
    { number: "03", title: "Architect the flow", description: "Connect yard, warehouse, fleet and enterprise system boundaries." },
    { number: "04", title: "Engineer operations", description: "Build interfaces, tracking and platform capabilities around real activity." },
    { number: "05", title: "Integrate teams", description: "Route information into the workflows responsible for coordinated action." },
    { number: "06", title: "Optimize throughput", description: "Use operational evidence to reduce friction and improve visibility." },
  ],
  relatedWork: [],
  finalCta: industryCta,
};

export const industryPages: readonly IndustryPageContent[] = [
  energy,
  government,
  smartCities,
  mobility,
  manufacturing,
  logistics,
];

export function getIndustryPage(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}
