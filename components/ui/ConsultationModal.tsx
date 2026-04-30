"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import MagneticButton from "./MagneticButton"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[600px] bg-charcoal border border-gold/20 p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-warm-white/40 hover:text-gold transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <header className="mb-10">
              <span className="font-sans text-[11px] tracking-[4px] text-gold uppercase mb-3 block">
                INQUIRY FORM
              </span>
              <h3 className="font-display text-[32px] md:text-[42px] font-light text-warm-white leading-tight">
                Schedule a <br className="hidden md:block" />
                <span className="italic">Consultation</span>
              </h3>
            </header>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[11px] tracking-[1px] text-warm-white/40 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-warm-white/10 py-3 font-sans text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-warm-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[11px] tracking-[1px] text-warm-white/40 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-warm-white/10 py-3 font-sans text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-warm-white/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[11px] tracking-[1px] text-warm-white/40 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 000 000 0000"
                    className="w-full bg-transparent border-b border-warm-white/10 py-3 font-sans text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-warm-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[11px] tracking-[1px] text-warm-white/40 uppercase">
                    Project Type
                  </label>
                  <select className="w-full bg-transparent border-b border-warm-white/10 py-3 font-sans text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer">
                    <option className="bg-charcoal" value="residential">Residential Interior</option>
                    <option className="bg-charcoal" value="commercial">Commercial Space</option>
                    <option className="bg-charcoal" value="turnkey">Turnkey Project</option>
                    <option className="bg-charcoal" value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[11px] tracking-[1px] text-warm-white/40 uppercase">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-transparent border-b border-warm-white/10 py-3 font-sans text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-warm-white/10 resize-none"
                />
              </div>

              <div className="pt-6">
                <MagneticButton>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-gold text-dark font-sans text-[13px] tracking-[2px] px-12 py-[18px] hover:bg-gold-light transition-all duration-300 uppercase font-medium"
                    onClick={(e) => e.preventDefault()}
                  >
                    Submit Inquiry
                  </button>
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
