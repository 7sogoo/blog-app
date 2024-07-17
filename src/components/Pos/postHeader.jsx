export const PostHeader = () => {
  return (
    <div className="flex flex-col gap-8">
        <p className="text-2xl font-bold">All Blog Post</p>
        <div className="flex justify-between">
          <div className="flex gap-5 text-[#495057]">
            <p className="text-[#D4A373]">All</p>
            <p>Design</p>
            <p>Travel</p>
            <p>Fashion</p>
            <p>Technology</p>
            <p>Branding</p>
          </div>
          <p>View All</p>
        </div>
    </div>
  );
};
