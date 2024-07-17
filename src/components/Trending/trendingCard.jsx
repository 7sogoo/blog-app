import { Tag } from "../tag"

export const CardCreator = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}} className="bg-cover bg-center relative w-[25%] h-[32vh] rounded-xl">
            <div className="absolute bottom-7 px-6 gap-4 flex flex-col">
                <Tag/>
                <p className="text-white font-semibold text-lg">{props.titles}</p>
            </div>
        </div>  
    )
}