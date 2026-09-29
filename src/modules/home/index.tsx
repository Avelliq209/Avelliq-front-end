"use client"

import Image from "next/image"
import { useState } from "react"
import SecondSection from "./second-section"
import ThirdSection from "./third-section"
import FourthSection from "./fourth-section"
import { hero, ArrowRight, Check, ChevronDown, MapPin, Search, ShieldCheck, Users, Verified } from "@/assets"
import FifthSection from "./fifth-section"
import SixthSection from "./sixth-section"
import SeventhSection from "./seventh-section"
import EighthSection from "./eighth-section"
import NinthSection from "./ninth-section"
import { Pill } from "@/components/ui/pill"

export const AVATAR_COLORS = [
  "bg-violet-100 text-violet-700",
  "bg-blue-100 text-blue-700",
  "bg-pink-100 text-pink-700",
  "bg-emerald-100 text-emerald-700",
  "bg-orange-100 text-orange-700",
]
export const initials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const needOptions = [
  "What do you need?",
  "Childcare",
  "Senior Care",
  "Housekeeping",
  "Concierge",
  "House Sitters",
  "Pet Care",
]

const trustPoints = [
  {
    title: "Background checked",
    subtitle: "Safety comes first",
    icon: ShieldCheck,
  },
  {
    title: "Profiles verified",
    subtitle: "Know who you're hiring",
    icon: Verified,
  },
  {
    title: "Real human support",
    subtitle: "Here when you need us",
    icon: Users,
  },
]

