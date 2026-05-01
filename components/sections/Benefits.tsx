"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BENEFITS = [
  {
    title: 'Spatial Architecture',
    desc: 'We engineer light and proportion to create environments that breathe without restriction.',
    xOffset: -30,
  },
  {
    title: 'Material Integrity',
    desc: 'Sourcing authentic, uncompromised elements that age with grace and tactile presence.',
    xOffset: 30,
  },
  {
    title: 'Absolute Precision',
    desc: 'Every detail, from foundational geometry to final texture, is meticulously controlled.',
    xOffset: -30,
  },
  {
    title: 'Restrained Elegance',
    desc: 'Interiors designed for clarity and calm, stripping away the superfluous to leave only the essential.',
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
      className="bg-warm-white py-16 md:py-24 px-5 md:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col">
          <span className="font-sans text-[11px] tracking-[4px] text-gold uppercase mb-6">
            OUR APPROACH
          </span>
          <h2 className="font-display font-light text-[32px] md:text-[40px] text-charcoal leading-[1.1] mb-8">
            Engineering the Unseen
          </h2>
          <p className="font-sans font-light text-[15px] md:text-mid leading-[1.85] md:leading-[1.9] max-w-[480px]">
            We shape spaces that evoke calm and clarity. Beyond surface decoration, we focus on the invisible architecture of your daily experience—mastering proportion, authentic materials, and absolute intention.
          </p>
        </div>

        {/* RIGHT SIDE: Square Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className="benefit-card bg-cream/30 aspect-auto md:aspect-square py-12 px-8 md:p-10 rounded-[4px] border border-gold-light/10 hover:border-gold-light/40 transition-all duration-500 group flex flex-col justify-center shadow-sm hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="font-display text-[22px] md:text-[28px] font-light text-charcoal mb-4 group-hover:text-gold transition-colors duration-500">
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
