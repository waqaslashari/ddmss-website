import type { Metadata } from "next";
import { CapabilityIndexVisual } from "@/components/internal/capability-system-visual";
import { InternalIndex } from "@/components/internal/internal-index";
import { capabilitiesIndexContent } from "@/content/capabilities";
import { createInternalMetadata } from "@/lib/metadata";

export const metadata: Metadata = createInternalMetadata(capabilitiesIndexContent.seo);

export default function CapabilitiesIndexPage() {
  return (
    <InternalIndex
      content={capabilitiesIndexContent}
      visuals={{
        transformation: <CapabilityIndexVisual capability="transformation" />,
        intelligence: <CapabilityIndexVisual capability="intelligence" />,
        software: <CapabilityIndexVisual capability="software" />,
        connected: <CapabilityIndexVisual capability="connected" />,
        digitalTwin: <CapabilityIndexVisual capability="digitalTwin" />,
      }}
    />
  );
}
