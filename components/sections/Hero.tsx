"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import MagneticButton from '../ui/MagneticButton'

const TRUST_SIGNALS = [
  "Privacy-first service",
  "Design + full execution",
  "Curated material sourcing",
  "Consultation by appointment"
]

export default function Hero() {
  useGSAP(() => {
    // Entrance timeline
    // Delay matches preloader exit (approx 2s + 0.8s fade)
    const tl = gsap.timeline({ delay: 2.2 })

    // 1. HERO IMAGE / BACKGROUND
    tl.to('.hero-image-container', {
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: 'expo.out',
    })

    // 2. LABEL
    tl.from('.hero-label', { 
      opacity: 0, 
      y: 40, 
      duration: 0.8, 
      ease: 'power3.out' 
    }, "-=0.6")

    // 3. CTA
    tl.from('.hero-cta', { 
      opacity: 0, 
      y: 30, 
      duration: 0.6, 
      ease: 'power3.out' 
    }, "-=0.4")

    // 4. SIDE TEXT
    tl.from('.hero-side-text', { 
      opacity: 0, 
      x: 20, 
      duration: 0.8, 
      ease: 'power3.out' 
    }, "-=0.6")
  })

  return (
    <section className="relative h-screen w-full bg-dark overflow-hidden">
      {/* Background Image Container */}
      <div className="hero-image-container absolute inset-0 will-change-transform translate-y-[80px] scale-[1.05]">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800"
          alt="Interior Design Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/10" />
      </div>

      {/* Content */}
      <div className="absolute bottom-[80px] left-5 md:left-[80px] w-full max-w-[800px] z-10 pr-5">
        <div className="hero-label">
          <span className="font-sans text-[11px] tracking-[4px] text-gold uppercase">
            NOIDA · FARIDABAD
          </span>
        </div>
        
        <div className="mt-6 md:mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-warm-white leading-[1.2] md:leading-[1.1] font-light text-[32px] md:text-[56px] max-w-[700px]"
          >
            Private, bespoke interiors for homes and offices in Noida & Faridabad.
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
          className="font-sans text-[15px] md:text-[18px] font-light text-warm-white/70 max-w-[560px] leading-[1.6] md:leading-[1.8] mt-6 md:mt-8"
        >
          We design and execute refined interiors for clients who value customization, material quality, and discretion — from concept through to handover.
        </motion.p>

        {/* TRUST STRIP */}
        <div className="mt-8 md:mt-10 flex flex-wrap md:flex-nowrap gap-x-4 gap-y-3 md:gap-x-0 md:items-center">
          {TRUST_SIGNALS.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0 + (index * 0.2) }}
              className="flex items-center"
            >
              <span className="font-sans text-[10px] md:text-[11px] tracking-[2px] uppercase text-warm-white/50 whitespace-nowrap">
                {signal}
              </span>
              {index < TRUST_SIGNALS.length - 1 && (
                <div className="hidden md:block w-[1px] h-3 bg-white/20 mx-4" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="hero-cta mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <MagneticButton>
            <button className="border border-gold text-gold font-sans text-[13px] tracking-[2px] px-8 md:px-10 py-4 md:py-5 hover:bg-gold hover:text-dark transition-all duration-300 uppercase min-h-[48px]">
              Request a Consultation
            </button>
          </MagneticButton>
          <a href="#process" className="font-sans text-[14px] text-warm-white hover:text-gold transition-colors duration-300 min-h-[48px] flex items-center">
            See how we work <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Side Text */}
      <div className="hero-side-text absolute right-8 top-1/2 -translate-y-1/2 rotate-90 hidden lg:block">
        <span className="font-sans text-[11px] text-mid tracking-[3px] whitespace-nowrap">
          UGRA CREATION © 2026
        </span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-4">
        <motion.div
          animate={{ height: [0, 40, 0], y: [0, 0, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gold"
        />
        <span className="font-sans text-[10px] text-gold tracking-[2px] uppercase">SCROLL</span>
      </div>
    </section>
  )
}
