"use client"
import Header from "@/components/header"
import Modal from "@/components/ui/modal"
import { useState } from "react"

const Template = ({ children }: 
{ children: React.ReactNode }) => {
  const [isModal, setModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<React.ReactNode>([])

  return (
    <div className="flex flex-col relative justify-between">
      {isModal && (<>
        <Modal modal={(val)=>setModal(val)} content={modalContent} />
      </>)}
      <div className="flex flex-col top-0 sticky w-full px-10 lg:px-17.5 py-6 border-b-[.5px] border-b-avelliq-border-brown-light bg-avelliq-text-white z-20">
        <Header />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default Template