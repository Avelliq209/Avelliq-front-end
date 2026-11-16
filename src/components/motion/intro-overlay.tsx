"use client"

import { useRef } from "react"

import { siteConfig } from "@/config/site"
import { useScrollLock } from "@/hooks/use-scroll-lock"
import { gsap, SplitText, useGSAP } from "@/lib/gsap"
import { markIntroComplete, MOTION_OK } from "@/lib/motion"

const SESSION_KEY = "avelliq:intro-played"

function hasPlayedThisSession() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "true"
  } catch {
    return false
  }
}

function rememberPlayed() {
  try {
    sessionStorage.setItem(SESSION_KEY, "true")
  } catch {}
}

export function IntroOverlay() {
  const ref = useRef<HTMLDivElement>(null)
  const setScrollLocked = useScrollLock()

  useGSAP(
    () => {
      const overlay = ref.current
      if (!overlay) return

      const finish = () => {
        gsap.set(overlay, { display: "none" })
        setScrollLocked(false)
        markIntroComplete()
      }

      const media = gsap.matchMedia()
      media.add({ motion: MOTION_OK, reduced: "(prefers-reduced-motion: reduce)" }, (context) => {
        if (context.conditions?.reduced || hasPlayedThisSession()) {
          finish()
          return
        }

        setScrollLocked(true)
        const wordmark = SplitText.create(overlay.querySelector("[data-intro-wordmark]"), { type: "chars" })

        gsap
          .timeline({ defaults: { ease: "expo.out" }, onComplete: rememberPlayed })
          .from(overlay.querySelector("[data-intro-mark]"), { scale: 0, rotate: -90, duration: 1 })
          .from(wordmark.chars, { yPercent: 120, stagger: 0.05, duration: 0.9 }, "-=0.6")
          .from(overlay.querySelector("[data-intro-line]"), { scaleX: 0, duration: 0.9 }, "-=0.7")
          .to(overlay, { yPercent: -100, duration: 1.1, ease: "expo.inOut", onStart: markIntroComplete }, "+=0.2")
          .add(finish)

        return () => wordmark.revert()
      })
    },
    { scope: ref, dependencies: [setScrollLocked] }
  )

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-100 flex animate-[intro-fallback_0.4s_ease_3s_forwards] items-center justify-center bg-primary motion-reduce:hidden"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-4 font-heading text-4xl leading-none font-medium text-white md:text-6xl">
          <span
            data-intro-mark
            className="flex size-14 items-center justify-center rounded-[10px] bg-white text-primary md:size-20"
          >
            A
          </span>
          <span data-intro-wordmark className="overflow-hidden py-2">
            {siteConfig.name}
          </span>
        </div>
        <span data-intro-line className="h-px w-40 origin-left bg-white/40" />
      </div>
    </div>
  )
}
