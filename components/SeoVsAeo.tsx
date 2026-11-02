import { CONTENT } from "@/config/content";

// ponytail: Pure Monochrome Comparison Table — Black, Grey, White
export function SeoVsAeo() {
  const { eyebrow, title, subtitle, traditionalTitle, aeoTitle, points } = CONTENT.seoVsAeo;

  return (
    <section id="seo-vs-aeo" className="bg-black py-16 sm:py-24 border-b border-neutral-900">
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

        {/* Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-xl border border-neutral-800 bg-[#0D0D0D] shadow-xl">

          {/* Table Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-800">
            <div className="p-5 border-b md:border-b-0 md:border-r border-neutral-800 bg-black/70">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Legacy Approach
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-400 mt-0.5">
                {traditionalTitle}
              </h3>
            </div>

            <div className="p-5 bg-neutral-900/60">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-300">
                The Modern Standard
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white mt-0.5 flex items-center gap-2">
                <span>{aeoTitle}</span>
                <span className="rounded bg-white text-black text-[10px] font-semibold px-2 py-0.5">
                  High-Growth
                </span>
              </h3>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-neutral-800">
            {points.map((pt, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2">

                {/* Legacy SEO cell */}
                <div className="p-5 md:border-r border-neutral-800 bg-black/40">
                  <div className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-1">
                    {pt.dimension}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {pt.seo}
                  </p>
                </div>

                {/* Modern AEO cell */}
                <div className="p-5 bg-neutral-900/20">
                  <div className="text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1">
                    {pt.dimension}
                  </div>
                  <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                    {pt.aeo}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
