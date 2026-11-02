import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { BRAND } from "@/config/brand";
import { Clock, Calendar, ArrowRight, HelpCircle, ArrowLeft, ChevronDown } from "lucide-react";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | ${BRAND.name} AEO Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author.name],
      url: `https://getfound.in/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// ponytail: Ultra-minimal Blog Post — dark canvas, clean typography
export default async function SingleBlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const headings = post.content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", "").trim());

  const paragraphs = post.content.split("\n\n");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://getfound.in/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated,
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@type": "Organization",
          name: BRAND.name,
          url: "https://getfound.in",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://getfound.in/blog/${post.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://getfound.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://getfound.in/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://getfound.in/blog/${post.slug}`,
          },
        ],
      },
      ...(post.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://getfound.in/blog/${post.slug}#faq`,
              mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#090A0F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 py-10 sm:py-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          
          {/* Breadcrumb Back Link */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all insights</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="border-b border-white/[0.08] pb-8">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
              <span className="bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08] text-neutral-300">
                {post.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-neutral-400">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
              {post.description}
            </p>

            {/* Author */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white font-bold text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{post.author.name}</p>
                  <p className="text-neutral-400 text-[11px] font-normal">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-400 font-normal">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Published {post.date}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="my-8 rounded-xl border border-white/[0.08] bg-[#11141D] p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                In this article:
              </span>
              <ul className="mt-3 flex flex-col gap-2 text-xs sm:text-sm text-neutral-300">
                {headings.map((heading, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-neutral-500 font-bold">›</span>
                    <span className="hover:text-white cursor-pointer transition-colors">{heading}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-neutral-300 leading-relaxed text-sm sm:text-base space-y-6">
            {paragraphs.map((p, idx) => {
              if (p.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl font-bold text-white pt-6 border-t border-white/[0.08]">
                    {p.replace("## ", "")}
                  </h2>
                );
              }
              if (p.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-lg font-semibold text-white pt-2">
                    {p.replace("### ", "")}
                  </h3>
                );
              }
              if (p.startsWith("|")) {
                const rows = p.split("\n").filter((r) => !r.includes("---"));
                return (
                  <div key={idx} className="overflow-x-auto my-6 rounded-xl border border-white/[0.08] bg-[#11141D]">
                    <table className="min-w-full divide-y divide-white/[0.08] text-xs sm:text-sm">
                      <tbody className="divide-y divide-white/[0.08]">
                        {rows.map((row, rIdx) => {
                          const cells = row.split("|").filter((c) => c.trim().length > 0);
                          const isHeader = rIdx === 0;
                          return (
                            <tr key={rIdx} className={isHeader ? "bg-white/[0.04] font-semibold text-white" : "text-neutral-300 hover:bg-white/[0.02]"}>
                              {cells.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-2.5">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (idx === Math.floor(paragraphs.length / 2)) {
                return (
                  <div key={idx} className="space-y-6">
                    <p>{p}</p>
                    <div className="my-8 rounded-xl border border-white/[0.08] bg-[#11141D] p-6 text-center text-white shadow-xl">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                        Free AI Search Audit
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                        Find out if AI models recommend your business today
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400 max-w-md mx-auto">
                        Test 15 buyer queries across ChatGPT, Gemini, and Perplexity in 60 seconds with our free diagnostic check.
                      </p>
                      <Link
                        href="/#check-form"
                        className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-black hover:bg-neutral-200 transition-all"
                      >
                        <span>Run Free AI Visibility Check</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              }

              return <p key={idx} className="leading-relaxed">{p}</p>;
            })}
          </div>

          {/* End-of-Post FAQ */}
          {post.faq.length > 0 && (
            <div className="mt-14 pt-8 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-5 w-5 text-neutral-400" />
                <h2 className="text-xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-3">
                {post.faq.map((item, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-white/[0.08] bg-[#11141D] p-4 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-left font-semibold text-white text-xs sm:text-sm">
                      <span>{item.question}</span>
                      <ChevronDown className="h-4 w-4 text-neutral-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/[0.06] pt-2">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* End-of-Post CTA */}
          <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#11141D] p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Ready to claim your place in AI recommendations?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
              Our team optimizes your entity footprint, schema graph, and third-party citation network so AI assistants recommend you first.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#check-form"
                className="rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-neutral-200 transition-all"
              >
                Run Free Visibility Check
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                  `Hi ${BRAND.name}, I read your post '${post.title}' and want to consult on AEO for my business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-6">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#11141D] p-4 hover:border-white/20 transition-all group"
                  >
                    <div>
                      <span className="text-[10px] font-medium text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                        {rel.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mt-2 group-hover:text-neutral-200 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="mt-4 text-[11px] text-neutral-400">
                      {rel.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>

      <Footer />
    </div>
  );
}
