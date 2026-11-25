import Link from "next/link"

import type { AuthMode, AuthRole } from "../types"
import { authHref } from "../utils"

const PROMPTS: Record<AuthMode, { question: string; action: string; target: AuthMode }> = {
  "sign-in": { question: "Don't have an account?", action: "Sign Up", target: "sign-up" },
  "sign-up": { question: "Already have an account?", action: "Sign In", target: "sign-in" },
}

export function AuthSwitchPrompt({ mode, role }: { mode: AuthMode; role: AuthRole }) {
  const { question, action, target } = PROMPTS[mode]

  return (
    <p className="text-center text-sm leading-5 text-muted-foreground">
      {question}{" "}
      <Link
        href={authHref(target, role)}
        className="rounded-sm font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {action}
      </Link>
    </p>
  )
}
