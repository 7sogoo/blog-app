import { Link } from "react-router-dom";

export const PostHeader = (props) => {
  const arr = ["Design", "Travel", "Fashion", "Technology", "Branding"];
  const myPosts = props.posts;

  const handleClick = (index) => {
    let filteredPosts = [...myPosts];

    filteredPosts = myPosts.filter(post => post.tag === arr[index]);   
    props.setPosts(filteredPosts);
  };

  const handleAllClick = () => {
    props.setPosts(myPosts)
  }

  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">All Blog Posts</p>
      <div className="flex justify-between">
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
