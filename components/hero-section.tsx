"use client"
import { Typewriter } from "./typewriter"
import NeonCrystalCity from "./neon-crystal-city"

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <NeonCrystalCity cameraSpeed={3} tileSize={2.5} maxSteps={80} ariaLabel="Neon crystal city background" />
      </div>

      {/* Main content - centered with plenty of whitespace */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 p-4">
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-white/60 font-medium tracking-wide">Hi, I’m Arham — builder of systems that think, automate, and perform</p>

          {/* Main typewriter heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-balance leading-tight text-white">
            <span className="text-white">I create </span> 
            <Typewriter
              text={["AI-driven platforms", "data-driven marketing tools", "web experiences that perform", "automation systems", "products that scale and inspire"]}
              speed={70}
              className="text-yellow-400 font-normal"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar="_"
            />
          </h1>
        </div>

        {/* Extra whitespace and scroll indicator */}
        <div className="pt-16 text-white/40">
          <p className="text-sm">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
