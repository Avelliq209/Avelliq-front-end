import { Pill } from "@/components/ui/pill"
import Image from "next/image"

import ButtonNav from "@/components/ui/button-nav"
import { cleaner, Calendar, Heart, LifeBuoy, ShieldCheck, Verified } from "@/assets"

const professionalPoints: ProfessionalPoint[] = [
  {
    icon: <Calendar size={24} className="h-5.5 w-5.5 md:h-6 md:w-6 stroke-2 shrink-0" />,
    title: "Choose your opportunities",
    description:
      "Pick your own schedule, preferred services, and ideal clients so you can work on your terms and focus on the care that fits your expertise.",
  },
  {
    icon: <Verified size={24} className="h-5.5 w-5.5 md:h-6 md:w-6 stroke-2 shrink-0" />,
    title: "Showcase your experience",
    description:
      "Build a verified profile with ratings, credentials, and service highlights so families can trust your background and confidence from the start.",
  },
  {
    icon: <Heart size={24} className="h-5.5 w-5.5 md:h-6 md:w-6 stroke-2 shrink-0" />,
    title: "Build trusted relationships",
    description:
      "Connect with long-term clients through thoughtful matching and repeat bookings, helping you build consistent care partnerships that last.",
  },
  {
    icon: <LifeBuoy size={24} className="h-5.5 w-5.5 md:h-6 md:w-6 stroke-2 shrink-0" />,
    title: "Get dedicated support",
    description:
      "Count on 24/7 platform support, practical resources, and ongoing training so you can stay confident and supported every step of the way.",
  },
]

const ProfessionalPointRow = ({ point }: { point: ProfessionalPoint }) => {
  return (
    <div className="flex gap-2.5 rounded-xl bg-avelliq-text-white p-5 border-[.5px] border-avelliq-border-grey-light">
      <div className="flex p-2.5 md:p-3 shrink-0 items-center justify-center rounded-[8px] bg-avelliq-bg-green-light text-avelliq-primary-green h-fit">
        {point.icon}
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-avelliq-bg-green-dark">{point.title}</h4>
        <p className="text-[15px] 2xl:text-base font-normal text-avelliq-text-grey">{point.description}</p>
      </div>
    </div>
  )
}


const ThirdSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-5 sm:px-10 py-17.5 lg:px-17.5 space-y-10 overflow-hidden">
      <Image
        src={cleaner}
        height={1048}
        width={650}
        loading="eager"
        alt="lady taking care of the room"
        className=" hidden lg:block text-[8px] h-full w-full object-cover object-right rounded-tl-[16px] rounded-bl-[16px] "
      />
      <div className="px-5 py-9.75 sm:px-9.75 bg-avelliq-bg-brown-light rounded-tl-[16px] rounded-bl-[16px] lg:rounded-tl-none lg:rounded-bl-none rounded-tr-[16px] rounded-br-[16px] space-y-10">
        <div className="flex flex-col gap-5 max-w-[90%] md:max-w-[80%] items-center justify-self-center text-center lg:max-w-full lg:items-start lg:justify-self-auto lg:text-start">
          <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-[13px] lg:text-sm 2xl:text-base font-medium text-avelliq-bg-green-dark bg-avelliq-bg-green-light border-avelliq-border-grey-light">
            <ShieldCheck size={18} className="h-4 w-4 lg:h-4.5 lg:w-4.5 stroke-2 shrink-0" />
            For Professionals
          </Pill>
          <h2 className="text-[38px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-avelliq-bg-green-dark tracking-wide">
            Good work should work for you, too.
          </h2>
          <p className="text-base font-normal text-avelliq-text-grey">
            Create a trusted profile, choose the services you offer, set your availability, and
            connect with households that value your expertise.
          </p>
        </div>

        {/* mobile view < 1024 */}
        <Image
          src={cleaner}
          height={1048}
          width={650}
          loading="eager"
          alt="lady taking care of the room"
          className=" block lg:hidden mx-auto text-[8px] w-auto h-[55rem] zoom-50 sm:zoom-60 md:zoom-100 object-cover object-top-right rounded-[16px] my-20"
        />
        {/* end view */}

        <div className="space-y-4">
          {professionalPoints.map((point) => (
            <ProfessionalPointRow key={point.title} point={point} />
          ))}
        </div>

        <ButtonNav
          name="Join as a Professional"
          isArror={true}
          className="bg-avelliq-primary-green text-avelliq-text-white"
          onClick={()=> alert('coming soon!')}
        />
      </div>
    </section>
  )
}

export default ThirdSection