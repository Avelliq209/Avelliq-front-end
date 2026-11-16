"use client"

import { useRef, type ReactNode } from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { getPinStart, MOTION_OK, REVEAL_TRIGGER, WIDE_MOTION } from "@/lib/motion"

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
      const mediaImage = root.querySelector("[data-step-media] img")

      gsap.matchMedia().add({ motion: MOTION_OK, pin: WIDE_MOTION }, (context) => {
        if (!context.conditions?.motion) return

        gsap.fromTo(
          section,
          { clipPath: "inset(0% 4% 0% 4% round 40px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "top 20%", scrub: true },
          }
        )

        if (!context.conditions.pin) {
          gsap.from(steps, {
            y: 40,
            autoAlpha: 0,
            stagger: 0.15,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { ...REVEAL_TRIGGER, trigger: steps[0] },
          })
          return
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: () => getPinStart(section),
            end: "+=140%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        timeline.fromTo(mediaImage, { scale: 1.2 }, { scale: 1, ease: "none", duration: steps.length }, 0)
        steps.forEach((step, index) => {
          timeline.fromTo(
            step,
            { opacity: 0.25, x: 24 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            index
          )
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
