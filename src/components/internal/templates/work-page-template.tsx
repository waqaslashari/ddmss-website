import type { WorkPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import {
  WorkArchitectureVisual,
  WorkHeroVisual,
} from "../work-system-visual";
import styles from "../internal-pages.module.css";

export function WorkPageTemplate({ content }: { content: WorkPageContent }) {
  const relatedContent = (
    <div className={styles.relationshipFlow}>
      <RelatedContent
        id="work-capabilities"
        marker="07 / RELATED CAPABILITIES"
        title="Engineering capabilities behind the system."
        items={content.relatedCapabilities}
      />
      <RelatedContent
        id="work-solutions"
        marker="08 / RELATED SOLUTIONS"
        title="Solutions connected to this system."
        items={content.relatedSolutions}
      />
      <RelatedContent
        id="work-industries"
        marker="09 / RELEVANT INDUSTRIES"
        title="Operating environments where this architecture is relevant."
        items={content.relevantIndustries}
      />
    </div>
  );

  return (
    <InternalPageShell family={content.family} hero={content.hero} heroVisual={<WorkHeroVisual work={content.visualKey} />} relatedContent={relatedContent} finalCta={content.finalCta}>
      <InternalPageSection id="project-context" marker="01 / CONTEXT" title="The operating context.">
        <p className={styles.narrativeText}>{content.context}</p>
      </InternalPageSection>
      <InternalPageSection id="project-challenge" marker="02 / OPERATIONAL CHALLENGE" title="The system challenge." introduction={content.challenge} tone="quiet">
        <DetailGrid items={content.challengeAreas} ariaLabel={`${content.hero.title} operational challenge areas`} columns={3} />
      </InternalPageSection>
      <InternalPageSection id="system-architecture" marker="03 / SYSTEM ARCHITECTURE" title="How the system is structured." introduction={content.architecture}>
        <div className={styles.visualStage}>
          <WorkArchitectureVisual work={content.visualKey} />
        </div>
      </InternalPageSection>
      <InternalPageSection id="project-components" marker="04 / CORE COMPONENTS" title="Technology and system components." tone="quiet">
        <DetailGrid items={content.components} ariaLabel={`${content.hero.title} components and technologies`} columns={3} />
      </InternalPageSection>
      <InternalPageSection id="implementation-approach" marker="05 / IMPLEMENTATION APPROACH" title="A delivery model shaped around the system.">
        <ProcessRail items={content.approach} ariaLabel={`${content.hero.title} implementation approach`} columns={6} />
      </InternalPageSection>
      {content.evidence ? (
        <InternalPageSection
          id="system-evidence"
          marker={content.evidence.marker}
          title={content.evidence.title}
          introduction={content.evidence.introduction}
          tone="quiet"
        >
          <DetailGrid items={content.evidence.items} ariaLabel={`${content.hero.title} system capabilities`} />
        </InternalPageSection>
      ) : null}
    </InternalPageShell>
  );
}
