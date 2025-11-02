"use client"
import RadialOrbitalTimeline from "@/components/radial-orbital-timeline"
import { ContainerScroll } from "@/components/ui/container-scroll"
import { Code2, Palette, Rocket, Zap, Users, Trophy, Globe, RocketIcon, Cpu, Database, LineChart } from "lucide-react"

export function ProjectsTimelineSection() {
  const timelineData = [
    {
      id: 1,
      title: "RAAVC Valuation System",
      date: "2025-08",
      content: "Developed an AI-powered property valuation system that analyzes market trends and property features to provide accurate valuations in real-time.",
      category: "AI/Data Systems",
      icon: Database,
      relatedIds: [6, 5],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Orange Fox Marketing Suite",
      date: "2025-09",
      content: "Built marketing automation flows usin WebEngage and analytics dashboards for campaign insights. Helped Optimize client coversion through A/B testing and data-driven segmentation.",
      category: "Design",
      icon: LineChart,
      relatedIds: [6, 3],
      status: "completed" as const,
      energy: 88,
    },
    {
      id: 3,
      title: "AI Trading Toolkit",
      date: "2023-11",
      content: "Created algorithmic tools for manual XRP/USDT trading, combining 50 EMA, SSL, and RSI strategy logic with real-time market visualization and liquidity tracking concepts.",
      category: "Engineering",
      icon: Rocket,
      relatedIds: [6, 2 ],
      status: "completed" as const,
      energy: 92,
    },
    {
      id: 4,
      title: "SEO & Web Revamp",
      date: "2023-07",
      content: "Implemented SEO-first architecture with dynamic meta tags, robots.txt, sitemap automation, and improved crawlability for high-performance Next.js websites.",
      category: "Mobile",
      icon: Globe,
      relatedIds: [5, 2],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 5,
      title: "3D Web Performance Boost",
      date: "2023-05",
      content: "Optimized heavy WebGL scenes and interactive backgrounds by restructuring shaders, reducing GPU load, and improving LCP and CLS scores. Achieved mobile stability and Google PageSpeed compliance.",
      category: "Web Engineering",
      icon: Rocket,
      relatedIds: [1, 5],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 6,
      title: "Amazon Scraper Automation",
      date: "2023-03",
      content: "Engineered a Playwright-based automation script that searches Amazon, bypasses CAPTCHAs, and uses fuzzy logic to match products. Integrated results directly into Google Sheets via Sheets API.",
      category: "Automation",
      icon: Cpu ,
      relatedIds: [2, 5],
      status: "completed" as const,
      energy: 87,
    },
  ]

  return (
    <section id ="projects">
    <ContainerScroll titleComponent={<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">My Work</h2>}>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </ContainerScroll>
    </section>
  )
}
