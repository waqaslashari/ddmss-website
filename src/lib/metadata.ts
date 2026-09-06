import type { Metadata } from "next";
import type { SeoContent } from "@/types/internal-pages";

export function createInternalMetadata(seo: SeoContent): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      type: "website",
      siteName: "DDMSS",
      title: `${seo.title} | DDMSS`,
      description: seo.description,
    },
  };
}
