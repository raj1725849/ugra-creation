"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function CinematicBrand() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  useGSAP(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from('.cinematic-text', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-dark flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80"
          alt="Cinematic Architectural Space"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="font-sans text-[11px] tracking-[4px] text-gold uppercase mb-8"
        >
          THE UGRA STANDARD
        </motion.span>
        
        <h2 className="cinematic-text font-display text-[40px] md:text-[72px] font-light text-warm-white leading-[1.1] mb-8 max-w-[800px]">
          We craft spaces that resonate. Quiet, intentional, and undeniably yours.
        </h2>
        
        <div className="cinematic-text w-[1px] h-[60px] bg-gold/50 my-8" />
        
        <p className="cinematic-text font-sans text-[15px] md:text-[17px] font-light text-warm-white/70 max-w-[500px] leading-relaxed">
          Every material sourced, every proportion considered. True luxury lies in the unseen details that make a space feel whole.
        </p>
      </div>
    </section>
  )
}
