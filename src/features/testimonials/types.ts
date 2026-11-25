import type { StaticImageData } from "next/image"

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  rating: number
  avatar: StaticImageData
}
