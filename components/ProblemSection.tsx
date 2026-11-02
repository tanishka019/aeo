import { CONTENT } from "@/config/content";
import { AlertCircle, Bot } from "lucide-react";

// ponytail: Pure Monochrome Problem Section — Black, Grey, White
export function ProblemSection() {
  const { eyebrow, title, description, mockPrompt, mockEngine, mockResponseCompetitor, mockMissingAlert } =
    CONTENT.problemSection;

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
            {description}
          </p>
        </div>

        {/* AI Answer UI Mock */}
        <div className="mx-auto mt-10 sm:mt-14 max-w-3xl rounded-2xl border border-neutral-800 bg-[#0D0D0D] shadow-2xl overflow-hidden">

          {/* Chrome Header */}
          <div className="flex items-center justify-between border-b border-neutral-800 bg-black/80 px-4 py-3 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="ml-2 font-medium text-white">{mockEngine}</span>
            </div>
            <span className="text-[10px] text-neutral-300 border border-neutral-700 bg-neutral-800 px-2 py-0.5 rounded">
              Live Synthesis
            </span>
          </div>

          <div className="p-5 sm:p-7">
            {/* User Prompt */}
            <div className="mb-5 flex items-start gap-3 rounded-xl bg-black p-3.5 border border-neutral-800">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-black font-bold text-xs">
                Q
              </div>
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wide">
                  Buyer Query:
                </span>
                <p className="text-sm font-medium text-white mt-0.5">
                  &ldquo;{mockPrompt}&rdquo;
                </p>
              </div>
            </div>

            {/* AI Synthesized Answer */}
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-800 text-white font-bold text-xs border border-neutral-700">
                <Bot className="h-3.5 w-3.5" />
              </div>
              <div className="w-full">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">AI Recommendation Engine</span>
                  <span className="text-[10px] text-neutral-300 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                    Citations Verified
                  </span>
                </div>

                <div className="mt-2.5 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-neutral-200 font-sans">
                  {mockResponseCompetitor}
                </div>
              </div>
            </div>

            {/* Missing Alert */}
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-neutral-900 p-4 border border-neutral-700 text-neutral-200">
              <AlertCircle className="h-4 w-4 shrink-0 text-white mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-white">
                  Where is your business in this answer?
                </p>
                <p className="mt-0.5 text-neutral-400 leading-relaxed font-normal">
                  {mockMissingAlert}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
