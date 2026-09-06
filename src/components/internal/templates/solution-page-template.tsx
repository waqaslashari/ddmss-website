import type { SolutionPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import {
  SolutionArchitectureVisual,
  SolutionHeroVisual,
} from "../solution-system-visual";
import styles from "../internal-pages.module.css";

type SolutionPageTemplateProps = {
  content: SolutionPageContent;
};

export function SolutionPageTemplate({ content }: SolutionPageTemplateProps) {
  const relatedContent = (
    <div className={styles.relationshipFlow}>
      <RelatedContent
        id="solution-capabilities"
        marker="RELATED / CAPABILITIES"
        title="Engineering capabilities behind the solution."
        items={content.relatedCapabilities}
      />
      <RelatedContent
        id="solution-industries"
        marker="RELEVANT / INDUSTRIES"
        title="Operating environments for this system."
        items={content.relatedIndustries}
      />
      {content.relatedWork.length ? (
        <RelatedContent
          id="solution-work"
          marker="RELATED / WORK"
          title="Related systems and implementation work."
          items={content.relatedWork}
        />
      ) : null}
    </div>
  );

  return (
    <InternalPageShell
      family={content.family}
      hero={content.hero}
      heroVisual={<SolutionHeroVisual solution={content.visualKey} />}
      relatedContent={relatedContent}
      finalCta={content.finalCta}
    >
      <InternalPageSection id="operational-challenge" marker="01 / OPERATIONAL CHALLENGE" title="The operating need behind the system.">
        <p className={styles.narrativeText}>{content.challenge}</p>
        <ul className={styles.systemList} aria-label={`${content.hero.title} disconnected systems`}>
          {content.challengeSystems.map((system) => <li key={system}>{system}</li>)}
        </ul>
      </InternalPageSection>
      <InternalPageSection id="solution-architecture" marker="02 / SOLUTION ARCHITECTURE" title="A connected system architecture." introduction={content.architecture} tone="quiet">
        <div className={styles.visualStage}>
          <SolutionArchitectureVisual solution={content.visualKey} />
        </div>
      </InternalPageSection>
      <InternalPageSection id="core-components" marker="03 / CORE COMPONENTS" title="The technology layers working together.">
        <DetailGrid items={content.coreComponents} ariaLabel={`${content.hero.title} solution components`} columns={3} />
      </InternalPageSection>
      <InternalPageSection id="how-it-works" marker="04 / OPERATING FLOW" title="How the system works in operation." tone="quiet">
        <ProcessRail items={content.operatingFlow} ariaLabel={`${content.hero.title} operating flow`} columns={5} />
      </InternalPageSection>
      <InternalPageSection id="operational-value" marker="05 / OPERATIONAL VALUE" title="Designed around useful operational outcomes.">
        <DetailGrid items={content.benefits} ariaLabel={`${content.hero.title} operational value`} />
      </InternalPageSection>
    </InternalPageShell>
  );
}
