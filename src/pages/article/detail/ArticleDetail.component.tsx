import React from "react";

import { CommonH1 } from "style/commonStyled";
import * as S from "./ArticleDetail.styled";

const ArticleDetail = () => {
  return (
    <>
      <CommonH1>Article Detail</CommonH1>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Label>제목</S.Label>
          <S.TitleBox></S.TitleBox>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <S.Label>내용</S.Label>
          <S.ContentBox></S.ContentBox>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default ArticleDetail;
