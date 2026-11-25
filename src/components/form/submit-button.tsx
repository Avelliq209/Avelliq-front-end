import { LoaderCircle } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

import { Button } from "@/components/ui/button"

type SubmitButtonProps = Omit<ComponentProps<typeof Button>, "type"> & {
  isLoading: boolean
  loadingLabel: ReactNode
}

export function SubmitButton({
  isLoading,
  loadingLabel,
  disabled,
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={isLoading || disabled} aria-busy={isLoading} {...props}>
      {isLoading ? (
        <>
          <LoaderCircle aria-hidden="true" className="size-3.5 animate-spin" />
          {loadingLabel}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
