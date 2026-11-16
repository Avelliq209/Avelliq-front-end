"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { useEffect, useState, type ReactNode } from "react"

import { ScrollTrigger } from "@/lib/gsap"
import { prefersReducedMotion } from "@/lib/motion"

const REFRESH_DEBOUNCE_MS = 150

function ScrollTriggerSync() {
  useLenis(() => ScrollTrigger.update())

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const scheduleRefresh = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => ScrollTrigger.refresh(), REFRESH_DEBOUNCE_MS)
    }

    const observer = new ResizeObserver(scheduleRefresh)
    observer.observe(document.body)
    document.fonts?.ready.then(scheduleRefresh)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  return null
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [isReducedMotion] = useState(prefersReducedMotion)

  if (isReducedMotion) return children

  return (
    <ReactLenis root options={{ autoRaf: true, anchors: true, lerp: 0.1 }}>
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  )
}
