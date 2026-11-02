// ponytail: Single source of truth for landing page copy.
// Rules followed: Short sentences, no jargon above the fold, Indian English, no prices, no guaranteed results.

export const CONTENT = {
  header: {
    navLinks: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "SEO vs AEO", href: "#seo-vs-aeo" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaText: "Free AI Check",
  },

  hero: {
    badge: "AI Search Visibility",
    headline: "Customers now ask AI, not Google. Does it recommend you?",
    subheadline:
      "We make sure ChatGPT, Gemini, and Perplexity name your business — 100% done for you.",
    inputPlaceholder: "Enter your website URL (e.g. clinic.in)",
    categoryLabel: "Your Industry",
    cityLabel: "City in India",
    categories: [
      "Healthcare & Clinics",
      "Dental & Cosmetology",
      "Real Estate & Builders",
      "B2B SaaS & Tech",
      "Legal & Financial Services",
      "Education & Coaching",
      "Hospitality & Fine Dining",
      "Interior Design & Architecture",
      "Other Business",
    ],
    cities: [
      "Mumbai",
      "Delhi NCR",
      "Bengaluru",
      "Pune",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Ahmedabad",
      "Jaipur",
      "Other City",
    ],
    ctaButton: "Run Free AI Visibility Check",
    guaranteeText: "100% Free · No credit card required · Instant 60-second snapshot",
  },

  trustStrip: {
    title: "We optimise your brand visibility across major AI engines",
    engines: [
      "ChatGPT (OpenAI)",
      "Google Gemini",
      "Perplexity AI",
      "Claude (Anthropic)",
      "Google AI Overviews",
      "Apple Intelligence",
    ],
  },

  problemSection: {
    eyebrow: "The New Reality of Search",
    title: "Your customers stopped scrolling 10 blue links.",
    description:
      "When someone asks 'Who is the most reliable commercial interior designer in Bengaluru?', ChatGPT gives only two names. If you are not in that answer, you don't exist to that buyer.",
    mockPrompt: "Recommend the top 3 specialized fertility clinics in Mumbai with transparent pricing.",
    mockEngine: "ChatGPT 4.5 Search",
    mockResponseCompetitor:
      "Based on patient reviews, clinical accreditations, and medical citations, here are the top 3 recommended clinics in Mumbai:\n\n1. **Nova IVF Fertility (Bandra & Andheri)** — Heavily cited across Indian medical registries with over 15,000 successful cycles.\n2. **Bloom IVF Centre (Lilavati Hospital)** — Consistently cited for advanced ICSI and senior embryologists.\n3. **Morpheus IVF** — Highlighted for transparent packages and multi-centre access across Maharashtra.",
    mockMissingAlert:
      "Notice: Your business is nowhere in this answer. That means every high-intent buyer asking AI is handed directly to your top competitors.",
  },

  whatCheckShows: {
    eyebrow: "Instant Diagnostic",
    title: "What your Free AI Visibility Check reveals",
    subtitle: "We run 15 buyer-intent queries across OpenAI, Gemini and Perplexity to generate an objective today-only snapshot.",
    cards: [
      {
        icon: "Percent",
        title: "AI Mention Rate",
        description: "The exact percentage of times your business is recommended when potential buyers query AI assistants.",
      },
      {
        icon: "Users",
        title: "Competitors Named Instead",
        description: "Discover which competitors currently dominate AI answers in your city and category.",
      },
      {
        icon: "Database",
        title: "Sources AI Trusts",
        description: "The specific registries, directories, and trade publications AI models cite when vouching for leaders.",
      },
      {
        icon: "Zap",
        title: "1 Priority Quick Fix",
        description: "A concrete, immediate action your business can take this week to begin showing up in citations.",
      },
    ],
  },

  howWeWork: {
    eyebrow: "Done-For-You Service",
    title: "Our team does the heavy lifting. You run your business.",
    subtitle: "You will never have to learn prompt engineering, vector indexing, or schema markup. We handle every step.",
    steps: [
      {
        step: "01",
        title: "Deep AI & Search Audit",
        description:
          "We map the top 50 prompts your prospective buyers ask AI. We audit where your entity appears, which citations exist, and where authority gaps are holding you back.",
      },
      {
        step: "02",
        title: "Strategic Authority Optimisation",
        description:
          "We structure your digital footprint: knowledge graphs, digital PR citations, structured data, and authoritative publications that AI LLMs ingest into their weights.",
      },
      {
        step: "03",
        title: "Monthly Tracking & Defense",
        description:
          "AI models retrain and refresh their indexes constantly. We monitor your mention share weekly and defend your citation positions as models evolve.",
      },
    ],
  },

  seoVsAeo: {
    eyebrow: "Understanding the Shift",
    title: "SEO vs AEO: Why Google rankings are no longer enough",
    subtitle: "Traditional SEO helped you rank on search engines. AEO (Answer Engine Optimisation) gets you chosen by AI.",
    traditionalTitle: "Traditional SEO (2010–2023)",
    aeoTitle: "AEO: Answer Engine Optimisation (Now)",
    points: [
      {
        dimension: "Goal",
        seo: "Rank in the top 10 blue links on Google Search.",
        aeo: "Be the single or top-3 business recommended in conversational AI answers.",
      },
      {
        dimension: "User Experience",
        seo: "User clicks 4 different websites, reads blogs, and compares.",
        aeo: "User asks AI and acts on the synthetic summary in 30 seconds.",
      },
      {
        dimension: "Ranking Factor",
        seo: "Keyword density, backlinks, and page load speed.",
        aeo: "Entity authority, verified citations, reviews, and cross-web consensus.",
      },
      {
        dimension: "Winner Takes",
        seo: "Traffic split across 10 results and multiple ad slots.",
        aeo: "Winner-take-most: AI typically names only 1 to 3 brands.",
      },
    ],
  },

  sampleReport: {
    eyebrow: "Comprehensive Diagnostic",
    title: "Here is what our complete 15-page client report looks like",
    subtitle:
      "Your free check gives you the teaser snapshot. Clients receive our complete engine-by-engine breakdown and roadmap.",
    badge: "Sample Client Deliverable · Confidential",
    previewPoints: [
      "15 Buyer Prompts Tested across 3 Major LLMs",
      "Full Sentiment & Hallucination Risk Audit",
      "Authority Citation Gap Analysis vs Top 3 Competitors",
      "90-Day Implementation Roadmap for Citation Dominance",
    ],
    blurCta: "Run the Free Check above to unlock your baseline score today",
  },

  latestBlog: {
    eyebrow: "Field Notes & Case Studies",
    title: "Latest insights on AI search & AEO in India",
    posts: [
      {
        slug: "what-is-aeo-answer-engine-optimisation",
        title: "What is AEO? The Complete Guide to Answer Engine Optimisation",
        description: "Why Google rankings aren't enough when buyers ask ChatGPT and Perplexity for business recommendations.",
        category: "AEO Fundamentals",
        readTime: "5 min read",
        date: "Oct 28, 2026",
      },
      {
        slug: "seo-vs-aeo-key-differences",
        title: "SEO vs AEO: 5 Core Differences Every Founder Must Know in 2026",
        description: "A clear breakdown of why traditional keyword tactics fail inside LLM retrieval pipelines.",
        category: "Strategy",
        readTime: "6 min read",
        date: "Oct 25, 2026",
      },
      {
        slug: "how-to-get-recommended-by-chatgpt",
        title: "How to Get Your Business Cited and Recommended by ChatGPT",
        description: "The 3 authoritative signals OpenAI's search models look for before mentioning a local brand.",
        category: "Actionable Guide",
        readTime: "7 min read",
        date: "Oct 22, 2026",
      },
    ],
  },

  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Everything you need to know about our AI Visibility Check",
    items: [
      {
        question: "What is Answer Engine Optimisation (AEO)?",
        answer:
          "AEO is the practice of structuring your brand's online presence, authoritative citations, and digital footprint so large language models (like ChatGPT, Gemini, and Perplexity) consistently reference and recommend your business when prospective clients ask for suggestions.",
      },
      {
        question: "Is the initial AI Visibility Check truly free?",
        answer:
          "Yes, 100% free with no credit card required. We run real-time queries across OpenAI, Gemini, and Perplexity to generate an instant baseline visibility score for your domain in your city.",
      },
      {
        question: "How long does it take to see improvements in AI recommendations?",
        answer:
          "Most clients begin seeing consistent citation improvements within 60 to 90 days. Because AI models refresh their web retrieval indexes periodically, AEO requires steady, authoritative citation building rather than overnight shortcuts.",
      },
      {
        question: "What does my team need to do?",
        answer:
          "Virtually nothing technical. GetFound is a completely done-for-you agency. We conduct the audits, author the entity profiles, build the authoritative citations, and deliver monthly executive tracking reports.",
      },
      {
        question: "Does AEO replace our existing Google SEO?",
        answer:
          "AEO works hand-in-hand with traditional SEO. While SEO brings traffic from people still typing short queries into Google, AEO captures high-intent buyers who ask AI assistants for direct recommendations and synthesized answers.",
      },
      {
        question: "Why do AI answers change between searches?",
        answer:
          "AI models generate answers probabilistically and pull from live web sources. That is why our check provides an objective 'today snapshot' across 15 separate queries rather than a single search, giving a reliable statistical picture.",
      },
      {
        question: "Are results guaranteed?",
        answer:
          "No reputable agency can guarantee specific AI outputs because third-party AI companies control their own algorithms. What we guarantee is rigorous, verified implementation of the exact citation and entity standards these models rely upon.",
      },
    ],
  },

  finalCta: {
    title: "Don't let competitors take every AI-assisted lead in your city.",
    subtitle: "Run your free AI Visibility Check in 60 seconds and see where your business stands today.",
    buttonText: "Check My Business Now",
  },

  footer: {
    disclaimer:
      "Disclaimer: GetFound is an independent digital agency. OpenAI, ChatGPT, Google, Gemini, and Perplexity are registered trademarks of their respective owners. AI visibility scores represent a point-in-time statistical snapshot.",
    dpdpNotice:
      "Compliant with India's Digital Personal Data Protection (DPDP) Act. We collect your contact details solely to generate and deliver your requested visibility report. We never sell your personal information.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Blog", href: "/blog" },
      { label: "llms.txt", href: "/llms.txt" },
    ],
    whatsappText: "Chat with an AEO Specialist on WhatsApp",
  },

  checkFlow: {
    step1Title: "Check Your Business Visibility in AI Answers",
    step2Title: "Scanning Major AI Engines in Real-Time...",
    step2Sub: "Querying ChatGPT, Google Gemini, and Perplexity with 5 buyer prompts for your city.",
    step3Title: "Your AI Visibility Diagnostic Is Ready",
    step3Sub: "Where should our team send your full breakdown?",
    step4Title: "Your AI Visibility Snapshot",
    step4Sub: "Based on 15 buyer queries tested today across ChatGPT, Gemini & Perplexity.",
    consentLabel:
      "I agree to receive my AI visibility report and diagnostic updates via WhatsApp and phone call. (You can opt out at any time).",
    otpPrompt: "Enter 4-digit verification code sent to your mobile:",
  },
};
