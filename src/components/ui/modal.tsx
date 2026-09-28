"use client"

interface ModalProps {
  modal: (val: boolean) => void;
  content: React.ReactNode;
}

const Modal = ({modal, content}: ModalProps) => {
  const closeOutterModal = () => modal(false);

  return (
    <div className="flex flex-col absolute z-40 h-screen w-full bg-[#0F4D4273] " onClick={closeOutterModal}>
      {content}
    </div>
  )
}

export default Modal