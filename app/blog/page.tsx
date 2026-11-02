import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { BRAND } from "@/config/brand";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: `AEO & AI Search Blog — Practical Guides & Case Studies | ${BRAND.name}`,
  description:
    "Learn how Answer Engine Optimisation (AEO) works, how to get cited by ChatGPT and Perplexity, and how to defend your visibility across modern AI assistants.",
  alternates: {
    canonical: "/blog",
  },
};

// ponytail: Ultra-minimal Blog Index — dark canvas, clean typography
export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="flex min-h-screen flex-col bg-[#090A0F] text-white">
      <Header />

      <main className="flex-1">
        {/* Blog Header Banner */}
        <section className="border-b border-white/[0.08] bg-[#090A0F] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-neutral-300">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Field Notes &amp; AEO Guides</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Insights for the AI Search Era
              </h1>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                Clear, actionable analysis on getting recommended by ChatGPT, Google Gemini, and Perplexity. Written by our agency specialists in India.
              </p>
            </div>
          </div>
        </section>

        {/* Category Tabs & Posts Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.08]">
              <span className="text-xs font-medium text-neutral-400 mr-2">Topics:</span>
              <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-black">
                All Articles
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs font-medium text-neutral-300 hover:border-white/20 transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#11141D] p-6 hover:border-white/20 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-medium text-neutral-400 mb-3">
                      <span className="bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08] text-neutral-300">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-neutral-500">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold text-white leading-snug group-hover:text-neutral-200 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-neutral-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-medium text-neutral-300 group-hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
