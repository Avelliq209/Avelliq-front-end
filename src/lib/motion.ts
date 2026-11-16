export const MOTION_OK = "(prefers-reduced-motion: no-preference)"
export const DESKTOP_MOTION = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
export const WIDE_MOTION = "(min-width: 1280px) and (prefers-reduced-motion: no-preference)"
export const FINE_POINTER_MOTION = "(pointer: fine) and (prefers-reduced-motion: no-preference)"

export const REVEAL_START = "top 85%"
export const REVEAL_TRIGGER = {
  start: REVEAL_START,
  once: true,
  toggleActions: "play complete none none",
} as const
export const SPLIT_LINE_CLASS = "split-line"

const INTRO_COMPLETE_EVENT = "avelliq:intro-complete"
let isIntroComplete = false

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function markIntroComplete() {
  if (isIntroComplete) return
  isIntroComplete = true
  window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT))
}

export function onIntroComplete(callback: () => void) {
  if (isIntroComplete) {
    callback()
    return () => {}
  }
  window.addEventListener(INTRO_COMPLETE_EVENT, callback, { once: true })
  return () => window.removeEventListener(INTRO_COMPLETE_EVENT, callback)
}

function getHeaderHeight() {
  return document.querySelector("header")?.getBoundingClientRect().height ?? 0
}

export function getPinStart(element: HTMLElement) {
  const headerHeight = getHeaderHeight()
  const fitsBelowHeader = element.offsetHeight <= window.innerHeight - headerHeight
  return fitsBelowHeader ? `top top+=${headerHeight}` : "bottom bottom"
}
