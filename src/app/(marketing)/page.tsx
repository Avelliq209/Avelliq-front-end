import type { Metadata } from "next"

import { AgenciesSection } from "@/features/home/components/agencies-section"
import { HeroSection } from "@/features/home/components/hero-section"
import { HowItWorksSection } from "@/features/home/components/how-it-works-section"
import { MatchSection } from "@/features/home/components/match-section"
import { ProfessionalsSection } from "@/features/home/components/professionals-section"
import { SafetySection } from "@/features/home/components/safety-section"
import { ServiceGallerySection } from "@/features/home/components/service-gallery-section"
import { ServicesPreviewSection } from "@/features/home/components/services-preview-section"
import { TrustHighlights } from "@/features/home/components/trust-highlights"
import { TestimonialsSection } from "@/features/testimonials/components/testimonials-section"

export const metadata: Metadata = {
  title: "Home",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <ServicesPreviewSection />
      <ProfessionalsSection />
      <HowItWorksSection />
      <SafetySection />
      <ServiceGallerySection />
      <AgenciesSection />
      <MatchSection />
      <TestimonialsSection />
    </>
  )
}
