import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

import { ArticleStorageState } from "store/persist";
import { pseudoLatency } from "./pseudoLatency";

const useFetchArticleDetail = () => {
  const [articleStorage] = useRecoilState(ArticleStorageState);
  const params = useParams();

  const id = params.id || "";

  const fetchArticleDetail = async () => {
    return pseudoLatency().then(() => {
      return { detail: articleStorage[id], id };
    });
  };

  return { fetchArticleDetail };
};

export default useFetchArticleDetail;
