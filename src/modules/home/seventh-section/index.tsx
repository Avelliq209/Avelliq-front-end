import Image from "next/image"
import {avelliqAgencies} from "@/assets"
import { Pill } from "@/components/ui/pill"
import { Building2, CalendarCheck, Check, ShieldCheck, Users, Verified } from "lucide-react"
import ButtonNav from "@/components/ui/button-nav"

const gridCards: ProfessionalPoint[] = [
  {
    icon: <Building2 size={24} className="h-6 w-6 stroke-2 shrink-0" />,
    title: "One business profile",
    description:
      "Present your company, services, and service area in a single verified place.",
  },
  {
    icon: <Users size={24} className="h-6 w-6 stroke-2 shrink-0" />,
    title: "Bring your whole team",
    description:
      "Onboard your caregivers under your agency so families can book with confidence.",
  },
  {
    icon: <Verified size={24} className="h-6 w-6 stroke-2 shrink-0" />,
    title: "Verified agency badge",
    description:
      "Business verification and staff screening show your professionalism at a glance.",
  },
  {
    icon: <CalendarCheck size={24} strokeWidth={1.5} className="h-6 w-6" />,
    title: "Run it all in one place",
    description:
      "Track requests, coordinate schedules, and manage staff from one simple dashboard.",
  },
]

const ListItem = ({item}: {item: string}) => {
  return (
    <li className="flex items-center justify-start gap-2 text-[15px] 2xl:text-base font-medium text-avelliq-text-primary">
      <Check size={14} className="h-3.5 w-3.5 text-avelliq-primary-green shrink-0" />
      <span>{item}</span>
    </li>
  )
}

const GridCardDiv = ({ gridCard }: { gridCard: ProfessionalPoint }) => {
  return (
    <div className="flex flex-col gap-3 p-4 xl:p-7 bg-avelliq-text-white h-full rounded-xl border-[.5px] border-avelliq-border-brown-light text-start">
      <div className="text-avelliq-primary-green">{gridCard.icon}</div>
      <h4 className="text-lg font-semibold text-avelliq-bg-green-dark">{gridCard.title}</h4>
      <p className=" text-[15px] 2xl:text-sm font-normal text-avelliq-text-grey">{gridCard.description}</p>
    </div>
  )
}


const SeventhSection = () => {
  const items = ["Register as a company","List your caregivers","Respond to family requests","Grow with dedicated support"]

  return (
    <section className="px-5 sm:px-10 py-17.5 lg:px-17.5 bg-avelliq-bg-green-light">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[16px]">
          <div className="flex flex-col justify-center items-start bg-avelliq-text-white px-5 py-9.75 md:p-9.75">
            <div className="flex flex-col ">
              <div className="flex flex-col max-w-[90%] sm:max-w-[80%] items-center mx-auto text-center lg:max-w-full lg:items-start lg:justify-self-auto lg:text-start">
                <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-[13px] lg:text-sm 2xl:text-base font-medium mb-5 text-avelliq-bg-green-dark bg-avelliq-bg-green-light border-avelliq-border-grey-light">
                  <ShieldCheck size={18} className="h-4 w-4 lg:h-4.5 lg:w-4.5 stroke-2 shrink-0" />
                  For Care Agencies & Companies
                </Pill>
                <h2 className="text-[38px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-avelliq-primary-green tracking-wide mb-3.5">
                  Grow your care business with Avelliq.
                </h2>
                <p className="text-[15px] 2xl:text-base font-normal text-avelliq-text-grey sm:max-w-[90%] md:max-w-[70%] mb-10">
                  Connect your company with customers looking for reliable lifestyle care and household services. Build your business presence, manage your team and keep your operations organized, all from one platform.
                </p>
              </div>

              {/* mobile view < 1024 */}
              <Image
                src={avelliqAgencies}
                alt="Avelliq Agency"
                height={602}
                width={650}
                className="text-[8px] block lg:hidden h-[35rem] w-auto object-cover zoom-60 sm:zoom-70 md:zoom-100 rounded-[16px] object-[0%_10%] mb-15 mt-5"
              />
              {/* end view */}

              <div className="grid grid-cols-2 gap-5.5 mb-12.5 items-start">
                {items.map(item => (
                  <ListItem
                    key={item}
                    item={item}
                  />
                ))}
              </div>
              <ButtonNav
                name={"Register Your Agency"}
                isArror={true}
                className=" bg-avelliq-primary-green text-avelliq-text-white"
                onClick={()=> alert("coming soon!")}
              />              

            </div>
          </div>

          <div>
            <Image
              src={avelliqAgencies}
              alt="Avelliq Agency"
              height={602}
              width={650}
              className="text-[8px] hidden lg:block h-full w-full object-cover object-[0%_10%]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 gap-y-4 sm:gap-4 xl:gap-y-6 xl:gap-6">
          {gridCards.map(gridCard => (
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

export default SeventhSection