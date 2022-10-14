import { useRecoilState } from "recoil";

import { ArticleStorageState } from "store/persist";
import { ArticleStorageDetailType } from "types/article";
import { PAGE_PER_DATA_COUNT } from "utils/constants";
import { pseudoLatency } from "./pseudoLatency";

const useFetchArticle = () => {
  const [articleStorage] = useRecoilState(ArticleStorageState);

  const fetchArticle = async (page: number) => {
    const first = (page - 1) * PAGE_PER_DATA_COUNT;
    const last = page * PAGE_PER_DATA_COUNT;
    const articleStorageKeys = Object.keys(articleStorage);
    const totalPage =
      Math.ceil(articleStorageKeys.length / PAGE_PER_DATA_COUNT) || 0;

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
