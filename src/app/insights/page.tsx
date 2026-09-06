import type { Metadata } from "next";
import { InsightIndexVisual } from "@/components/internal/insight-editorial-visual";
import { InternalIndex } from "@/components/internal/internal-index";
import { insightsIndexContent } from "@/content/insights";
import { createInternalMetadata } from "@/lib/metadata";

export const metadata: Metadata = createInternalMetadata(insightsIndexContent.seo);

export default function InsightsIndexPage() {
  return (
    <InternalIndex
      content={insightsIndexContent}
      visuals={{
        aiGovernance: <InsightIndexVisual insight="aiGovernance" />,
        digitalTwins: <InsightIndexVisual insight="digitalTwins" />,
        smartMobility: <InsightIndexVisual insight="smartMobility" />,
      }}
    />
  );
}
