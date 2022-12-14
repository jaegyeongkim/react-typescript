import React from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

import { useNotFound } from "hooks";
import {
  useFetchArticleDetail,
  useDeleteArticleDetail,
  useResetQuery,
} from "hooks/queries";
import { CommonH1 } from "style/commonStyled";
import * as S from "./ArticleDetail.styled";

const ArticleDetail = () => {
  const { fetchArticleDetail } = useFetchArticleDetail();
  const { deleteArticleDetail } = useDeleteArticleDetail();

  const query = useQuery(["articleStorageDetail"], fetchArticleDetail);
  const { mutate } = useMutation(deleteArticleDetail);

  const handleDelete = () => {
    mutate(query?.data?.id!);
  };

  useNotFound(query.data?.detail, query.isLoading);
  useResetQuery(query);

  return (
    <>
      <CommonH1>Article Detail</CommonH1>
      <S.Wrapper>
        <S.BtnWrapper>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
          <Link to={`/article/update/${query?.data?.id}`}>수정</Link>
        </S.BtnWrapper>
        <S.TitleWrapper>
          <S.Label>제목</S.Label>
          <S.TitleBox>{query?.data?.detail?.title}</S.TitleBox>
        </S.TitleWrapper>
        <S.TitleWrapper>
          <S.Label>내용</S.Label>
          <S.ContentBox>{query?.data?.detail?.content}</S.ContentBox>
        </S.TitleWrapper>
      </S.Wrapper>
    </>
  );
};

export default ArticleDetail;
