import type { Metadata } from "next";
import { InternalIndex } from "@/components/internal/internal-index";
import { WorkIndexVisual } from "@/components/internal/work-system-visual";
import { workIndexContent } from "@/content/featured-work";
import { createInternalMetadata } from "@/lib/metadata";

export const metadata: Metadata = createInternalMetadata(workIndexContent.seo);

export default function WorkIndexPage() {
  return (
    <InternalIndex
      content={workIndexContent}
      visuals={{
        smartParking: <WorkIndexVisual work="smartParking" />,
        evCharging: <WorkIndexVisual work="evCharging" />,
        industrialOperations: <WorkIndexVisual work="industrialOperations" />,
      }}
    />
  );
}
