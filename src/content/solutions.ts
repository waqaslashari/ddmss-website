import type { SolutionSummary } from "@/types/content";
import type {
  ContentReference,
  InternalIndexContent,
  SolutionPageContent,
} from "@/types/internal-pages";

export const solutionSummaries: readonly SolutionSummary[] = [
  {
    key: "smartParking",
    number: "01",
    slug: "smart-parking",
    title: "Smart Parking",
    description:
      "Connected access, parking management, payments, availability and operational analytics in one integrated ecosystem.",
    architectureLine: "USER → ACCESS → PARKING ↔ SERVICES → OPERATIONS",
    tags: ["Access", "Parking", "Payments", "Analytics"],
    href: "/solutions/smart-parking",
  },
  {
    key: "evCharging",
    number: "02",
    slug: "ev-charging",
    title: "EV Charging",
    description:
      "Driver applications, charging infrastructure, payments, monitoring and operator platforms for connected charging networks.",
    architectureLine: "DRIVER → CHARGER → PLATFORM ↔ PAYMENTS / APIs",
    tags: ["Driver App", "Charger", "Payments", "CMS"],
    href: "/solutions/ev-charging",
  },
  {
    key: "digitalTwins",
    number: "03",
    slug: "digital-twins",
    title: "Digital Twins",
    description:
      "Live digital representations of assets, facilities and infrastructure connected to operational data and intelligence.",
    architectureLine: "PHYSICAL ASSET → DATA → DIGITAL TWIN → INTELLIGENCE",
    tags: ["Asset", "Telemetry", "Twin", "Intelligence"],
    href: "/solutions/digital-twins",
  },
  {
    key: "intelligentOperations",
    number: "04",
    slug: "intelligent-operations",
    title: "Intelligent Operations",
    description:
      "Connected operational systems combining IoT, data, analytics, AI and automation to improve visibility and decision-making.",
    architectureLine: "SYSTEMS + DEVICES + DATA → INTELLIGENCE → ACTION",
    tags: ["IoT", "Data", "AI", "Automation"],
    href: "/solutions/intelligent-operations",
  },
  {
    key: "smartFacilities",
    number: "05",
    slug: "smart-facilities",
    title: "Smart Facilities",
    description:
      "Integrated buildings combining access, parking, EV charging, energy, occupancy, assets and facility intelligence.",
    architectureLine: "BUILDING SYSTEMS → FACILITY PLATFORM → OPERATIONS",
    tags: ["Buildings", "Access", "Energy", "Operations"],
    href: "/solutions/smart-facilities",
  },
  {
    key: "aiPoweredEnterprise",
    number: "06",
    slug: "ai-powered-enterprise",
    title: "AI-Powered Enterprise",
    description:
      "Governed AI assistants, agents, document intelligence and workflow automation grounded in enterprise knowledge and data.",
    architectureLine: "TRUSTED CONTEXT → GOVERNED AI → CONTROLLED ACTION",
    tags: ["Knowledge", "Assistants", "Agents", "Governance"],
    href: "/solutions/ai-powered-enterprise",
  },
] as const;

export const featuredSolutionSummaries = solutionSummaries.filter(
  (solution) => solution.key !== "aiPoweredEnterprise",
);

export const solutionsIndexContent: InternalIndexContent = {
  family: "solution",
  seo: {
    title: "Digital & Connected Solutions",
    description:
      "Explore DDMSS smart parking, EV charging, digital twin, intelligent operations, smart facility and AI-powered enterprise solutions.",
  },
  hero: {
    marker: "SOLUTIONS / 00",
    title: "Technology Built for the Real World.",
    introduction:
      "DDMSS combines software, connected infrastructure, data and intelligence into complete operational solutions.",
    technicalLine: "PHYSICAL SYSTEMS · SOFTWARE · DATA · INTELLIGENCE",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Solutions" }],
  },
  items: solutionSummaries.map((solution) => ({
    number: solution.number,
    title: solution.title,
    description: solution.description,
    architectureLine: solution.architectureLine,
    href: solution.href,
    tags: solution.tags,
    visualKey: solution.key,
    actionLabel: "Explore Solution",
  })),
  finalCta: {
    marker: "SOLUTIONS / NEXT STEP",
    title: "Connect the complete operating system.",
    description:
      "Bring the physical infrastructure, software, data and operational workflows behind your objective into one coherent solution.",
    action: { label: "Start a Conversation", href: "/contact" },
  },
};

