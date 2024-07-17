import { useState } from "react"
import bgPhoto from "../../assets/bgPhoto.jpeg"
import bgPhoto2 from "../../assets/img1.png"
import bgPhoto3 from "../../assets/img2.png"
import { CarouselContent } from "./carouselContent"

const SvgNext = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>
const SvgBack = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/></svg>

export const Carousel = () => {

    const [current,setCurrent] = useState(0) 
    const [content, setContent] = useState(
[        {
        backgroundImage : bgPhoto,
        badge: "Technology",
        title: "Grid system for better Design User Interface",
        date: "August 20, 2022",
    },
    {
        backgroundImage : bgPhoto2,
        badge: "Ad",
        title: "Grid system for better Design User Interface",
        date: "September 20, 2023",
    },
    {
        backgroundImage : bgPhoto3,
        badge: "Ad",
        title: "Grid system for better Design User Interface",
        date: "September 20, 2023",
    }]
)

    const leftClick = () => {
        if(current > 0){
            setCurrent(current - 1)
        }
        else if(current === 0){
            setCurrent(content.length - 1)
        }
    }

    const rightClick = () => {
        if(current < content.length - 1){
            setCurrent(current + 1)
        }
        else if (current === content.length - 1){
            setCurrent(0)
        }
    }

    return( 
        <div className="px-[350px] py-[100px]">
            <div className="relative">
                <CarouselContent bgPhoto={content[current].backgroundImage}  badge={content[current].badge} title={content[current].title} date={content[current].date}/>
                <div className="absolute right-0 mt-2">
                    <button onClick={leftClick}>{SvgBack}</button>
                    <button onClick={rightClick}>{SvgNext}</button>
                </div>
            </div>
        </div>
    )
}