import { useRecoilState } from "recoil";

import { ArticleStorageState } from "store/persist";
import { pseudoLatency } from "./pseudoLatency";

const useFetchArticle = () => {
  const [articleStorage] = useRecoilState(ArticleStorageState);

  const fetchArticle = async () => {
    return pseudoLatency().then(() => {
      return articleStorage;
    });
  };

  return { fetchArticle };
};

export default useFetchArticle;
