import { Tag } from "../tag"

export const CardCreator = ({onClick, url, titles}) => {
    return(
        <div className="relative" onClick={onClick}>
            <div className="w-[100%] h-[30vh] bg-[#00000060] rounded-xl absolute z-20"></div>
            <img alt="asd" className="absolute z-1 object-cover object-center relative w-[100%] h-[30vh] rounded-xl" src={url}/>
            <div className="absolute z-30 bottom-7 px-6 gap-4 flex flex-col">
                <Tag/>
                <p className="text-white font-semibold text-lg">{titles}</p>
            </div>
        </div>
    )
}