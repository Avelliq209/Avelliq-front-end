"use client"

import { useRef } from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { MOTION_OK, REVEAL_TRIGGER } from "@/lib/motion"

export interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function formatCount(value: number, { prefix = "", suffix = "", decimals = 0 }: Omit<CountUpProps, "value">) {
  const number = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return `${prefix}${number}${suffix}`
}

export function CountUp({ value, ...format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element) return

      gsap.matchMedia().add(MOTION_OK, () => {
        const counter = { current: 0 }
        element.textContent = formatCount(0, format)

        gsap.to(counter, {
          current: value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { ...REVEAL_TRIGGER, trigger: element },
          onUpdate: () => {
            element.textContent = formatCount(counter.current, format)
          },
        })
      })
    },
    { scope: ref }
  )

  return <span ref={ref}>{formatCount(value, format)}</span>
}
