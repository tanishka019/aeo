import Link from "next/link";
import { BRAND } from "@/config/brand";
import { CONTENT } from "@/config/content";
import { ArrowRight } from "lucide-react";

// ponytail: Pure Monochrome Header — Black, Grey & White
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-900 bg-black/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-lg group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold text-sm tracking-tight transition-transform duration-200 group-hover:scale-105">
            G
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors leading-tight">
              {BRAND.name}
            </span>
            <span className="hidden text-[9px] font-medium tracking-widest text-neutral-400 uppercase sm:block">
              AI Search Visibility
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-neutral-400" aria-label="Main Navigation">
          {CONTENT.header.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-1 py-0.5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sleek White CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#check-omnibar"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-black shadow-sm hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>{CONTENT.header.ctaText}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
}
