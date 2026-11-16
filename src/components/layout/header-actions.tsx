import { User } from "lucide-react"

import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { cn } from "@/lib/utils"

export function HeaderActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <ComingSoonButton variant="ghost" className="h-9 gap-0.75 px-2 text-sm text-ink-strong">
        <User aria-hidden="true" className="size-3.5" />
        Sign In
      </ComingSoonButton>
      <ComingSoonButton variant="outline" size="pill-lg">
        Join as a Professional
      </ComingSoonButton>
      <ComingSoonButton size="pill-lg">Find Care</ComingSoonButton>
    </div>
  )
}
