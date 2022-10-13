import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { ArticleStorageState } from "store/persist";
import { ArticleStorageDetailType } from "types/article";
import { pseudoLatency } from "./pseudoLatency";

const useCreateArticle = () => {
  const [articleStorage, setArticleStorage] =
    useRecoilState(ArticleStorageState);

  const navigate = useNavigate();

  const createArticle = async (data: ArticleStorageDetailType) => {
    const id =
      Number(
        Object.keys(articleStorage)[Object.keys(articleStorage).length - 1],
      ) + 1;

    await pseudoLatency().then(() => {
      setArticleStorage({
        ...(typeof articleStorage === "object" ? articleStorage : {}),
        [id]: { title: data.title, content: data.content },
      });
      navigate(`/article/detail?id=${id}`);
    });
  };

  return { createArticle };
};

export default useCreateArticle;
