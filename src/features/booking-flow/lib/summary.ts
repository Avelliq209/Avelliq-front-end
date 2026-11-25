import { describeHomeLocation } from "@/features/bookings/lib/location"
import { getBookingPrice } from "@/features/bookings/lib/pricing"
import type { Booking, BookingPrice } from "@/features/bookings/types"
import type { Professional } from "@/features/professionals/types"
import { getHoursBetween, parseLocalDateTime } from "@/lib/date"
import type { BookingFormValues } from "@/schemas/validation-schemas"

export type BookingSummaryData = Pick<Booking, "professional" | "location" | "start" | "end"> & {
  price: BookingPrice
}

export function summarizeBooking(
  values: BookingFormValues,
  professional: Professional
): BookingSummaryData {
  const start = parseLocalDateTime(values.date, values.startTime)
  const end = parseLocalDateTime(values.date, values.endTime)

  return {
    professional,
    location: describeHomeLocation(values.city.trim()),
    start,
    end,
    price: getBookingPrice(getHoursBetween(start, end), professional.hourlyRate),
  }
}

type CareAddress = Pick<BookingFormValues, "address" | "city" | "zipCode">

export const formatCareAddress = ({ address, city, zipCode }: CareAddress) =>
  `${address} · ${city} ${zipCode}`
