import Image from "next/image";

import styles from "./digital-twin-experience.module.css";

export function DigitalTwinVisual() {
  return (
    <figure className={styles.twinEnvironment} aria-labelledby="twin-visual-caption">
      <span className={`${styles.coordinate} ${styles.coordinateTop}`}>DT / ENVIRONMENT 07</span>
      <span className={`${styles.coordinate} ${styles.coordinateBottom}`}>OBSERVATION PLANE / SYNCHRONIZED</span>

      <div className={styles.physicalReference}>
        <div className={styles.visualLabel}><span>Physical Asset</span><small>Live / Operational</small></div>
        <Image
          src="/visuals/industrial-asset.png"
          width={1536}
          height={1024}
          sizes="(max-width: 768px) calc(100vw - 40px), 22vw"
          alt="Industrial facility representing a live physical asset."
        />
      </div>

      <div className={styles.telemetryBridge} aria-hidden="true">
        <span className={styles.telemetryTitle}>Live Telemetry</span>
        <svg className={styles.desktopTelemetry} viewBox="0 0 820 650">
          <path className={styles.telemetryBase} d="M176 454C296 422 345 293 512 265M194 486C334 452 386 345 558 323M205 519C349 501 421 405 603 389M224 548C386 551 469 475 654 457" />
          <path className={styles.telemetryActive} d="M176 454C296 422 345 293 512 265M194 486C334 452 386 345 558 323M205 519C349 501 421 405 603 389M224 548C386 551 469 475 654 457" />
          <path className={styles.telemetryArrow} d="m500 257 12 8-13 6M546 315l12 8-13 6M591 381l12 8-13 6M642 449l12 8-13 6" />
          <g className={styles.sensorNodes}><circle cx="302" cy="394" r="4" /><circle cx="391" cy="342" r="4" /><circle cx="464" cy="445" r="4" /><circle cx="547" cy="497" r="4" /></g>
        </svg>
        <svg className={styles.mobileTelemetry} viewBox="0 0 320 100">
          <path className={styles.telemetryBase} d="M112 7v76M144 7v76M176 7v76M208 7v76" />
          <path className={styles.telemetryActive} d="M112 7v76M144 7v76M176 7v76M208 7v76" />
          <path className={styles.telemetryArrow} d="m106 73 6 10 6-10M138 73l6 10 6-10M170 73l6 10 6-10M202 73l6 10 6-10" />
          <g className={styles.sensorNodes}><circle cx="112" cy="35" r="4" /><circle cx="144" cy="51" r="4" /><circle cx="176" cy="26" r="4" /><circle cx="208" cy="59" r="4" /></g>
        </svg>
        <ul className={styles.channelLabels}><li>Temp</li><li>Pressure</li><li>Flow</li><li>Vibration</li></ul>
      </div>

      <span className={styles.mobileSyncLabel}>Live Data → Synchronized Twin</span>

      <div className={styles.twinReference}>
        <div className={styles.visualLabel}><span>Digital Twin</span><small>Synchronized / Intelligent</small></div>
        <Image
          src="/visuals/industrial-twin.png"
          width={1536}
          height={1024}
          sizes="(max-width: 768px) calc(100vw - 40px), 54vw"
          alt="Synchronized digital twin of an industrial facility with sensor and operational data overlays."
        />
      </div>

      <div className={styles.syncStatus}><span>Sync</span><strong>99.8%</strong><i aria-hidden="true" /></div>
      <div className={styles.intelligenceOutput}><span>Predictive Risk</span><strong>Low</strong><small>Intelligence / Active</small></div>

      <figcaption id="twin-visual-caption" className={styles.srOnly}>
        A live physical industrial asset sends temperature, pressure, flow and vibration telemetry to a synchronized digital twin where operational data is interpreted as predictive intelligence.
      </figcaption>
    </figure>
  );
}
