import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="DDMSS home">
      <span className="relative grid size-7 grid-cols-2 gap-[3px]" aria-hidden="true">
        <span className="border border-accent-cyan/80 bg-accent-cyan/10" />
        <span className="border border-white/25 transition-colors group-hover:border-accent-cyan/60" />
        <span className="border border-white/25 transition-colors group-hover:border-accent-cyan/60" />
        <span className="border border-accent-blue/80 bg-accent-blue/10" />
      </span>
      <span className="text-base font-extrabold tracking-[0.18em]">DDMSS</span>
      {!compact ? (
        <span className="hidden border-l border-white/10 pl-3 font-mono text-[0.5625rem] leading-[1.35] tracking-[0.14em] text-text-muted uppercase min-[1180px]:block">
          Digital systems
          <br />
          Engineered
        </span>
      ) : null}
    </Link>
  );
}
