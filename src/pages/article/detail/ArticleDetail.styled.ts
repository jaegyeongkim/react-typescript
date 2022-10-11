import styled, { css } from "styled-components";

import { mixinBtn } from "style/mixin/button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 0.5rem;

  & > button,
  a {
    ${mixinBtn};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const mixinBox = css`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.gray_01};
`;

export const TitleBox = styled.div`
  ${mixinBox};
  height: 2rem;
`;
export const ContentBox = styled.div`
  ${mixinBox};
  min-height: 10rem;
`;
