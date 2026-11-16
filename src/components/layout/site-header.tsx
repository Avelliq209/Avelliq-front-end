import { HeaderActions } from "./header-actions"
import { Logo } from "./logo"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b-[0.5px] border-stroke bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="flex items-center justify-between gap-6 px-5 py-4 sm:px-10 lg:px-17.5 lg:py-6">
        <div className="flex items-center gap-10">
          <Logo />
          <MainNav />
        </div>
        <HeaderActions className="hidden xl:flex" />
        <MobileNav />
      </div>
    </header>
  )
}
