import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { SectionDescription } from "@/components/shared/section-description"
import { SectionTitle } from "@/components/shared/section-title"
import { cn } from "@/lib/utils"

interface ServicesHeadingProps {
  title: string
  className?: string
  as?: "h1" | "h2"
}

export function ServicesHeading({ title, className, as = "h2" }: ServicesHeadingProps) {
  return (
    <div className={cn("mx-auto flex max-w-138 flex-col items-center gap-5 text-center", className)}>
      <EyebrowBadge>Care For Your Whole Life</EyebrowBadge>
      <div className="flex flex-col gap-3.5">
        <SectionTitle as={as}>{title}</SectionTitle>
        <SectionDescription>
          One trusted place to find the support your household needs today and as life changes.
        </SectionDescription>
      </div>
    </div>
  )
}
