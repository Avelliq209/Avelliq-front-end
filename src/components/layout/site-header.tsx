import { MenuIcon } from "lucide-react"

import { ComingSoonButton } from "@/components/shared/coming-soon-button"

import { Logo } from "./logo"
import { MainNav } from "./main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 flex w-full flex-col border-b-[.5px] border-b-avelliq-border-brown-light bg-avelliq-text-white px-5 py-5 sm:px-10 sm:py-6 lg:px-17.5">
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex gap-10">
          <Logo />
          <MainNav />
        </div>

        <div className="hidden items-center gap-6 xl:flex">
          <ComingSoonButton variant="subtle-outline" size="nav">
            Sign In
          </ComingSoonButton>
          <ComingSoonButton variant="subtle-outline" size="nav">
            Join as a Professional
          </ComingSoonButton>
          <ComingSoonButton variant="brand" size="nav">
            Find Care
          </ComingSoonButton>
        </div>

        <ComingSoonButton
          variant="brand"
          aria-label="Open menu"
          className="h-auto rounded-sm px-3 py-1.5 md:px-3.5 lg:px-4 lg:py-2 xl:hidden"
        >
          <MenuIcon className="size-4.5 sm:size-5 md:size-6" />
        </ComingSoonButton>
      </div>
    </header>
  )
}
