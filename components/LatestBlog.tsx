import Link from "next/link";
import { CONTENT } from "@/config/content";
import { ArrowRight, Clock } from "lucide-react";

// ponytail: Pure Monochrome Blog Grid — Black, Grey, White
export function LatestBlog() {
  const { eyebrow, title, posts } = CONTENT.latestBlog;

  return (
    <section className="bg-black py-16 sm:py-24 border-b border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {eyebrow}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
          >
            <span>View all articles</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-[#0D0D0D] p-6 hover:border-neutral-600 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-medium text-neutral-400 mb-3">
                  <span className="bg-neutral-900 px-2.5 py-0.5 rounded border border-neutral-800 text-neutral-300 font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-500">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-neutral-200 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {post.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-850 flex items-center justify-between text-xs">
                <span className="text-neutral-500 font-normal">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-white group-hover:text-neutral-300 flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
