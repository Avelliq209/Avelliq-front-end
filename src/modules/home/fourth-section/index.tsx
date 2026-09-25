import Image from "next/image"

import houseCare from "@/assets/images/man-helping-old-woman.png"
import { Pill } from "@/components/ui/pill"
import { ShieldCheck } from "lucide-react"

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
      <div className="text-[#FFF4D6]">
        0{index+1}
      </div>
      <div className="space-y-2">
        <h4 className="text-lg leading-[140%] font-medium 2xl:text-2xl 2xl:font-semibold">{point.title}</h4>
        <p className="text-sm 2xl:text-base font-normal text-avelliq-bg-green-light">{point.description}</p>
      </div>
    </div>
  )
}


const FourthSection = () => {
  return (
    <section className="grid grid-cols-[1fr_2fr] gap-10 p-17.5 bg-avelliq-bg-green-dark">
      <Image 
        src={houseCare}
        height={602}
        width={517}
        alt="Man helping an old woman"
        className=" h-full w-full object-cover object-top rounded-[16px]"
      />
      <div className="space-y-5">
        <div className="flex flex-col gap-5">
          <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-sm 2xl:text-base font-medium text-[#FFF4D6] bg-[#F5EFE626] border-avelliq-border-grey-light">
            <ShieldCheck size={18} strokeWidth={1.5} className="h-4.5 w-4.5" />
            How It Works
          </Pill>
          <h2 className="text-5xl leading-[120%] font-semibold text-avelliq-text-white tracking-wide">
            The right support, without the run-around.
          </h2>
        </div>
        
        <div className="space-y-3.5">
          {professionalPoints.map((point, index) => (
            <ProfessionalPointRow key={point.title} index={index} point={point} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FourthSection