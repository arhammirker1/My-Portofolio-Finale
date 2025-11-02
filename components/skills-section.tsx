"use client"

import { useEffect, useRef, useState } from "react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ParticleButton } from "@/components/ui/particle-button"
import { Code2, Palette, Zap, Database, Smartphone, Cloud, Cpu, Globe, Rocket, LineChart } from "lucide-react"

const skills = [
  {
    icon: Cpu,
    title: "Automation & AI Systems",
    description: "Building intelligent systems using Python, Playwright, and AI logic — automating tasks, parsing data, and deploying scalable backend scripts.",
  },
  {
    icon: Database,
    title: "Backend & Data Engineering",
    description: "Experienced with PostgreSQL, Prisma, REST APIs, and data modeling. Skilled in structuring and optimizing databases for analytics and performance.",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Developing responsive, high-performance websites and web apps using React, Next.js, TypeScript, and Tailwind CSS — optimized for SEO and scalability.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Reducing load times and GPU stress for WebGL/3D sites through code splitting, lazy loading, and real-time shader optimization for smooth visuals.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Marketing",
    description: "Implementing marketing automation and analytics systems using WebEngage, tracking KPIs, and improving conversion through segmentation and A/B testing.",
  },
  {
    icon: Zap,
    title: "DevOps & Deployment",
    description: "Deploying and maintaining production apps with Vercel, Docker, and CI/CD pipelines. Experienced with performance monitoring and cloud automation.",
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-center text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white/70 mb-16 max-w-2xl mx-auto text-center">
            A blend of engineering, AI, and marketing — building systems that automate, analyze, and scale.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="relative min-h-[16rem] rounded-2xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />

                  <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-sm p-6 flex flex-col gap-4">
                    <div className="w-fit rounded-lg bg-white/10 p-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{skill.description}</p>
                    </div>
                    <div className="flex justify-end pt-4">
                      <ParticleButton variant="outline" size="sm" className="hover:bg-black">
                        View Realted Projects
                      </ParticleButton>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
