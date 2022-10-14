import React from "react";
import { useQuery } from "react-query";

import { useFetchArticle, useResetQuery } from "hooks/queries";
import { articleHeadColumnList } from "assets/static";
import * as S from "./ArticleTable.styled";

interface TableCellType {
  title: string;
  content: string;
}

const ArticleTable = () => {
  const { fetchArticle } = useFetchArticle();
  const query = useQuery(["articleStorage"], fetchArticle);

  useResetQuery(query);

  return (
    <S.CustomTable>
      <S.CustomTable.Thead columnList={articleHeadColumnList} />
      <S.CustomTable.Tbody>
        {Object.entries(query.data || []).map(([id, value]) => (
          <S.CustomTable.Trow key={id}>
            {articleHeadColumnList.map(({ key }, index) => {
              return (
                <S.CustomTable.Cell key={key}>
                  {index === 0 && <S.GoToDetail to={`/article/${id}`} />}
                  {value[key as keyof TableCellType]}
                </S.CustomTable.Cell>
              );
            })}
          </S.CustomTable.Trow>
        ))}
      </S.CustomTable.Tbody>
    </S.CustomTable>
  );
};

export default ArticleTable;
