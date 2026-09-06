"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { Solution, SolutionKey } from "./solutions-data";
import styles from "./solutions-section.module.css";

type SolutionsShowcaseProps = {
  solutions: readonly Solution[];
};

function StatusOverlay({ label, value, status = false, className = "" }: { label: string; value: string; status?: boolean; className?: string }) {
  return (
    <div className={`${styles.statusOverlay} ${className}`}>
      <span>{label}</span>
      <strong className={status ? styles.statusValue : ""}>{value}</strong>
    </div>
  );
}

function ConnectionLayer({ variant }: { variant: "horizontal" | "network" }) {
  return (
    <svg className={styles.connectionLayer} viewBox="0 0 800 440" aria-hidden="true">
      {variant === "horizontal" ? (
        <>
          <path className={styles.connectionBase} d="M110 235h580" />
          <path className={styles.connectionActive} d="M110 235h580" />
          <path className={styles.connectionArrow} d="m674 226 16 9-16 9" />
          <circle className={styles.connectionNode} cx="305" cy="235" r="5" />
          <circle className={styles.connectionNodeViolet} cx="510" cy="235" r="5" />
        </>
      ) : (
        <>
          <path className={styles.connectionBase} d="M160 104 392 225 655 120M392 225l214 174M392 225 126 366" />
          <path className={styles.connectionActive} d="M160 104 392 225 655 120M392 225l214 174M392 225 126 366" />
          <circle className={styles.connectionNode} cx="392" cy="225" r="5" />
          <circle className={styles.connectionNodeViolet} cx="655" cy="120" r="5" />
        </>
      )}
    </svg>
  );
}

function SmartParkingVisual() {
  return (
    <div className={`${styles.solutionVisual} ${styles.parkingVisual}`}>
      <Image className={styles.parkingImage} src="/visuals/smart-parking.png" width={1536} height={1024} sizes="(max-width: 768px) calc(100vw - 40px), 48vw" alt="Connected smart parking facility with managed parking zones and access infrastructure." />
      <StatusOverlay label="Occupancy" value="82%" className={styles.parkingOccupancy} />
      <StatusOverlay label="Gate 01" value="Online" status className={styles.parkingGate} />
      <div className={styles.systemBadge}><span />System / Connected</div>
    </div>
  );
}

function EvChargingVisual() {
  return (
    <div className={`${styles.solutionVisual} ${styles.evVisual}`}>
      <ConnectionLayer variant="horizontal" />
      <Image className={styles.chargerImage} src="/visuals/ev-charger.png" width={1024} height={1536} sizes="(max-width: 768px) 28vw, 15vw" alt="Connected electric vehicle charging pedestal." />
      <Image className={styles.evImage} src="/visuals/smart-mobility-ev.png" width={1536} height={1024} sizes="(max-width: 768px) 65vw, 31vw" alt="Electric vehicle connected to a managed charging network." />
      <div className={styles.flowLegend} aria-hidden="true"><span>Driver</span><span>Charger</span><span>Cloud</span><span>CMS</span></div>
      <StatusOverlay label="Charger" value="Available" status className={styles.evStatus} />
      <StatusOverlay label="Network" value="Connected" status className={styles.evNetwork} />
    </div>
  );
}

function DigitalTwinsVisual() {
  return (
    <div className={`${styles.solutionVisual} ${styles.twinsVisual}`}>
      <ConnectionLayer variant="horizontal" />
      <div className={`${styles.assetPair} ${styles.physicalPair}`}>
        <span>Physical Asset</span>
        <Image src="/visuals/industrial-asset.png" width={1536} height={1024} sizes="(max-width: 768px) 86vw, 25vw" alt="Live industrial facility representing a physical operational asset." />
      </div>
      <div className={`${styles.assetPair} ${styles.digitalPair}`}>
        <span>Digital Twin</span>
        <Image src="/visuals/industrial-twin.png" width={1536} height={1024} sizes="(max-width: 768px) 86vw, 29vw" alt="Synchronized digital twin of an industrial facility with operational data." />
      </div>
      <div className={styles.telemetryBadge}>Telemetry / Live</div>
      <StatusOverlay label="Sync" value="99.8%" className={styles.twinSync} />
      <StatusOverlay label="Asset Health" value="94%" className={styles.twinHealth} />
    </div>
  );
}

function IntelligentOperationsVisual() {
  return (
    <div className={`${styles.solutionVisual} ${styles.operationsVisual}`}>
      <ConnectionLayer variant="network" />
      <Image className={styles.operationsAsset} src="/visuals/industrial-asset.png" width={1536} height={1024} sizes="(max-width: 768px) 78vw, 38vw" alt="Industrial operation connected to data, compute and intelligent automation." />
      <Image className={styles.operationsCloud} src="/visuals/cloud-server.png" width={1536} height={1024} sizes="(max-width: 768px) 32vw, 15vw" alt="Cloud data system connected to operational infrastructure." />
      <Image className={styles.operationsRack} src="/visuals/rack-server.png" width={1024} height={1536} sizes="(max-width: 768px) 20vw, 9vw" alt="Edge compute system supporting intelligent operations." />
      <StatusOverlay label="Data Stream" value="Active" status className={styles.operationsStatus} />
      <div className={styles.operationsLegend}><span>IoT</span><span>Data</span><span>AI</span><span>Automation</span></div>
    </div>
  );
}

