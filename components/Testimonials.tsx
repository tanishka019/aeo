// ponytail: PRD Rule: "Placeholder component, hidden until real testimonials exist; never fake ones."
// When real client case studies are verified, add items to the array and set SHOW_TESTIMONIALS to true.

export const SHOW_TESTIMONIALS = false;

export function Testimonials() {
  if (!SHOW_TESTIMONIALS) {
    return null;
  }

  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-20 border-b border-[#E5DCCE]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-[#0F172A]">
          Client Case Studies
        </h2>
      </div>
    </section>
  );
}
