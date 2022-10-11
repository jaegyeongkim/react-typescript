import { mixinBtn } from "style/mixin/button";
import styled, { css } from "styled-components";

const mixinWrapper = css`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  ${mixinWrapper};
  row-gap: 1rem;
`;

export const TitleWrapper = styled.div`
  ${mixinWrapper};
`;

export const ContentWrapper = styled.div`
  ${mixinWrapper};
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  :after {
    content: "*";
    color: ${({ theme }) => theme.color.error_01};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 0.5rem;
`;

export const CancelBtn = styled.button`
  ${mixinBtn};
`;

export const SubmitBtn = styled.button`
  ${mixinBtn};
  border: 1px solid ${({ theme }) => theme.color.point_01};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.point_01};
`;

export const Alert = styled.span`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.error_01};
`;

export const TitleInput = styled.input`
  height: 2rem;
  padding: 0 10px;

  &[data-error="true"] {
    border: 1px solid ${({ theme }) => theme.color.error_01};
  }
`;

export const ContentTextarea = styled.textarea`
  height: 10rem;
  padding: 10px;

  &[data-error="true"] {
    border: 1px solid ${({ theme }) => theme.color.error_01};
  }
`;
