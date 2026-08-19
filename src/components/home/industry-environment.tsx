import Image from "next/image";

import type { IndustryKey } from "@/content/industries";
import styles from "./industries-section.module.css";

type IndustryEnvironmentProps = {
  industry: IndustryKey;
  label: string;
};

function DataField({ variant }: { variant: IndustryKey }) {
  return (
    <svg className={styles.dataField} viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className={styles.perspectiveGrid}>
        <path d="M48 475 480 280 912 475M110 508 480 304 850 508M202 540 480 330 758 540" />
        <path d="m86 540 394-210 394 210M220 540l260-210 260 210M354 540l126-210 126 210M480 330v210" />
      </g>
      <g className={styles.environmentPaths}>
        <path d="M112 416C230 350 282 390 372 318S522 178 674 215s132 126 210 106" />
        <path d="M92 462c156-24 244 26 345-54s188-94 350-40" />
      </g>
      <g className={styles.environmentNodes}>
        <circle cx="112" cy="416" r="4" />
        <circle cx="372" cy="318" r="4" />
        <circle cx="674" cy="215" r="4" />
        <circle cx="884" cy="321" r="4" />
        <circle cx="437" cy="408" r="4" />
      </g>
      <text className={styles.fieldCode} x="42" y="54">ENV / {variant.toUpperCase()}</text>
      <text className={styles.fieldCode} x="762" y="526">SYSTEM / CONNECTED</text>
    </svg>
  );
}

function EnergyScene() {
  return (
    <>
      <DataField variant="energy" />
      <svg className={styles.sceneSilhouette} viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className={styles.energyStructures}>
          <path d="M68 438h150m-112 0 25-156h34l24 156m-70-112h58m-64 40h70m-76 40h82" />
          <path d="M720 420h168M742 420v-96h66v96m10 0v-142h42v142M745 346h60m17-40h34" />
          <ellipse cx="674" cy="383" rx="52" ry="16" />
          <path d="M622 383v53m104-53v53m-104 0c20 18 84 18 104 0" />
          <path d="M218 440h178l38-62h108" />
        </g>
        <g className={styles.activeEdge}>
          <path d="M94 438h312l42-68h112" />
          <path d="M165 287v-34h56" />
        </g>
      </svg>
      <Image className={`${styles.assetImage} ${styles.energyAsset}`} src="/visuals/industrial-asset.png" width={1536} height={1024} sizes="(max-width: 767px) 92vw, 56vw" alt="" />
      <span className={`${styles.sceneDatum} ${styles.datumPrimary}`}>FIELD NETWORK / ACTIVE</span>
      <span className={`${styles.sceneDatum} ${styles.datumSecondary}`}>ASSET CLUSTER / 07</span>
    </>
  );
}

function GovernmentScene() {
  return (
    <>
      <DataField variant="government" />
      <svg className={styles.sceneSilhouette} viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className={styles.civicStructures}>
          <path d="M304 418V238h338v180M278 238l195-110 195 110M324 418h298M350 274v116m64-116v116m118-116v116m64-116v116M446 418v-86h54v86" />
          <path d="M78 418V294h168v124M96 318h132M112 346h42v38h-42m58-38h42v38h-42M714 418V260h164v158M738 292h116m-98 34h80m-80 38h80" />
          <path d="M248 452h428M106 452h98m530 0h116" />
          <path d="M128 418v34m50-34v34m584-34v34m48-34v34" />
        </g>
        <g className={styles.servicePaths}>
          <path d="M246 338C282 338 282 294 324 294M642 294c42 0 42 44 72 44M178 452c92 54 186 54 277 0M500 452c86 52 176 52 262 0" />
          <path d="M473 128V82M473 82H178v212M473 82h319v178" />
        </g>
        <g className={styles.activeEdge}>
          <path d="M178 294v-42h112M792 260v-50H654M246 338h78M642 294h72" />
          <path d="M385 452h176M473 128V82" />
        </g>
        <g className={styles.secureNodes}>
          <circle cx="178" cy="252" r="8" /><circle cx="473" cy="82" r="9" /><circle cx="792" cy="210" r="8" />
          <rect x="373" y="441" width="24" height="22" rx="2" /><rect x="549" y="441" width="24" height="22" rx="2" />
        </g>
        <g className={styles.operationalLabels}>
          <text x="405" y="112">PUBLIC SERVICES</text>
          <text x="416" y="218">CIVIC HUB</text>
          <text x="102" y="280">SERVICE PORTAL</text>
          <text x="730" y="246">DATA PLATFORM</text>
          <text x="414" y="486">WORKFLOW / SECURE</text>
        </g>
      </svg>
      <span className={`${styles.sceneDatum} ${styles.datumPrimary}`}>SERVICE NETWORK / SECURE</span>
      <span className={`${styles.sceneDatum} ${styles.datumSecondary}`}>WORKFLOW / CONNECTED</span>
    </>
  );
}

