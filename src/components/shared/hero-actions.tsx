import { Magnetic } from "@/components/motion/magnetic"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { JoinProfessionalButton } from "@/components/shared/join-professional-button"

export function HeroActions() {
  return (
    <div data-hero-fade className="flex flex-wrap items-center gap-3">
      <Magnetic>
        <ComingSoonButton size="pill" withArrow>
          Find Care Near You
        </ComingSoonButton>
      </Magnetic>
      <Magnetic>
        <JoinProfessionalButton />
      </Magnetic>
    </div>
  )
}
