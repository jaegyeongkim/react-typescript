import { useRecoilState } from "recoil";
import { useSearchParams } from "react-router-dom";

import { ArticleStorageState } from "store/persist";
import { pseudoLatency } from "./pseudoLatency";

const useFetchArticleDetail = () => {
  const [articleStorage] = useRecoilState(ArticleStorageState);
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id") || 0;

  const fetchArticleDetail = async () => {
    return pseudoLatency().then(() => {
      return { detail: articleStorage[id], id };
    });
  };

  return { fetchArticleDetail };
};

export default useFetchArticleDetail;
