import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arham Mirkar – Full Stack Developer & Data Innovator",
  description:
    "Portfolio of Arham Mirkar – Full Stack Developer and Data Scientist creating data-driven systems and AI-powered products.",
  keywords: "Arham Mirkar, Developer, Portfolio, AI, Data Science, Full Stack, Next.js, React, Web Developer",
  generator: "Arham Mirkar",
  openGraph: {
    title: "Arham Mirkar – Portfolio",
    description: "Explore my AI-powered projects, systems, and design work.",
    url: "https://my-portofolio-finale.vercel.app",
    siteName: "Arham Mirkar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arham Mirkar Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arham Mirkar – Portfolio",
    description: "Full Stack Developer and Data Innovator.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  canonical: "https://my-portofolio-finale.vercel.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="pDKNXygY4zWiLXEXfliNmyrpsAqM9EisDk0yGdujhvg"
          />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arham Mirkar",
              jobTitle: "Full Stack Developer & Data Scientist",
              url: "https://my-portofolio-finale.vercel.app",
              sameAs: ["https://github.com/arhammirker1", "https://www.linkedin.com/in/arham-mirkar/"],
              description: "Building AI-powered real estate systems and high-performance websites.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arham Mirkar Portfolio",
              url: "https://my-portofolio-finale.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://my-portofolio-finale.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${_geist.className} antialiased bg-slate-950 dark:bg-slate-950`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
