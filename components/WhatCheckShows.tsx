import { CONTENT } from "@/config/content";
import { Percent, Users, Database, Zap } from "lucide-react";

// ponytail: Pure Monochrome Value Cards — Black, Grey, White
export function WhatCheckShows() {
  const { eyebrow, title, subtitle, cards } = CONTENT.whatCheckShows;

  const icons = [
    <Percent key="percent" className="h-4 w-4 text-white" />,
    <Users key="users" className="h-4 w-4 text-white" />,
    <Database key="db" className="h-4 w-4 text-white" />,
    <Zap key="zap" className="h-4 w-4 text-white" />,
  ];

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

        {/* 4 Value Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-[#0D0D0D] p-5 sm:p-6 hover:border-neutral-600 transition-all duration-200"
            >
              <div>
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                  {icons[idx]}
                </div>

                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-400 font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-850 text-[11px] font-medium text-neutral-400 group-hover:text-white transition-colors">
                Included in Free Audit →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
