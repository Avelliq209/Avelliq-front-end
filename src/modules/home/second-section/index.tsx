import { ServiceCardView, ServiceHeader, Services } from "@/components/ui/services"

const SecondSection = () => {
  return (
    <section className="px-5 sm:px-10 py-17.5 lg:px-17.5 space-y-10">
      <ServiceHeader 
        title="What can we help with?" 
        maxWidthTitle="lg:max-w-[50%]"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Services.slice(0,3).map((service, index) => (
          <ServiceCardView key={service.title} index={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default SecondSection