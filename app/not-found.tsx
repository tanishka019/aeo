import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Search } from "lucide-react";

// ponytail: Ultra-minimal 404 Page — dark canvas, clean typography
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090A0F] text-white">
      <Header />

      <main className="flex flex-1 items-center justify-center py-20 px-4">
        <div className="mx-auto max-w-md text-center rounded-2xl border border-white/[0.08] bg-[#11141D] p-8 sm:p-10 shadow-2xl">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-white border border-white/[0.08]">
            <Search className="h-6 w-6" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            404 Error
          </span>
          <h1 className="mt-1 text-2xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
            The page you are looking for has been moved or does not exist in our search index.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-semibold text-black hover:bg-neutral-200 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/#check-form"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] px-5 py-2.5 text-xs font-medium text-white transition-all"
            >
              Run Free Check
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
