import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BRAND } from "@/config/brand";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND.name}`,
  description: "Privacy policy and compliance with India's Digital Personal Data Protection (DPDP) Act.",
};

// ponytail: Ultra-minimal Privacy Policy — dark canvas, clean typography
export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090A0F] text-white">
      <Header />

      <main className="flex-1 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          
          <div className="border-b border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-300 bg-white/[0.04] px-3 py-1 rounded-full w-fit mb-3 border border-white/[0.08]">
              <ShieldCheck className="h-4 w-4" />
              <span>DPDP Act 2023 Compliant</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-neutral-400">
              Last updated: October 27, 2026 · {BRAND.legalName}
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-6">
            <section>
              <h2 className="text-base font-bold text-white mb-2">1. Overview &amp; DPDP Commitment</h2>
              <p>
                {BRAND.legalName} (&ldquo;{BRAND.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal data in strict compliance with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023 and applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white mb-2">2. Data We Collect and Why</h2>
              <p>
                We adhere to data minimization. We only collect the information necessary to fulfill your requested AI Visibility Check:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Website URL &amp; Category:</strong> Used to run the 15 simulated buyer diagnostic queries across AI search engines.</li>
                <li><strong>Contact Name &amp; Work Email:</strong> Used to compile, address, and deliver your diagnostic report.</li>
                <li><strong>Mobile / WhatsApp Number:</strong> Verified via OTP to prevent abuse and deliver your report via WhatsApp per your explicit opt-in.</li>
                <li><strong>Consent Timestamp:</strong> Recorded upon checking the consent checkbox in line with DPDP statutory requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-white mb-2">3. What We Never Do</h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party data brokers or marketing firms. Your information is strictly utilized by our internal AEO specialists to prepare and discuss your audit.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white mb-2">4. Your Statutory Rights</h2>
              <p>
                Under the DPDP Act 2023, you retain the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Access a summary of personal data processed by us.</li>
                <li>Request correction, updating, or erasure of your contact details.</li>
                <li>Withdraw consent at any time by contacting our Grievance Officer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-white mb-2">5. Data Retention &amp; Security</h2>
              <p>
                Lead and audit information is stored on encrypted, access-restricted databases. Data is retained only for the period necessary to deliver services or comply with statutory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white mb-2">6. Grievance Officer Contact</h2>
              <p>
                For questions, access requests, or privacy grievances:
              </p>
              <div className="mt-2 rounded-xl border border-white/[0.08] bg-[#11141D] p-4 text-neutral-300">
                <p><strong>Grievance Officer:</strong> Data Protection Lead</p>
                <p><strong>Entity:</strong> {BRAND.legalName}</p>
                <p><strong>Email:</strong> {BRAND.contactEmail}</p>
                <p><strong>Phone:</strong> {BRAND.phone}</p>
              </div>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
