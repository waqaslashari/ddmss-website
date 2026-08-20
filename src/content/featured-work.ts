export type FeaturedWorkKey = "smartParking" | "evCharging" | "industrialOperations";

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
