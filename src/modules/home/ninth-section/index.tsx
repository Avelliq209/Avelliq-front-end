import { Pill } from "@/components/ui/pill"
import Image from "next/image"
import { AVATAR_COLORS, initials } from ".."
import { ShieldCheck, Star, Quote } from "@/assets"
import { useCallback, useState } from "react"


const API_TESTIMONIALS: Testimonial[] = [
  {
    id: "t0",
    quote:"Finding reliable childcare used to take so much time. Nestora made it easier to compare professionals and understand their experience before reaching out.",
    name: "Sarah Geal",
    role: "Medical Doctor",
    avatarUrl: "",
    rating: 5,
  },
  {
    id: "t1",
    quote:"Finding reliable childcare used to take so much time. Nestora made it easier to compare professionals and understand their experience before reaching out.",
    name: "Sarah Geal",
    role: "Medical Doctor",
    avatarUrl: "",
    rating: 4,
  },
  {
    id: "t2",
    quote: "I wanted someone who could work around my schedule. Being able to see availability upfront made the search much easier.",
    name: "Micheal Ward",
    role: "Managment Director",
    avatarUrl: "",
    rating: 5,
  },
  {
    id: "t3",
    quote: "Finding reliable childcare used to take so much time. Nestora made it easier to compare professionals and understand their experience before reaching out.",
    name: "Sarah Geal",
    role: "Medical Doctor",
    avatarUrl: "",
    rating: 1,
  },
  {
    id: "t4",
    quote: "Finding reliable childcare used to take so much time. Nestora made it easier to compare professionals and understand their experience before reaching out.",
    name: "Sarah Geal",
    role: "Medical Doctor",
    avatarUrl: "",
    rating: 2,
  },
]

const StarRow = ({ count }: { count: number }) => {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      <svg width={0} height={0} className="absolute">
        <linearGradient id="star" x1={"0%"} y1={"0%"} x2={"100%"} y2={"100%"}>
          <stop offset={"0%"} stopColor="#FFCD0F" />
          <stop offset={"100%"} stopColor="#FF6F47" />
        </linearGradient>
      </svg>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={20}
          className={[
            "w-5.5 h-5.5",
            i < count
              ? "fill-[url(#star)] stroke-0 text-amber-400"
              : "fill-transparent text-neutral-300"
          ].join(" ")}
        />
      ))}
    </div>
  )
}

const SlideCard = ({index, bg, item, onClick}: 
  SlideCardProps) => {
  return (
    <div className={`flex flex-col min-w-[300px] flex-1 gap-13.25 p-6 rounded-[16px] shadow-[0px_0px_4px_0px_#0000001F] cursor-default select-none ${(index===bg)? 'bg-avelliq-primary-green': 'bg-avelliq-text-white'}`}
    onClick={()=> onClick(index)}>
      <div className="flex justify-between items-center gap-4 h-8">
        <StarRow count={item.rating} />
        {(index===bg) && (
          <Quote width={32} height={'100%'} />
        )}
      </div>

      <div className="flex flex-col justify-between flex-1 space-y-8">
        <q className={`block text-sm 2xl:text-base leading-[157%] font-normal ${(index===bg)? 'text-avelliq-text-white': 'text-[#111827]'}`}>
          {item.quote}
        </q>
        <div className="flex items-center gap-2 pt-8 border-t-[.5px] border-t-[#FFFFFF26]">
          {(item.avatarUrl)?
            <Image
              src={item.avatarUrl}
              alt={item.name}
              className="w-10.5 h-10.5 rounded-full object-cover text-[8px]"
            /> :
            <span className={`inline-flex items-center text-sm justify-center shrink-0 w-10.5 h-10.5 rounded-full 
              ${ AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
            >{initials(item.name)}</span>
          }
          <div className="flex flex-col">
            <span className={`inline-flex text-sm 2xl:text-base font-medium ${(index===bg)? 'text-avelliq-text-white': 'text-black'}`}>
              {item.name}
            </span>
            <span className={`inline-flex text-xs ${(index===bg)? 'text-avelliq-bg-green-light': 'text-avelliq-primary-green'} font-normal`}>
              {item.role}
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}


const NinthSection = () => {
  const [bg, setBg] = useState<number>(1)
  const total = API_TESTIMONIALS.length

  const goTo = useCallback(
    (index: number) => {
      setBg(Math.max(0, Math.min(index, total - 1)));
    },
    [total]
  )

  return (
    <section className=" pl-10 py-17.5 lg:pl-17.5">
      <div className="flex flex-col">
        <div className=" pr-10 lg:pr-17.5 flex flex-col justify-center items-center text-center self-center max-w-[80%] lg:max-w-full">
          <Pill className=" py-2 px-3 2xl:py-3 2xl:px-4 text-[13px] lg:text-sm 2xl:text-base font-medium mb-5 text-avelliq-bg-green-dark bg-avelliq-bg-green-light border-avelliq-border-grey-light">
            <ShieldCheck size={18} strokeWidth={1.5} className="h-4 w-4 lg:h-4.5 lg:w-4.5 shrink-0" />
            User Testimonial
          </Pill>
          <h2 className="text-4xl md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-avelliq-primary-green tracking-wide mb-3.5">
            Trusted By Our Users
          </h2>
          <p className="text-sm 2xl:text-base font-normal text-avelliq-text-grey mb-10">
            See what families and households value when finding help through Avelliq.
          </p>
        </div>

        {/* Dots Slide Nav */}
        {total > 1 && (
          <div className=" pr-10 lg:pr-17.5 flex justify-end gap-2">
            {API_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={[
                  "h-2 rounded-full transition-all cursor-pointer",
                  i === bg
                    ? "w-10 bg-avelliq-primary-green"
                    : "w-4 bg-[#FFF4D6] hover:bg-avelliq-text-grey",
                ].join(" ")}
              />
            ))}
          </div>
        )}

        <div className="overflow-x-auto scrollbar-none">
          <div className="grid gap-5 pl-1 py-7 w-full" style={{gridTemplateColumns: `repeat(${API_TESTIMONIALS.length}, minmax(300px, 1fr))`}}>
            {API_TESTIMONIALS.map((testimonial, i) =>
              <SlideCard
                key={`avelliq-${i} ${testimonial.name}`}
                index={i}
                bg={bg}
                onClick={(num)=> setBg(num)}
                item={testimonial}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NinthSection