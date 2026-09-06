import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { capabilitySummaries } from "@/content/capabilities";
import type { CapabilitySummary } from "@/types/content";
import { CapabilityVisual } from "./capability-visual";
import styles from "./capabilities-section.module.css";

function CapabilityPanel({ capability }: { capability: CapabilitySummary }) {
  const href = `/capabilities/${capability.slug}`;

  return (
    <li className={`${styles.capabilityItem} ${styles[capability.key]}`}>
      <Link
        href={href}
        className={`${styles.panel} ${capability.flagship ? styles.flagship : ""}`}
        aria-label={`${capability.title}: ${capability.shortDescription}`}
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
          <p className={styles.description}>{capability.shortDescription}</p>
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
    <section id="capabilities" className={styles.section} aria-labelledby="capabilities-heading">
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
          {capabilitySummaries.map((capability) => <CapabilityPanel key={capability.key} capability={capability} />)}
        </ol>

        <ExploreLink mobile />
      </div>
    </section>
  );
}
