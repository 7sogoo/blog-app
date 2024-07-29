import { useNavigate } from "react-router-dom"
import { CardCreator } from "./trendingCard"

export const Trending = ({ articles }) => {

    const navigate = useNavigate()

    const handleClickPost = (id) => {
        navigate(`/${id}`)
        console.log(id)
      }


    return (
        <div className="flex flex-col gap-[30px]">
            <p className="text-2xl font-bold">Trending</p>
            <div className="flex gap-5">
                {articles.map(el => (
                    <CardCreator onClick={() => handleClickPost(el.id)} url={el.social_image} titles={el.title}/>
                ))}
            </div>
        </div>
    )
} 