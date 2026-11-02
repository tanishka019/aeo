import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND } from "@/config/brand";
import { CONTENT } from "@/config/content";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: `${BRAND.name} — Get Found by AI. Recommended First | Done-For-You AEO Agency`,
  description:
    "We help high-growth businesses get recommended inside ChatGPT, Perplexity, and Google AI Overviews. 100% done-for-you Answer Engine Optimisation (AEO).",
  keywords: [
    "GetFound AEO",
    "AEO agency India",
    "Answer Engine Optimisation",
    "ChatGPT visibility for business",
    "Perplexity citations",
    "Google AI Overviews ranking",
    "AI search visibility",
  ],
  authors: [{ name: BRAND.name }],
  metadataBase: new URL("https://getfound.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND.name} — Done-For-You AI Search Visibility Agency`,
    description:
      "When customers ask AI for recommendations, does it name your business? Run our free 60-second AI Visibility Check.",
    url: "https://getfound.in",
    siteName: BRAND.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Done-For-You AI Search Visibility`,
    description: "Get your business cited and recommended by ChatGPT, Gemini and Perplexity.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://getfound.in/#organization",
        name: BRAND.name,
        legalName: BRAND.legalName,
        url: "https://getfound.in",
        email: BRAND.contactEmail,
        telephone: BRAND.phone,
        description: BRAND.shortDescription,
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://getfound.in/#website",
        url: "https://getfound.in",
        name: BRAND.name,
        publisher: {
          "@id": "https://getfound.in/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://getfound.in/#faq",
        mainEntity: CONTENT.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
