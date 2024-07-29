import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { PostHeader } from "../AllBlogs/postHeader"
import { PostCardCreator } from "../AllBlogs/postCardCreator"

export const Blogs = () => {

  const navigate = useNavigate()

    let [articles, setArticles] = useState([])
    const [posts, setPosts] = useState(articles);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`).then((response)=> {
        setArticles(response.data)
      })
    },[])

    const handleClickPost = (id) => {
      navigate(`/${id}`)
      console.log(id)
    }

    return (
        <>
    <div>
      <div>
        <div className="mb-10">
          <PostHeader posts={posts} setPosts={setPosts}/>
        </div>
        <div className="flex-wrap flex gap-[20px] max-w-[100%]">
          {articles.map((el, i) => (
            <PostCardCreator onClick={() => handleClickPost(el.id)} key={i} url={el.social_image} tag={el.tag} isShown={true} title={el.title} date={el.readable_publish_date} authorUrl={el.user.profile_image} author={el.user.name}/>
          ))}
        </div>
        <div className="flex items-center justify-center mt-20 mb-[10px]">
        </div>
      </div>
    </div>
        </>
    )
}