import type { WorkVisualKey } from "@/types/content";
import type {
  ContentReference,
  InternalIndexContent,
  WorkPageContent,
} from "@/types/internal-pages";

export type FeaturedWorkKey = WorkVisualKey;

export type WorkOutcome = {
  label: string;
  value: string;
};

export type FeaturedWork = {
  key: FeaturedWorkKey;
  number: string;
  indexLabel: string;
  slug: string;
  title: string;
  description: string;
  technologies: readonly string[];
  architecture: readonly string[];
  image: string;
  alt: string;
  client?: string;
  status?: string;
  outcomes?: readonly WorkOutcome[];
};

export const featuredWork: readonly FeaturedWork[] = [
  {
    key: "smartParking",
    number: "01",
    indexLabel: "Featured System",
    slug: "smart-parking-ecosystem",
    title: "Smart Parking Ecosystem",
    description:
      "An integrated parking environment connecting access control, barriers, availability, mobile experiences, payments and operational management.",
    technologies: ["Smart Access", "Mobile", "IoT", "Payments", "Analytics"],
    architecture: ["Access", "Parking", "App", "Payments", "Operations"],
    image: "/visuals/smart-parking.png",
    alt: "Connected smart parking environment with access lanes, parking spaces and operational infrastructure.",
  },
  {
    key: "evCharging",
    number: "02",
    indexLabel: "Platform",
    slug: "ev-charging-platform",
    title: "EV Charging Platform",
    description:
      "A connected charging ecosystem combining driver experience, charging infrastructure, payment flows, monitoring and operator management.",
    technologies: ["Driver App", "EV Charging", "CMS", "Payments", "APIs"],
    architecture: ["Driver", "Charger", "Cloud", "CMS"],
    image: "/visuals/ev-charger.png",
    alt: "Connected EV charging pedestal linked to driver, cloud and operator platform systems.",
  },
  {
    key: "industrialOperations",
    number: "03",
    indexLabel: "Digital Operations",
    slug: "industrial-digital-operations",
    title: "Industrial Digital Operations",
    description:
      "A connected industrial environment combining asset monitoring, operational data, digital representation and intelligent decision support.",
    technologies: ["Digital Twin", "IoT", "Monitoring", "Data", "AI"],
    architecture: ["Asset", "Telemetry", "Data", "Twin", "Intelligence"],
    image: "/visuals/industrial-asset.png",
    alt: "Industrial operating environment connected to telemetry, data and intelligent digital systems.",
  },
] as const;

export const workIndexContent: InternalIndexContent = {
  family: "work",
  seo: {
    title: "Work & Systems",
    description:
      "Explore selected DDMSS system and platform concepts spanning smart parking, EV charging and connected industrial operations.",
  },
  hero: {
    marker: "WORK / 00",
    title: "Systems Built Around Real Operations.",
    introduction:
      "Selected systems and platform concepts showing how DDMSS combines software, data, connected infrastructure and intelligence into complete operational environments.",
    technicalLine: "SYSTEMS · PLATFORMS · INFRASTRUCTURE · INTELLIGENCE",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Work" }],
  },
  items: featuredWork.map((item) => ({
    number: item.number,
    title: item.title,
    description: item.description,
    href: `/work/${item.slug}`,
    architectureLine: item.architecture.join(" → "),
    tags: item.technologies,
    visualKey: item.key,
    actionLabel: "View System",
  })),
  finalCta: {
    marker: "WORK / NEXT STEP",
    title: "Build around the real operating environment.",
    description:
      "Discuss the system, platform and connected infrastructure required around your operational objective.",
    action: { label: "Discuss a Similar System", href: "/contact" },
  },
};

