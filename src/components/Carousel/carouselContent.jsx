import { Tag } from "../tag"

export const CarouselContent = ({ onClick, bgPhoto, title, date}) => {
    return (
        <div>
            <div onClick={onClick} style={{backgroundImage: `url(${bgPhoto})`}} className="bg-cover bg-center w-[100%] h-[60vh] relative rounded-xl">
                <div className="bg-white absolute left-[11px] bottom-[13px] p-10 rounded-xl">
                    <div className="flex flex-col gap-6 min-w-[520px]">
                        <Tag/>
                        <p className="text-4xl font-semibold max-w-[400px]">{title}</p>
                        <p className="text-[#97989F]">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