function SmartFacilitiesVisual() {
  return (
    <div className={`${styles.solutionVisual} ${styles.facilitiesVisual}`}>
      <ConnectionLayer variant="network" />
      <Image className={styles.facilityImage} src="/visuals/smart-facility.png" width={1536} height={1024} sizes="(max-width: 768px) 92vw, 46vw" alt="Connected smart facility integrating building and operational systems." />
      <Image className={styles.facilityCharger} src="/visuals/ev-charger.png" width={1024} height={1536} sizes="(max-width: 768px) 18vw, 8vw" alt="EV charging infrastructure integrated with a smart facility." />
      <StatusOverlay label="Systems" value="Connected" status className={styles.facilityStatus} />
      <StatusOverlay label="Energy" value="Normal" status className={styles.facilityEnergy} />
    </div>
  );
}

function SolutionVisual({ solutionKey }: { solutionKey: SolutionKey }) {
  return {
    smartParking: <SmartParkingVisual />,
    evCharging: <EvChargingVisual />,
    digitalTwins: <DigitalTwinsVisual />,
    intelligentOperations: <IntelligentOperationsVisual />,
    smartFacilities: <SmartFacilitiesVisual />,
  }[solutionKey];
}

function TechnologyTags({ solution }: { solution: Solution }) {
  return <ul className={styles.tags} aria-label={`${solution.title} technologies`}>{solution.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
}

function ExploreSolution({ solution }: { solution: Solution }) {
  return (
    <Link href={solution.href} className={styles.exploreLink} aria-label={`Explore ${solution.title}`}>
      <span>Explore</span><ArrowIcon className={styles.arrow} />
    </Link>
  );
}

export function SolutionsShowcase({ solutions }: SolutionsShowcaseProps) {
  const [activeKey, setActiveKey] = useState<SolutionKey>("smartParking");
  const selectorRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeSolution = solutions.find((solution) => solution.key === activeKey) ?? solutions[0];

  function moveSelection(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % solutions.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + solutions.length) % solutions.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = solutions.length - 1;
    else return;
    event.preventDefault();
    setActiveKey(solutions[nextIndex].key);
    selectorRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <div className={styles.desktopShowcase}>
        <div className={styles.selector}>
          <p className={styles.selectorLabel}>Solution Index / 01—05</p>
          <div role="tablist" aria-label="Select a solution" aria-orientation="vertical">
          {solutions.map((solution, index) => {
            const isActive = solution.key === activeSolution.key;
            return (
              <button
                key={solution.key}
                ref={(element) => { selectorRefs.current[index] = element; }}
                id={`solution-tab-${solution.key}`}
                type="button"
                role="tab"
                className={styles.selectorButton}
                aria-selected={isActive}
                aria-controls="solution-active-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveKey(solution.key)}
                onFocus={() => setActiveKey(solution.key)}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && !event.currentTarget.closest('[role="tablist"]')?.contains(document.activeElement)) setActiveKey(solution.key);
                }}
                onKeyDown={(event) => moveSelection(event, index)}
              >
                <span className={styles.selectorNumber}>{solution.number}</span>
                <span>{solution.title}</span>
                <i aria-hidden="true" />
              </button>
            );
          })}
          </div>
        </div>

        <article key={activeSolution.key} id="solution-active-panel" role="tabpanel" aria-labelledby={`solution-tab-${activeSolution.key}`} className={styles.activeSolution}>
          <SolutionVisual solutionKey={activeSolution.key} />
          <div className={styles.activeCopy}>
            <div>
              <span className={styles.activeLabel}>{activeSolution.number} / Active Solution</span>
              <h3>{activeSolution.title}</h3>
            </div>
            <div className={styles.activeDetails}>
              <p>{activeSolution.description}</p>
              <TechnologyTags solution={activeSolution} />
              <ExploreSolution solution={activeSolution} />
            </div>
          </div>
        </article>
      </div>

      <ol className={styles.mobileSolutions} aria-label="DDMSS solutions">
        {solutions.map((solution) => (
          <li key={solution.key} className={styles.mobileSolution}>
            <span className={styles.mobileIndex}>{solution.number} / Solution</span>
            <h3>{solution.title}</h3>
            <SolutionVisual solutionKey={solution.key} />
            <p>{solution.description}</p>
            <TechnologyTags solution={solution} />
            <ExploreSolution solution={solution} />
          </li>
        ))}
      </ol>
    </>
  );
}
