"use client"

import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MAIN_NAV, siteConfig } from "@/config/site"
import { useScrollLock } from "@/hooks/use-scroll-lock"
import { cn } from "@/lib/utils"

import { HeaderActions } from "./header-actions"

export function MobileNav() {
  const pathname = usePathname()
  const setScrollLocked = useScrollLock()

  return (
    <Sheet onOpenChange={setScrollLocked}>
      <SheetTrigger
        render={
          <Button aria-label="Open menu" size="icon-lg" className="rounded-full xl:hidden" />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent data-lenis-prevent side="right" className="w-full gap-0 bg-background sm:max-w-sm">
        <SheetHeader className="border-b-[0.5px] border-stroke p-5">
          <SheetTitle className="font-heading text-2xl font-medium text-primary">
            {siteConfig.name}
          </SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col p-5">
          {MAIN_NAV.map((item) => (
            <SheetClose
              key={item.title}
              nativeButton={false}
              render={
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "border-b-[0.5px] border-stroke py-4 text-base font-medium text-ink-soft transition-colors hover:text-primary",
                    pathname === item.href && "text-primary"
                  )}
                />
              }
            >
              {item.title}
            </SheetClose>
          ))}
        </nav>

        <HeaderActions className="mt-auto flex-col items-stretch gap-3 p-5 [&_button]:w-full [&>*]:w-full" />
      </SheetContent>
    </Sheet>
  )
}
