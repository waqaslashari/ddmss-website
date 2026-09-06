import type { CapabilityPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import { TransformationGovernanceVisual } from "../transformation-governance-visual";
import styles from "../internal-pages.module.css";

function CapabilityHeroVisual({ slug }: { slug: string }) {
  if (slug === "digital-transformation-governance") {
    return <TransformationGovernanceVisual />;
  }

  return null;
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
      heroVisual={<CapabilityHeroVisual slug={content.slug} />}
      relatedContent={relatedContent}
      finalCta={content.finalCta}
    >
      <InternalPageSection
        id="what-it-enables"
        marker="01 / WHAT IT ENABLES"
        title="Transformation with a defined operating logic."
        introduction="A transformation program becomes actionable when business direction, governance, processes and architecture are treated as one connected system."
      >
        <DetailGrid items={content.enablement} ariaLabel="Digital transformation outcomes" />
      </InternalPageSection>

      <InternalPageSection
        id="core-areas"
        marker="02 / CORE AREAS"
        title="The foundations behind responsible change."
        introduction="Each area can be addressed independently, but the strongest transformation direction considers how they affect one another."
        tone="quiet"
      >
        <DetailGrid
          items={content.coreAreas}
          ariaLabel="Digital transformation and governance core areas"
          compact
        />
      </InternalPageSection>

      <InternalPageSection
        id="how-ddmss-applies-it"
        marker="03 / APPLICATION"
        title="From operating context to executable direction."
        introduction="DDMSS begins with how the organization works, then connects strategy and governance to the architecture and delivery path required."
      >
        <ProcessRail items={content.application} ariaLabel="How DDMSS applies this capability" />
      </InternalPageSection>
    </InternalPageShell>
  );
}
