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
    title: 'The Khanna Residence',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900',
    desc: 'A luxury residence focusing on textures and natural light.',
    height: 'aspect-[4/5]'
  },
  {
    id: 2,
    title: 'Studio Grey, Sector 18',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600',
    desc: 'Minimalist workspace designed for maximum creativity.',
    height: 'aspect-[1/1]'
  },
  {
    id: 3,
    title: 'The Arora Penthouse',
    type: 'Turnkey',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
    desc: 'High-end penthouse with bespoke furniture and finishes.',
    height: 'aspect-[4/5]'
  },
  {
    id: 4,
    title: 'Oasis Retreat',
    type: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
    desc: 'A serene boutique hotel lobby in the heart of Noida.',
    height: 'aspect-[1/1]'
  },
  {
    id: 5,
    title: 'Urban Loft',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
    desc: 'Modern industrial loft with open spaces and raw materials.',
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
      className="bg-warm-white py-[120px] px-8 md:px-[80px]"
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-[60px]">
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
            className="font-display text-[48px] md:text-[64px] font-light text-charcoal mt-6"
          >
            Spaces We've Built
          </motion.h2>
        </header>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.6 }}
          className="mt-[80px] text-center"
        >
          <Link 
            href="/projects" 
            className="group relative inline-block font-sans text-[13px] tracking-[2px] text-charcoal uppercase"
            data-cursor="hover"
          >
            View More Projects →
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-charcoal transition-all duration-500 group-hover:w-full" />
          </Link>
        </motion.div>
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
        className="absolute inset-0 bg-dark/60 p-8 flex flex-col justify-end hidden md:flex"
      >
        <motion.h4 
          variants={{
            initial: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display italic text-[24px] lg:text-[28px] text-white"
        >
          {project.title}
        </motion.h4>
        <motion.p
          variants={{
            initial: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-sans text-[12px] text-warm-white/70 leading-relaxed mt-2"
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
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent p-6 flex flex-col justify-end md:hidden">
        <h4 className="font-display italic text-[20px] text-white">
          {project.title}
        </h4>
        <p className="font-sans text-[10px] text-gold tracking-[1px] uppercase mt-1">
          {project.type}
        </p>
      </div>
    </motion.div>
  )
}
