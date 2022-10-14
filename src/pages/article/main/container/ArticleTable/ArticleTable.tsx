import React from "react";

import { ArticleStorageDetailType, ArticleStorageType } from "types/article";
import { articleHeadColumnList } from "assets/static";
import * as S from "./ArticleTable.styled";

const ArticleTable = ({ data }: { data: ArticleStorageType | undefined }) => {
  return (
    <S.CustomTable>
      <S.CustomTable.Thead columnList={articleHeadColumnList} />
      <S.CustomTable.Tbody>
        {Object.entries(data || []).map(([id, value]) => (
          <S.CustomTable.Trow key={id}>
            {articleHeadColumnList.map(({ key }, index) => {
              return (
                <S.CustomTable.Cell key={key}>
                  {index === 0 && <S.GoToDetail to={`/article/${id}`} />}
                  {value[key as keyof ArticleStorageDetailType]}
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
