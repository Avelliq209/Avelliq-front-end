import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { ANNOUNCEMENT } from "@/config/site"

export function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="bg-primary text-white">
      <div className="mx-auto flex min-h-25 max-w-300 items-center justify-between gap-6 px-5 py-4 sm:px-10 lg:py-0 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-7.5">
            <div aria-hidden="true" className="hidden h-25 w-40.75 shrink-0 bg-support lg:block" />
            <p className="font-heading text-lg leading-[1.2] font-medium whitespace-nowrap sm:text-2xl lg:text-4xl">
              {ANNOUNCEMENT.title}
            </p>
            <p className="hidden max-w-110 text-lg leading-normal font-medium capitalize lg:block">
              {ANNOUNCEMENT.message}
            </p>
          </div>
          <div aria-hidden="true" className="hidden h-25 w-1 shrink-0 bg-support lg:block" />
        </div>
        <ComingSoonButton variant="outline" size="pill-sm" className="shrink-0 border-stroke px-4 sm:px-8">
          {ANNOUNCEMENT.ctaLabel}
        </ComingSoonButton>
      </div>
    </aside>
  )
}
