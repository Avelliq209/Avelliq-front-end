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
      "Start by choosing the service you need and entering your location. You can then compare profiles, experience, availability, credentials, and verification information before deciding who may be a good fit.",
  },
  {
    question: "Which areas does Avelliq serve?",
    answer:
      "Avelliq is being built for families and professionals across the United States. Availability may vary by service and location as the marketplace grows.",
  },
  {
    question: "Can I use Avelliq for more than one type of care?",
    answer:
      "Yes. Avelliq brings several kinds of care, household and personal support into one place, so you can look for different professionals as your household's needs change.",
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
          "Professionals complete identity verification and role-appropriate background screening. The checks shown on a profile help you understand what has been completed before you connect.",
      },
      {
        question: "Does a background check guarantee someone is the right fit?",
        answer:
          "No screening can replace your own judgment. We encourage families to review profiles carefully, speak with professionals, check relevant references and credentials, and discuss expectations before arranging care.",
      },
      {
        question: "How are credentials shown?",
        answer:
          "Relevant experience, skills, and submitted certifications are presented clearly on professional profiles, together with available verification information.",
      },
      {
        question: "What should I do if I have a safety concern?",
        answer:
          "Stop the interaction if you feel unsafe and contact local emergency services when there is immediate danger. You can also contact Avelliq support so the concern can be reviewed.",
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
          "Browsing available professional profiles is free. Any applicable connection, booking, or service costs will be shown clearly before you make a commitment.",
      },
      {
        question: "Who sets the service rate?",
        answer:
          "Independent professionals present their rates and service details. Families can review these details and agree on the scope, timing, and total cost before work begins.",
      },
      {
        question: "Can I interview someone before hiring them?",
        answer:
          "Yes. A conversation is an important part of choosing care or support. Use it to discuss experience, routines, responsibilities, timing, accessibility needs, and anything else that matters to your household.",
      },
      {
        question: "Are professionals Avelliq employees?",
        answer:
          "No. Professionals use Avelliq as independent service providers. Individual clients, families, and professionals are responsible for agreeing on the working arrangement that fits their needs and follows applicable laws.",
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
          "Experienced childcare, housekeeping, house-sitting, senior-care, concierge, and pet-care professionals can apply. Requirements may vary by role and location.",
      },
      {
        question: "What do I need to create a profile?",
        answer:
          "You'll provide information about your identity, experience, services, availability, and location. Some roles may also require relevant licenses, certifications, or additional screening.",
      },
      {
        question: "Can I choose when and where I work?",
        answer:
          "Yes. As an independent professional, you can present your availability, preferred service area, and the kinds of opportunities you want to consider.",
      },
      {
        question: "How can I make my profile stand out?",
        answer:
          "Keep your experience current, describe your services clearly, add relevant credentials, respond promptly, and set expectations honestly. A complete, thoughtful profile helps clients make confident choices.",
      },
    ],
  },
]

export const FAQS: Faq[] = GETTING_STARTED_FAQS.slice(0, 3)
