import React from "react";
import { Link, Outlet } from "react-router-dom";

import * as S from "./Layout.styled";

const Layout = () => {
  return (
    <S.Root>
      <S.Header>
        <Link to="/">Home</Link>
      </S.Header>
      <S.Section>
        <Outlet />
      </S.Section>
    </S.Root>
  );
};

export default Layout;
