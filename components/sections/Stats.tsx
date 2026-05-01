"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 120, label: 'Projects Completed', suffix: '+' },
  { value: 95, label: 'Happy Clients', suffix: '+' },
  { value: 5, label: 'Years Experience', suffix: '+' },
  { value: 10, label: 'Cities Served', suffix: '+' },
]

export default function Stats() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })

  useGSAP(() => {
    if (!containerRef.current) return

    const counters = containerRef.current.querySelectorAll('.stat-number')
    const isMobile = window.innerWidth < 768
    
    counters.forEach((counter: any) => {
      const targetValue = parseInt(counter.getAttribute('data-target') || '0')
      const obj = { val: 0 }
      
      gsap.to(obj, {
        val: targetValue,
        duration: isMobile ? 1.5 : 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: isMobile ? 'top 90%' : 'top 95%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          counter.textContent = Math.floor(obj.val).toString()
        }
      })
    })

    // Staggered entrance for the blocks
    gsap.from('.stat-block', {
      opacity: 0,
      y: isMobile ? 20 : 40,
      duration: isMobile ? 0.6 : 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    })

    // Refresh ScrollTrigger to ensure correct positioning
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      className="bg-cream py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] tracking-[4px] text-gold uppercase block mb-4"
          >
            OUR IMPACT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-light text-charcoal"
          >
            Numbers That Reflect Our Work
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mt-20">
          {STATS.map((stat, index) => (
            <div key={index} className="stat-block flex flex-col items-center">
              <div className="flex items-baseline">
                <span 
                  className="stat-number font-display text-[72px] md:text-[96px] font-light text-charcoal leading-none"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="font-display text-[42px] md:text-[56px] font-light text-gold leading-none">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-sans text-[13px] tracking-[2px] text-mid uppercase mt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
