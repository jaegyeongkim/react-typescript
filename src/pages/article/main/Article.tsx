import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

import { useFetchArticle, useResetQuery } from "hooks/queries";
import { CommonH1 } from "style/commonStyled";
import ArticleTable from "./container/ArticleTable/ArticleTable";
import * as S from "./Article.styled";

const Article = () => {
  const { fetchArticle } = useFetchArticle();
  const [searchParams] = useSearchParams();
  const query = useQuery(["articleStorage"], () =>
    fetchArticle(Number(searchParams.get("page")) || 1),
  );

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
