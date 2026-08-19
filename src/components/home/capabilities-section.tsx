import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { CapabilityVisual, type CapabilityKey } from "./capability-visual";
import styles from "./capabilities-section.module.css";

type Capability = {
  key: CapabilityKey;
  number: string;
  label: string;
  title: string;
  description: string;
  tags: readonly string[];
  href: string;
  flagship?: boolean;
};

const capabilities: readonly Capability[] = [
  {
    key: "transformation",
    number: "01",
    label: "Transformation",
    title: "Digital Transformation & Governance",
    description: "Strategy, governance, process digitization, enterprise architecture and technology roadmaps.",
    tags: ["Strategy", "Governance", "Process", "Architecture"],
    href: "/capabilities/digital-transformation-governance",
  },
  {
    key: "intelligence",
    number: "02",
    label: "Intelligence",
    title: "AI & Data Intelligence",
    description: "AI applications, agents, analytics, computer vision, predictive systems and data platforms.",
    tags: ["AI", "Agents", "Analytics", "Data"],
    href: "/capabilities/ai-data-intelligence",
  },
  {
    key: "software",
    number: "03",
    label: "Software",
    title: "Software & Digital Products",
    description: "Web applications, mobile apps, enterprise platforms, APIs, portals and system integrations.",
    tags: ["Web", "Mobile", "Platforms", "API"],
    href: "/capabilities/software-digital-products",
  },
  {
    key: "connected",
    number: "04",
    label: "Connected Systems",
    title: "Smart Infrastructure & IoT",
    description: "Connected devices, sensors, gateways, smart infrastructure, mobility and operational IoT.",
    tags: ["IoT", "Edge", "Sensors", "Infrastructure"],
    href: "/capabilities/smart-infrastructure-iot",
  },
  {
    key: "digitalTwin",
    number: "05",
    label: "Digital Operations",
    title: "Digital Twins & Intelligent Operations",
    description: "Real-time asset visualization, monitoring, predictive maintenance, operational intelligence and simulation.",
    tags: ["Digital Twin", "Monitoring", "Predictive", "Operations"],
    href: "/capabilities/digital-twins-intelligent-operations",
    flagship: true,
  },
];

function CapabilityPanel({ capability }: { capability: Capability }) {
  return (
    <li className={`${styles.capabilityItem} ${styles[capability.key]}`}>
      <Link
        href={capability.href}
        className={`${styles.panel} ${capability.flagship ? styles.flagship : ""}`}
        aria-label={`${capability.title}: ${capability.description}`}
      >
        <span className={styles.cornerMarker} aria-hidden="true" />
        <div className={styles.panelHeader}>
          <span className={styles.panelLabel}>{capability.number} / {capability.label}</span>
          <ArrowIcon className={styles.panelArrow} />
        </div>

        <div className={styles.panelContent}>
          <h3>{capability.title}</h3>
          {capability.flagship && <p className={styles.flagshipKicker}>PHYSICAL ASSET → LIVE DATA → DIGITAL TWIN → INTELLIGENCE</p>}
          <CapabilityVisual capability={capability.key} />
          <p className={styles.description}>{capability.description}</p>
          <ul className={styles.tags} aria-label={`${capability.title} focus areas`}>
            {capability.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </Link>
    </li>
  );
}

function ExploreLink({ mobile = false }: { mobile?: boolean }) {
  return (
    <Link href="/capabilities" className={mobile ? styles.mobileExplore : styles.desktopExplore}>
      <span>Explore All Capabilities</span>
      <ArrowIcon className={styles.exploreArrow} />
    </Link>
  );
}

export function CapabilitiesSection() {
  return (
    <section className={styles.section} aria-labelledby="capabilities-heading">
      <div className={styles.handoff} aria-hidden="true"><span /></div>

      <div className="content-container">
        <header className={styles.intro}>
          <div>
            <TechnicalLabel>04 / Capabilities</TechnicalLabel>
            <h2 id="capabilities-heading" className={styles.heading}>From Strategy to Systems.</h2>
          </div>
          <div className={styles.introCopy}>
            <p>We combine transformation expertise, software engineering, data intelligence and connected technologies to design complete digital ecosystems.</p>
            <ExploreLink />
          </div>
        </header>

        <ol className={styles.landscape} aria-label="DDMSS capabilities">
          {capabilities.map((capability) => <CapabilityPanel key={capability.key} capability={capability} />)}
        </ol>

        <ExploreLink mobile />
      </div>
    </section>
  );
}
