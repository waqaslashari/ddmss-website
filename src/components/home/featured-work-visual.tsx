import Image from "next/image";

import type { FeaturedWork } from "@/content/featured-work";
import styles from "./featured-work-section.module.css";

function ParkingArchitecture() {
  return (
    <svg className={styles.systemDrawing} viewBox="0 0 760 430" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className={styles.referenceGrid}>
        <path d="M26 372 380 195l354 177M74 408l306-187 306 187M158 430l222-209 222 209M380 195v235M214 430l166-209 166 209" />
      </g>
      <g className={styles.systemBase}>
        <path d="M72 352h222l42-28h185l45 28h126M104 322h152m340 0h76" />
        <path d="M122 352v-62h78v62m-62-62v-34h48v34M575 352v-76h76v76m-62-76v-28h48v28" />
        <path d="M284 314h72v38h-72zm202 0h72v38h-72" />
      </g>
      <g className={styles.systemActive}>
        <path d="M158 256C248 176 347 166 431 211s137 52 182 37" />
        <path d="M200 290h91l44-58h98l53 82" />
      </g>
      <g className={styles.systemNodes}>
        <circle cx="158" cy="256" r="5" /><circle cx="335" cy="232" r="5" /><circle cx="433" cy="211" r="5" /><circle cx="613" cy="248" r="5" />
      </g>
      <g className={styles.drawingLabels}>
        <text x="91" y="242">ACCESS / 01</text><text x="316" y="218">PLATFORM</text><text x="568" y="234">OPERATIONS</text>
      </g>
    </svg>
  );
}

function ChargingArchitecture() {
  return (
    <svg className={styles.systemDrawing} viewBox="0 0 620 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className={styles.referenceGrid}><path d="M28 306H592M58 336H562M92 360H528M120 52v278M310 28v308M500 52v278" /></g>
      <g className={styles.systemBase}>
        <rect x="70" y="74" width="118" height="72" /><path d="M90 96h78M90 116h48" />
        <rect x="432" y="68" width="122" height="82" /><path d="M454 92h78M454 114h55M454 134h67" />
        <path d="M252 112c18-28 88-28 106 0M265 112c18-17 62-17 80 0" />
      </g>
      <g className={styles.systemActive}><path d="M188 110h64M358 110h74M310 112v92" /><path d="M182 248c76-58 171-58 254 0" /></g>
      <g className={styles.systemNodes}><circle cx="252" cy="110" r="5" /><circle cx="358" cy="110" r="5" /><circle cx="310" cy="204" r="5" /></g>
      <g className={styles.drawingLabels}><text x="84" y="62">DRIVER</text><text x="275" y="82">CLOUD</text><text x="458" y="56">CMS</text></g>
    </svg>
  );
}

function IndustrialArchitecture() {
  return (
    <svg className={styles.systemDrawing} viewBox="0 0 620 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className={styles.referenceGrid}><path d="M28 302 310 158l282 144M68 334l242-176 242 176M144 360l166-202 166 202M310 158v202" /></g>
      <g className={styles.systemBase}>
        <rect x="60" y="94" width="132" height="80" /><path d="M82 116h88M82 138h63M82 158h75" />
        <rect x="428" y="80" width="136" height="100" /><path d="M448 104h94M448 128h66M448 152h82" />
        <path d="M267 82h86v110h-86zM284 105h52M284 127h52M284 149h38" />
      </g>
      <g className={styles.systemActive}><path d="M192 134h75M353 134h75M310 192v72M192 154c48 78 186 80 236 0" /></g>
      <g className={styles.systemNodes}><circle cx="267" cy="134" r="5" /><circle cx="353" cy="134" r="5" /><circle cx="310" cy="264" r="5" /></g>
      <g className={styles.drawingLabels}><text x="74" y="80">PHYSICAL ASSET</text><text x="277" y="68">DATA</text><text x="454" y="66">INTELLIGENCE</text></g>
    </svg>
  );
}

export function FeaturedWorkVisual({ work }: { work: FeaturedWork }) {
  return (
    <figure className={styles.visual} data-work={work.key}>
      {work.key === "smartParking" && <ParkingArchitecture />}
      {work.key === "evCharging" && <ChargingArchitecture />}
      {work.key === "industrialOperations" && <IndustrialArchitecture />}

      <Image
        className={`${styles.workImage} ${styles[`${work.key}Image`]}`}
        src={work.image}
        width={1536}
        height={1024}
        sizes={work.key === "smartParking" ? "(max-width: 767px) 100vw, 58vw" : "(max-width: 767px) 100vw, 36vw"}
        alt={work.alt}
      />

      {work.key === "evCharging" && (
        <Image className={`${styles.workImage} ${styles.evVehicle}`} src="/visuals/smart-mobility-ev.png" width={1536} height={1024} sizes="(max-width: 767px) 46vw, 16vw" alt="" />
      )}

      {work.key === "industrialOperations" && (
        <Image className={`${styles.workImage} ${styles.twinLayer}`} src="/visuals/industrial-twin.png" width={1536} height={1024} sizes="(max-width: 767px) 60vw, 22vw" alt="" />
      )}

      <span className={styles.coordinateTop} aria-hidden="true">SYSTEM / ARCHITECTURE</span>
      <span className={styles.coordinateBottom} aria-hidden="true">DDMSS / CONNECTED</span>
      <i className={styles.scanLine} aria-hidden="true" />
    </figure>
  );
}
