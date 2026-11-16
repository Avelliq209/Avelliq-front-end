import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { SectionTitle } from "@/components/shared/section-title"
import { cn } from "@/lib/utils"

interface ServicesHeadingProps {
  title: string
  className?: string
  as?: "h1" | "h2"
}

export function ServicesHeading({ title, className, as = "h2" }: ServicesHeadingProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <EyebrowBadge>Care For Your Whole Life</EyebrowBadge>

      <div className={cn("max-w-[90%] space-y-3.5 text-center md:max-w-[80%]", className)}>
        <SectionTitle as={as} className="text-avelliq-bg-green-dark">
          {title}
        </SectionTitle>
        <p className="text-base font-normal text-avelliq-text-grey">
          One trusted place to find the support your household needs today and as life changes.
        </p>
      </div>
    </div>
  )
}
