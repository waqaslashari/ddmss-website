import { HomeHero } from "@/components/home/home-hero";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { OperatingModelSection } from "@/components/home/operating-model-section";
import { PhysicalDigitalSection } from "@/components/home/physical-digital-section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <PhysicalDigitalSection />
      <OperatingModelSection />
      <CapabilitiesSection />
    </>
  );
}
