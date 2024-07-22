import { useState } from "react";
import { Link } from "react-router-dom";

export const PostHeader = (props) => {
  const arr = ["Design", "Travel", "Fashion", "Technology", "Branding"];

  const [datas, setDatas] = useState(arr);

  const handleClick = (index) => {
    console.log(index);
    const newArr = props.posts.filter(post => post.tag == arr[index])
    // const newArr = arr.filter((el,i) => i === index)
    console.log(newArr);
    props.setPosts(newArr)
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">All Blog Post</p>
      <div className="flex justify-between">
        <div className="flex gap-5 text-[#495057]">
          <button className="text-[#D4A373]">All</button>
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
