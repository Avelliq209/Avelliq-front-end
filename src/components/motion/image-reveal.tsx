"use client"

import { useRef, type ReactNode } from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { MOTION_OK, REVEAL_TRIGGER } from "@/lib/motion"

interface ImageRevealProps {
  children: ReactNode
  className?: string
}

export function ImageReveal({ children, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element) return

      gsap.matchMedia().add(MOTION_OK, () => {
        const timeline = gsap.timeline({
          scrollTrigger: { ...REVEAL_TRIGGER, trigger: element },
        })

        timeline
          .from(element, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.3,
            ease: "expo.out",
            clearProps: "clipPath",
          })
          .from(element.querySelectorAll("img"), { scale: 1.3, duration: 1.8, ease: "expo.out" }, 0)
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
