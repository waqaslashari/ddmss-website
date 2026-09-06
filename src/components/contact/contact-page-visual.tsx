import styles from "./contact-page.module.css";

export function ContactPageVisual() {
  return (
    <svg
      className={styles.contactVisual}
      viewBox="0 0 620 310"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="contact-path" x1="70" y1="250" x2="550" y2="54">
          <stop stopColor="#27d7ff" stopOpacity="0.2" />
          <stop offset="0.58" stopColor="#397bff" stopOpacity="0.52" />
          <stop offset="1" stopColor="#9b6cff" stopOpacity="0.22" />
        </linearGradient>
        <radialGradient id="contact-node" cx="50%" cy="50%" r="50%">
          <stop stopColor="#27d7ff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#27d7ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className={styles.visualGrid}>
        <path d="M32 46h556M32 104h556M32 162h556M32 220h556M32 278h556" />
        <path d="M86 22v270M196 22v270M306 22v270M416 22v270M526 22v270" />
      </g>
      <g className={styles.visualReferences}>
        <path d="M32 70h88M500 254h88M58 278v-54M562 80V26" />
        <path d="M120 250 210 194l94 22 98-108 132-54" />
        <path d="m120 250 106 12 80-46 112 38 116-42" />
        <path d="M210 194 178 104l128 112 24-144 72 36 16 146" />
      </g>
      <g className={styles.visualActivePath}>
        <path d="M120 250 210 194l94 22 98-108 132-54" />
      </g>
      <g className={styles.visualNodes}>
        <circle cx="120" cy="250" r="5" />
        <circle cx="210" cy="194" r="4" />
        <circle cx="304" cy="216" r="7" />
        <circle cx="402" cy="108" r="5" />
        <circle cx="534" cy="54" r="4" />
        <circle cx="178" cy="104" r="3" />
        <circle cx="330" cy="72" r="3" />
        <circle cx="418" cy="254" r="3" />
      </g>
      <circle className={styles.visualCoreAura} cx="304" cy="216" r="44" />
      <g className={styles.visualTicks}>
        <path d="M120 236v-12M210 180v-12M402 94V82M534 40V28" />
      </g>
      <g className={styles.visualText}>
        <text x="42" y="37">CONTACT SYSTEM / 02</text>
        <text x="132" y="235">INTENT</text>
        <text x="222" y="180">CONTEXT</text>
        <text x="318" y="202">DDMSS</text>
        <text x="414" y="94">DEFINITION</text>
        <text x="438" y="282">SIGNAL / READY</text>
      </g>
    </svg>
  );
}
