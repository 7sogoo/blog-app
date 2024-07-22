import { Tag } from "../tag"

export const CarouselContent = (props) => {
    return (
        <div>
            <div style={{backgroundImage: `url(${props.bgPhoto})`}} className="bg-cover bg-center w-[100%] h-[70vh] relative rounded-xl">
                <div className="bg-white absolute left-[11px] bottom-[13px] p-10 rounded-xl">
                    <div className="flex flex-col gap-6 min-w-[520px]">
                        <Tag/>
                        <p className="text-4xl font-semibold max-w-[400px]">{props.title}</p>
                        <p className="text-[#97989F]">{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

