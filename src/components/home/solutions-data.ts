export type SolutionKey =
  | "smartParking"
  | "evCharging"
  | "digitalTwins"
  | "intelligentOperations"
  | "smartFacilities";

export type Solution = {
  key: SolutionKey;
  number: string;
  title: string;
  description: string;
  tags: readonly string[];
  href: string;
};

export const solutions: readonly Solution[] = [
  {
    key: "smartParking",
    number: "01",
    title: "Smart Parking",
    description:
      "Connected access, parking management, payments, availability and operational analytics in one integrated ecosystem.",
    tags: ["Access", "Parking", "Payments", "Analytics"],
    href: "/solutions/smart-parking",
  },
  {
    key: "evCharging",
    number: "02",
    title: "EV Charging",
    description:
      "Driver applications, charging infrastructure, payments, monitoring and operator platforms for connected charging networks.",
    tags: ["Driver App", "Charger", "Payments", "CMS"],
    href: "/solutions/ev-charging",
  },
  {
    key: "digitalTwins",
    number: "03",
    title: "Digital Twins",
    description:
      "Live digital representations of assets, facilities and infrastructure connected to operational data and intelligence.",
    tags: ["Asset", "Telemetry", "Twin", "Intelligence"],
    href: "/solutions/digital-twins",
  },
  {
    key: "intelligentOperations",
    number: "04",
    title: "Intelligent Operations",
    description:
      "Connected operational systems combining IoT, data, analytics, AI and automation to improve visibility and decision-making.",
    tags: ["IoT", "Data", "AI", "Automation"],
    href: "/solutions/intelligent-operations",
  },
  {
    key: "smartFacilities",
    number: "05",
    title: "Smart Facilities",
    description:
      "Integrated buildings combining access, parking, EV charging, energy, occupancy, assets and facility intelligence.",
    tags: ["Buildings", "Access", "Energy", "Operations"],
    href: "/solutions/smart-facilities",
  },
] as const;
