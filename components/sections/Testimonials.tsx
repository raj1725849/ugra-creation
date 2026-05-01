"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"

export default function Testimonials() {
  const containerRef = React.useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section ref={containerRef} className="bg-charcoal py-16 md:py-24 px-5 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-[60px] text-center">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans text-[11px] tracking-[4px] text-gold uppercase"
          >
            CLIENT PERSPECTIVES
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-display font-light text-[28px] md:text-[40px] text-warm-white mt-6"
          >
            Words from people who live in our work.
          </motion.h2>
        </header>

        <div className="relative w-full">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  )
}
