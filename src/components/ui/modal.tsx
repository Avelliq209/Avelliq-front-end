"use client"

interface ModalProps {
  modal: (val: boolean) => void;
  content: React.ReactNode;
}

const Modal = ({modal, content}: ModalProps) => {
  const closeOutterModal = () => modal(false);

  return (
    <div role='button' className="flex absolute z-40 h-screen w-full bg-[#0F4D4273] " onClick={closeOutterModal}>
      {content}
    </div>
  )
}

export default Modal