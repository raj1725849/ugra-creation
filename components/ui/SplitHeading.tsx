"use client"

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitHeadingProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  splitBy?: 'chars' | 'words' | 'lines'
  className?: string
  delay?: number
}

export default function SplitHeading({
  text,
  tag = 'h2',
  splitBy = 'chars',
  className = '',
  delay = 0
}: SplitHeadingProps) {
  const containerRef = useRef<HTMLElement>(null)
  const Tag = tag as any

  useGSAP(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll('.split-item')
    
    gsap.from(elements, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: splitBy === 'chars' ? 0.03 : 0.05,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    })
  }, { scope: containerRef })

  const renderContent = () => {
    if (splitBy === 'words') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="split-item inline-block">{word}</span>
        </span>
      ))
    }
    
    if (splitBy === 'chars') {
      return text.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="split-item inline-block">{char === ' ' ? '\u00A0' : char}</span>
        </span>
      ))
    }

    return <span className="split-item inline-block">{text}</span>
  }

  return (
    <Tag ref={containerRef} className={className}>
      {renderContent()}
    </Tag>
  )
}
