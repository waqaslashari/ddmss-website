import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="DDMSS home">
      <span className="relative grid size-7 grid-cols-2 gap-[3px]" aria-hidden="true">
        <span className="border border-accent-cyan/80 bg-accent-cyan/10" />
        <span className="border border-white/25 transition-colors group-hover:border-accent-cyan/60" />
        <span className="border border-white/25 transition-colors group-hover:border-accent-cyan/60" />
        <span className="border border-accent-blue/80 bg-accent-blue/10" />
      </span>
      <span className="text-base font-extrabold tracking-[0.18em]">DDMSS</span>
    </Link>
  );
}
