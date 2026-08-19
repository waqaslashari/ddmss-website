import { TechnicalLabel } from "@/components/ui/technical-label";
import { ConnectedDomainsVisual } from "./connected-domains-visual";
import styles from "./physical-digital-section.module.css";

export function PhysicalDigitalSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="physical-digital-heading"
    >
      <div className={styles.continuation} aria-hidden="true">
        <span className={styles.continuationNode} />
        <span className={styles.continuationLabel}>NETWORK / CONTINUED</span>
      </div>

      <div className="content-container">
        <header className={styles.statement}>
          <div>
            <TechnicalLabel>02 / Physical + Digital</TechnicalLabel>
            <h2 id="physical-digital-heading" className={styles.heading}>
              The <span className={styles.physicalWord}>physical</span> and{" "}
              <span className={styles.digitalWord}>digital</span> worlds are
              becoming one.
            </h2>
          </div>

          <p className={styles.supportingCopy}>
            Businesses increasingly operate across software, data,
            infrastructure, machines, vehicles and people. DDMSS brings these
            environments together as connected intelligent systems.
          </p>
        </header>

        <ConnectedDomainsVisual />

        <div className={styles.result}>
          <h3>We connect them.</h3>
          <p>AI · Data · Software · Connected Infrastructure</p>
        </div>
      </div>
    </section>
  );
}
