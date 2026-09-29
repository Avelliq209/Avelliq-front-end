"use client"
import Link from "next/link"
import Logo from "../logo"
import { usePathname } from "next/navigation"
import { ChevronDown, MenuIcon } from "lucide-react"

const Header = () => {
  const pathname = usePathname()

  const nav = [
    {name:"Home", route:"/"},
    {name:"Services", route:"/services"},
    {name:"Trust & Safety", route:""},
    {name:"Resources", route:""},
    {name:"Contact Us", route:""},
    {name:"FAQs", route:""},
  ]

  return (
    <div className="flex items-center justify-between gap-6 w-full">
      <div className="flex text-sm 2xl:text-base font-medium gap-10">
        <Logo isFooter={false} />
        <div aria-hidden className="hidden xl:flex items-center gap-6">
          {nav.map((route, index) => (
            (index===3) ?
            <button key={route.name} className="flex items-center gap-1.25 2xl:gap-2 outline-none cursor-pointer"
            onClick={()=> alert('coming soon!')}>
              {route.name}
              <ChevronDown size={20} className="h-5 w-5" />
            </button> :
            <Link 
              key={route.name} 
              href={route.route}
              className={`flex gap-3 items-center rounded-lg outline-none ring-0 ${pathname===route.route? ' text-avelliq-primary-green': ' text-avelliq-text-black'}`}
            >
              <span>{route.name}</span>
            </Link>
          ))}                
        </div>
      </div>
      <div aria-hidden className="hidden xl:flex items-center gap-6">
        <button className="text-sm font-medium text-avelliq-text-primary hover:bg-avelliq-bg-btn-light border-[.3px] hover:border-avelliq-border-brown-light shadow-[0px_0px_4px_0px_#0000000F] rounded-sm py-2 px-4 2xl:py-4 2xl:px-8 cursor-pointer"
        onClick={()=> alert('coming soon!')}>
          Sign In
        </button>
        <button className="text-sm font-medium text-avelliq-text-primary hover:bg-avelliq-bg-btn-light border-[.3px] hover:border-avelliq-border-brown-light shadow-[0px_0px_4px_0px_#0000000F] rounded-sm py-2 px-4 2xl:py-4 2xl:px-8 cursor-pointer"
        onClick={()=> alert('coming soon!')}>
          Join as a Professional
        </button>
        <button className="text-sm font-medium text-avelliq-text-white bg-avelliq-primary-green rounded-sm py-2 px-4 2xl:py-4 2xl:px-8 cursor-pointer"
        onClick={()=> alert('coming soon!')}>
          Find Care
        </button>
      </div>
      <div className="flex xl:hidden">
        <button className="text-sm font-medium text-avelliq-text-white bg-avelliq-primary-green rounded-sm py-1.5 px-3 md:px-3.5 lg:py-2 lg:px-4 cursor-pointer"
        onClick={()=> alert('coming soon!')}>
          <MenuIcon size={24} className="w-4.5 sm:w-5 md:w-6" />
        </button>
      </div>
    </div>
  )
}

export default Header