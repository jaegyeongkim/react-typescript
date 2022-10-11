import styled, { css } from "styled-components";

const mixinWrapper = css`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const TitleWrapper = styled.div`
  ${mixinWrapper};
`;

export const ContentWrapper = styled.div`
  ${mixinWrapper};
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
