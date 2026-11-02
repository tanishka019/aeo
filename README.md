# GetFound — AI Search Visibility Agency

A high-converting, mobile-first landing page and authority blog built in Next.js (App Router), TypeScript, and Tailwind CSS for an agency helping businesses get found on Google and recommended by AI assistants (ChatGPT, Google Gemini, and Perplexity).

---

## Quick Setup (Under 10 Steps)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tanishka019/aeo.git
   cd aeo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
4. **Fill in your credentials in `.env.local`** (see [Environment Variables](#environment-variables)).
5. **Start local development server:**
   ```bash
   npm run dev
   ```
6. **Open browser:** Visit `http://localhost:3000` (test at 390 px mobile viewport).
7. **Run production build check:**
   ```bash
   npm run build
   ```
8. **Test static blog posts & feeds:** Visit `/blog`, `/sitemap.xml`, and `/feed.xml`.

---

## Brand & Copy Configuration

The entire brand identity and copy are centralized to enable instant updates without modifying UI components:

* **Brand Configuration (`/config/brand.ts`):** Controls brand name (default: **GetFound**), legal entity, short meanings, 5 shortlisted candidate names with trademark & domain notes, hex color palette, typography tokens, and WhatsApp routing number.
* **Copy Configuration (`/config/content.ts`):** Houses all headlines, subheads, FAQ items, and check flow strings. Follows Indian English, short sentences, zero jargon above the fold, no prices on the page, and no guaranteed rankings.

---

## Free AI Visibility Check Webhook JSON Shape

When a visitor completes a Free AI Visibility Check and confirms their OTP, a webhook payload is delivered via HTTP POST to the URL configured in `VISIBILITY_CHECK_WEBHOOK_URL`.

### Webhook JSON Payload Schema:

```json
{
  "leadId": "lead_1730474400000_a8f9c",
  "timestamp": "2026-10-27T12:00:00.000Z",
  "business": {
    "domain": "apexfertility.in",
    "category": "Healthcare & Clinics",
    "city": "Mumbai"
  },
  "contact": {
    "name": "Dr. Rahul Sharma",
    "phone": "+919876543210",
    "email": "rahul@apexfertility.in",
    "consentGranted": true,
    "consentTimestamp": "2026-10-27T12:00:00.000Z"
  },
  "results": {
    "visibilityScore": 27,
    "mentionRatePercent": 26,
    "totalQueriesTested": 15,
    "queriesMentioned": 4,
    "topPosition": 6,
    "competitorsDominating": [
      { "name": "Market Leader Alpha", "mentionRate": 93 },
      { "name": "Prime Care Group", "mentionRate": 80 },
      { "name": "City Specialists Ltd", "mentionRate": 66 }
    ],
    "priorityQuickFix": "Your domain lacks a structured Schema.org entity graph and verified local citations in major trade registries.",
    "enginesTested": ["ChatGPT-4.5", "Google-Gemini-Pro", "Perplexity-Sonar"],
    "rawAnswersSnapshotSummary": "Sample test across 15 buyer prompts in Mumbai for Healthcare & Clinics. Domain was cited in 4 synthesized answers."
  }
}
```

---

## How to Add a Blog Post

Publishing a post requires creating **one MDX file** in `/content/blog/` and opening a pull request. No database is required.

1. Create `/content/blog/your-post-slug.mdx`.
2. Add frontmatter with all required fields:
   ```yaml
   ---
   title: "How to Optimize Your Entity Graph for Perplexity"
   slug: "how-to-optimize-entity-graph-perplexity"
   description: "Step-by-step tutorial on structuring Schema.org markup for Perplexity's Sonar engine."
   date: "2026-10-30"
   updated: "2026-10-31"
   authorName: "Gautam Rao"
   authorRole: "Head of AEO & Search Strategy"
   category: "Technical AEO"
   tags: ["Perplexity", "Schema", "Entity Graph"]
   coverImage: "/images/blog-perplexity.jpg"
   faq:
     - question: "Does Perplexity prioritize Schema markup?"
       answer: "Yes, structured entity graphs dramatically improve citation accuracy."
   ---
   ```
3. Write content following PRD writing rules:
   * Direct answer in the first 2–3 sentences.
   * Question-style `##` headings.
   * Short paragraphs + at least one table or comparison list.
   * Verified statistics with linked sources.
4. Run `npm run build` — `sitemap.xml`, `feed.xml`, and schema routes will auto-generate.

---

## Skills & Principles Used

* **Ponytail Gate (`AGENTS.md`):** Enforces YAGNI, standard library first, native platform features (native `<details>`/`<summary>` accordions, native anchor smooth scrolling), and zero avoidable dependencies.
* **Impeccable:** Applied for visual polish, modern color contrasts, typography pairing, and anti-pattern prevention.
