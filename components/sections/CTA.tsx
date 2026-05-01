"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  return (
    <section 
      ref={containerRef}
      id="contact"
      className="bg-forest py-16 md:py-24 px-5 md:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 md:mb-[80px]">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans text-[11px] tracking-[4px] text-gold uppercase"
          >
            NEXT STEPS
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-display font-light text-[32px] md:text-[40px] text-warm-white mt-6 mb-4"
          >
            Begin with a conversation.
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="font-sans text-[15px] md:text-[17px] font-light text-warm-white/70 max-w-[500px] leading-relaxed"
          >
            Tell us about your space and what you are looking for. We will respond within one working day to schedule a private consultation.
          </motion.p>
        </header>

        <div className="flex flex-col lg:grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20">
          
          {/* LEFT: Contact Info */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <h4 className="font-sans text-[11px] text-gold tracking-[2px] uppercase mb-2">Phone</h4>
                <p className="font-sans text-[16px] text-warm-white">+91 98XXX XXXXX</p>
              </div>
              
              <div>
                <h4 className="font-sans text-[11px] text-gold tracking-[2px] uppercase mb-2">WhatsApp</h4>
                <p className="font-sans text-[16px] text-warm-white">+91 98XXX XXXXX <span className="text-warm-white/50 text-[13px] ml-2">(Message us directly)</span></p>
              </div>

              <div>
                <h4 className="font-sans text-[11px] text-gold tracking-[2px] uppercase mb-2">Email</h4>
                <p className="font-sans text-[16px] text-warm-white">studio@ugracreation.com</p>
              </div>

              <div>
                <h4 className="font-sans text-[11px] text-gold tracking-[2px] uppercase mb-2">Office</h4>
                <p className="font-sans text-[16px] text-warm-white max-w-[200px]">Sector 132, Noida Expressway, Uttar Pradesh</p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 pt-8 border-t border-warm-white/10">
              <span className="font-sans text-[12px] text-warm-white/60">
                Available Monday–Saturday · 10am–6pm
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-dark/30 p-6 md:p-10 rounded-[4px] border border-gold/10"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-[12px] text-warm-white/70">Name</label>
                  <input type="text" id="name" className="bg-transparent border-b border-warm-white/20 text-warm-white py-2 focus:outline-none focus:border-gold transition-colors rounded-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans text-[12px] text-warm-white/70">Phone Number</label>
                  <input type="tel" id="phone" className="bg-transparent border-b border-warm-white/20 text-warm-white py-2 focus:outline-none focus:border-gold transition-colors rounded-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="font-sans text-[12px] text-warm-white/70">Project Type</label>
                  <select id="type" className="bg-transparent border-b border-warm-white/20 text-warm-white py-2 focus:outline-none focus:border-gold transition-colors rounded-none appearance-none">
                    <option value="" className="bg-dark text-warm-white">Select Type</option>
                    <option value="residence" className="bg-dark text-warm-white">Residence</option>
                    <option value="office" className="bg-dark text-warm-white">Office</option>
                    <option value="hospitality" className="bg-dark text-warm-white">Hospitality</option>
                    <option value="other" className="bg-dark text-warm-white">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="font-sans text-[12px] text-warm-white/70">Area / Location</label>
                  <input type="text" id="location" className="bg-transparent border-b border-warm-white/20 text-warm-white py-2 focus:outline-none focus:border-gold transition-colors rounded-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-[12px] text-warm-white/70">Brief Message (Optional)</label>
                <textarea id="message" rows={3} className="bg-transparent border-b border-warm-white/20 text-warm-white py-2 focus:outline-none focus:border-gold transition-colors resize-none rounded-none"></textarea>
              </div>

              <button 
                type="button" 
                className="mt-4 bg-gold text-dark font-sans text-[13px] tracking-[2px] px-8 py-[18px] hover:bg-cream transition-all duration-300 uppercase self-start min-h-[48px]"
              >
                Send Enquiry
              </button>

              <p className="font-sans text-[11px] text-warm-white/40 mt-4 leading-relaxed">
                Your details are kept private. We do not share enquiry information with third parties.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
