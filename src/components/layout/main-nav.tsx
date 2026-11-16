"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { MAIN_NAV } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
      {MAIN_NAV.map((item) =>
        item.hasMenu ? (
          <ComingSoonButton
            key={item.title}
            variant="ghost"
            className="h-auto gap-1.25 p-0 text-sm font-medium text-avelliq-text-black hover:bg-transparent hover:text-avelliq-text-black 2xl:gap-2 2xl:text-base"
          >
            {item.title}
            <ChevronDown className="size-5" />
          </ComingSoonButton>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={cn(
              "rounded-lg text-sm font-medium outline-none 2xl:text-base",
              pathname === item.href ? "text-avelliq-primary-green" : "text-avelliq-text-black"
            )}
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  )
}
