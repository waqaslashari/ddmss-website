import styles from "./regional-presence-section.module.css";

export function RegionalNetworkMap() {
  return (
    <figure
      className={styles.map}
      role="img"
      aria-label="Oman-centered technology network connecting regional markets in the Middle East with technology, delivery, partnership and market relationships across Pakistan, India, the United Kingdom and the United States."
    >
      <span className={styles.mapReference}>GLOBAL NETWORK / 12</span>
      <span className={styles.mapCoordinate}>ORIGIN / 23.5880° N · 58.3829° E</span>

      <svg className={styles.desktopMap} viewBox="0 0 1000 610" aria-hidden="true">
        <defs>
          <radialGradient id="oman-global-field" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#27d7ff" stopOpacity="0.2" />
            <stop offset="1" stopColor="#27d7ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className={styles.referenceGrid}>
          <path d="M48 72H952M48 190H952M48 308H952M48 426H952M48 544H952" />
          <path d="M102 44v522M302 44v522M502 44v522M702 44v522M902 44v522" />
          <path d="M64 54v34M48 71h32M936 54v34M920 71h32M64 526v34M48 543h32M936 526v34M920 543h32" />
        </g>

        <g className={styles.geography}>
          <path d="M54 176 85 118l64-38 73 19 35 43-12 47-44 27-20 52-57 24-48-39z" />
          <path d="m212 284 38 25 16 54-22 84-43 61-34-26 9-77-22-58z" />
          <path d="m320 145 45-34 68 16 30 38-19 40-61 7-46-24z" />
          <path d="m378 224 62-12 71 25 55 56-26 49-72-4-30-50-62-28z" />
          <path d="m543 252 52-20 54 18 30 45-26 52-48 24-48-28-27-45z" />
          <path d="m651 218 76-55 97-7 91 43 23 58-54 35-82-17-42 42-68-31z" />
          <path d="m742 318 49-13 37 34-12 72-35 42-28-38 7-54z" />
        </g>

        <g className={styles.zoneMarkers}>
          <path d="M471 254h102v72H471z" />
          <text x="522" y="280" textAnchor="middle">MIDDLE EAST</text>
          <text x="522" y="298" textAnchor="middle">REGIONAL ZONE</text>
        </g>

        <g className={styles.regionPaths}>
          <path className={styles.routeMiddleEast} d="M570 346C555 324 540 306 522 290" />
          <path className={styles.routePakistan} d="M570 346C640 304 702 283 750 276" />
          <path className={styles.routeIndia} d="M570 346C668 360 742 382 792 403" />
          <path className={styles.routeUnitedKingdom} d="M570 346C505 254 436 189 389 162" />
          <path className={styles.routeUnitedStates} d="M570 346C435 244 283 190 148 180" />
        </g>

        <g className={styles.dataPulses}>
          <circle r="3"><animateMotion dur="7s" begin="1s" repeatCount="indefinite" path="M570 346C555 324 540 306 522 290" /></circle>
          <circle r="3"><animateMotion dur="8s" begin="2.2s" repeatCount="indefinite" path="M570 346C640 304 702 283 750 276" /></circle>
          <circle r="3"><animateMotion dur="8.5s" begin="3s" repeatCount="indefinite" path="M570 346C668 360 742 382 792 403" /></circle>
          <circle r="3"><animateMotion dur="10s" begin="4.1s" repeatCount="indefinite" path="M570 346C505 254 436 189 389 162" /></circle>
          <circle r="3"><animateMotion dur="11s" begin="5s" repeatCount="indefinite" path="M570 346C435 244 283 190 148 180" /></circle>
        </g>

        <g className={styles.regionalNodes}>
          <circle cx="522" cy="290" r="10" /><circle cx="522" cy="290" r="3" />
          <circle cx="750" cy="276" r="10" /><circle cx="750" cy="276" r="3" />
          <circle cx="792" cy="403" r="10" /><circle cx="792" cy="403" r="3" />
        </g>

        <g className={styles.internationalNodes}>
          <circle cx="389" cy="162" r="8" /><circle cx="389" cy="162" r="2.5" />
          <circle cx="148" cy="180" r="8" /><circle cx="148" cy="180" r="2.5" />
        </g>

        <g className={styles.omanField}>
          <circle className={styles.omanPulse} cx="570" cy="346" r="88" fill="url(#oman-global-field)" />
          <circle cx="570" cy="346" r="34" />
          <circle cx="570" cy="346" r="14" />
          <circle cx="570" cy="346" r="4.5" />
          <path d="M570 296v-22M570 418v-22M520 346h-22M642 346h-22" />
        </g>

        <g className={styles.mapLabels}>
          <text x="570" y="467" textAnchor="middle" className={styles.omanName}>OMAN</text>
          <text x="570" y="486" textAnchor="middle">BASE / PRIMARY MARKET</text>
          <text x="570" y="502" textAnchor="middle">CLIENT DELIVERY</text>

          <text x="750" y="244" textAnchor="middle" className={styles.regionName}>PAKISTAN</text>
          <text x="750" y="259" textAnchor="middle">TECHNOLOGY / DELIVERY</text>

          <text x="792" y="437" textAnchor="middle" className={styles.regionName}>INDIA</text>
          <text x="792" y="452" textAnchor="middle">TECHNOLOGY / ENGINEERING</text>

          <text x="389" y="130" textAnchor="middle" className={styles.internationalName}>UNITED KINGDOM</text>
          <text x="389" y="145" textAnchor="middle">INTERNATIONAL MARKET</text>

          <text x="148" y="148" textAnchor="middle" className={styles.internationalName}>UNITED STATES</text>
          <text x="148" y="163" textAnchor="middle">INTERNATIONAL MARKET</text>
        </g>

        <g className={styles.axisLabels}>
          <text x="58" y="106">NORTH AMERICA / WEST</text>
          <text x="400" y="106">EUROPE</text>
          <text x="610" y="106">MIDDLE EAST / SOUTH ASIA</text>
          <text x="58" y="566">RELATIONSHIP NETWORK / CONNECTED</text>
          <text x="942" y="566" textAnchor="end">ORIGIN / OMAN</text>
        </g>
      </svg>

      <svg className={styles.mobileMap} viewBox="0 0 340 470" aria-hidden="true">
        <g className={styles.mobileReference}>
          <path d="M28 42h284M28 430h284M52 24v424M288 24v424" />
        </g>
        <g className={styles.mobilePaths}>
          <path className={styles.routeUnitedStates} d="M170 240C126 182 130 107 170 64" />
          <path className={styles.routeUnitedKingdom} d="M170 240V137" />
          <path className={styles.routeMiddleEast} d="M170 240 70 360" />
          <path className={styles.routePakistan} d="M170 240v146" />
          <path className={styles.routeIndia} d="M170 240 270 360" />
        </g>
        <g className={styles.mobileInternationalNodes}>
          <circle cx="170" cy="64" r="8" /><circle cx="170" cy="64" r="2.5" />
          <circle cx="170" cy="137" r="8" /><circle cx="170" cy="137" r="2.5" />
        </g>
        <g className={styles.mobileRegionalNodes}>
          <circle cx="70" cy="360" r="10" /><circle cx="70" cy="360" r="3" />
          <circle cx="170" cy="386" r="10" /><circle cx="170" cy="386" r="3" />
          <circle cx="270" cy="360" r="10" /><circle cx="270" cy="360" r="3" />
        </g>
        <g className={styles.mobileOmanNode}>
          <circle className={styles.omanPulse} cx="170" cy="240" r="58" />
          <circle cx="170" cy="240" r="26" />
          <circle cx="170" cy="240" r="6" />
        </g>
        <g className={styles.mobileMapLabels} textAnchor="middle">
          <text x="170" y="42">UNITED STATES</text>
          <text x="170" y="116">UNITED KINGDOM</text>
          <text x="170" y="316" className={styles.mobileOmanLabel}>OMAN</text>
          <text x="170" y="331">BASE / PRIMARY MARKET</text>
          <text x="70" y="391">MIDDLE EAST</text>
          <text x="170" y="419">PAKISTAN</text>
          <text x="270" y="391">INDIA</text>
        </g>
      </svg>

      <span className={styles.mapStatus} aria-hidden="true"><i /> RELATIONSHIPS / CONNECTED</span>
    </figure>
  );
}
