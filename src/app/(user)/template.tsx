import Header from "@/components/header"

const Template = ({ children }: 
{ children: React.ReactNode }) => {

  return (
    <div className="flex flex-col relative justify-between">
      <div className="flex flex-col top-0 sticky w-full px-17.5 py-6 border-b-[.5px] border-b-avelliq-border-brown-light bg-avelliq-text-white z-20">
        <Header />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default Template