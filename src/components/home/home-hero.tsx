import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { HeroEcosystem } from "./hero-ecosystem";
import styles from "./home-hero.module.css";

export function HomeHero() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-var(--header-height))] overflow-clip"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08)_20%,rgba(255,255,255,0.08)_80%,transparent)]"
        aria-hidden="true"
      />

      <div className="content-container grid w-full items-center gap-5 py-12 md:gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:gap-10 lg:py-8 xl:gap-14">
        <div className="relative z-10 max-w-[40rem] py-4 lg:py-10">
          <TechnicalLabel className={`${styles.reveal} ${styles.eyebrow}`}>
            AI · Data · Software · Connected Infrastructure
          </TechnicalLabel>

          <h1
            id="hero-heading"
            className={`${styles.reveal} ${styles.headline} mt-7 mb-5 text-[clamp(3rem,5.45vw,5.25rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance lg:mb-[2.125rem]`}
          >
            <span className="block lg:whitespace-nowrap">Engineering the</span>
            <span className={`gradient-text block lg:whitespace-nowrap ${styles.gradientLine}`}>
              Digital Future.
            </span>
          </h1>

          <p
            className={`${styles.reveal} ${styles.copy} max-w-[37rem] text-[clamp(1rem,1.35vw,1.125rem)] leading-[1.75] text-text-secondary text-pretty`}
          >
            DDMSS designs intelligent digital ecosystems that combine AI, data,
            software and connected infrastructure to transform businesses and
            real-world operations.
          </p>

          <div
            className={`${styles.reveal} ${styles.actions} mt-9 flex flex-col gap-3 sm:flex-row sm:items-center`}
          >
            <PrimaryButton href="/capabilities" className="sm:min-w-48">
              Explore Capabilities
            </PrimaryButton>
            <SecondaryButton href="/contact" className="sm:min-w-48">
              Start a Conversation
            </SecondaryButton>
          </div>

          <div
            className={`${styles.reveal} ${styles.systemLine} mt-10 flex items-center gap-4 font-mono text-[0.625rem] tracking-[0.14em] text-text-subtle uppercase`}
            aria-hidden="true"
          >
            <span className="h-px w-10 bg-white/10" />
            <span>Physical</span>
            <span className="text-accent-cyan/70">↔</span>
            <span>Digital</span>
            <span className="text-accent-cyan/70">↔</span>
            <span>Intelligence</span>
          </div>
        </div>

        <div className={`${styles.reveal} ${styles.visual}`}>
          <HeroEcosystem />
        </div>
      </div>
    </section>
  );
}
