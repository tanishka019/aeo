import { CONTENT } from "@/config/content";
import { VisibilityCheck } from "@/components/VisibilityCheck";

// ponytail: Minimal Black, Grey & White centered hero with increased darkness and no badge
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-16 pb-20 sm:pt-28 sm:pb-32 border-b border-neutral-900">

      {/* Background Video (MP4) with graceful fallbacks and cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center opacity-70"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Soft edge blend for smooth contrast and transition into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center animate-fade-in">

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
          When customers ask AI, <br />
          <span className="text-neutral-400 font-light">does it name your business?</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-sm sm:text-lg leading-relaxed text-neutral-400 max-w-2xl mx-auto font-normal">
          {CONTENT.hero.subheadline}
        </p>

        {/* Single-Line Omnibar Input */}
        <div className="mt-8 sm:mt-10">
          <VisibilityCheck />
        </div>

        {/* Monitored Engines Row in Monochrome */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-xs text-neutral-400">
          <span className="text-neutral-500">Audited live across:</span>
          {["ChatGPT 4.5", "Google AI Overviews", "Perplexity Pro", "Claude 3.7"].map((engine) => (
            <span
              key={engine}
              className="rounded-md border border-neutral-800 bg-neutral-900/80 px-2.5 py-1 text-xs text-neutral-300"
            >
              {engine}
            </span>
          ))}
        </div>

        {/* 3 Metrics Strip */}
        <div className="mt-14 sm:mt-16 grid grid-cols-3 gap-4 border-t border-neutral-900 pt-8 max-w-2xl mx-auto">
          {[
            { stat: "3 Engines", label: "Tested live simultaneously" },
            { stat: "60 Seconds", label: "Zero-wait snapshot report" },
            { stat: "100%", label: "Done-for-you execution" },
          ].map(({ stat, label }) => (
            <div key={stat} className="text-center">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">{stat}</p>
              <p className="mt-0.5 text-xs text-neutral-400">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
