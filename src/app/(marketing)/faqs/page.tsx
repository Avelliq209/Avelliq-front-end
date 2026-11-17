import type { Metadata } from "next"

import { Section } from "@/components/shared/section"
import { FaqCategoryNav } from "@/features/faq/components/faq-category-nav"
import { FaqCategorySection } from "@/features/faq/components/faq-category-section"
import { FaqHeroSection } from "@/features/faq/components/faq-hero-section"
import { FAQ_CATEGORIES } from "@/features/faq/data/faqs"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find straightforward answers about Avelliq, safety, hiring, and joining our professional community.",
}

export default function FaqsPage() {
  return (
    <>
      <FaqHeroSection />
      <FaqCategoryNav categories={FAQ_CATEGORIES} />
      <Section className="flex flex-col gap-15">
        {FAQ_CATEGORIES.map((category, index) => (
          <FaqCategorySection key={category.id} category={category} defaultOpenFirst={index === 0} />
        ))}
      </Section>
    </>
  )
}
