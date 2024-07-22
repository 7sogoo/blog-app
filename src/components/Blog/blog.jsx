

export const Blog = (props) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                <p className="text-4xl font-semibold">{props.title}</p>
                <div className="flex gap-6 items-center">
                    <div className="flex gap-2 items-center">
                        <img className="size-7" src={props.authorPicture}/>
                        <p>{props.authorName}</p>
                    </div>
                    <p>{props.date}</p>
                </div>
            </div>
            <img className="rounded-xl" src={props.image}/>
            <p className="text-[#3B3C4A]">{props.article}</p>
            <p className="text-xl font-semibold">{props.title2}</p>
            <p className="text-[#3B3C4A]">{props.article2}</p>
            <p className="text-xl font-semibold">{props.title3}</p>
            <p className="text-[#3B3C4A]">{props.article3}</p>
        </div>
    )
}