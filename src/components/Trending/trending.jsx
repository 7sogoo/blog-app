import img from "../../assets/img1.png"
import imgg from "../../assets/img2.png"
import imggg from "../../assets/img3.png"
import imgggg from "../../assets/img4.png"
import { CardCreator } from "./trendingCard"

export const Trending = () => {
    return (
        <div className="px-[350px] py-[100px] flex flex-col gap-[30px]">
            <p className="text-2xl font-bold">Trending</p>
            <div className="flex gap-8">
                <CardCreator image={img} badge="Technology" titles="The Impact of Technology on the Workplace: How Technology is Changing"/>
                <CardCreator image={imgg} badge="Technology" titles="The Impact of Technology on the Workplace: How Technology is Changing"/>
                <CardCreator image={imggg} badge="Technology" titles="The Impact of Technology on the Workplace: How Technology is Changing"/>
                <CardCreator image={imgggg} badge="Technology" titles="The Impact of Technology on the Workplace: How Technology is Changing"/>
            </div>
        </div>
    )
} 