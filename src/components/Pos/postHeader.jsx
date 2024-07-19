export const PostHeader = () => {
  return (
    <div className="flex flex-col gap-8">
        <p className="text-2xl font-bold">All Blog Post</p>
        <div className="flex justify-between">
          <div className="flex gap-5 text-[#495057]">
            <button className="text-[#D4A373]">All</button>
            <button>Design</button>
            <button>Travel</button>
            <button>Fashion</button>
            <button>Technology</button>
            <button>Branding</button>
          </div>
          <button>View All</button>
        </div>
    </div>
  );
};
