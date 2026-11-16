import type { Metadata } from "next"
import { Inter, Montserrat, Playfair_Display } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-family" })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full font-sans antialiased",
        montserrat.variable,
        playfair.variable,
        inter.variable
      )}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  )
}
