import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { CtaBanner } from "@/components/layout/cta-banner"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { IntroOverlay } from "@/components/motion/intro-overlay"
import { SmoothScroll } from "@/components/motion/smooth-scroll"

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <SmoothScroll>
      <IntroOverlay />
      <div className="relative flex flex-col">
        <AnnouncementBar />
        <SiteHeader />
        <main className="relative">{children}</main>
        <CtaBanner />
        <SiteFooter />
      </div>
    </SmoothScroll>
  )
}
