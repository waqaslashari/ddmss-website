import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { DigitalTwinVisual } from "./digital-twin-visual";
import styles from "./digital-twin-experience.module.css";

const twinDemo = {
  asset: "P-102",
  state: "Running",
  temperature: "68.4°C",
  vibration: "Normal",
  efficiency: "92%",
  health: "94%",
  predictiveRisk: "Low",
  energy: {
    currentLoad: "74%",
    today: "8.42 MWh",
    forecast: "Normal",
  },
} as const;

type TwinMetric = {
  label: string;
  value: string;
  status: string;
  healthy: boolean;
  intelligence?: boolean;
};

const metrics: readonly TwinMetric[] = [
  { label: "Asset State", value: `Asset ${twinDemo.asset}`, status: twinDemo.state, healthy: true },
  { label: "Temperature", value: twinDemo.temperature, status: "Live", healthy: false },
  { label: "Vibration", value: twinDemo.vibration, status: "Sensor / Active", healthy: true },
  { label: "Efficiency", value: twinDemo.efficiency, status: "Operational", healthy: false },
  { label: "Asset Health", value: twinDemo.health, status: "Model / Current", healthy: false },
  { label: "Predictive Risk", value: twinDemo.predictiveRisk, status: "AI Forecast", healthy: true, intelligence: true },
];

export function DigitalTwinExperience() {
  return (
    <section className={styles.section} aria-labelledby="digital-twin-heading">
      <div className={styles.handoff} aria-hidden="true"><span>From Operations</span><i /><span>Intelligence</span></div>

      <div className="content-container">
        <div className={styles.composition}>
          <header className={styles.narrative}>
            <TechnicalLabel>07 / Digital Twin Experience</TechnicalLabel>
            <h2 id="digital-twin-heading">See Operations Differently.</h2>
            <p>Connect physical assets to live data, synchronized digital representations and predictive intelligence for better operational visibility and decision-making.</p>
            <span className={styles.systemLine}>Physical Asset · Telemetry · Digital Twin · Intelligence</span>
          </header>

          <DigitalTwinVisual />

          <section className={styles.metricMatrix} aria-label="Illustrative digital twin operational metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className={`${styles.metricItem} ${metric.intelligence ? styles.intelligenceMetric : ""}`}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small className={metric.healthy ? styles.healthy : ""}>{metric.healthy && <i aria-hidden="true" />}{metric.status}</small>
              </div>
            ))}
          </section>

          <aside className={styles.energySystem} aria-label="Illustrative energy system metrics">
            <div><span>Energy System</span><small>Secondary / Operational</small></div>
            <dl>
              <div><dt>Current Load</dt><dd>{twinDemo.energy.currentLoad}</dd></div>
              <div><dt>Today</dt><dd>{twinDemo.energy.today}</dd></div>
              <div><dt>AI Forecast</dt><dd className={styles.healthy}>{twinDemo.energy.forecast}</dd></div>
            </dl>
          </aside>

          <Link href="/solutions/digital-twins" className={styles.cta}>Explore Digital Twins<ArrowIcon className={styles.arrow} /></Link>
        </div>

        <div className={styles.sectionExit} aria-hidden="true"><span /><i /><span /></div>
      </div>
    </section>
  );
}
