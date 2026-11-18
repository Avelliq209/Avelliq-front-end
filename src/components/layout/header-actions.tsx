import { User } from "lucide-react"
import Link from "next/link"

import { Magnetic } from "@/components/motion/magnetic"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { JoinProfessionalButton } from "@/components/shared/join-professional-button"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/config/site"
import { cn } from "@/lib/utils"

export function HeaderActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <Button
        variant="ghost"
        nativeButton={false}
        render={<Link href={ROUTES.signIn} />}
        className="h-9 gap-0.75 px-2 text-sm text-ink-strong"
      >
        <User aria-hidden="true" className="size-3.5" />
        Sign In
      </Button>
      <JoinProfessionalButton />
      <Magnetic>
        <ComingSoonButton size="pill-lg">Find Care</ComingSoonButton>
      </Magnetic>
    </div>
  )
}
