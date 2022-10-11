import React from "react";
import styled, { css } from "styled-components";

import { CommonH1 } from "style/commonStyled";

const ArticleCreate = () => {
  return (
    <>
      <CommonH1>Article Create</CommonH1>
      <FormWrapper>
        <TitleWrapper>
          <Label>제목</Label>
          <input />
        </TitleWrapper>
        <ContentWrapper>
          <Label>내용</Label>
          <textarea />
        </ContentWrapper>
        <BtnWrapper>
          <CancelBtn type="button">취소</CancelBtn>
          <SubmitBtn type="submit">등록</SubmitBtn>
        </BtnWrapper>
      </FormWrapper>
    </>
  );
};

export default ArticleCreate;

const mixinWrapper = css`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.form`
  ${mixinWrapper};
  row-gap: 1rem;
`;

const TitleWrapper = styled.div`
  ${mixinWrapper};
  & > input {
    height: 2rem;
    padding: 0 10px;
  }
`;

const ContentWrapper = styled.div`
  ${mixinWrapper};
  & > textarea {
    height: 10rem;
    padding: 10px;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  :after {
    content: "*";
    color: red;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 0.5rem;
`;

const mixinBtn = css`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  border-radius: 5px;
`;

const CancelBtn = styled.button`
  ${mixinBtn};
`;

const SubmitBtn = styled.button`
  ${mixinBtn};
`;
