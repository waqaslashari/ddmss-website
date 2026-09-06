import type { CapabilityPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import { CapabilitySystemVisual } from "../capability-system-visual";
import { TransformationGovernanceVisual } from "../transformation-governance-visual";
import styles from "../internal-pages.module.css";

function CapabilityHeroVisual({
  slug,
  visualKey,
}: {
  slug: string;
  visualKey: CapabilityPageContent["visualKey"];
}) {
  if (slug === "digital-transformation-governance") {
    return <TransformationGovernanceVisual />;
  }

  return <CapabilitySystemVisual capability={visualKey} />;
}

export function CapabilityPageTemplate({
  content,
}: {
  content: CapabilityPageContent;
}) {
  const relatedContent = (
    <div className={styles.relationshipFlow}>
      <RelatedContent
        id="related-solutions"
        marker="RELATED / SOLUTIONS"
        title="Systems this capability can help shape."
        items={content.relatedSolutions}
      />
      <RelatedContent
        id="relevant-industries"
        marker="RELEVANT / INDUSTRIES"
        title="Operating environments where context matters."
        items={content.relevantIndustries}
      />
    </div>
  );

  return (
    <InternalPageShell
      family={content.family}
      hero={content.hero}
      heroVisual={<CapabilityHeroVisual slug={content.slug} visualKey={content.visualKey} />}
      relatedContent={relatedContent}
      finalCta={content.finalCta}
    >
      <InternalPageSection
        id="what-it-enables"
        marker="01 / WHAT IT ENABLES"
        title={content.sections.enablement.title}
        introduction={content.sections.enablement.introduction}
      >
        <DetailGrid items={content.enablement} ariaLabel={content.sections.enablement.ariaLabel} />
      </InternalPageSection>

      <InternalPageSection
        id="core-areas"
        marker="02 / CORE AREAS"
        title={content.sections.coreAreas.title}
        introduction={content.sections.coreAreas.introduction}
        tone="quiet"
      >
        <DetailGrid
          items={content.coreAreas}
          ariaLabel={content.sections.coreAreas.ariaLabel}
          compact
          columns={content.coreAreas.length === 6 ? 3 : 4}
        />
      </InternalPageSection>

      <InternalPageSection
        id="how-ddmss-applies-it"
        marker="03 / APPLICATION"
        title={content.sections.application.title}
        introduction={content.sections.application.introduction}
      >
        <ProcessRail items={content.application} ariaLabel={content.sections.application.ariaLabel} />
      </InternalPageSection>
    </InternalPageShell>
  );
}
