"use client"

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { fadeUp } from '@/lib/animations'
import SplitHeading from '../ui/SplitHeading'
import MagneticButton from '../ui/MagneticButton'
import ConsultationModal from '../ui/ConsultationModal'

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section 
      ref={containerRef}
      id="contact"
      className="bg-forest py-16 md:py-24 px-6 text-center flex flex-col items-center overflow-hidden"
    >
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        className="font-sans text-[11px] tracking-[4px] text-gold uppercase"
      >
        READY TO BEGIN?
      </motion.span>

      <div className="mt-8 mb-10 max-w-[900px]">
        <SplitHeading
          text="Your space deserves"
          tag="h2"
          splitBy="words"
          className="font-display italic font-light text-warm-white leading-[1.1]"
        />
        <SplitHeading
          text="considered design."
          tag="h2"
          splitBy="words"
          className="font-display italic font-light text-warm-white leading-[1.1]"
          delay={0.5}
        />
      </div>

      <motion.p
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ delay: 0.8 }}
        className="font-sans text-[17px] font-light text-warm-white/60 max-w-[480px] leading-relaxed mb-12"
      >
        We take a limited number of projects each year to ensure every client receives our full attention. Enquiries are open.
      </motion.p>

      <MagneticButton>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-cream text-charcoal font-sans text-[13px] tracking-[2px] px-10 py-[18px] hover:bg-gold hover:text-dark transition-all duration-300 uppercase"
        >
          Schedule a Consultation →
        </button>
      </MagneticButton>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <div className="w-full max-w-[600px] h-[1px] bg-warm-white/10 mt-[80px] mb-10" />

      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ delay: 1 }}
        className="font-sans text-[11px] text-warm-white/40 tracking-[2px] uppercase"
      >
        200+ PROJECTS COMPLETED · NOIDA & NCR · SINCE 2018
      </motion.span>
    </section>
  )
}
