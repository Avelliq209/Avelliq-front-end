import { BriefcaseBusiness, CircleDollarSign, House, ShieldCheck } from "lucide-react"

import type { Faq, FaqCategory } from "../types"

const GETTING_STARTED_FAQS: Faq[] = [
  {
    question: "What is Avelliq?",
    answer:
      "Avelliq is a marketplace that helps families and households connect with independent care and household-support professionals. Services include childcare, housekeeping, house sitting, senior care, concierge help, and pet care.",
  },
  {
    question: "How do I find the right professional?",
    answer:
      "Search by service and location, then compare verified profiles, experience, availability, and reviews. You can message professionals through Avelliq before you book so you can find the right fit.",
  },
  {
    question: "Which areas does Avelliq serve?",
    answer:
      "Availability depends on the professionals active near you. Enter your location when you search to see who can help in your area, or contact our team if you cannot find coverage.",
  },
  {
    question: "Can I use Avelliq for more than one type of care?",
    answer:
      "Yes. One account lets you search across every service, so you can find a nanny, a housekeeper, and a pet sitter without signing up more than once.",
  },
]

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting started",
    navLabel: "Getting Started",
    description: "How Avelliq helps you begin your search.",
    icon: House,
    faqs: GETTING_STARTED_FAQS,
  },
  {
    id: "trust-safety",
    title: "Trust & safety",
    navLabel: "Trust & Safety",
    description: "What we do to support informed decisions.",
    icon: ShieldCheck,
    faqs: [
      {
        question: "Are professionals background checked?",
        answer:
          "Professionals complete identity verification and a background screening before their profile can be booked. Completed checks are shown on each profile so you can see what has been verified.",
      },
      {
        question: "Does a background check guarantee someone is the right fit?",
        answer:
          "No. A background check is one helpful signal, not a guarantee. We encourage you to read reviews, check references, and interview professionals before you hire.",
      },
      {
        question: "How are credentials shown?",
        answer:
          "Verified credentials, such as certifications and completed checks, appear as badges on a professional's profile, along with the date they were confirmed.",
      },
      {
        question: "What should I do if I have a safety concern?",
        answer:
          "If anyone is in immediate danger, contact local emergency services first. Then report the concern to our support team through the Contact page so we can review it promptly.",
      },
    ],
  },
  {
    id: "hiring-payments",
    title: "Hiring & payments",
    navLabel: "Hiring & Payment",
    description: "Practical details before care begins.",
    icon: CircleDollarSign,
    faqs: [
      {
        question: "Does it cost anything to browse profiles?",
        answer:
          "No. Creating an account and browsing professional profiles is free. You only pay when you book a service.",
      },
      {
        question: "Who sets the service rate?",
        answer:
          "Each professional sets their own rate, which is shown on their profile before you get in touch, so you can compare options up front.",
      },
      {
        question: "Can I interview someone before hiring them?",
        answer:
          "Yes. You can message professionals and arrange an interview or meet-and-greet before you confirm a booking.",
      },
      {
        question: "Are professionals Avelliq employees?",
        answer:
          "No. Professionals on Avelliq are independent and run their own services. Avelliq provides the platform that helps you find, compare, and connect with them.",
      },
    ],
  },
  {
    id: "for-professionals",
    title: "For professionals",
    navLabel: "For Professionals",
    description: "Joining Avelliq and building trusted relationships.",
    icon: BriefcaseBusiness,
    faqs: [
      {
        question: "Who can join as a professional?",
        answer:
          "Anyone who offers childcare, senior care, housekeeping, house sitting, concierge, or pet care services and meets our verification requirements can apply to join.",
      },
      {
        question: "What do I need to create a profile?",
        answer:
          "You will need a valid ID, details about your experience and services, and your consent to a background screening. Adding a clear photo and references helps families get to know you.",
      },
      {
        question: "Can I choose when and where I work?",
        answer:
          "Yes. You set your own availability, service area, and rates, and you decide which requests to accept.",
      },
      {
        question: "How can I make my profile stand out?",
        answer:
          "Complete every section, add certifications, respond to messages quickly, and ask past clients for reviews. Detailed, up-to-date profiles earn more trust.",
      },
    ],
  },
]

export const FAQS: Faq[] = GETTING_STARTED_FAQS.slice(0, 3)
