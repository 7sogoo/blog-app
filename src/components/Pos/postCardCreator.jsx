import { Tag } from "../tag";

export const PostCardCreator = (props) => {
  return (
    <div className="flex flex-col gap-6 max-w-[32.2%] p-4 border-[1px] border-[#E8E8EA] rounded-xl">
      <img
        className="max-w-[100%] min-h-[26vh] max-h-[26vh] object-cover object-center rounded-xl"
        src={props.url} alt="asd"
      ></img>
      <div className="p-3 gap-4 flex flex-col">
        <div className="flex flex-col gap-4">
          <Tag isPrimary={false} tag={props.tag} />
          <p className="text-2xl font-semibold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
        </div>
        <p className="text-[#97989F]">August 20, 2022</p>
      </div>
    </div>
  );
};
