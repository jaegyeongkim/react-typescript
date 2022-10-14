import React from "react";
import { useQuery } from "react-query";

import { useFetchArticle, useResetQuery } from "hooks/queries";
import { CommonH1 } from "style/commonStyled";
import ArticleTable from "./container/ArticleTable/ArticleTable";
import * as S from "./Article.styled";

const Article = () => {
  const { fetchArticle } = useFetchArticle();
  const query = useQuery(["articleStorage"], fetchArticle);

  useResetQuery(query);

  return (
    <>
      <CommonH1>Article Main</CommonH1>
      <S.BtnWrapper>
        <S.GoToCreate to="/article/create">게시글 추가</S.GoToCreate>
      </S.BtnWrapper>
      <S.Wrapper>
        <ArticleTable data={query.data} />
      </S.Wrapper>
    </>
  );
};

export default Article;
