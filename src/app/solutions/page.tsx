import type { Metadata } from "next";
import { InternalIndex } from "@/components/internal/internal-index";
import { SolutionIndexVisual } from "@/components/internal/solution-system-visual";
import { solutionsIndexContent } from "@/content/solutions";
import { createInternalMetadata } from "@/lib/metadata";

export const metadata: Metadata = createInternalMetadata(solutionsIndexContent.seo);

export default function SolutionsIndexPage() {
  return (
    <InternalIndex
      content={solutionsIndexContent}
      visuals={{
        smartParking: <SolutionIndexVisual solution="smartParking" />,
        evCharging: <SolutionIndexVisual solution="evCharging" />,
        digitalTwins: <SolutionIndexVisual solution="digitalTwins" />,
        intelligentOperations: <SolutionIndexVisual solution="intelligentOperations" />,
        smartFacilities: <SolutionIndexVisual solution="smartFacilities" />,
        aiPoweredEnterprise: <SolutionIndexVisual solution="aiPoweredEnterprise" />,
      }}
    />
  );
}
