import {
  Building2,
  Calendar,
  CalendarCheck,
  Heart,
  HeartHandshake,
  LifeBuoy,
  ShieldCheck,
  Users,
  Verified,
  type LucideIcon,
} from "lucide-react"

export interface Highlight {
  icon: LucideIcon
  title: string
  description: string
}

export interface Step {
  title: string
  description: string
}

export const CARE_NEEDS = [
  "Childcare",
  "Senior Care",
  "Housekeeping",
  "Concierge",
  "House Sitters",
  "Pet Care",
] as const

export const TRUST_HIGHLIGHTS: Highlight[] = [
  { icon: ShieldCheck, title: "Background checked", description: "Safety comes first" },
  { icon: Verified, title: "Profiles verified", description: "Know who you're hiring" },
  { icon: Users, title: "Real human support", description: "Here when you need us" },
]

export const PROFESSIONAL_BENEFITS: Highlight[] = [
  {
    icon: Calendar,
    title: "Choose your opportunities",
    description:
      "Pick your own schedule, preferred services, and ideal clients so you can work on your terms and focus on the care that fits your expertise.",
  },
  {
    icon: Verified,
    title: "Showcase your experience",
    description:
      "Build a verified profile with ratings, credentials, and service highlights so families can trust your background and confidence from the start.",
  },
  {
    icon: Heart,
    title: "Build trusted relationships",
    description:
      "Connect with long-term clients through thoughtful matching and repeat bookings, helping you build consistent care partnerships that last.",
  },
  {
    icon: LifeBuoy,
    title: "Get dedicated support",
    description:
      "Count on 24/7 platform support, practical resources, and ongoing training so you can stay confident and supported every step of the way.",
  },
]

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: "Tell us what you need",
    description:
      "Choose your service, location, schedule, and the details that matter to your household.",
  },
  {
    title: "Meet trusted professionals",
    description: "Review detailed profiles, experience, availability, and verification information.",
  },
  {
    title: "Choose with confidence",
    description: "Connect directly and select the professional who feels right for your family.",
  },
]

export const SAFETY_PILLARS: Highlight[] = [
  {
    icon: ShieldCheck,
    title: "Thoughtful screening",
    description:
      "Every professional undergoes multi-step identity verification, role-appropriate background checks, and reference validation before joining our platform. We review credentials carefully so families can start with confidence.",
  },
  {
    icon: Verified,
    title: "Clear credentials",
    description:
      "Certifications, skills, work history, and relevant qualifications are verified and displayed transparently so you can make informed decisions. Profiles are designed to show the full story behind each professional.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing accountability",
    description:
      "Continuous review ratings, responsive support, and community guidelines help maintain high standards and a respectful environment. We keep trust visible throughout every booking.",
  },
]

export const AGENCY_STEPS = [
  "Register as a company",
  "List your caregivers",
  "Respond to family requests",
  "Grow with dedicated support",
]

export const AGENCY_FEATURES: Highlight[] = [
  {
    icon: Building2,
    title: "One business profile",
    description: "Present your company, services, and service area in a single verified place.",
  },
  {
    icon: Users,
    title: "Bring your whole team",
    description: "Onboard your caregivers under your agency so families can book with confidence.",
  },
  {
    icon: Verified,
    title: "Verified agency badge",
    description: "Business verification and staff screening show your professionalism at a glance.",
  },
  {
    icon: CalendarCheck,
    title: "Run it all in one place",
    description: "Track requests, coordinate schedules, and manage staff from one simple dashboard.",
  },
]

export const MATCH_FACTORS = [
  "Find professionals in your area.",
  "See who can work when you need them.",
  "Discover professionals with relevant experience.",
  "Find specific skills that match your needs.",
  "Compare pricing before making a decision.",
  "Understand which credentials and checks have been completed.",
]
