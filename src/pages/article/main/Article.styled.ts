import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GoToCreate = styled(Link)`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  border-radius: 5px;
`;
