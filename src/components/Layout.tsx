import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Root>
      <Section>
        <Outlet />
      </Section>
    </Root>
  );
};

export default Layout;

const Root = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px 0;
`;

const Section = styled.section`
  width: 80%;
`;
