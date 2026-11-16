"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { SERVICE_DETAILS } from "../data/service-details"
import type { ServiceDetail as ServiceDetailData } from "../types"
import { ServiceDetail } from "./service-detail"

function ServiceGalleryItem({ detail }: { detail: ServiceDetailData }) {
  return (
    <Dialog>
      <DialogTrigger
        aria-label={`Learn more about ${detail.title}`}
        className="ml-4 cursor-pointer ring-0 outline-none"
      >
        <Image
          src={detail.thumbnail}
          alt={detail.thumbnailAlt}
          height={500}
          width={500}
          className="h-65 w-auto object-cover md:h-100 2xl:h-125"
        />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="overflow-hidden rounded-[24px] p-0 shadow-[0px_24px_48px_0px_#0F4D4229] xs:max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]"
      >
        <ServiceDetail detail={detail} />
      </DialogContent>
    </Dialog>
  )
}

export function ServiceGallery() {
  return (
    <div className="flex overflow-x-hidden bg-avelliq-text-white py-5 pl-5">
      <Marquee speed={50} pauseOnHover>
        <div className="flex">
          {SERVICE_DETAILS.map((detail) => (
            <ServiceGalleryItem key={detail.slug} detail={detail} />
          ))}
        </div>
      </Marquee>
    </div>
  )
}
