import styles from "./regional-presence-section.module.css";
import { RealGeographicMap, RegionalGeographyDefinitions } from "./real-geographic-map";

export function RegionalNetworkMap() {
  return (
    <figure
      className={styles.map}
      role="img"
      aria-label="Oman-centered technology network connecting regional markets in the Middle East with technology, delivery, partnership and market relationships across Pakistan, India, the United Kingdom and the United States."
    >
      <RegionalGeographyDefinitions />
      <span className={styles.mapReference}>GLOBAL NETWORK / 12</span>
      <span className={styles.mapCoordinate}>ORIGIN / OMAN · REGIONAL HUB</span>

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
          <path d="M96 66v12M296 66v12M496 66v12M696 66v12M896 66v12M96 538v12M296 538v12M496 538v12M696 538v12M896 538v12" />
        </g>

        <RealGeographicMap />

        <g className={styles.zoneMarkers}>
          <path d="M471 254h102v72H471z" />
          <text x="522" y="280" textAnchor="middle">MIDDLE EAST</text>
          <text x="522" y="298" textAnchor="middle">REGIONAL ZONE</text>
        </g>

        <g className={styles.regionPaths}>
          <path className={styles.routeMiddleEast} d="M570 346C560 334 550 324 542 318" />
          <path className={styles.routePakistan} d="M570 346C579 330 589 319 598 314" />
          <path className={styles.routeIndia} d="M570 346C588 340 607 341 623 346" />
          <path className={styles.routeUnitedKingdom} d="M570 346C518 287 464 236 417 214" />
          <path className={styles.routeUnitedStates} d="M570 346C441 287 304 263 176 278" />
        </g>

        <g className={styles.dataPulses}>
          <circle r="3"><animateMotion dur="7s" begin="1s" repeatCount="indefinite" path="M570 346C560 334 550 324 542 318" /></circle>
          <circle r="3"><animateMotion dur="8s" begin="2.2s" repeatCount="indefinite" path="M570 346C579 330 589 319 598 314" /></circle>
          <circle r="3"><animateMotion dur="8.5s" begin="3s" repeatCount="indefinite" path="M570 346C588 340 607 341 623 346" /></circle>
          <circle r="3"><animateMotion dur="10s" begin="4.1s" repeatCount="indefinite" path="M570 346C518 287 464 236 417 214" /></circle>
          <circle r="3"><animateMotion dur="11s" begin="5s" repeatCount="indefinite" path="M570 346C441 287 304 263 176 278" /></circle>
        </g>

        <g className={styles.regionalNodes}>
          <circle cx="542" cy="318" r="10" /><circle cx="542" cy="318" r="3" />
          <circle cx="598" cy="314" r="10" /><circle cx="598" cy="314" r="3" />
          <circle cx="623" cy="346" r="10" /><circle cx="623" cy="346" r="3" />
        </g>

        <g className={styles.internationalNodes}>
          <circle cx="417" cy="214" r="8" /><circle cx="417" cy="214" r="2.5" />
          <circle cx="176" cy="278" r="8" /><circle cx="176" cy="278" r="2.5" />
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

          <text x="660" y="254" textAnchor="middle" className={styles.regionName}>PAKISTAN</text>
          <text x="660" y="269" textAnchor="middle">TECHNOLOGY / DELIVERY</text>

          <text x="674" y="382" textAnchor="middle" className={styles.regionName}>INDIA</text>
          <text x="674" y="397" textAnchor="middle">TECHNOLOGY / ENGINEERING</text>

          <text x="417" y="178" textAnchor="middle" className={styles.internationalName}>UNITED KINGDOM</text>
          <text x="417" y="193" textAnchor="middle">INTERNATIONAL MARKET</text>

          <text x="176" y="242" textAnchor="middle" className={styles.internationalName}>UNITED STATES</text>
          <text x="176" y="257" textAnchor="middle">INTERNATIONAL MARKET</text>
        </g>

        <g className={styles.labelLeaders}>
          <path d="M570 387v61M603 304l32-17v-6M635 346l39 19v5" />
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
        <RealGeographicMap mobile />
        <g className={styles.mobilePaths}>
          <path className={styles.routeUnitedStates} d="M170 240C116 210 64 201 12 203" />
          <path className={styles.routeUnitedKingdom} d="M170 240C140 209 110 180 86 167" />
          <path className={styles.routeMiddleEast} d="M170 240 155 225" />
          <path className={styles.routePakistan} d="M170 240 185 222" />
          <path className={styles.routeIndia} d="M170 240Q185 233 199 240" />
        </g>
        <g className={styles.mobileInternationalNodes}>
          <circle cx="86" cy="167" r="6" /><circle cx="86" cy="167" r="2.5" />
          <path d="m17 198-5 5 5 5" />
        </g>
        <g className={styles.mobileRegionalNodes}>
          <circle cx="155" cy="225" r="5" /><circle cx="155" cy="225" r="2" />
          <circle cx="185" cy="222" r="5" /><circle cx="185" cy="222" r="2" />
          <circle cx="199" cy="240" r="5" /><circle cx="199" cy="240" r="2" />
        </g>
        <g className={styles.mobileOmanNode}>
          <circle className={styles.omanPulse} cx="170" cy="240" r="32" />
          <circle cx="170" cy="240" r="13" />
          <circle cx="170" cy="240" r="6" />
        </g>
        <g className={styles.mobileMapLabels} textAnchor="middle">
          <text x="68" y="188">US / WEST</text>
          <text x="95" y="131">UNITED KINGDOM</text>
          <text x="170" y="362" className={styles.mobileOmanLabel}>OMAN</text>
          <text x="170" y="382">BASE / PRIMARY MARKET</text>
          <text x="70" y="283">MIDDLE EAST</text>
          <text x="263" y="198">PAKISTAN</text>
          <text x="268" y="306">INDIA</text>
        </g>
        <g className={styles.labelLeaders}>
          <path d="M86 160v-14M24 203h42M151 229l-36 34H70v7M189 219l44-9h30M204 245l64 39v8M170 278v64" />
        </g>
      </svg>

      <span className={styles.mapStatus} aria-hidden="true"><i /> RELATIONSHIPS / CONNECTED</span>
    </figure>
  );
}