const Button = ({
  title,
  activeTab,
  onClick,
  content,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-3.5 px-4 2xl:py-4 2xl:px-8 text-sm font-medium transition-colors cursor-pointer rounded-sm ${
        activeTab === title
          ? "bg-avelliq-primary-green text-avelliq-text-white"
          : "bg-avelliq-text-white text-avelliq-text-grey hover:text-avelliq-text-primary"
      }`}
    >
      {content}
    </button>
  )
}


const HomeIndex = () => {
  const [activeTab, setActiveTab] = useState<Tab>("need");

  return (
    <div className="flex flex-col relative">
      <section className="relative flex flex-col">
        <Image
          src={hero}
          alt="hero"
          height={680}
          width={1440}
          priority
          draggable={false}
          className="absolute w-full min-h-screen h-full object-cover object-[100%_0%] z-0"
        />

        {/* content */}
        <div className="flex flex-col z-10 items-start justify-center w-full min-h-screen h-full bg-[linear-gradient(271.68deg,rgba(255,255,255,0.03)_1.02%,#FAF9F6_45.06%)] md:bg-[linear-gradient(271.68deg,rgba(255,255,255,0.03)_25.02%,#FAF9F6_55.06%)] px-5 sm:px-10 py-15 lg:px-17.5 md:py-20 gap-8">
          {/* Background Card */}
          <div className="flex flex-col gap-5 max-w-114 2xl:max-w-160">
            <Pill className=" bg-avelliq-bg-green-light border-avelliq-border-grey-light px-3 md:px-4 py-2.5 2xl:py-3 text-[13px] lg:text-sm 2xl:text-base font-medium text-avelliq-bg-green-dark">
              <ShieldCheck size={18} className=" h-4 w-4 lg:h-4.5 lg:w-4.5 stroke-2 shrink-0" />
              Background-checked Professionals
            </Pill>
            <div className=" space-y-4">
              <h1 className=" tracking-wide text-[43px] md:text-[46px] lg:text-[52px] leading-[130%] font-bold text-avelliq-bg-green-dark">
                Find trusted help for everyday life.
              </h1>
              <h2 className=" text-base text-avelliq-text-grey font-normal text-start">
                Connect with verified professionals for childcare, senior care, housekeeping, pet care, concierge services, and more.
              </h2>
            </div>
          </div>

          {/* Search Card */}
          <div className="space-y-3.75">
            <div className=" shadow-[0px_0px_4px_0px_#176B5B14] bg-avelliq-text-white border-[.5px] border-avelliq-border-brown-light rounded-[8px] p-3 w-full max-w-md min-h-39.5 2xl:max-w-139 space-y-3">
              <div className="flex items-center gap-3 pb-3 border-b-[.5px] border-avelliq-border-brown-light">
                <Button
                  title="need"
                  activeTab={activeTab}
                  onClick={() => setActiveTab("need")}
                  content="I need care"
                />
                <Button
                  title="help"
                  activeTab={activeTab}
                  onClick={() => setActiveTab("help")}
                  content="I want to help"
                />
              </div>
              {(activeTab==="need") &&
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  <div className="relative flex-1 text-avelliq-text-grey">
                    <select
                      className="w-full appearance-none rounded-sm border border-avelliq-border-brown-light bg-avelliq-bg-btn-light px-3.5 py-3 text-sm 2xl:text-sm font-normal focus:border-avelliq-primary-green focus:outline-none focus:ring-1 focus:ring-avelliq-primary-green"
                      defaultValue={needOptions[0]}
                    >
                      {needOptions.map((opt) => (
                        <option key={opt} value={opt} className=" hover:bg-avelliq-primary-green hover:text-avelliq-text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="w-4.5 h-4.5 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 bg-avelliq-bg-btn-light" />
                  </div>
                  {/* zip code */}
                  <div className="relative flex-1">
                    <MapPin size={18} className="w-4.5 h-4.5 pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#AAAAAA]" />
                    <input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      placeholder="Zip code"
                      className="w-full border border-avelliq-border-brown-light rounded-sm bg-avelliq-bg-btn-light py-3 pl-9 pr-3 text-sm text-avelliq-text-primary placeholder:text-avelliq-text-grey focus:border-avelliq-primary-green focus:outline-none focus:ring-1 focus:ring-avelliq-primary-green"
                    />
                  </div>
                  {/* btn search zip */}
                  <button
                    type="button"
                    aria-label="Search"
                    className="flex items-center justify-center rounded-sm bg-avelliq-primary-green p-3.5 text-avelliq-text-white transition-colors hover:bg-emerald-800 cursor-pointer"
                    onClick={()=> alert('coming soon!')}
                  >
                    <span className="block md:hidden text-sm">Search</span>
                    <Search size={18} aria-hidden className="hidden md:block w-4.5 h-4.5" />
                  </button>
                </div>
              }
              {(activeTab==="help") && 
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 text-sm">
                  <span className=" text-avelliq-text-grey text-start font-normal">
                    Build a profile, set your availability, and meet people who value your work.
                  </span>
                  <button className="group flex items-center gap-1 text-nowrap bg-avelliq-primary-green rounded-sm text-avelliq-text-white font-medium w-fit py-2 px-4 2xl:py-4 2xl:px-8 cursor-pointer"
                  onClick={()=> alert('coming soon!')}>
                    <span className="">Explore Opportunities</span>
                    <ArrowRight size={12} className="w-3 h-3 group-hover:translate-x-1" />
                  </button>
                </div>
              }
            </div>
            <div className="flex items-center gap-1.5 text-sm font-normal text-avelliq-bg-green-dark">
              <Check size={14} className="h-3.5 w-3.5 shrink-0" />
              Browse profiles free. Connect when you're ready.
            </div>
          </div>
        </div>
      </section>
      
      {/* grid */}
      <section className="grid grid-cols-1 divide-y-[.3px] divide-x-0 divide-avelliq-border-brown-light md:grid-cols-3 md:divide-x-[.3px] md:divide-y-0 border-y-[.3px] border-avelliq-border-brown-light">
        {trustPoints.map((point) => (
          <div key={point.title} className="flex flex-col lg:flex-row items-center gap-4 px-10 py-8 md:py-6 2xl:py-9.75 lg:px-17.5">
            <div className="flex p-4 xl:p-5 shrink-0 items-center justify-center rounded-full bg-avelliq-bg-green-light">
              <point.icon size={24} className=" w-5 h-5 xl:w-6 xl:h-6 text-avelliq-primary-green stroke-2 md:stroke-[1.5]" />
            </div>
            
            <div className="text-center lg:text-start">
              <p className="font-medium text-[20px] 2xl:text-[22px] text-avelliq-bg-green-dark">{point.title}</p>
              <p className="text-base 2xl:text-[15px] font-normal text-[#858486]">{point.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
    </div>
  )
}

export default HomeIndex