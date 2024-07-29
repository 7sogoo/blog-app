import { CardCreator } from "./trendingCard"

export const Trending = ({ articles }) => {


    return (
        <div className="flex flex-col gap-[30px]">
            <p className="text-2xl font-bold">Trending</p>
            <div className="flex gap-5">
                {articles.map(el => (
                    <CardCreator url={el.social_image} titles={el.title}/>
                ))}
            </div>
        </div>
    )
} 