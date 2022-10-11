import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CommonH1 } from "style/commonStyled";
import ArticleTable from "./container/ArticleTable";

const Article = () => {
  return (
    <>
      <CommonH1>Article Main</CommonH1>
      <BtnWrapper>
        <GoToCreate to="/article/create">게시글 추가</GoToCreate>
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
