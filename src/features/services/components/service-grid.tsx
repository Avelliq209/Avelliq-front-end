import { Reveal } from "@/components/motion/reveal"

import type { ServiceCategory } from "../types"
import { ServiceCard } from "./service-card"

export function ServiceGrid({ services }: { services: ServiceCategory[] }) {
  return (
    <Reveal stagger={0.12} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </Reveal>
  )
}
