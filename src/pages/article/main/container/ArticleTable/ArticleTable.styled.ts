import { Link } from "react-router-dom";
import styled from "styled-components";

import { Table } from "components";

export const CustomTable = styled(Table)`
  grid-template-columns: 1fr 3fr;
`;

export const GoToDetail = styled(Link)`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;

  :hover {
    background-color: ${({ theme }) => theme.color.point_01_opacity_10};
  }
`;
