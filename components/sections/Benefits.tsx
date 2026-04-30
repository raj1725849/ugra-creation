"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BENEFITS = [
  {
    title: 'Thoughtful Design',
    desc: 'Proportion and light are the foundation of every room.',
    xOffset: -30,
  },
  {
    title: 'Premium Materials',
    desc: 'Sourcing the finest stones and woods for your home.',
    xOffset: 30,
  },
  {
    title: 'End-to-End',
    desc: 'From concept to walkthrough, we manage every detail.',
    xOffset: -30,
  },
  {
    title: 'Client-Centric',
    desc: 'Your lifestyle defines our design. We listen, then create.',
    xOffset: 30,
  }
]

export default function Benefits() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const cards = gsap.utils.toArray('.benefit-card')
    const isMobile = window.innerWidth < 768
    
    // Entrance Animation
    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 60,
        x: (i) => isMobile ? 0 : BENEFITS[i].xOffset
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: isMobile ? 0.8 : 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? 'top 85%' : 'top 75%',
          toggleActions: 'play none none reverse',
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      id="benefits"
      className="bg-warm-white py-[120px] px-8 md:px-[80px] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-[60px] lg:gap-[100px] items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col">
          <span className="font-sans text-[11px] tracking-[4px] text-gold uppercase mb-6">
            OUR PHILOSOPHY
          </span>
          <h1 className="font-display text-[48px] md:text-[64px] font-light text-charcoal leading-[1.1] mb-8">
            Design That Reflects How You Live
          </h1>
          <p className="font-sans text-[17px] font-light text-mid leading-[1.8] max-w-[480px]">
            We don’t just design interiors—we shape spaces that feel personal, functional, and refined. Every detail is considered, every material is intentional, and every project is built to elevate everyday living.
          </p>
        </div>

        {/* RIGHT SIDE: Square Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className="benefit-card bg-cream/30 aspect-square p-8 md:p-10 rounded-[4px] border border-gold-light/10 hover:border-gold-light/40 transition-all duration-500 group flex flex-col justify-center shadow-sm hover:shadow-xl hover:scale-[1.03]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="font-display text-[24px] md:text-[28px] font-light text-charcoal mb-4 group-hover:text-gold transition-colors duration-500">
                {benefit.title}
              </h3>
              <p className="font-sans text-[14px] font-light text-mid leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
