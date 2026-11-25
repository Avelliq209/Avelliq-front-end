import type { Metadata } from "next"

import { ServicesCatalog } from "@/features/services/components/services-catalog"
import { ServicesHeading } from "@/features/services/components/services-heading"
import { SERVICES } from "@/features/services/data/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "One trusted place to find the support your household needs today and as life changes.",
}

export default function ServicesPage() {
  return (
    <ServicesCatalog
      services={SERVICES}
      heading={
        <ServicesHeading
          as="h1"
          title="Reliable Support for Care & Daily Household Support"
          className="max-w-206.5"
          titleClassName="lg:text-[52px] lg:tracking-[0.546px]"
        />
      }
    />
  )
}
