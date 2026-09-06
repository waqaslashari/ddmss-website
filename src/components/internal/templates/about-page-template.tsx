import { SecondaryButton } from "@/components/ui/secondary-button";
import type { AboutPageContent } from "@/types/internal-pages";
import {
  AboutHeroVisual,
  AboutRegionalVisual,
  DigitalPhysicalVisual,
} from "../about-system-visual";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import styles from "../about-page.module.css";

export function AboutPageTemplate({ content }: { content: AboutPageContent }) {
  return (
    <InternalPageShell
      family={content.family}
      hero={content.hero}
      heroVisual={<AboutHeroVisual />}
      finalCta={content.finalCta}
    >
      <InternalPageSection
        id="who-we-are"
        marker="02 / WHO WE ARE"
        title="Who We Are"
      >
        <div className={styles.identityGrid}>
          <p className={styles.identityName}>
            <span>DDMSS</span>
            {content.identity.fullName}
          </p>
          <p className={styles.leadNarrative}>{content.identity.introduction}</p>
        </div>
        <ul className={styles.domainRail} aria-label="Domains connected by DDMSS">
          {content.identity.domains.map((domain, index) => (
            <li key={domain}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {domain}
            </li>
          ))}
        </ul>
      </InternalPageSection>

      <InternalPageSection
        id="what-we-believe"
        marker="03 / WHAT WE BELIEVE"
        title="Technology Should Solve the Operation."
        introduction="Technology becomes useful when it reflects the people, systems and constraints that shape the operation around it."
        tone="quiet"
      >
        <DetailGrid items={content.beliefs} ariaLabel="DDMSS technology principles" />
      </InternalPageSection>

      <InternalPageSection
        id="ddmss-model"
        marker="04 / THE DDMSS MODEL"
        title="Transform. Build. Connect. Optimize."
        introduction="Four connected modes of work move an idea from business intent to an operating system that can improve over time."
      >
        <ol className={styles.modelRail} aria-label="The DDMSS operating model">
          {content.model.map((item, index) => (
            <li key={item.title}>
              <div className={styles.modelHeader}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i aria-hidden="true" />
              </div>
              <p>{item.technicalLabel}</p>
              <h3>{item.title}</h3>
              <small>{item.description}</small>
            </li>
          ))}
        </ol>
      </InternalPageSection>

      <InternalPageSection
        id="digital-and-physical"
        marker="05 / DIGITAL + PHYSICAL"
        title="Where Digital Meets the Physical World."
        introduction={content.digitalPhysical.introduction}
        tone="quiet"
      >
        <DigitalPhysicalVisual />
        <div className={styles.layerLegend}>
          <div>
            <p>DIGITAL / SYSTEMS</p>
            <ul>
              {content.digitalPhysical.digitalSystems.map((system) => <li key={system}>{system}</li>)}
            </ul>
          </div>
          <div>
            <p>PHYSICAL / SYSTEMS</p>
            <ul>
              {content.digitalPhysical.physicalSystems.map((system) => <li key={system}>{system}</li>)}
            </ul>
          </div>
        </div>
      </InternalPageSection>

      <InternalPageSection
        id="ai-with-purpose"
        marker="06 / AI"
        title="AI With Governance and Purpose."
      >
        <div className={styles.aiLayout}>
          <div className={styles.aiNarrative}>
            {content.ai.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ul className={styles.aiPrinciples} aria-label="DDMSS AI principles">
            {content.ai.principles.map((principle, index) => (
              <li key={principle.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{principle.technicalLabel}</p>
                  <h3>{principle.title}</h3>
                  <small>{principle.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.exampleStrip} aria-label="Examples of AI applications">
          {content.ai.examples.map((example) => <li key={example}>{example}</li>)}
        </ul>
      </InternalPageSection>

      <InternalPageSection
        id="regional-perspective"
        marker="07 / REGIONAL PERSPECTIVE"
        title="Built in Oman. Connected Beyond It."
        introduction="DDMSS is based in Oman and works with a regional and international perspective. These descriptions identify market and delivery ecosystems; they do not imply offices or permanent establishments."
        tone="quiet"
      >
        <div className={styles.regionalLayout}>
          <AboutRegionalVisual />
          <ul className={styles.regionList} aria-label="DDMSS regional positioning">
            {content.regions.map((region, index) => (
              <li key={region.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{region.title}</h3>
                  <p>{region.technicalLabel}</p>
                  <small>{region.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </InternalPageSection>

      <InternalPageSection
        id="how-we-work"
        marker="08 / HOW WE WORK"
        title="From Challenge to Working System."
        introduction="A structured engineering process keeps the business objective, technical architecture and operating environment connected throughout delivery."
      >
        <ProcessRail items={content.approach} ariaLabel="DDMSS delivery approach" columns={5} />
      </InternalPageSection>

      <InternalPageSection
        id="what-we-build"
        marker="09 / WHAT WE BUILD"
        title="Systems, Not Isolated Features."
        introduction="Established DDMSS Work demonstrates how multiple physical and digital components can be shaped into one coherent system architecture."
        tone="quiet"
      >
        <ol className={styles.workList} aria-label="Established DDMSS system examples">
          {content.work.map((system, index) => (
            <li key={system.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{system.title}</h3>
                <p>{system.description}</p>
              </div>
              <small>{system.architecture}</small>
            </li>
          ))}
        </ol>
        <SecondaryButton href="/work" prefetch={false} className={styles.workAction}>
          Explore Established Work
        </SecondaryButton>
      </InternalPageSection>
    </InternalPageShell>
  );
}
