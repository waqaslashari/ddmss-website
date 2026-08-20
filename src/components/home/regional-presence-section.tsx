import { TechnicalLabel } from "@/components/ui/technical-label";
import { RegionalNetworkMap } from "./regional-network-map";
import styles from "./regional-presence-section.module.css";

const regions = [
  {
    name: "Oman",
    primary: "Base / Primary Market",
    descriptors: ["Client Delivery"],
  },
  {
    name: "Middle East",
    primary: "Regional Markets",
    descriptors: ["Enterprise Solutions", "Smart Infrastructure"],
  },
  {
    name: "Pakistan",
    primary: "Technology / Delivery Ecosystem",
    descriptors: ["Engineering"],
  },
  {
    name: "India",
    primary: "Technology / Engineering Ecosystem",
    descriptors: ["Digital Delivery"],
  },
  {
    name: "United Kingdom",
    primary: "International Market",
    descriptors: ["Partnerships", "Technology"],
  },
  {
    name: "United States",
    primary: "International Market",
    descriptors: ["Technology Ecosystem", "Innovation"],
  },
] as const;

export function RegionalPresenceSection() {
  return (
    <section className={styles.section} aria-labelledby="regional-presence-heading">
      <div className={styles.handoff} aria-hidden="true">
        <span>Systems</span><i /><span>Region</span>
      </div>

      <div className="content-container">
        <div className={styles.composition}>
          <div className={styles.narrative}>
            <TechnicalLabel>12 / Regional Presence</TechnicalLabel>
            <h2 id="regional-presence-heading">
              <span>Built in Oman.</span>
              <span>Engineered for the Region.</span>
            </h2>
            <p>DDMSS is based in Oman, with technology, delivery and market relationships extending across the Middle East and selected international markets.</p>
            <strong className={styles.regionalLine}>Oman · Middle East · Pakistan · India · UK · US</strong>
          </div>

          <RegionalNetworkMap />

          <ol className={styles.regionList} aria-label="DDMSS regional positioning">
            {regions.map((region, index) => (
              <li key={region.name} className={index === 0 ? styles.primaryRegion : undefined}>
                <span className={styles.regionIndex}>0{index + 1}</span>
                <div>
                  <h3>{region.name}</h3>
                  <p>{region.primary}</p>
                  <ul aria-label={`${region.name} capabilities`}>
                    {region.descriptors.map((descriptor) => <li key={descriptor}>{descriptor}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.sectionEnd} aria-hidden="true">
          <span>Where We Connect</span><i /><span>What We Think About</span>
        </div>
      </div>
    </section>
  );
}
