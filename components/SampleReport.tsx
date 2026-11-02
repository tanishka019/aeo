import { CONTENT } from "@/config/content";
import { Lock, FileText, CheckCircle2, ArrowRight } from "lucide-react";

// ponytail: Pure Monochrome Sample Report preview — Black, Grey, White
export function SampleReport() {
  const { eyebrow, title, subtitle, badge, previewPoints, blurCta } = CONTENT.sampleReport;

  return (
    <section className="bg-black py-16 sm:py-24 border-b border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-400">
            {subtitle}
          </p>
        </div>

        {/* Blurred Preview Card */}
        <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-neutral-800 bg-[#0D0D0D] p-6 sm:p-10 shadow-2xl">

          {/* Report Header */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white font-bold text-xs border border-neutral-800">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  AEO Executive Diagnostic &amp; Citation Matrix
                </h3>
                <span className="text-[11px] text-neutral-400">
                  {badge}
                </span>
              </div>
            </div>
            <span className="rounded bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300 font-medium">
              15 Pages
            </span>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {previewPoints.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="h-4 w-4 text-white shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Blurred Placeholder */}
          <div className="relative select-none pointer-events-none filter blur-[6px] opacity-35">
            <div className="rounded-xl border border-neutral-800 p-4 space-y-4 bg-black">
              <div className="h-5 w-1/3 bg-neutral-800 rounded" />
              <div className="grid grid-cols-4 gap-3">
                <div className="h-16 bg-neutral-900 rounded-lg border border-neutral-800" />
                <div className="h-16 bg-neutral-900 rounded-lg border border-neutral-800" />
                <div className="h-16 bg-neutral-900 rounded-lg border border-neutral-800" />
                <div className="h-16 bg-neutral-900 rounded-lg border border-neutral-800" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-neutral-850 rounded" />
                <div className="h-3 w-5/6 bg-neutral-850 rounded" />
                <div className="h-3 w-4/6 bg-neutral-850 rounded" />
              </div>
            </div>
          </div>

          {/* Locked Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/85 backdrop-blur-[3px] p-4 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-white mb-3">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Complete Client Diagnostic Report
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-md font-normal">
              {blurCta}
            </p>
            <a
              href="#check-omnibar"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white hover:bg-neutral-200 px-5 py-2.5 text-xs sm:text-sm font-semibold text-black shadow-lg transition-all duration-200"
            >
              <span>Start Free 60-Second Check</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
