import Image from "next/image"

import googleIcon from "@/assets/icons/google.svg"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { FieldSeparator } from "@/components/ui/field"

export function AuthSocialSection() {
  return (
    <div className="flex flex-col gap-6">
      <FieldSeparator className="my-0 text-xs text-ink-faint *:data-[slot=field-separator-content]:bg-white *:data-[slot=field-separator-content]:px-4">
        or
      </FieldSeparator>
      <ComingSoonButton
        variant="outline"
        className="h-11 w-full gap-2.5 rounded-[6px] border border-stroke bg-white text-sm font-semibold text-ink-strong hover:bg-neutral-50"
      >
        <Image src={googleIcon} alt="" width={24} height={24} />
        Continue with Google
      </ComingSoonButton>
    </div>
  )
}
