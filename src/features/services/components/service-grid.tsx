import type { ServiceCategory } from "../types"
import { ServiceCard } from "./service-card"

interface ServiceGridProps {
  services: ServiceCategory[]
  alternateIconShape?: boolean
}

export function ServiceGrid({ services, alternateIconShape = false }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={service.slug}
          service={service}
          iconShape={alternateIconShape && index % 2 === 1 ? "circle" : "square"}
        />
      ))}
    </div>
  )
}
