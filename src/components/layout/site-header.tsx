import Link from "next/link";
import { PrimaryButton } from "@/components/ui/primary-button";
import { primaryNavigation } from "@/lib/constants";
import { BrandMark } from "./brand-mark";
import { HeaderFrame } from "./header-frame";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <HeaderFrame>
      <div className="content-container flex h-full items-center justify-between gap-8">
        <BrandMark />
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-5 xl:gap-7">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative py-3 text-[0.8125rem] font-semibold text-text-secondary transition-colors after:absolute after:right-0 after:bottom-1 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent-cyan after:transition-transform hover:text-foreground hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <PrimaryButton href="/contact" className="min-h-11 px-4 py-2.5">
            Let&apos;s Talk
          </PrimaryButton>
        </div>
        <MobileNavigation />
      </div>
    </HeaderFrame>
  );
}
