"use client"

import { useRef, type ReactNode } from "react"

import { gsap, SplitText, useGSAP } from "@/lib/gsap"
import { DESKTOP_MOTION, MOTION_OK, onIntroComplete, SPLIT_LINE_CLASS } from "@/lib/motion"

interface HeroMotionProps {
  children: ReactNode
  className?: string
  parallax?: boolean
}

export function HeroMotion({ children, className, parallax = true }: HeroMotionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = ref.current
      if (!root) return

      const media = gsap.matchMedia()
      const heroMedia = root.querySelector("[data-hero-media]")

      media.add(MOTION_OK, () => {
        const title = SplitText.create(root.querySelector("[data-hero-title]"), {
          type: "lines",
          mask: "lines",
          linesClass: SPLIT_LINE_CLASS,
        })

        const entrance = gsap
          .timeline({ paused: true, defaults: { ease: "expo.out", duration: 1.2 } })
          .from(title.lines, { yPercent: 110, stagger: 0.12 })
          .from(root.querySelectorAll("[data-hero-fade]"), { y: 32, autoAlpha: 0, stagger: 0.1 }, 0.25)
          .from(
            heroMedia,
            {
              clipPath: "inset(18% 18% 18% 18% round 24px)",
              duration: 1.6,
              ease: "expo.inOut",
              clearProps: "clipPath",
            },
            0
          )
          .from(root.querySelectorAll("[data-hero-card]"), { y: 90, autoAlpha: 0, stagger: 0.08 }, 0.5)

        const unsubscribe = onIntroComplete(() => entrance.play())

        return () => {
          unsubscribe()
          title.revert()
        }
      })

      if (!parallax) return

      media.add(DESKTOP_MOTION, () => {
        gsap.to(heroMedia, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
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
