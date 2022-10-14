import { useRecoilState } from "recoil";

import { ArticleStorageState } from "store/persist";
import { ArticleStorageDetailType } from "types/article";
import { pseudoLatency } from "./pseudoLatency";

const useFetchArticle = () => {
  const [articleStorage] = useRecoilState(ArticleStorageState);

  const fetchArticle = async (page: number, pagePerData: number = 5) => {
    const first = (page - 1) * pagePerData;
    const last = page * pagePerData;
    const articleStorageKeys = Object.keys(articleStorage);
    const totalPage = Math.ceil(articleStorageKeys.length / pagePerData) || 0;

    const currentPageArticleStorage = articleStorageKeys.reduce(
      (
        acc: { [key: string]: ArticleStorageDetailType },
        key: string,
        index: number,
      ) => {
        if (index >= first && index < last) {
          return { ...acc, [key]: articleStorage[key] };
        } else {
          return acc;
        }
      },
      {},
    );

    return pseudoLatency().then(() => {
      return { data: currentPageArticleStorage, totalPage: totalPage };
    });
  };

  return { fetchArticle };
};

export default useFetchArticle;
