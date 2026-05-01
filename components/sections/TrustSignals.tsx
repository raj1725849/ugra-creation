"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const TRUST_BLOCKS = [
  {
    label: "Referral-Led Practice",
    desc: "Over 80% of our clients come through personal referrals. We have never run a paid campaign for client acquisition."
  },
  {
    label: "End-to-End Execution",
    desc: "We manage design, material sourcing, contractor coordination, and site supervision — so you don't have to."
  },
  {
    label: "Privacy by Default",
    desc: "We do not publish client homes without explicit permission. Your space remains yours."
  },
  {
    label: "No Catalogue Thinking",
    desc: "Every material, finish, and fixture is selected specifically for your brief and site conditions — not from a pre-approved supplier list."
  }
]

export default function TrustSignals() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section 
      ref={containerRef}
      id="trust"
      className="bg-cream py-16 md:py-24 px-5 md:px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 md:mb-[80px]">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans text-[11px] tracking-[3px] text-gold uppercase"
          >
            OUR COMMITMENT
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-display font-light text-charcoal mt-6"
          >
            Why Clients Choose Us
          </motion.h2>
        </header>

        <div className="flex flex-col md:grid md:grid-cols-[50%_50%] gap-12 md:gap-16 lg:gap-24">
          
          {/* LEFT - Trust Signal Blocks */}
          <div className="flex flex-col gap-10">
            {TRUST_BLOCKS.map((block, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
                className="flex flex-col pt-4 border-t-2 border-gold"
              >
                <h4 className="font-sans text-[16px] md:text-[18px] font-semibold text-charcoal mb-2">
                  {block.label}
                </h4>
                <p className="font-sans text-[14px] md:text-[15px] font-light text-charcoal/70 leading-[1.7]">
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT - Founder Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col h-full bg-warm-white p-8 md:p-12 border border-charcoal/5 rounded-[4px]"
          >
            {/* High-quality placeholder instead of a missing image */}
            <div className="w-full aspect-square md:aspect-[4/5] bg-dark relative mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal to-charcoal/80" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="font-display italic text-6xl text-gold">Ugra</span>
              </div>
            </div>

            <h3 className="font-display text-[22px] md:text-[26px] text-charcoal mb-4">
              — Ugra Creation, Principal Designer
            </h3>
            
            <p className="font-sans text-[15px] font-light text-charcoal/70 leading-[1.8] mb-8">
              We have led interior projects across residential, commercial, and hospitality categories in NCR since 2018. The studio's approach prioritizes material integrity, spatial clarity, and long-term usability over trend-driven aesthetics.
            </p>

            <div className="mt-auto flex flex-col gap-2 pt-6 border-t border-charcoal/10">
              <span className="font-sans text-[13px] text-charcoal">
                <strong>Phone:</strong> +91 XXXXX XXXXX
              </span>
              <span className="font-sans text-[13px] text-charcoal">
                <strong>Email:</strong> studio@ugracreation.com
              </span>
              <span className="font-sans text-[12px] text-mid mt-2">
                Available Monday–Saturday, 10am–6pm
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
