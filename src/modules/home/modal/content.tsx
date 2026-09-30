"use client"

import Image from "next/image";
import { SixModalProps } from "../sixth-section";
import { childCareGivingGrid, CircleXIcon, houseKeepingGrid, houseSettingServicesGrid, personalConciergeGrid, petCareGrid, seniorCareGivingGrid } from "@/assets";
import { Pill } from "@/components/ui/pill";
import { DialogClose, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ButtonNav from "@/components/ui/button-nav";

interface ModalContentIDProps {
  modalContent: SixModalProps;
}

const ModalContentID = ({modalContent}: ModalContentIDProps) => {
  const arrImg = [seniorCareGivingGrid, childCareGivingGrid, houseKeepingGrid, petCareGrid, houseSettingServicesGrid, personalConciergeGrid]
  const gridCardBg = ['bg-[#E8F4F0]','bg-[#F5EFE6]']

  return (
    <div className="relative flex flex-col bg-avelliq-bg-btn-light h-[90vh]">
      <DialogHeader className="relative overflow-hidden">
        <Image
          src={arrImg[modalContent.id-1]}
          alt={modalContent.alt}
          width={960}
          height={260}
          loading="eager"
          className="absolute text-[8px] w-full h-full object-cover object-top"
        />
        <div className="relative space-y-1.5 flex flex-col px-5 xl:px-10 pt-15 xl:pt-20 pb-10 w-full bg-[linear-gradient(20deg,rgba(15,77,66,0.9)_20%,rgba(15,77,66,0.4)_55%,rgba(15,77,66,0)_75%)]">
          <DialogClose render={
            <Button type="button" 
            className={'absolute bg-avelliq-text-white hover:bg-avelliq-text-white rounded-full z-10 right-6 top-6 cursor-pointer'}>
              <CircleXIcon size={12} className=" h-3 w-3 text-avelliq-primary-green mx-auto" />
            </Button>} 
          />
          <Pill className=" py-1 px-3 text-[11px] font-bold mb-5 text-avelliq-bg-green-dark bg-[#FFF4D6] uppercase">{modalContent.badge}</Pill>
          <h1 className=" text-avelliq-text-white text-[2rem] xl:text-4xl font-bold">
            {modalContent.title}
          </h1>
          <h2 className=" text-[15px] xl:text-base font-medium text-avelliq-bg-green-light">
            {modalContent.subTitle}
          </h2>
        </div>
      </DialogHeader>

      <div className=" p-5 xl:p-10 flex flex-col flex-1 overflow-y-auto scrollbar-thin">
        <div className=" space-y-3 mb-9">
          <h2 className="text-base xl:text-lg text-avelliq-bg-green-dark font-bold">{modalContent.sectOneHead}</h2>
          <p className=" text-[15px] text-avelliq-text-grey font-normal">{modalContent.sectOneCont}</p>
        </div>

        <div className=" space-y-4 mb-9">
          <h2 className="text-base xl:text-lg text-avelliq-bg-green-dark font-bold">{modalContent.sectTwoHead}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {modalContent.sectTwoCont.map((grid, i)=> (
              <div key={grid.title} className="flex flex-col gap-5 h-full w-full rounded-[12px] p-5 border-[.5px] border-avelliq-border-brown-light">
                <span className=" rounded-[8px] p-3 shrink-0 bg-avelliq-bg-green-light w-fit text-avelliq-primary-green">
                  <grid.icon size={24} className="h-5.5 w-5.5 md:h-6 md:w-6 stroke-[1.5] shrink-0" />
                </span>
                <h3 className=" text-[15px] xl:text-base text-avelliq-bg-green-dark font-medium">{grid.title}</h3>
                <p className=" text-[13px] text-avelliq-text-grey font-normal">{grid.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" space-y-9 divide-y-[.5px] divide-avelliq-border-brown-light">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-9">
            {modalContent.gridCard.map((gridCard, i) => (
              <div key={gridCard.gridHead} className={` space-y-4 p-4 xl:p-6 rounded-[16px] w-full h-full ${gridCardBg[i]}`}>
                <h2 className="text-[15px] xl:text-base text-avelliq-primary-green font-bold">{gridCard.gridHead}</h2>
                <div className="flex flex-col gap-4">
                  {gridCard.gridCont.map(list => (
                    <div key={list.gridTitle} className="flex gap-3">
                      <span className="p-1.5 rounded-[6px] w-fit h-fit shrink-0 bg-avelliq-bg-green-light">
                        <gridCard.gridIcon size={12} className="h-3 w-3 shrink-0 text-avelliq-primary-green" />
                      </span>
                      <div key={list.gridTitle} className="flex flex-col">
                        <h3 className="text-sm text-avelliq-bg-green-dark font-semibold">{list.gridTitle}</h3>
                        <p className="text-[13px] text-avelliq-text-grey font-normal">{list.gridDesc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div id="CTA_footer" className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ButtonNav
              name={"Join as a Professional"}
              isArror={false}
              className="bg-avelliq-text-white text-avelliq-primary-green border-[.5px] border-avelliq-primary-green hover:bg-slate-50 transition-colors font-semibold"
              onClick={()=> alert("coming soon!")}
            /> 
            <ButtonNav
              name={modalContent.button}
              isArror={false}
              className=" bg-avelliq-primary-green text-avelliq-text-white hover:bg-avelliq-primary-green/95 transition-colors font-semibold"
              onClick={()=> alert("coming soon!")}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ModalContentID