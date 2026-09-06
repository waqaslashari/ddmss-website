import {
  REGIONAL_COASTLINE_PATH,
  REGIONAL_LAND_PATH,
} from "./regional-geography-data";
import styles from "./regional-presence-section.module.css";

type RealGeographicMapProps = {
  mobile?: boolean;
};

export function RegionalGeographyDefinitions() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className={styles.geographyDefinitions}>
      <defs>
        <path id="ddmss-regional-land" d={REGIONAL_LAND_PATH} />
        <path id="ddmss-regional-coast" d={REGIONAL_COASTLINE_PATH} />
      </defs>
    </svg>
  );
}

/**
 * Static, code-native geography derived from Natural Earth 1:110m vectors.
 * The mobile transform crops the same source around Europe, Oman and South Asia.
 */
export function RealGeographicMap({ mobile = false }: RealGeographicMapProps) {
  return (
    <g
      className={mobile ? styles.mobileGeography : styles.geography}
      transform={mobile ? "translate(-143.5 49.7) scale(.55)" : undefined}
    >
      <use className={styles.landMasses} href="#ddmss-regional-land" />
      <use className={styles.coastlines} href="#ddmss-regional-coast" />

      <g className={styles.dataTexture}>
        <circle cx="176" cy="278" r="1.6" />
        <circle cx="205" cy="294" r="1.2" />
        <circle cx="378" cy="226" r="1.3" />
        <circle cx="417" cy="214" r="1.7" />
        <circle cx="472" cy="266" r="1.1" />
        <circle cx="522" cy="308" r="1.4" />
        <circle cx="542" cy="318" r="1.2" />
        <circle cx="570" cy="346" r="1.8" />
        <circle cx="598" cy="314" r="1.4" />
        <circle cx="623" cy="346" r="1.3" />
      </g>

      <g className={styles.dataContours}>
        <path d="M476 304C506 285 548 284 584 303" />
        <path d="M505 336C536 321 584 319 620 334" />
        <path d="M342 239C370 220 410 211 450 220" />
      </g>
    </g>
  );
}
