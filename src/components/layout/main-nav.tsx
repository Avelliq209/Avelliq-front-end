"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { MAIN_NAV } from "@/config/site"
import { cn } from "@/lib/utils"

const NAV_ITEM_CLASS_NAME = "text-base leading-[1.3] font-medium text-ink-soft"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
      {MAIN_NAV.map((item) =>
        item.hasMenu ? (
          <ComingSoonButton
            key={item.title}
            variant="ghost"
            className={cn(NAV_ITEM_CLASS_NAME, "h-auto gap-2 p-0 hover:bg-transparent")}
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
              NAV_ITEM_CLASS_NAME,
              "transition-colors hover:text-primary",
              pathname === item.href && "text-primary"
            )}
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  )
}
