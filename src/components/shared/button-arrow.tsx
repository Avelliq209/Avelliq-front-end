import { ArrowRight } from "lucide-react"

export function ButtonArrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-3 transition-transform group-hover/button:translate-x-0.5"
    />
  )
}
