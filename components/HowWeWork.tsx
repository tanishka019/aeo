import { CONTENT } from "@/config/content";
import { ArrowRight, ShieldCheck } from "lucide-react";

// ponytail: Pure Monochrome Process Steps — Black, Grey, White
export function HowWeWork() {
  const { eyebrow, title, subtitle, steps } = CONTENT.howWeWork;

  return (
    <section id="how-it-works" className="bg-black py-16 sm:py-24 border-b border-neutral-900">
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

        {/* 3 Process Steps */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 bg-[#0D0D0D] p-6 sm:p-7 hover:border-neutral-600 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-neutral-600">
                    {st.step}
                  </span>
                  <span className="text-[10px] font-semibold text-neutral-300 bg-neutral-900 px-2.5 py-0.5 rounded border border-neutral-800">
                    Done For You
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-400 font-normal">
                  {st.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white transition-colors">
                <span>Phase 0{idx + 1} Deliverable</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-10 mx-auto max-w-xl text-center rounded-xl bg-[#0D0D0D] p-4 sm:p-5 border border-neutral-800 text-white">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white mb-1">
            <ShieldCheck className="h-4 w-4" />
            <span>Zero Technical Work Required From Your Team</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed font-normal">
            We handle entity schema graphs, third-party citation building, and continuous weekly AI answer defense tracking.
          </p>
        </div>

      </div>
    </section>
  );
}
