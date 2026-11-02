import fs from "fs";
import path from "path";

// ponytail: Minimal frontmatter parser using Node stdlib. Zero dependencies (no gray-matter or yaml needed).

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  updated: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  coverImage: string;
  readTime: string;
  faq: Array<{ question: string; answer: string }>;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

interface FrontmatterData {
  title?: string;
  slug?: string;
  description?: string;
  date?: string;
  updated?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  faq?: Array<{ question: string; answer: string }>;
  [key: string]: unknown;
}

function parseFrontmatter(fileContent: string): { data: FrontmatterData; content: string } {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: fileContent };
  }

  const rawYaml = match[1];
  const content = match[2].trim();
  const data: FrontmatterData = {};

  const lines = rawYaml.split(/\r?\n/);
  let inFaq = false;
  let currentFaqItem: { question?: string; answer?: string } | null = null;
  const faqList: Array<{ question: string; answer: string }> = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    if (trimmed.startsWith("faq:")) {
      inFaq = true;
      continue;
    }

    if (inFaq) {
      if (trimmed.startsWith("- question:")) {
        if (currentFaqItem?.question && currentFaqItem?.answer) {
          faqList.push(currentFaqItem as { question: string; answer: string });
        }
        currentFaqItem = { question: trimmed.replace("- question:", "").trim().replace(/^["']|["']$/g, "") };
      } else if (trimmed.startsWith("answer:") && currentFaqItem) {
        currentFaqItem.answer = trimmed.replace("answer:", "").trim().replace(/^["']|["']$/g, "");
      } else if (!trimmed.startsWith("-") && trimmed.includes(":") && !trimmed.startsWith("answer")) {
        if (currentFaqItem?.question && currentFaqItem?.answer) {
          faqList.push(currentFaqItem as { question: string; answer: string });
          currentFaqItem = null;
        }
        inFaq = false;
      }
    }

    if (!inFaq) {
      const colonIdx = line.indexOf(":");
      if (colonIdx > -1) {
        const key = line.slice(0, colonIdx).trim();
        const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (val.startsWith("[") && val.endsWith("]")) {
          data[key] = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, ""));
        } else {
          data[key] = val;
        }
      }
    }
  }

  if (currentFaqItem?.question && currentFaqItem?.answer) {
    faqList.push(currentFaqItem as { question: string; answer: string });
  }

  data.faq = faqList;
  return { data, content };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: BlogPost[] = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = parseFrontmatter(fileContent);

    const slug = data.slug || filename.replace(/\.(mdx|md)$/, "");
    const wordCount = content.split(/\s+/).length;
    const readMinutes = Math.max(1, Math.round(wordCount / 200));

    return {
      title: data.title || "Untitled Post",
      slug,
      description: data.description || "",
      date: data.date || "2026-10-27",
      updated: data.updated || data.date || "2026-10-27",
      author: {
        name: data.authorName || "Gautam Rao",
        role: data.authorRole || "Head of AEO & Search Strategy",
        avatar: data.authorAvatar || "/images/author-gautam.jpg",
      },
      category: data.category || "General",
      tags: Array.isArray(data.tags) ? data.tags : ["AEO", "AI Search"],
      coverImage: data.coverImage || "/images/blog-default.jpg",
      readTime: `${readMinutes} min read`,
      faq: data.faq || [],
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}
