import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full font-sans antialiased", inter.variable, geistMono.variable)}>
      <body className="flex min-h-screen flex-col bg-avelliq-bg-btn-light selection:bg-avelliq-primary-green selection:text-avelliq-text-white">
        {children}
      </body>
    </html>
  )
}
