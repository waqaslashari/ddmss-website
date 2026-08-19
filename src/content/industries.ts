export type IndustryKey =
  | "energy"
  | "government"
  | "smartCities"
  | "mobility"
  | "manufacturing"
  | "logistics";

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
