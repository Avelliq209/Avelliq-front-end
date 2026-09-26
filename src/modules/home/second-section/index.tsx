import { Pill } from "@/components/ui/pill"
import { ArrowRight, Baby, Check, Home, ShieldCheck, Sparkles } from "@/assets"
import Link from "next/link"


const services: ServiceCard[] = [
  {
    icon: <Baby size={24} strokeWidth={1.5} className="h-6 w-6" />,
    iconBg: "bg-[#FFF4D6]",
    title: "Childcare",
    description: "Reliable support for every stage of your family's journey.",
    items: [
      "Nannies",
      "Babysitters",
      "Live-in caregivers",
      "Travel & event nannies",
      "Doulas",
      "Special needs childcare",
    ],
    ctaLabel: "Explore Childcare",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} className="h-6 w-6" />,
    iconBg: "bg-[#F5EFE6]",
    title: "Housekeeping",
    description: "A beautifully cared-for home, on your terms.",
    items: ["General housekeeping", "Deep cleaning", "Move-in & move-out", "Laundry & ironing"],
    ctaLabel: "Explore Housekeeping",
  },
  {
    icon: <Home size={24} strokeWidth={1.5} className="h-6 w-6" />,
    iconBg: "bg-[#E8F4F0]",
    title: "House Sitters",
    description: "Trusted oversight while you're away from home.",
    items: ["House supervision", "Property check-ins", "Home routines"],
    ctaLabel: "Explore House Sitters",
  },
]

const ServiceCardView = ({ index, service }: {index: number, service: ServiceCard }) => {
  const round = ["rounded-[8px]","rounded-full","rounded-[8px]"]
  return (
    <div className="flex min-h-92.5 h-full flex-col rounded-[12px] border-[.5px] border-avelliq-border-brown-light bg-avelliq-text-white p-5 gap-5">
      <div className={`flex p-3 items-center shrink-0 justify-center w-fit text-avelliq-primary-green ${round[index]} ${service.iconBg}`}>
        {service.icon}
      </div>

      <div className="space-y-2.5">
        <h3 className=" text-[22px] 2xl:text-2xl font-semibold text-avelliq-bg-green-dark">{service.title}</h3>
        <p className="text-sm leading-relaxed font-normal text-avelliq-text-grey">{service.description}</p>
      </div>

      <ul className="flex-1 space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center justify-start gap-2 text-sm font-normal text-avelliq-text-primary">
            <Check size={14} className="h-3.5 w-3.5 text-avelliq-primary-green" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href=""
        className="inline-flex items-center gap-1 text-sm font-medium text-avelliq-primary-green transition-colors group"
      >
        {service.ctaLabel}
        <ArrowRight size={12} className="h-3 w-3 group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

const SecondSection = () => {
  return (
    <section className="p-17.5 space-y-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-sm 2xl:text-base font-medium text-avelliq-bg-green-dark bg-avelliq-bg-green-light border-avelliq-border-grey-light">
          <ShieldCheck size={18} strokeWidth={1.5} className="h-4.5 w-4.5" />
          Care For Your Whole Life
        </Pill>

        <div className="max-w-[50%] text-center space-y-3.5">
          <h2 className=" text-5xl leading-[120%] font-semibold text-avelliq-bg-green-dark tracking-wide">
            What can we help with?
          </h2>
          <p className=" text-sm 2xl:text-base font-normal text-avelliq-text-grey">
            One trusted place to find the support your household needs today and as life changes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCardView key={service.title} index={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default SecondSection