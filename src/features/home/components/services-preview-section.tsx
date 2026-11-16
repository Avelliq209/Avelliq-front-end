import { Section } from "@/components/shared/section"
import { SERVICES } from "@/features/services/data/services"
import { ServiceGrid } from "@/features/services/components/service-grid"
import { ServicesHeading } from "@/features/services/components/services-heading"

const PREVIEW_COUNT = 3

export function ServicesPreviewSection() {
  return (
    <Section className="space-y-10">
      <ServicesHeading title="What can we help with?" className="lg:max-w-[50%]" />
      <ServiceGrid services={SERVICES.slice(0, PREVIEW_COUNT)} alternateIconShape />
    </Section>
  )
}
