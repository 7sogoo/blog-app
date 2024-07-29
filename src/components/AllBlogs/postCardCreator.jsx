import { Tag } from "../tag";

const styles = {
  isShow: "flex gap-3 items-center",
  isNotShow: "hidden"
}

export const PostCardCreator = ({isShown = true, url, tag, authorUrl, author, title, date, onClick }) => {
  return (
    <div className="flex flex-col gap-6 w-[32.2%] p-4 border-[1px] border-[#E8E8EA] rounded-xl" onClick={onClick}>
      <img
        className="max-w-[100%] min-h-[26vh] max-h-[26vh] object-cover object-center rounded-xl"
        src={url} alt="unluck2"
      ></img>
      <div className="p-3 gap-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Tag isPrimary={false} tag={tag} />
          <p className="text-2xl font-semibold">
            {title}
          </p>
        </div>
        <div className="text-[#97989F] flex gap-5 items-center">
              <div className={isShown ? styles.isShow : styles.isNotShow}>
                <img className="size-9 rounded-full" src={authorUrl} alt="photos"/>
                <p>{author}</p>
              </div>
          <p>{date}</p>
        </div>
      </div>
    </div> 
  );
};
