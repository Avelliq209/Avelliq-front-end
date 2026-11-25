"use client"

import { MapPin, Search } from "lucide-react"
import type { FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { ALL_AREAS, AREA_OPTIONS } from "../data/options"
import { useSyncedDraft } from "../hooks/use-synced-draft"
import type { CareCriteria } from "../types"
import { CareDatePicker } from "./care-date-picker"
import { SEARCH_FIELD_CLASS } from "./search-field"

interface CareSearchFormProps {
  criteria: CareCriteria
  onSearch: (criteria: CareCriteria) => void
}

export function CareSearchForm({ criteria, onSearch }: CareSearchFormProps) {
  const { draft, updateDraft } = useSyncedDraft(criteria)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(draft)
  }

  return (
    <form
      role="search"
      aria-label="Find professionals"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3 @xl:grid-cols-2 @xl:gap-4 @5xl:grid-cols-[minmax(0,1fr)_236px_260px_auto] @[72rem]:grid-cols-[minmax(0,1fr)_236px_292px_auto] @5xl:items-center"
    >
      <InputGroup className={SEARCH_FIELD_CLASS}>
        <InputGroupAddon className="pr-0 pl-5">
          <Search aria-hidden="true" strokeWidth={1.5} className="size-6 text-ink-body" />
        </InputGroupAddon>
        <InputGroupInput
          type="search"
          name="query"
          aria-label="Name or specialty"
          placeholder="Name or specialty..."
          autoComplete="off"
          value={draft.query}
          onChange={(event) => updateDraft({ query: event.target.value })}
          className="h-full px-0! text-base placeholder:text-muted-foreground md:text-base"
        />
      </InputGroup>

      <Select
        items={AREA_OPTIONS}
        value={draft.area}
        onValueChange={(area) => updateDraft({ area: area ?? ALL_AREAS })}
      >
        <SelectTrigger aria-label="Location" className={SEARCH_FIELD_CLASS}>
          <MapPin aria-hidden="true" strokeWidth={1.5} className="size-6 text-ink-body" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          {AREA_OPTIONS.map(({ value, label }) => (
            <SelectItem key={value} value={value} className="py-2">
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <CareDatePicker value={draft.date} onChange={(date) => updateDraft({ date })} />

      <Button type="submit" size="pill-lg" className="h-14 font-normal @5xl:h-12">
        Search
      </Button>
    </form>
  )
}
