"use client"

import { Search } from "lucide-react"
import { useId } from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface ServiceSearchProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function ServiceSearch({ value, onChange, className }: ServiceSearchProps) {
  const inputId = useId()

  return (
    <div role="search" className={cn("relative w-full", className)}>
      <label htmlFor={inputId} className="sr-only">
        Search services
      </label>
      <Search
        aria-hidden="true"
        strokeWidth={1.5}
        className="pointer-events-none absolute top-1/2 left-2 size-6 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        id={inputId}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search..."
        autoComplete="off"
        className="h-10 rounded-full border-grey-400 bg-secondary pr-4 pl-10 font-inter text-base text-ink-strong shadow-[0px_2px_2px_0px_rgba(0,0,0,0.04)] placeholder:text-grey-500 md:text-xs"
      />
    </div>
  )
}
