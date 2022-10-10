import React from "react";
import styled from "styled-components";

import ArticleTable from "./container/ArticleTable";

const Home = () => {
  return (
    <>
      <h1>Article</h1>
      <Body>
        <ArticleTable />
      </Body>
    </>
  );
};

export default Home;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;
