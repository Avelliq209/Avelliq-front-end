import Link from "next/link"

import { cn } from "@/lib/utils"

import { AUTH_ROLE_TABS } from "../data/content"
import type { AuthMode, AuthRole } from "../types"
import { authHref } from "../utils"

interface AuthRoleTabsProps {
  mode: AuthMode
  activeRole: AuthRole
}

const TAB_CLASS =
  "flex min-h-9.25 flex-1 items-center justify-center rounded-3xl px-2 py-2 text-center text-xs leading-tight font-semibold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:px-3 sm:text-sm"

export function AuthRoleTabs({ mode, activeRole }: AuthRoleTabsProps) {
  return (
    <nav aria-label="Account type" className="flex gap-1 rounded-3xl bg-neutral-100 p-1">
      {AUTH_ROLE_TABS.map(({ role, label }) => {
        const isActive = role === activeRole
        return (
          <Link
            key={role}
            href={authHref(mode, role)}
            replace
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              TAB_CLASS,
              isActive ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
            )}
          >
            {label}
          </Link>
        )
      })}
      <span
        aria-disabled="true"
        title="Coming soon"
        className={cn(TAB_CLASS, "cursor-not-allowed text-muted-foreground/60")}
      >
        Care Agency
        <span className="sr-only"> (coming soon)</span>
      </span>
    </nav>
  )
}
