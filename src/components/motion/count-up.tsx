"use client"

import { useRef } from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { MOTION_OK, REVEAL_TRIGGER } from "@/lib/motion"

interface CountUpProps {
  value: number
  suffix?: string
}

export function CountUp({ value, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element) return

      gsap.matchMedia().add(MOTION_OK, () => {
        const counter = { current: 0 }
        element.textContent = `0${suffix}`

        gsap.to(counter, {
          current: value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { ...REVEAL_TRIGGER, trigger: element },
          onUpdate: () => {
            element.textContent = `${Math.round(counter.current)}${suffix}`
          },
        })
      })
    },
    { scope: ref }
  )

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
