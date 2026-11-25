"use server"

import { z } from "zod"

import { contactFormSchema } from "./schema"

export type ContactFormResult =
  | { ok: true }
  | { ok: false; fieldErrors: Partial<Record<string, string[]>> }

export async function sendContactMessage(values: unknown): Promise<ContactFormResult> {
  const parsed = contactFormSchema.safeParse(values)
  if (!parsed.success) {
    return { ok: false, fieldErrors: z.flattenError(parsed.error).fieldErrors }
  }

  return { ok: true }
}
