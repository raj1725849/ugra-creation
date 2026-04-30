"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-dark pt-[80px] pb-[40px] px-8 md:px-[80px] overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/footer-bg.png" 
          alt="Footer Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/80" />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] md:gap-[80px]">
          {/* COL 1: Brand */}
          <div className="flex flex-col">
            <span className="font-sans text-[13px] tracking-[5px] text-warm-white uppercase">
              UGRA CREATION
            </span>
            <p className="font-display italic text-[16px] text-mid mt-4">
              Spaces that hold meaning.
            </p>
            <address className="not-italic font-sans text-[13px] text-mid mt-8 leading-relaxed">
              B-47, Sector 63, Noida,<br />
              Uttar Pradesh 201301
            </address>
            <a href="tel:+919876543210" className="font-sans text-[13px] text-light-mid mt-4 hover:text-warm-white transition-colors">
              +91 98765 43210
            </a>
            <a href="mailto:hello@ugracreation.in" className="font-sans text-[13px] text-gold mt-1 hover:text-gold-light transition-colors">
              hello@ugracreation.in
            </a>
          </div>

          {/* COL 2: Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase mb-2">STUDIO</span>
              {['How It Works', 'Our Philosophy', 'The Team', 'Careers'].map((item) => (
                <motion.div key={item} whileHover={{ x: 4 }}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="font-sans text-[13px] text-mid hover:text-warm-white transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase mb-2">CONNECT</span>
              {['Instagram', 'Houzz', 'LinkedIn', 'WhatsApp'].map((item) => (
                <motion.div key={item} whileHover={{ x: 4 }}>
                  <Link href={`#${item.toLowerCase()}`} className="font-sans text-[13px] text-mid hover:text-warm-white transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COL 3: Newsletter */}
          <div className="flex flex-col">
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase mb-6">NEWSLETTER</span>
            <div className="relative border-b border-[#444441] pb-3 flex items-center group">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none text-warm-white font-sans text-[14px] w-full focus:outline-none placeholder:text-mid"
              />
              <button className="text-gold text-lg transition-transform group-hover:translate-x-1">
                →
              </button>
              <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-focus-within:w-full" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1916] pt-8 mt-[60px] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[12px] text-[#444441]">
            © 2025 Ugra Creation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-sans text-[12px] text-[#444441] hover:text-mid transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-sans text-[12px] text-[#444441] hover:text-mid transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
