import { Link } from "react-router-dom";
import styled from "styled-components";

import { mixinBtn } from "style/mixin/button";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GoToCreate = styled(Link)`
  ${mixinBtn}
  margin-bottom: 10px;
`;