function SmartCitiesScene() {
  return (
    <>
      <DataField variant="smartCities" />
      <svg className={styles.sceneSilhouette} viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className={styles.cityStructures}>
          <path d="M70 432V308h98v124m26 0V230h116v202M84 338h70m54-70h88M98 370v30m28-30v30m104-70v32m36-32v32" />
          <path d="M510 432v-88h80v88m30 0V270h108v162m28 0V324h112v108M644 306h60m76 54h64" />
        </g>
        <g className={styles.activeEdge}>
          <path d="M120 308v-48h132v-60h92M550 344v-76h124v-58h112" />
          <path d="M344 200c92 0 124 42 176 42s100-32 166-32M92 456c142-74 276-74 398-12s230 56 382-28" />
        </g>
        <g className={styles.urbanNodes}>
          <circle cx="120" cy="260" r="7" /><circle cx="344" cy="200" r="7" /><circle cx="674" cy="210" r="7" /><circle cx="786" cy="210" r="7" />
          <rect x="790" y="370" width="42" height="42" rx="3" /><path d="M801 398v-16h20v16m-10-16v-9" />
          <rect x="84" y="420" width="56" height="34" rx="3" /><path d="M96 438h32" />
        </g>
        <g className={styles.operationalLabels}>
          <text x="64" y="474">MOBILITY PATH</text>
          <text x="778" y="432">ENERGY NODE</text>
          <text x="72" y="410">PARKING</text>
        </g>
      </svg>
      <Image className={`${styles.assetImage} ${styles.cityAsset}`} src="/visuals/smart-facility.png" width={1536} height={1024} sizes="(max-width: 767px) 82vw, 45vw" alt="" />
      <span className={`${styles.sceneDatum} ${styles.datumPrimary}`}>URBAN SYSTEM / SYNCHRONIZED</span>
      <span className={`${styles.sceneDatum} ${styles.datumSecondary}`}>DISTRICT / 03</span>
    </>
  );
}

function MobilityScene() {
  return (
    <>
      <DataField variant="mobility" />
      <svg className={styles.sceneSilhouette} viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className={styles.mobilityStructures}>
          <path d="M42 438h876M118 438l194-258h336l194 258M366 180 238 438m356-258 128 258" />
          <path d="M480 194v56m0 40v58m0 40v50" />
          <path d="M104 382h98m556 0h98M128 334h108m488 0h108" />
          <path d="M82 250h128v82H82zm24 22h78m-78 24h78M760 282h112v92H760m24-92v92m-8-46h104" />
          <path d="M106 438v-58h42v58m-32-58v-44h22v44M796 248v-68h28v68m-14-68v-32" />
        </g>
        <g className={styles.mobilityTelemetry}>
          <path d="M146 250C240 168 326 148 414 184M824 180C704 132 624 146 548 188M126 336c52 28 92 50 130 92M810 248c-58 38-92 76-116 136" />
        </g>
        <g className={styles.activeEdge}>
          <path d="M312 180h336l194 258" />
          <path d="M144 438c98-68 202-72 308-28s222 35 364-44" />
        </g>
        <g className={styles.mobilityNodes}>
          <circle cx="146" cy="250" r="7" /><circle cx="414" cy="184" r="7" /><circle cx="548" cy="188" r="7" /><circle cx="824" cy="180" r="7" />
          <circle cx="126" cy="336" r="6" /><circle cx="810" cy="248" r="6" />
        </g>
        <g className={styles.operationalLabels}>
          <text x="92" y="238">SMART PARKING</text>
          <text x="770" y="270">ACCESS</text>
          <text x="78" y="462">EV / CHARGING</text>
          <text x="756" y="164">MOBILITY DATA</text>
        </g>
      </svg>
      <Image className={`${styles.assetImage} ${styles.mobilityAsset}`} src="/visuals/smart-mobility-ev.png" width={1536} height={1024} sizes="(max-width: 767px) 62vw, 32vw" alt="" />
      <span className={`${styles.sceneDatum} ${styles.datumPrimary}`}>CORRIDOR / CONNECTED</span>
      <span className={`${styles.sceneDatum} ${styles.datumSecondary}`}>FLEET DATA / LIVE</span>
    </>
  );
}

