import Link from "next/link";
import { BRAND } from "@/config/brand";
import { CONTENT } from "@/config/content";
import { MessageSquare, Mail, Phone, ShieldCheck } from "lucide-react";

// ponytail: Pure Monochrome Footer — Black, Grey, White
export function Footer() {
  const { disclaimer, dpdpNotice, links, whatsappText } = CONTENT.footer;

  return (
    <footer className="bg-black text-neutral-400 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Main Row */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 pb-10 border-b border-neutral-900">

          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black font-bold text-xs">
                G
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {BRAND.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-normal">
              {BRAND.shortDescription}
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="h-4 w-4" />
              <span>{BRAND.legalName} · India</span>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Direct Contact
            </span>

            <a
              href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(BRAND.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0D0D0D] hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-3.5 py-2 text-xs sm:text-sm font-medium text-white transition-all w-fit shadow-xs"
            >
              <MessageSquare className="h-4 w-4 text-white" />
              <span>{whatsappText}</span>
            </a>

            <div className="mt-2 flex flex-col gap-1.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-neutral-400" />
                <a href={`mailto:${BRAND.contactEmail}`} className="hover:text-white transition-colors">
                  {BRAND.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-neutral-400" />
                <span>{BRAND.phone}</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Pages &amp; Policy
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              {links.map((lk) => (
                <li key={lk.href}>
                  <Link href={lk.href} className="hover:text-white transition-colors">
                    {lk.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Notices */}
        <div className="pt-8 flex flex-col gap-4 text-[11px] leading-relaxed text-neutral-500">
          <p>{dpdpNotice}</p>
          <p>{disclaimer}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-neutral-900 gap-2">
            <span>&copy; 2026 {BRAND.legalName}. All rights reserved.</span>
            <span className="text-neutral-400">Built for the AI Search Era.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
