"use client"

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp } from '@/lib/animations'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

gsap.registerPlugin(ScrollTrigger)

const ALL_PROJECTS = [
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
  },
  {
    id: 6,
    title: 'Heritage Villa',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600',
    desc: 'Restoring grandeur with a contemporary touch.',
    height: 'aspect-[1/1]'
  },
  {
    id: 7,
    title: 'Cognizant HQ',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
    desc: 'An adaptive office space for the future of work.',
    height: 'aspect-[4/5]'
  },
  {
    id: 8,
    title: 'The Glass House',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
    desc: 'Transparency and geometry in residential architecture.',
    height: 'aspect-[1/1]'
  },
  {
    id: 9,
    title: 'Indigo Bistro',
    type: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1550966842-2849a221082b?w=600',
    desc: 'An intimate dining experience with deep textures.',
    height: 'aspect-[4/5]'
  }
]

export default function ProjectsPage() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const items = gsap.utils.toArray('.project-item')
    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })
  }, { scope: containerRef })

  return (
    <main className="bg-warm-white min-h-screen">
      <Navbar />
      
      <section ref={containerRef} className="pt-[180px] pb-[120px] px-8 md:px-[80px]">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-[100px] text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-[12px] tracking-[5px] text-gold uppercase block mb-6"
            >
              PORTFOLIO
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-[64px] md:text-[96px] font-light text-charcoal leading-none italic"
            >
              Selected Projects
            </motion.h1>
          </header>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {ALL_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      className={`project-item relative overflow-hidden group mb-8 break-inside-avoid ${project.height} cursor-none`}
      data-cursor="view"
      whileHover="hover"
      initial="initial"
    >
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
          className="font-display italic text-[28px] text-white"
        >
          {project.title}
        </motion.h4>
        <p className="font-sans text-[12px] text-warm-white/70 leading-relaxed mt-2">
          {project.desc}
        </p>
        <span className="font-sans text-[11px] text-gold tracking-[2px] uppercase mt-4">
          {project.type}
        </span>
      </motion.div>

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
