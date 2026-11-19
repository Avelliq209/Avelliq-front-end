"use client"

import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"

import { ButtonArrow } from "./button-arrow"

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
      {withArrow && <ButtonArrow />}
    </Button>
  )
}
