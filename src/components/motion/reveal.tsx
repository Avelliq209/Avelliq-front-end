"use client"

import { useRef, type ElementType, type ReactNode } from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { MOTION_OK, REVEAL_TRIGGER } from "@/lib/motion"

interface RevealProps {
  as?: ElementType
  children: ReactNode
  className?: string
  y?: number
  delay?: number
  stagger?: number
  targets?: string
  id?: string
  "aria-label"?: string
}

export function Reveal({ as: Component = "div", children, y = 48, delay = 0, stagger, targets, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element) return

      gsap.matchMedia().add(MOTION_OK, () => {
        const animated = targets ? element.querySelectorAll(targets) : stagger ? element.children : element
        gsap.from(animated, {
          y,
          autoAlpha: 0,
          duration: 1,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: { ...REVEAL_TRIGGER, trigger: element },
        })
      })
    },
    { scope: ref }
  )

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
}
