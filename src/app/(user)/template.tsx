"use client"
import Header from "@/components/header"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Modal from "@/components/ui/modal"
import ModalQueryProvider from "@/lib/modal-queryprovider"
import { useState } from "react"

const Template = ({ children }: 
{ children: React.ReactNode }) => {
  const [isModal, setModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<React.ReactNode>([])

  return (
    <div className="flex flex-col relative justify-between">
      {/* {isModal && (<>
        <Modal modal={(val)=> setModal(val)} content={modalContent} />
      </>)} */}
      
      <div className="flex flex-col top-0 sticky w-full px-5 py-5 sm:px-10 lg:px-17.5 sm:py-6 border-b-[.5px] border-b-avelliq-border-brown-light bg-avelliq-text-white z-20">
        <Header />
      </div>

      <ModalQueryProvider setModal={(val) => {setModal(val)}} contentModal={(val) => setModalContent(val)}>
        <div className="relative">
          {children}
        </div>
      </ModalQueryProvider>
    </div>
  )
}

export default Template