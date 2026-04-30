"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { fadeUp, staggerContainer, lineReveal } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })

  useGSAP(() => {
    if (!containerRef.current || !leftColRef.current) return

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: leftColRef.current,
      pinSpacing: false,
      scrub: 1,
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      id="philosophy"
      className="philosophy-section relative bg-cream py-[120px] px-8 md:px-[80px]"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-[60px] lg:gap-[80px]">
        {/* LEFT column (Pinned) */}
        <div ref={leftColRef} className="philosophy-left flex flex-col pt-4">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans text-[11px] tracking-[3px] text-gold uppercase"
          >
            OUR BELIEF
          </motion.span>
          <motion.blockquote
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-display italic text-[42px] md:text-[52px] font-light text-charcoal leading-[1.15] mt-8"
          >
            "Design is not decoration. It is the architecture of how you live."
          </motion.blockquote>
        </div>

        {/* RIGHT column */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-10 lg:pt-[200px]"
        >
          <motion.p variants={fadeUp} className="font-sans text-[17px] font-light text-mid leading-[1.9]">
            At Ugra Creation, we believe a well-designed space is not a luxury — it is a necessity. Every project begins with listening: to the site, the light, the lives that will unfold within.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-[17px] font-light text-mid leading-[1.9]">
            Our process is deliberate and unhurried. We source materials with the same care as a collector, and detail spaces with the same eye as an editor. The result is interiors that feel complete — and entirely yours.
          </motion.p>

          {/* Philosophy Detail Image */}
          <motion.div 
            variants={fadeUp}
            className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden bg-cream-dark"
          >
            <Image 
              src="/philosophy-detail.png" 
              alt="Interior detail showcasing material curation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </motion.div>

          <div className="mt-12">
            <motion.div
              variants={lineReveal}
              className="w-[60px] h-[1px] bg-gold"
            />
            <motion.span
              variants={fadeUp}
              className="block font-sans text-[11px] tracking-[2px] text-mid mt-4 uppercase"
            >
              Est. 2018 · Noida
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
