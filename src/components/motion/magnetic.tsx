"use client"

import { useRef, type ReactNode } from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { FINE_POINTER_MOTION } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface MagneticProps {
  children: ReactNode
  strength?: number
  className?: string
}

export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element) return

      gsap.matchMedia().add(FINE_POINTER_MOTION, () => {
        const moveX = gsap.quickTo(element, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" })
        const moveY = gsap.quickTo(element, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" })

        const handleMove = (event: PointerEvent) => {
          const bounds = element.getBoundingClientRect()
          moveX((event.clientX - (bounds.left + bounds.width / 2)) * strength)
          moveY((event.clientY - (bounds.top + bounds.height / 2)) * strength)
        }
        const handleLeave = () => {
          moveX(0)
          moveY(0)
        }

        element.addEventListener("pointermove", handleMove)
        element.addEventListener("pointerleave", handleLeave)

        return () => {
          element.removeEventListener("pointermove", handleMove)
          element.removeEventListener("pointerleave", handleLeave)
        }
      })
    },
    { scope: ref }
  )

  return (
    <span ref={ref} className={cn("inline-flex", className)}>
      {children}
    </span>
  )
}
