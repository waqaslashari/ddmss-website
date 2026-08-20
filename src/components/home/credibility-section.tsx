import { TechnicalLabel } from "@/components/ui/technical-label";
import {
  DifferentiatorVisual,
  ProcessVisual,
  type DifferentiatorKey,
  type ProcessKey,
} from "./credibility-visuals";
import styles from "./credibility-section.module.css";

type Differentiator = {
  key: DifferentiatorKey;
  number: string;
  label: string;
  title: string;
  description: string;
};

type ProcessStep = {
  key: ProcessKey;
  number: string;
  title: string;
  description: string;
  metadata: readonly string[];
};

const differentiators: readonly Differentiator[] = [
  {
    key: "business",
    number: "01",
    label: "Business First",
    title: "Business First",
    description:
      "Technology starts with the operational challenge, business objective and user requirement — not the tool.",
  },
  {
    key: "physical",
    number: "02",
    label: "Digital + Physical",
    title: "Digital + Physical",
    description:
      "We connect software, data and intelligence with infrastructure, devices, equipment and real-world operations.",
  },
  {
    key: "ai",
    number: "03",
    label: "AI by Design",
    title: "AI by Design",
    description:
      "We apply AI where it creates measurable operational value, better decisions and meaningful automation.",
  },
  {
    key: "regional",
    number: "04",
    label: "Regional Understanding",
    title: "Regional Understanding",
    description:
      "Oman-based, with delivery capabilities and market understanding across the Middle East and Pakistan.",
  },
] as const;

const processSteps: readonly ProcessStep[] = [
  {
    key: "understand",
    number: "01",
    title: "Understand",
    description:
      "Business objectives, users, processes, systems and the operational environment.",
    metadata: ["Discovery", "Requirements", "Operations"],
  },
  {
    key: "design",
    number: "02",
    title: "Design",
    description:
      "Solution architecture, user experience, data flows and technology selection.",
    metadata: ["Architecture", "UX", "System Design"],
  },
  {
    key: "engineer",
    number: "03",
    title: "Engineer",
    description:
      "Software, integrations, connected hardware and digital infrastructure.",
    metadata: ["Software", "Hardware", "Data"],
  },
  {
    key: "integrate",
    number: "04",
    title: "Integrate",
    description:
      "Existing platforms, APIs, equipment, devices and operational data.",
    metadata: ["APIs", "Systems", "Devices"],
  },
  {
    key: "optimize",
    number: "05",
    title: "Optimize",
    description:
      "Analytics, automation, AI, monitoring and continuous improvement.",
    metadata: ["AI", "Analytics", "Automation"],
  },
] as const;

export function CredibilitySection() {
  return (
    <div className={styles.chapter}>
      <div className={styles.chapterHandoff} aria-hidden="true">
        <span>Environment</span><i /><span>Requirements</span><i /><span>Engineering</span>
      </div>

      <section className={styles.whySection} aria-labelledby="why-ddmss-heading">
        <div className="content-container">
          <header className={styles.intro}>
            <div>
              <TechnicalLabel>09 / Why DDMSS</TechnicalLabel>
              <h2 id="why-ddmss-heading">More Than Software.</h2>
            </div>
            <p>We design technology around the way businesses and operations actually work — connecting strategy, software, data and physical infrastructure into complete systems.</p>
          </header>

          <ol className={styles.differentiators} aria-label="Why organizations choose DDMSS">
            {differentiators.map((item) => (
              <li key={item.key}>
                <article className={styles.differentiator} tabIndex={0}>
                  <span className={styles.itemLabel}>{item.number} / {item.label}</span>
                  <h3>{item.title}</h3>
                  <DifferentiatorVisual type={item.key} />
                  <p>{item.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className={styles.methodTransition} aria-hidden="true">
        <span>Why DDMSS</span><i /><strong>How We Deliver</strong><i /><span>Structured Engineering</span>
      </div>

      <section className={styles.processSection} aria-labelledby="how-we-work-heading">
        <div className="content-container">
          <header className={styles.intro}>
            <div>
              <TechnicalLabel>10 / How We Work</TechnicalLabel>
              <h2 id="how-we-work-heading">A Proven Approach to Every Engagement.</h2>
            </div>
            <p>From understanding the operational challenge to optimization after deployment, we follow a structured engineering approach.</p>
          </header>

          <ol className={styles.processJourney} aria-label="DDMSS delivery methodology">
            {processSteps.map((step) => (
              <li key={step.key} className={styles.processItem} data-step={step.key}>
                <article className={styles.processStep} tabIndex={0}>
                  <span className={styles.processNode} aria-hidden="true" />
                  <span className={styles.itemLabel}>{step.number} / {step.title}</span>
                  <h3>{step.title}</h3>
                  <ProcessVisual type={step.key} />
                  <p>{step.description}</p>
                  <ul className={styles.metadata} aria-label={`${step.title} activities`}>
                    {step.metadata.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </li>
            ))}
          </ol>

          <div className={styles.chapterEnd} aria-hidden="true">
            <span>Method</span><i /><span>Delivery</span>
          </div>
        </div>
      </section>
    </div>
  );
}
