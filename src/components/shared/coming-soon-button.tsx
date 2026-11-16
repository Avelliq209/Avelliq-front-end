"use client"

import { ArrowRight } from "lucide-react"
import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"

type ComingSoonButtonProps = Omit<ComponentProps<typeof Button>, "onClick"> & {
  withArrow?: boolean
}

function notifyComingSoon() {
  window.alert("Coming soon!")
}

export function ComingSoonButton({ withArrow = false, children, ...props }: ComingSoonButtonProps) {
  return (
    <Button onClick={notifyComingSoon} {...props}>
      {children}
      {withArrow && (
        <ArrowRight className="size-3 transition-transform group-hover/button:translate-x-0.5" />
      )}
    </Button>
  )
}
