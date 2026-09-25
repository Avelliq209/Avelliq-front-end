import Image from "next/image"
import {avelliqAgencies} from "@/assets"
import { Pill } from "@/components/ui/pill"
import { Building2, CalendarCheck, Check, ShieldCheck, Users, Verified } from "lucide-react"
import ButtonNav from "@/components/ui/button-nav"

const gridCards: ProfessionalPoint[] = [
  {
    icon: <Building2 size={24} strokeWidth={1.5} className="h-6 w-6" />,
    title: "One business profile",
    description:
      "Present your company, services, and service area in a single verified place.",
  },
  {
    icon: <Users size={24} strokeWidth={1.5} className="h-6 w-6" />,
    title: "Bring your whole team",
    description:
      "Onboard your caregivers under your agency so families can book with confidence.",
  },
  {
    icon: <Verified size={24} strokeWidth={1.5} className="h-6 w-6" />,
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
    <li className="flex items-center justify-start gap-2 text-sm 2xl:text-base font-medium text-avelliq-text-primary">
      <Check size={14} className="h-3.5 w-3.5 text-avelliq-primary-green" />
      <span>{item}</span>
    </li>
  )
}

const GridCardDiv = ({ gridCard }: { gridCard: ProfessionalPoint }) => {
  return (
    <div className="flex flex-col gap-3 p-7 bg-avelliq-text-white h-full rounded-xl border-[.5px] border-avelliq-border-brown-light text-start">
      <div className="text-avelliq-primary-green">{gridCard.icon}</div>
      <h4 className="text-base 2xl:text-lg font-semibold text-avelliq-bg-green-dark">{gridCard.title}</h4>
      <p className=" text-[13px] 2xl:text-sm font-normal text-avelliq-text-grey">{gridCard.description}</p>
    </div>
  )
}


const SeventhSection = () => {
  const items = ["Register as a company","List your caregivers","Respond to family requests","Grow with dedicated support"]

  return (
    <section className=" p-17.5 bg-avelliq-bg-green-light">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-[16px]">
          <div className="flex flex-col justify-center items-start bg-avelliq-text-white p-9.75">
            <div className="flex flex-col ">
              <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-sm 2xl:text-base font-medium mb-5 text-avelliq-bg-green-dark bg-avelliq-bg-green-light border-avelliq-border-grey-light">
                <ShieldCheck size={18} strokeWidth={1.5} className="h-4.5 w-4.5" />
                For Care Agencies & Companies
              </Pill>
              <h2 className="text-5xl leading-[120%] font-semibold text-avelliq-primary-green tracking-wide mb-3.5">
                Grow your care business with Avelliq.
              </h2>
              <p className="text-sm 2xl:text-base font-normal text-avelliq-text-grey max-w-[70%] mb-10">
                Connect your company with customers looking for reliable lifestyle care and household services. Build your business presence, manage your team and keep your operations organized, all from one platform.
              </p>
              <div className="grid grid-cols-2 gap-5.5 mb-12.5">
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
              className=" h-full w-162.5 object-cover object-left"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
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