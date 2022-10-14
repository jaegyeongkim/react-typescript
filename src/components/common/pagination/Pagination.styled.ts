import styled from "styled-components";

import { ArrowIcon } from "assets/icon/index";

export const Root = styled.div`
  display: flex;
  height: 72px;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  border-top: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

export const ArrowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 2px;

  svg {
    fill: ${({ theme }) => theme.color.gray_05};
  }

  :hover {
    background-color: ${({ theme }) => theme.color.gray_03};

    svg {
      fill: ${({ theme }) => theme.color.gray_06};
    }
  }
`;

export const ArrowLeftIcon = styled(ArrowIcon)`
  transform: rotate(90deg);
`;

export const ArrowRightIcon = styled(ArrowIcon)`
  transform: rotate(-90deg);
`;

export const NumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > :last-child {
    border-right: 0;
  }
`;

interface NumBtnProps {
  isCurrentPage: boolean;
}

export const NumBtn = styled.button<NumBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  color: ${({ theme, isCurrentPage }) =>
    isCurrentPage ? theme.color.black : theme.color.gray_50};
  background-color: ${({ theme, isCurrentPage }) =>
    isCurrentPage ? theme.color.gray_10 : theme.color.white};

  :hover {
    background-color: ${({ theme }) => theme.color.gray_30};
  }
`;
