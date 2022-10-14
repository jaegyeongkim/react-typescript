import styled, { css } from "styled-components";

export const Root = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Trow = styled.tr`
  position: relative;
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
  :nth-child(5) {
    border-bottom: none;
  }
`;

export const Thead = styled.thead`
  & > ${Trow} {
    height: 40px;
  }
  background-color: ${({ theme }) => theme.color.gray_00};
`;

export const Tbody = styled.tbody`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 250px;
  max-height: 250px;

  & > ${Trow} {
    min-height: 50px;
  }
`;

export const mixinCell = css`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-right: 1px solid ${({ theme }) => theme.color.gray_02};
  :last-child {
    border-right: none;
  }
`;

export const Th = styled.th`
  ${mixinCell};
`;

export const Td = styled.td`
  ${mixinCell};
`;
