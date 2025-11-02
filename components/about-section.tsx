"use client"

import { useRef, useEffect, useState } from "react"

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [revealedWordCount, setRevealedWordCount] = useState(0)

  const storySegments = [
    "It started with curiosity — a single line of code that somehow crashed my entire laptop.",
    "Instead of quitting, I wanted to know *why* it crashed. That’s where it began.",
    "I started building small things — calculators, landing pages, scripts that scraped data just because I could.",
    "Then came my first real project: RAAVC, an AI-powered real estate valuation system for a Saudi client.",
    "It wasn’t just code — it was data cleaning, fuzzy matching Arabic entries, and generating multilingual PDFs.",
    "I learned PostgreSQL, APIs, and optimization the hard way — through every crash log imaginable.",
    "Later, I joined Orange Fox — where I used data to make marketing smarter, not just louder.",
    "From automation to analytics dashboards, every project became a way to understand how systems — and people — work.",
    "I realized I don’t just build systems or websites. I build clarity. I make data tell a story.",
    "That’s the magic I chase every day — blending design, logic, and strategy to make something truly useful.",
    "And this? This is just the beginning.",   
  ]

  const allWords = storySegments.flatMap((segment) => segment.split(" "))
  const totalWords = allWords.length

  useEffect(() => {
    let rafId: number | null = null
    let targetProgress = 0
    let currentProgress = 0

    const smoothScroll = () => {
      const difference = targetProgress - currentProgress
      currentProgress += difference * 0.12

      if (Math.abs(targetProgress - currentProgress) > 0.001) {
        const wordsToReveal = Math.floor(currentProgress * totalWords)
        setRevealedWordCount(wordsToReveal)
        rafId = requestAnimationFrame(smoothScroll)
      } else {
        setRevealedWordCount(Math.floor(targetProgress * totalWords))
      }
    }

    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const eyeLevel = windowHeight * 0.62

      const animationStart = rect.top + window.scrollY - eyeLevel
      const animationEnd = rect.top + window.scrollY + rect.height - eyeLevel
      const scrollDistance = animationEnd - animationStart
      const currentScroll = window.scrollY

      const progress = (currentScroll - animationStart) / scrollDistance
      targetProgress = Math.max(0, Math.min(1, progress))

      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(smoothScroll)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [totalWords])

  let wordIndex = 0

  return (
    <section id="about" className="relative">
      <div className="bg-gradient-to-br from-black/20 via-black/40 to-black/20">
        {/* Content */}
        <div ref={containerRef} className="max-w-5xl mx-auto px-8 pt-32 pb-32" style={{ minHeight: "400vh" }}>
          <div className="space-y-16">
            {storySegments.map((segment, segmentIndex) => {
              const segmentWords = segment.split(" ")
              const segmentStartIndex = wordIndex
              wordIndex += segmentWords.length

              return (
                <p
                  key={segmentIndex}
                  className="text-5xl md:text-6xl leading-tight"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {segmentWords.map((word, i) => {
                    const currentWordIndex = segmentStartIndex + i
                    const isRevealed = currentWordIndex < revealedWordCount
                    return (
                      <span
                        key={i}
                        className={isRevealed ? "text-white" : "text-gray-600"}
                        style={{
                          transition: "all 0.3s ease-out",
                          opacity: isRevealed ? 1 : 0.4,
                        }}
                      >
                        {word}{" "}
                      </span>
                    )
                  })}
                </p>
              )
            })}
          </div>
        </div>

        {/* Bottom space */}
        <div style={{ height: "100vh" }} />

        {/* Footer */}
        <div className="pb-20 pt-12 text-center">
          <p
            className="text-8xl md:text-9xl tracking-tight text-gray-600"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              fontWeight: 600,
            }}
          >
            The End of Booring Story 🥲
          </p>
        </div>
      </div>
    </section>
  )
}
