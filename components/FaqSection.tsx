import { CONTENT } from "@/config/content";
import { ChevronDown } from "lucide-react";

// ponytail: Pure Monochrome FAQ Accordions — Black, Grey, White
export function FaqSection() {
  const { eyebrow, title, items } = CONTENT.faq;

  return (
    <section id="faq" className="bg-black py-16 sm:py-24 border-b border-neutral-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-neutral-800 bg-[#0D0D0D] p-4 sm:p-5 hover:border-neutral-700 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left font-semibold text-white text-xs sm:text-base focus:outline-none rounded-lg group-open:text-neutral-200">
                <span>{item.question}</span>
                <span className="ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 group-open:text-black group-open:bg-white transition-all duration-200 border border-neutral-800">
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-open:rotate-180" />
                </span>
              </summary>
              <div className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-400 font-normal border-t border-neutral-850 pt-3">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
