import Link from "next/link"

import { ROUTES, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface LogoProps {
  inverted?: boolean
}

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${siteConfig.name} home`}
      className="flex flex-nowrap items-center gap-2.5 bg-transparent text-[18px] font-semibold select-none sm:text-[20px] md:text-[22px] 2xl:text-2xl"
    >
      <span className="flex size-9.25 items-center justify-center rounded-[5px] bg-avelliq-primary-green px-2.25 py-1 text-avelliq-text-white">
        A
      </span>
      <span
        className={cn(
          "whitespace-nowrap",
          inverted ? "text-avelliq-text-white" : "text-avelliq-primary-green"
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  )
}
