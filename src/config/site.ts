import type { ComponentType, SVGProps } from "react"

import { FacebookIcon } from "@/components/icons/facebook"
import { InstagramIcon } from "@/components/icons/instagram"
import { LinkedInIcon } from "@/components/icons/linkedin"
import { TwitterIcon } from "@/components/icons/twitter"
import { YoutubeIcon } from "@/components/icons/youtube"

export interface NavItem {
  title: string
  href: string
  hasMenu?: boolean
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export interface SocialLink {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const siteConfig = {
  name: "Avelliq",
  description:
    "Connect with verified professionals for childcare, senior care, housekeeping, pet care, concierge services, and more.",
  contact: {
    email: "avelliqsupport@gmail.com",
    phone: "+224 7879 88 99",
    phoneHref: "tel:+22478798899",
  },
} as const

export const ROUTES = {
  home: "/",
  services: "/services",
} as const

export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: ROUTES.home },
  { title: "Services", href: ROUTES.services },
  { title: "Trust & Safety", href: "#" },
  { title: "Resources", href: "#", hasMenu: true },
  { title: "Contact Us", href: "#" },
  { title: "FAQs", href: "#" },
]

export const FOOTER_NAV: NavGroup[] = [
  {
    title: "About us",
    items: [
      { title: "Home", href: ROUTES.home },
      { title: "Services", href: ROUTES.services },
      { title: "How It Works", href: "#" },
      { title: "Resources", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "FAQs", href: "#" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Childcare", href: `${ROUTES.services}#childcare` },
      { title: "Housekeeping", href: `${ROUTES.services}#housekeeping` },
      { title: "House Sitters", href: `${ROUTES.services}#house-sitters` },
      { title: "Senior Care", href: `${ROUTES.services}#senior-care` },
      { title: "Concierge", href: `${ROUTES.services}#concierge` },
      { title: "Pet Care", href: `${ROUTES.services}#pet-care` },
    ],
  },
  {
    title: "Contact us",
    items: [
      { title: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
      { title: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      { title: "Help center", href: "#" },
      { title: "Terms and conditions", href: "#" },
    ],
  },
]

export const LEGAL_NAV: NavItem[] = [
  { title: "Terms and Conditions", href: "#" },
  { title: "Privacy Policy", href: "#" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
]
