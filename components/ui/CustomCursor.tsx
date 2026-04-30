"use client"

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view'>('default')
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="hover"]')) {
        setCursorType('hover')
      } else if (target.closest('[data-cursor="view"]')) {
        setCursorType('view')
      } else {
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Small Dot */}
      <motion.div
        className="fixed w-2.5 h-2.5 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: cursorType === 'hover' ? 0.5 : 1,
          backgroundColor: cursorType === 'hover' ? '#1A1916' : '#C9A96E',
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed border border-gold rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: cursorType === 'hover' ? 50 : cursorType === 'view' ? 60 : 36,
          height: cursorType === 'hover' ? 50 : cursorType === 'view' ? 60 : 36,
          backgroundColor: cursorType === 'view' ? 'rgba(255, 255, 255, 1)' : 'rgba(201, 169, 110, 0)',
          borderColor: cursorType === 'hover' ? '#1A1916' : cursorType === 'view' ? '#FFFFFF' : '#C9A96E',
        }}
      >
        <AnimatePresence>
          {cursorType === 'view' && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] text-charcoal font-sans font-medium tracking-wider"
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
