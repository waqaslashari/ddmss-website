import styles from "./regional-presence-section.module.css";

export function RegionalNetworkMap() {
  return (
    <figure
      className={styles.map}
      role="img"
      aria-label="Regional technology network centered on Oman, connecting DDMSS capabilities across Middle Eastern markets and Pakistan's technology and delivery ecosystem."
    >
      <span className={styles.mapReference}>REGIONAL NETWORK / 12</span>
      <span className={styles.mapCoordinate}>23.5880° N / 58.3829° E</span>

      <svg className={styles.desktopMap} viewBox="0 0 820 540" aria-hidden="true">
        <defs>
          <radialGradient id="oman-node-field" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#27d7ff" stopOpacity="0.18" />
            <stop offset="1" stopColor="#27d7ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className={styles.referenceGrid}>
          <path d="M56 72H764M56 180H764M56 288H764M56 396H764M144 44v448M322 44v448M500 44v448M678 44v448" />
          <path d="M72 54v32M56 70h32M748 54v32M732 70h32M72 454v32M56 470h32M748 454v32M732 470h32" />
        </g>

        <g className={styles.geography}>
          <path d="M116 174 147 146l44 4 29-26 63 8 31 30 49 7 27 29 50 5 29 28-13 42-32 22-3 37-31 12-22-20-31 8-23-26-53-4-35-32-45-10-24-38-48-11z" />
          <path d="m469 231 18-16 22 8 16 31-13 32-23 15-25-22z" />
          <path d="m525 202 39-34 43 8 18 32-10 42-36 35-43-16-11-34z" />
          <path d="m625 176 38-31 48 21 28 48-17 57-47 22-36-33-25-53z" />
          <path d="m339 344 38-12 36 21 32-4 21 25-8 31-45 14-51-11-32-29z" />
        </g>

        <g className={styles.regionPaths}>
          <path d="M476 302C420 252 346 222 276 210" />
          <path d="M476 302C540 244 612 218 679 225" />
          <path d="M476 302C442 349 395 378 354 382" />
        </g>

        <g className={styles.pathNodes}>
          <circle cx="425" cy="263" r="3" />
          <circle cx="362" cy="230" r="3" />
          <circle cx="532" cy="258" r="3" />
          <circle cx="605" cy="230" r="3" />
        </g>

        <g className={styles.secondaryNode}>
          <circle cx="276" cy="210" r="9" />
          <circle cx="276" cy="210" r="3" />
          <path d="M276 210h-66l-16-16h-83" />
        </g>

        <g className={styles.secondaryNode}>
          <circle cx="679" cy="225" r="9" />
          <circle cx="679" cy="225" r="3" />
          <path d="M679 225h31l14-14h58" />
        </g>

        <g className={styles.omanField}>
          <circle cx="476" cy="302" r="82" fill="url(#oman-node-field)" />
          <circle cx="476" cy="302" r="30" />
          <circle cx="476" cy="302" r="12" />
          <circle cx="476" cy="302" r="4" />
          <path d="M476 258v-20M476 366v-20M432 302h-20M540 302h-20" />
        </g>

        <g className={styles.mapLabels}>
          <text x="110" y="169" className={styles.regionName}>MIDDLE EAST</text>
          <text x="110" y="187">REGIONAL MARKETS</text>
          <text x="110" y="202">ENTERPRISE / INFRASTRUCTURE</text>

          <text x="782" y="185" textAnchor="end" className={styles.regionName}>PAKISTAN</text>
          <text x="782" y="203" textAnchor="end">TECHNOLOGY / ENGINEERING</text>
          <text x="782" y="218" textAnchor="end">DELIVERY ECOSYSTEM</text>

          <text x="476" y="403" textAnchor="middle" className={styles.omanName}>OMAN</text>
          <text x="476" y="421" textAnchor="middle">BASE / PRIMARY MARKET</text>
          <text x="476" y="436" textAnchor="middle">CLIENT DELIVERY</text>
        </g>

        <g className={styles.axisLabels}>
          <text x="65" y="113">REGION / WEST</text>
          <text x="755" y="113" textAnchor="end">REGION / EAST</text>
          <text x="65" y="478">NETWORK / CONNECTED</text>
          <text x="755" y="478" textAnchor="end">SYSTEM / REGIONAL</text>
        </g>
      </svg>

      <svg className={styles.mobileMap} viewBox="0 0 340 310" aria-hidden="true">
        <g className={styles.mobileReference}>
          <path d="M28 48h284M28 260h284M52 28v252M288 28v252" />
        </g>
        <g className={styles.mobilePaths}>
          <path d="M170 155 78 92M170 155l92-63" />
        </g>
        <g className={styles.mobileSecondaryNode}>
          <circle cx="78" cy="92" r="9" /><circle cx="78" cy="92" r="3" />
          <circle cx="262" cy="92" r="9" /><circle cx="262" cy="92" r="3" />
        </g>
        <g className={styles.mobileOmanNode}>
          <circle cx="170" cy="155" r="54" />
          <circle cx="170" cy="155" r="24" />
          <circle cx="170" cy="155" r="6" />
        </g>
        <g className={styles.mobileMapLabels} textAnchor="middle">
          <text x="78" y="63">MIDDLE EAST</text>
          <text x="262" y="63">PAKISTAN</text>
          <text x="170" y="229" className={styles.mobileOmanLabel}>OMAN</text>
          <text x="170" y="247">BASE / PRIMARY MARKET</text>
        </g>
      </svg>

      <span className={styles.mapStatus} aria-hidden="true"><i /> NETWORK / CONNECTED</span>
    </figure>
  );
}
