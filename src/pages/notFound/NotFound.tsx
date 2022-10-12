import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CommonH1 } from "style/commonStyled";
import { mixinBtn } from "style/mixin/button";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGotoHome = () => {
    navigate("/");
  };
  return (
    <section>
      <CommonH1>NotFound</CommonH1>
      <GotoBtn type="button" onClick={handleGotoHome}>
        홈으로 가기
      </GotoBtn>
    </section>
  );
};

export default NotFound;

const GotoBtn = styled.button`
  ${mixinBtn}
`;
