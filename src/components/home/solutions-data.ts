import type { SolutionSummary, SolutionVisualKey } from "@/types/content";
import { featuredSolutionSummaries } from "@/content/solutions";

export type SolutionKey = Exclude<SolutionVisualKey, "aiPoweredEnterprise">;
export type Solution = Omit<SolutionSummary, "key"> & { key: SolutionKey };

export const solutions = featuredSolutionSummaries as readonly Solution[];
