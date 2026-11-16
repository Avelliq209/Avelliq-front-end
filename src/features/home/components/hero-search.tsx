"use client"

import { MapPin, Search } from "lucide-react"

import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

import { CARE_NEEDS } from "../data/content"

const FIELD_CLASS_NAME =
  "h-auto rounded-sm border-avelliq-border-brown-light bg-avelliq-bg-btn-light py-3 text-sm font-normal shadow-none focus-visible:border-avelliq-primary-green focus-visible:ring-1 focus-visible:ring-avelliq-primary-green md:text-sm"

const TAB_TRIGGER_CLASS_NAME =
  "h-auto flex-1 rounded-sm px-4 py-3.5 text-sm font-medium text-avelliq-text-grey transition-colors not-data-active:hover:text-avelliq-text-primary data-active:bg-avelliq-primary-green data-active:text-avelliq-text-white data-active:shadow-none 2xl:px-8 2xl:py-4"

export function HeroSearch() {
  return (
    <Tabs
      defaultValue="need"
      className="min-h-39.5 w-full max-w-md gap-3 rounded-[8px] border-[.5px] border-avelliq-border-brown-light bg-avelliq-text-white p-3 shadow-[0px_0px_4px_0px_#176B5B14] 2xl:max-w-139"
    >
      <TabsList className="h-auto w-full gap-3 rounded-none border-b-[.5px] border-avelliq-border-brown-light bg-transparent p-0 pb-3 group-data-horizontal/tabs:h-auto">
        <TabsTrigger value="need" className={TAB_TRIGGER_CLASS_NAME}>
          I need care
        </TabsTrigger>
        <TabsTrigger value="help" className={TAB_TRIGGER_CLASS_NAME}>
          I want to help
        </TabsTrigger>
      </TabsList>

      <TabsContent value="need">
        <form
          className="flex flex-col gap-2 md:flex-row md:items-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <NativeSelect
            aria-label="Service type"
            defaultValue=""
            className="w-full flex-1 text-avelliq-text-grey [&_select]:h-auto [&_select]:rounded-sm [&_select]:border-avelliq-border-brown-light [&_select]:bg-avelliq-bg-btn-light [&_select]:py-3 [&_select]:pl-3.5 [&_select]:shadow-none [&_select]:focus-visible:border-avelliq-primary-green [&_select]:focus-visible:ring-1 [&_select]:focus-visible:ring-avelliq-primary-green [&_svg]:size-4.5 [&_svg]:text-avelliq-text-grey"
          >
            <NativeSelectOption value="" disabled>
              What do you need?
            </NativeSelectOption>
            {CARE_NEEDS.map((need) => (
              <NativeSelectOption key={need} value={need}>
                {need}
              </NativeSelectOption>
            ))}
          </NativeSelect>

          <div className="relative flex-1">
            <MapPin
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4.5 -translate-y-1/2 text-[#AAAAAA]"
            />
            <Input
              name="zipCode"
              aria-label="Zip code"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="Zip code"
              className={cn(
                FIELD_CLASS_NAME,
                "pr-3 pl-9 text-avelliq-text-primary placeholder:text-avelliq-text-grey"
              )}
            />
          </div>

          <ComingSoonButton
            variant="brand"
            aria-label="Search"
            className="h-auto rounded-sm p-3.5 hover:bg-emerald-800"
          >
            <span className="block text-sm md:hidden">Search</span>
            <Search aria-hidden="true" className="hidden size-4.5 md:block" />
          </ComingSoonButton>
        </form>
      </TabsContent>

      <TabsContent value="help">
        <div className="flex flex-col justify-between gap-3 text-sm md:flex-row md:items-start">
          <p className="text-start font-normal text-avelliq-text-grey">
            Build a profile, set your availability, and meet people who value your work.
          </p>
          <ComingSoonButton variant="brand" size="nav" withArrow className="gap-1">
            Explore Opportunities
          </ComingSoonButton>
        </div>
      </TabsContent>
    </Tabs>
  )
}
