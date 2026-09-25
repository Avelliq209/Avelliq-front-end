import { Pill } from "@/components/ui/pill"
import { ArrowRight, Calendar, Heart, LifeBuoy, ShieldCheck, Verified } from "lucide-react"
import Image from "next/image"

import cleaner from "@/assets/images/lady-takes-care-of-the-house.png"

const professionalPoints: ProfessionalPoint[] = [
  {
    icon: <Calendar size={24} strokeWidth={1.5} className="h-6 w-6" />,
    title: "Choose your opportunities",
    description:
      "Pick your own schedule, preferred services, and ideal clients so you can work on your terms and focus on the care that fits your expertise.",
  },
  {
    icon: <Verified size={24} strokeWidth={1.5} className="h-6 w-6" />,
    title: "Showcase your experience",
    description:
      "Build a verified profile with ratings, credentials, and service highlights so families can trust your background and confidence from the start.",
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} className="h-6 w-6" />,
    title: "Build trusted relationships",
    description:
      "Connect with long-term clients through thoughtful matching and repeat bookings, helping you build consistent care partnerships that last.",
  },
  {
    icon: <LifeBuoy size={24} strokeWidth={1.5} className="h-6 w-6" />,
    title: "Get dedicated support",
    description:
      "Count on 24/7 platform support, practical resources, and ongoing training so you can stay confident and supported every step of the way.",
  },
]

const ProfessionalPointRow = ({ point }: { point: ProfessionalPoint }) => {
  return (
    <div className="flex gap-2.5 rounded-xl bg-avelliq-text-white p-5 border-[.5px] border-avelliq-border-grey-light">
      <div className="flex p-3 shrink-0 items-center justify-center rounded-[8px] bg-avelliq-bg-green-light text-avelliq-primary-green h-fit">
        {point.icon}
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-avelliq-bg-green-dark">{point.title}</h4>
        <p className="text-sm 2xl:text-base font-normal text-avelliq-text-grey">{point.description}</p>
      </div>
    </div>
  )
}


const ThirdSection = () => {
  return (
    <div className="grid grid-cols-2 p-17.5 space-y-10 overflow-hidden ">
      <Image
        src={cleaner}
        height={1048}
        width={650}
        alt="lady taking care of the room"
        className=" h-full w-full object-cover object-right rounded-tl-[16px] rounded-bl-[16px] "
      />
      <div className=" p-9.75 bg-avelliq-bg-brown-light rounded-tr-[16px] rounded-br-[16px] space-y-10">
        <div className="flex flex-col gap-5">
          <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-sm 2xl:text-base font-medium text-avelliq-bg-green-dark bg-avelliq-bg-green-light border-avelliq-border-grey-light">
            <ShieldCheck size={18} strokeWidth={1.5} className="h-4.5 w-4.5" />
            For Professionals
          </Pill>
          <h2 className="text-5xl leading-[120%] font-semibold text-avelliq-bg-green-dark tracking-wide">
            Good work should work for you, too.
          </h2>
          <p className="text-sm 2xl:text-base font-normal text-avelliq-text-grey">
            Create a trusted profile, choose the services you offer, set your availability, and
            connect with households that value your expertise.
          </p>
        </div>

        <div className="space-y-4">
          {professionalPoints.map((point) => (
            <ProfessionalPointRow key={point.title} point={point} />
          ))}
        </div>

        <button
          type="button"
          className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-avelliq-primary-green px-5 py-3 2xl:py-4 2xl:px-8 text-sm font-medium text-avelliq-text-white transition-colors cursor-pointer group"
          onClick={()=> alert('coming soon!')}
        >
          Join as a Professional
          <ArrowRight size={12} className="h-3 w-3 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}

export default ThirdSection