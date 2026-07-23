"use client"

import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 36 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
