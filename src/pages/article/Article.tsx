import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PATH } from "utils/constants";
import ArticleTable from "./container/ArticleTable";

const Article = () => {
  return (
    <>
      <h1>Article</h1>
      <BtnWrapper>
        <GoToCreate to={PATH.articleCreate}>게시글 추가</GoToCreate>
      </BtnWrapper>
      <Wrapper>
        <ArticleTable />
      </Wrapper>
    </>
  );
};

export default Article;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GoToCreate = styled(Link)`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  border-radius: 5px;
`;
