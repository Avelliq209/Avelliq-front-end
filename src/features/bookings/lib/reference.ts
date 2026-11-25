import { toIsoDate } from "@/lib/date"

import type { Booking } from "../types"

export function createBookingReference(date: Date, existing: Booking[]) {
  const base = `AV-${toIsoDate(date).slice(2).replaceAll("-", "")}`
  const sameDayCount = existing.filter(({ id }) => id.startsWith(base)).length
  return sameDayCount === 0 ? base : `${base}-${sameDayCount + 1}`
}
