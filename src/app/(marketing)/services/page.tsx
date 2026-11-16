import type { Metadata } from "next"

import { Section } from "@/components/shared/section"
import { ServiceGrid } from "@/features/services/components/service-grid"
import { ServicesHeading } from "@/features/services/components/services-heading"
import { SERVICES } from "@/features/services/data/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "One trusted place to find the support your household needs today and as life changes.",
}

export default function ServicesPage() {
  return (
    <Section className="space-y-10">
      <ServicesHeading
        as="h1"
        title="Reliable Support for Care & Daily Household Support"
        className="lg:max-w-[70%]"
      />
      <ServiceGrid services={SERVICES} />
    </Section>
  )
}
