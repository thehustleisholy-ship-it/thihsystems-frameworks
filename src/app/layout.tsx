import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frameworks.thihsystems.com"),
  title: {
    default: "Framework Fridays by THIHsystems | Enterprise Infrastructure Framework Library",
    template: "%s | THIHsystems Framework Fridays",
  },
  description:
    "Explore 30 enterprise infrastructure frameworks for hidden system failures across health, housing, justice, workforce, water, food, energy, mobility, ecological risk, and future governance. Includes concept previews and interactive prototypes, forkable repos, procurement paths, pilot guides, policy briefs, and source-status tracking.",
  keywords: [
    "enterprise infrastructure",
    "framework library",
    "infrastructure failure",
    "system design",
    "procurement path",
    "pilot guide",
    "policy brief",
    "source tracking",
    "health systems",
    "housing systems",
    "water infrastructure",
    "energy systems",
    "governance frameworks",
  ],
  openGraph: {
    title: "Framework Fridays by THIHsystems",
    description: "A public enterprise infrastructure framework library for institutions, operators, policymakers, funders, builders, and the public.",
    url: "https://frameworks.thihsystems.com",
    siteName: "THIHsystems Framework Fridays",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framework Fridays by THIHsystems",
    description: "Thirty enterprise-layer frameworks for hidden infrastructure failures, with source queues, concept previews and interactive prototypes, forkable repos, pilot paths, and policy briefs.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://frameworks.thihsystems.com/#website",
      "url": "https://frameworks.thihsystems.com",
      "name": "Framework Fridays by THIHsystems",
      "description": "A public enterprise infrastructure framework library",
      "publisher": {
        "@id": "https://frameworks.thihsystems.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://frameworks.thihsystems.com/#organization",
      "name": "THIHsystems",
      "url": "https://frameworks.thihsystems.com",
      "logo": "https://frameworks.thihsystems.com/favicon.ico",
      "description": "Enterprise infrastructure framework library for hidden system failures",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://frameworks.thihsystems.com/#collection",
      "url": "https://frameworks.thihsystems.com",
      "name": "Framework Library",
      "description": "Thirty enterprise infrastructure frameworks for systems nobody tests until they fail",
      "mainEntity": {
        "@type": "ItemList",
        "name": "30 Enterprise Infrastructure Frameworks",
        "numberOfItems": 30,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Framework 01: Women's Health Longitudinal Dashboard",
            "url": "https://frameworks.thihsystems.com/frameworks/womens-health-longitudinal-dashboard",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Framework 02: Job-Loss & Income-Shock Stabilizer",
            "url": "https://frameworks.thihsystems.com/frameworks/job-loss-income-shock-stabilizer",
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Framework 05: Hospital Grid-Independence & Resilience",
            "url": "https://frameworks.thihsystems.com/frameworks/hospital-grid-independence-resilience",
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Framework 10: Managed Aquifer Recharge & Underground Water Banking",
            "url": "https://frameworks.thihsystems.com/frameworks/managed-aquifer-recharge-water-banking",
          },
          {
            "@type": "ListItem",
            "position": 29,
            "name": "Framework 29: Solar Geoengineering Governance Framework",
            "url": "https://frameworks.thihsystems.com/frameworks/solar-geoengineering-governance",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Framework Fridays by THIHsystems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Framework Fridays is a public enterprise infrastructure framework library that turns overlooked system failures into structured frameworks, concept previews and interactive prototypes, forkable repos, source queues, procurement paths, pilot guides, and policy briefs.",
          },
        },
        {
          "@type": "Question",
          "name": "What is an enterprise-layer infrastructure framework?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An enterprise-layer infrastructure framework maps the operating layer behind a failure, including the research base, core data inputs, workflows, economics, procurement path, pilot design, and policy support path.",
          },
        },
        {
          "@type": "Question",
          "name": "Who is this for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is built for institutions, operators, policymakers, funders, builders, advocates, and the public.",
          },
        },
        {
          "@type": "Question",
          "name": "Are these finished products?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. These are public framework packages. Some are concept structured, some are source packed, and some are ready for internal review or pilot design. The site does not claim validation where no pilot evidence exists.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the Master Matrix work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Master Matrix standardizes all 30 frameworks across research, statistics, economics, implementation, procurement, ROI logic, pilot readiness, policy path, source status, and public-claim status.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
