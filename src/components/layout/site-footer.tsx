import Link from "next/link"

import { FOOTER_NAV, LEGAL_NAV, SOCIAL_LINKS, siteConfig } from "@/config/site"

import { Logo } from "./logo"
import { NewsletterForm } from "./newsletter-form"

export function SiteFooter() {
  return (
    <footer className="space-y-16 border-t border-[#E1E4ED] bg-avelliq-bg-green-dark px-5 pt-10 select-none sm:px-10 sm:pt-17.5 lg:px-17.5">
      <div className="grid grid-cols-2 gap-8 md:gap-10 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo inverted />
          <p className="text-sm font-normal text-avelliq-text-white 2xl:text-base">
            Connect with independent professionals for childcare, senior care, housekeeping, pet
            care, and everyday household support.
          </p>
          <div>
            <h2 className="mb-4 text-sm font-medium text-avelliq-text-white 2xl:text-base">
              Get the latest news and updates
            </h2>
            <NewsletterForm />
          </div>
        </div>

        {FOOTER_NAV.map((group) => (
          <nav
            key={group.title}
            aria-label={group.title}
            className="flex flex-col items-start lg:items-end"
          >
            <div className="flex flex-col gap-3 md:gap-5.25">
              <h2 className="mt-2 mb-4.5 text-base font-semibold tracking-wider text-avelliq-text-white md:mt-3 md:mb-1">
                {group.title}
              </h2>
              {group.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="w-fit text-sm font-normal break-all text-avelliq-bg-green-light hover:text-avelliq-hover lg:text-[15px] 2xl:text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-5 border-t border-[#E1E4ED] py-6 text-xs font-normal tracking-wide md:flex-row lg:text-[13px] 2xl:text-base 2xl:tracking-normal">
        <div className="order-2 flex gap-2 divide-x-[1.5px] divide-avelliq-bg-green-light text-[#B4B9C9] md:order-1">
          <span className="pr-2">
            Copyright © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span className="pr-2">All Rights Reserved</span>
          {LEGAL_NAV.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="pr-2 text-[#FFFFFF96] underline underline-offset-3 hover:text-avelliq-hover"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <ul className="order-1 flex items-center gap-4 md:order-2">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                className="flex size-6 rounded-[4px] bg-avelliq-text-white p-1.5"
              >
                <Icon className="size-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
