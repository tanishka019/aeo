import { CONTENT } from "@/config/content";
import { VisibilityCheck } from "@/components/VisibilityCheck";

// ponytail: Pure Monochrome Final CTA — Black, Grey, White
export function FinalCta() {
  const { title, subtitle } = CONTENT.finalCta;

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28 text-white border-b border-neutral-900">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal max-w-xl mx-auto">
          {subtitle}
        </p>

        {/* Embedded Single-Line Check Omnibar */}
        <div className="mt-10 max-w-2xl mx-auto">
          <VisibilityCheck />
        </div>

      </div>
    </section>
  );
}
