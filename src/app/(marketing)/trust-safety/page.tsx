import type { Metadata } from "next"

import { CommunityGuidelinesSection } from "@/features/trust-safety/components/community-guidelines-section"
import { SafetyFeaturesSection } from "@/features/trust-safety/components/safety-features-section"
import { ScreeningSection } from "@/features/trust-safety/components/screening-section"
import { SupportSection } from "@/features/trust-safety/components/support-section"
import { TrustFrameworkSection } from "@/features/trust-safety/components/trust-framework-section"
import { TrustHeroSection } from "@/features/trust-safety/components/trust-hero-section"
import { TrustStatsSection } from "@/features/trust-safety/components/trust-stats-section"
import {
  FAMILY_SAFETY_FEATURES,
  PROFESSIONAL_SAFETY_FEATURES,
} from "@/features/trust-safety/data/content"

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "How Avelliq screens care professionals, protects every booking, and supports families and professionals around the clock.",
}

export default function TrustSafetyPage() {
  return (
    <>
      <TrustHeroSection />
      <TrustFrameworkSection />
      <ScreeningSection />
      <SafetyFeaturesSection
        heading={{
          label: "Guardian Protocols",
          title: "Safety Features for Avelliq Users",
          align: "start",
        }}
        features={FAMILY_SAFETY_FEATURES}
      />
      <SafetyFeaturesSection
        heading={{ eyebrow: "Professional Safeguards", title: "Safety Features for Professionals" }}
        features={PROFESSIONAL_SAFETY_FEATURES}
      />
      <TrustStatsSection />
      <CommunityGuidelinesSection />
      <SupportSection />
    </>
  )
}
