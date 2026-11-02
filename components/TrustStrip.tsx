import { CONTENT } from "@/config/content";

// ponytail: Pure Monochrome Trust Strip — Black, Grey, White
export function TrustStrip() {
  return (
    <section className="border-b border-neutral-900 bg-[#080808] py-6 sm:py-7">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-[11px] font-medium tracking-widest text-neutral-400 uppercase">
          {CONTENT.trustStrip.title}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CONTENT.trustStrip.engines.map((engine) => (
            <div
              key={engine}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-[#121212] px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:border-neutral-600 hover:text-white transition-all duration-200 cursor-default"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              <span>{engine}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
