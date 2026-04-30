"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitHeading from '../ui/SplitHeading'
import MagneticButton from '../ui/MagneticButton'

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

    // 2. TEXT CONTENT
    tl.from('.hero-label', { 
      opacity: 0, 
      y: 40, 
      duration: 0.8, 
      ease: 'power3.out' 
    }, "-=0.6")
    
    tl.from('.hero-title-line', {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    }, "-=0.6")

    tl.from('.hero-body', { 
      opacity: 0, 
      y: 30, 
      duration: 0.8, 
      ease: 'power3.out' 
    }, "-=0.6")

    tl.from('.hero-cta', { 
      opacity: 0, 
      y: 30, 
      duration: 0.6, 
      ease: 'power3.out' 
    }, "-=0.4")

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
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-[80px] left-8 md:left-[80px] max-w-[800px] z-10">
        <div className="hero-label">
          <span className="font-sans text-[11px] tracking-[4px] text-gold uppercase">
            NOIDA · INDIA
          </span>
        </div>
        
        <div className="mt-6">
          <h1 className="font-display text-[64px] md:text-[110px] text-warm-white leading-[1.1] md:leading-none font-light uppercase">
            <span className="hero-title-line block">
              <SplitHeading text="EVERY SPACE" tag="span" splitBy="chars" className="block" />
            </span>
            <span className="hero-title-line block italic">
              <SplitHeading text="HAS A SOUL." tag="span" splitBy="chars" className="block" delay={2.8} />
            </span>
          </h1>
        </div>

        <p className="hero-body font-sans text-[16px] md:text-[18px] font-light text-warm-white/60 max-w-[520px] leading-relaxed mt-8">
          We design interiors that outlast trends — built on proportion, material, and intention.
        </p>

        <div className="hero-cta mt-12">
          <MagneticButton>
            <button className="border border-gold text-gold font-sans text-[13px] tracking-[2px] px-10 py-5 hover:bg-gold hover:text-dark transition-all duration-300 uppercase">
              Begin Your Project →
            </button>
          </MagneticButton>
        </div>
      </div>

      {/* Side Text */}
      <div className="hero-side-text absolute right-8 top-1/2 -translate-y-1/2 rotate-90 hidden lg:block">
        <span className="font-sans text-[11px] text-mid tracking-[3px] whitespace-nowrap">
          UGRA CREATION © 2025
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
