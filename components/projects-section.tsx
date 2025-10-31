"use client"

import { useEffect, useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
    image: "/ecommerce-platform.jpg",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    image: "/analytics-dashboard.png",
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Intelligent chatbot with natural language processing",
    tags: ["Next.js", "OpenAI", "TailwindCSS", "Framer Motion"],
    image: "/ai-chatbot-concept.png",
  },
  {
    id: 4,
    title: "Design System",
    description: "Comprehensive component library and design guidelines",
    tags: ["React", "Storybook", "TailwindCSS", "TypeScript"],
    image: "/design-system-abstract.png",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Real-time social networking platform with messaging",
    tags: ["Next.js", "Firebase", "WebRTC", "Shadcn UI"],
    image: "/social-app.jpg",
  },
  {
    id: 6,
    title: "Mobile App Landing",
    description: "Conversion-optimized landing page for mobile application",
    tags: ["Next.js", "Prisma", "Vercel", "Marketing"],
    image: "/mobile-landing.jpg",
  },
]

export function ProjectsSection() {
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
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-white">Featured Projects</h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl">
            A selection of my recent work showcasing design and technical excellence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group glassmorphic bg-white/10 border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-yellow-400/10 to-cyan-400/10">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
