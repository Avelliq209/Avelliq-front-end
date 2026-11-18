import type { ReactNode } from "react"

import type { AuthTagline } from "../types"
import { AuthShowcase } from "./auth-showcase"

interface AuthShellProps {
  tagline: AuthTagline
  footer: ReactNode
  children: ReactNode
}

export function AuthShell({ tagline, footer, children }: AuthShellProps) {
  return (
    <div className="flex min-h-dvh w-full bg-background">
      <aside className="sticky top-0 hidden h-dvh w-1/2 shrink-0 items-center justify-center p-5 lg:flex">
        <AuthShowcase tagline={tagline} />
      </aside>
      <main className="flex min-h-dvh w-full min-w-0 flex-col justify-between gap-10 bg-white px-5 py-8 sm:px-10 sm:py-10 lg:w-1/2 lg:px-20">
        <div className="mx-auto flex w-full max-w-140 flex-col gap-6">{children}</div>
        <footer className="mx-auto w-full max-w-140">{footer}</footer>
      </main>
    </div>
  )
}
