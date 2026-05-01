"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { fadeUp, lineReveal } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useGSAP(() => {
    if (!containerRef.current) return

    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      if (leftColRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: leftColRef.current,
          pinSpacing: false,
          scrub: 1,
        })
      }
    })

    mm.add("(max-width: 767px)", () => {
      const items = gsap.utils.toArray('.mobile-reveal-item')
      items.forEach((item: any) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            }
          }
        )
      })
    })
  }, { scope: containerRef, dependencies: [isMobile] })

  const getMotionProps = (delay = 0, customVariants = fadeUp) => {
    return {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-20%" },
      variants: customVariants,
      transition: { delay }
    }
  }

  // We add max-md:!opacity-100 max-md:!transform-none to motion elements
  // This neutralizes Framer Motion's inline styles on mobile,
  // allowing the parent .mobile-reveal-item (animated by GSAP) to cleanly handle the reveal.
  const motionClass = "max-md:!opacity-100 max-md:!transform-none"

  return (
    <section 
      ref={containerRef}
      id="philosophy"
      className="philosophy-section relative bg-cream py-16 md:py-24 px-5 md:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[38%_62%] gap-10">
        {/* LEFT column (Pinned on Desktop) */}
        <div ref={leftColRef} className="philosophy-left flex flex-col pt-4">
          <div className="mobile-reveal-item will-change-transform">
            <motion.span
              {...getMotionProps(0)}
              className={`font-sans text-[11px] tracking-[3px] text-gold uppercase ${motionClass}`}
            >
              OUR BELIEF
            </motion.span>
          </div>
          <div className="mobile-reveal-item will-change-transform mt-6 md:mt-8">
            <motion.blockquote
              {...getMotionProps(0.2)}
              className={`font-display italic font-light text-charcoal leading-[1.2] md:leading-[1.15] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] ${motionClass}`}
            >
              "Design is not decoration. It is the architecture of how you live."
            </motion.blockquote>
          </div>
        </div>

        {/* RIGHT column */}
        <div className="flex flex-col gap-10 pt-0 md:pt-[160px]">
          <div className="mobile-reveal-item will-change-transform">
            <motion.p 
              {...getMotionProps(0)}
              className={`font-sans font-light text-[15px] leading-[1.85] md:text-[16px] md:leading-[1.9] text-mid ${motionClass}`}
            >
              A well-designed space is an architectural necessity. We listen to the site, the light, and the lives that unfold within. Our process begins long before the first sketch—studying the cadence of your daily rituals and the unique interplay of shadows and structure.
            </motion.p>
          </div>
          <div className="mobile-reveal-item will-change-transform">
            <motion.p 
              {...getMotionProps(0.1)}
              className={`font-sans font-light text-[15px] leading-[1.85] md:text-[16px] md:leading-[1.9] text-mid ${motionClass}`}
            >
              Our process is deliberate. We curate materials like a collector and detail spaces like an editor, resulting in interiors that feel complete and undeniably yours. We select stones, woods, and textiles for their longevity and patina, not just for a momentary photograph. Every element is refined until only the essential remains.
            </motion.p>
          </div>
          <div className="mobile-reveal-item will-change-transform">
            <motion.p 
              {...getMotionProps(0.2)}
              className={`font-sans font-light text-[15px] leading-[1.85] md:text-[16px] md:leading-[1.9] text-mid ${motionClass}`}
            >
              Whether we are shaping a residential sanctuary, a commercial headquarters, or a boutique hospitality environment, our approach remains uncompromising. The scale changes, but the demand for spatial intelligence and precise execution is non-negotiable.
            </motion.p>
          </div>

          {/* Philosophy Detail Image */}
          <div className="mobile-reveal-item will-change-transform mt-4 md:mt-6">
            <motion.div 
              {...getMotionProps(0.3)}
              className={`relative w-full aspect-[3/4] md:aspect-[16/9] overflow-hidden bg-cream-dark ${motionClass}`}
            >
              <Image 
                src="/philosophy-detail.png" 
                alt="Interior detail showcasing material curation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-8 md:mt-12">
            <div className="mobile-reveal-item will-change-transform flex flex-col pt-4 border-t border-charcoal/10">
              <motion.h4 {...getMotionProps(0.4)} className={`font-sans text-[11px] tracking-[2px] text-gold uppercase mb-3 ${motionClass}`}>
                Architectural Rigor
              </motion.h4>
              <motion.p {...getMotionProps(0.5)} className={`font-sans font-light text-[14px] leading-[1.7] text-charcoal/70 ${motionClass}`}>
                Form follows purpose. We construct spaces with structural integrity before considering surface details.
              </motion.p>
            </div>
            <div className="mobile-reveal-item will-change-transform flex flex-col pt-4 border-t border-charcoal/10">
              <motion.h4 {...getMotionProps(0.5)} className={`font-sans text-[11px] tracking-[2px] text-gold uppercase mb-3 ${motionClass}`}>
                Material Honesty
              </motion.h4>
              <motion.p {...getMotionProps(0.6)} className={`font-sans font-light text-[14px] leading-[1.7] text-charcoal/70 ${motionClass}`}>
                We source authentic, natural elements that age gracefully and ground the environment in reality.
              </motion.p>
            </div>
            <div className="mobile-reveal-item will-change-transform flex flex-col pt-4 border-t border-charcoal/10">
              <motion.h4 {...getMotionProps(0.6)} className={`font-sans text-[11px] tracking-[2px] text-gold uppercase mb-3 ${motionClass}`}>
                Spatial Rhythm
              </motion.h4>
              <motion.p {...getMotionProps(0.7)} className={`font-sans font-light text-[14px] leading-[1.7] text-charcoal/70 ${motionClass}`}>
                Tension and release. We sequence rooms to create a seamless, emotional journey through the interior.
              </motion.p>
            </div>
          </div>

          <div className="mobile-reveal-item will-change-transform mt-8 md:mt-12 flex flex-col items-start">
            <motion.div
              {...getMotionProps(0.8, lineReveal)}
              className={`w-[60px] h-[1px] bg-gold ${motionClass}`}
            />
            <motion.span
              {...getMotionProps(0.9)}
              className={`block font-sans text-[11px] tracking-[2px] text-mid mt-4 uppercase ${motionClass}`}
            >
              Est. 2018 · Noida
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
