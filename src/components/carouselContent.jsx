export const CarouselContent = (props) => {
    return (
        <div>
            <div style={{backgroundImage: `url(${props.bgPhoto})`}} className="bg-cover bg-center w-[100%] h-[60vh] relative rounded-xl">
                <div className="bg-white absolute left-[11px] bottom-[13px] p-10 rounded-xl">
                    <div className="flex flex-col gap-6 min-w-[520px]">
                        <p className="bg-[#4B6BFB] text-white rounded-md px-[10px] py-[4px] w-fit">{props.badge}</p>
                        <p className="text-4xl font-semibold max-w-[400px]">{props.title}</p>
                        <p className="text-[#97989F]">{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}