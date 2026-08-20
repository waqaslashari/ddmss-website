import type { InsightVisual as InsightVisualKey } from "@/content/insights";

import styles from "./insights-section.module.css";

type InsightVisualProps = {
  visual: InsightVisualKey;
};

function GovernanceVisual() {
  return (
    <svg className={styles.diagram} viewBox="0 0 680 440" aria-hidden="true">
      <g className={styles.referenceLines}>
        <path d="M52 92H188M492 92h136M52 348h136M492 348h136" />
        <path d="M96 52v80M584 52v80M96 308v80M584 308v80" />
      </g>
      <g className={styles.governanceFlow}>
        <path d="M340 84v55M340 202v48M340 314v44" />
        <path d="M340 218 178 265M340 218l162 47" />
        <path d="M178 303 340 336 502 303" />
      </g>
      <g className={styles.diagramNodes}>
        <rect x="256" y="50" width="168" height="42" rx="2" />
        <rect x="237" y="139" width="206" height="64" rx="4" className={styles.primaryNode} />
        <rect x="112" y="262" width="132" height="42" rx="2" />
        <rect x="274" y="262" width="132" height="42" rx="2" />
        <rect x="436" y="262" width="132" height="42" rx="2" />
        <rect x="244" y="357" width="192" height="44" rx="2" />
      </g>
      <g className={styles.nodeLabels} textAnchor="middle">
        <text x="340" y="76">BUSINESS OBJECTIVE</text>
        <text x="340" y="169" className={styles.emphasisLabel}>AI GOVERNANCE</text>
        <text x="340" y="186" className={styles.microLabel}>OVERSIGHT / ACTIVE</text>
        <text x="178" y="288">DATA</text>
        <text x="340" y="288">POLICY</text>
        <text x="502" y="288">RISK</text>
        <text x="340" y="383">CONTROLLED DECISION</text>
      </g>
      <g className={styles.activeNodes}>
        <circle cx="340" cy="116" r="3" />
        <circle cx="340" cy="226" r="3" />
        <circle cx="340" cy="336" r="3" />
      </g>
    </svg>
  );
}

function DigitalTwinsVisual() {
  return (
    <svg className={styles.diagram} viewBox="0 0 560 300" aria-hidden="true">
      <g className={styles.referenceLines}>
        <path d="M34 48h92M434 48h92M34 252h92M434 252h92" />
        <path d="M62 32v44M498 32v44M62 224v44M498 224v44" />
      </g>
      <path className={styles.processRail} d="M90 173H470" />
      <g className={styles.twinAsset}>
        <path d="M55 171h72v-56h-19V91H77v24H55z" />
        <path d="M64 171v-43h54M77 115h31M86 91v80" />
        <circle cx="91" cy="173" r="6" />
      </g>
      <g className={styles.telemetryMarks}>
        <path d="M148 164v18M158 157v32M168 150v46M178 160v26" />
      </g>
      <g className={styles.twinModel}>
        <path d="m280 106 56 32v64l-56 32-56-32v-64z" />
        <path d="m224 138 56 32 56-32M280 170v64M224 202l56-32 56 32" />
        <path d="m246 151 34-20 34 20v38l-34 20-34-20z" />
      </g>
      <g className={styles.intelligenceNode}>
        <circle cx="468" cy="173" r="34" />
        <circle cx="468" cy="173" r="20" />
        <path d="M468 129v-14M468 231v-14M424 173h-14M526 173h-14" />
      </g>
      <g className={styles.nodeLabels} textAnchor="middle">
        <text x="91" y="218">PHYSICAL</text>
        <text x="164" y="218">DATA</text>
        <text x="280" y="268">DIGITAL</text>
        <text x="468" y="218">INTELLIGENCE</text>
      </g>
      <g className={styles.activeNodes}>
        <circle cx="204" cy="173" r="3" />
        <circle cx="382" cy="173" r="3" />
        <circle cx="468" cy="173" r="3" />
      </g>
    </svg>
  );
}

function SmartMobilityVisual() {
  return (
    <svg className={styles.diagram} viewBox="0 0 560 300" aria-hidden="true">
      <g className={styles.referenceLines}>
        <path d="M36 52h94M430 52h94M36 248h94M430 248h94" />
        <path d="M64 34v46M496 34v46M64 220v46M496 220v46" />
      </g>
      <g className={styles.mobilityPaths}>
        <path d="M102 150h75M215 150h76M329 150h75M442 150h38" />
        <path d="M102 150 66 103M102 150l-36 47M480 150l28-47M480 150l28 47" />
      </g>
      <g className={styles.mobilityCore}>
        <rect x="405" y="121" width="74" height="58" rx="3" />
        <path d="M418 138h48M418 149h48M418 160h32" />
      </g>
      <g className={styles.vehicleIcon}>
        <path d="m46 96 8-16h25l10 16v14H46z" />
        <path d="M56 82h20l7 14H50z" />
        <circle cx="56" cy="109" r="4" /><circle cx="79" cy="109" r="4" />
      </g>
      <g className={styles.parkingIcon}>
        <path d="M46 178h42v39H46zM57 189h12c11 0 11 15 0 15H57zM57 189v26" />
      </g>
      <g className={styles.chargerIcon}>
        <rect x="486" y="72" width="31" height="46" rx="2" />
        <path d="M493 81h17v14h-17zM517 85c12 0 12 22 1 22M491 119h22M501 119v8" />
      </g>
      <g className={styles.paymentIcon}>
        <rect x="485" y="182" width="43" height="30" rx="2" />
        <path d="M491 191h31M493 202h10" />
      </g>
      <g className={styles.mobilityNodes}>
        <circle cx="102" cy="150" r="8" /><circle cx="196" cy="150" r="8" />
        <circle cx="310" cy="150" r="8" /><circle cx="423" cy="150" r="8" />
        <circle cx="480" cy="150" r="8" />
      </g>
      <g className={styles.nodeLabels} textAnchor="middle">
        <text x="67" y="68">VEHICLE</text><text x="67" y="237">PARKING</text>
        <text x="196" y="180">ACCESS</text><text x="310" y="180">CONNECTIVITY</text>
        <text x="442" y="207">OPERATIONS</text><text x="505" y="61">EV CHARGING</text>
        <text x="506" y="232">PAYMENTS</text>
      </g>
    </svg>
  );
}

export function InsightVisual({ visual }: InsightVisualProps) {
  return (
    <div className={styles.visual} data-visual={visual}>
      <span className={styles.visualMarker}>Editorial / System View</span>
      {visual === "aiGovernance" ? <GovernanceVisual /> : null}
      {visual === "digitalTwins" ? <DigitalTwinsVisual /> : null}
      {visual === "smartMobility" ? <SmartMobilityVisual /> : null}
      <span className={styles.visualCoordinate} aria-hidden="true">DDMSS / INSIGHT</span>
    </div>
  );
}
