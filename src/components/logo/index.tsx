
const Logo = ({isFooter}: {isFooter: boolean}) => {
  return (
    <div className="flex items-center gap-2.5 flex-nowrap bg-transparent select-none text-[18px] sm:text-[20px] md:text-[22px] 2xl:text-2xl font-semibold ">
      <div className="flex items-center justify-center h-9.25 w-9.25 bg-avelliq-primary-green text-avelliq-text-white  py-1 px-2.25 rounded-[5px]">A</div>
      <span className={` text-nowrap whitespace-nowrap ${isFooter? 'text-avelliq-text-white': 'text-avelliq-primary-green'}`}>Avelliq</span>
    </div>
  )
}

export default Logo