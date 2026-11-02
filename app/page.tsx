import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { WhatCheckShows } from "@/components/WhatCheckShows";
import { HowWeWork } from "@/components/HowWeWork";
import { SeoVsAeo } from "@/components/SeoVsAeo";
import { SampleReport } from "@/components/SampleReport";
import { Testimonials } from "@/components/Testimonials";
import { LatestBlog } from "@/components/LatestBlog";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Header (Navigation & Quick CTA) */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero (Hook + Above-The-Fold Check Form on 390px) */}
        <Hero />

        {/* 3. Trust Strip (Names of AI Engines Covered) */}
        <TrustStrip />

        {/* 4. The Problem (Realistic AI Answer Mock + Missing Client Alert) */}
        <ProblemSection />

        {/* 5. What The Check Shows (4 Value Breakdown Cards) */}
        <WhatCheckShows />

        {/* 6. How We Work (3 Done-For-You Steps: Audit, Optimise, Track) */}
        <HowWeWork />

        {/* 7. SEO vs AEO (Plain-Word Comparison Matrix) */}
        <SeoVsAeo />

        {/* 8. Sample Report (Curiosity-Driven Blurred Preview) */}
        <SampleReport />

        {/* 9. Testimonials (Hidden until verified per PRD rule) */}
        <Testimonials />

        {/* 10. Latest Blog Posts (Authority & Case Studies) */}
        <LatestBlog />

        {/* 11. FAQ (Accessible Native Details/Summary Accordions) */}
        <FaqSection />

        {/* 12. Final CTA (Second Chance Check Form) */}
        <FinalCta />
      </main>

      {/* 13. Footer (Legal, WhatsApp Click-To-Chat, DPDP Notice) */}
      <Footer />
    </div>
  );
}
