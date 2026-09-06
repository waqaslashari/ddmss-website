import { TechnicalLabel } from "@/components/ui/technical-label";
import {
  OperatingModelVisual,
  type OperatingPillarKey,
} from "./operating-model-visual";
import styles from "./operating-model-section.module.css";

type OperatingPillar = {
  key: OperatingPillarKey;
  number: string;
  title: string;
  description: string;
  tags: readonly string[];
};

const pillars: readonly OperatingPillar[] = [
  {
    key: "transform",
    number: "01",
    title: "Transform",
    description:
      "Digital strategy, governance, processes and business transformation.",
    tags: ["Strategy", "Governance", "Process", "Change"],
  },
  {
    key: "build",
    number: "02",
    title: "Build",
    description:
      "Applications, platforms, portals, APIs and digital products.",
    tags: ["Web", "Mobile", "Platforms", "API"],
  },
  {
    key: "connect",
    number: "03",
    title: "Connect",
    description:
      "IoT, infrastructure, devices, mobility and physical systems.",
    tags: ["IoT", "Edge", "Devices", "Infrastructure"],
  },
  {
    key: "optimize",
    number: "04",
    title: "Optimize",
    description:
      "AI, analytics, automation and intelligent decision-making.",
    tags: ["AI", "Analytics", "Automation", "Decisions"],
  },
];

export function OperatingModelSection() {
  return (
    <section className={styles.section} aria-labelledby="operating-model-heading">
      <div className={styles.handoff} aria-hidden="true">
        <span />
      </div>

      <div className="content-container">
        <header className={styles.intro}>
          <div>
            <TechnicalLabel>03 / What We Do</TechnicalLabel>
            <h2 id="operating-model-heading" className={styles.heading}>
              From Strategy to Impact.
            </h2>
          </div>
          <p className={styles.supportingCopy}>
            We combine business understanding, engineering and intelligent
            technology to create systems that deliver measurable operational
            value.
          </p>
        </header>

        <ol className={styles.pillars} aria-label="DDMSS operating model">
          {pillars.map((pillar) => (
            <li key={pillar.key} className={styles.pillarItem}>
              <article
                className={`${styles.pillar} ${styles[pillar.key]}`}
                aria-labelledby={`operating-pillar-${pillar.key}`}
              >
                <span className={styles.stageNode} aria-hidden="true" />
                <span className={styles.pillarLabel}>
                  {pillar.number} / {pillar.title}
                </span>
                <h3 id={`operating-pillar-${pillar.key}`}>{pillar.title}</h3>
                <OperatingModelVisual pillar={pillar.key} />
                <p className={styles.pillarDescription}>{pillar.description}</p>
                <ul className={styles.tags} aria-label={`${pillar.title} focus areas`}>
                  {pillar.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <div className={styles.sectionExit} aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
