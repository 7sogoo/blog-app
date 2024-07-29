import { useState } from "react";
import { PostCardCreator } from "./postCardCreator";
import { PostHeader } from "./postHeader";
import { useNavigate } from "react-router-dom";

export const Posts = ({ articles }) => {
  const [posts, setPosts] = useState(articles);

  const navigate = useNavigate()

  const handleClickPost = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div>
      <div>
        <div className="mb-10">
          <PostHeader posts={posts} setPosts={setPosts}/>
        </div>
        <div className="flex-wrap flex gap-[20px] max-w-[100%]">
          {articles.map((el, i) => (
            <PostCardCreator onClick={() => handleClickPost(el.id)} key={i} url={el.social_image} tag={el.tag} isShown={false} title={el.title} date={el.readable_publish_date} authorUrl={el.user.profile_image} author={el.user.name}/>
          ))}
        </div>
        <div className="flex items-center justify-center mt-20 mb-[10px]">
        </div>
      </div>
    </div>
  );
};
