import { z } from "zod"

import { PHONE_PATTERN } from "@/lib/patterns"

import { CONTACT_TOPICS } from "./data/content"

const TOPIC_VALUES = new Set<string>(CONTACT_TOPICS.map((topic) => topic.value))

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().pipe(z.email("Enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || PHONE_PATTERN.test(value), "Enter a valid phone number."),
  topic: z.string().refine((value) => TOPIC_VALUES.has(value), "Choose a topic."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters).")
    .max(2000, "Keep your message under 2000 characters."),
  consent: z.boolean().refine(Boolean, "Please accept the privacy policy to continue."),
})

export type ContactFormValues = z.input<typeof contactFormSchema>

export const CONTACT_FORM_DEFAULTS: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
  consent: false,
}
