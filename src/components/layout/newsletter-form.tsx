"use client"

import type { FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  window.alert("Coming soon!")
}

export function NewsletterForm() {
  return (
    <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Enter your email address"
        className="h-auto rounded-[6px] border-[.5px] border-[#F1F3F7] px-4 py-3 text-sm font-normal text-avelliq-text-white shadow-[0px_1px_4px_0px_#19213D14] placeholder:text-[#6D758F] md:text-sm 2xl:py-4.5"
      />
      <Button
        type="submit"
        variant="brand"
        className="h-auto w-fit rounded-[6px] px-4.5 py-3 text-[13px] font-bold tracking-wider shadow-[0px_1px_4px_0px_#19213D14] 2xl:py-3.75 2xl:text-sm 2xl:font-semibold"
      >
        Subscribe
      </Button>
    </form>
  )
}
