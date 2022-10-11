import React from "react";
import { useForm } from "react-hook-form";

import { CancelBtn } from "components";
import { CommonH1 } from "style/commonStyled";
import * as S from "../create/ArticleCreate.styled";

interface FormValues {
  title: string;
  content: string;
}

const ArticleUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <CommonH1>Article Update</CommonH1>
      <S.FormWrapper
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <S.TitleWrapper>
          <S.Label data-error={true}>제목</S.Label>
          <S.TitleInput
            id="title"
            type="text"
            placeholder="제목을 입력하세요."
            aria-invalid={errors.title ? "true" : "false"}
            data-error={errors.title ? true : false}
            {...register("title", { required: "제목은 필수 값입니다." })}
          />
          {errors.title && (
            <S.Alert role="alert">{errors.title.message}</S.Alert>
          )}
        </S.TitleWrapper>
        <S.ContentWrapper>
          <S.Label>내용</S.Label>
          <S.ContentTextarea
            id="content"
            placeholder="내용을 입력하세요."
            aria-invalid={errors.content ? "true" : "false"}
            data-error={errors.content ? true : false}
            {...register("content", { required: "내용은 필수 값입니다." })}
          />
          {errors.content && (
            <S.Alert role="alert">{errors.content.message}</S.Alert>
          )}
        </S.ContentWrapper>
        <S.BtnWrapper>
          <CancelBtn>취소</CancelBtn>
          <S.SubmitBtn type="submit">수정</S.SubmitBtn>
        </S.BtnWrapper>
      </S.FormWrapper>
    </>
  );
};

export default ArticleUpdate;
