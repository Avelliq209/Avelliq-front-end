"use client"

import { useMemo } from "react"

import { useNow } from "@/hooks/use-now"

import { createMockBookings } from "../data/mock-bookings"
import { useCreatedBookings } from "../lib/booking-store"

export function useBookings() {
  const now = useNow()
  const createdBookings = useCreatedBookings()

  return useMemo(() => {
    if (!now) return null

    const bookings = [...createMockBookings(now), ...createdBookings].sort(
      (first, second) => first.start.getTime() - second.start.getTime()
    )
    const upcoming = bookings.filter(({ end }) => end > now)
    return { now, bookings, upcoming, next: upcoming.at(0) }
  }, [now, createdBookings])
}
