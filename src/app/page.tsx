import { HomeHero } from "@/components/home/home-hero";
import { IndustriesSection } from "@/components/home/industries-section";
import { InsightsSection } from "@/components/home/insights-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { CredibilitySection } from "@/components/home/credibility-section";
import { DigitalTwinExperience } from "@/components/home/digital-twin-experience";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { OperatingModelSection } from "@/components/home/operating-model-section";
import { PhysicalDigitalSection } from "@/components/home/physical-digital-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { SmartParkingExperience } from "@/components/home/smart-parking-experience";

export default function Home() {
  return (
    <>
      <HomeHero />
      <PhysicalDigitalSection />
      <OperatingModelSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <SmartParkingExperience />
      <DigitalTwinExperience />
      <IndustriesSection />
      <CredibilitySection />
      <FeaturedWorkSection />
      <InsightsSection />
    </>
  );
}
