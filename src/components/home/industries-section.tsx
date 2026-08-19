import Link from "next/link";

import { industries } from "@/content/industries";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IndustriesShowcase } from "./industries-showcase";
import { IndustryEnvironment } from "./industry-environment";
import styles from "./industries-section.module.css";

export function IndustriesSection() {
  return (
    <section className={styles.section} aria-labelledby="industries-heading">
      <div className={styles.handoff} aria-hidden="true">
        <span>One Technology Foundation</span>
        <i />
        <span>Different Operating Environments</span>
      </div>

      <div className="content-container">
        <header className={styles.intro}>
          <div className={styles.introCopy}>
            <TechnicalLabel>08 / Industries</TechnicalLabel>
            <h2 id="industries-heading">Technology Changes When the Environment Changes.</h2>
          </div>
          <div className={styles.introSupport}>
            <p>Different industries demand different systems, workflows and operational intelligence. We design technology around the environment it needs to perform in.</p>
            <Link href="/industries" className={styles.sectionLink}>
              Explore All Industries <ArrowIcon className={styles.linkArrow} />
            </Link>
          </div>
        </header>

        <IndustriesShowcase />

        <div className={styles.mobileJourney}>
          {industries.map((industry) => (
            <article key={industry.key} className={styles.mobileIndustry}>
              <header className={styles.mobileIndustryHeader}>
                <span>{industry.number} / 06</span>
                <h3>{industry.title}</h3>
              </header>
              <IndustryEnvironment industry={industry.key} label={industry.environmentLabel} />
              <p>{industry.statement}</p>
              <ul className={styles.mobileTechnologies} aria-label={`${industry.title} technologies`}>
                {industry.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <Link href={industry.href} className={styles.mobileIndustryLink} aria-label={`Explore ${industry.title}`}>
                Explore <ArrowIcon className={styles.linkArrow} />
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.sectionEnd} aria-hidden="true">
          <span>Environment / Intelligence</span>
          <i />
          <span>System / Adapted</span>
        </div>
      </div>
    </section>
  );
}
