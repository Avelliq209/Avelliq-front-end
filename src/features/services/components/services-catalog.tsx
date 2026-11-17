"use client"

import { useDeferredValue, useMemo, useState, type ReactNode } from "react"

import { Reveal } from "@/components/motion/reveal"
import { CirclePattern } from "@/components/shared/circle-pattern"
import { HeroTexture } from "@/components/shared/hero-texture"
import { Section } from "@/components/shared/section"

import { filterServices } from "../lib/filter-services"
import type { ServiceCategory } from "../types"
import { ServiceGrid } from "./service-grid"
import { ServiceSearch } from "./service-search"
import { ServicesEmptyState } from "./services-empty-state"

interface ServicesCatalogProps {
  services: ServiceCategory[]
  heading: ReactNode
}

export function ServicesCatalog({ services, heading }: ServicesCatalogProps) {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  const results = useMemo(() => filterServices(services, deferredQuery), [services, deferredQuery])
  const isFiltered = deferredQuery.trim().length > 0

  return (
    <>
      <Section className="relative isolate flex flex-col items-center gap-8 overflow-hidden pb-10 lg:pb-15">
        <HeroTexture />
        {heading}
        <Reveal y={24} delay={0.3} className="w-full max-w-97">
          <ServiceSearch value={query} onChange={setQuery} />
        </Reveal>
      </Section>

      <Section aria-label="All services" className="relative isolate overflow-hidden pt-10 lg:pt-17.5">
        <CirclePattern className="-top-121 -left-57.5 -z-10" />
        <p aria-live="polite" className="sr-only">
          {isFiltered ? `${results.length} of ${services.length} services shown` : ""}
        </p>
        {results.length > 0 ? (
          <ServiceGrid services={results} />
        ) : (
          <ServicesEmptyState query={deferredQuery} onClear={() => setQuery("")} />
        )}
      </Section>
    </>
  )
}
