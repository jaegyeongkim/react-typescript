import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import { CommonH1 } from "style/commonStyled";
import * as S from "./ArticleDetail.styled";

const ArticleDetail = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <CommonH1>Article Detail</CommonH1>
      <S.Wrapper>
        <S.BtnWrapper>
          <button type="button">삭제</button>
          <Link to={`/article/update?id=${searchParams.get("id")}`}>수정</Link>
        </S.BtnWrapper>
        <S.TitleWrapper>
          <S.Label>제목</S.Label>
          <S.TitleBox></S.TitleBox>
        </S.TitleWrapper>
        <S.TitleWrapper>
          <S.Label>내용</S.Label>
          <S.ContentBox></S.ContentBox>
        </S.TitleWrapper>
      </S.Wrapper>
    </>
  );
};

export default ArticleDetail;
