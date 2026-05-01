"use client"

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: 1,
    title: '3BHK Residence · Sector 50, Noida',
    type: 'Full Interior Execution',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900',
    desc: 'Focusing on textures and natural light for a calm, restorative environment.',
    height: 'aspect-[4/5]'
  },
  {
    id: 2,
    title: 'Corporate Office · Noida Expressway',
    type: 'Space Planning + Material Fit-Out',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600',
    desc: 'Minimalist workspace engineered for focus and brand integrity.',
    height: 'aspect-[1/1]'
  },
  {
    id: 3,
    title: 'Villa Renovation · Greater Noida',
    type: 'Concept Through Handover',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
    desc: 'Extensive structural changes and bespoke furniture design.',
    height: 'aspect-[4/5]'
  },
  {
    id: 4,
    title: 'Boutique Hospitality · South Delhi',
    type: 'Turnkey Execution',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
    desc: 'A serene reception and lobby focusing on tactile material quality.',
    height: 'aspect-[1/1]'
  },
  {
    id: 5,
    title: 'Private Suite · Faridabad',
    type: 'Design + Execution',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
    desc: 'Complete spatial overhaul prioritizing privacy and curated finishes.',
    height: 'aspect-[4/5]'
  }
]

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-10%" })

  useGSAP(() => {
    const images = gsap.utils.toArray('.portfolio-item')
    gsap.from(images, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      id="portfolio"
      className="bg-warm-white py-16 md:py-24 px-5 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-[60px] max-w-[600px]">
          <motion.span
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans text-[11px] tracking-[3px] text-gold uppercase"
          >
            SELECTED WORK
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="font-display font-light text-charcoal mt-6"
          >
            Selected Design Details
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="font-sans text-[15px] md:text-mid font-light text-charcoal/70 mt-6 leading-[1.8]"
          >
            A curated selection of completed works — shared with client permission. Each project represents a specific brief, material palette, and outcome.
          </motion.p>
        </header>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      className={`portfolio-item relative overflow-hidden group mb-6 break-inside-avoid ${project.height}`}
      data-cursor="view"
      whileHover="hover"
      initial="initial"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        variants={{
          hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Overlay - Desktop (Hidden by default, shown on hover) */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-dark/70 p-8 flex flex-col justify-end hidden md:flex"
      >
        <motion.h4 
          variants={{
            initial: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display italic text-[20px] lg:text-[24px] text-white"
        >
          {project.title}
        </motion.h4>
        <motion.p
          variants={{
            initial: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-sans text-[13px] text-warm-white/80 leading-relaxed mt-2"
        >
          {project.desc}
        </motion.p>
        <motion.span
          variants={{
            initial: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-sans text-[11px] text-gold tracking-[2px] uppercase mt-4"
        >
          {project.type}
        </motion.span>
      </motion.div>

      {/* Mobile Overlay (Always visible or semi-visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-5 flex flex-col justify-end md:hidden">
        <h4 className="font-display italic text-[18px] text-white">
          {project.title}
        </h4>
        <p className="font-sans text-[10px] text-gold tracking-[1px] uppercase mt-2">
          {project.type}
        </p>
      </div>
    </motion.div>
  )
}
