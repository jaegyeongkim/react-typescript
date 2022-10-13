import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { ArticleStorageState } from "store/persist";
import { pseudoLatency } from "./pseudoLatency";

const useDeleteArticleDetail = () => {
  const [articleStorage, setArticleStorage] =
    useRecoilState(ArticleStorageState);

  const navigate = useNavigate();

  const deleteArticleDetail = async (id: string | number) => {
    await pseudoLatency().then(() => {
      const copy = { ...articleStorage };
      delete copy[id];
      setArticleStorage(copy);
      navigate(`/`);
    });
  };

  return { deleteArticleDetail };
};

export default useDeleteArticleDetail;
