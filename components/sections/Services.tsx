"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    id: "01",
    name: "Residential Interiors",
    descriptor: "Private residences built for calm and clarity",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80",
    description: "From concept to completion — environments shaped entirely around how you live.",
  },
  {
    id: "02",
    name: "Commercial Spaces",
    descriptor: "Workspaces and retail, engineered for focus",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    description: "Environments built for brand integrity and human experience.",
  },
  {
    id: "03",
    name: "Turnkey Execution",
    descriptor: "End-to-end realization without compromise",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80",
    description: "One point of absolute accountability. We manage every single detail.",
  },
  {
    id: "04",
    name: "Space Planning",
    descriptor: "Architectural precision and flow",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80",
    description: "Understanding the site, light, and movement before a material is chosen.",
  },
  {
    id: "05",
    name: "Material Curation",
    descriptor: "Global sourcing of uncompromised finishes",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1400&q=80",
    description: "Stone, timber, textile, steel — selected for tactile quality and longevity.",
  },
]

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [query])
  return matches
}

function ServiceRow({
  service,
  isActive,
  onEnter,
  onToggle,
  isMobile
}: {
  service: (typeof services)[0]
  isActive: boolean
  onEnter: () => void
  onToggle: () => void
  isMobile: boolean
}) {
  return (
    <motion.li
      className="relative overflow-hidden border-t border-white/[0.08] cursor-pointer"
      animate={{ height: isActive ? (isMobile ? 240 : 340) : (isMobile ? 80 : 88) }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => { if (!isMobile) onEnter() }}
      onClick={() => { if (isMobile) onToggle() }}
    >
      {/* Background image — reveals on active */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority={service.id === "01"}
        />
        <div className="absolute inset-0 bg-dark/60" />
      </motion.div>

      {/* Row content — always on top */}
      <div className="relative z-10 flex items-baseline gap-4 md:gap-8 py-6 md:py-7 px-0">
        <span className="font-sans text-[13px] text-gold w-[30px] md:w-[60px] flex-shrink-0">
          {service.id}
        </span>
        <span className="font-display italic text-[28px] md:text-[42px] font-light text-warm-white flex-1 leading-none">
          {service.name}
        </span>
        <motion.span
          className="font-sans text-[14px] font-light text-light-mid max-w-[280px] text-right hidden md:block"
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {service.descriptor}
        </motion.span>
        <motion.span
          className="font-sans text-[32px] md:text-[36px] text-white font-light leading-none ml-2"
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -12 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          →
        </motion.span>
      </div>

      {/* Description — fades in at bottom of expanded row */}
      <motion.div
        className="relative z-10 pb-6 md:pb-8"
        style={{ paddingLeft: isMobile ? "0px" : "88px" }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
        transition={{
          duration: 0.3,
          delay: isActive ? 0.2 : 0,
          ease: "easeOut",
        }}
      >
        <p className="font-sans text-[14px] md:text-[15px] font-light text-warm-white/70 max-w-[480px] leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </motion.li>
  )
}

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className="bg-charcoal py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-[11px] tracking-[4px] text-gold uppercase mb-4">
          WHAT WE DO
        </p>
        <h2 className="font-display font-light text-warm-white mb-[60px] md:mb-[80px] leading-none">
          Our Practice
        </h2>

        <ul
          className="w-full"
          onMouseLeave={() => { if (!isMobile) setActiveId(null) }}
        >
          {services.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isActive={activeId === service.id}
              isMobile={isMobile}
              onEnter={() => setActiveId(service.id)}
              onToggle={() =>
                setActiveId((prev) =>
                  prev === service.id ? null : service.id
                )
              }
            />
          ))}
          {/* Bottom border to close the list */}
          <div className="border-t border-white/[0.08]" />
        </ul>
      </div>
    </section>
  )
}
