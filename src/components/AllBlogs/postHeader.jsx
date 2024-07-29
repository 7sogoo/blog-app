import { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  isShow: "flex justify-between",
  isNotShow: "hidden"
}

export const PostHeader = ({isShown = true, posts, setPosts}) => {
  const arr = ["Design", "Travel", "Fashion", "Technology", "Branding"];
  const [myPosts,setMyPosts] = useState(posts);
  console.log(setMyPosts)

  const handleClick = (index) => {
    let filteredPosts = [...myPosts];

    filteredPosts = myPosts.filter(post => post.tag === arr[index]);   
    setPosts(filteredPosts);
  };

  const handleAllClick = () => {
    setPosts(myPosts)
  }


  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">All Blog Posts</p>
      <div className={isShown ? styles.isShow : styles.isNotShow}>
        <div className="flex gap-5 text-[#495057]">
          <button onClick={handleAllClick} className="text-[#D4A373]">
            All
          </button>
          {arr.map((el, index) => (
            <button onClick={() => handleClick(index)} key={index}>
              {el}
            </button>
          ))}
        </div>
        <Link to="/Blogs">View All</Link>
      </div>
    </div>
  );
};
