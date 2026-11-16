import michealWardAvatar from "@/assets/images/testimonials/micheal-ward.png"
import sarahGealAvatar from "@/assets/images/testimonials/sarah-geal.png"

import type { Testimonial } from "../types"

const CHILDCARE_QUOTE =
  "\u201CFinding reliable childcare used to take so much time. Nestora made it easier to compare professionals and understand their experience before reaching out.\u201D"

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-geal-1",
    quote: CHILDCARE_QUOTE,
    name: "Sarah Geal",
    role: "Medical Doctor",
    rating: 5,
    avatar: sarahGealAvatar,
  },
  {
    id: "micheal-ward",
    quote:
      "I wanted someone who could work around my schedule. Being able to see availability upfront made the search much easier.",
    name: "Micheal Ward",
    role: "Management Director",
    rating: 5,
    avatar: michealWardAvatar,
  },
  {
    id: "sarah-geal-2",
    quote: CHILDCARE_QUOTE,
    name: "Sarah Geal",
    role: "Medical Doctor",
    rating: 5,
    avatar: sarahGealAvatar,
  },
  {
    id: "sarah-geal-3",
    quote: CHILDCARE_QUOTE,
    name: "Sarah Geal",
    role: "Medical Doctor",
    rating: 5,
    avatar: sarahGealAvatar,
  },
]