const capabilities = {
  transformation: {
    family: "capability",
    slug: "digital-transformation-governance",
    title: "Digital Transformation & Governance",
    description: "Enterprise direction, operating models and practical transformation roadmaps.",
  },
  software: {
    family: "capability",
    slug: "software-digital-products",
    title: "Software & Digital Products",
    description: "Applications, platforms, APIs and operator experiences.",
  },
  connected: {
    family: "capability",
    slug: "smart-infrastructure-iot",
    title: "Smart Infrastructure & IoT",
    description: "Devices, gateways and infrastructure connected to digital systems.",
  },
  intelligence: {
    family: "capability",
    slug: "ai-data-intelligence",
    title: "AI & Data Intelligence",
    description: "Data platforms, analytics and responsible decision support.",
  },
  twins: {
    family: "capability",
    slug: "digital-twins-intelligent-operations",
    title: "Digital Twins & Intelligent Operations",
    description: "Synchronized assets, operational context and intelligent action.",
  },
} as const satisfies Record<string, ContentReference>;

const industries = {
  energy: {
    family: "industry",
    slug: "energy-oil-gas",
    title: "Energy & Oil & Gas",
    description: "Connected operations and asset-intensive environments.",
  },
  government: {
    family: "industry",
    slug: "government-public-sector",
    title: "Government & Public Sector",
    description: "Integrated public infrastructure and digital services.",
  },
  realEstate: {
    family: "industry",
    slug: "real-estate-smart-cities",
    title: "Real Estate & Smart Cities",
    description: "Buildings, mobility and urban infrastructure as connected systems.",
  },
  mobility: {
    family: "industry",
    slug: "mobility-transportation",
    title: "Mobility & Transportation",
    description: "Access, movement, charging and transport operations.",
  },
  manufacturing: {
    family: "industry",
    slug: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    description: "Production assets, equipment and operational workflows.",
  },
  logistics: {
    family: "industry",
    slug: "logistics-warehousing",
    title: "Logistics & Warehousing",
    description: "Warehouses, yards, assets and logistics operations.",
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

const sharedCta = {
  marker: "SOLUTION / NEXT STEP",
  title: "Design the system around the operation.",
  description:
    "Discuss the operational environment, connected components and delivery path required for your solution.",
  action: { label: "Discuss This Solution", href: "/contact" },
} as const;

const smartParking: SolutionPageContent = {
  family: "solution",
  slug: "smart-parking",
  visualKey: "smartParking",
  seo: {
    title: "Smart Parking Solution",
    description:
      "Explore the DDMSS connected smart parking architecture for access, availability, payments, EV charging and operational management.",
  },
  hero: {
    marker: "SOLUTION / 01",
    title: "Smart Parking",
    introduction:
      "Connect parking access, availability, payments, EV charging and operational management into one intelligent parking ecosystem.",
    technicalLine: "ACCESS · AVAILABILITY · PAYMENTS · CHARGING · OPERATIONS",
    tags: ["Connected Access", "Parking Operations", "Digital Payments", "Analytics"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Smart Parking" },
    ],
    action: { label: "Discuss This Solution", href: "/contact" },
  },
  challenge:
    "Parking environments are often fragmented across physical access, user-facing services and operational tools. That fragmentation makes availability harder to understand, experiences less consistent and infrastructure more difficult to coordinate.",
  challengeSystems: [
    "Barriers",
    "Access control",
    "Occupancy",
    "Payments",
    "EV charging",
    "Operator tools",
    "Customer experience",
  ],
  architecture:
    "A shared operations layer connects each parking session to access events, space or zone information, payments and charging services, creating one coherent flow for users and operators.",
  coreComponents: [
    { title: "Access & Entry", description: "Barrier control, authorized access and coordinated entry and exit workflows." },
    { title: "Parking Availability", description: "Space and zone visibility supported by occupancy information from the parking environment." },
    { title: "User Experience", description: "Mobile or web interfaces supporting discovery, access and parking interaction." },
    { title: "Payments", description: "Digital transaction flows associated with parking sessions and configured service rules." },
    { title: "EV Charging", description: "Charging infrastructure integrated into the parking journey where it is required." },
    { title: "Operations Platform", description: "Monitoring and configuration for devices, events, services and operational analytics." },
  ],
  operatingFlow: [
    { number: "01", title: "Identify", description: "A user, vehicle or credential initiates an access or parking journey." },
    { number: "02", title: "Authorize", description: "Access rules coordinate entry while the system creates the operational event." },
    { number: "03", title: "Use", description: "Availability, parking and optional charging services support the active session." },
    { number: "04", title: "Transact", description: "Applicable payment logic connects to the parking session and exit workflow." },
    { number: "05", title: "Operate", description: "Operators monitor infrastructure, events and information through one platform." },
  ],
  benefits: [
    { title: "Connected operations", description: "Bring parking infrastructure and digital services into one operating view." },
    { title: "Consistent journeys", description: "Coordinate access, availability and transactions around the parking session." },
    { title: "Clearer visibility", description: "Make operational events and infrastructure status easier to understand." },
    { title: "Scalable architecture", description: "Add zones, services and integrations through a structured platform model." },
  ],
  relatedCapabilities: [capabilities.software, capabilities.connected, capabilities.intelligence],
  relatedIndustries: [industries.realEstate, industries.mobility, industries.government],
  relatedWork: [work.parking],
  finalCta: sharedCta,
};

const evCharging: SolutionPageContent = {
  family: "solution",
  slug: "ev-charging",
  visualKey: "evCharging",
  seo: {
    title: "EV Charging Solution",
    description:
      "Explore the DDMSS EV charging architecture connecting drivers, chargers, payments, APIs and operator systems.",
  },
  hero: {
    marker: "SOLUTION / 02",
    title: "EV Charging",
    introduction:
      "Connect drivers, chargers, payments and operator systems into a managed EV charging network.",
    technicalLine: "DRIVER · CHARGER · PLATFORM · PAYMENTS · OPERATIONS",
    tags: ["Driver Experience", "Charging Network", "Payments", "Operator CMS"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "EV Charging" },
    ],
    action: { label: "Discuss This Solution", href: "/contact" },
  },
  challenge:
    "An EV charging experience depends on more than charger hardware. Drivers, communications, sessions, tariffs, payment services, operator monitoring and maintenance status must work together as one managed network.",
  challengeSystems: [
    "Driver experience",
    "Charging hardware",
    "Communications",
    "Payments",
    "Tariffs",
    "Monitoring",
    "Maintenance status",
    "Integrations",
  ],
  architecture:
    "A driver starts a session through an application or QR journey. The charger communicates with the charging platform, which coordinates session rules, transactions, integrations and operator oversight.",
  coreComponents: [
    { title: "Driver Experience", description: "Discovery, QR or application-based session initiation and charging interaction." },
    { title: "Charging Infrastructure", description: "Connected charger hardware with communication and operational status." },
    { title: "Charging Management", description: "Session control, tariff configuration and charging-network operations." },
    { title: "Payments", description: "Transaction processing connected to charging sessions and configured tariffs." },
    { title: "Operator Platform", description: "Monitoring for chargers, sessions, faults, status and usage information." },
    { title: "System Integration", description: "APIs connecting charging infrastructure to mobility or enterprise platforms." },
  ],
  operatingFlow: [
    { number: "01", title: "Discover", description: "The driver identifies an available charger through the relevant interface." },
    { number: "02", title: "Initiate", description: "An application, QR or approved access method starts the charging journey." },
    { number: "03", title: "Authorize", description: "The platform validates the charger, session rules and payment pathway." },
    { number: "04", title: "Charge", description: "The charger and platform exchange session status and operational events." },
    { number: "05", title: "Manage", description: "Operators monitor infrastructure, sessions, exceptions and integrations." },
  ],
  benefits: [
    { title: "Managed infrastructure", description: "Connect charger status and session information to one operator environment." },
    { title: "Coherent driver flow", description: "Coordinate discovery, initiation, charging and payment around one journey." },
    { title: "Integration readiness", description: "Expose charging services to wider mobility and enterprise systems through APIs." },
    { title: "Network visibility", description: "Give operators clearer access to chargers, sessions and exceptions." },
  ],
  relatedCapabilities: [capabilities.software, capabilities.connected, capabilities.intelligence],
  relatedIndustries: [industries.mobility, industries.realEstate, industries.government],
  relatedWork: [work.charging],
  finalCta: sharedCta,
};

const digitalTwins: SolutionPageContent = {
  family: "solution",
  slug: "digital-twins",
  visualKey: "digitalTwins",
  seo: {
    title: "Digital Twin Solutions",
    description:
      "Explore how DDMSS connects physical assets, telemetry, operational systems and intelligence through digital twin solutions.",
  },
  hero: {
    marker: "SOLUTION / 03",
    title: "Digital Twins",
    introduction:
      "Connect physical assets and operational data to synchronized digital representations for monitoring, analysis and intelligent decision support.",
    technicalLine: "PHYSICAL ASSET · TELEMETRY · DIGITAL MODEL · INTELLIGENCE",
    tags: ["Asset Model", "Telemetry", "Operational Context", "Decision Support"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Digital Twins" },
    ],
    action: { label: "Discuss This Solution", href: "/contact" },
  },
  challenge:
    "The information needed to understand a physical operation is often distributed across equipment systems, maintenance records, inspections, databases, drawings and isolated dashboards. A twin establishes shared operational context around the asset itself.",
  challengeSystems: [
    "Sensors",
    "Equipment systems",
    "Maintenance systems",
    "Inspections",
    "Operational databases",
    "Drawings and models",
    "Isolated dashboards",
  ],
  architecture:
    "Asset models and source-system data are connected through an integration layer, then synchronized into an operational representation that supports visualization, analytics and governed decision support.",
  coreComponents: [
    { title: "Physical Asset Model", description: "A structured representation of the real asset, facility or operating environment." },
    { title: "Telemetry", description: "Live or periodic operational information from equipment and connected systems." },
    { title: "Data Integration", description: "Pipelines and interfaces connecting source systems into the twin environment." },
    { title: "Operational Visualization", description: "Asset status, condition and contextual information organized around the model." },
    { title: "Analytics", description: "Patterns, trends, conditions and performance interpreted from operational information." },
    { title: "Intelligence", description: "Predictive or decision-support models applied where they provide useful guidance." },
  ],
  operatingFlow: [
    { number: "01", title: "Represent", description: "Define the physical asset, relationships and operational context." },
    { number: "02", title: "Connect", description: "Integrate telemetry, records and relevant source-system information." },
    { number: "03", title: "Synchronize", description: "Align current operational information with the digital representation." },
    { number: "04", title: "Interpret", description: "Expose conditions, patterns and relationships through visualization and analytics." },
    { number: "05", title: "Support action", description: "Provide governed insight to the people and workflows responsible for decisions." },
  ],
  benefits: [
    { title: "Shared asset context", description: "Bring models, status and operational information into one understandable environment." },
    { title: "Operational visibility", description: "Make current conditions and relevant history easier to access and interpret." },
    { title: "Stronger analysis", description: "Connect asset structure to trends, conditions and decision-support models." },
    { title: "Extensible foundation", description: "Develop the twin as data sources, operational needs and models evolve." },
  ],
  relatedCapabilities: [capabilities.twins, capabilities.intelligence, capabilities.connected],
  relatedIndustries: [industries.energy, industries.manufacturing, industries.realEstate, industries.logistics],
  relatedWork: [work.industrial],
  finalCta: sharedCta,
};

const intelligentOperations: SolutionPageContent = {
  family: "solution",
  slug: "intelligent-operations",
  visualKey: "intelligentOperations",
  seo: {
    title: "Intelligent Operations Solutions",
    description:
      "Explore the DDMSS approach to connecting operational systems, live data, analytics, AI and workflows for intelligent operations.",
  },
  hero: {
    marker: "SOLUTION / 04",
    title: "Intelligent Operations",
    introduction:
      "Connect operational systems, live data, analytics and AI to improve visibility, coordination and decision-making.",
    technicalLine: "SYSTEMS · DEVICES · DATA · ANALYTICS · DECISION · ACTION",
    tags: ["Operational Data", "Monitoring", "Analytics", "AI & Automation"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Intelligent Operations" },
    ],
    action: { label: "Discuss This Solution", href: "/contact" },
  },
  challenge:
    "Operational decisions are often assembled manually from equipment, control systems, spreadsheets, enterprise applications, field teams, dashboards and reports. Intelligent operations connects these sources to the workflows where information is used.",
  challengeSystems: [
    "Equipment",
    "Control systems",
    "Spreadsheets",
    "Enterprise applications",
    "Field teams",
    "Dashboards",
    "Reports",
  ],
  architecture:
    "Multiple operational inputs converge into a shared platform. Analytics and governed AI or rules interpret that information, then connect approved decisions to people, systems and operational workflows.",
  coreComponents: [
    { title: "Operational Data", description: "Relevant equipment, system, enterprise and field information brought together." },
    { title: "Monitoring", description: "Real-time or near-real-time visibility into operations and important exceptions." },
    { title: "Analytics", description: "Trends, performance and operational conditions interpreted in context." },
    { title: "Workflow", description: "Insights connected to reviews, approvals, assignments and operational action." },
    { title: "AI & Decision Support", description: "Governed models providing recommendations, predictions or automation where useful." },
    { title: "Automation", description: "Approved decisions and rules connected into controlled operational workflows." },
  ],
  operatingFlow: [
    { number: "01", title: "Connect inputs", description: "Bring together relevant systems, devices and operational data." },
    { number: "02", title: "Establish visibility", description: "Organize live information, context and exceptions in one platform." },
    { number: "03", title: "Analyze", description: "Use analytics to understand patterns, performance and current conditions." },
    { number: "04", title: "Support decisions", description: "Apply governed AI and rules with appropriate human oversight." },
    { number: "05", title: "Coordinate action", description: "Connect approved decisions to workflows, teams and automation." },
  ],
  benefits: [
    { title: "Unified visibility", description: "Reduce the effort required to understand information across disconnected systems." },
    { title: "Faster information flow", description: "Move relevant conditions and exceptions toward the people who need them." },
    { title: "Stronger decision support", description: "Combine context, analytics and governed intelligence around operational choices." },
    { title: "Connected execution", description: "Link insight to accountable workflows and approved automation." },
  ],
  relatedCapabilities: [capabilities.intelligence, capabilities.connected, capabilities.twins, capabilities.software],
  relatedIndustries: [industries.energy, industries.manufacturing, industries.logistics, industries.government],
  relatedWork: [work.industrial],
  finalCta: sharedCta,
};

const smartFacilities: SolutionPageContent = {
  family: "solution",
  slug: "smart-facilities",
  visualKey: "smartFacilities",
  seo: {
    title: "Smart Facility Solutions",
    description:
      "Explore the DDMSS architecture for connecting buildings, access, parking, energy, EV charging and facility operations.",
  },
  hero: {
    marker: "SOLUTION / 05",
    title: "Smart Facilities",
    introduction:
      "Connect buildings, access, parking, energy, EV charging and operational systems into a unified intelligent facility environment.",
    technicalLine: "BUILDING · ACCESS · PARKING · ENERGY · ASSETS · OPERATIONS",
    tags: ["Building Systems", "Access", "Energy", "Facility Operations"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Smart Facilities" },
    ],
    action: { label: "Discuss This Solution", href: "/contact" },
  },
  challenge:
    "Facilities contain many systems that serve the same people and operating environment but are managed separately. Connecting their information and workflows creates a clearer view of how the building is functioning as a whole.",
  challengeSystems: [
    "Access control",
    "Parking",
    "Energy",
    "HVAC and building systems",
    "EV charging",
    "Occupancy",
    "Assets",
    "Maintenance",
    "Security",
    "Facility platforms",
  ],
  architecture:
    "Building, access, parking, charging, energy and asset systems connect to a facility platform that organizes data, operational events and workflows for facility teams.",
  coreComponents: [
    { title: "Building Systems", description: "Connected operational infrastructure and relevant facility information." },
    { title: "Access", description: "User, visitor, credential and security workflows across the facility." },
    { title: "Parking", description: "Parking access, availability and mobility services integrated with the wider environment." },
    { title: "EV Charging", description: "Connected charging infrastructure coordinated with facility and user systems." },
    { title: "Energy", description: "Monitoring and operational energy information from relevant building systems." },
    { title: "Facility Operations", description: "A centralized view of assets, events, configuration and operational workflows." },
  ],
  operatingFlow: [
    { number: "01", title: "Connect systems", description: "Integrate relevant building, access, mobility, energy and asset sources." },
    { number: "02", title: "Normalize events", description: "Organize system information into a consistent facility operating model." },
    { number: "03", title: "Present context", description: "Give teams a unified view of facility status, events and services." },
    { number: "04", title: "Coordinate workflows", description: "Route information into maintenance, security and operational processes." },
    { number: "05", title: "Improve over time", description: "Use operational data and analytics to guide future configuration and decisions." },
  ],
  benefits: [
    { title: "Centralized management", description: "Bring relevant facility systems and events into one operating environment." },
    { title: "Connected services", description: "Coordinate access, parking, charging and building services around their users." },
    { title: "Clearer information", description: "Make facility conditions, infrastructure and workflows easier to understand." },
    { title: "Scalable integration", description: "Support additional buildings, systems and service layers through a structured architecture." },
  ],
  relatedCapabilities: [capabilities.connected, capabilities.software, capabilities.intelligence, capabilities.twins],
  relatedIndustries: [industries.realEstate, industries.government, industries.manufacturing],
  relatedWork: [work.parking],
  finalCta: sharedCta,
};

const aiPoweredEnterprise: SolutionPageContent = {
  family: "solution",
  slug: "ai-powered-enterprise",
  visualKey: "aiPoweredEnterprise",
  seo: {
    title: "AI-Powered Enterprise Solutions",
    description:
      "Explore governed enterprise AI solutions from DDMSS, connecting trusted knowledge and data to assistants, agents, document intelligence and controlled workflows.",
  },
  hero: {
    marker: "SOLUTION / 06",
    title: "AI-Powered Enterprise",
    introduction:
      "Embed governed AI into enterprise knowledge, decisions and workflows while keeping human oversight visible at every critical step.",
    technicalLine: "KNOWLEDGE · DATA · GOVERNANCE · AI · WORKFLOW · OVERSIGHT",
    tags: ["Enterprise Knowledge", "AI Assistants", "AI Agents", "Governance"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "AI-Powered Enterprise" },
    ],
    action: { label: "Discuss This Solution", href: "/contact" },
  },
  challenge:
    "Enterprise AI creates operational value only when it works with trusted business context, defined access controls and accountable workflows. Without that foundation, isolated experiments struggle to move safely into day-to-day decisions and execution.",
  challengeSystems: [
    "Enterprise knowledge",
    "Documents and records",
    "Operational data",
    "Business applications",
    "Access and permissions",
    "Decision workflows",
    "Human review",
    "Governance controls",
  ],
  architecture:
    "Knowledge, documents, operational data and business applications connect through governed access and context layers. AI assistants, agents and analytics then support recommendations and bounded automation, with human review before consequential action.",
  coreComponents: [
    { title: "Enterprise Knowledge", description: "Structured business context that grounds AI outputs in approved organizational information." },
    { title: "AI Assistants", description: "Role-aware interfaces that help people find, interpret and apply relevant information." },
    { title: "AI Agents", description: "Task-oriented intelligence operating within explicit permissions, tools and approval boundaries." },
    { title: "Document Intelligence", description: "Extraction, classification and interpretation for documents, records and content-intensive processes." },
    { title: "Data Intelligence", description: "Analysis and decision support connected to governed enterprise and operational data." },
    { title: "Workflow Automation", description: "AI-supported steps integrated into accountable business processes and system actions." },
    { title: "Governance & Controls", description: "Access, traceability, policy, evaluation and human oversight designed into the solution." },
  ],
  operatingFlow: [
    { number: "01", title: "Establish context", description: "Connect approved knowledge, documents, data and application sources." },
    { number: "02", title: "Apply governance", description: "Define access, policy, traceability and operational boundaries." },
    { number: "03", title: "Generate intelligence", description: "Assistants, agents and models interpret context and produce useful outputs." },
    { number: "04", title: "Review", description: "People validate recommendations and retain oversight of consequential decisions." },
    { number: "05", title: "Act", description: "Approved outputs move into workflows, systems and bounded automation." },
  ],
  benefits: [
    { title: "Faster knowledge access", description: "Make relevant enterprise context easier for teams to find and apply." },
    { title: "Better decision support", description: "Connect recommendations to current data, business context and accountable review." },
    { title: "Reduced manual effort", description: "Automate repeatable document, analysis and workflow steps within clear boundaries." },
    { title: "Consistent execution", description: "Embed approved knowledge and process logic into day-to-day work." },
    { title: "Visible governance", description: "Keep access, controls, traceability and human oversight part of the operating model." },
    { title: "Controlled automation", description: "Move from recommendations to action only through approved system and workflow paths." },
    { title: "Reusable intelligence", description: "Build shared AI capabilities that can support multiple functions and use cases." },
    { title: "Practical adoption", description: "Focus implementation on real enterprise workflows rather than disconnected experiments." },
  ],
  relatedCapabilities: [capabilities.intelligence, capabilities.software, capabilities.transformation],
  relatedIndustries: [industries.government, industries.energy, industries.manufacturing, industries.logistics],
  relatedWork: [],
  finalCta: sharedCta,
};

export const solutionPages: readonly SolutionPageContent[] = [
  smartParking,
  evCharging,
  digitalTwins,
  intelligentOperations,
  smartFacilities,
  aiPoweredEnterprise,
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((solution) => solution.slug === slug);
}