function ManufacturingScene() {
  return (
    <>
      <DataField variant="manufacturing" />
      <svg className={styles.sceneSilhouette} viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className={styles.factoryStructures}>
          <path d="M70 448V206h820v242M70 250h820M116 206v-54h42v54m650 0v-82h48v82" />
          <path d="M118 386h690v56H118zm36 18h620M164 442v22m84-22v22m84-22v22m84-22v22m84-22v22m84-22v22m84-22v22m84-22v22" />
          <path d="M150 386V286h142v100M172 310h98v48h-98M344 386V270h146v116M374 300h86v58h-86M542 386V294h122v92M566 320h74v40h-74" />
          <path d="M718 386V258h112v128M738 282h72v92M760 282v-34h30v34" />
          <circle cx="186" cy="414" r="10" /><circle cx="270" cy="414" r="10" /><circle cx="382" cy="414" r="10" /><circle cx="466" cy="414" r="10" /><circle cx="578" cy="414" r="10" /><circle cx="648" cy="414" r="10" /><circle cx="754" cy="414" r="10" />
        </g>
        <g className={styles.machineArms}>
          <path d="M220 286v-38h42l30 28M417 270v-46h50l34 30M604 294v-42h38l34 32" />
          <circle cx="292" cy="276" r="8" /><circle cx="501" cy="254" r="8" /><circle cx="676" cy="284" r="8" />
        </g>
        <g className={styles.productionFlow}>
          <path d="M112 414h704M292 276c24 38 20 75 8 110M501 254c22 42 20 84 12 132M676 284c18 38 18 70 10 102" />
        </g>
        <g className={styles.activeEdge}>
          <path d="M118 414h690M292 276c24 38 20 75 8 110M501 254c22 42 20 84 12 132" />
          <path d="M206 152h602" />
        </g>
        <g className={styles.productionNodes}>
          <circle cx="186" cy="414" r="7" /><circle cx="382" cy="414" r="7" /><circle cx="578" cy="414" r="7" /><circle cx="754" cy="414" r="7" />
        </g>
        <g className={styles.healthyNodes}>
          <circle cx="292" cy="276" r="5" /><circle cx="501" cy="254" r="5" /><circle cx="676" cy="284" r="5" /><circle cx="774" cy="248" r="5" />
        </g>
        <g className={styles.operationalLabels}>
          <text x="154" y="274">MACHINE CELL / 01</text>
          <text x="350" y="258">MACHINE CELL / 02</text>
          <text x="548" y="282">AUTOMATION CELL</text>
          <text x="722" y="238">INSPECTION</text>
          <text x="354" y="488">PRODUCTION FLOW / HEALTHY</text>
        </g>
      </svg>
      <span className={`${styles.sceneDatum} ${styles.datumPrimary}`}>PRODUCTION / OPTIMIZED</span>
      <span className={`${styles.sceneDatum} ${styles.datumSecondary}`}>LINE STATUS / NORMAL</span>
    </>
  );
}

function LogisticsScene() {
  return (
    <>
      <DataField variant="logistics" />
      <svg className={styles.sceneSilhouette} viewBox="0 0 960 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g className={styles.logisticsStructures}>
          <path d="M72 378V154h520v224M52 154l286-94 274 94M108 378V218h448v160M126 218h412" />
          <path d="M148 378V270h82v108m34 0V270h82v108m34 0V270h82v108m34 0V270h42v108" />
          <path d="M126 270h412M164 294h50m66 0h50m66 0h50" />
          <path d="M650 394h166l62 48H618l32-48Zm32 0v-74h100l58 74m-130-74v74M662 342h36m48 0h36" />
          <circle cx="674" cy="442" r="22" /><circle cx="832" cy="442" r="22" />
          <path d="M626 184h238v96H626zm22 24h72v48h-72m92-48h100v48H740M694 208v48m96-48v48" />
          <path d="M84 456h84m-42 0v-72m-24 22h48m-48 24h48M180 456h400" />
        </g>
        <g className={styles.yardGeometry}>
          <path d="M96 500h770M198 456l-38 44m122-44-38 44m122-44-38 44m122-44-38 44m122-44-38 44" />
          <path d="M580 456h286M600 480h240" />
        </g>
        <g className={styles.trackedRoute}>
          <path d="M126 384v72h490c42 0 52-14 52-42M338 60v-34h410v158M864 280v82" />
        </g>
        <g className={styles.activeEdge}>
          <path d="M126 384v72h490c42 0 52-14 52-42M338 60v-34h410v158" />
          <path d="M864 280v82M592 184h34" />
        </g>
        <g className={styles.logisticsNodes}>
          <circle cx="126" cy="384" r="7" /><circle cx="338" cy="60" r="7" /><circle cx="748" cy="184" r="7" /><circle cx="864" cy="362" r="7" />
        </g>
        <g className={styles.operationalLabels}>
          <text x="246" y="138">WAREHOUSE / ACTIVE</text>
          <text x="154" y="256">LOADING BAYS</text>
          <text x="640" y="172">PALLET / CONTAINER ZONES</text>
          <text x="70" y="478">SMART ACCESS</text>
          <text x="620" y="488">YARD FLOW / TRACKED</text>
        </g>
      </svg>
      <span className={`${styles.sceneDatum} ${styles.datumPrimary}`}>YARD FLOW / TRACKED</span>
      <span className={`${styles.sceneDatum} ${styles.datumSecondary}`}>ACCESS / AUTHORIZED</span>
    </>
  );
}

export function IndustryEnvironment({ industry, label }: IndustryEnvironmentProps) {
  return (
    <div className={styles.environment} data-environment={industry} role="img" aria-label={label}>
      {industry === "energy" && <EnergyScene />}
      {industry === "government" && <GovernmentScene />}
      {industry === "smartCities" && <SmartCitiesScene />}
      {industry === "mobility" && <MobilityScene />}
      {industry === "manufacturing" && <ManufacturingScene />}
      {industry === "logistics" && <LogisticsScene />}
      <span className={styles.scanLine} aria-hidden="true" />
    </div>
  );
}
