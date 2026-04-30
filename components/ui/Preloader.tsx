"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[1000] bg-dark flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2
                }}
                className="font-sans text-[13px] md:text-[16px] tracking-[6px] md:tracking-[10px] text-warm-white uppercase"
              >
                UGRA CREATION
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 1.5, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4
              }}
              className="h-[1px] bg-gold/30 mt-4"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
