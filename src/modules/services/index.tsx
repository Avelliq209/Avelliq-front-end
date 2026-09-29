"use client"

import { ServiceCardView, ServiceHeader, Services } from "@/components/ui/services"

const ServicesIndex = () => {
  return (
    <section className="px-5 sm:px-10 py-17.5 lg:px-17.5  space-y-10">
      <ServiceHeader 
        title="Reliable Support for Care & Daily Household Support"
        maxWidthTitle="lg:max-w-[70%]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Services.map(service => (
          <ServiceCardView key={service.title} index={0} service={service} />
        ))}
      </div>
    </section>
  )
}

export default ServicesIndex