import { professional,  ShieldCheck } from "@/assets"
import { Pill } from "@/components/ui/pill"
import Image from "next/image"

const EighthSection = () => {
  const listItems = ["Find professionals in your area.", "See who can work when you need them.", "Discover professionals with relevant experience.", "Find specific skills that match your needs.", "Compare pricing before making a decision.", "Understand which credentials and checks have been completed."]

  return (
    <section className="px-5 sm:px-10 py-17.5 lg:px-17.5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.15fr_1.15fr_.7fr] gap-5">
        <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-center w-full h-full max-w-[90%] md:max-w-[80%] items-center justify-self-center text-center lg:max-w-full lg:items-start lg:justify-self-auto lg:text-start ">
          <div className="">
            <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-[13px] lg:text-sm 2xl:text-base font-medium mb-5 text-avelliq-bg-green-dark bg-avelliq-bg-green-light border-avelliq-border-grey-light">
              <ShieldCheck size={18} className="h-4 w-4 lg:h-4.5 lg:w-4.5 stroke-2 shrink-0" />
              The Right Match
            </Pill>
            <h2 className="text-[38px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-avelliq-primary-green tracking-wide mb-3.5">
              More than a search <br /> Find your match.
            </h2>
            <p className="text-[15px] 2xl:text-base font-normal text-avelliq-text-grey mb-10">
              Every household is different, and every person is different. Avelliq helps you discover professionals based on what actually matters to you, not just what service you selected.
            </p>
          </div>
        </div>

        <div className="w-full h-full bg-avelliq-text-white rounded-[12px] p-5">
          <div className="flex flex-col">
            <div className="grid grid-cols-2">
              <Image
                src={professional}
                alt="high rate professional"
                height={201}
                width={201}
                loading="eager"
                draggable={false}
                className=" h-full w-50.25 text-[8px] rounded-[8px] object-cover select-none"
              />
            </div>
            <div className=""></div>
          </div>
        </div>

        <div className=" bg-avelliq-bg-green-light rounded-[12px]">
          <div className="h-full text-avelliq-primary-green font-normal text-sm p-5 space-y-4">
            <h3 className=" text-xl font-medium text-avelliq-bg-green-dark">Match Factors</h3>
            <ul className=" list-disc pl-3 leading-[191%]">
              {listItems.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EighthSection