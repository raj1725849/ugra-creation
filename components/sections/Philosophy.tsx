"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { fadeUp, staggerContainer, lineReveal } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })

  useGSAP(() => {
    if (!containerRef.current || !leftColRef.current) return

    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      // Desktop: Pinned layout
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftColRef.current,
        pinSpacing: false,
        scrub: 1,
      })
    })

    // Mobile/Tablet: Simple fade-up for all items
    if (window.innerWidth < 1024) {
      const items = gsap.utils.toArray('.philosophy-section [data-animate]')
      items.forEach((item: any) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            }
          }
        )
      })
    }
  }, { scope: containerRef })

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

  return (
    <section 
      ref={containerRef}
      id="philosophy"
      className="philosophy-section relative bg-cream py-[80px] md:py-[120px] px-8 md:px-[80px]"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-[60px] lg:gap-[80px]">
        {/* LEFT column (Pinned on Desktop) */}
        <div ref={leftColRef} className="philosophy-left flex flex-col pt-4">
          <div data-animate>
            <motion.span
              initial={isMobile ? false : "hidden"}
              animate={!isMobile && isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-sans text-[11px] tracking-[3px] text-gold uppercase"
            >
              OUR BELIEF
            </motion.span>
          </div>
          <div data-animate>
            <motion.blockquote
              initial={isMobile ? false : "hidden"}
              animate={!isMobile && isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="font-display italic text-[32px] md:text-[52px] font-light text-charcoal leading-[1.15] mt-8"
            >
              "Design is not decoration. It is the architecture of how you live."
            </motion.blockquote>
          </div>
        </div>

        {/* RIGHT column */}
        <div className="flex flex-col gap-10 lg:pt-[200px]">
          <div data-animate>
            <motion.p 
              initial={isMobile ? false : "hidden"}
              animate={!isMobile && isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-sans text-[17px] font-light text-mid leading-[1.9]"
            >
              At Ugra Creation, we believe a well-designed space is not a luxury — it is a necessity. Every project begins with listening: to the site, the light, the lives that will unfold within.
            </motion.p>
          </div>
          <div data-animate>
            <motion.p 
              initial={isMobile ? false : "hidden"}
              animate={!isMobile && isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-sans text-[17px] font-light text-mid leading-[1.9]"
            >
              Our process is deliberate and unhurried. We source materials with the same care as a collector, and detail spaces with the same eye as an editor. The result is interiors that feel complete — and entirely yours.
            </motion.p>
          </div>

          {/* Philosophy Detail Image */}
          <div data-animate>
            <motion.div 
              initial={isMobile ? false : "hidden"}
              animate={!isMobile && isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden bg-cream-dark mt-4"
            >
              <Image 
                src="/philosophy-detail.png" 
                alt="Interior detail showcasing material curation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </div>

          <div className="mt-12" data-animate>
            <motion.div
              initial={isMobile ? false : "hidden"}
              animate={!isMobile && isInView ? "visible" : "hidden"}
              variants={lineReveal}
              className="w-[60px] h-[1px] bg-gold"
            />
            <motion.span
              initial={isMobile ? false : "hidden"}
              animate={!isMobile && isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="block font-sans text-[11px] tracking-[2px] text-mid mt-4 uppercase"
            >
              Est. 2018 · Noida
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
  )
}
