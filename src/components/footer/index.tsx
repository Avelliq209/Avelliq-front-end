import { Facebook, Instagram, Linkedin, tenderCare, Twitter, Youtube } from "@/assets"
import Image from "next/image"
import ButtonNav from "../ui/button-nav"
import Logo from "../logo"
import Link from "next/link"

const FooterLinks = [
  {
    title: "About us",
    item: [
      {title: "Home", url: ""},
      {title: "Services", url: ""},
      {title: "How Its Works", url: ""},
      {title: "Resources", url: ""},
      {title: "Contact Us", url: ""},
      {title: "FAQs", url: ""},
    ],
  },
  {
    title: "Services",
    item: [
      {title: "Childcare", url: ""},
      {title: "Housekeeping", url: ""},
      {title: "House Sitters", url: ""},
      {title: "Senior Care", url: ""},
      {title: "Concierge", url: ""},
      {title: "Pet Care", url: ""},
    ],
  },
  {
    title: "Contact us",
    item: [
      {title: "avelliqsupport@gmail.com", url: "mailto:avelliqsupport@gmail.com"},
      {title: "+224 7879 88 99", url: "tel:+22478798899"},
      {title: "Help center", url: ""},
      {title: "Terms and conditions", url: ""},
    ],
  },
]

const FooterIcons = [
  <Facebook className="w-full h-full" />, 
  <Twitter className="w-full h-full" />, 
  <Instagram className="w-full h-full" />, 
  <Linkedin className="w-full h-full" />, 
  <Youtube className="w-full h-full" />, 
]


const Footer = () => {
  
  return (
    <>
      {/* Professional care giving Ads */}
      <div className=" p-17.5 pb-30">
        <div className="flex items-center justify-center gap-5 bg-avelliq-bg-green-light px-20 rounded-[16px]">
          <div className="flex flex-col justify-center items-start text-start py-8 max-w-[50%]">
            <h2 className="text-5xl leading-[120%] font-semibold text-avelliq-primary-green tracking-wide mb-3.5">
              Find care that feels right
            </h2>
            <p className="text-sm 2xl:text-base font-normal text-avelliq-text-grey max-w-[80%] mb-8">
              Whether you need care for your family or personal support  for daily lifestyle, or help with your pets, Avelliq makes it easier to find professionals who fit your needs.
            </p>
            <div className="flex items-center gap-3">
              <ButtonNav
                name={"Find Care Near You"}
                isArror={true}
                className=" bg-avelliq-primary-green text-avelliq-text-white"
                onClick={()=> alert("coming soon!")}
              /> 
              <ButtonNav
                name={"Join as a Professional"}
                isArror={false}
                className=" text-avelliq-text-primary bg-avelliq-bg-btn-light hover:bg-slate-50 transition-colors shadow-[0px_0px_4px_0px_#0000000F]"
                onClick={()=> alert("coming soon!")}
              /> 
            </div>
          </div>

          <Image
            src={tenderCare}
            alt="a lady with tender care heart"
            width={469}
            height={385}
            loading="eager"
            className=" h-auto w-117.25 2xl:w-150 object-cover"
          />
        </div>
      </div>

      {/* Footer navigations */}
      <footer className="px-17.5 pt-17.5 border-t border-[#E1E4ED] bg-avelliq-bg-green-dark space-y-16 select-none">
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-6">
            <Logo isFooter={true} />
            <h6 className=" text-sm 2xl:text-base font-normal text-avelliq-text-white">
              Connect with independent professionals for childcare, senior care, housekeeping, pet care, and everyday household support.
            </h6>
            <div>
              <h5 className="mb-4 text-avelliq-text-white text-sm 2xl:text-base font-medium">
                Get the latest news and updates
              </h5>
              <form className="space-y-3" onSubmit={(e)=> e.preventDefault()}>
                <input type="email" name="email" id="email" placeholder="Enter your email address"
                  className=" py-3 2xl:py-4.5 px-4 border-[.5px] rounded-[6px] focus:outline-1.5 text-avelliq-text-white shadow-[0px_1px_4px_0px_#19213D14] border-[#F1F3F7] font-normal text-sm placeholder:text-[#6D758F]"
                />
                <button type="submit" className="rounded-[6px] bg-avelliq-primary-green shadow-[0px_1px_4px_0px_#19213D14] text-avelliq-text-white text-[13px] font-bold tracking-wider 2xl:text-sm 2xl:font-semibold px-4.5 py-3 2xl:py-3.75 cursor-pointer"
                onClick={()=> alert('coming soon!')}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {FooterLinks.map((item, index) => (
            <div key={index} className="flex flex-col items-end">
              <div className="flex flex-col gap-5.25">
                <h5 className=" tracking-wider font-semibold text-avelliq-text-white text-base mb-4">
                  {item.title}
                </h5>
                {item.item.map(val => (
                  <Link key={val.title} href={val.url} className="text-[.75rem] sm:text-sm lg:text-[15px] 2xl:text-base font-normal w-fit text-avelliq-bg-green-light hover:text-avelliq-hover ">
                    {val.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-5 border-t border-[#E1E4ED] py-6 text-[13px] tracking-wide 2xl:text-base 2xl:tracking-normal font-normal">
          <div className="flex divide-x-[1.5px] divide-avelliq-bg-green-light text-[#B4B9C9] gap-2">
            <span className="pr-2">Copyright © 2026 Avelliq</span>
            <span className="pr-2">All Rights Reserved</span>
            <Link href={""} className=" hover:text-avelliq-hover text-[#FFFFFF96] underline underline-offset-3 pr-2">
              Terms and Conditions
            </Link>
            <Link href={""} className=" hover:text-avelliq-hover text-[#FFFFFF96] underline underline-offset-3 pr-2">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {FooterIcons.map((FooterIcon, i) => 
              <div key={i} className="flex bg-avelliq-text-white rounded-[4px] cursor-pointer h-6 w-6 p-1.5"
              onClick={()=> alert('coming soon!')}>
                {FooterIcon}
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer