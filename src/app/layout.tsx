import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DDMSS | Digital Transformation, AI & Intelligent Infrastructure",
    template: "%s | DDMSS",
  },
  description:
    "Oman-based DDMSS designs digital transformation, AI, data, software and connected infrastructure solutions for businesses and real-world operations across the region.",
  openGraph: {
    type: "website",
    siteName: "DDMSS",
    title: "DDMSS | Digital Transformation, AI & Intelligent Infrastructure",
    description:
      "Oman-based DDMSS designs digital transformation, AI, data, software and connected infrastructure solutions for businesses and real-world operations across the region.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="technical-background" aria-hidden="true" />
        <div className="site-shell">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
