"use client"

import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm text-transparent"></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance text-center text-white">
            What People Are Saying
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-center">
            Hear from clients and collaborators about their experience working together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  )
}
