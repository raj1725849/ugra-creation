import { Variants } from 'framer-motion'
import gsap from 'gsap'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.1 
    } 
  }
}

export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
}

export const heroTimeline = (tl: gsap.core.Timeline) => {
  tl.from('.hero-label', { opacity: 0, y: 20, duration: 0.6 })
    .from('.hero-h1 .char', { opacity: 0, y: 60, stagger: 0.03, duration: 0.8 }, '-=0.2')
    .from('.hero-body', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.hero-cta', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
}
