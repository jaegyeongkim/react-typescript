import React from "react";

import { CommonH1 } from "style/commonStyled";
import ArticleTable from "./container/ArticleTable/ArticleTable";
import * as S from "./Article.styled";

const Article = () => {
  return (
    <>
      <CommonH1>Article Main</CommonH1>
      <S.BtnWrapper>
        <S.GoToCreate to="/article/create">게시글 추가</S.GoToCreate>
      </S.BtnWrapper>
      <S.Wrapper>
        <ArticleTable />
      </S.Wrapper>
    </>
  );
};

export default Article;
