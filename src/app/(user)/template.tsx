"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"

const Template = ({ children }: 
{ children: React.ReactNode }) => {

  return (
    <div className="flex flex-col relative justify-between">
      <div className="flex flex-col top-0 sticky w-full px-5 py-5 sm:px-10 lg:px-17.5 sm:py-6 border-b-[.5px] border-b-avelliq-border-brown-light bg-avelliq-text-white z-20">
        <Header />
      </div>

      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Template