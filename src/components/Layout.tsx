import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Root>
      <Header>
        <Link to="/">Home</Link>
      </Header>
      <Section>
        <Outlet />
      </Section>
    </Root>
  );
};

export default Layout;

const Root = styled.main`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px 0;
`;

const Header = styled.header`
  width: 80%;
  display: flex;
  justify-content: start;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  width: 80%;
`;
