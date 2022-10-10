import React from "react";
import styled from "styled-components";

import ArticleTable from "./container/ArticleTable";

const Home = () => {
  return (
    <>
      <h1>Article</h1>
      <BtnWrapper>
        <AddBtn type="button">게시글 추가</AddBtn>
      </BtnWrapper>
      <Wrapper>
        <ArticleTable />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddBtn = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  border-radius: 5px;
`;
