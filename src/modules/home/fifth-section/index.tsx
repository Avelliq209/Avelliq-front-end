import { HeartHandshakeIcon, ShieldCheck, Verified } from "@/assets"

const gridCards: ProfessionalPoint[] = [
  {
    icon: <ShieldCheck size={35} className="h-7 w-7 md:h-8.5 md:w-8.5 stroke-2 shrink-0" />,
    title: "Thoughtful screening",
    description:
      "Every professional undergoes multi-step identity verification, role-appropriate background checks, and reference validation before joining our platform. We review credentials carefully so families can start with confidence.",
  },
  {
    icon: <Verified size={35} className="h-7 w-7 md:h-8.5 md:w-8.5 stroke-2 shrink-0" />,
    title: "Clear credentials",
    description:
      "Certifications, skills, work history, and relevant qualifications are verified and displayed transparently so you can make informed decisions. Profiles are designed to show the full story behind each professional.",
  },
  {
    icon: <HeartHandshakeIcon size={35} className="h-7 w-7 md:h-8.5 md:w-8.5 stroke-2 shrink-0" />,
    title: "Ongoing accountability",
    description:
      "Continuous review ratings, responsive support, and community guidelines help maintain high standards and a respectful environment. We keep trust visible throughout every booking.",
  },
]

const GridCardDiv = ({ gridCard }: { gridCard: ProfessionalPoint }) => {
  return (
    <div className=" space-y-4 p-6 text-avelliq-bg-green-dark h-full">
      <div>
        {gridCard.icon}
      </div>
      <div className=" space-y-1.5 text-start">
        <h4 className="text-[22px] 2xl:text-2xl font-medium">{gridCard.title}</h4>
        <p className=" text-[15px] 2xl:text-base font-normal text-avelliq-text-grey leading-[153%]">{gridCard.description}</p>
      </div>
    </div>
  )
}

const FifthSection = () => {
  return (
    <section className="px-5 sm:px-10 py-17.5 lg:px-17.5 bg-avelliq-bg-green-light">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-5">
          <div className=" max-w-[45%] space-y-4">
            <span className="inline-flex text-avelliq-bg-green-dark font-medium text-[15px] md:text-base lg:text-lg uppercase">
              TRUST IS NOT A FEATURE. IT’S THE FOUNDATION
            </span>
            <h2 className="text-[38px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-avelliq-primary-green tracking-wide">
              More clarity at every step.
            </h2>
          </div>
          <p className=" text-[15px] lg:text-base font-normal text-avelliq-bg-green-dark text-start max-w-[45%]">
            Avelliq is designed to help you make informed choices through identity checks, background screening, transparent profiles, and responsive support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 bg-avelliq-text-white overflow-hidden rounded-xl divide-y-[.3px] lg:divide-y-0 lg:divide-x-[.3px] divide-avelliq-border-brown-light">
          {gridCards.map((gridCard, i) => (
            <GridCardDiv 
              key={gridCard.title}
              gridCard={gridCard}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FifthSection