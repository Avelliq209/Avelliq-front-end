import type { StaticImageData } from "next/image"

import businessIcon from "@/assets/icons/business.svg"
import calendarCheckIcon from "@/assets/icons/calendar-check.svg"
import experienceIcon from "@/assets/icons/experience.svg"
import locationIcon from "@/assets/icons/location.svg"
import rateIcon from "@/assets/icons/rate.svg"
import safetyAccountabilityIcon from "@/assets/icons/safety-accountability.svg"
import safetyCredentialsIcon from "@/assets/icons/safety-credentials.svg"
import safetyScreeningIcon from "@/assets/icons/safety-screening.svg"
import trustSecureIcon from "@/assets/icons/trust-secure.svg"
import usersIcon from "@/assets/icons/users.svg"
import verifiedIcon from "@/assets/icons/verified.svg"
import childcareCategory from "@/assets/images/home/hero/childcare.jpg"
import housekeepingCategory from "@/assets/images/home/hero/housekeeping.jpg"
import lifestyleAssistantCategory from "@/assets/images/home/hero/lifestyle-assistant.jpg"
import petCareCategory from "@/assets/images/home/hero/pet-care.jpg"
import seniorCareCategory from "@/assets/images/home/hero/senior-care.jpg"
import childcareSlide from "@/assets/images/home/hero/slides/childcare.jpg"
import cleanerSlide from "@/assets/images/home/hero/slides/cleaner.jpg"
import housekeeperSlide from "@/assets/images/home/hero/slides/housekeeper.jpg"
import petWalkSlide from "@/assets/images/home/hero/slides/pet-walk.jpg"
import seniorWalkSlide from "@/assets/images/home/hero/slides/senior-walk.jpg"
import matchEmilyCarter from "@/assets/images/home/match-emily-carter.jpg"
import chooseOpportunities from "@/assets/images/home/professionals/choose-opportunities.jpg"
import dedicatedSupport from "@/assets/images/home/professionals/dedicated-support.jpg"
import showcaseExperience from "@/assets/images/home/professionals/showcase-experience.jpg"
import { ROUTES } from "@/config/site"

export interface Highlight {
  icon: StaticImageData
  title: string
  description: string
}

export interface Step {
  title: string
  description: string
}

export interface ImageItem {
  image: StaticImageData
  alt: string
}

export interface HeroCategory extends ImageItem {
  title: string
  href: string
}

export interface ProfessionalBenefit extends ImageItem, Step {
  imagePosition: "top" | "bottom"
}

export const HERO_SLIDES: ImageItem[] = [
  { image: housekeeperSlide, alt: "A housekeeper preparing a bedroom" },
  { image: cleanerSlide, alt: "A smiling cleaner holding a basket of supplies" },
  { image: petWalkSlide, alt: "A pet sitter walking a dog in the park" },
  { image: seniorWalkSlide, alt: "A caregiver helping an elderly woman walk" },
  { image: childcareSlide, alt: "A caregiver reading with a young child" },
]

export const HERO_CATEGORIES: HeroCategory[] = [
  {
    title: "Child care",
    href: `${ROUTES.services}#childcare`,
    image: childcareCategory,
    alt: "A caregiver holding a toddler",
  },
  {
    title: "Senior Care",
    href: `${ROUTES.services}#senior-care`,
    image: seniorCareCategory,
    alt: "A caregiver with an elderly woman",
  },
  {
    title: "Housekeeping",
    href: `${ROUTES.services}#housekeeping`,
    image: housekeepingCategory,
    alt: "A housekeeper cleaning a window",
  },
  {
    title: "Lifestyle assistant",
    href: `${ROUTES.services}#concierge`,
    image: lifestyleAssistantCategory,
    alt: "A lifestyle assistant with a cup of coffee",
  },
  {
    title: "Pet Care",
    href: `${ROUTES.services}#pet-care`,
    image: petCareCategory,
    alt: "A pet sitter feeding a dog",
  },
]

export const TRUST_HIGHLIGHTS: Highlight[] = [
  { icon: trustSecureIcon, title: "Background checked", description: "Safety comes first" },
  { icon: verifiedIcon, title: "Profiles verified", description: "Know who you're hiring" },
  { icon: usersIcon, title: "Real human support", description: "Here when you need us" },
]

export const PROFESSIONAL_BENEFITS: ProfessionalBenefit[] = [
  {
    title: "Choose your opportunities",
    description:
      "Pick your own schedule, preferred services, and ideal clients so you can work on your terms and focus on the care that fits your expertise.",
    image: chooseOpportunities,
    alt: "A professional tidying a bedroom",
    imagePosition: "top",
  },
  {
    title: "Showcase your experience",
    description:
      "Build a verified profile with ratings, credentials, and service highlights so families can trust your background and confidence from the start.",
    image: showcaseExperience,
    alt: "A smiling housekeeper holding cleaning supplies",
    imagePosition: "bottom",
  },
  {
    title: "Get dedicated support",
    description:
      "Count on 24/7 platform support, practical resources, and ongoing training so you can stay confident and supported every step of the way.",
    image: dedicatedSupport,
    alt: "A caregiver laughing with a family",
    imagePosition: "top",
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
    icon: safetyScreeningIcon,
    title: "Thoughtful screening",
    description:
      "Every professional undergoes multi-step identity verification, role-appropriate background checks, and reference validation before joining our platform. We review credentials carefully so families can start with confidence.",
  },
  {
    icon: safetyCredentialsIcon,
    title: "Clear credentials",
    description:
      "Certifications, skills, work history, and relevant qualifications are verified and displayed transparently so you can make informed decisions. Profiles are designed to show the full story behind each professional.",
  },
  {
    icon: safetyAccountabilityIcon,
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
    icon: businessIcon,
    title: "One business profile",
    description: "Present your company, services, and service area in a single verified place.",
  },
  {
    icon: usersIcon,
    title: "Bring your whole team",
    description: "Onboard your caregivers under your agency so families can book with confidence.",
  },
  {
    icon: verifiedIcon,
    title: "Verified agency badge",
    description: "Business verification and staff screening show your professionalism at a glance.",
  },
  {
    icon: calendarCheckIcon,
    title: "Run it all in one place",
    description: "Track requests, coordinate schedules, and manage staff from one simple dashboard.",
  },
]

export const MATCH_PROFILE = {
  name: "Emily Carter",
  role: "Professional Nanny",
  matchScore: 94,
  rating: 4.9,
  reviewCount: 48,
  image: matchEmilyCarter,
  credentials: ["Identity Verified", "Background Check Completed", "CPR Certified"],
  stats: [
    { icon: experienceIcon, label: "8 years experience" },
    { icon: rateIcon, label: "$24hr" },
    { icon: locationIcon, label: "2.4 miles away" },
  ],
}

export const MATCH_FACTORS = [
  "Find professionals in your area.",
  "See who can work when you need them.",
  "Discover professionals with relevant experience.",
  "Find specific skills that match your needs.",
  "Compare pricing before making a decision.",
  "Understand which credentials and checks have been completed.",
]
