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
      className="flex shrink-0 items-center gap-2.5 font-heading text-xl leading-[1.2] font-medium select-none lg:text-2xl"
    >
      <span
        className={cn(
          "flex w-8 items-center justify-center rounded-[5px] px-2 py-1 lg:w-9.25",
          inverted ? "bg-white text-primary" : "bg-primary text-white"
        )}
      >
        A
      </span>
      <span className={cn("whitespace-nowrap", inverted ? "text-white" : "text-primary")}>
        {siteConfig.name}
      </span>
    </Link>
  )
}
