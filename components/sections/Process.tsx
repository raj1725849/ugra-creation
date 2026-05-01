"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const STAGES = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We begin with a conversation — your brief, your timeline, your non-negotiables. No commitment required at this stage."
  },
  {
    num: "02",
    title: "Concept & Material Direction",
    desc: "We develop the spatial concept, select material palettes, and present a detailed scope. You see exactly what you are approving before work begins."
  },
  {
    num: "03",
    title: "Execution & Site Supervision",
    desc: "Our team coordinates contractors, tracks timelines, and manages quality on-site. You receive regular updates without needing to chase anyone."
  },
  {
    num: "04",
    title: "Handover & Styling",
    desc: "Final walkthrough, snag resolution, and styling. The space is handed over complete — not 'almost complete'."
  }
]

export default function Process() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  useGSAP(() => {
    const isMobile = window.innerWidth < 768

    if (!isMobile) {
      // Desktop: Horizontal stagger slide in
      gsap.from('.process-stage', {
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      })
    } else {
      // Mobile: Vertical fade up
      const stages = gsap.utils.toArray('.process-stage')
      stages.forEach((stage: any) => {
        gsap.from(stage, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stage,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        })
      })
    }
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      id="process"
      className="bg-charcoal py-16 md:py-24 px-5 md:px-6 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-[100px]">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans text-[11px] tracking-[3px] text-gold uppercase"
          >
            HOW WE WORK
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-display font-light text-[32px] md:text-[48px] text-warm-white mt-6"
          >
            A process built for clarity, not complexity.
          </motion.h2>
        </header>

        {/* Timeline Container */}
        <div className="process-timeline relative flex flex-col md:flex-row gap-12 md:gap-0 w-full justify-between">
          
          {/* Connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-white/10" />

          {STAGES.map((stage, idx) => (
            <div 
              key={idx}
              className="process-stage relative flex flex-col md:w-[22%] z-10"
            >
              {/* Desktop Marker */}
              <div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-gold mb-10 mt-[35px] relative" />

              <span className="font-display text-[48px] md:text-[64px] text-white/10 leading-none mb-4">
                {stage.num}
              </span>
              <h4 className="font-sans text-[18px] md:text-[20px] font-medium text-warm-white mb-4">
                {stage.title}
              </h4>
              <p className="font-sans text-[14px] md:text-[15px] font-light text-warm-white/60 leading-[1.7]">
                {stage.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
