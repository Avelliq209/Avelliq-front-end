import { Baby, BriefcaseBusiness, HeartHandshake, Home, PawPrint, Sparkles } from "lucide-react"

import type { ServiceCategory } from "../types"

export const SERVICES: ServiceCategory[] = [
  {
    slug: "childcare",
    title: "Childcare",
    description: "Reliable support for every stage of your family's journey.",
    offerings: [
      "Nannies",
      "Babysitters",
      "Live-in caregivers",
      "Travel & event nannies",
      "Doulas",
      "Special needs childcare",
    ],
    ctaLabel: "Explore Childcare",
    icon: Baby,
    iconClassName: "bg-[#FFF4D6]",
  },
  {
    slug: "housekeeping",
    title: "Housekeeping",
    description: "A beautifully cared-for home, on your terms.",
    offerings: ["General housekeeping", "Deep cleaning", "Move-in & move-out", "Laundry & ironing"],
    ctaLabel: "Explore Housekeeping",
    icon: Sparkles,
    iconClassName: "bg-[#F5EFE6]",
  },
  {
    slug: "house-sitters",
    title: "House Sitters",
    description: "Trusted oversight while you're away from home.",
    offerings: ["House supervision", "Property check-ins", "Home routines"],
    ctaLabel: "Explore House Sitters",
    icon: Home,
    iconClassName: "bg-[#E8F4F0]",
  },
  {
    slug: "senior-care",
    title: "Senior Care",
    description: "Thoughtful companionship and qualified daily support.",
    offerings: [
      "Certified Nursing Assistants",
      "Elder caregivers",
      "Companion caregivers",
      "Special needs caregivers",
    ],
    ctaLabel: "Explore Senior care",
    icon: HeartHandshake,
    iconClassName: "bg-[#F5EFE6]",
  },
  {
    slug: "concierge",
    title: "Concierge",
    description: "Practical help that gives you time back.",
    offerings: ["Personal concierge", "Lifestyle assistant", "Errand services"],
    ctaLabel: "Explore Concierge",
    icon: BriefcaseBusiness,
    iconClassName: "bg-[#E8F4F0]",
  },
  {
    slug: "pet-care",
    title: "Pet Care",
    description: "Dependable care for every beloved companion.",
    offerings: ["Pet sitters", "Pet walkers", "At-home check-ins"],
    ctaLabel: "Explore Pet Care",
    icon: PawPrint,
    iconClassName: "bg-[#FFF4D6]",
  },
]
