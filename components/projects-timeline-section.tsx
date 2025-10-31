"use client"
import RadialOrbitalTimeline from "@/components/radial-orbital-timeline"
import { ContainerScroll } from "@/components/ui/container-scroll"
import { Code2, Palette, Rocket, Zap, Users, Trophy } from "lucide-react"

export function ProjectsTimelineSection() {
  const timelineData = [
    {
      id: 1,
      title: "AI Chat Interface",
      date: "2024-01",
      content: "Built a real-time AI chatbot with streaming responses and natural language processing capabilities.",
      category: "AI/ML",
      icon: Zap,
      relatedIds: [2, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Design System",
      date: "2023-11",
      content: "Created a comprehensive design system with 50+ reusable components and accessibility standards.",
      category: "Design",
      icon: Palette,
      relatedIds: [1, 4],
      status: "completed" as const,
      energy: 88,
    },
    {
      id: 3,
      title: "Performance Optimization",
      date: "2023-09",
      content: "Optimized web application to reduce load time by 60% through code splitting and lazy loading.",
      category: "Engineering",
      icon: Rocket,
      relatedIds: [1, 5],
      status: "completed" as const,
      energy: 92,
    },
    {
      id: 4,
      title: "Mobile App Launch",
      date: "2023-07",
      content: "Developed and launched a cross-platform mobile application serving 100K+ users.",
      category: "Mobile",
      icon: Code2,
      relatedIds: [2, 6],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 5,
      title: "Team Collaboration Tool",
      date: "2023-05",
      content: "Built a real-time collaboration platform for distributed teams with instant synchronization.",
      category: "Tools",
      icon: Users,
      relatedIds: [3, 4],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 6,
      title: "Award-Winning Campaign",
      date: "2023-03",
      content: "Created viral marketing campaign that won industry recognition and generated 2M+ impressions.",
      category: "Marketing",
      icon: Trophy,
      relatedIds: [2, 5],
      status: "completed" as const,
      energy: 87,
    },
  ]

  return (
    <ContainerScroll titleComponent={<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">My Work</h2>}>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </ContainerScroll>
  )
}
