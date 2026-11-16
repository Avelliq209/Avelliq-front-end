import { CirclePattern } from "@/components/shared/circle-pattern"
import { Section } from "@/components/shared/section"
import { ServiceGrid } from "@/features/services/components/service-grid"
import { ServicesHeading } from "@/features/services/components/services-heading"
import { SERVICES } from "@/features/services/data/services"

const PREVIEW_COUNT = 3

export function ServicesPreviewSection() {
  return (
    <Section className="relative isolate flex flex-col gap-10 overflow-hidden">
      <CirclePattern className="-top-121 -left-57.5 -z-10" />
      <ServicesHeading title="What can we help with?" />
      <ServiceGrid services={SERVICES.slice(0, PREVIEW_COUNT)} />
    </Section>
  )
}