const capabilities = {
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
    description: "Devices and infrastructure connected to manageable digital systems.",
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

const solutions = {
  parking: {
    family: "solution",
    slug: "smart-parking",
    title: "Smart Parking",
    description: "Connected access, parking services, payments and operational management.",
  },
  charging: {
    family: "solution",
    slug: "ev-charging",
    title: "EV Charging",
    description: "Driver, charger, payment and operator platform integration.",
  },
  facilities: {
    family: "solution",
    slug: "smart-facilities",
    title: "Smart Facilities",
    description: "Building, access, mobility, energy and asset systems connected to operations.",
  },
  twins: {
    family: "solution",
    slug: "digital-twins",
    title: "Digital Twins",
    description: "Physical assets connected to synchronized digital representations.",
  },
  operations: {
    family: "solution",
    slug: "intelligent-operations",
    title: "Intelligent Operations",
    description: "Operational systems, data and intelligence connected to accountable action.",
  },
  enterpriseAi: {
    family: "solution",
    slug: "ai-powered-enterprise",
    title: "AI-Powered Enterprise",
    description: "Governed intelligence grounded in enterprise knowledge and workflows.",
  },
} as const satisfies Record<string, ContentReference>;

const industries = {
  realEstate: {
    family: "industry",
    slug: "real-estate-smart-cities",
    title: "Real Estate & Smart Cities",
    description: "Buildings, mobility and urban infrastructure as connected environments.",
  },
  mobility: {
    family: "industry",
    slug: "mobility-transportation",
    title: "Mobility & Transportation",
    description: "Access, movement, charging and transport operations.",
  },
  government: {
    family: "industry",
    slug: "government-public-sector",
    title: "Government & Public Sector",
    description: "Integrated public infrastructure and digital services.",
  },
  energy: {
    family: "industry",
    slug: "energy-oil-gas",
    title: "Energy & Oil & Gas",
    description: "Connected operations and asset-intensive environments.",
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

const finalCta = {
  marker: "WORK / NEXT STEP",
  title: "Engineer the system around the operation.",
  description:
    "Bring the operational context, software, data and connected infrastructure into one coherent system architecture.",
  action: { label: "Discuss a Similar System", href: "/contact" },
} as const;

const smartParking: WorkPageContent = {
  family: "work",
  slug: "smart-parking-ecosystem",
  visualKey: "smartParking",
  seo: {
    title: "Smart Parking Ecosystem",
    description:
      "Explore a connected smart parking system architecture spanning access, availability, payments, EV charging, devices and operations.",
  },
  hero: {
    marker: "WORK / 01",
    title: "Smart Parking Ecosystem",
    introduction:
      "An integrated parking environment connecting access control, barriers, parking availability, user interaction, payments and operational management.",
    technicalLine: "ACCESS · PARKING · PAYMENTS · EV CHARGING · OPERATIONS",
    tags: ["Smart Access", "Mobile", "IoT", "Payments", "Analytics"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "Smart Parking Ecosystem" },
    ],
    action: { label: "Discuss a Similar System", href: "/contact" },
  },
  context:
    "Parking environments often combine entry and exit equipment, capacity information, user touchpoints, transactions, chargers and operator tools from separate systems. A coherent ecosystem connects those functions around one parking journey and one operational view.",
  challenge:
    "The system architecture needs to coordinate physical access, parking activity and digital services while keeping each operational responsibility visible and manageable.",
  challengeAreas: [
    { title: "Access", description: "Entry and exit control connected to user authorization and barrier operation." },
    { title: "Parking Availability", description: "Visibility into capacity and how spaces or zones are being used." },
    { title: "User Experience", description: "Mobile or web interaction that supports a clear parking journey." },
    { title: "Payments", description: "Parking-session, tariff and transaction workflows connected to the user journey." },
    { title: "EV Charging", description: "Optional charging services integrated into the wider parking environment." },
    { title: "Operations", description: "Monitoring, configuration, device status, events and analytics in one operator context." },
  ],
  architecture:
    "The user journey passes through access and entry into the parking layer, where availability, payments, EV charging and field devices connect to an operations platform and shared data or analytics layer.",
  components: [
    { title: "Access & Barriers", technicalLabel: "PHYSICAL / ENTRY", description: "Gate, barrier and authorization interfaces governing movement into and out of the site." },
    { title: "Parking Management", technicalLabel: "CAPACITY / ZONES", description: "Space, zone and session logic supporting parking availability and control." },
    { title: "User Applications", technicalLabel: "MOBILE / WEB", description: "Digital touchpoints for access, parking information, sessions and account journeys." },
    { title: "Payment Integration", technicalLabel: "SESSION / TRANSACTION", description: "Tariff and payment workflows connected to parking activity." },
    { title: "Connected Devices", technicalLabel: "IOT / STATUS", description: "Field devices, chargers and controllers represented within the platform." },
    { title: "Operations Platform", technicalLabel: "MONITOR / MANAGE", description: "A common operator layer for configuration, events, status and analytics." },
  ],
  approach: [
    { number: "01", title: "Understand", description: "Map the site, user journeys and operating responsibilities." },
    { number: "02", title: "Architect", description: "Define access, parking, service and platform boundaries." },
    { number: "03", title: "Engineer", description: "Build the required user and operator capabilities." },
    { number: "04", title: "Integrate", description: "Connect equipment, payments, chargers and data." },
    { number: "05", title: "Validate", description: "Test complete journeys and operational exception paths." },
    { number: "06", title: "Optimize", description: "Refine the system using operating evidence." },
  ],
  evidence: {
    marker: "06 / SYSTEM CAPABILITIES",
    title: "A connected parking operating environment.",
    introduction: "These are architectural capabilities, not reported customer results.",
    items: [
      { title: "Connected Access", description: "Access workflows linked to parking and authorization logic." },
      { title: "Parking Management", description: "Availability, capacity and sessions represented in one platform." },
      { title: "Payment Integration", description: "Transactions connected to the parking journey." },
      { title: "Operational Monitoring", description: "Equipment, events and services visible to operators." },
    ],
  },
  relatedCapabilities: [capabilities.software, capabilities.connected, capabilities.intelligence],
  relatedSolutions: [solutions.parking, solutions.facilities],
  relevantIndustries: [industries.realEstate, industries.mobility, industries.government],
  finalCta,
};

const evCharging: WorkPageContent = {
  family: "work",
  slug: "ev-charging-platform",
  visualKey: "evCharging",
  seo: {
    title: "EV Charging Platform",
    description:
      "Explore an EV charging system architecture connecting drivers, chargers, sessions, payments, APIs and operator management.",
  },
  hero: {
    marker: "WORK / 02",
    title: "EV Charging Platform",
    introduction:
      "A connected charging environment combining driver interaction, charger infrastructure, session management, payments and operator monitoring.",
    technicalLine: "DRIVER · CHARGER · SESSION · PAYMENT · OPERATOR",
    tags: ["Driver App", "EV Charging", "CMS", "Payments", "APIs"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "EV Charging Platform" },
    ],
    action: { label: "Discuss a Similar System", href: "/contact" },
  },
  context:
    "A charging experience spans the driver, a physical charger, the active session, payment services, network connectivity and the operator responsible for the infrastructure. The platform provides the shared context required for those parts to function as one managed environment.",
  challenge:
    "The architecture must preserve a clear driver journey while connecting charger state, session rules, transactions, platform services and operator oversight.",
  challengeAreas: [
    { title: "Driver", description: "A clear interaction path from discovery or arrival through charging completion." },
    { title: "Charger", description: "Physical charging infrastructure represented with dependable connectivity and status." },
    { title: "Charging Session", description: "Session initiation, state, energy context and completion managed consistently." },
    { title: "Payments", description: "Tariff and transaction workflows connected to the charging session." },
    { title: "Network / Platform", description: "Shared services coordinate chargers, sessions, status, integrations and data." },
    { title: "Operator", description: "Monitoring and management tools provide oversight across the charging environment." },
  ],
  architecture:
    "The driver uses an application or QR journey to interact with the charger. The charging platform coordinates sessions, tariffs, payments, status and APIs before presenting operational control through the operator CMS.",
  components: [
    { title: "Driver Experience", technicalLabel: "APP / QR", description: "A clear digital journey for charger interaction and session handling." },
    { title: "Connected Charger", technicalLabel: "FIELD / ASSET", description: "The physical charger represented as a manageable network endpoint." },
    { title: "Session Services", technicalLabel: "STATE / TARIFF", description: "Platform logic for session state, tariffs and charging events." },
    { title: "Payment Services", technicalLabel: "PAYMENT / FLOW", description: "Transaction interfaces associated with a charging session." },
    { title: "Platform APIs", technicalLabel: "CONNECT / EXTEND", description: "Controlled integration points for related systems and services." },
    { title: "Operator CMS", technicalLabel: "MONITOR / MANAGE", description: "Charger, session, event and configuration visibility for operators." },
  ],
  approach: [
    { number: "01", title: "Understand", description: "Map the driver and operator journeys around charging." },
    { number: "02", title: "Architect", description: "Define charger, session, payment and platform boundaries." },
    { number: "03", title: "Engineer", description: "Build driver, platform and operator capabilities." },
    { number: "04", title: "Integrate", description: "Connect chargers, payments, APIs and monitoring." },
    { number: "05", title: "Validate", description: "Test normal, interrupted and exception session paths." },
    { number: "06", title: "Optimize", description: "Refine service and operating flows using evidence." },
  ],
  evidence: {
    marker: "06 / SYSTEM CAPABILITIES",
    title: "A manageable connected charging environment.",
    introduction: "These are architectural capabilities, not reported customer results.",
    items: [
      { title: "Charger Connectivity", description: "Field chargers connected to shared platform services." },
      { title: "Session Management", description: "Charging state and session workflows coordinated consistently." },
      { title: "Payment Integration", description: "Tariff and transaction services associated with sessions." },
      { title: "Operator Visibility", description: "Infrastructure and activity represented in an operator context." },
    ],
  },
  relatedCapabilities: [capabilities.software, capabilities.connected, capabilities.intelligence],
  relatedSolutions: [solutions.charging, solutions.facilities],
  relevantIndustries: [industries.mobility, industries.realEstate, industries.government],
  finalCta,
};

const industrialOperations: WorkPageContent = {
  family: "work",
  slug: "industrial-digital-operations",
  visualKey: "industrialOperations",
  seo: {
    title: "Industrial Digital Operations",
    description:
      "Explore an industrial digital operations architecture connecting physical assets, telemetry, digital representation, analytics and intelligence.",
  },
  hero: {
    marker: "WORK / 03",
    title: "Industrial Digital Operations",
    introduction:
      "A connected industrial environment combining asset monitoring, operational data, digital representation and intelligent decision support.",
    technicalLine: "ASSET · TELEMETRY · DIGITAL REPRESENTATION · INTELLIGENCE",
    tags: ["Digital Twin", "IoT", "Monitoring", "Data", "AI"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "Industrial Digital Operations" },
    ],
    action: { label: "Discuss a Similar System", href: "/contact" },
  },
  context:
    "Industrial operations depend on physical assets, sensor and control systems, operational records and the people accountable for action. A connected environment gives that information a consistent asset and process context before it reaches monitoring, analysis and decision support.",
  challenge:
    "The system must connect live and historical operational information to a useful digital representation without separating insight from the physical asset and accountable workflow behind it.",
  challengeAreas: [
    { title: "Physical Assets", description: "Equipment and facilities remain the operational source of context." },
    { title: "Sensors / Systems", description: "Signals and control-system information require dependable integration." },
    { title: "Operational Data", description: "Telemetry and records need a consistent structure and asset relationship." },
    { title: "Digital Representation", description: "The digital model connects current information to asset structure and state." },
    { title: "Analytics", description: "Operational patterns must be presented as clear, inspectable information." },
    { title: "AI / Decision Support", description: "Intelligence should support accountable decisions rather than obscure them." },
  ],
  architecture:
    "The physical asset connects through sensors and systems to telemetry and data. A synchronized digital representation provides the operating context for monitoring, analytics and intelligence before information reaches operational action.",
  components: [
    { title: "Asset Model", technicalLabel: "PHYSICAL / CONTEXT", description: "Equipment and facility structure represented in an operationally useful form." },
    { title: "Telemetry Integration", technicalLabel: "SIGNAL / DATA", description: "Sensor and system information connected through defined data paths." },
    { title: "Digital Representation", technicalLabel: "TWIN / STATE", description: "A synchronized view relating operational information to the asset." },
    { title: "Monitoring Layer", technicalLabel: "STATUS / EVENTS", description: "Current state, events and relevant historical context made visible." },
    { title: "Analytics & Intelligence", technicalLabel: "ANALYZE / SUPPORT", description: "Data processing and AI patterns supporting interpretation and decisions." },
    { title: "Operational Workflow", technicalLabel: "DECIDE / ACT", description: "Information connected to the people and processes responsible for action." },
  ],
  approach: [
    { number: "01", title: "Understand", description: "Map the asset, process and decision environment." },
    { number: "02", title: "Architect", description: "Define equipment, data and platform boundaries." },
    { number: "03", title: "Engineer", description: "Build the integration and operational interfaces." },
    { number: "04", title: "Integrate", description: "Connect telemetry, models, analytics and workflows." },
    { number: "05", title: "Validate", description: "Test data context, system state and decision paths." },
    { number: "06", title: "Optimize", description: "Refine monitoring and intelligence with evidence." },
  ],
  evidence: {
    marker: "06 / SYSTEM CAPABILITIES",
    title: "An operational intelligence architecture.",
    introduction: "These are architectural capabilities, not reported customer results.",
    items: [
      { title: "Asset Representation", description: "Physical structure and operating context represented digitally." },
      { title: "Telemetry Integration", description: "Operational data connected to the relevant asset and system." },
      { title: "Operational Monitoring", description: "State, events and context available in a shared view." },
      { title: "Analytics / Intelligence", description: "An architecture for analysis and accountable decision support." },
    ],
  },
  relatedCapabilities: [capabilities.twins, capabilities.intelligence, capabilities.connected, capabilities.software],
  relatedSolutions: [solutions.twins, solutions.operations, solutions.enterpriseAi],
  relevantIndustries: [industries.energy, industries.manufacturing, industries.logistics],
  finalCta,
};

export const workPages: readonly WorkPageContent[] = [
  smartParking,
  evCharging,
  industrialOperations,
];

export function getWorkPage(slug: string) {
  return workPages.find((workItem) => workItem.slug === slug);
}
