import type { IndustryPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import {
  IndustryArchitectureVisual,
  IndustryHeroVisual,
} from "../industry-system-visual";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import styles from "../internal-pages.module.css";

export function IndustryPageTemplate({ content }: { content: IndustryPageContent }) {
  return (
    <InternalPageShell family={content.family} hero={content.hero} heroVisual={<IndustryHeroVisual industry={content.visualKey} />} finalCta={content.finalCta}>
      <InternalPageSection id="operational-context" marker="01 / OPERATING ENVIRONMENT" title="Technology begins with the environment.">
        <p className={styles.narrativeText}>{content.operationalContext}</p>
      </InternalPageSection>
      <InternalPageSection id="industry-challenges" marker="02 / KEY CHALLENGES" title="The conditions the system must account for." tone="quiet">
        <DetailGrid items={content.challenges} ariaLabel="Industry challenges" />
      </InternalPageSection>
      <div className={styles.relationshipFlow}>
        <RelatedContent id="industry-capabilities" marker="03 / RELEVANT CAPABILITIES" title="Capabilities shaped for this environment." items={content.capabilities} />
        <RelatedContent id="industry-solutions" marker="04 / RELEVANT SOLUTIONS" title="Systems that address the operating context." items={content.solutions} />
      </div>
      <InternalPageSection id="industry-architecture" marker="05 / EXAMPLE ARCHITECTURE" title="A system designed around real operations." introduction={content.architecture}>
        <div className={styles.visualStage}>
          <IndustryArchitectureVisual industry={content.visualKey} />
        </div>
      </InternalPageSection>
      <InternalPageSection id="industry-application" marker="06 / APPLICATION MODEL" title="How DDMSS applies technology in this environment." tone="quiet">
        <ProcessRail items={content.application} ariaLabel={`${content.hero.title} application model`} columns={6} />
      </InternalPageSection>
      {content.relatedWork.length ? (
        <div className={styles.relationshipFlow}>
          <RelatedContent id="industry-work" marker="RELATED / WORK" title="Related system and implementation work." items={content.relatedWork} />
        </div>
      ) : null}
    </InternalPageShell>
  );
}
