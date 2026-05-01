"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BrandStory() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })

  return (
    <section 
      ref={containerRef}
      className="bg-cream py-16 md:py-24 px-5 md:px-6 flex justify-center items-center relative"
    >
      <div className="w-full max-w-[680px] flex flex-col items-center text-center relative">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-[1px] bg-gold origin-center mb-10 md:mb-12"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display italic font-light text-[22px] md:text-[28px] text-charcoal leading-[1.6]"
        >
          "Ugra Creation was built on referrals, not advertising. Since 2018, we have designed and executed interiors for private clients across Noida and Faridabad — residential, commercial, and hospitality. Most of our best work is never published. That is intentional."
        </motion.p>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className="w-full h-[1px] bg-gold origin-center mt-10 md:mt-12"
        />
      </div>
    </section>
  )
}
