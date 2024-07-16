import { useState } from "react"
import bgPhoto from "../assets/bgPhoto.jpeg"
import { CarouselContent } from "./carouselContent"

const SvgNext = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>
const SvgBack = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#696A75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/></svg>

export const Carusel = () => {

    const [content,setContent] = useState([ ])

    const handlerClick = () => {
        setContent()
        console.log(content)
    }

    const handlerClicker = () => {

    }

    return( 
        <div className="px-[350px] py-[100px]">
            <div className="relative">
                <CarouselContent bgPhoto={bgPhoto} badge="Technology" title="Grid system for better Design User Interface" date="August 20, 2022"/>
                <div className="absolute right-0">
                    <button onClick={handlerClicker}>{SvgBack}</button>
                    <button onClick={handlerClick}>{SvgNext}</button>
                </div>
            </div>
        </div>
    )
}