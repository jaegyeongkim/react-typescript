import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Pagination } from "components";
import { useFetchArticle, useResetQuery } from "hooks/queries";
import { CommonH1 } from "style/commonStyled";
import ArticleTable from "./container/ArticleTable/ArticleTable";
import * as S from "./Article.styled";

const Article = () => {
  const { fetchArticle } = useFetchArticle();
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const query = useQuery(["articleStorage"], () => fetchArticle(currentPage));

  useResetQuery(query);

  useEffect(() => {
    query.refetch();
  }, [searchParams.get("page")]);

  return (
    <>
      <CommonH1>Article Main</CommonH1>

      <S.BtnWrapper>
        <S.GoToCreate to="/article/create">게시글 추가</S.GoToCreate>
      </S.BtnWrapper>
      <S.Wrapper>
        <ArticleTable data={query.data?.data} />
      </S.Wrapper>
      <Pagination
        pageInfo={{
          currentPage: currentPage,
          totalPages: query.data?.totalPage!,
        }}
      />
    </>
  );
};

export default Article;
