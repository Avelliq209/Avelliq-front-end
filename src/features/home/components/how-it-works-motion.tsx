"use client"

import { useRef, type ReactNode } from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { MOTION_OK, REVEAL_TRIGGER } from "@/lib/motion"

interface HowItWorksMotionProps {
  children: ReactNode
  className?: string
}

export function HowItWorksMotion({ children, className }: HowItWorksMotionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = ref.current
      const section = root?.closest("section")
      if (!root || !section) return

      const steps = gsap.utils.toArray<HTMLElement>("[data-step]", root)

      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          section,
          { clipPath: "inset(0% 4% 0% 4% round 40px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "top 20%", scrub: true },
          }
        )

        gsap.from(steps, {
          y: 40,
          autoAlpha: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { ...REVEAL_TRIGGER, trigger: steps[0] },
        })
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
