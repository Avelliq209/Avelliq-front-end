import Image from "next/image"

import { Pill } from "@/components/ui/pill"
import ButtonNav from "@/components/ui/button-nav"
import { houseCare, ShieldCheck } from "@/assets"

const professionalPoints: Pick<ProfessionalPoint, "title" | "description">[] = [
  {
    title: "Tell us what you need",
    description: "Choose your service, location, schedule, and the details that matter to your household.",
  },
  {
    title: "Meet trusted professionals",
    description: "Review detailed profiles, experience, availability, and verification information.",
  },
  {
    title: "Choose with confidence",
    description: "Connect directly and select the professional who feels right for your family.",
  },
]

const ProfessionalPointRow = ({ index, point }: { index: number, point: Pick<ProfessionalPoint, "title" | "description"> }) => {
  return (
    <div className="flex items-start justify-start gap-4.5 border-t-[.5px] border-t-[#FFFFFF99] text-avelliq-text-white pt-5">
      <div className="text-[#FFF4D6] text-[20px]">
        0{index+1}
      </div>
      <div className="space-y-2">
        <h4 className="text-[20px] leading-[140%] font-medium 2xl:text-2xl 2xl:font-semibold">{point.title}</h4>
        <p className="text-[15px] 2xl:text-base font-normal text-avelliq-bg-green-light">{point.description}</p>
      </div>
    </div>
  )
}


const FourthSection = () => {
  
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 px-5 sm:px-10 py-17.5 lg:px-17.5 bg-avelliq-bg-green-dark">
      <Image 
        src={houseCare}
        height={602}
        width={517}
        loading="eager"
        alt="Man helping an old woman"
        className=" hidden lg:block h-full w-full object-cover object-top rounded-[16px]"
      />
      <div className="space-y-5 ">
        <div className="flex flex-col gap-5 max-w-[90%] md:max-w-[80%] items-center justify-self-center text-center lg:max-w-full lg:items-start lg:justify-self-auto lg:text-start">
          <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-[13px] lg:text-sm 2xl:text-base font-medium text-[#FFF4D6] bg-[#F5EFE626] border-avelliq-border-grey-light">
            <ShieldCheck size={18} className="h-4 w-4 lg:h-4.5 lg:w-4.5 stroke-2 shrink-0" />
            How It Works
          </Pill>
          <h2 className="text-[38px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-avelliq-text-white tracking-wide">
            The right support, without the run-around.
          </h2>
        </div>
        
        {/* mobile view */}
        <Image 
          src={houseCare}
          height={602}
          width={517}
          loading="eager"
          alt="Man helping an old woman"
          className=" block lg:hidden mx-auto text-[8px] h-[42rem] zoom-50 sm:zoom-60 md:zoom-100 w-auto object-cover object-top rounded-[16px] my-20"
        />
        {/* mobile view */}
        
        <div className="space-y-3.5">
          {professionalPoints.map((point, index) => (
            <ProfessionalPointRow key={point.title} index={index} point={point} />
          ))}
        </div>

        <ButtonNav
          name="Start Your Search"
          isArror={true}
          className="text-avelliq-primary-green bg-avelliq-bg-green-light mt-3"
          onClick={()=> alert('coming soon!')}
        />

      </div>
    </section>
  )
}

export default FourthSection