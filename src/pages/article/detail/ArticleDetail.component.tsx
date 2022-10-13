import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

// import { useNotFound } from "hooks";
import { useFetchArticleDetail } from "hooks/queries";
import { CommonH1 } from "style/commonStyled";
import * as S from "./ArticleDetail.styled";

const ArticleDetail = () => {
  const { fetchArticleDetail } = useFetchArticleDetail();
  const query = useQuery(["articleStorageDetail"], fetchArticleDetail);

  // const navigate = useNavigate();

  // useNotFound(detail);

  // const handleDelete = () => {
  //   const copy = { ...articleStorage };
  //   delete copy[id];
  //   setArticleStorage(copy);
  //   navigate(`/`);
  // };

  return (
    <>
      <CommonH1>Article Detail</CommonH1>
      <S.Wrapper>
        <S.BtnWrapper>
          {/* <button type="button" onClick={handleDelete}>
            삭제
          </button> */}
          <Link to={`/article/update?id=${query?.data?.id}`}>수정</Link>
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
