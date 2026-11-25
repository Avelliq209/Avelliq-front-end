import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

import footerTexture from "@/assets/images/textures/footer-linen.jpg"
import { RevealText } from "@/components/motion/reveal-text"
import { FOOTER_NAV, LEGAL_NAV, SOCIAL_LINKS, siteConfig } from "@/config/site"

import { Logo } from "./logo"
import { NewsletterForm } from "./newsletter-form"

function Separator() {
  return (
    <span aria-hidden="true" className="text-mint">
      |
    </span>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#E1E4ED] bg-primary px-5 pt-12 sm:px-10 lg:px-17.5 lg:pt-18">
      <Image
        src={footerTexture}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.02]"
      />

      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:justify-between">
          <div className="flex max-w-76 flex-col gap-6">
            <Logo inverted />
            <p className="text-base leading-[1.4] text-white">
              Connect with independent professionals for childcare, senior care, housekeeping, pet
              care, and everyday household support.
            </p>
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-base leading-[1.4] font-medium text-white">
                Get the latest news and updates
              </h2>
              <NewsletterForm />
            </div>
          </div>

          {FOOTER_NAV.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-8">
              <h2 className="font-heading text-base leading-[1.4] font-semibold text-white">
                {group.title}
              </h2>
              <ul className="flex flex-col gap-6">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-base leading-[1.4] break-all text-mint transition-colors hover:text-gold"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t-[0.5px] border-[#E1E4ED] py-6 md:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 font-inter text-sm leading-5.5 text-footer-muted lg:text-base">
            <span>
              Copyright © {new Date().getFullYear()} {siteConfig.name}
            </span>
            <Separator />
            <span>All Rights Reserved</span>
            {LEGAL_NAV.map((item) => (
              <Fragment key={item.title}>
                <Separator />
                <Link
                  href={item.href}
                  className="text-white/59 underline transition-colors hover:text-gold"
                >
                  {item.title}
                </Link>
              </Fragment>
            ))}
          </p>

          <ul className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <li key={label}>
                <Link href={href} aria-label={label} className="block transition-opacity hover:opacity-80">
                  <Image src={icon} alt="" width={24} height={24} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mx-5 -mb-[3vw] text-center font-heading text-[24vw] leading-[0.85] font-medium text-white/6 select-none sm:-mx-10 lg:-mx-17.5"
      >
        <RevealText>{siteConfig.name}</RevealText>
      </p>
    </footer>
  )
}
