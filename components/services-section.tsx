"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies",
  },
  {
    number: "03",
    title: "Design Systems",
    description: "Scalable component libraries and design documentation",
  },
  {
    number: "04",
    title: "Animations",
    description: "Smooth, delightful micro-interactions and motion design",
  },
  {
    number: "05",
    title: "Consultation",
    description: "Expert advice on tech stack, architecture, and best practices",
  },
  {
    number: "06",
    title: "Optimization",
    description: "Performance tuning and scalability improvements",
  },
]

export function ServicesSection() {
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
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-white">Services</h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl">
            Comprehensive solutions tailored to your project needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glassmorphic bg-white/10 border border-white/20 p-8 hover:bg-white/20 transition-all group"
              >
                <div className="text-5xl font-bold text-yellow-400/30 group-hover:text-yellow-400/50 transition-colors mb-4">
                  {service.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
