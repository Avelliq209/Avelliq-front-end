"use client"

import { Eye, EyeOff } from "lucide-react"
import { useState, type ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { TextInput } from "./text-input"

type PasswordInputProps = Omit<ComponentProps<typeof TextInput>, "type"> & {
  revealable?: boolean
}

export function PasswordInput({ revealable = true, className, ...props }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false)

  if (!revealable) return <TextInput type="password" className={className} {...props} />

  const Icon = isVisible ? Eye : EyeOff

  return (
    <div className="relative">
      <TextInput type={isVisible ? "text" : "password"} className={cn("pr-11", className)} {...props} />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
        aria-controls={props.id}
        onClick={() => setIsVisible((visible) => !visible)}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-primary"
      >
        <Icon aria-hidden="true" className="size-4" />
      </Button>
    </div>
  )
}
