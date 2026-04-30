"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp } from '@/lib/animations'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

export default function RevealText({ text, className = '', delay = 0 }: RevealTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.p
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {text}
    </motion.p>
  )
}
