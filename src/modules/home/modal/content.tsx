"use client"
import Image from "next/image";
import { SixModalProps } from "../sixth-section";
import { CircleXIcon, seniorCareGivingGrid } from "@/assets";
import { Pill } from "@/components/ui/pill";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalContentIDProps {
  modalContent: SixModalProps;
}

const ModalContentID = ({modalContent}: ModalContentIDProps) => {
  const arrImg = [seniorCareGivingGrid]

  return (
    <div className="relative flex flex-col bg-avelliq-bg-btn-light">
      <div className="relative">
        <Image
          src={arrImg[modalContent.id-1]}
          alt={modalContent.title}
          width={960}
          height={260}
          loading="eager"
          className="absolute w-full h-auto object-cover"
        />
        <div className="relative space-y-1.5 flex flex-col px-10 pt-20 pb-10 w-full bg-[linear-gradient(20deg,rgba(15,77,66,0.9)_20%,rgba(15,77,66,0.4)_55%,rgba(15,77,66,0)_75%)]">
          <DialogClose render={
            <Button type="button" 
            className={'bg-avelliq-text-white hover:bg-avelliq-text-white rounded-full absolute z-10 right-6 top-6 cursor-pointer'}>
              <CircleXIcon size={12} className=" h-3 w-3 text-avelliq-primary-green mx-auto" />
            </Button>} 
          />
          <Pill className=" py-1 px-3 text-[11px] font-bold mb-5 text-avelliq-bg-green-dark bg-[#FFF4D6] uppercase">
            Specialized Care
          </Pill>
          <h1 className=" text-avelliq-text-white text-4xl font-bold">
            {modalContent.title}
          </h1>
          <h2 className=" text-base font-medium text-avelliq-bg-green-light">
            {modalContent.subTitle}
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default ModalContentID