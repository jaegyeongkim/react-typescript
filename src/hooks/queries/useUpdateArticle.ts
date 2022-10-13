import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { ArticleStorageState } from "store/persist";
import { ArticleStorageDetailType } from "types/article";
import { pseudoLatency } from "./pseudoLatency";

const useUpdateArticle = () => {
  const [articleStorage, setArticleStorage] =
    useRecoilState(ArticleStorageState);

  const navigate = useNavigate();

  const updateArticle = async ({
    id,
    data,
  }: {
    id: string | number;
    data: ArticleStorageDetailType;
  }) => {
    await pseudoLatency().then(() => {
      setArticleStorage({
        ...(typeof articleStorage === "object" ? articleStorage : {}),
        [id]: { title: data.title, content: data.content },
      });
      navigate(`/article/detail?id=${id}`);
    });
  };

  return { updateArticle };
};

export default useUpdateArticle;
