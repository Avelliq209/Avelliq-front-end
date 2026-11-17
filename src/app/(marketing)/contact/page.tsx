import type { Metadata } from "next"

import { ContactFormSection } from "@/features/contact/components/contact-form-section"
import { ContactHeroSection } from "@/features/contact/components/contact-hero-section"
import { ContactHighlights } from "@/features/contact/components/contact-highlights"
import { ContactMethodsSection } from "@/features/contact/components/contact-methods-section"
import { FaqPreviewSection } from "@/features/contact/components/faq-preview-section"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions about finding care, joining Avelliq, or anything in between? Send a message and our team will get back to you.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactHighlights />
      <ContactFormSection />
      <ContactMethodsSection />
      <FaqPreviewSection />
    </>
  )
}
