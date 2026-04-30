"use client"

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const offsetX = (clientX - centerX) * 0.35 // Shift factor
    const offsetY = (clientY - centerY) * 0.35
    
    x.set(offsetX)
    y.set(offsetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={className}
        onClick={onClick}
        data-cursor="hover"
      >
        {children}
      </motion.div>
    </div>
  )
}
