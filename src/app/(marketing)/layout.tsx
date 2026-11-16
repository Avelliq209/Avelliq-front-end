import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { CtaBanner } from "@/components/layout/cta-banner"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex flex-col">
      <AnnouncementBar />
      <SiteHeader />
      <main className="relative">{children}</main>
      <CtaBanner />
      <SiteFooter />
    </div>
  )
}
