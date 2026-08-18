import Link from "next/link";
import { PrimaryButton } from "@/components/ui/primary-button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { footerNavigation } from "@/lib/constants";
import { BrandMark } from "./brand-mark";

type FooterLinkGroupProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div className="border-t border-white/[0.06] pt-6 md:border-t-0 md:pt-0">
      <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-text-muted uppercase">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm leading-6 text-text-secondary transition-colors hover:text-accent-cyan"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-background-deep/55">
      <div className="content-container">
        <div className="grid gap-8 py-14 md:grid-cols-2 md:gap-14 md:py-16 lg:grid-cols-[1.4fr_1fr_1fr_0.7fr] lg:gap-10 lg:py-20">
          <div className="max-w-sm">
            <BrandMark />
            <p className="mt-6 text-sm leading-7 text-text-secondary">
              Intelligent digital ecosystems combining AI, data, software and
              connected infrastructure.
            </p>
            <TechnicalLabel status className="mt-7 text-status-green">
              Oman / Regional delivery
            </TechnicalLabel>
          </div>
          <FooterLinkGroup
            title="Capabilities"
            links={footerNavigation.capabilities}
          />
          <FooterLinkGroup title="Solutions" links={footerNavigation.solutions} />
          <FooterLinkGroup title="Company" links={footerNavigation.company} />
        </div>

        <div className="grid gap-6 border-t border-white/[0.08] py-9 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:py-10">
          <div>
            <TechnicalLabel>Start a project / DDMSS</TechnicalLabel>
            <p className="mt-3 text-xl font-semibold tracking-[-0.025em]">
              Engineering the Digital Future.
            </p>
          </div>
          <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.08] py-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-6">
          <p>© {new Date().getFullYear()} DDMSS. All rights reserved.</p>
          <p className="border-t border-white/[0.06] pt-3 sm:border-t-0 sm:pt-0">
            Built in Oman. Engineered for the Region.
          </p>
        </div>
      </div>
    </footer>
  );
}
