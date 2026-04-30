"use client"

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '../ui/MagneticButton'

const NAV_LINKS = [
  { name: 'HOW IT WORKS', href: '/#how-it-works' },
  { name: 'PORTFOLIO', href: '/projects' },
  { name: 'PHILOSOPHY', href: '/#philosophy' },
  { name: 'CONTACT', href: '/#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-400 ease-out ${
        isScrolled 
          ? 'bg-cream border-b border-gold-light py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className={`font-sans text-[13px] tracking-[4px] uppercase transition-colors duration-400 ${
          isScrolled ? 'text-charcoal' : 'text-warm-white'
        }`}>
          UGRA CREATION
        </Link>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-[12px] tracking-[2px] uppercase transition-colors duration-400 hover:text-gold ${
                isScrolled ? 'text-charcoal' : 'text-warm-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <MagneticButton>
            <Link
              href="#contact"
              className={`border border-gold text-[11px] tracking-[2px] px-6 py-2.5 transition-all duration-300 uppercase ${
                isScrolled 
                  ? 'text-gold hover:bg-gold hover:text-dark' 
                  : 'text-gold hover:bg-gold hover:text-dark'
              }`}
            >
              Book a Consultation →
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 transition-colors ${isScrolled ? 'bg-charcoal' : 'bg-warm-white'}`} />
          <span className={`w-6 h-0.5 transition-colors ${isScrolled ? 'bg-charcoal' : 'bg-warm-white'}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-dark z-[110] flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-8 text-warm-white text-[11px] tracking-[2px] uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Close
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-[32px] text-warm-white hover:text-gold transition-colors italic"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 border border-gold text-gold text-[13px] tracking-[3px] px-8 py-4 uppercase"
            >
              Book a Consultation →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
