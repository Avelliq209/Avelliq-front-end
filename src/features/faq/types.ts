import type { LucideIcon } from "lucide-react"

export interface Faq {
  question: string
  answer: string
}

export interface FaqCategory {
  id: string
  title: string
  navLabel: string
  description: string
  icon: LucideIcon
  faqs: Faq[]
}
