import React from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { CommonH1 } from "style/commonStyled";

interface FormValues {
  title: string;
  content: string;
}

const ArticleCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <CommonH1>Article Create</CommonH1>
      <FormWrapper
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <TitleWrapper>
          <Label data-error={true}>제목</Label>
          <TitleInput
            id="title"
            type="text"
            placeholder="제목을 입력하세요."
            aria-invalid={errors.title ? "true" : "false"}
            data-error={errors.title ? true : false}
            {...register("title", { required: "제목은 필수 값입니다." })}
          />
          {errors.title && <Alert role="alert">{errors.title.message}</Alert>}
        </TitleWrapper>
        <ContentWrapper>
          <Label>내용</Label>
          <ContentTextarea
            id="content"
            placeholder="내용을 입력하세요."
            aria-invalid={errors.content ? "true" : "false"}
            data-error={errors.content ? true : false}
            {...register("content", { required: "내용은 필수 값입니다." })}
          />
          {errors.content && (
            <Alert role="alert">{errors.content.message}</Alert>
          )}
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
`;

const ContentWrapper = styled.div`
  ${mixinWrapper};
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  :after {
    content: "*";
    color: ${({ theme }) => theme.color.error_01};
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

const Alert = styled.span`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.error_01};
`;

const TitleInput = styled.input`
  height: 2rem;
  padding: 0 10px;

  &[data-error="true"] {
    border: 1px solid ${({ theme }) => theme.color.error_01};
  }
`;

const ContentTextarea = styled.textarea`
  height: 10rem;
  padding: 10px;

  &[data-error="true"] {
    border: 1px solid ${({ theme }) => theme.color.error_01};
  }
`;
