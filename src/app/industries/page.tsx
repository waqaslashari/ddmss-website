import type { Metadata } from "next";
import { IndustryIndexVisual } from "@/components/internal/industry-system-visual";
import { InternalIndex } from "@/components/internal/internal-index";
import { industriesIndexContent } from "@/content/industries";
import { createInternalMetadata } from "@/lib/metadata";

export const metadata: Metadata = createInternalMetadata(industriesIndexContent.seo);

export default function IndustriesIndexPage() {
  return (
    <InternalIndex
      content={industriesIndexContent}
      visuals={{
        energy: <IndustryIndexVisual industry="energy" />,
        government: <IndustryIndexVisual industry="government" />,
        smartCities: <IndustryIndexVisual industry="smartCities" />,
        mobility: <IndustryIndexVisual industry="mobility" />,
        manufacturing: <IndustryIndexVisual industry="manufacturing" />,
        logistics: <IndustryIndexVisual industry="logistics" />,
      }}
    />
  );
}
