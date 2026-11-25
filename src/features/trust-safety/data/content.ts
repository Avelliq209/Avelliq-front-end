import {
  Bookmark,
  Calendar,
  CreditCard,
  Lock,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  SquareCheckBig,
  TriangleAlert,
  UserCheck,
} from "lucide-react"

import customerSupportIcon from "@/assets/icons/customer-support.svg"

import type { Guideline, ScreeningStep, SupportChannel, TrustFeature, TrustStat } from "../types"

export const HERO_COMMITMENTS = [
  "Every connection is anchored on verification, transparency, and personal accountability.",
  "Continuous review processes that keep standard lines active and consistent.",
]

export const TRUST_PILLARS: TrustFeature[] = [
  {
    icon: Shield,
    title: "Verify",
    description:
      "Before any care professional joins our ecosystem, they must successfully pass a rigorous multi-tier identity verification, background screening, and reference review process. We set the standard high.",
  },
  {
    icon: Lock,
    title: "Protect",
    description:
      "Our active technology suite operates in real-time to secure digital check-ins, keep communication end-to-end within the platform, and protect financial transactions through encrypted platforms.",
  },
  {
    icon: UserCheck,
    title: "Support",
    description:
      "Safety does not sleep. Our dedicated Trust & Safety rapid response unit is active around the clock to assist with questions, resolve disputes, and maintain platform wide accountability.",
  },
]

export const SCREENING_STEPS: ScreeningStep[] = [
  {
    title: "Identity Verification",
    description:
      "Government-issued photo IDs are cross-analyzed against global databases to certify exact legal identity match.",
  },
  {
    title: "Background Checks",
    description:
      "State, federal, and local registry databases are checked for civil, criminal, and protective agency records.",
  },
  {
    title: "Credential Check",
    description:
      "Direct verification of licenses, professional certifications, first-aid designations, and degrees with issuing bodies.",
  },
  {
    title: "Reference Reviews",
    description:
      "Direct contact verification with previous professional references to evaluate soft skills, temperament, and punctuality.",
  },
  {
    title: "Ongoing Monitoring",
    description:
      "Active automated checks verify license renewals and check for any periodic changes in criminal database filings.",
  },
]

export const FAMILY_SAFETY_FEATURES: TrustFeature[] = [
  {
    icon: Search,
    title: "Verified Profiles",
    description:
      "Families get transparent access to real background-checked statuses, confirmed professional designations, completed credentials, and verified peer-review ratings left by other platform participants.",
  },
  {
    icon: Mail,
    title: "Secure Messaging",
    description:
      "Coordinate booking details, outline domestic tasks, and address scheduling conflicts safely inside our messaging interface without compromising personal emails or phone contact info.",
  },
  {
    icon: CreditCard,
    title: "Protected Payments",
    description:
      "Never worry about cash, physical paper checks, or unknown overhead rates. Transactions are fully processed via encrypted channels, keeping funds secure in platform escrow until work is completed.",
  },
  {
    icon: MapPin,
    title: "Real-Time Updates",
    description:
      "Monitor sessions via live location check-ins, receive digital photo uploads from active caregiving sessions, and review comprehensive end-of-session logs directly on the Avelliq dashboard.",
  },
]

export const PROFESSIONAL_SAFETY_FEATURES: TrustFeature[] = [
  {
    icon: SquareCheckBig,
    title: "Client Verification",
    description:
      "Trust is a two-way connection. All families requesting care are required to complete multi-step identity verification and payment validations before they can propose bookings or interview professionals.",
  },
  {
    icon: Calendar,
    title: "Secure Booking",
    description:
      "Get peace of mind with guaranteed payments, clear hourly terms, transparent cancellation fee schedules, and direct platform support to prevent late pay rates or disputes.",
  },
  {
    icon: Bookmark,
    title: "Insurance Coverage",
    description:
      "Every booking processed directly on the Avelliq platform includes active general liability insurance and property protection policies. We have your back on every shift.",
  },
  {
    icon: Phone,
    title: "24/7 Support Line",
    description:
      "Our safety staff is active around the clock. Whether you run into dynamic check-in issues or urgent domestic safety concerns, a dedicated support team member is only a quick click away.",
  },
]

export const TRUST_STATS: TrustStat[] = [
  {
    figure: { value: 50000, suffix: "+" },
    label: "Background Checks Completed",
    description:
      "Identity verification, background checks, and reference validations completed before caregivers can access Avelliq.",
  },
  {
    figure: { value: 4.9, suffix: "/5", decimals: 1 },
    label: "Average Trust Rating",
    description:
      "Consistently high safety and satisfaction marks left by verified users after completed caregiving sessions.",
  },
  {
    figure: { value: 99.8, suffix: "%", decimals: 1 },
    label: "Safe Booking Rate",
    description:
      "Reflecting our strict system protocols, active monitoring, and ongoing caregiver support check-ins.",
  },
  {
    figure: { value: 2, prefix: "<", suffix: " Hours" },
    label: "Average Support Response",
    description:
      "Active around-the-clock safety agents are dispatched to help families and care professionals with zero delay.",
  },
  {
    figure: { value: 100, suffix: "%" },
    label: "Verified Caregivers",
    description:
      "No unvetted profiles are allowed on our platform. Every care professional must maintain active clear status.",
  },
  {
    figure: "Zero",
    label: "Safety Deviation Tolerance",
    description:
      "Immediate platform deactivation policies apply to any participant failing to uphold safety or verification directives.",
  },
]

export const COMMUNITY_GUIDELINES: Guideline[] = [
  {
    title: "Respect & Dignity",
    description:
      "Everyone is treated with empathy. Abuse, aggressive behaviors, verbal misconduct, or threats will result in immediate removal.",
  },
  {
    title: "Anti-Discrimination",
    description:
      "Zero tolerance for any bias or discrimination based on race, origin, religion, physical ability, gender identity, or preference.",
  },
  {
    title: "Privacy & Boundaries",
    description:
      "We respect domestic privacy. Personal details, family routines, or photos from care visits must never be shared or duplicated outside Avelliq.",
  },
  {
    title: "Transparency",
    description:
      "Maintain honest communications regarding tasks, physical needs, medical qualifications, and direct booking details. No side-payments.",
  },
]

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    icon: TriangleAlert,
    title: "Report a Concern",
    description:
      "Have you run into safety infractions, suspicious user activities, profile mismatches, or unexpected payment demands? File an active report instantly.",
    ctaLabel: "File Safety Report",
    emphasis: "secondary",
  },
  {
    icon: customerSupportIcon,
    title: "Contact Our Trust Team",
    description:
      "Need clarification regarding credential validation steps, security escrow payment functions, or active liability coverage policies? Speak with us.",
    ctaLabel: "Speak to Trust Agent",
    emphasis: "primary",
  },
]
