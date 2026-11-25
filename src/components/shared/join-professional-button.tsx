import Link from "next/link"
import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { ROUTES } from "@/config/site"

type JoinProfessionalButtonProps = Pick<
  ComponentProps<typeof Button>,
  "variant" | "size" | "className"
>

export function JoinProfessionalButton({
  variant = "outline",
  size = "pill-lg",
  className,
}: JoinProfessionalButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      nativeButton={false}
      render={<Link href={`${ROUTES.signUp}?role=professional`} />}
      className={className}
    >
      Join as a Professional
    </Button>
  )
}
