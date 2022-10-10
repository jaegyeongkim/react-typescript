import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Root>
      <Outlet />
    </Root>
  );
};

export default Layout;

const Root = styled.main`
  width: 100%;
  height: 100vh;
`;
