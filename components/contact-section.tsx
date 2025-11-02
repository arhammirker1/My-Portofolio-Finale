"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-center text-white">
            Let's Work Together
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto text-center">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </p>

          <div className="glassmorphic bg-white/10 border border-white/20 p-8 sm:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Message Sent!</h3>
                <p className="text-white/70">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 font-semibold rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-12 pt-12 border-t border-white/20 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-2">Email</div>
                <a href="mailto:arhammirker1@gmail.com" className="font-semibold text-yellow-400 hover:text-yellow-300">
                  arhammirker1@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-sm text-white/60 mb-2">LinkedIn</div>
                <a href="https://www.linkedin.com/in/arham-mirkar/" className="font-semibold text-yellow-400 hover:text-yellow-300">
                  linkedin.com/in/arham-mirkar
                </a>
              </div>
              <div className="text-center">
                <div className="text-sm text-white/60 mb-2">GitHub</div>
                <a href="https://github.com/arhammirker1" className="font-semibold text-yellow-400 hover:text-yellow-300">
                  github.com/arham-mirker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
