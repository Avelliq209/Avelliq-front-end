import { Clock, Mail, MessageCircleQuestionMark, MessageSquare, Phone } from "lucide-react"

import type { SelectOption } from "@/components/form/select-input"
import { siteConfig } from "@/config/site"

import type { ContactHighlight, ContactMethod } from "../types"

export const FAQ_SECTION_ID = "faqs"

export const CONTACT_HIGHLIGHTS: ContactHighlight[] = [
  {
    icon: Mail,
    title: "Email us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  { icon: Clock, title: "Support hours", value: siteConfig.contact.hours },
  {
    icon: MessageCircleQuestionMark,
    title: "Quick answers",
    value: "Browse the FAQs",
    href: `#${FAQ_SECTION_ID}`,
  },
]

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    eyebrow: "Email Us",
    value: siteConfig.contact.email,
    description: "For general inquiries, bookings support, and account assistance.",
    availability: "Response within 24 hours",
    action: { label: "Send an Email", href: `mailto:${siteConfig.contact.email}` },
  },
  {
    icon: Phone,
    eyebrow: "Call Us",
    value: siteConfig.contact.phone,
    description: "Speak directly with a care coordinator for urgent needs and onboarding help.",
    availability: siteConfig.contact.hours,
    action: { label: "Call Customer Care", href: siteConfig.contact.phoneHref },
  },
  {
    icon: MessageSquare,
    eyebrow: "Live Chat",
    value: "Available 24/7",
    description: "Get instant answers from our support agents right from your web dashboard.",
    availability: "Always online for clients and professionals",
    action: { label: "Open Live Chat" },
  },
]

export const CONTACT_TOPICS = [
  { value: "finding-care", label: "Finding care" },
  { value: "joining-as-professional", label: "Joining as a professional" },
  { value: "bookings-payments", label: "Bookings and payments" },
  { value: "account-help", label: "Account help" },
  { value: "trust-safety", label: "Trust and safety" },
  { value: "other", label: "Something else" },
] as const satisfies readonly SelectOption[]
