import Link from "next/link"

import { PRIVACY_HREF, TERMS_HREF } from "../data/content"

const LINK_CLASS = "font-medium text-primary underline-offset-4 hover:underline"

export function TermsAgreementLabel({ suffix }: { suffix?: string }) {
  return (
    <span className="text-sm leading-5 text-muted-foreground">
      I agree to Avelliq&apos;s{" "}
      <Link href={TERMS_HREF} className={LINK_CLASS}>
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link href={PRIVACY_HREF} className={LINK_CLASS}>
        Privacy Policy
      </Link>
      {suffix}
    </span>
  )
}
