"use client"

import { useRef, type ReactNode } from "react"

import { gsap, SplitText, useGSAP } from "@/lib/gsap"
import { MOTION_OK, REVEAL_TRIGGER, SPLIT_LINE_CLASS } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element) return

      gsap.matchMedia().add(MOTION_OK, () => {
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: SPLIT_LINE_CLASS,
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.2,
              delay,
              stagger: 0.12,
              ease: "expo.out",
              scrollTrigger: { ...REVEAL_TRIGGER, trigger: element },
            }),
        })

        return () => split.revert()
      })
    },
    { scope: ref }
  )

  return (
    <span ref={ref} className={cn("block", className)}>
      {children}
    </span>
  )
}
