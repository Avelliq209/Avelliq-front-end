import type { LucideIcon } from "lucide-react"

export interface ContactHighlight {
  icon: LucideIcon
  title: string
  value: string
  href?: string
}

export interface ContactMethod {
  icon: LucideIcon
  eyebrow: string
  value: string
  description: string
  availability: string
  action: { label: string; href?: string }
}
