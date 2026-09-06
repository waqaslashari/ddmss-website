import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { solutions } from "./solutions-data";
import { SolutionsShowcase } from "./solutions-showcase";
import styles from "./solutions-section.module.css";

export function SolutionsSection() {
  return (
    <section id="solutions" className={styles.section} aria-labelledby="solutions-heading">
      <div className={styles.handoff} aria-hidden="true"><span /></div>
      <div className="content-container">
        <header className={styles.intro}>
          <div>
            <TechnicalLabel>05 / Solutions</TechnicalLabel>
            <h2 id="solutions-heading" className={styles.heading}>Technology Built for the Real World.</h2>
          </div>
          <div className={styles.introCopy}>
            <p>We combine software, connected infrastructure, data and intelligence into complete operational solutions.</p>
            <Link href="/solutions" className={styles.desktopCta}>Explore All Solutions<ArrowIcon className={styles.arrow} /></Link>
          </div>
        </header>

        <p className={styles.demoLabel}>Illustrative system views / demo data</p>

        <SolutionsShowcase solutions={solutions} />

        <Link href="/solutions" className={styles.mobileCta}>Explore All Solutions<ArrowIcon className={styles.arrow} /></Link>
      </div>
    </section>
  );
}
