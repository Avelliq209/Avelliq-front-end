import type { LucideIcon } from "lucide-react"
import type { StaticImageData } from "next/image"

import type { Professional } from "@/features/professionals/types"

export interface DashboardUser {
  firstName: string
  fullName: string
  location: string
  avatar: StaticImageData
  unreadNotifications: number
}

export interface DashboardNavItem {
  title: string
  icon: LucideIcon
  href?: string
}

export interface DashboardStat {
  icon: StaticImageData
  label: string
  value: number
  hint: string
}

export type BookingStatus = "confirmed" | "pending"

export type BookingProfessional = Pick<Professional, "name" | "shortName" | "photo">

export interface Booking {
  id: string
  professional: BookingProfessional
  service: string
  serviceDetail: string
  location: string
  status: BookingStatus
  start: Date
  end: Date
}
