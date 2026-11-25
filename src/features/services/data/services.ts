import childcareImage from "@/assets/images/services/cards/childcare.jpg"
import conciergeImage from "@/assets/images/services/cards/concierge.jpg"
import houseSittersImage from "@/assets/images/services/cards/house-sitters.jpg"
import housekeepingImage from "@/assets/images/services/cards/housekeeping.jpg"
import petCareImage from "@/assets/images/services/cards/pet-care.jpg"
import seniorCareImage from "@/assets/images/services/cards/senior-care.jpg"

import type { ServiceCategory } from "../types"

export const SERVICES: ServiceCategory[] = [
  {
    slug: "childcare",
    title: "Child Care",
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
    image: childcareImage,
    imageAlt: "A caregiver reading a book with a toddler",
  },
  {
    slug: "housekeeping",
    title: "Housekeeping",
    description: "A beautifully cared-for home, on your terms.",
    offerings: ["General housekeeping", "Deep cleaning", "Move-in & move-out", "Laundry & ironing"],
    ctaLabel: "Explore Housekeeping",
    image: housekeepingImage,
    imageAlt: "A smiling housekeeper holding cleaning supplies",
  },
  {
    slug: "house-sitters",
    title: "House Sitters",
    description: "Trusted oversight while you're away from home.",
    offerings: ["House supervision", "Property check-ins", "Home routines"],
    ctaLabel: "Explore House Sitters",
    image: houseSittersImage,
    imageAlt: "Two people arriving at the front door of a house",
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
    ctaLabel: "Explore Senior Care",
    image: seniorCareImage,
    imageAlt: "A caregiver with a tablet talking with an elderly woman at home",
  },
  {
    slug: "concierge",
    title: "Concierge",
    description: "Practical help that gives you time back.",
    offerings: ["Personal concierge", "Lifestyle assistant", "Errand services"],
    ctaLabel: "Explore Concierge",
    image: conciergeImage,
    imageAlt: "A personal concierge on a phone call at her desk",
    imagePosition: "center 21%",
  },
  {
    slug: "pet-care",
    title: "Pet Care",
    description: "Dependable care for every beloved companion.",
    offerings: ["Pet sitters", "Pet walkers", "At-home check-ins"],
    ctaLabel: "Explore Pet Care",
    image: petCareImage,
    imageAlt: "A pet sitter playing with a beagle",
    imagePosition: "center 16%",
  },
]
