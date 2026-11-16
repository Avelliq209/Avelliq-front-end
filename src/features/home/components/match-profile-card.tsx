import { Check } from "lucide-react"
import Image from "next/image"

import checkCircleLightIcon from "@/assets/icons/check-circle-light.svg"
import checkCircleIcon from "@/assets/icons/check-circle.svg"
import { CountUp } from "@/components/motion/count-up"
import { StarRating } from "@/components/shared/star-rating"

import { MATCH_PROFILE } from "../data/content"

const GALLERY_SIZE = 3

export function MatchProfileCard() {
  const { name, role, matchScore, rating, reviewCount, image, credentials, stats } = MATCH_PROFILE

  return (
    <article className="flex flex-col gap-13.25 rounded-[12px] bg-white p-5 font-inter">
      <div className="flex flex-col gap-3.25 sm:flex-row sm:items-center">
        <div className="relative size-50.25 shrink-0 overflow-hidden rounded-[8px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="201px"
            placeholder="blur"
            className="object-cover object-[30%_center]"
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="flex w-fit items-center gap-0.75 rounded-[11px] bg-primary p-1 text-[11px] leading-[1.2] text-white">
            <Image src={checkCircleLightIcon} alt="" width={11} height={11} />
            <CountUp value={matchScore} suffix="%" /> Match
          </span>

          <div className="flex flex-col gap-2.25">
            <div className="flex flex-col gap-1.5">
              <h3 className="flex items-center gap-1.75 font-heading text-xl leading-[1.2] font-medium text-ink">
                {name}
                <Image src={checkCircleIcon} alt="Verified" width={16} height={16} />
              </h3>
              <p className="text-sm leading-[1.2] text-muted-foreground">{role}</p>
            </div>
            <div className="flex items-center gap-1 text-xs leading-[1.3]">
              <StarRating rating={2} starClassName="size-4" decorative />
              <span className="font-medium text-tan">{rating}</span>
              <span className="text-[#8A8894]">({reviewCount} reviews)</span>
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            {credentials.map((credential) => (
              <li key={credential} className="flex items-center gap-1.5 text-xs leading-[1.3] text-ink-strong">
                <Check aria-hidden="true" strokeWidth={1} className="size-3 shrink-0" />
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="grid grid-cols-3 divide-x-[0.5px] divide-stroke-subtle">
        {stats.map(({ icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-1.25 text-center">
            <Image src={icon} alt="" width={24} height={24} />
            <span className="text-sm leading-[1.91] text-ink sm:whitespace-nowrap">{label}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-3 gap-4.25">
        {Array.from({ length: GALLERY_SIZE }, (_, index) => (
          <div key={index} className="relative h-36.25 overflow-hidden rounded-[8px]">
            <Image src={image} alt="" fill sizes="126px" className="object-cover" />
          </div>
        ))}
      </div>
    </article>
  )
}
