import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogDetail = () => {
  const { id } = useParams();

  let [article, setArticle] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
      });
  }, []);

  const markup = { __html: article?.body_html };

  return (
    <div className="flex flex-col gap-5">
      {article && (
        <>
          <div className="flex flex-col gap-5">
            <p className="text-4xl font-semibold">{article.title || ""}</p>
            <div className="flex gap-6 items-center">
              <div className="flex gap-2 items-center">
                <img
                  className="size-7 rounded-full"
                  src={article.user.profile_image || ""}
                  alt="l"
                />
                <p>{article.user.name || ""}</p>
              </div>
              <p>{article.readable_publish_date || ""}</p>
            </div>
          </div>
          <img
            className="rounded-xl"
            src={article.social_image || ""}
            alt="ll"
          />
          <p className="text-[#3B3C4A]">{article.description || ""}</p>
          <div dangerouslySetInnerHTML={markup} />
        </>
      )}
    </div>
  );
};
