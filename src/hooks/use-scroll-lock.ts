"use client"

import { useLenis } from "lenis/react"
import { useCallback, useEffect, useRef } from "react"

export function useScrollLock() {
  const lenis = useLenis()
  const lenisRef = useRef(lenis)
  const isLockedRef = useRef(false)

  useEffect(() => {
    lenisRef.current = lenis
    if (isLockedRef.current) lenis?.stop()
  }, [lenis])

  return useCallback((locked: boolean) => {
    isLockedRef.current = locked
    if (locked) lenisRef.current?.stop()
    else lenisRef.current?.start()
  }, [])
}
